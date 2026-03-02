import { useState } from 'react'
import './Newsletter.scss'

export const Newsletter = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', { name, email, acceptedTerms })
  }

  return (
    <section className="newsletter" aria-label="Newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h2>
          <p className="newsletter__description">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__inputs">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Nome"
            />
            <input
              type="email"
              className="newsletter__input"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="E-mail"
            />
            <button type="submit" className="newsletter__button">
              INSCREVER
            </button>
          </div>
          <label className="newsletter__checkbox-label">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
              className="newsletter__checkbox"
            />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}