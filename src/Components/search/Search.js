import React, { Component } from 'react';

class Search extends Component {

    submitForm(event){
        event.preventDefault();
        let value = this.refs.username.value;
        this.props.searchProfile(value);
        this.refs.username.value = '';
    }


    render(){
        return(
            <div className="search">
                <form onSubmit={this.submitForm.bind(this)}>
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