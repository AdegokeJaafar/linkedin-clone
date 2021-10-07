import React, {useState} from 'react'
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post'

function Feed() {
    const [posts, setPosts] = useState([]);
    
    const sendPost = (e) => {
        e.preventDefault();
    };
    
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">    
                    <img className="createIcon" src="https://cdn-icons-png.flaticon.com/512/1250/1250925.png" alt="" />
                    <form>
                    <input type="text"/>
                    <button onClick="sendPost" type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <img className="photo" src="https://cdn-icons-png.flaticon.com/512/1040/1040241.png" alt=""/>
                    <InputOption title="Photo" />
                </div>
                <div className="feed-inputOptions">
                    <img className="photo" src="https://cdn-icons-png.flaticon.com/512/1179/1179069.png" alt=""/>
                    <InputOption title="Video" />
                </div>
                <div className="feed-inputOptions">
                    <img className="photo" src="https://cdn-icons-png.flaticon.com/512/5220/5220135.png" alt=""/>
                    <InputOption title="Event" />
                </div>
                <div className="feed-inputOptions">
                    <img className="photo" src="https://cdn-icons-png.flaticon.com/512/2680/2680919.png" alt=""/>
                    <InputOption title="Write article" />
                </div>
            </div>
            {/* Posts */}
             {posts.map((post) =>(
                 <Post />
             )
             
             )}
             <Post
             name="Jaafar Adegoke"
             description="Detail-oriented Developer"
             message="I'm happy this is working"
             />
        </div>
    )
}

export default Feed
