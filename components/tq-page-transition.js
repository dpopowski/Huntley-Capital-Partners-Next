import React from 'react'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, usePresence } from 'framer-motion'

function reversePageTransitionPreset(preset) {
    var pairs = {
        'slide-up': 'slide-down',
        'slide-down': 'slide-up',
        'slide-left': 'slide-right',
        'slide-right': 'slide-left',
        'zoom-in': 'zoom-out',
        'zoom-out': 'zoom-in',
        'wipe-down': 'wipe-up',
        'wipe-up': 'wipe-down',
        'wipe-left': 'wipe-right',
        'wipe-right': 'wipe-left',
        stack: 'unstack',
        unstack: 'stack',
    };
    return pairs[preset] || preset;
}

function pageTransitionVariants(preset, slidePx, context, options, custom) {
    var reverse = context ? context.reverse : false;
    var originX = context ? context.originX : '50%';
    var originY = context ? context.originY : '50%';
    var name = reverse ? reversePageTransitionPreset(preset) : preset;
    var bold = options
        ? options.distance === 'bold' || options.depth === 'bold' || options.amount === 'bold'
        : false;
    var near = bold ? slidePx * 4 : slidePx;
    var far = near * 2;
    var blurPx = options && options.softness === 'heavy' ? 28 : 12;
    var shrink = bold ? 0.85 : 0.94;
    var zoomOut = bold ? 0.85 : 0.96;
    var zoomIn = bold ? 1.15 : 1.04;
    if (name === 'custom') {
        var c = custom || {
            arrive: { opacity: 0, x: 0, y: 24, scale: 1, blur: 0 },
            leave: { opacity: 0, x: 0, y: -24, scale: 1, blur: 0 },
        };
        return {
            initial: {
                opacity: c.arrive.opacity,
                x: c.arrive.x,
                y: c.arrive.y,
                scale: c.arrive.scale,
                filter: 'blur(' + c.arrive.blur + 'px)',
            },
            animate: { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' },
            exit: {
                opacity: c.leave.opacity,
                x: c.leave.x,
                y: c.leave.y,
                scale: c.leave.scale,
                filter: 'blur(' + c.leave.blur + 'px)',
            },
        };
    }
    if (name === 'fade') {
        return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
    }
    if (name === 'crossfade') {
        return {
            initial: { opacity: 0, scale: 1.02 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.98 },
        };
    }
    if (name === 'blur') {
        return {
            initial: { opacity: 0, filter: 'blur(' + blurPx + 'px)' },
            animate: { opacity: 1, filter: 'blur(0px)' },
            exit: { opacity: 0, filter: 'blur(' + blurPx + 'px)' },
        };
    }
    if (name === 'slide-up') {
        return {
            initial: { opacity: 0, y: near },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -near },
        };
    }
    if (name === 'slide-down') {
        return {
            initial: { opacity: 0, y: -near },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: near },
        };
    }
    if (name === 'slide-left') {
        return {
            initial: { opacity: 0, x: far },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -far },
        };
    }
    if (name === 'slide-right') {
        return {
            initial: { opacity: 0, x: -far },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: far },
        };
    }
    if (name === 'stack') {
        return {
            initial: { opacity: 0, y: far },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, scale: shrink },
        };
    }
    if (name === 'unstack') {
        return {
            initial: { opacity: 0, scale: shrink },
            animate: { opacity: 1, y: 0, scale: 1 },
            exit: { opacity: 0, y: far },
        };
    }
    if (name === 'zoom-in') {
        return {
            initial: { opacity: 0, scale: zoomOut },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: zoomIn },
        };
    }
    if (name === 'zoom-out') {
        return {
            initial: { opacity: 0, scale: zoomIn },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: zoomOut },
        };
    }
    if (name === 'wipe-down') {
        return {
            initial: { clipPath: 'inset(0 0 100% 0)' },
            animate: { clipPath: 'inset(0 0 0% 0)' },
            exit: { clipPath: 'inset(100% 0 0 0)' },
        };
    }
    if (name === 'wipe-up') {
        return {
            initial: { clipPath: 'inset(100% 0 0 0)' },
            animate: { clipPath: 'inset(0% 0 0 0)' },
            exit: { clipPath: 'inset(0 0 100% 0)' },
        };
    }
    if (name === 'wipe-left') {
        return {
            initial: { clipPath: 'inset(0 0 0 100%)' },
            animate: { clipPath: 'inset(0 0 0 0%)' },
            exit: { clipPath: 'inset(0 100% 0 0)' },
        };
    }
    if (name === 'wipe-right') {
        return {
            initial: { clipPath: 'inset(0 100% 0 0)' },
            animate: { clipPath: 'inset(0 0% 0 0)' },
            exit: { clipPath: 'inset(0 0 0 100%)' },
        };
    }
    if (name === 'circle') {
        var at = ' at ' + originX + ' ' + originY + ')';
        return {
            initial: { clipPath: 'circle(0%' + at },
            animate: { clipPath: 'circle(150%' + at },
            exit: { clipPath: 'circle(0%' + at },
        };
    }
    if (name === 'cover' || name === 'curtain') {
        return { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 0.999 } };
    }
    return null;
}

function pageTransitionCover(preset) {
    if (preset === 'cover') {
        return [{ from: { y: '100%' }, cover: { y: '0%' }, away: { y: '-100%' } }];
    }
    if (preset === 'curtain') {
        return [
            { from: { x: '-100%' }, cover: { x: '0%' }, away: { x: '-100%' }, side: 'left' },
            { from: { x: '100%' }, cover: { x: '0%' }, away: { x: '100%' }, side: 'right' },
        ];
    }
    return null;
}

function pageTransitionSkipPattern(route) {
    var escaped = route.replace(/[.*+?^$()|{}\\]/g, '\\$&');
    return new RegExp('^' + escaped.replace(/\[[^\]]+\]/g, '[^/]+') + '/?$');
}

function revealOnScreen(variants, screen) {
    if (!variants || !variants.animate.clipPath) {
        return variants;
    }
    var onScreen = function (clip) {
        if (!screen || typeof clip !== 'string') {
            return clip;
        }
        var circle = /^circle\(([\d.]+)% at ([\d.]+)px ([\d.]+)px\)$/.exec(clip);
        if (circle) {
            var measure = Math.sqrt((screen.width * screen.width + screen.height * screen.height) / 2);
            var radius = (parseFloat(circle[1]) / 100) * measure;
            return 'circle(' + radius + 'px at ' + circle[2] + 'px ' + circle[3] + 'px)';
        }
        var inset = /^inset\((\S+) (\S+) (\S+) (\S+)\)$/.exec(clip);
        if (inset) {
            var share = function (value) { return (parseFloat(value) || 0) / 100; };
            var upper = share(inset[1]) * screen.height;
            var lower = screen.height - share(inset[3]) * screen.height;
            return ('inset(' +
                upper +
                'px ' +
                share(inset[2]) * 100 +
                '% calc(100% - ' +
                lower +
                'px) ' +
                share(inset[4]) * 100 +
                '%)');
        }
        return clip;
    };
    var arriving = function (state) {
        return state.clipPath === undefined
            ? state
            : Object.assign({}, state, { clipPath: onScreen(state.clipPath) });
    };
    return {
        initial: arriving(variants.initial),
        animate: Object.assign({}, arriving(variants.animate), {
            transitionEnd: { clipPath: 'none' },
        }),
        exit: {},
    };
}

var TQ_MORPH_NAME = 'tq-morph'
function tqMorphPath(url) {
  try {
    var parsed = new URL(url, location.href)
    return parsed.origin + parsed.pathname.replace(/\/(index\.html)?$/, '').replace(/\.html$/, '') + parsed.search
  } catch (e) {
    return String(url)
  }
}
function tqMorphImageKey(url) {
  try {
    var parsed = new URL(url, location.href)
    var served = /\/_next\/image$/.test(parsed.pathname) ? parsed.searchParams.get('url') : null
    return served ? tqMorphImageKey(served) : parsed.origin + parsed.pathname
  } catch (e) {
    return String(url)
  }
}
function tqMorphVisible(element) {
  var rect = element.getBoundingClientRect()
  return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 &&
    rect.top < window.innerHeight && rect.left < window.innerWidth
}
function tqMorphClear() {
  var images = document.images
  for (var i = 0; i < images.length; i++) {
    if (images[i].style.viewTransitionName === TQ_MORPH_NAME) {
      images[i].style.viewTransitionName = ''
    }
  }
}
function tqMorphSource(destination, clicked) {
  var target = tqMorphPath(destination)
  var anchors = Array.prototype.slice.call(document.querySelectorAll('a[href]')).filter(function (anchor) {
    return tqMorphPath(anchor.href) === target
  })
  if (clicked && anchors.indexOf(clicked) > 0) {
    anchors.splice(anchors.indexOf(clicked), 1)
    anchors.unshift(clicked)
  }
  for (var i = 0; i < anchors.length; i++) {
    var image = anchors[i].querySelector('img')
    if (image && (image.currentSrc || image.src) && tqMorphVisible(image)) {
      return image
    }
  }
  return null
}
function tqMorphTarget(src) {
  var key = tqMorphImageKey(src)
  var loose = null
  var images = document.images
  for (var i = 0; i < images.length; i++) {
    var own = images[i].currentSrc || images[i].src
    if (!own || images[i].getBoundingClientRect().width === 0) {
      continue
    }
    if (own === src) {
      return images[i]
    }
    if (!loose && tqMorphImageKey(own) === key) {
      loose = images[i]
    }
  }
  return loose
}

const PRESET = 'fade'
// The preset's choices, resolved to words the variants understand.
const OPTIONS = {}
const CUSTOM = null
const ORIGIN_FROM_POINTER = true
const DURATION = 0.35
const EASE = [0, 0, 0.58, 1]
const SLIDE_PX = 24
const CENTER = { reverse: false, skip: false, originX: '50%', originY: '50%' }
const PANELS = pageTransitionCover(PRESET)
// Pages that opted out: they appear instantly; leaving them still plays.
const SKIP_ROUTES = []
const INSTANT = { initial: {}, animate: {}, exit: {} }
// A reveal (Circle, the Wipes): the arriving page opens over the leaving one.
const REVEAL = (() => {
  const variants = pageTransitionVariants(PRESET, SLIDE_PX, CENTER, OPTIONS, CUSTOM || undefined)
  return !!(variants && variants.animate.clipPath)
})()
// Every page change plays frame by frame, framer writing each value onto the
// page. Run by the browser (framer's default for opacity, clip-path and
// filter), an animation ends one frame before framer writes its last value,
// and for that frame the page shows where it started: a reveal blinks away as
// it completes, a page faded in over the leaving one turns clear and the
// leaving page flashes back, a page that has left shows again. An onUpdate
// handler, even one that does nothing, keeps the animation in framer's own loop.
const stepByFrame = () => {}
// A dissolve (Fade, Crossfade): the arriving page fades in over the leaving
// one, which has no exit of its own — it holds still until the arrival is in.
const DISSOLVE = true
const dissolveOver = (variants) => (DISSOLVE && variants ? Object.assign({}, variants, { exit: {} }) : variants)
// The two pages overlap for a dissolve, and for a reveal without View
// Transitions: the arriving page is laid above the frozen one (a positioned box
// would paint on top of it), at least a screen tall and on the site's ground.
const OVERLAP = REVEAL || DISSOLVE
const OVER = { position: 'relative', zIndex: 1, minHeight: '100vh' }
// Until it plays, the arriving page lies unseen over the leaving one: a click
// there must not land on it.
const UNSEEN = { pointerEvents: 'none' }
const SKIP_PATTERNS = SKIP_ROUTES.map(pageTransitionSkipPattern)
const isSkippedRoute = (key) => SKIP_PATTERNS.some((pattern) => pattern.test(key))
// The cover family paints its panels in the theme colour the editor chose.
const PANEL_COLOR = 'var(--dl-color-theme-primary1, var(--dl-color-theme-neutral-dark, #111111))'
const PANEL_BASE = { position: 'fixed', top: 0, bottom: 0, zIndex: 2147483000, pointerEvents: 'none', background: PANEL_COLOR }
const panelBounds = (panel) =>
  panel.side === 'left' ? { left: 0, right: '50%' } : panel.side === 'right' ? { left: '50%', right: 0 } : { left: 0, right: 0 }

const routeKeyOf = (url) => String(url || '').split(/[?#]/)[0]

// The page changes played as a View Transition (a reveal; a flying picture), as
// the static export plays them.
const VT_CSS = "@media (prefers-reduced-motion: no-preference) {\n  ::view-transition-old(root),\n  ::view-transition-new(root) {\n    mix-blend-mode: normal;\n  }\n  ::view-transition-old(root) {\n    animation: none;\n  }\n  ::view-transition-new(root) {\n    animation: tq-page-arrive 0.35s cubic-bezier(0, 0, 0.58, 1) both;\n  }\n  @keyframes tq-page-arrive {\n    from { opacity: 0; }\n    to { opacity: 1; }\n  }\n  ::view-transition-group(tq-morph) {\n    animation-duration: 0.35s;\n    animation-timing-function: cubic-bezier(0, 0, 0.58, 1);\n  }\n  ::view-transition-old(tq-morph),\n  ::view-transition-new(tq-morph) {\n    height: 100%;\n    object-fit: cover;\n    overflow: clip;\n    animation-duration: 0.35s;\n  }\n  ::view-transition-old(tq-morph):only-child {\n    animation: tq-morph-away 0.35s cubic-bezier(0, 0, 0.58, 1) both;\n  }\n  ::view-transition-new(tq-morph):only-child {\n    animation: tq-page-arrive 0.35s cubic-bezier(0, 0, 0.58, 1) both, tq-morph-in 0.35s cubic-bezier(0, 0, 0.58, 1) both;\n  }\n  @keyframes tq-morph-away {\n    to { opacity: 0; }\n  }\n  @keyframes tq-morph-in {\n    from { opacity: 0; }\n  }\n}\n"
const FLIES = true
// A page that takes longer than this to arrive switches without the transition.
const ARRIVAL_WAIT_MS = 3000
// An arriving picture still loading is waited for this long, so the flight lands on it.
const MORPH_DECODE_MS = 300
// The arriving page waits this long at most for the pictures on its first
// screen while the leaving page still holds the screen (the two overlap, or the
// browser holds its picture for a View Transition)...
const PICTURE_WAIT_MS = 1200
// ...and this long once the leaving page has gone: the screen is bare meanwhile.
const BARE_PICTURE_WAIT_MS = 300
// A picture still loading when its page plays fades in once it has loaded
// (fadeInWhenLoaded); one still loading after this is shown as it is.
const LATE_PICTURE_WAIT_MS = 5000
const LATE_PICTURE_ATTR = 'data-tq-late-picture'
const LATE_PICTURE_CSS = "[data-tq-late-picture=\"loading\"] { opacity: 0 !important; }\n[data-tq-late-picture=\"in\"] { transition: opacity 0.35s cubic-bezier(0, 0, 0.58, 1) !important; }"
const prefersLessMotion = () =>
  !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
// A scrollbar that takes room (Windows, a Mac with a mouse) stays while the
// leaving page is frozen. Frozen, that page no longer gives the document a
// height, so its scrollbar vanished at the click and came back when the
// arriving page mounted: the page jolted sideways by the scrollbar's width, and
// back. Held with overflow-y: scroll, which keeps the scrollbar's track on
// screen in every browser. Measured before the freeze; returns what puts <html>
// back exactly as it was, or null when the scrollbar takes no room.
const holdScrollbarGutter = () => {
  const root = document.documentElement
  if (window.innerWidth - root.clientWidth <= 0) {
    return null
  }
  const own = root.style.getPropertyValue('overflow-y')
  const ownPriority = root.style.getPropertyPriority('overflow-y')
  root.style.setProperty('overflow-y', 'scroll', 'important')
  return () => {
    if (own) {
      root.style.setProperty('overflow-y', own, ownPriority)
    } else {
      root.style.removeProperty('overflow-y')
    }
  }
}
// Sets one property of an element's own style; returns what puts it back
// exactly as it was.
const holdStyle = (element, name, value) => {
  const own = element.style.getPropertyValue(name)
  const ownPriority = element.style.getPropertyPriority(name)
  element.style.setProperty(name, value, 'important')
  return () => {
    if (own) {
      element.style.setProperty(name, own, ownPriority)
    } else {
      element.style.removeProperty(name)
    }
  }
}
// The colour the site paints behind its pages: <html>'s background, else
// <body>'s (the browser paints the canvas with it), else the browser's own. A
// page laid over a leaving one is painted on it, so its transparent parts show
// what they will show once the page is alone, not the page underneath.
const siteGround = () => {
  const painted = (element) => {
    const color = element ? window.getComputedStyle(element).backgroundColor : ''
    return color && color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)' ? color : ''
  }
  return painted(document.documentElement) || painted(document.body) || 'Canvas'
}
// The page in the document for a route key, if any (a leaving page stays in it
// while the two pages overlap).
const pageIn = (key) =>
  Array.prototype.find.call(
    document.querySelectorAll('[data-tq-page-transition]'),
    (node) => node.getAttribute('data-tq-page-transition') === key
  ) || null
// A page held under the one laid over it takes no input and is hidden from
// assistive technology: inert, or aria-hidden where the browser has no inert.
const setLeaving = (node, leaving) => {
  if (!node) {
    return
  }
  if ('inert' in node) {
    node.inert = leaving
  } else if (leaving) {
    node.setAttribute('aria-hidden', 'true')
  } else {
    node.removeAttribute('aria-hidden')
  }
}
// Runs before the browser paints; the server, which paints nothing, gets the
// ordinary effect (React warns about a layout effect there).
const useBeforePaintEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect
// Settles once the pictures on the arriving page's first screen are decoded, or
// after waitMs (an image the page asks to decode off the main thread paints a
// few frames after the rest of the page), with the pictures still loading.
const picturesReady = (node, waitMs) => {
  const pictures = Array.prototype.filter.call(node.querySelectorAll('img'), (image) => {
    const box = image.getBoundingClientRect()
    return box.bottom > 0 && box.top < window.innerHeight && typeof image.decode === 'function'
  })
  return Promise.race([
    Promise.all(pictures.map((image) => image.decode().catch(() => {}))),
    new Promise((resolve) => setTimeout(resolve, waitMs)),
  ]).then(() => pictures.filter((image) => !image.complete))
}
// A picture still loading when its page plays stays unseen until it has
// loaded, then fades in: shown as it loaded, it snapped in over the page in a
// single frame. One that fails is shown at once, as it would be anyway, and
// none stays unseen past LATE_PICTURE_WAIT_MS.
const fadeInWhenLoaded = (image) => {
  image.setAttribute(LATE_PICTURE_ATTR, 'loading')
  const show = (event) => {
    image.removeEventListener('load', show)
    image.removeEventListener('error', show)
    clearTimeout(giveUp)
    if (event && event.type === 'load') {
      image.setAttribute(LATE_PICTURE_ATTR, 'in')
      setTimeout(() => image.removeAttribute(LATE_PICTURE_ATTR), DURATION * 1000 + 100)
    } else {
      image.removeAttribute(LATE_PICTURE_ATTR)
    }
  }
  const giveUp = setTimeout(show, LATE_PICTURE_WAIT_MS)
  image.addEventListener('load', show)
  image.addEventListener('error', show)
}

// Keeps the leaving page in the document while it is still needed: until the
// browser has pictured it (a View Transition), or until the page laid over it
// has fully come in (the two pages overlap) — or, should that arrival never
// complete, a little after its time.
const HoldPage = ({ pageKey, changeRef, overlapRef }) => {
  const [isPresent, safeToRemove] = usePresence()
  React.useEffect(() => {
    if (isPresent) {
      return
    }
    const change = changeRef.current
    const overlap = overlapRef.current
    if (change && change.leavingKey === pageKey) {
      change.captured.then(safeToRemove)
    } else if (overlap && overlap.leavingKey === pageKey) {
      setLeaving(pageIn(pageKey), true)
      overlap.opened.then(safeToRemove)
      setTimeout(overlap.finish, DURATION * 1000 + PICTURE_WAIT_MS + 1000)
    } else {
      safeToRemove()
    }
  }, [isPresent])
  return null
}

const TqPageTransition = ({ children }) => {
  const router = useRouter()
  const routeKey = routeKeyOf(router.asPath)
  const routeKeyRef = React.useRef(routeKey)
  routeKeyRef.current = routeKey
  const [frozen, setFrozen] = React.useState(null)
  const [context, setContext] = React.useState(CENTER)
  const [panelPhase, setPanelPhase] = React.useState('idle')
  // The page laid over the leaving one while the two overlap, and the ground it is painted on.
  const [over, setOver] = React.useState(null)
  // The page whose arrival may play: the first page at once, every later one
  // once its first screen's pictures are ready.
  const [readyKey, setReadyKey] = React.useState(routeKey)
  const readyKeyRef = React.useRef(routeKey)
  const pageRef = React.useRef(null)
  const popRef = React.useRef(false)
  const pointerRef = React.useRef(null)
  const clickedRef = React.useRef(null)
  const changeRef = React.useRef(null)
  const overlapRef = React.useRef(null)
  // Puts back the scrollbar room held for the frozen page (holdScrollbarGutter).
  const gutterRef = React.useRef(null)
  // Puts back <html>'s scroll-behavior, held instant through a View Transition's page change.
  const scrollRef = React.useRef(null)
  const variants = React.useMemo(
    () =>
      context.skip || context.morph
        ? INSTANT
        : dissolveOver(
            revealOnScreen(pageTransitionVariants(PRESET, SLIDE_PX, context, OPTIONS, CUSTOM || undefined), context.screen)
          ),
    [context]
  )

  // The arriving page is in the document: wait for the pictures on its first
  // screen (and, in a View Transition, for its twin of the flying picture),
  // then let it play — or let the browser picture the new state.
  const setPage = React.useCallback((node) => {
    // A page that goes after the next one has mounted (the two overlapped)
    // leaves the ref to the page still in the document, not to nothing.
    pageRef.current = node || pageIn(routeKeyRef.current)
    const key = node ? node.getAttribute('data-tq-page-transition') : null
    if (key === null || key === readyKeyRef.current) {
      return
    }
    readyKeyRef.current = key
    const change = changeRef.current
    const landing = change && !change.landed && node !== change.leaving ? change : null
    let twin = null
    if (landing) {
      landing.landed = true
      tqMorphClear()
      twin = landing.src ? tqMorphTarget(landing.src) : null
      if (twin) {
        twin.style.viewTransitionName = TQ_MORPH_NAME
      }
    }
    const twinReady =
      twin && !twin.complete && typeof twin.decode === 'function'
        ? Promise.race([
            twin.decode().catch(() => {}),
            new Promise((resolve) => setTimeout(resolve, MORPH_DECODE_MS)),
          ])
        : Promise.resolve()
    const overlap = overlapRef.current
    const held = !!landing || !!(overlap && overlap.arrivingKey === key)
    Promise.all([picturesReady(node, held ? PICTURE_WAIT_MS : BARE_PICTURE_WAIT_MS), twinReady]).then(([loading]) => {
      // A later page may have arrived meanwhile; this one's turn has passed.
      if (readyKeyRef.current === key) {
        // The flight lands on its twin as it is; a page shown at once shows its pictures at once.
        if (!prefersLessMotion() && !isSkippedRoute(key)) {
          loading.filter((image) => image !== twin).forEach(fadeInWhenLoaded)
        }
        setReadyKey(key)
        setPanelPhase((phase) => (phase === 'covered' ? 'uncovering' : phase))
      }
      if (landing) {
        landing.arrive()
      }
    })
  }, [])

  React.useEffect(() => {
    const onPointerDown = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
    }
    const onClick = (event) => {
      clickedRef.current = event.target && event.target.closest ? event.target.closest('a[href]') : null
    }
    window.addEventListener('pointerdown', onPointerDown, true)
    window.addEventListener('click', onClick, true)
    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true)
      window.removeEventListener('click', onClick, true)
    }
  }, [])

  React.useEffect(() => {
    router.beforePopState(() => {
      popRef.current = true
      return true
    })
    const root = document.documentElement
    const abandon = (change) => {
      if (!change.landed) {
        change.landed = true
        change.transition.skipTransition()
        change.arrive()
      }
    }
    // A change that does not overlap lets a page still held from the last one
    // go at once, instead of leaving it over the page that appears.
    const letHeldPageGo = () => {
      if (overlapRef.current) {
        overlapRef.current.finish()
      }
    }
    // The page change as a View Transition: every reveal, and a picture in the
    // followed link that the next page shows too (going forward only).
    const startViewChange = (url, pointer, reverse) => {
      if (!VT_CSS || !pageRef.current || typeof document.startViewTransition !== 'function' || prefersLessMotion()) {
        return false
      }
      const image = FLIES && !reverse ? tqMorphSource(url, clickedRef.current) : null
      if (!image && !REVEAL) {
        return false
      }
      const change = { leavingKey: routeKeyRef.current, leaving: pageRef.current, src: image ? image.currentSrc || image.src : null, landed: false }
      change.captured = new Promise((resolve) => {
        change.onCaptured = resolve
      })
      const arrived = new Promise((resolve) => {
        change.arrive = resolve
      })
      tqMorphClear()
      if (image) {
        image.style.viewTransitionName = TQ_MORPH_NAME
      }
      if (reverse) {
        root.setAttribute('data-tq-nav', 'back')
      }
      if (pointer) {
        root.style.setProperty('--tq-origin-x', pointer.x + 'px')
        root.style.setProperty('--tq-origin-y', pointer.y + 'px')
      }
      // Nothing is frozen here, so Next's scroll to the arriving page's top
      // follows the site's smooth scrolling (kept for its in-page anchors): the
      // page arrived at the leaving one's offset and glided up through itself.
      // A change replacing one still playing finds the scroll already held.
      if (!scrollRef.current) {
        scrollRef.current = holdStyle(root, 'scroll-behavior', 'auto')
      }
      const settle = () => {
        if (changeRef.current === change) {
          changeRef.current = null
          tqMorphClear()
          root.removeAttribute('data-tq-nav')
          root.style.removeProperty('--tq-origin-x')
          root.style.removeProperty('--tq-origin-y')
          if (scrollRef.current) {
            scrollRef.current()
            scrollRef.current = null
          }
        }
      }
      changeRef.current = change
      try {
        change.transition = document.startViewTransition(() => {
          change.onCaptured()
          return arrived
        })
      } catch (error) {
        settle()
        return false
      }
      change.transition.ready.catch(() => {})
      change.transition.finished.then(settle, settle)
      setTimeout(() => abandon(change), ARRIVAL_WAIT_MS)
      return true
    }
    const onRouteChangeStart = (url) => {
      if (routeKeyOf(url) === routeKeyRef.current) {
        return
      }
      const reverse = popRef.current
      popRef.current = false
      // A skipped page appears instantly; leaving it still plays the site's transition.
      // A visitor who asks for less motion gets every page that way. It is read
      // here, never while rendering: the server cannot know it, and a first render
      // that differs from the server's makes React throw the page away.
      const skip = prefersLessMotion() || isSkippedRoute(routeKeyOf(url))
      const pointer = reverse || !ORIGIN_FROM_POINTER ? null : pointerRef.current
      // A reveal is measured on this screen (revealOnScreen); without a press it
      // grows from the screen's centre, not the page's.
      const screen = { width: window.innerWidth, height: window.innerHeight }
      const origin = pointer || { x: screen.width / 2, y: screen.height / 2 }
      const next = { reverse, skip, originX: origin.x + 'px', originY: origin.y + 'px', screen }
      // Back to a page that has not gone yet (the two pages overlapped): it is
      // still in the document, pictures and all, so it plays at once and takes
      // input again.
      const returning = pageIn(routeKeyOf(url))
      if (returning) {
        setLeaving(returning, false)
        readyKeyRef.current = routeKeyOf(url)
        setReadyKey(readyKeyRef.current)
      }
      if (!skip && startViewChange(url, pointer, reverse)) {
        letHeldPageGo()
        setContext(Object.assign({}, next, { morph: true }))
        return
      }
      setContext(next)
      if (PANELS && !skip) {
        setPanelPhase('covering')
      }
      if (OVERLAP && !skip) {
        // The two pages overlap: the leaving page is held under the arriving
        // one until that has fully come in (HoldPage).
        const overlap = { leavingKey: routeKeyRef.current, arrivingKey: routeKeyOf(url) }
        overlap.opened = new Promise((resolve) => {
          overlap.open = resolve
        })
        overlap.finish = () => {
          overlap.open()
          if (overlapRef.current === overlap) {
            overlapRef.current = null
            setOver(null)
          }
        }
        overlapRef.current = overlap
        setOver({ key: overlap.arrivingKey, ground: siteGround() })
      } else {
        letHeldPageGo()
      }
      // A change replacing a cancelled one finds the page still frozen and the
      // room still held: held again, the hold would take the first hold's
      // overflow-y for the page's own and leave it on <html>.
      if (!gutterRef.current) {
        gutterRef.current = holdScrollbarGutter()
      }
      setFrozen({ key: routeKeyRef.current, top: window.scrollY || 0 })
    }
    const onRouteChangeError = () => {
      if (changeRef.current) {
        abandon(changeRef.current)
      }
    }
    router.events.on('routeChangeStart', onRouteChangeStart)
    router.events.on('routeChangeError', onRouteChangeError)
    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart)
      router.events.off('routeChangeError', onRouteChangeError)
      router.beforePopState(() => true)
    }
  }, [router])

  // The room goes back before the paint of the commit that ends the freeze: that
  // commit mounts the arriving page (when the two overlap, lets the leaving page go), so
  // the scrollbar passes straight to the page left in the document. A cancelled
  // change leaves its page frozen until the change replacing it has played, so
  // the room stays with it: Next starts that change a few awaits after the error.
  const releaseGutter = () => {
    if (gutterRef.current) {
      gutterRef.current()
      gutterRef.current = null
    }
  }
  useBeforePaintEffect(() => {
    if (!frozen) {
      releaseGutter()
    }
  }, [frozen])
  React.useEffect(() => releaseGutter, [])

  if (!variants) {
    return children
  }

  const frozenStyle =
    frozen && frozen.key === routeKey
      ? { position: 'fixed', top: -frozen.top, left: 0, right: 0 }
      : undefined
  const overStyle =
    over && over.key === routeKey
      ? Object.assign({ backgroundColor: over.ground }, OVER, readyKey === routeKey ? null : UNSEEN)
      : undefined
  const pageStyle = frozenStyle || overStyle

  const onExitComplete = () => {
    setFrozen(null)
    // The panels open once the arriving page's pictures are ready (setPage).
    if (PANELS && panelPhase === 'covering') {
      setPanelPhase('covered')
    }
  }
  // The page laid over the leaving one has fully come in: let the leaving page go.
  const onPageAnimationComplete = (definition) => {
    const overlap = overlapRef.current
    if (definition === 'animate' && overlap && overlap.arrivingKey === routeKey) {
      overlap.finish()
    }
  }

  return (
    <>
    <AnimatePresence mode={context.morph || !OVERLAP ? 'wait' : 'sync'} initial={false} onExitComplete={onExitComplete}>
      <motion.div
        key={routeKey}
        ref={setPage}
        initial="initial"
        animate={readyKey === routeKey ? 'animate' : 'initial'}
        exit="exit"
        variants={variants}
        transition={{ duration: DURATION, ease: EASE }}
        onUpdate={stepByFrame}
        onAnimationComplete={onPageAnimationComplete}
        style={pageStyle}
        data-tq-page-transition={routeKey}
      >
        {children}
        {VT_CSS || OVERLAP ? <HoldPage pageKey={routeKey} changeRef={changeRef} overlapRef={overlapRef} /> : null}
      </motion.div>
    </AnimatePresence>
    {PANELS
      ? PANELS.map((panel, index) => (
          <motion.div
            key={index}
            aria-hidden="true"
            data-tq-page-transition-panel={index}
            style={Object.assign({}, PANEL_BASE, panelBounds(panel))}
            initial={panel.from}
            animate={panelPhase === 'covering' || panelPhase === 'covered' ? panel.cover : panelPhase === 'uncovering' ? panel.away : panel.from}
            transition={panelPhase === 'idle' ? { duration: 0 } : { duration: DURATION, ease: EASE }}
            onAnimationComplete={() => {
              if (panelPhase === 'uncovering') {
                setPanelPhase('idle')
              }
            }}
          />
        ))
      : null}
    {VT_CSS ? <style dangerouslySetInnerHTML={{ __html: VT_CSS }} /> : null}
    <style dangerouslySetInnerHTML={{ __html: LATE_PICTURE_CSS }} />
    </>
  )
}

export default TqPageTransition
