import {StaticImageData} from "next/image";

type Products = {
  brandName: string,
  id: string,
  subProducts: SubProducts[],
}

type SubProducts = {
  id: string,
  productName: string,
  productDesc: string,
  productImgPath?: StaticImageData,
  productImgPathTransformed?: string
}

export type { Products, SubProducts };
