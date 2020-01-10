import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({ item }) => {
  return (
    <div className="detail">
      <div className="news-detail">
        <div className="news-item">
          <a href={item.url} target="_blank" className="title">{item.title}</a>
          <span className="domain">({item.domain})</span>
          <div className="subtext">
            {item.points} points by {item.user} {item.time_ago} | <Link className="comment-link" to={'news/' + item.id}> {item.comments_count} comments </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;
