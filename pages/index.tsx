
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext, useEffect, useState } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { loginStatus } from "../components/typeDefinitions/recoilDeclarations";
import { NextPage } from "next";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
const drawerWidth = 240;
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Button ,Menu} from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import { styled, useTheme } from "@mui/material/styles";
import styles from "../styles/SignupStyles.module.css";
const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Header
          style={{
            display: "flex",
            position: "fixed",
            zIndex: 1,
            top: 0,
            right: 0,
            left: 0,
            boxShadow: "0px 10px 5px lightblue",
          }}
        >
          {
            <div className={styles.mobile}>
              {" "}
            </div>
          }
          <div
            className="logo"
            style={{
              marginRight: "30px",
              paddingLeft: "15px",
              paddingRight: "15px",
              backgroundColor: "whitesmoke",
              borderRadius: 5,
            }}
          >
            <a href="https://anciitk.in">
              <img
                src="/anc-logo.png"
                alt="AnC IITK logo"
                height="50px"
              />
            </a>
          </div>
          {
            <div
              className={styles.nonmobile}
              style={{
                color: "whitesmoke",
                paddingLeft: 10,
                paddingRight: 30,
                fontSize: 30,
                minWidth: 500,
              }}
            >
              {" "}
              Academics and Career Council{" "}
            </div>
          }

          {
            <div className={styles.nonmobile}>
              <Menu
                style={{ minWidth: "250px" }}
                theme="dark"
                mode="horizontal"
                
              />
            </div>
          }
          
          {/* <Avatar src={<Image src={userImage} style={{ width: 32 }} />} /> */}
          
          {/* <Button style={{backgroundColor: "#001529", color: "lightgray", marginTop: "15px"}}  href='./verify'>Login</Button> */}
        </Header>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        width:"100vw",
        height:"100vh",
      }}
    >
      <Button type="primary"  style={{marginBottom:"17px",}}><a href="https://accounts.anciitk.in/login?return_to=http://localhost:3000/verify/" >Continue Logging In</a></Button>
      <Button type="primary" style={{marginBottom:"17px",}}><a href="https://accounts.anciitk.in/register">Register</a></Button>
      <Button type="primary" href="./dashboard">Continue Without Logging In</Button>

    </div></div>
  );
};

export default Home;

