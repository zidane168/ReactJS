import React, { PureComponent } from 'react';


class Content extends PureComponent {  
    render() {
        return (
            <div class="image">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-yellow-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1568141245782" alt="iphone"/>
                <div className="d-flex justify-content-center alert alert-primary" role="alert">
                    Button
                </div>
            </div>
        );
    }
}

export default Content;