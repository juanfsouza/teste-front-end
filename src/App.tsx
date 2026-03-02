import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { CategoryIcons } from './components/CategoryIcons'
import { ProductShowcase } from './components/ProductShowcase'
import { Partners } from './components/Partners'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import './styles/App.scss'
import { BrandCarousel } from './components/BrandCarousel'
import { RelatedSection } from './components/RelatedSection'

function App() {
  return (
    <div className="app">
      <TopBar />
      <Header />
      <Navigation />
      <main>
        <Hero />
        <CategoryIcons />
        <ProductShowcase />
        <Partners />
        <RelatedSection />
        <BrandCarousel />
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
