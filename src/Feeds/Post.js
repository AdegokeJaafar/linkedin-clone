import React, { forwardRef } from 'react'
import './Post.css'

const Post = forwardRef(({name, description, message, photoUrl }, ref) =>{
    return (
        <div ref={ref} className="post">
            <div className="post-header">
                <img className="photo" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <div className="post-info">
                    <h2>{ name }</h2>
                    <p>{ description }</p>
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
})

export default Post
