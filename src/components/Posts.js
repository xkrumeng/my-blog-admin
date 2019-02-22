import React from 'react'

export default function Posts(props) {
  return (
    <ul>
      {props.posts.map((post, i) => {
        return <li key={i}>{post.title}</li>
      })}
    </ul>
  )
}
