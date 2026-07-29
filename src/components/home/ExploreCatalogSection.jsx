import CategoryCard from "./CategoryCard";
import { catalogCategories } from "./categoryData";
import "../components.css";

function ExploreCatalogSection() {
  return (
    <section className="explore-catalog-section" aria-labelledby="explore-catalog-title">
      <div className="container">
        <header className="explore-catalog-header">
          <p className="explore-catalog-eyebrow">Encontrá tu próximo equipo</p>
          <h2 id="explore-catalog-title" className="explore-catalog-title">Explorá por categoría</h2>
          <p className="explore-catalog-description">Descubrí tecnología pensada para cada proyecto, desde la captura hasta la producción.</p>
        </header>
        <div className="explore-catalog-grid">
          {catalogCategories.map((category) => (
            <CategoryCard key={category.id}{...category}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreCatalogSection;