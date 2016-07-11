import React, { Component,PropTypes } from 'react'
import ReactDOM from 'react-dom'

/**
 * コメントフォーム
 */
export default class CommentForm extends Component {

  handleSubmit(e) {
    e.preventDefault()
    const author = ReactDOM.findDOMNode(this.refs.author).value.trim()
    const text = ReactDOM.findDOMNode(this.refs.text).value.trim()
    if (!text || !author) {
      return
    }
    this.props.onCommentSubmit({ author: author, text: text })
    ReactDOM.findDOMNode(this.refs.author).value = ''
    ReactDOM.findDOMNode(this.refs.text).value = ''
  }
  render() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit.bind(this) }>>
        <input type="text" placeholder="Your Name" ref="author"/>
        <input type="text" placeholder="コメントを入れてね" ref="text"/>
        <input type="submit" value="Post" />
      </form>
    )
  }
}

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func
}