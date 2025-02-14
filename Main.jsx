import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
    return (

        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.himanshu} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Himanshu.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work
                            retreat</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Draft an email with a packing list for an upcoming
                            trip</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Look up a Linux shell command for a specific
                            task</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Generate unit tests for the following C#
                            function</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Main