import React from 'react'
import img from'../../resources/pexels-pixabay-247597.jpg';
function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.card.image} alt="" />
                <h1>{props.card.category}</h1>
                <h3>{props.card.title}</h3>
            </div>
        </>
    );
}

export default Card