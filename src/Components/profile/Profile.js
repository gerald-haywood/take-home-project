import React, { Component } from 'react';

/**
 * Displays a user's profile.
 */
class Profile extends Component {

    render(){
        // A variable is defined to gather information of every user on the Github website.
        let userdata = this.props.userData;

        /**
         * Because the username is unknown when the application runs, a message
         * telling the user to enter a username is displayed below the searchbar.
         */ 
        if(userdata.name === null) {
            return(
                <div className="text-center">
                    Please enter a username.
                </div>
            );
        }

        /**
         * If the user enters an invalid username, an error message is displayed
         * in red, telling the user to enter a valid username.
         */
        else if(!userdata.name) {
            return(
                <div className="text-danger text-center">
                    Please enter a valid username.
                </div>
            )
        }
        
        /**
         * If a username is found in the Github database, the user's profile picture,
         * name, number of followers, number of repositiories, and number of users said
         * user is following is displayed below the search bar.
         */
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