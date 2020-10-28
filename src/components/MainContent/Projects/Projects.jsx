import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <main className='projects'>
            <Link to='/projects/online-store' className='projects__link' >
                <div className='project'>
                    <img src={require("../../../images/project-store2.png")} alt="online store project" className='project__img' />
                    <label className='project__name'>Online Store</label>
                </div>
            </Link>
            <Link to='/projects/how-fast-are-you' className='projects__link' >
                <div className='project'>
                    <img src={require("../../../images/how-fast-are-you-linkdin.png")} alt="online store project" className='project__img' />
                    <label className='project__name'>How Fast Are You?</label>
                </div>
            </Link>
        </main>
    )
}

export default Projects
