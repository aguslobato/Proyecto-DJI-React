const categories = [
  "Todos",
  "Drones",
  "Cámaras",
  "Gimbals",
  "Audio",
  "Accesorios",
];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-filter">
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          className={`category-pill ${
            category === item ? "active" : ""
          }`}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;