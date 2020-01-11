import React from 'react';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

const NewsDetail = (props) => {
  console.log(props);
  return (
    <div>
      <NewsItem item={props.newsDetail[0]}/>
      {props.newsDetail[0].id}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    newsDetail: state.newsDetails,
  }
}

export default connect(mapStateToProps)(NewsDetail);
