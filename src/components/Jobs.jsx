import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import NewsItem from './NewsItem';

class Jobs extends Component {
  render() {
    return (
      <div className="news-list-wrapper">
        {/* {this.props.newsList.map((newsItem) => {
          return (
            <NewsItem item={newsItem}></NewsItem>
          )
        })} */}
        jobs
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.news,
  }
}


export default connect(mapStateToProps)(Jobs);
