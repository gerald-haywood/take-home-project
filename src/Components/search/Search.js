import React, { Component } from 'react';
import './Search.css'

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
                            placeholder="Username"
                        >
                        </input>
                    </label>
                    <button type="submit" value=" Send" className="btn btn-dark" id="submit">Find</button>
                </form>
            </div>
        );
    }
}

export default Search;