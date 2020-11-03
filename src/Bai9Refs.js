import React, { Component } from 'react';
import ProductEvent from './Component/ProductEvent';

class Bai9Refs extends Component {

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

    onAddProduct = () => {
        alert(this.refs.productname.value);
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
                result =  <ProductEvent
                            key={ prod.id }
                            price={ prod.price }
                            image={ prod.image }
                        >
                            { prod.name }
                        </ProductEvent>
            }

            return result;
        });

        return (

            <div>

                <div className="container">
                    <div className="card mt-10">
                        <div className="card-header">
                            Event Ref
                        </div>
                        <div className="card-body">
                          
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="http://learn-tech-tips/blogspot.com" className="btn btn-primary">Go somewhere</a>
                            
                            <br />
                            <hr />
                            <label> Product Name: </label>
                            <input type='text' className="form-control" ref="productname" />  

                            <button type="submit" className="btn btn-primary" onClick={ this.onAddProduct } >
                                Add Product
                            </button>

                        </div>
                    </div>
                    <div className="row mt-10">
                        { elements }
                    </div>
                </div>
            </div>
        );
    }
}

export default Bai9Refs;
