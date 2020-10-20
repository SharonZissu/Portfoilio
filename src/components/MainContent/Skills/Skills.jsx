import React, { useState } from 'react'
import Skill from './Skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-bootstrap';


const NUM_OF_SKILLS = 6;
const skillsNames = ['html', 'css', 'js', 'react-js', 'node-js', 'mongo-db'];
const Skills = () => {
    // const [count, setCount] = useState(0);

    // const handlePrevArrowClicked = () => {
    //     if (count === 0) {
    //         setCount(NUM_OF_SKILLS - 1);
    //     } else {
    //         setCount(count - 1);
    //     }
    // }

    // const handleNextArrowClicked = () => {
    //     if (count === NUM_OF_SKILLS - 1) {
    //         setCount(0);
    //     } else {
    //         setCount(count + 1);
    //     }
    // }

    const skills = [];

    for (let i = 0; i < NUM_OF_SKILLS; i++) {
        skills.push(<Skill name={skillsNames[i]} />)
    }

    return (
        <main className='skills'>


            <Carousel >
                {skills.map(skill => <Carousel.Item >{skill}</Carousel.Item>)}

            </Carousel>
        </main>
    )

}

export default Skills


