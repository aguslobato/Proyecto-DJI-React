import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CategoryCard({
  title,
  eyebrow,
  description,
  image,
  link,
}) {
  return (
    <Link
      to={link}
      className="category-card"
      aria-label={`Explorar categoría ${title}`}
    >
      <img
        src={image}
        alt=""
        className="category-card-image"
        loading="lazy"
      />
      <div className="category-card-overlay" />
      <div className="category-card-content">
        <p className="category-card-eyebrow">{eyebrow}</p>
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-description">{description}</p>
        <span className="category-card-link">Ver categoría <FaArrowRight aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

export default CategoryCard;