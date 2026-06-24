function FeatureCards() {
  const featuredProducts = [
    {
      id: 1,
      title: "Osmo Action 5 Pro",
      description:
        "The Action Camera With Revolutionary Image Quality",
      price: "From USD $319",
      background: "https://se-cdn.djiits.com/stormsend/uploads/ddf9b4b036acb201fc732d501ea3110e.jpg?h=774&thumb=zfcJBYBid3hPiIdpiLhnh1uQxgZa&w=1032",
      productImage: "https://se-cdn.djiits.com/stormsend/uploads/e0cfc997f1cbf84a669df617785da0d8.png?h=1302&thumb=0PeBBAASd5l3yUd%2Bf1cGcRVwgfknuFd3BQ%3D%3D&w=1002",
    },

    {
      id: 2,
      title: "DJI RS 4 Mini",
      description:
        "Compact and Lightweight Gimbal for Content Creators",
      price: "From USD $269",
      background: "https://se-cdn.djiits.com/stormsend/uploads/abb778d75ca3646fa6956fb11d60de64.jpg?h=774&thumb=qfcNDYBZd3dmiIiAeEhoeXh5gPcn&w=1032",
      productImage: "https://se-cdn.djiits.com/stormsend/uploads/28d4d7db40948e193f2ac13ba27610bb.png?h=1302&thumb=5AeCBAASmHiZh4mO77v9ISSAgfY5lnqIBw%3D%3D&w=1002",
    },

    {
      id: 3,
      title: "Osmo Action 4",
      description:
        "Action Camera with Best-in-Class Image Quality",
      price: "From USD $179",
      background: "https://se-cdn.djiits.com/stormsend/uploads/6f0bfb6c92933c04b3290070dad5d87f.jpg?h=774&thumb=UVkGDYRVd4egiIdyh8eGi1WgYgYp&w=1032",
      productImage: "https://se-cdn.djiits.com/stormsend/uploads/c043fdac4723f81dc7d37e1f64219dcd.png?h=1302&thumb=EhiCBAARe4BrkWmJqVgJiZVwkfonyUd4BQ%3D%3D&w=1002",
    },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-12 col-md-4">
            <div className="position-relative overflow-hidden rounded-4 shadow" style={{height: "500px",}}>
              {/* Fondo */}
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundImage: `url(${product.background})`,backgroundSize: "cover",backgroundPosition: "center",}}/>
              {/* Overlay oscuro */}
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:"linear-gradient(to bottom, rgba(0,0,0,.05), rgba(0,0,0,.85))",}}/>
              {/* Producto flotante */}
              <img src={product.productImage} alt={product.title} className="position-absolute"
                style={{
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "280px",
                  zIndex: 3,
                  filter:"drop-shadow(0px 20px 40px rgba(0,0,0,.5))",
                }}/>

              {/* Información */}
              <div className="position-absolute bottom-0 start-0 w-100 p-4 text-white" style={{zIndex: 4,}}>
                <h2 className="fw-bold">{product.title}</h2>
                <p className="text-light" style={{minHeight: "60px",}}>{product.description}</p>
                <div className=" d-flex justify-content-between align-items-center mt-4">
                  <strong>{product.price}</strong>
                  <Link to={`/product/${product.id}`}><button className=" btn btn-light rounded-pill px-4">Buy Now</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default FeatureCards;