import { useState, useEffect, useRef } from 'react'
import type { Product, CarouselProduct } from '../../types'
import { fetchCarouselProducts } from '../../utils/api'
import { ProductCard } from '../ProductCard'
import { ProductModal } from '../ProductModal'
import './ProductShowcase.scss'

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

export const ProductShowcase = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('CELULAR')
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

  const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS']

  return (
    <section className="product-showcase" aria-label="Produtos relacionados">
      <div className="product-showcase__container">
        <div className="product-showcase__header">
          <h2 className="product-showcase__title">Produtos relacionados</h2>
        </div>

        <div className="product-showcase__tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`product-showcase__tab ${
                activeTab === tab ? 'product-showcase__tab--active' : ''
              }`}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Carrossel ── */}
        {loading ? (
          <div className="product-showcase__loading">Carregando produtos...</div>
        ) : products.length === 0 ? (
          <div className="product-showcase__loading">Nenhum produto encontrado</div>
        ) : (
          <div className="product-showcase__carousel">
            <button
              className="product-showcase__arrow product-showcase__arrow--left"
              onClick={scrollLeft}
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className="product-showcase__scroll" ref={scrollContainerRef}>
              {products.map((product) => (
                <ProductCard
                  key={`product-${product.id}`}
                  product={product}
                  onClick={handleProductClick}
                />
              ))}
            </div>

            <button
              className="product-showcase__arrow product-showcase__arrow--right"
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