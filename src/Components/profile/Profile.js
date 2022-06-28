import React, { Component } from 'react';

class Profile extends Component {

    render(){
        let userdata = this.props.userData;

        if(userdata.name === null) {
            return(
                <div>
                    Please enter a username.
                </div>
            );
        }

        else if(!userdata.name) {
            return(
                <div>
                    Please enter a valid username.
                </div>
            )
        }
        else {
            return(
                <div className='container-md'>
                    <img src={userdata.avatar} alt="user" className='w-25 p-3 mx-auto' />
                    <div className='card-body text-center'>
                        <h4>{userdata.name || userdata.username}</h4>
                        <div className='user-followers'>Followers: {userdata.followers}</div>
                        <div className='user-repositories'>Repositories: {userdata.repos}</div>
                        <div className='user-following'>Following: {userdata.following}</div>
                    </div>
                </div>
            );
        }
    }
}

export default Profile;