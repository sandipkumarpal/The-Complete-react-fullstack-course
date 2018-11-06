import React from 'react';
import SearchList from './SearchList';

function SearchArea(props) {
    const searchItem = props.search.map((item) => <SearchList items={item} key={item.id}/>);
    return (
        <div className="SearchArea container">
            { searchItem }
        </div>
    )
}

export default SearchArea;
