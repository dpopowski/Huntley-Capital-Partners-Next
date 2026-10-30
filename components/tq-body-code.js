import { useEffect } from 'react'

// Runs the project's body custom code after React has hydrated the page.
// _document ships it inert inside <template data-tq-body-code>; running it at
// parse time let widget scripts (the slider bundle) rewrite the slides before
// hydration, and React reported every touched element as a mismatch.
export default function TqBodyCode() {
  useEffect(() => {
    (function () {
  var template = document.querySelector('template[data-tq-body-code]')
  if (!template || !template.content) { return }
  var fragment = document.importNode(template.content, true)
  var scripts = Array.prototype.slice.call(fragment.querySelectorAll('script'))
  var namedAfterTheDocument = '\n//# source' + 'URL=' + String(document.URL).split('#')[0]
  var runsAsScript = function (type) {
    return type === '' || type === 'module' || type.indexOf('javascript') !== -1 || type.indexOf('ecmascript') !== -1
  }
  scripts.forEach(function (old) {
    var script = document.createElement('script')
    Array.prototype.forEach.call(old.attributes, function (attr) {
      script.setAttribute(attr.name, attr.value)
    })
    script.async = false
    var inline = !old.getAttribute('src') && runsAsScript((old.getAttribute('type') || '').trim().toLowerCase())
    script.textContent = inline ? old.textContent + namedAfterTheDocument : old.textContent
    old.parentNode.replaceChild(script, old)
  })
  template.parentNode.replaceChild(fragment, template)
})()
  }, [])
  return null
}
