import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import NewsItem from './NewsItem';
import { getNews, cleanNews } from '../store/actions/newsAction';

class Show extends Component {
  state = {
    page: 2,
  }

  async componentDidMount() {
    await this.props.cleanNews();
    await this.props.getNews('show', 1);
  }

  handleLoadMore = async () => {
    let pageNumber = this.state.page;
    pageNumber = pageNumber + 1;
    this.setState({
      page: pageNumber,
    });
    await this.props.getNews('show', this.state.page);
  }

  render() {
    const { newsList } = this.props;
    
    if (newsList) {
      return (
        <div className="news-list-wrapper">
          {this.props.newsList.map((newsItem) => {
            return (
              <NewsItem item={newsItem} key={newsItem.id} />
            )
          })}
          <div className="more" onClick={this.handleLoadMore}>Load More</div>
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
    getNews: (newsType, page) => dispatch(getNews(newsType, page)),
    cleanNews: () => dispatch(cleanNews()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Show);
