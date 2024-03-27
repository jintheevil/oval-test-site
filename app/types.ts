type Products = {
  brandName: string,
  id: string,
  subProducts: SubProducts[],
}

type SubProducts = {
  id: string,
  productName: string,
  productDesc: string,
  productImgPath?: string,
  productImgPathTransformed?: string
}

export type { Products, SubProducts };
