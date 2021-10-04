import React from 'react'
import './HeaderOption.css'

function HeaderOption() {
    return (
        <div className="headerOptions">
            <ul className="headerOption">
                <li className=" m-3">
                    Home
                </li>

                <li className="net m-3">
                    Network
                </li>

                <li className="m-3">
                    Jobs
                </li>

                <li className="m-3">
                    Messaging
                </li>

                <li className="m-3">
                    Notifications
                </li>
                
                <li>
                    <img className="rounded-circle  m-3 img" src="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt=""  />
                    
                </li>
            </ul>
            
        </div>
    )
}

export default HeaderOption
