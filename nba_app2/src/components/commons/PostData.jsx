import React from 'react';
import moment from 'moment';

function PostData(props) {
    const formateDate = (date) => {
        return moment(date).format('MM-DD-YYYY')
    }
    return (
        <div className="article-Wrapper__postData">
            <div>
                Date: 
                <span> {formateDate(props.data.date)}</span>
            </div>
            <div>
                Author: 
                <span> {props.data.author}</span>
            </div>
        </div>
    );
}

export default PostData;
