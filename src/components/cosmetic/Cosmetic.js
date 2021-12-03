import './cosmetic.css';

const Cosmetic = ({
    brand,
    name,
    price,
    image_link,
    product_link,
    website_link,
    description,
    category,
    product_type
}) => {
    return (
        <div className='cosmetic-card'>
            {/* <a href={`/${id}`}> */}
                <div className="img-body">
                    <img src={image_link} alt='Sorry! This image is not available right now' onError="this.onerror=null; this.src='asset/default.png';" />
                </div>
                <div className='cosmetic-body'>
                    <h5 className="cosmetic-title">{name}</h5>
                </div>
                <div class="cosmetic-small-info">
                    <p class="brand">{brand}</p>
                    <p class="price">$ {price}</p>
                </div>
            {/* </a> */}
            
            
            {/* <div className="overlay" id={id}>
                <a href="#" className="close">x close</a>
                <img src={image_link} />
            </div> */}
        </div>
    );
};

export default Cosmetic;
