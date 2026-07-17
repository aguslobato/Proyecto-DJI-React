function CarouselControls({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) {
  return (
    <div className="carousel-controls">
      <button
        type="button"
        className="carousel-control-button"
        onClick={onPrevious}
        disabled={disablePrevious}
        aria-label="Ver productos anteriores"
      >
        ←
      </button>

      <button
        type="button"
        className="carousel-control-button"
        onClick={onNext}
        disabled={disableNext}
        aria-label="Ver productos siguientes"
      >
        →
      </button>
    </div>
  );
}

export default CarouselControls;