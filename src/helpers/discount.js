import products from '../utils/products.json'

export const discount = () => {
  const newProducts = products.map(pr => {
    pr.discount = Math.floor(Math.random() * 21) + 5 
    const today = new Date()
    const randomDays = Math.floor(Math.random() * 15) + 8
    pr.discountEndDate = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000).toISOString()
    return pr
  })
  
  console.log(newProducts)
  return newProducts
}
