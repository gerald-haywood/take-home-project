import React, { Component } from 'react';

class Search extends Component {
    render(){
        return(
            <div className="search">
                <form>
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