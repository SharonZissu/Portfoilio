import React from 'react'
const EducationCard = ({ years, place, name, text, imgType }) => {
    return (
        <div className='education__period'>
            <p className='education__year'>{years}</p>
            <img src={require(`../../../images/${place}_logo.${imgType}`)} alt={`${place} logo`} className='education__logo' />
            <p className='education__name'>{name}</p>
            <div className='education__content'>
                <p className={`education__content--text ${place === 'udemy' && 'fo-size-small'}`}>{text}</p>
            </div>
        </div>
    )
}

export default EducationCard
