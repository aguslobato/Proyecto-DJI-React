import {useEffect, useState} from "react";
import {products} from "../services/products";
import ProductCard from "../components/product/ProductCard";
import { Link }from "react-router-dom";
import './pages.css'
import FeaturedCards from "../components/home/FeatureCards";
import WhyShopSection from "../components/home/WhyShopSection";

function Home() {

  const [data, setData] = useState([]);
  useEffect(() => {
    // Simula carga de productos descentralizada
    setTimeout(() => {
      setData(products);
    }, 2000);

  }, []);

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
        </div>
        
    </>


  );
}

export default Home;