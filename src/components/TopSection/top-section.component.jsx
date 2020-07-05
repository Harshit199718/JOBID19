import React from 'react'
import './top-section.styles.scss'
import Vector from '../../assets/assets/Vector.png'

function TopSection(props) {
    return (
        <div className='top-section'>
            <div className="headings">
                <h2>We connect</h2>
                <h1>Job Seekers <span>to</span></h1>
                <h1>Software Industry!</h1>
            </div>
            <div className="backImg">
                <img src={Vector} alt=""/>
            </div>
        </div>
    )
}

export default TopSection
