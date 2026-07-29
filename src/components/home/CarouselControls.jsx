import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function CarouselControls({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {
  return (
    <div className="carousel-controls">
      <button type="button" className="carousel-control-button" onClick={onPrevious} disabled={disablePrevious} aria-label="Ver productos anteriores"><FaChevronLeft /></button>        
      <button type="button" className="carousel-control-button" onClick={onNext} disabled={disableNext} aria-label="Ver productos siguientes"><FaChevronRight /></button>
    </div>
  );
}

export default CarouselControls;