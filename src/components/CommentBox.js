import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

/**
 * コメントBOX
 */
export default class CommentBox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='commentBox'>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
}