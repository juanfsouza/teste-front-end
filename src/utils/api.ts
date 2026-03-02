import type { ProductResponse, CarouselProductResponse } from '../types'

const API_URL = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
const CAROUSEL_API_URL = import.meta.env.DEV
  ? '/api/econverse/lista-produtos/produtos.json'
  : 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const fetchProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro na requisição:', error)
    throw error
  }
}

export const fetchCarouselProducts = async (): Promise<CarouselProductResponse> => {
  try {
    const response = await fetch(CAROUSEL_API_URL)
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos do carrossel')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro na requisição do carrossel:', error)
    throw error
  }
}
