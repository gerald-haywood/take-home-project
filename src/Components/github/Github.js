import React, { Component } from 'react';
import Profile from '../profile/Profile';
import Search from '../search/Search';

/**
 * Defines a variable for the API globally within the component.
 */
const API = 'https://api.github.com/users';

/**
 * Fetches every username stored in the Github database and allows user to search for specific user.
 */
class Github extends Component {

    // Defines properties for a user on Github.
    constructor(props) {
      super(props)
    
      this.state = {
         username: null,
         name: null,
         avatar: null,
         repos: null,
         followers: null,
         following: null,
         homeURL: null,
         notFound: null
      };
    }

    // API checks to see if the username searched matches one within their database.
    getProfile(username){
        let finalURL = `${API}/${username}`;
        fetch(finalURL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                username: data.login,
                name: data.name,
                avatar: data.avatar_url,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                homeURL: data.homeURL,
                notFound: data.message
            })
        })
        .catch(() => console.log('Unable to fetch data'))
    }

    // Displays the search bar and a user's photo, name, and specific information if found.
    render(){
        return(
            <div>
                <section id="card">
                    <Search searchProfile={this.getProfile.bind(this)} />
                    <Profile userData={this.state}/>
                </section>
            </div>
        );
    }
}

export default Github;