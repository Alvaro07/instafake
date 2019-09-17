// Random hash

export const generateHash = () => {
  return (
    Math.random()
      .toString(12)
      .substring(2, 7) +
    Math.random()
      .toString(12)
      .substring(2, 7)
  )
}
