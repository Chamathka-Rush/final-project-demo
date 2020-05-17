import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card-styles.css';

const CardUI = (props) => {
    return ( 
    <div>
        <div className="card text-center shadow">
            <div className="overflow">
                <img className="card-img-top" src={props.imgsrc}/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.text}</p>
                <Link 
                to={`/${props.page}`} 
                className="btn btn-outline-success btn-sm">Click</Link>
            </div>
        </div>
    </div> );
}
 
export default CardUI;