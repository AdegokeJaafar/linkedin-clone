import React from 'react'
import "./Sidebar.css"

function Sidebar() { 
    return (
        <div className="sidebar col-3">
            <div className="sidebar-top ">
                <img src="https://media.istockphoto.com/photos/abstract-blurred-gradient-background-in-bright-colors-colorful-smooth-picture-id1071588902?b=1&k=20&m=1071588902&s=170667a&w=0&h=681xyBT7caDC27nRisPNjwserhtmgIgoTAwGmUvD2q4=" 
                alt="rainbow" className="top" />
                
                
                <img src="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/100758633_3019062614876343_6335230598738608128_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGalCSO2bWPqXD4dTsL37GS45M8LPjIeYLjkzws-Mh5gp8niMSx59ZhoM3g3RHM8bXGdLAqcHZq8FympwwTqYYo&_nc_ohc=w5iDRTiT7GYAX_k_41B&_nc_ht=scontent.flos1-2.fna&oh=4845fdf5dd1895bb52bc9db95aad4ed8&oe=618199E9" 
                alt="cat" className="down rounded-circle center"/>
                <h2>Adeyemi Adegoke</h2>
                <h4>jaafaradegoke@gmail.com</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-statNumber">2,543</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-statNumber">2,445</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                    <p>Recent</p>
                    <div className="recentItem">
                    <p>#javascript</p>
                    <p>#reactjs</p>
                    <p>#nodejs</p>
                    <p>#vuejs</p>
                    <p>#developer</p>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar
