import React, { Component } from 'react';

/**
 * Allows search of a user within the Github database by username.
 */
class Search extends Component {
    
    // Allows the values inside the search bar to be changed (i.e., adding or removing a letter or number)
    submitForm(event){
        event.preventDefault();
        let value = this.refs.username.value;
        this.props.searchProfile(value);
        this.refs.username.value = '';
    }

    render(){
        return(
            <div className="text-center pt-4">
                <form onSubmit={this.submitForm.bind(this)}>
                        <input
                            type="search"
                            ref="username"
                            placeholder="Username"
                        >
                        </input>
                    <button type="submit" value=" Send" className="btn btn-dark ms-4 btn-sm" id="submit">Find</button>
                </form>
            </div>
        );
    }
}

export default Search;