function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sortBy">Ordenar por</label>

      <select
        id="sortBy"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="featured">Destacados</option>
        <option value="price-asc">Menor precio</option>
        <option value="price-desc">Mayor precio</option>
        <option value="rating">Mejor rating</option>
        <option value="offers">Ofertas</option>
        <option value="new">Novedades</option>
      </select>
    </div>
  );
}

export default SortDropdown;