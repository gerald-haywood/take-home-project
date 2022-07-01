import React, { Component } from 'react';

class Profile extends Component {

    render(){
        let userdata = this.props.userData;

        if(userdata.name === null) {
            return(
                <div className="text-center">
                    Please enter a username.
                </div>
            );
        }

        else if(!userdata.name) {
            return(
                <div className="text-danger text-center">
                    Please enter a valid username.
                </div>
            )
        }
        else {
            return(
                <div className='container-md card-body text-center'>
                    <img src={userdata.avatar} alt="user" className='w-25 p-3 mx-auto' />
                    <div>
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