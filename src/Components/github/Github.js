import React, { Component } from 'react';
import Profile from '../profile/Profile';
import Search from '../search/Search';

const API = 'https://api.github.com/users';
class Github extends Component {

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