import './CategoryIcons.scss'

interface Category {
  name: string
  icon: string
}

const categories: Category[] = [
  { name: 'Tecnologia', icon: '/icons/category/dispositivos.svg', },
  { name: 'Supermercado', icon: '/icons/category/supermercados 1.svg' },
  { name: 'Bebidas', icon: '/icons/category/whiskey.svg' },
  { name: 'Ferramentas', icon: '/icons/category/ferramentas 1.svg' },
  { name: 'Saúde', icon: '/icons/category/cuidados-de-saude 1.svg' },
  { name: 'Esportes e Fitness', icon: '/icons/category/corrida 1.svg' },
  { name: 'Moda', icon: '/icons/category/moda 1.svg' },
]

export const CategoryIcons = () => {
  return (
    <section className="category-icons" aria-label="Categorias de produtos">
      <div className="category-icons__container">
        {categories.map((category, index) => (
          <div key={index} className="category-icons__item">
            <div className="category-icons__icon">
              <img src={category.icon} alt={category.name} />
            </div>
            <span className={`category-icons__name ${category.name === 'Tecnologia' ? 'category-icons__name--blue' : ''}`}>
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

