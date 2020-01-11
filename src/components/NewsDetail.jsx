import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import { getNewsDetail } from '../store/actions/newsAction';

class NewsDetail extends Component {
  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.getNewsDetails(id);
  }

  render() {
    return (
      <div>
        <NewsItem item={this.props.newsDetail}/>
      </div>
    )
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
