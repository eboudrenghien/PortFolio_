import React from 'react'

function Post(props) {
  return (
    <div className='post'>
      {props.children}
    </div>
  )
}

export default Post