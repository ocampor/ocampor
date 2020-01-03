import React from 'react'
import { Root, Routes } from 'react-static'

import { Link } from 'components/Router'
import { Layout, Menu } from 'antd';
import { Router } from './components/Router';

const { Header, Footer, Content } = Layout;

let pageColor = 'white';

function App() {
  return (
    <Root>
      <Layout>
        <Header style={{ background: pageColor }}>
          <div/>
          <Menu theme="light" mode="horizontal">
            <Menu.Item key="1"> <Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/blog">Blog</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ background: pageColor, minHeight: 360 }}>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Routes path="*"/>
            </Router>
          </React.Suspense>
        </Content>
        <Footer style={{
          textAlign: 'center',
          background: pageColor,
        }}>
          ©2019 ocampor
        </Footer>
      </Layout>
    </Root>
  )
}

export default App
