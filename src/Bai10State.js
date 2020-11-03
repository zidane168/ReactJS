import React, { Component } from 'react';

class Bai10State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
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
            ],
            isActive: true,
        };
    }

    checkStatus = () => {
        this.setState({
            'isActive' : !this.state.isActive,
        });
    }

    render() {

        var elements = this.state.products.map((prod, index) => {

            let result = '';
            if (prod.status) {
                result = <tr key={ index }>
                    <td> { prod.id } </td>
                    <td> { prod.name } </td>
                    <td> { prod.price } </td>
                </tr>
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
                        <table className="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th> STT </th>
                                    <th> Product Name </th>
                                    <th> Price </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                { elements }
                            </tbody>
                        </table>

                        <button className="btn btn-warning" onClick={ this.checkStatus } >
                            Active : { this.state.isActive ? 'true' : 'false'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bai10State;
