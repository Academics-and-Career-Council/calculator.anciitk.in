
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
import styles from '../styles/Home.module.css'
import { Button } from "antd";

const Home: NextPage = () => {
  const router = useRouter();
  
  const [session, setSession] = useRecoilState(recoilSessionState);
  const [isLogIn, setIsLogIn] = useRecoilState(loginStatus);
  setIsLogIn(true);
  if (session !== undefined) {
    setSession(session);
    router.push("/dashboard");
  }


  if (isLogIn === true) {
    if (session === undefined) {
      // router.push("./verify");
    }
  }

  useEffect(() => {
    ory
      .toSession()
      .then(({ data: session }) => {
        ory
          .createSelfServiceLogoutFlowUrlForBrowsers()
          .then(({ data: logout }) => {
            xenon
              .whoami()
              .then((user) => {
                setSession({
                  active: true,
                  logoutUrl: logout.logout_url || '',
                  user: user,
                  session: session
                })
                router.push("/dashboard");
              })
              .catch((err) => {
                // router.push("/dashboard");
                throw new Error(err)
              })
          })
          .catch((err) => {
            // router.push("/dashboard");
            return Promise.reject(err)
          })
          .catch((err) => {
            switch (err.response?.status) {
              case 403:
                // router.push("/dashboard");
              case 401:
                // router.push("/dashboard");
                return
            }
            // router.push("/dashboard");
            return Promise.reject(err)
          })
      })
      .catch((err) => {
        // router.push("/dashboard");
        return
      })
  }, [])

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "https://cdn.statically.io/img/cdn.anciitk.in/f=auto/img/bg.jpg"
        }}
      >
        <div className={styles.form_signup}>
              <div className={styles.imgOfCaptcha}>
                <img
                  src="https://anciitk.in/img/anc-logo.png"
                  alt="AnC IITK logo"
                  height="100px"
                />
                <h2 className={styles.headingForCaptcha}>
                  Academics and Career Council,
                  <br />
                  IIT Kanpur
                </h2>
                <Button
                  className={styles.buttonSignp}
                  onClick={() => router.push(`${process.env.NEXT_PUBLIC_LOGIN_URL}?return_to=${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`)}
                >
                  Login
                </Button>
                <Button
                  className={styles.buttonSignp}
                  onClick={() => router.push(`${process.env.NEXT_PUBLIC_ACCOUNTS_URL}/registration?return_to=${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`)}
                >
                  Register
                </Button>
                <Button
                  className={styles.buttonSignp}
                  onClick={() => router.push(`./dashboard`)}
                >
                  Continue without Logging in
                </Button>                
               
              </div>
            </div>
      </div>
    </div>
  );
};

export default Home;

