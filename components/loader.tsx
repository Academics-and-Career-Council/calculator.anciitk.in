import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import styles from "./loader.module.css";
export default function Loader(){
    
    
    return(<div className={styles.page}>
        <div className={styles.logo}></div>
        <div className={styles.ldsroller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>)
}