import React from 'react';
import Home from './index'


function Products() {
    return (
        <div>
            <h1>Product page</h1>
            <Home person={{firstName:"yarrut",lastName:"franken"}} text={"test"}/>
        </div>
    );
}

export default Products;