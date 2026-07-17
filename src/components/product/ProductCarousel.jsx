import { useEffect, useState } from "react";
import CarouselControls from "../home/CarouselControls";

import ProductCard from "./ProductCard";

import "../components.css";

function ProductCarousel({ products = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(
    products.length - itemsPerView,
    0
  );
    const handleNext = () => {
    setCurrentIndex((previousIndex) =>
        Math.min(previousIndex + 1, maxIndex)
    );
    };

    const handlePrevious = () => {
    setCurrentIndex((previousIndex) =>
        Math.max(previousIndex - 1, 0)
    );
    };
  const safeCurrentIndex = Math.min(
    currentIndex,
    maxIndex
  );

  const translate =
    (100 / itemsPerView) * safeCurrentIndex;
    return (
    <div className="product-carousel">
        <CarouselControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={safeCurrentIndex === 0}
        disableNext={safeCurrentIndex === maxIndex}
        />

        <div className="product-carousel-viewport">
        <div
            className="product-carousel-track"
            style={{
            transform: `translateX(-${translate}%)`,
            }}
        >
            {products.map((product) => (
            <div
                className="product-carousel-slide"
                key={product.id}
            >
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        </div>
    </div>
    );
}

export default ProductCarousel;