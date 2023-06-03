import React from "react";


const Jumbotron = (props) => {
    return (
       
   <div className="row ms-5 me-5 justify-content-around border-bottom">
       <div className="card text-center col-2 mt-4 mb-4">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
            <div className="card-footer text-body-secondary">
                {props.footer}
            </div>
        </div>
        <div className="card text-center col-2 mt-4 mb-4">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
            <div className="card-footer text-body-secondary">
                {props.footer}
            </div>
        </div>
        <div className="card text-center col-2 mt-4 mb-4 ms-1">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
            <div className="card-footer text-body-secondary">
                {props.footer}
            </div>
        </div>
        <div className="card text-center col-2 mt-4 mb-4">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
            <div className="card-footer text-body-secondary">
                {props.footer}
            </div>
        </div>
        <div className="card text-center col-2 mt-4 mb-4">
            <div className="card-header">
                {props.header}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
            <div className="card-footer text-body-secondary">
                {props.footer}
            </div>
        </div>




        
    </div> 






    );
}
export default Jumbotron
