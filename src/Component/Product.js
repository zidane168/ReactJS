import React, { PureComponent } from 'react';
import NumberFormat from 'react-number-format';
class Product extends PureComponent {  
    render() {
        return (
            <div className="col">
                <img alt={ this.props.children } src={ this.props.image} /> 
                <p> { this.props.children } </p>

                <NumberFormat 
                    value={ this.props.price } 
                    thousandSeparator={true} 
                />
                <p className="btn btn-danger"> { this.props.price.toLocaleString() } </p>
                <p> { this.props.children } </p>
                
            </div>
        );
    }
}

export default Product;