import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import NewsItem from './NewsItem';
import { getNews } from '../store/actions/newsAction';

class News extends Component {
  async componentDidMount() {
    await this.props.getNews('news');
  }

  render() {
    const { newsList } = this.props;

    if (newsList) {
      return (
        <div className="news-list-wrapper">
          {this.props.newsList.map((newsItem) => {
            return (
              <NewsItem item={newsItem}></NewsItem>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="loading">Loading...</div>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
