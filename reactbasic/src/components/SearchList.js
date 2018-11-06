import React from 'react';

function SearchList(props) {
    return (
        <div className="SearchList list-group">
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{props.items.title}</h5>
                </div>
                <p className="mb-1">{props.items.feed}</p>
            </div>
        </div>
    );
}

export default SearchList;
