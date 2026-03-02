
export interface Product {
  id: number
  name: string
  brand: string
  description: string
  price: number
  photo: string
  createdAt: string
  updatedAt: string
}

export interface ProductResponse {
  products: Product[]
  count: number
}

export interface CarouselProduct {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface CarouselProductResponse {
  success: boolean
  products: CarouselProduct[]
}

