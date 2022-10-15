import { Menu, Breadcrumb } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import type { NextPage } from 'next'
import Navigation from '../components/navigation';
//style={{display:'flex',justifyContent:'center', alignItems:'center'}}
const Home: NextPage = () => {
    return (
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <Layout>
    <Header style={{ display:"flex", position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" style={{paddingRight:"30px"}}>
      <a href='https://anciitk.in'>
        <img
                  src="https://anciitk.in/img/anc-logo.png"
                  alt="AnC IITK logo"
                  height="50px"
                  
                  // className="logo"
                />
        {/*  */}
                </a>
                </div>
                
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['title']}
        items={[{key:"title", label:"CPI / SPI / AP calculator"}]}
      />
    </Header>
    <Content className="site-layout" style={{ paddingLeft: '20%', paddingRight: '20%', marginTop: 64 }}>
      
      <div className="site-layout-background" style={{ padding: 24, minHeight: 620 }}>
      <Navigation />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center', position:'fixed', bottom:"0px", left:"0px", right:"0px" }}>AnC web team ©2022 </Footer>
  </Layout>
        
        </div>
    )
}

export default Home