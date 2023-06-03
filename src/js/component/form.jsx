import React from "react";

const Form = (props) => {
    return(
            <div className="row justify-content-around">
                <form className="row g-3 col-5 mt-5 me-1">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">{props.email}</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">{props.password}</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">{props.address}</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">{props.address2}</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">{props.city}</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">{props.state}</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>{props.city1}</option>
                        <option>{props.city2}</option>
                        <option>{props.city3}</option>
                        <option>{props.city4}</option>
                            </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">{props.zip}</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                    {props.check}
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">{props.signIn}</button>
                    </div>     
                </form>
                <form className="row g-3 col-5 mt-5 ms-1">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">{props.email}</label>
                        <input type="email" className="form-control" id="inputEmail4"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">{props.password}</label>
                        <input type="password" className="form-control" id="inputPassword4"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">{props.address}</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label">{props.address2}</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">{props.city}</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">{props.state}</label>
                        <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>{props.city1}</option>
                        <option>{props.city2}</option>
                        <option>{props.city3}</option>
                        <option>{props.city4}</option>
                            </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">{props.zip}</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                    {props.check}
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">{props.signIn}</button>
                    </div>     
                </form>
            </div>
    );
}

export default Form;