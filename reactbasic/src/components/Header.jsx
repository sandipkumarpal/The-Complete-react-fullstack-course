import React from 'react';
import SearchForm from './SearchForm';

function Header(props) {
    return (
        <div className="Header container">
            <h1>Logo</h1>
            <SearchForm onChangeSearch= {props.onChangeSearch}/>
        </div>
    )
}

export default Header;
