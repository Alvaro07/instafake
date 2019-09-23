import { createGlobalStyle } from 'styled-components'

const generateSpaces = (positions, prop, times) => {
  let results = []
  for (let i = 0; i <= times; i++) {
    for (const pos in positions) {
      results.push(`.${prop}${positions[pos]}-${(i + 1) * 5} { ${prop}${positions[pos]}: ${(i + 1) * 5}px }`)
    }
  }
  return results
}

export const HelperClasses = createGlobalStyle`
  ${generateSpaces(['', '-top', '-right', '-bottom', '-left'], 'margin', 5)}
  ${generateSpaces(['', '-top', '-right', '-bottom', '-left'], 'padding', 5)}
`
