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