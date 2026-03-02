import { useState, useEffect, useRef } from 'react'
import type { Product, CarouselProduct } from '../../types'
import { fetchCarouselProducts } from '../../utils/api'
import { ProductCard } from '../ProductCard'
import { ProductModal } from '../ProductModal'
import './BrandCarousel.scss'

const BRANDS = [
  { id: 1, name: 'Marca 1' },
  { id: 2, name: 'Marca 2' },
  { id: 3, name: 'Marca 3' },
  { id: 4, name: 'Marca 4' },
  { id: 5, name: 'Marca 5' },
  { id: 6, name: 'Marca 6' },
  { id: 7, name: 'Marca 7' },
]

const BRANDS_LOOP = [...BRANDS, ...BRANDS, ...BRANDS]

const convertToProduct = (carouselProduct: CarouselProduct, index: number): Product => ({
  id: index,
  name: carouselProduct.productName,
  brand: '',
  description: carouselProduct.descriptionShort,
  price: carouselProduct.price,
  photo: carouselProduct.photo,
  createdAt: '',
  updatedAt: '',
})

export const BrandCarousel = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchCarouselProducts()
        const convertedProducts = data.products.map((product, index) =>
          convertToProduct(product, index)
        )
        setProducts(convertedProducts)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.product-card')?.getBoundingClientRect().width || 280
      const gap = parseFloat(getComputedStyle(container).gap) || 24
      const scrollAmount = cardWidth + gap
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.querySelector('.product-card')?.getBoundingClientRect().width || 280
      const gap = parseFloat(getComputedStyle(container).gap) || 24
      const scrollAmount = cardWidth + gap
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="brand-carousel" aria-label="Navegue por marcas">

      {/* ── Logos com scroll automático ── */}
      <div className="brand-carousel__container">
        <h2 className="brand-carousel__title">Navegue por marcas</h2>
      </div>

      <div className="brand-carousel__track-wrapper">
        <div className="brand-carousel__track">
          {BRANDS_LOOP.map((brand, index) => (
            <button
              key={`${brand.id}-${index}`}
              className="brand-carousel__item"
              aria-label={brand.name}
            >
              <div className="brand-carousel__logo-wrapper">
                <img
                  src="/Logo.svg"
                  alt={brand.name}
                  className="brand-carousel__logo"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="product-showcase__header">
          <h2 className="product-showcase__title">Produtos relacionados</h2>
      </div>
      <div>
        <p className="brand-carousel__subtitle">Ver todos</p>
      </div>

      {/* ── Carrossel de produtos ── */}
      <div className="brand-carousel__products-container">
        {loading ? (
          <div className="brand-carousel__loading">Carregando produtos...</div>
        ) : products.length === 0 ? (
          <div className="brand-carousel__loading">Nenhum produto encontrado</div>
        ) : (
          <div className="brand-carousel__carousel">
            <button
              className="brand-carousel__arrow brand-carousel__arrow--left"
              onClick={scrollLeft}
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className="brand-carousel__scroll" ref={scrollContainerRef}>
              {products.map((product) => (
                <ProductCard
                  key={`product-${product.id}`}
                  product={product}
                  onClick={handleProductClick}
                />
              ))}
            </div>

            <button
              className="brand-carousel__arrow brand-carousel__arrow--right"
              onClick={scrollRight}
              aria-label="Próximo"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}