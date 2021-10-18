import React from 'react'
import "./Widgets.css"

function Widgets() {


    return (
        <div className="widgets">
            <div className="widgets-header">
                <h2>Linkedin News</h2>
                <img className="info" src="https://cdn-icons-png.flaticon.com/512/1/1176.png" alt=""/>
            </div> 
            <div className="widgets-articleRight">
                <img  className="articleLeft info" src="https://cdn-icons.flaticon.com/png/512/4553/premium/4553966.png?token=exp=1634489671~hmac=ea246727fe12b7f41210e2dcbb720436" alt=""/>
                <h4>Jaafar is back
                <h6>Top news - 1000 readers</h6>
                </h4>
            </div>
            <div className="widgets-articleRight">
                <img className="info articleLeft" src="https://cdn-icons.flaticon.com/png/512/4553/premium/4553966.png?token=exp=1634489671~hmac=ea246727fe12b7f41210e2dcbb720436" alt=""/>
                <h4>Life of a Programmer
                <h6>Top news - 9099 readers</h6>
                </h4>
            </div>
            <div className="widgets-articleRight">
                <img className="info articleLeft" src="https://cdn-icons.flaticon.com/png/512/4553/premium/4553966.png?token=exp=1634489671~hmac=ea246727fe12b7f41210e2dcbb720436" alt=""/>
                <h4>UAR updates
                <h6>Top news - 886 readers</h6>
                </h4>
            </div>
            <div className="widgets-articleRight">
                <img className="info articleLeft" src="https://cdn-icons.flaticon.com/png/512/4553/premium/4553966.png?token=exp=1634489671~hmac=ea246727fe12b7f41210e2dcbb720436" alt=""/>
                <h4>Tesla hits new high
                <h6>Cars & auto - 300 readers</h6>
                </h4>
            </div>
            <div className="widgets-articleRight">
                <img className="info articleLeft" src="https://cdn-icons.flaticon.com/png/512/4553/premium/4553966.png?token=exp=1634489671~hmac=ea246727fe12b7f41210e2dcbb720436" alt=""/>
                <h4>Bitcoin Breaks $22k
                <h6>Crypto - 9000 readers</h6>
                </h4>
            </div>
            <div className="widgets-articleRight">
                <img className="info articleLeft" src="https://cdn-icons.flaticon.com/png/512/4553/premium/4553966.png?token=exp=1634489671~hmac=ea246727fe12b7f41210e2dcbb720436" alt=""/>
                <h4>Is Redux cool
                <h6>Code - 153 readers</h6>
                </h4>
            </div>
        </div>
    );
}

export default Widgets
