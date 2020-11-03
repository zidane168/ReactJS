import React, { Component } from 'react';
import ColorPicker from './Component/ColorPicker';
import SizeSetting from './Component/SizeSetting';
import Reset from './Component/Reset';
import Result from './Component/Result';

class Bai11Practice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color:  'red',
            fontSize: 12,
        };
    }

    onSetColor = (c) => {
       this.setState({
            color: c,
       });
    }
    
    onSetSize = (s) => {
        this.setState({
            fontSize: 8 <= this.state.fontSize + s && this.state.fontSize + s <= 36 ? this.state.fontSize + s : this.state.fontSize,
        });


        console.log(s);
    }

    onReset = (value) => {
       if (value) {
            this.setState({
                color:  'red',
                fontSize: 12,
            });

            console.log(this.state.color);
       }
      
    }

    render() {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ColorPicker color={ this.state.color } onReceiverColor={ this.onSetColor } />     
                        </div>
                        <div className="col"> 
                            <SizeSetting fontSize={ this.state.fontSize } onReceiverSize={ this.onSetSize }  />     
                            <Reset onResetDefaultParent={ this.onReset } />     
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <Result color={ this.state.color } fontSize={ this.state.fontSize } />   
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default Bai11Practice;
