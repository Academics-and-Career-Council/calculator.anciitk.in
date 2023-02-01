// import React from "react";
import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { loginStatus } from "../components/typeDefinitions/recoilDeclarations";
import { useEffect } from "react";

// const context= useContext();
// const router = useRouter();
// const [session, setSession] = useRecoilState(recoilSessionState);
// const { next: next } = router.query;
export default function Component() {
  const router = useRouter();
  const [session, setSession] = useRecoilState(recoilSessionState);
  const [isLogIn, setIsLogIn] = useRecoilState(loginStatus);
  setIsLogIn(true);
  if (session !== undefined) {
    setSession(session);
    router.push("/");
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
              })
              .catch((err) => {
                throw new Error(err)
              })
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      })
      .catch((err) => {
        switch (err.response?.status) {
          case 403:
            return
          case 401:
            return
        }
        return Promise.reject(err)
      })
  }, [])

  const { next: next } = router.query;
  return (
    <div>
       {/* {session === undefined && ( 
        <Redirect
          loginUrl={`${process.env.NEXT_PUBLIC_LOGIN_URL}`}
          historyPush={router.push}
          sessionState={session}
          setSessionState={setSession}
          basePath={`${process.env.NEXT_PUBLIC_BASE_URL}`}
          path="/loadingPage"
          ory={ory}
          xenon={xenon}
          roles={[]}
        />

        
       )} */}
    </div>
  );
}
