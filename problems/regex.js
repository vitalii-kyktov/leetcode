function parseRegex(regexStr) {
  const states = []
  let i = 0
  while (i <= regexStr.length - 1) {
    console.log(i)
    const currentSymbol = regexStr[i]
    console.log(currentSymbol)

    if ('.' === currentSymbol) {
      states.push({
        whatCanBe: 'anySymbol',
        howMany: 'exactlyOne'
      })
    } else if ('*' === currentSymbol) {
      const previousState = states[states.length - 1]
      previousState.howMany = 'zeroOrMore'
    } else {
      states.push({
        whatCanBe: currentSymbol,
        howMany: 'exactlyOne'
      })
    }
    console.log(states.slice())
    i++
  }
  return states
}

console.log(parseRegex('a.*b*c'))
