import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import { getNewsDetail } from '../store/actions/newsAction';
import Comment from './Comment';

class NewsDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getNewsDetails(id);
  }

  render() {
    const { newsDetail } = this.props;
    const { comments } = this.props.newsDetail;

    if (newsDetail && comments) {
      return (
        <div>
          <NewsItem item={newsDetail}/>
          {comments.map((comment) => {
            return (
              <Comment comment={comment} key={comment.id} />
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
    newsDetail: state.newsDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsDetails: (id) => dispatch(getNewsDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
