import { useState, useEffect } from 'react'
import type { Product } from '../../types'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setQuantity(1)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price)
  }

  return (
    <div className="product-modal" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="product-modal__content" onClick={(e) => e.stopPropagation()}>

        <button className="product-modal__close" onClick={onClose} aria-label="Fechar modal">
          ×
        </button>

        {/* Imagem */}
        <div className="product-modal__image">
          <img src={product.photo} alt={product.name} />
        </div>

        {/* Info */}
        <div className="product-modal__info">
          <h2 id="modal-title" className="product-modal__name">
            {product.name.toUpperCase()}
          </h2>

          <span className="product-modal__current-price">
            {formatPrice(product.price)}
          </span>

          <p className="product-modal__description">{product.description}</p>

          <a href="#" className="product-modal__details-link">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="product-modal__actions">
            <div className="product-modal__quantity">
              <button
                className="product-modal__qty-btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span className="product-modal__qty-value">
                {String(quantity).padStart(2, '0')}
              </span>
              <button
                className="product-modal__qty-btn"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>

            <button className="product-modal__button">
              COMPRAR
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}