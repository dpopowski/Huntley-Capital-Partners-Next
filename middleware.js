import { NextResponse } from 'next/server';
import { wallConfig, wallConfigured, isOpenPath, cookieValueFor, sameValue, fetchWallState, WALL_COOKIE, PASSWORD_PAGE, SIGN_IN_ROUTE } from './utils/site-wall';

var __tqWallState = { on: wallConfig.defaultOn, version: wallConfig.defaultVersion, checkedAt: 0 };
var __tqWallCookie = { version: null, value: null };
var __TQ_WALL_RECHECK_MS = 60000;

function __tqWallReadCookie(request, name) {
  try {
    var cookie = request.cookies.get(name);
    if (!cookie) return null;
    return typeof cookie === 'string' ? cookie : cookie.value || null;
  } catch (e) {
    return null;
  }
}

async function __tqWallRefresh() {
  try {
    var next = await fetchWallState();
    __tqWallState.on = next.on;
    __tqWallState.version = next.version;
  } catch (e) {
    // The platform could not be reached or answered nonsense: keep the last
    // known state rather than opening or closing the site on a blip.
  }
}

export async function __tqWallGate(request, event) {
  try {
    if (!wallConfigured()) return null;
    var pathname = request.nextUrl.pathname;
    if (isOpenPath(pathname)) return null;

    var now = Date.now();
    if (now - __tqWallState.checkedAt > __TQ_WALL_RECHECK_MS) {
      __tqWallState.checkedAt = now;
      var refresh = __tqWallRefresh();
      if (event && typeof event.waitUntil === 'function') {
        event.waitUntil(refresh);
      }
    }
    if (!__tqWallState.on) return null;

    // The page's own address: the page, as a page (200).
    if (pathname === PASSWORD_PAGE) {
      return __tqWallPage(request, true);
    }

    if (__tqWallCookie.version !== __tqWallState.version) {
      __tqWallCookie = {
        version: __tqWallState.version,
        value: await cookieValueFor(__tqWallState.version),
      };
    }
    var presented = __tqWallReadCookie(request, WALL_COOKIE);
    if (presented && sameValue(presented, __tqWallCookie.value)) return null;

    return __tqWallPage(request, false);
  } catch (e) {
    // A fault in the gate must not open a walled site: the publish-time state
    // decides. A site published without a wall goes on as before.
    if (wallConfig.defaultOn) {
      return __tqWallPage(request, false);
    }
    return null;
  }
}

// The password page in place of what was asked for: served by the sign-in
// route, with a 401 unless the visitor came to the page's own address. The
// browser keeps the address it asked for, so a reload after signing in lands
// on the page the visitor wanted.
function __tqWallPage(request, direct) {
  var url = request.nextUrl.clone();
  url.pathname = SIGN_IN_ROUTE;
  url.search = '';
  url.searchParams.set('page', '1');
  if (direct) url.searchParams.set('direct', '1');
  var response = NextResponse.rewrite(url);
  response.headers.set('cache-control', 'no-store');
  response.headers.set('x-robots-tag', 'noindex');
  return response;
}

export default async function middleware(request, event) {
  var gate = await __tqWallGate(request, event);
  return gate || NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next/static).*)'],
};
