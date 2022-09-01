import React from 'react';
import { multiply } from '../../utilities/calculate';

const Cosmetics = () => {
    
    const a = 10;
    const b = 20;
    const c = multiply(a, b);
    return (
        <div>
            <h1>test {c}</h1>
        </div>
    );
};

export default Cosmetics;