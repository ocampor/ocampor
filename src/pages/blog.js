import React from 'react'
import { useRouteData } from 'react-static'
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
      pageSize: 4,
    }}
    dataSource={posts}
    renderItem={item => (
      <List.Item
        key={item.title}
        extra={
          <img
            width={272}
            alt="logo"
            src={item.image}
          />
        }
      >
        <List.Item.Meta
          title={<a target={"_blank"} href={item.link}>{item.title}</a>}
          description={item.subTitle}
        />
        {item.description}
      </List.Item>
    )}
  />
);

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <Content>
      <div style={{ margin: '1.5em 20%' }}>
        <BlogList posts={posts}/>
      </div>
    </Content>
  )
}
