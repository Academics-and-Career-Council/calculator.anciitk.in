import type { NextPage } from "next";
import Home from "./homePage";
import Loader from "../components/loader";
import { useState,useEffect } from "react";
import styles from "../components/loader.module.css";
import { Spin } from 'antd';
const PreY22: NextPage = () => {
  const[display,setDisplay]=useState(0)
    useEffect(()=>{
        const timer = setTimeout(() => {
            setDisplay(1);
            console.log("display change")
          }, 3000);
          return () => clearTimeout(timer);
    })
  return(<>{display && <div className={styles.animationLoad}><Home/></div>}
  {!display && <Loader/>}
  </>)
}

export default PreY22;