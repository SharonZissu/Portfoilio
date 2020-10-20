import React from 'react';


const Projects = () => {
    return (
        <main className='projects'>
            <div className='project'>
                <div className='project__images'>
                    <img src={require("../../../images/project-store.png")} alt="project main" className='project__main-img' />
                    <div className='project__images-right'>
                        <img src={require("../../../images/project-store2.png")} alt="project sub" className='project__sub-img' />
                        <img src={require("../../../images/project-store3.png")} alt="project sub" className='project__sub-img project__sub-img--2' />
                    </div>
                </div>
                <div className='project__content'>
                    <div className='content__info'>
                        <h1 className='project__heading'>Responsive Online Store</h1>
                        <p className='project__overview'>• client - React js includes React Hooks, React Router, and Redux.<br />
                    •	server - Node js with Express, MongoDB & Mongoose.<br />
                    •	More elements - Authentication (JWT), Image Upload, Validation, Pagination and Mail notification.<br />
                    •	Includes two types of users: Admin and User. Admin can add, delete and update products.
                    </p>
                    </div>
                    <a href='https://online-shop-73f91.web.app/' className='project__btn'>Visit <span>&rarr;</span></a>
                </div>

            </div>
        </main >
    )
}

export default Projects
