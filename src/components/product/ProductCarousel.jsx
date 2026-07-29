import { useEffect, useState } from "react";
import CarouselControls from "../home/CarouselControls";
import ProductCard from "./ProductCard";
import "../components.css";

function ProductCarousel({ products = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerView);
  const lastPage = Math.max(totalPages - 1, 0);

  /*
   * Si cambia el tamaño de la pantalla, puede cambiar la cantidad
   * de páginas. Evitamos quedar posicionados en una página inexistente.
   */
  useEffect(() => {
    setCurrentPage((previousPage) =>
      Math.min(previousPage, lastPage)
    );
  }, [lastPage]);

  const handleNext = () => {
    setCurrentPage((previousPage) =>
      Math.min(previousPage + 1, lastPage)
    );
  };

  const handlePrevious = () => {
    setCurrentPage((previousPage) =>
      Math.max(previousPage - 1, 0)
    );
  };

  const handleIndicatorClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const translate = currentPage * 100;

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="product-carousel">
      <CarouselControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={currentPage === 0}
        disableNext={currentPage === lastPage}
      />

      <div className="product-carousel-viewport">
        <div className="product-carousel-track" style={{transform: `translateX(-${translate}%)`,}}>
          {products.map((product) => (
            <div className="product-carousel-slide" style={{flexBasis: `${100 / itemsPerView}%`,}} key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="product-carousel-indicators" aria-label="Páginas del carrusel">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button type="button" className={`product-carousel-indicator ${
                currentPage === pageIndex ? "active" : ""
              }`}
              onClick={() => handleIndicatorClick(pageIndex)}
              aria-label={`Ir a la página ${pageIndex + 1}`}
              aria-current={
                currentPage === pageIndex ? "true" : undefined
              }
              key={pageIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;