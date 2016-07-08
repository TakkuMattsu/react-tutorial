import React, { Component } from 'react'
import Comment from './Comment'

/**
 * コメントリスト
 */
export default class CommentList extends Component {
  render() {
    return (
      <div className='commentList'>
        <Comment author='Miho Nishizumi'>This is Comment.</Comment>
        <Comment author='Saori Takebe'>This is *another* Comment.</Comment>
      </div>
    )
  }
}