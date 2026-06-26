import videoShopSection from '../../media/video-why-shop-section.mp4'

function WhyShopSection() {
    const benefits = [
        {title: "1% DJI Credit Reward", image: "https://se-cdn.djiits.com/stormsend/uploads/b32772747fa866ff571cd1f570b996ce.jpg", className: "benefit-large"},
        {title: "Over USD $35 Ships Free", image: "https://se-cdn.djiits.com/stormsend/uploads/58e1314444efe9e1306bd48d297c27ea.jpg?h=256&thumb=fRgGE4T4Z1h8heg4B4NxMBg%3D&w=576"},
        {title: "Free Fast Delivery Upgrade", image: "https://se-cdn.djiits.com/stormsend/uploads/a1c0a74cebf70d4f4f11cc4f11103b8f.jpg"},
        {title: "Up to 30 Day Returns", image: "https://se-cdn.djiits.com/stormsend/uploads/2c7c0d0507b34dbe2363f636b09b445e.jpg"},
        {title: "Popular Drones In Stock", image: "https://se-cdn.djiits.com/stormsend/uploads/5f0a644fb1e5d36de0b8bf33256d41f4.jpg?h=1536&thumb=8PcRBYBJl4d%2FmYd4aGZoeFC6CqTK&w=2304"},
        {title: "Official Refurbished", image: "https://se-cdn.djiits.com/stormsend/uploads/360470791393a60bf3eca6efce83c643.png?h=768&thumb=OAiKA4APmbZ%2Fd4dOKrCEBIeHgIhwCAg%3D&w=1152"},
        {title: "Get DJI Expert Help", image: "https://se-cdn.djiits.com/stormsend/uploads/2f9c9750c0b510ed1cd0736aa45dca92.jpg", className: "benefit-tall"},
    ];

  return (
    <section className="container my-5">
        <h3 className="fw-bold mb-3">Why shop with DJI Store</h3>
        <div className="row g-3">
            <div className="col-12 col-lg-3">
                <BenefitCard benefit={benefits[0]} large />
            </div>
            <div className="col-12 col-lg-6">
                <div className="row g-3">
                    {benefits.slice(1, 3).map((benefit) => (
                    <div className="col-12 col-md-6" key={benefit.title}>
                        <BenefitCard benefit={benefit} />
                    </div>
                    ))}
                    {benefits.slice(4, 6).map((benefit) => (
                    <div className="col-12 col-md-6" key={benefit.title}>
                        <BenefitCard benefit={benefit} />
                    </div>
                    ))}
                </div>
            </div>
            <div className="col-12 col-lg-3">
                <div className="row g-3">
                    <div className="col-12">
                        <BenefitCard benefit={benefits[3]} />
                    </div>

                    <div className="col-12">
                        <BenefitCard benefit={benefits[6]} />
                    </div>
                </div>
            </div>
        </div>
        <h3 className="fw-bold mt-5 mb-3">Handheld · Pro Shooting</h3>
        <div className="promo-banner position-relative rounded overflow-hidden shadow-sm">
            <video className="w-100 h-100 object-fit-cover"
            autoPlay
            muted
            loop
            playsInline src="">
                <source src={videoShopSection}  type="video/mp4"/>
            </video>
            <img src="https://se-cdn.djiits.com/stormsend/uploads/4048945693033536766234ce05dc0243.jpg?h=1330&thumb=nvcNA4A0lYafaIiYvmAkCFc%3D&w=3328" alt="DJI RS 5" className="w-100 h-100 object-fit-cover"/>
            <div className="promo-overlay position-absolute top-0 start-0 w-100 h-100" />
            <div className="promo-content position-absolute top-50 start-0 translate-middle-y text-white p-5">
                <h2 className="fw-bold">DJI RS 5</h2>
                <p>Lightweight Commercial Stabilizer</p>
                <strong>From USD $569</strong>
                <br />
                <button className="btn btn-light rounded-pill px-4 mt-4">Buy Now</button>
            </div>
        </div>
    </section>
  );
}

function BenefitCard({ benefit, large }) {
  return (
    <div className={`benefit-card bg-white rounded shadow-sm position-relative overflow-hidden ${large ? "benefit-card-large" : ""}`}>
      <h6 className="fw-bold text-center pt-3 px-2">{benefit.title}</h6>
      <img src={benefit.image} alt={benefit.title} className="benefit-img"/>
    </div>
  );
}

export default WhyShopSection;