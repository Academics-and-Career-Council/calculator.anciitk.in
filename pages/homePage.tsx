import { Menu, Button } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import type { NextPage } from "next";
import { Navigation, SPIstruct } from "../components/navigation";
import { isMobile } from "react-device-detect";
import Table, { ColumnsType } from "antd/lib/table";
import { useState } from "react";
// import { useRecoilState } from 'recoil';
import Drawer from "@mui/material/Drawer";
import { getSPICPI } from "../components/essensial_functionality/cpiCalculation";
import List from "@mui/material/List";
import SPIFinder from "../components/essensial_functionality/spiFinder";
import { styled, useTheme } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
const drawerWidth = 240;

import Link from "next/link";
import Component from "./verify";
import DataType from "../components/typeDefinitions/datatype";
import React from "react";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { Avatar } from "antd";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import styles from "../styles/SignupStyles.module.css";
import { Popover, Modal } from "antd";
import {
  allSemsData,
  loginStatus,
  Sem10Data,
  Sem11Data,
  Sem12Data,
  Sem13Data,
  Sem14Data,
  Sem15Data,
  Sem16Data,
  Sem1Data,
  Sem2Data,
  Sem3Data,
  Sem4Data,
  Sem5Data,
  Sem6Data,
  Sem7Data,
  Sem8Data,
  Sem9Data,
} from "../components/typeDefinitions/recoilDeclarations";
import {
  Routes,
  redirect as DomRedirect,
  BrowserRouter,
} from "react-router-dom";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [openM, setOpenM] = useState(false);

  const showModal = () => {
    setOpenM(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenM(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpenM(false);
  };
  const router = useRouter();
  const [isLogIn, setIsLogIn] = useRecoilState(loginStatus);

  const sessiondata = useRecoilValue(recoilSessionState);

  const [session] = useRecoilState(recoilSessionState);
  if (isLogIn === true) {
    if (session === undefined) {
      // router.push("./verify");
    }
  }

  const logoutUrl = session?.logoutUrl;

  const content = (
    <div>
      
      <Button
        onClick={() => setIsLogIn(false)}
        style={{ width: "100%", borderColor: "#ffffff", textAlign: "left" }}
      >
        <Link href={`${logoutUrl}`}>
          <p className={styles.logoutMenuItem}>Logout</p>
        </Link>
      </Button>
    </div>
  );

  const handleClick1 = () => {
    const element1 = document.getElementById("spi-cpi");
    element1?.scrollIntoView({ behavior: "smooth" });
  };
  const portPage = () => {
    return <Component />;
  };
  const userImage = `https://images-students-iitk.sgp1.digitaloceanspaces.com/images-students-iitk/${sessiondata?.user.rollno}.jpg`;
  const handleClick2 = () => {
    const element2 = document.getElementById("acad-status");
    element2?.scrollIntoView({ behavior: "smooth" });
  };
  const theme = useTheme();
  const [semData, setSemData] = useRecoilState(allSemsData);

  // const [trial, setTrial] = useState<DataType[][]>()
  const [status, setStatus] = useState("Normal");
  const [showStat, setShowStat] = useState(false);
  let [sem1a] = useRecoilState(Sem1Data);
  let [sem2a] = useRecoilState(Sem2Data);
  const [sem3a] = useRecoilState(Sem3Data);
  const [sem4a] = useRecoilState(Sem4Data);
  const [sem5a] = useRecoilState(Sem5Data);
  const [sem6a] = useRecoilState(Sem6Data);
  const [sem7a] = useRecoilState(Sem7Data);
  const [sem8a] = useRecoilState(Sem8Data);
  const [sem9a] = useRecoilState(Sem9Data);
  const [sem10a] = useRecoilState(Sem10Data);
  const [sem11a] = useRecoilState(Sem11Data);
  const [sem12a] = useRecoilState(Sem12Data);
  const [sem13a] = useRecoilState(Sem13Data);
  const [sem14a] = useRecoilState(Sem14Data);
  const [sem15a] = useRecoilState(Sem15Data);
  const [sem16a] = useRecoilState(Sem16Data);
  const semArray = [
    sem1a,
    sem2a,
    sem3a,
    sem4a,
    sem5a,
    sem6a,
    sem7a,
    sem8a,
    sem9a,
    sem10a,
    sem11a,
    sem12a,
    sem13a,
    sem14a,
    sem15a,
    sem16a,
  ];

  const tempFunc = () => {
    setSemData([]);
    let semDataAll = semData;

    semDataAll = [];

    if (sem1a.length !== 0) {
      semDataAll = [sem1a];
    }
    if (sem2a.length !== 0) {
      semDataAll?.push(sem2a);
    }
    if (sem3a.length !== 0) {
      semDataAll?.push(sem3a);
    }
    if (sem4a.length !== 0) {
      semDataAll?.push(sem4a);
    }
    if (sem5a.length !== 0) {
      semDataAll?.push(sem5a);
    }
    if (sem6a.length !== 0) {
      semDataAll?.push(sem6a);
    }
    if (sem7a.length !== 0) {
      semDataAll?.push(sem7a);
    }
    if (sem8a.length !== 0) {
      semDataAll?.push(sem8a);
    }
    if (sem9a.length !== 0) {
      semDataAll?.push(sem9a);
    }
    if (sem10a.length !== 0) {
      semDataAll?.push(sem10a);
    }
    if (sem11a.length !== 0) {
      semDataAll?.push(sem11a);
    }
    if (sem12a.length !== 0) {
      semDataAll?.push(sem12a);
    }
    if (sem13a.length !== 0) {
      semDataAll?.push(sem13a);
    }
    if (sem14a.length !== 0) {
      semDataAll?.push(sem14a);
    }
    if (sem15a.length !== 0) {
      semDataAll?.push(sem15a);
    }
    if (sem16a.length !== 0) {
      semDataAll?.push(sem16a);
    }
    setSemData(semDataAll);
  };

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getStats = (semData: DataType[][]) => {
    let semDataAll = semData;
    semDataAll = [];
    if (sem1a.length !== 0) {
      semDataAll = [sem1a];
    }
    if (sem2a.length !== 0) {
      semDataAll?.push(sem2a);
    }
    if (sem3a.length !== 0) {
      semDataAll?.push(sem3a);
    }
    if (sem4a.length !== 0) {
      semDataAll?.push(sem4a);
    }
    if (sem5a.length !== 0) {
      semDataAll?.push(sem5a);
    }
    if (sem6a.length !== 0) {
      semDataAll?.push(sem6a);
    }
    if (sem7a.length !== 0) {
      semDataAll?.push(sem7a);
    }
    if (sem8a.length !== 0) {
      semDataAll?.push(sem8a);
    }
    if (sem9a.length !== 0) {
      semDataAll?.push(sem9a);
    }
    if (sem10a.length !== 0) {
      semDataAll?.push(sem10a);
    }
    if (sem11a.length !== 0) {
      semDataAll?.push(sem11a);
    }
    if (sem12a.length !== 0) {
      semDataAll?.push(sem12a);
    }
    if (sem13a.length !== 0) {
      semDataAll?.push(sem13a);
    }
    if (sem14a.length !== 0) {
      semDataAll?.push(sem14a);
    }
    if (sem15a.length !== 0) {
      semDataAll?.push(sem15a);
    }
    if (sem16a.length !== 0) {
      semDataAll?.push(sem16a);
    }
    setSemData(semDataAll);

    let numSems = 0;
    let prevSemCreds = 0;
    let totCreds = 0;
    let prevSemStatus = "Normal";

    for (let index = 0; index < semDataAll.length; index++) {
      for (let index2 = 0; index2 < semDataAll[index].length; index2++) {
        // if( semData[index][index2].credits_received !== 0 || semData[index][index2].grade !== "E") {
        totCreds = totCreds + semDataAll[index][index2].credits;
        if (index !== semDataAll.length - 1) {
          prevSemCreds = prevSemCreds + semDataAll[index][index2].credits;
        }
        // }
      }
      // setNumSems(numSems+1);
      numSems = numSems + 1;
      if (
        prevSemCreds >= 30 &&
        totCreds >= numSems * (numSems + 24) &&
        totCreds < 36 * numSems
      ) {
        setStatus("Warning");
      }
      if (prevSemCreds < 30 && totCreds >= 36 * numSems) {
        setStatus("Warning");
      }

      if (prevSemCreds >= 30 && totCreds < (24 + numSems) * numSems) {
        setStatus("Academic Probation");
        prevSemStatus = "Academic Probation";
      } else if (
        prevSemCreds < 30 &&
        totCreds >= numSems * (numSems + 24) &&
        totCreds < 36 * numSems
      ) {
        setStatus("Academic Probation");
        prevSemStatus = "Academic Probation";
      } else if (
        prevSemCreds < 30 &&
        totCreds < (24 + numSems) * numSems &&
        prevSemStatus != "Academic Probation"
      ) {
        setStatus("Academic Probation");
        prevSemStatus = "Academic Probation";
      } else if (
        prevSemStatus == "Academic Probation" &&
        prevSemCreds < 30 &&
        totCreds < (24 + numSems) * numSems
      ) {
        setStatus("Programme Termination");
      }
    }
    setShowStat(true);
  };


  const [results, setResults] = useState<SPIstruct[]>([]);
  const [cpi, setCpi] = useState(0);
  const [showStat2, setShowStat2] = useState(false);

  const columns: ColumnsType<SPIstruct> = [
    {
      title: "Semester",
      dataIndex: "sem_name",
      key: "sem_name",
    },
    {
      title: "SPI",
      dataIndex: "spi",
      key: "spi",
    },
    {
      title: "Credits Completed",
      dataIndex: "credits_completed",
      key: "credits_completed",
    },
  ];

  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}

    >
      <Layout>
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
              <Button
                onClick={handleDrawerOpen}
                style={{
                  backgroundColor: "#001529",
                  color: "lightgray",
                  marginTop: "15px",
                  marginRight: "15px",
                }}
              >
                <MenuIcon />
              </Button>
              <Drawer
                sx={{
                  width: 0,
                  flexShrink: 0,
                  zIndex: 10000,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </>
                <Divider />
                <List>
                  <ListItem key="Cpi">
                    <ListItemButton
                      onClick={() => {
                        tempFunc();
                        getSPICPI(
                          setSemData,
                          semData,
                          sem1a,
                          sem2a,
                          sem3a,
                          sem4a,
                          sem5a,
                          sem6a,
                          sem7a,
                          sem8a,
                          sem9a,
                          sem10a,
                          sem11a,
                          sem12a,
                          sem13a,
                          sem14a,
                          sem15a,
                          sem16a,
                          setCpi,
                          setShowStat2,
                          results,
                          setResults
                        );
                        handleClick1();
                      }}
                    >
                      <ListItemText primary="Get Spi/Cpi" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key="AP">
                    <ListItemButton
                      onClick={() => {
                        tempFunc();
                        getStats(semData);
                        handleClick2();
                      }}
                    >
                      <ListItemText primary="Find Status" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem key="y22">
                    <ListItemButton href="./y22">
                      <ListItemText primary="Y22" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Drawer>{" "}
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
                src="https://anciitk.in/img/anc-logo.png"
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
                items={[
                  {
                    key: "SPI",
                    label: "Get SPI / CPI",
                    onClick: () => {
                      tempFunc();
                      getSPICPI(
                        setSemData,
                        semData,
                        sem1a,
                        sem2a,
                        sem3a,
                        sem4a,
                        sem5a,
                        sem6a,
                        sem7a,
                        sem8a,
                        sem9a,
                        sem10a,
                        sem11a,
                        sem12a,
                        sem13a,
                        sem14a,
                        sem15a,
                        sem16a,
                        setCpi,
                        setShowStat2,
                        results,
                        setResults
                      );
                      handleClick1();
                    },
                  },
                  {
                    key: "AP",
                    label: "Find Status",
                    onClick: () => {
                      tempFunc();
                      getStats(semData);
                      handleClick2();
                    },
                  },
                ]}
              />
            </div>
          }
          <Button
            // style={{
            //   backgroundColor: "#001529",
            //   color: "lightgray",
            //   marginTop: "15px",
            // }}
            href="./y22"
            className={styles.nonmobile+" "+styles.loaderY22}
          >
            For Y22
          </Button>
          {/* <Avatar src={<Image src={userImage} style={{ width: 32 }} />} /> */}
          <div>
            {sessiondata?.user.id && (
              <Popover
                placement={"bottomRight"}
                content={content}
                title="My Profile"
                trigger="click"
              >
                <Avatar
                  size={50}
                  src={userImage}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                ></Avatar>
              </Popover>
            )}
            {!sessiondata?.user.id && (
              <Button
                style={{
                 
                  position: "fixed",
                  right: "30px",
                }}
                className={styles.loaderY22}
                onClick={() => {
                  setIsLogIn(true);
                  // router.push("./verify");
                }}
                href={`${process.env.NEXT_PUBLIC_LOGIN_URL}?return_to=${process.env.NEXT_PUBLIC_BASE_URL}/verify`}
              >
                Login
              </Button>
            )}
          </div>
          {/* <Button style={{backgroundColor: "#001529", color: "lightgray", marginTop: "15px"}}  href='./verify'>Login</Button> */}
        </Header>
        <div>
          {
            <Content className={styles.bothmobile}>
              {/* <div  style={{ justifyContent:'center', alignItems:'center'}}> */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  CPI/SPI/Status Calculator
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "15px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Find your semwise SPI and CPI using the AnC calculator. Add
                  new semesters and add new courses to each semester to get the
                  data. You can also click on the button &quot;repeated&quot; if
                  that course has been repeated by the student and the better
                  grade is obtained in the next attempt. Note that only the best
                  attempt of each course should have the repeated button not
                  clicked.
                </p>
              </div>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 620 }}
              >
                <Navigation />
                <div>
                  {" "}
                  {showStat && (
                    <div style={{ paddingBottom: "50px" }}>
                      {semData.length > 0 && (
                        <p
                          style={{
                            fontSize: "25px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {status}
                        </p>
                      )}
                      {semData.length == 0 && (
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Enter data into the semesters to find out your
                          academic status
                        </p>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button onClick={() => setShowStat(false)}>
                          Hide Status
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {showStat2 && (
                    <div style={{ paddingBottom: "50px" }}>
                      {semData.length > 0 && (
                        <div>
                          <Table columns={columns} dataSource={results} />
                          <p
                            style={{
                              fontSize: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            Overall CPI : {cpi}
                          </p>
                        </div>
                      )}
                      {semData.length == 0 && (
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Enter data into the semesters to find out your SPI /
                          CPI
                        </p>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button onClick={() => setShowStat2(false)}>
                          Hide CPI / SPI
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Content>
          }
        </div>

        <Footer
          style={{
            textAlign: "center",
            position: "fixed",
            bottom: "0px",
            left: "0px",
            right: "0px",
          }}
        >
          AnC web team ©2022{" "}
        </Footer>
      </Layout>
    </div>
  );
};

export default Home;
