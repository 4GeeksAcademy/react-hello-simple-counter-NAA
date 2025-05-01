import React from "react"
const Secondhand = (props) => {
    return (
        <div className="row bg-black text-white text-center">
            <div className="counter col">
                <i className="fa-regular fa-clock"></i>
            </div>
            <div className="counter col-md">{props.first}</div>
            <div className="counter col-md">{props.second}</div>
            <div className="counter col-md">{props.third}</div>
            <div className="counter col-md">{props.fourth}</div>
            <div className="counter col-md">{props.fifth}</div>
            <div className="counter col-md">{props.sixth}</div>
        </div>
        
    )
}
export default Secondhand