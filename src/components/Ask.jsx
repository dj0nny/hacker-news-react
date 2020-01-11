import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import NewsItem from './NewsItem';
import { getNews } from '../store/actions/newsAction';

class Ask extends Component {
  async componentDidMount() {
    await this.props.getNews('ask')
  }

  render() {
    return (
      <div className="news-list-wrapper">
        {this.props.newsList.map((newsItem) => {
          return (
            <NewsItem item={newsItem}></NewsItem>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsList: state.news,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (newsType) => dispatch(getNews(newsType)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ask);
