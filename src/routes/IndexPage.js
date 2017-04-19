import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
import {Link} from 'dva/router'

import Sidebar from '../components/SideBar';
import '../less/main.less';

function IndexPage(props) {
  return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">邮件营销</Menu.Item>
            <Menu.Item key="2">预留1</Menu.Item>
            <Menu.Item key="3">预留2</Menu.Item>
          </Menu>
        </Header>
          <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                  <Menu
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      style={{ height: '100%' }}
                  >
                      <SubMenu key="sub1" title={<span><Icon type="user" />邮件爬虫</span>}>
                          <Menu.Item key="1"><Link to="/newEmail">最新爬取</Link></Menu.Item>
                          <Menu.Item key="2"><Link to="/add_url">添加地址</Link></Menu.Item>
                          <Menu.Item key="3">定时任务</Menu.Item>
                          <Menu.Item key="4">历史记录</Menu.Item>
                          <Menu.Item key="5"><Link to="/que_lib">题库的东西</Link></Menu.Item>
                      </SubMenu>
                      <SubMenu key="sub2" title={<span><Icon type="laptop" />论坛管理</span>}>
                          <Menu.Item key="5">用户</Menu.Item>
                          <Menu.Item key="6">帖子审核</Menu.Item>
                          <Menu.Item key="7">板块</Menu.Item>
                          <Menu.Item key="8">图片</Menu.Item>
                      </SubMenu>

                  </Menu>
              </Sider>

            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {props.children}
              </Content>
            </Layout>
          </Layout>
          <Footer style={{ textAlign: 'center' }}>
             考试加油站 ©2017 zhoujun
          </Footer>

      </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);


/*
*

* */