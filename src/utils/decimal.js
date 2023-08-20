export const decimal = ( number = 0 ) => {
  
  if (Number.isInteger(number)) {
    const numString = `${number}.00`
    return numString
  }
 
  const rounded = Math.round(number * 100) / 100

  return rounded
}
