import React, { PureComponent } from 'react';

class ProductEvent extends PureComponent {  

    constructor(props) {
        super(props);
        this.addOnCart1 = this.addOnCart1.bind(this);
    }

    addOnCart1() {
        alert(this.props.children + " . " + this.props.price);
    }

    addOnCart2 = () => {
        alert(this.props.children + " . " + this.props.price);
    }

    render() {
        return (
            <div className="col">
              
                <img className='align-items-center' alt={ this.props.children } src={ this.props.image} /> 
                
                <p className='d-flex justify-content-center'> { this.props.children } </p>

                <p className="d-flex justify-content-center btn btn-danger"> { this.props.price } </p>
               
                <p className='d-flex justify-content-center'> { this.props.children } </p>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-warning' onClick={ this.addOnCart2 }>  MUA NGAY 1 </button>
                    <button className='btn btn-warning' onClick={ this.addOnCart1 }>  MUA NGAY 2</button>
                </div>
            </div>
        );
    }
}

export default ProductEvent;