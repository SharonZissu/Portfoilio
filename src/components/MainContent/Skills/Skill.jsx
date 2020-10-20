import React from 'react'
import { Carousel } from 'react-bootstrap';

const Skill = ({ name }) => {
    return (

        <div className='skills__skill'>

            <div className='skills__skill__side skills__skill__side--front '>
                <img src={require(`../../../images/${name}-logo.jpg`)} alt={`${name} logo`} className='skills__skill--img ' />
                <h1 className='skills__skill--name'>{name}</h1>
            </div>
            <div className={`skills__skill__side skills__skill__side--back ${name}`}></div>

        </div>

    )
}

export default Skill
