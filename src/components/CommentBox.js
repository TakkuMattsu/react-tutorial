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
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => { this.setState({ data: data }) },
      error:( xhr, status, err) => {
        console.error(this.props.url, status, err.toString())
      }
    })
  }
  render() {
    return (
      <div className='commentBox'>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    )
  }
}

CommentBox.propTypes = {
  url: PropTypes.string.isRequired
}