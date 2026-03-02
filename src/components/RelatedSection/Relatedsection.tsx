import { useState, useEffect, useRef } from 'react'
import type { Product, CarouselProduct } from '../../types'
import { fetchCarouselProducts } from '../../utils/api'
import { ProductCard } from '../ProductCard'
import { ProductModal } from '../ProductModal'
import './RelatedSection.scss'

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

export const RelatedSection = () => {
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
    <section className="related-section">

      {/* ── Carrossel de produtos ── */}
      <div className="related-section__showcase">
        <div className="related-section__header">
          <h2 className="related-section__title">Produtos relacionados</h2>
          <p className="related-section__subtitle">Ver todos</p>
        </div>

        <div className="related-section__products-container">
          {loading ? (
            <div className="related-section__loading">Carregando produtos...</div>
          ) : products.length === 0 ? (
            <div className="related-section__loading">Nenhum produto encontrado</div>
          ) : (
            <div className="related-section__carousel">
              <button
                className="related-section__arrow related-section__arrow--left"
                onClick={scrollLeft}
                aria-label="Anterior"
              >
                ‹
              </button>
              <div className="related-section__scroll" ref={scrollContainerRef}>
                {products.map((product) => (
                  <ProductCard
                    key={`product-${product.id}`}
                    product={product}
                    onClick={handleProductClick}
                  />
                ))}
              </div>
              <button
                className="related-section__arrow related-section__arrow--right"
                onClick={scrollRight}
                aria-label="Próximo"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Banners parceiros ── */}
      <div className="related-section__partners">
        <article className="related-section__card">
          <div className="related-section__card-content">
            <h2 className="related-section__card-title">Parceiros</h2>
            <p className="related-section__card-description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="related-section__card-button">CONFIRA</button>
          </div>
        </article>
        <article className="related-section__card">
          <div className="related-section__card-content">
            <h2 className="related-section__card-title">Parceiros</h2>
            <p className="related-section__card-description">
              Lorem ipsum dolor sit amet, consectetur
            </p>
            <button className="related-section__card-button">CONFIRA</button>
          </div>
        </article>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}