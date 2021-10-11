import React from 'react'
import './Post.css'

function Post({name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post-header">
                <img className="photo" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className="post-info">
                    <h2>Jaafar Adegoke</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons ">
                <div>
                <img className="photo" title="Like" color="gray" src="https://cdn-icons-png.flaticon.com/512/889/889221.png" alt=""/>
                <p>Like</p>
                </div>
                <div>
                <img className="photo"  color="gray" src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt=""/>
                <p>Comment</p>
                </div>
                <div>
                <img className="photo" title="Like" color="gray" src="https://cdn-icons-png.flaticon.com/512/929/929610.png" alt=""/>
                <p>Share</p>
                </div>
                <div>
                <img className="photo" title="Like" color="gray" src="https://cdn-icons-png.flaticon.com/512/736/736161.png" alt=""/>
                <p>Send</p>
                </div>
            </div>
        </div>
    )
}

export default Post
