import React, { Component, PropTypes } from 'react'

/**
 * コメントフォーム
 */
export default class CommentForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      author: '',
      text:''
    }
  }

  render() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit.bind(this) }>>
        <input
          type="text"
          placeholder="Your Name"
          value={this.state.author}
          onChange={this.onChangeAuthor.bind(this)}
          />
        <input
          type="text"
          placeholder="コメントを入れてね"
          value={this.state.text}
          onChange={this.onChangeText.bind(this)}
          />
        <input type="submit" value="Post" />
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    let author = this.state.author.trim()
    let text = this.state.text.trim()
    if (!text || !author) {
      return
    }
    this.props.onCommentSubmit({ author: author, text: text })
    this.setState({ author: '', text: '' })
  }

  /**
   * Author欄変更時のコールバック
   */
  onChangeAuthor(e) {
    this.setState({ author: e.target.value })
  }

  /**
   * テキスト欄変更時のコールバック
   */
  onChangeText(e) {
    this.setState({ text: e.target.value })
  }
}

CommentForm.propTypes = {
  onCommentSubmit: PropTypes.func
}