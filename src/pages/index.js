import React from 'react'
import { Avatar, Button, Layout, Row, Typography } from 'antd';

//TODO: Move this to a configuration file
const { Content } = Layout;

let createSocialLinks = () => {
  let icons = [
    { icon: "medium", href: "https://medium.com/@ocampor" },
    { icon: "github", href: "https://github.com/ocampor" },
    { icon: "linkedin", href: "https://www.linkedin.com/in/ocampor" },
    { icon: "twitter", href: "https://twitter.com/ocampo_vr" },
    { icon: "google", href: "mailto: me@ocampor.ai" }
  ]

  return icons.map(item => (
    <div style={{ padding: '0 5px' }}>
      <Button
        shape="circle"
        size="large"
        icon={item.icon}
        href={item.href}
      />
    </div>
  ))
}

let createProfile = () => {
  let profileDetails = [
    <Avatar style={{ margin: '5%' }} size={128} src="profile.png"/>,
    <Typography.Title style={{ margin: '0' }}>Ricardo Ocampo</Typography.Title>,
    <Typography.Title level={3} type="secondary">Data Scientist</Typography.Title>,
    <div style={{ display: 'flex', margin: '5%' }}>
      {createSocialLinks()}
    </div>
  ]

  return profileDetails.map(item => (
    <Row type={"flex"} justify={"center"} align={"middle"}>
      {item}
    </Row>
  ))
}

export default () => (
  <div>
    <Content>
      {createProfile()}
    </Content>
  </div>
)
