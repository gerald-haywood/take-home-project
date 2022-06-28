import React, { Component } from 'react';

class Search extends Component {

    submit(event){
        event.preventDefault();
        let value = this.refs.username.value;
        this.props.getProfile(value);
    }


    render(){
        return(
            <div className="search">
                <form onSubmit={this.submit.bind(this)}>
                    <label>
                        <input
                            type="serach"
                            ref="username"
                            placeholder="Enter a username and hit enter."
                        >
                        </input>
                    </label>
                </form>
            </div>
        );
    }
}

export default Search;