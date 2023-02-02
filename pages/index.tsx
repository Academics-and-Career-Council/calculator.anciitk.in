import { ory } from "../pkg/open-source";
import Redirect from "@anciitk/kratos-verify-session";
import "@anciitk/kratos-verify-session/dist/index.css";
import { useRouter } from "next/router";
import { xenon } from "../pkg/xenon";
import { useRecoilState } from "recoil";
import { useContext, useEffect } from "react";
import { recoilSessionState } from "../pkg/recoilDeclarations";
import { loginStatus } from "../components/typeDefinitions/recoilDeclarations";
import { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();
  const [session, setSession] = useRecoilState(recoilSessionState);
  const [isLogIn, setIsLogIn] = useRecoilState(loginStatus);
  setIsLogIn(true);
  if (session !== undefined) {
    setSession(session);
    router.push("/dashboard");
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
                router.push("/dashboard");
                throw new Error(err)
              })
          })
          .catch((err) => {
            router.push("/dashboard");
            return Promise.reject(err)
          })
          .catch((err) => {
            switch (err.response?.status) {
              case 403:
                router.push("/dashboard");
              case 401:
                router.push("/dashboard");
                return
            }
            router.push("/dashboard");
            return Promise.reject(err)
          })
      })
      .catch((err) => {
        router.push("/dashboard");
      })
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

    </div>
  );
};

export default Home;
