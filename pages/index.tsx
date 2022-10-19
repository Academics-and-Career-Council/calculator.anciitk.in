import { Menu, Breadcrumb } from 'antd';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import type { NextPage } from 'next'
import Navigation from '../components/navigation';
import {isBrowser, isMobile} from 'react-device-detect'

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
    <div>
      {
        !isMobile &&
          <Content className="site-layout" style={{ paddingLeft: '20%', paddingRight: '20%', marginTop: 64 }}>
            {/* <div  style={{ justifyContent:'center', alignItems:'center'}}> */}
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: "30px",justifyContent:'center', alignItems:'center'}}>CPI/SPI/Status Calculator</p>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{fontSize: "15px", justifyContent:'center', alignItems:'center'}}>
                  Find your semwise SPI and CPI using the AnC calculator. 
                  Add new semesters and add new courses to each semester to get the data.
                   You can also click on the button "repeated" if that course has been repeated by the student and the better grade is obtained in the 
                   next attempt. Note that only the best attempt of each course should have the repeated button not clicked.
                </p>
            </div>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 620 }}>
      <Navigation />
      </div>
    </Content>
      }
    </div>
    <div>
      {
        isMobile &&
        <Content className="site-layout" style={{ marginTop: 64 }}>
          <div  style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                
          </div>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 620 }}>
            <Navigation />
          </div>
        </Content>
      }
    </div>
    
    <Footer style={{ textAlign: 'center', position:'fixed', bottom:"0px", left:"0px", right:"0px" }}>AnC web team ©2022 </Footer>
  </Layout>
        
        </div>
    )
}

export default Home