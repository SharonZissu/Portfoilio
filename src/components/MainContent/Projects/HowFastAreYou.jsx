import React from 'react'

const HowFastAreYou = () => {
    return (
        <main className='how-fast-are-you'>
            <div className='how-fast-are-you__content'>
                <h1 className='how-fast-are-you__heading'>How Fast Are You?</h1>
                <p className='how-fast-are-you__text'>A Game developed for the <b>mobile</b>, with <b>React JS</b> includes <b>React
                Hooks</b>, and <b>styled-components</b>.<br /><br />
                The target of the game is to touch from 1 to 50 as fast as you can. <br />You can read about the help buttons in the website.<br /> <br />
                So what are you? Cheetah or Tutle?
                    </p>
                <a href='https://how-fast-are-you.web.app/'><button className='how-fast-are-you__btn'>Let's Play</button></a>
            </div>
            <div className='how-fast-are-you__images'>
                <img src={require('../../../images/how-fast-are-you-img.png')} alt="how fast are you" className='how-fast-are-you__img' />
                <img src={require('../../../images/how-fast-are-you-linkdin.png')} alt="how fast are you" className='how-fast-are-you__img' />
            </div>
        </main>
    )
}

export default HowFastAreYou
