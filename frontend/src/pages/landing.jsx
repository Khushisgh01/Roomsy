import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>UrRoomsy</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => router("/aljk23")}>Join as Guest</p>
                    <p onClick={() => router("/auth")}>Register</p>
                    <div onClick={() => router("/auth")} role='button' style={{border: '1px solid #FF9839', padding: '5px 20px', borderRadius: '20px'}}>
                        <p style={{margin: 0}}>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div style={{flex: 1, paddingRight: '50px'}}>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> seamlessly with UrRoomsy</h1>
                    <p style={{color: '#94a3b8', fontSize: '1.2rem'}}>Distance is just a word. Created by Khushi to bring you closer to your world.</p>
                    <div className='getStartedBtn'>
                        <Link to={"/auth"}>Start Your Journey</Link>
                    </div>
                </div>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                    <img src="/mobile.png" alt="UrRoomsy Interface" style={{height: '70vh', filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))'}} />
                </div>
            </div>
        </div>
    )
}