import React, { Component, PropTypes } from 'react'

/**
 * コメント
 */
export default class Comment extends Component {
  render() {
    return (
      <div className='comment'>
        <h3 className='commentAuthor'>
          {this.props.author}
        </h3>
        {this.props.children}
      </div>
    )
  }
}

Comment.propTypes = {
  author: PropTypes.string,
  children: PropTypes.string
}