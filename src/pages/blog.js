import React from 'react'
import { useRouteData } from 'react-static'

import { Link } from '../components/Router'
import { Icon, Layout, List } from 'antd';

const { Content } = Layout;

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }}/>
    {text}
  </span>
);

const BlogList = ({ posts }) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={posts}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" key="list-vertical-star-o"/>,
          <IconText type="like-o" text="156" key="list-vertical-like-o"/>,
          <IconText type="message" text="2" key="list-vertical-message"/>,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          title={<Link to={`/blog/post/${item.id}/`}>{item.title}</Link>}
          description={item.body}
        />
        {item.body}
      </List.Item>
    )}
  />
);

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <Content>
      <div>
        <h1>Blog</h1>
        <br/>
        All Posts:
        <BlogList posts={posts}/>
      </div>
    </Content>
  )
}
