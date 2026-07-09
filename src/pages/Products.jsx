import { useMemo, useState } from "react";
import { products } from "../services/products";
import ProductToolbar from "../components/product/ProductToolbar";
import AnimatedProductGrid from "../components/product/AnimatedProductGrid";
import "./pages.css";

function Products() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Todos");
    const [sortBy, setSortBy] = useState("featured");

    const filteredProducts = useMemo(() => {
        let result = [...products];
        // BUSCADOR
        if (search.trim() !== "") {
            result = result.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        // CATEGORÍAS
        if (category !== "Todos") {
            result = result.filter(product =>
                product.category === category
            );
        }
        // ORDEN
        switch (sortBy) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                result.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;
            case "offers":
                result = result.filter(product => product.isOffer);
                break;
            case "new":
                result = result.filter(product => product.isNew);
                break;
            default:
                result.sort((a, b) => b.featured - a.featured);
        }
        return result;
    }, [search, category, sortBy]);

    return (

        <main className="products-page">
            <section className="products-hero">
                <div className="container">
                    <p className="section-subtitle">VisionTech</p>
                    <h1 className="section-title">Explore Our Collection</h1>
                    <p className="section-description">Tecnología premium para creadores, cineastas,pilotos y aventureros.</p>
                </div>
            </section>
            <section className="container py-5">
                <ProductToolbar search={search} setSearch={setSearch} category={category} setCategory={setCategory} sortBy={sortBy} setSortBy={setSortBy}/>
                <div className="products-found">
                    {filteredProducts.length} productos encontrados
                </div>
                <AnimatedProductGrid products={filteredProducts}/>
            </section>
        </main>

    );

}

export default Products;