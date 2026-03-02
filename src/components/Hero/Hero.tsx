import './Hero.scss'

export const Hero = () => {
  return (
    <section className="hero" aria-label="Promoção Black Friday">
      <picture className="hero__media" aria-hidden="true">
        <source srcSet="/hero-home.webp" type="image/webp" />
        <img
          className="hero__bg"
          src="/hero-home.jpg"
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__title">Venha conhecer nossas promoções</p>
          <p className="hero__discount">
            <span className="hero__discount-number">50% Off</span>
            <span className="hero__discount-text">nos produtos</span>
          </p>
          <button className="hero__button">Ver produto</button>
        </div>
      </div>
    </section>
  )
}

