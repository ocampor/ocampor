import React from 'react'
import { Avatar, Button, Layout, Row, Typography } from 'antd';

const { Content } = Layout;

//TODO: Move this to a configuration file
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
    <Avatar style={{ margin: '2.5em' }} size={128} src="profile.png"/>,
    <Typography.Title style={{ margin: '0' }} level={2}>Ricardo Ocampo</Typography.Title>,
    <Typography.Title level={4} type="secondary">Data Scientist</Typography.Title>,
    <div style={{ display: 'flex', margin: '2.5em' }}>
      {createSocialLinks()}
    </div>
  ]

  return profileDetails.map(item => (
    <Row type={"flex"} justify={"center"}>
      {item}
    </Row>
  ))
}

export default () => (
  <Content>
    <div style={{ margin: '10% 0%' }}>
      {createProfile()}
    </div>
  </Content>
)
