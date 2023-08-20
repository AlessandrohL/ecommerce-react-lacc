
export const getAllBrandsByProducts = (products = []) => {
  const allBrands = products.map(pr => pr.brand)

  const uniqueBrands = [];
  const brandMap = {};
  
  for (const brand of allBrands) {
    const brandId = brand.brandId;
    
    if (!brandMap[brandId]) {
      brandMap[brandId] = true;
      uniqueBrands.push(brand);
    }
  }
  
  return uniqueBrands
}

