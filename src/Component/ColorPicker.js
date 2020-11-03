import React, { PureComponent } from 'react';

class ColorPicker extends PureComponent {  

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', 'yellow', 'purple'],
        };
    }
    
    showColor(color) {      // style: watch pass params structure
        return {
            backgroundColor: color
        }
    }

    setActiveColor = (c)  => {
        this.props.onReceiverColor(c);
    }

    render() {

        var elementColors = this.state.colors.map((c, index) => {
            return <span key={ index } 
                         style={ this.showColor(c) } 
                         className={ this.props.color === c ? 'active squad ml-10' : 'squad ml-10'}
                         onClick={ () => this.setActiveColor(c) }  // click into color c will pass params c to Bai11Practice.js
                        >
                   </span>
        });

        return (
            <div className="card mt-10">
                <div className="card-header">
                   Color Picker
                </div>
                <div className="card-body d-flex">
                    { elementColors }
                </div>
            </div>
        );
    }
}

export default ColorPicker;               
               
              