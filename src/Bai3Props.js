import React, { Component } from 'react';
import Product from './Component/Product';
// import Bai1 from './Bai1';

class Bai3Props extends Component {

    showList(product) {
        if (product.status) {
            return  <ul>
                    <li> product ID:  { product.id  },  </li>
                    <li> product Name:  { product.name  },  </li>
                    <li> product Price:  <label class="btn btn-primary"> { product.price  } </label>  </li>
                    <li> product Status:  { product.status  },  </li>
                </ul>
        }
    }

    render() {

        var products = [
            {
                id: 1, 
                name: 'Iphone 6s',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyx82HIFkhYRigj0J2ePqIEPsG12Apzb947g&usqp=CAU',
                price: "15000000",
                status: true,
            },
            {
                id: 2, 
                name: 'Samsung Galaxy Note',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyx82HIFkhYRigj0J2ePqIEPsG12Apzb947g&usqp=CAU',
                price: "7000000",
                status: true,
            },
            {
                id: 3, 
                name: 'Oppo F1s',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyx82HIFkhYRigj0J2ePqIEPsG12Apzb947g&usqp=CAU',
                price: "3250000",
                status: true,
            },
        ];

        var elements = products.map((prod, index) => {

            let result = '';
            if (prod.status) {
                result =  <Product 
                            key={ prod.id }
                            price={ prod.price }
                            image={ prod.image }
                        >
                            { prod.name }
                        </Product>
            }

            return result;
        });

        return (
            <div className="container">
                <div className="row mt-10">
                    { elements }
                </div>
            </div>
        );
    }
}

export default Bai3Props;
