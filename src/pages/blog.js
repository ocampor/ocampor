import React from 'react'
import { useRouteData } from 'react-static'

import { Link } from '../components/Router'
import { Layout } from 'antd';

const { Content } = Layout;


export default function Blog() {
  const { posts } = useRouteData()
  return (
    <Content>
      <div>
        <h1>Blog</h1>
        <br/>
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Content>
  )
}
