import React, { Component } from 'react'
import { render } from 'react-dom'

class CommentBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.
      </div>
    )
  }
}

render(
  <CommentBox />,
  document.getElementById('container')
)