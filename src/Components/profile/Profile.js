import React, { Component } from 'react';

class Profile extends Component {

    render(){
        let userdata = this.props.userData;
        let followers = `${userdata.homeURL}/followers`;
        let following = `${userdata.homeURL}/following`;
        let repos = `${userdata.homeURL}/repositories`;
        
        if(userdata.notFound === "User not found"){
            return(
                <div className='notFound'>
                    <h2>Hey!</h2>
                    <p>Profile not found. Please try again.</p>
                </div>
            );
        }

        else {
            return(
                <section>
                    <div className="github-profile">
                        <a
                            href={userdata.homeURL}
                            target="_blank"
                            title={userdata.name || userdata.username}
                        >
                            <img src={userdata.avatar} />
                        </a>
                        <h2>
                            <a
                                href={userdata.homeURL}
                                target="_blank"
                                title={userdata.name || userdata.username}
                            >
                                <img src={userdata.avatar} />
                            </a>
                        </h2>
                        <h3>{userdata.location}</h3>
                    </div>
                    <div className="github-profile-state">
                        <ul>
                            <li>
                                <a
                                    href={followers}
                                    target="_blank"
                                    title="Number of followers">
                                        <i>{userdata.followers}</i>
                                        <span>Followers</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={repos}
                                    target="_blank"
                                    title="Number of repositories">
                                        <i>{userdata.repos}</i>
                                        <span>Repositories</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={following}
                                    target="_blank"
                                    title="Number of users following">
                                        <i>{userdata.following}</i>
                                        <span>Following</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            );
        }
    }
}

export default Profile;