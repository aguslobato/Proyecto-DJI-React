function SearchBar({ search, setSearch }) {
  return (
    <div className="product-search-wrapper">
      <span className="product-search-icon">🔍</span>

      <input
        type="text"
        className="product-search-input"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;