import React from 'react'
import EducationCard from './EducationCard'
import nl2br from 'react-newline-to-break';


const Education = () => {
    return (
        <main className='education'>

            <EducationCard years='2020'
                place='sqlink'
                name='SQLink'
                text='React & Redux Course (40 hours)'
                imgType='jpg' />

            <EducationCard
                years='2018 - 2020'
                place='udemy'
                name='Udemy - Online Courses'
                text={nl2br('- CSS,JavaScript, React js, Node js the complete guide 2020 by Maximilian Schwarzmuller (200 hours).\n- The Complete 2020 Web Development Bootcamp by Dr. Angela Yu (54 hours).\n- Advanced CSS and Sass: Flexbox, Grid, Animations and More (28 hours).\n- The Complete Guide to Advanced React Component Patterns (6 hours).')}
                imgType='png' />

            <EducationCard
                years='2017 - 2020'
                place='hit'
                name='Holon Institute Of Technology'
                text='B.Sc. Computer Science, GPA: 88'
                imgType='jpg' />

            <EducationCard
                years='2008 - 2011'
                place='kugel'
                name='Kugel High School'
                text='Computer Class'
                imgType='jpg' />

        </main>
    )
}

export default Education
