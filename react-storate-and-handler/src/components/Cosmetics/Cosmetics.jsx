import React, { useEffect } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
const Cosmetics = () => {

    // const a = 10;
    // const b = 20;
    // const c = multiply(a, b);
    // const cosmetics = [
    //     {
    //         "id": "63109bf56b14674dc474a259",
    //         "price": 160,
    //         "name": "Evelyn Holcomb"
    //     },
    //     {
    //         "id": "63109bf5011337e4a94e40b0",
    //         "price": 58,
    //         "name": "Cherry Schultz"
    //     },
    //     {
    //         "id": "63109bf5cbbdb2addc97bf8d",
    //         "price": 367,
    //         "name": "Shannon Valenzuela"
    //     },
    //     {
    //         "id": "63109bf5946797ca2512ac5e",
    //         "price": 24,
    //         "name": "Dotson Buckner"
    //     },
    //     {
    //         "id": "63109bf55c044631af4417d5",
    //         "price": 65,
    //         "name": "Lindsey Nielsen"
    //     },
    //     {
    //         "id": "63109bf53b7a46d5c33fb4bf",
    //         "price": 384,
    //         "name": "Irwin Price"
    //     },
    //     {
    //         "id": "63109bf54d507a60cbbc3cbd",
    //         "price": 262,
    //         "name": "Joyner Patrick"
    //     }


    // ]
    const [cosmetics, setCosmetics] = React.useState([]);
    useEffect(() => {
        fetch('https://testapidemo.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>test</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;