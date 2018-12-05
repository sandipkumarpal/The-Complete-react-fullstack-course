import React from 'react';
import NewsSlider from './NewsSlider';
import NewsLists from './NewsLists';

class News extends React.Component{
    render() {
        return (
            <div>
                <NewsSlider 
                    type="featured"
                    start={0}
                    amount={5}
                    settings={{
                        dots: true,
                        infinite: true,
                        arrows: false,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }}
                />
                <NewsLists
                    type="news"
                    loadMore={true}
                    start={3}
                    amount={10} 
                />
            </div>
        )
    }
}

export default News;
