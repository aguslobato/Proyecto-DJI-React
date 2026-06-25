import {useEffect, useState} from "react";
import {products} from "../data/products";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Link }from "react-router-dom";
import './pages.css'
import FeaturedCards from "../components/FeatureCards";

function Home() {

  const [data, setData] = useState([]);
  useEffect(() => {
    // Simula API
    setTimeout(() => {
      setData(products);
    }, 2000);

  }, []);

  return (

    <>
        <Navbar/>
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
            <div className="nav-category bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/3c9cd93a675eb4a73b1266442966a6c1.png?h=288&thumb=2PeBBQAiN6eKZYgKZ%2FeHaH%2BISIeId3Bqxw%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>DJI Air</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/d41e54fce7cf0951294aa1226ad3f070.png?h=288&thumb=kfeBBQA0m3KLdkgGZ4CHCniYN2iHeICLpw%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Osmo Action</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/2d744151dcc8b9ae61356d4ab4b6a64c.png?h=288&thumb=FgiCBQASd5lvwW%2BRGGeRcGcHBsp6hoZpSA%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Ronin Stabilizers</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/74790f0b9cbaf7ffe1e518f53e1addd2.png?h=576&thumb=EgiGBQA3f5N5hziHhwiMg7AoN1h3eHCJWA%3D%3D&w=576" alt="" className="img-fluid img-nav-category" />
                                <h6>DJI Power</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/4de6db8a13a9f1f486f72ade11ce6e4a.png?h=288&thumb=GviBBQAzm3NkmVf3momA2a%2B4J3h3iICLqA%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>DJI Mic</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/89922a004ea412a3554faf9cad306732.png?h=288&thumb=EPiBBQA21Alcp3xEGibfDFZlJVmHeIB6Vg%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Ronin Cinema Cameras</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/a9a50d9d6aeb0d41c5ad100a41e6a36e.png?h=288&thumb=1feBBQAic3%2BHaLaZxiLdD2WbaCh3eHCZqA%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Pro Accessories</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/a9a50d9d6aeb0d41c5ad100a41e6a36e.png?h=288&thumb=1feBBQAic3%2BHaLaZxiLdD2WbaCh3eHCZqA%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Osmo Pocket</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/95c293123163ed2a2fa97f85659dc870.png?h=288&thumb=1veBBQAzm0B5h1iWaKWKTyn1B6iHeIKMZw%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Osmo 360</h6>                        
                            </Link>
                        </div>
                        <div className="col">
                            <Link className="px-3 text-center" to="">
                                <img src="https://se-cdn.djiits.com/stormsend/uploads/d185c001397a2565559e32453f48307e.png?h=288&thumb=HQiCBQAiaKeOcHxUR3mdgLcICMd6hYdoSA%3D%3D&w=288" alt="" className="img-fluid img-nav-category" />
                                <h6>Osmo Mobile</h6>                        
                            </Link>
                        </div>
                    </div>                
                </div>
            </div>
        </div>


        <div className="bg-grey py-5">
            <FeaturedCards/>    
        </div>
        

        <div className="bg-grey py-5">
            <div className="container">
                <div className="row">
                    {data.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    </>


  );
}

export default Home;