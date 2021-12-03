import React, { useState, useEffect } from 'react';
import Cosmetic from "../cosmetic/Cosmetic";
import axios from 'axios';
import './home.css';

function Home() {
    const [cosmetics, setCosmetics] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get(
                'https://makeup-api.herokuapp.com/api/v1/products.json'
        )
            .then(res => {
                setCosmetics(res.data);
                console.log(res.data);
        })
        .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCosmetics = cosmetics.filter(cosmetic =>
        cosmetic.name.toLowerCase().includes(search.toLowerCase()
        )
    );

    return (
        <div className='home'>
            <div className="container">
                <div className='cosmetic-search'>
                    <h1 className='cosmetic-text'>Search a cosmetic</h1>
                    <form>
                        <input
                            className='cosmetic-input'
                            type='text'
                            onChange={handleChange}
                            placeholder='Search by product name'
                        />
                    </form>
                </div>
                <div className="cosmetic-grid">
                    {filteredCosmetics.filter(f=>f.price!=0 & f.image_link.value==null).map(cosmetic => {
                        return (
                            <Cosmetic
                                id={cosmetic.id}
                                brand={cosmetic.brand}
                                name={cosmetic.name}
                                price={cosmetic.price}
                                image_link={cosmetic.image_link}
                                product_link={cosmetic.product_link}
                                website_link={cosmetic.website_link}
                                description={cosmetic.description}
                                category={cosmetic.category}
                                product_type={cosmetic.product_type}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
