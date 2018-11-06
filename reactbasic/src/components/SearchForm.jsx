import React from 'react';

function SearchForm(props) {
    return (
        <div className="SearchForm">
            <div className="form-group">
                <input type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Search here..."
                    onChange={props.onChangeSearch}
                />
            </div>
        </div>
    )
}

export default SearchForm;
