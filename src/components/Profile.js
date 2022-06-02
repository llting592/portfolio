import React from 'react';
import profilePic from '../Assets/profile.jpg';

function Profile() {
    return (
        <div className = 'profilePic'>
            <img
                src={profilePic}
                style={{ width: "120%" }}
                alt=""
                className="rounded-circle img-center"
            />
    </div>
    )
}

export default Profile;