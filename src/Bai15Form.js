import React, { Component } from 'react';

class Bai15Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername : 'default',
            txtPassword : 'default',
            txtDescription : 'default',
            comboGender:    1,  // 1: male, 0: female
            rbLanguage: 'vi',
            chkStatus: true,
        }
    }

    onHandleChange = (event) => {
       console.log(event.target);
       console.log('click');

        var name = event.target.name;
        var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        console.log(value);

        this.setState({
            [name] : value      // note here!!!
        });
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (

            <div className="container mt-10">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">FORM</h5>
                        
                        <form onSubmit={ this.onHandleSubmit }>
                            <div className="form-group">
                                <label> Username:  </label>
                                <input type="text"
                                    placeholder="Please input username"
                                    className="form-control" 
                                    value={ this.state.txtUsername } 
                                    onChange={ this.onHandleChange } 
                                    name="txtUsername"  aria-describedby="helpId"  />
                                <small className="form-text text-muted">Username not allow space</small>
                            </div>

                            <div className="form-group">
                                <label> Username:  </label>
                                <input type="password"
                                    placeholder="Please input password"
                                    className="form-control" 
                                    value={ this.state.txtPassword } 
                                    onChange={ this.onHandleChange } 
                                    name="txtPassword" aria-describedby="helpId"  />
                                <small  className="form-text text-muted">Password with ***** </small>
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <textarea 
                                    className="form-control" 
                                    name="txtDescription" 
                                    rows="3"
                                    value={ this.state.txtDescription } 
                                    onChange={ this.onHandleChange } 
                                    ></textarea>
                            </div>

                            <div className="form-group">
                                <label> Gender: </label>
                                <select 
                                    className="form-control" 
                                    name="comboGender" 
                                    onChange={ this.onHandleChange }
                                    value={ this.state.comboGender }>
                                    <option value={0}> Female </option>
                                    <option value={1}> Male </option>
                                </select>
                            </div>

                            <label>Age: </label>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rbLanguage" id="exampleRadios1" value="en" 
                                    onChange={ this.onHandleChange }
                                    checked={ this.state.rbLanguage === 'en' } />
                                <label className="form-check-label" for="English">
                                    English
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rbLanguage" id="exampleRadios2" value="chi"
                                    onChange={ this.onHandleChange }    
                                    checked={ this.state.rbLanguage === 'chi' } />

                                <label className="form-check-label" for="Chinese">
                                    Chinese
                                </label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rbLanguage" id="exampleRadios3" value="vi"
                                    onChange={ this.onHandleChange }
                                    checked={ this.state.rbLanguage === 'vi' }  />
                                    
                                <label className="form-check-label" for="Vietnamese">
                                    Vietnamese
                                </label>
                            </div>


                            <label>
                                <input type="checkbox" name="chkStatus" value={true} onChange={ this.onHandleChange } /> enabled
                            </label>

                            <div className='float-right'>
                                 <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Bai15Form;
