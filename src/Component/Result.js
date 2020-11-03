import React, { PureComponent } from 'react';

class Result extends PureComponent {  

    setStyle() {
        return {
            color: this.props.color,    // get from Bai11Practice;
            borderColor: this.props.color,
            fontSize: this.props.fontSize,
        }
    }


    render() {
        return (
            
            <div className="card mt-10">
                <div className="card-header">
                    Result: { this.props.fontSize }px, { this.props.color }
                </div>
                <div className="card-body justify-content-left" style={ this.setStyle() } >
                    Test with format
                </div>
            </div>
        );
    }
}

export default Result;               
               
              