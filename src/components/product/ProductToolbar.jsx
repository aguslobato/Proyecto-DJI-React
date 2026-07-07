import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortDropdown from "./SortDropdown";
import "../components.css";

function ProductToolbar({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <section className="product-toolbar">
      <SearchBar search={search} setSearch={setSearch} />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <SortDropdown
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </section>
  );
}

export default ProductToolbar;