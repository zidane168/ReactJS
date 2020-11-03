import React, { Component } from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import './Bai1.css';

class Bai1 extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <div className="row">
                    <div className="col-xs-6 border">
                        <Content />
                    </div>
                    <div className="col border">
                        <Content />
                    </div>
                </div>
               
            </div>
          );
    }
}

export default Bai1;
