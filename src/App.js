import React from 'react'
import { Root, Routes } from 'react-static'

import { Link } from 'components/Router'
import { Layout, Menu } from 'antd';
import { Router } from './components/Router';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Root>
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/blog">Blog</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: 'white', minHeight: 360 }}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*"/>
            </Router>
          </React.Suspense>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2019 Ricardo Ocampo</Footer>
      </Layout>
    </Root>
  )
}

export default App
