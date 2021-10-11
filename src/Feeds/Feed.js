import React, {useState, useEffect} from "react"
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post"
import firebase from "../firebase"
import { db } from "../firebase"


function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    

    
    useEffect(() => {
       db.collection("posts").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
            );

    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: "Jaafar Adegoke",
            description: "this is a test",
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };
    return (
        <div className="feed">
            <div className="feed-inputContainer">
                <div className="feed-input">    
                    <img className="createIcon" src="https://cdn-icons-png.flaticon.com/512/1250/1250925.png" alt="" />
                    <form>
                    <input type="text"/>
                    <button onClick={sendPost} type="submit">Send</button>
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
             {posts.map(({ id, data: { name, description, message, photoUrl }}) =>(
                 <Post 
                 key={id}
                 name={name}
                 description={description}
                 message={message}
                 photoUrl={photoUrl}
                 />
             )
             
             )}
        </div>
    )
}

export default Feed
