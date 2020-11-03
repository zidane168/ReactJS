import React, { Component } from 'react';

class Bai2 extends Component {

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
     //   var a = 590;

        var product = {
            id: 1,
            name: 'Iphone 5',
            price: 20000,
            status: true, 
        };

        var users = [
            {
                id: 1, 
                name: "Nguyen Van A",
                age: 15,
            },
            {
                id: 2, 
                name: "原室道",
                age: 20,
            },
        ];

        var elements  = users.map((user, index) => {
            return  <div key={ user.id }>
                        <h2> ID: { user.id } </h2>
                        <p> Name: { user.name } </p>
                        <p> Age: <label class="btn btn-danger"> { user.age } </label>  </p>
                    </div>
        });
        return (
            <div>

                { this.showList(product) }
                { elements }
            </div>
        );
    }
}

export default Bai2;
