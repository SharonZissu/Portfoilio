import React from 'react';


const OnlineStore = () => {
    return (
        <main className='project-container'>
            <div className='online-store'>
                <div className='online-store__images'>
                    <img src={require("../../../images/project-store.png")} alt="project main" className='online-store__main-img' />
                    <div className='online-store__images-right'>
                        <img src={require("../../../images/project-store2.png")} alt="project sub" className='online-store__sub-img' />
                        <img src={require("../../../images/project-store3.png")} alt="project sub" className='online-store__sub-img online-store__sub-img--2' />
                    </div>
                </div>
                <div className='online-store__content'>
                    <div className='content__info'>
                        <h1 className='online-store__heading'>Responsive Online Store</h1>
                        <p className='online-store__overview'>• client - React js includes React Hooks, React Router, and Redux.<br />
                    •	server - Node js with Express, MongoDB & Mongoose.<br />
                    •	More elements - Authentication (JWT), Image Upload, Validation, Pagination and Mail notification.<br />
                    •	Includes two types of users: Admin and User. Admin can add, delete and update products.
                    </p>
                    </div>
                    <a href='https://online-shop-73f91.web.app/' className='online-store__btn'>Visit <span>&rarr;</span></a>
                </div>

            </div>
        </main >
    )
}

export default OnlineStore
