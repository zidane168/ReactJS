import React, { PureComponent } from 'react';

class Reset extends PureComponent {  


    resetDefaultSetting = () => {
        this.props.onResetDefaultParent(true);
    }

    render() {
        return (
            <button className="mt-10 form-control btn btn-primary" type="submit"  onClick={ this.resetDefaultSetting }>
                Reset
            </button>
        );
    }
}

export default Reset;               
               
              