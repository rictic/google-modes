function getScope(context, scopes) {
  for (let cx = context; cx; cx = cx.parent)
    if (scopes.indexOf(cx.name) > -1) return cx
}
function isLocal(context, name) {
  for (let cx = context; cx; cx = cx.parent)
    if (cx.locals && cx.locals.indexOf(name) > -1) return true
  return false
}

const varRE = /(^|\s)variable($|\s)/

export function markLocals(type, scopes, stream, state, once) {
  if (type == "def") {
    let scope = getScope(state.context, scopes), name = stream.current()
    if (scope) {
      if (!scope.locals) scope.locals = []
      if (once && scope.locals.indexOf(name) > -1)
        return "variable-2"
      scope.locals.push(name)
    }
  } else if (varRE.test(type) && !/qualified/.test(type) &&
             isLocal(state.context, stream.current())) {
    type = type.replace(varRE, "$1variable-2$2")
  }
  return type
}
