import React from 'react'

function Dish(props){
    return (
        <div>
            <h1>We are surving here {props.mainCourse} as a Main Course</h1>
            <h1>We are also surving Sweetdish Here that is {props.sweetDish}</h1>
            <hr/>
            <h1>We are surving here {props.mainCourse} as a Main Course</h1>
            <h1>We are also surving Sweetdish Here that is {props.sweetDish}</h1>
        </div>
    )
}

export default Dish;