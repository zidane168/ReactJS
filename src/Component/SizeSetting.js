import React, { PureComponent } from 'react';

class SizeSetting extends PureComponent {  

    onChangeSize = (value) => {
        this.props.onReceiverSize(value);
    }

    render() {
        return (
            <div className="card mt-10">
                <div className="card-header">
                    Size Setting: {this.props.fontSize}px
                </div>
                <div className="card-body  d-flex justify-content-center">
                    <button className="btn-large btn-warning ml-10" onClick={ () => this.onChangeSize(-2) } > DESC </button>
                    <button className="btn-large btn-warning" onClick={ () => this.onChangeSize(2) } > ASC </button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;               
               
              