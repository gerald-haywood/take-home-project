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
                <section>
                    <div className="github-profile">
                        <div title={userdata.username}>
                            <img src={userdata.avatar} alt="user" />
                        </div>
                        <h2>
                            <div title={userdata.username}>
                                {userdata.name || userdata.username}
                            </div>
                        </h2>
                        <h3>{userdata.location}</h3>
                    </div>
                    <div className="github-profile-state">
                        <ul>
                            <div
                                title="Number of followers">
                                    <span>Number of followers: </span>
                                    {userdata.followers}
                                    
                            </div>
                            <div
                                title="Number of repositories">
                                    <span>Number of repositories: </span>
                                    {userdata.repos}
                                    
                            </div>
                            <div
                                title="Number of users following">
                                    <span>Number of users following: </span>
                                    {userdata.following}
                                    
                            </div>
                        </ul>
                    </div>
                </section>
            );
        }
    }
}

export default Profile;