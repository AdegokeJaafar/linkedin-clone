import React from 'react'
import './Feed.css';

function Feed() {
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">    
                    <img className="createIcon" src="https://cdn-icons-png.flaticon.com/512/1250/1250925.png" alt="" />
                    <form>
                    <input type="text"/>
                    <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feed
