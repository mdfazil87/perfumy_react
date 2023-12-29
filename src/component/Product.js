import image from "./images/one.jpg"
import image_2 from "./images/two.jpg"
import image_3 from "./images/three.jpg"


function Product() {
    return (
        <div className="products">
            <div className="box">
                <img src={image} alt="" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>

            <div className="box">
                <img src={image_2} alt="villain" />
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
            </div>
            <div className="box">
                <img src={image_3} alt="Designs Club" />
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
        </div>
    );
}

export default Product;
