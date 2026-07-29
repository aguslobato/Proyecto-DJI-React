import {products} from "../services/products";
import { Link }from "react-router-dom";
import './pages.css'
import FeaturedCards from "../components/home/FeatureCards";
import WhyShopSection from "../components/home/WhyShopSection";
import ProductShowcase from "../components/home/ProductShowcase";
import ExploreCatalogSection from "../components/home/ExploreCatalogSection";

function Home() {

    const featuredProducts = products
  .filter((product) => product.featured)
  .slice(0,6);

  return (

    <>
        <div className="presentation">
            <div className="presentation-bg">
                <div className="container">
                    <div className="row align-self-center">
                        <div className="col-12.col-lg-6">
                            <h1>OSMO ACTION 4</h1>
                            <h3 className="my-3 mb-5">Action Camera with Best-in-class Image Quality</h3>
                            <Link className="link-bg-white" to="/">Shop Now</Link>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5">
            <FeaturedCards/>    
            <WhyShopSection/>
            <ProductShowcase title="Productos destacados" description="Tecnología seleccionada para llevar tus ideas más lejos." products={featuredProducts} variant="carousel"/>
            <ExploreCatalogSection />
        </div>
        
    </>


  );
}

export default Home;