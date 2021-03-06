import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import $ from 'jquery'

/**
 * コメントBOX
 */
export default class CommentBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => { this.setState({ data: data }) },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => { this.setState({ data: data }) },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }
  componentDidMount() {
    this.loadCommentsFromServer()
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval)
  }
  render() {
    let isBox1 = false
    if (isBox1) {
      return (
        <div className='commentBox'>
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this) } />
          <CommentList data={this.state.data}/>
        </div>
      )
    } else {
      return (
        <div className='commentBox'>
          <CommentList data={this.state.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this) } />
        </div>
      )
    }
  }
}

CommentBox.propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired
}