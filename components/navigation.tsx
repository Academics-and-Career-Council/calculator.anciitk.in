import { useState } from "react"
import SPIFinder from "./spiFinder"
import { Button, Table } from "antd"
import App from "./uploadTranscript"
import { useRecoilState } from "recoil"
import { allSemsData } from "./recoilDeclarations"
import DataType from "./datatype"
import type { ColumnsType } from 'antd/es/table';

interface SPIstruct {
    sem_name: string;
    spi: number;
    credits_completed: number;
}
export default function Navigation() {
    const [enableSpi, setEnableSpi] = useState(false)

    const [enableUpl, setEnableUpl] = useState(false)
    const [enableFill, setEnableFill] = useState(false)
    const [semData, setSemData] = useRecoilState(allSemsData)
    const [status, setStatus] = useState("Normal");
    const [showStat, setShowStat] = useState(false)
    // const [totCreds, setTotCreds] = useState(0);
    // const [prevSemCreds, setPrevSemCreds] = useState(0);
    // const [numSems, setNumSems] = useState(0)
    // const [prevSemStatus, setPrevSemStatus] = useState("Normal")

    const getStats = (semData:DataType[][]) => {    
        let numSems = 0;
        let prevSemCreds = 0;
        let totCreds = 0;
        let prevSemStatus = "Normal"
        
        for(let index = 0; index < semData.length; index++) {
            for(let index2 = 0; index2<semData[index].length; index2++) {
                if( semData[index][index2].credits_received !== 0 || semData[index][index2].grade !== "E") {
                    totCreds = ( totCreds + semData[index][index2].credits );
                    if(index !== semData.length - 1) {
                        prevSemCreds = ( prevSemCreds + semData[index][index2].credits )
                    }
                }
            }
            // setNumSems(numSems+1);
            numSems = numSems + 1
            console.log("prev sem creds:", prevSemCreds)
            console.log("tot creds:", totCreds)
            console.log(semData)
            if( prevSemCreds >= 30 && (totCreds >= numSems*(numSems+24) && totCreds < 36*numSems)) {
                setStatus("Warning")
            }
            if( prevSemCreds < 30 && (totCreds >= 36*numSems) ) {
                setStatus("Warning")
            }
    
            if( prevSemCreds >= 30 && (totCreds < (24+numSems)*numSems) ) {
                setStatus("Academic Probation")
                prevSemStatus = "Academic Probation"
                // console.log("AP")
            }
            else if( prevSemCreds < 30 && (totCreds >= numSems*(numSems+24) && totCreds < 36*numSems) ){
                setStatus("Academic Probation")
                prevSemStatus = "Academic Probation"
                // console.log("AP")
            }
            else if( prevSemCreds < 30 && (totCreds < (24+numSems)*numSems) && prevSemStatus != "Academic Probation") {
                setStatus("Academic Probation")
                prevSemStatus = "Academic Probation"
                // console.log("AP")
            }
            else if( prevSemStatus == "Academic Probation" && prevSemCreds < 30 && totCreds < (24 + numSems)*numSems) {
                setStatus("Programme Termination")
                // console.log("PT")
            }
            
        }
        setShowStat(true)
            
    }

    const [results, setResults] = useState<SPIstruct[]>([])
    const [cpi, setCpi] = useState(0)
    const [showStat2, setShowStat2] = useState(false)

    
const columns: ColumnsType<SPIstruct> = [
    {
      title: 'Semester',
      dataIndex: 'sem_name',
      key: 'sem_name',
    },
    {
      title: 'SPI',
      dataIndex: 'spi',
      key: 'spi',
    },
    {
      title: 'Credits Completed',
      dataIndex: 'credits_completed',
      key: 'credits_completed',
    }
  ];

    const getSPI = () => {
        let totCreds = 0
        let receivedCreds = 0
        let res = results
        res = []
        for(let index = 0; index < semData.length; index++) {
            
            let spi_cred = 0
            let spi_cred_done = 0
            let cred = 0
            for(let index2 = 0; index2<semData[index].length; index2++) {
                
                if(semData[index][index2].grade !== 'S' && semData[index][index2].grade !== 'X') {
                    if(semData[index][index2].is_repeated === false) {
                        totCreds = totCreds + semData[index][index2].credits
                        receivedCreds = receivedCreds + semData[index][index2].credits_received
                    }
                    spi_cred = spi_cred + semData[index][index2].credits
                    spi_cred_done = spi_cred_done + semData[index][index2].credits_received
                }
            }
            let sem_name = index.toString()
            let singleSem:SPIstruct = {sem_name:sem_name, spi:spi_cred_done/spi_cred*10, credits_completed: spi_cred}
            res.push(singleSem)
        }
        setCpi(receivedCreds/totCreds*10)
        setResults(res)
        setShowStat2(true)
        console.log("totCreds:", totCreds)
    }


    return (
    <div>
        <div >
            <App />
            <div  style={{display:'flex',justifyContent:'center', alignItems:'center', padding:"50px"}}>
                <Button onClick={() => getSPI()}> Get SPI / CPI </Button>
                
                <Button onClick={() => getStats(semData)}>Find Status</Button>

            {/* // } */}
            </div>
            
            <div> { showStat &&

            
                <div style={{paddingBottom:"50px"}}>
                    {(semData.length > 0) &&
                <p style={{"fontSize":"25px", display:'flex',justifyContent:'center', alignItems:'center'}}>{status}</p>
                }
                {
                        (semData.length == 0) &&
                        <p style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Enter data into the semesters to find out your academic status</p>
                }
                <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <Button onClick={() => setShowStat(false)}>Hide Status</Button>
                </div>
                </div>
            }
            </div>
            
            <div>{ showStat2 && 
                <div style={{paddingBottom: "50px"}}>
                
                {(semData.length > 0) &&
                    <div>
                    <Table columns={columns} dataSource={results} />
                    <p style={{"fontSize":"30px", display:'flex',justifyContent:'center', alignItems:'center'}}>Overall CPI : {cpi}</p>
                </div>
                }
                {
                    (semData.length == 0) &&
                    <p style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Enter data into the semesters to find out your SPI / CPI</p>
                }
                <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <Button onClick={() => setShowStat2(false)}>Hide CPI / SPI</Button>
                </div>
                </div>}
            </div>
            
        </div>
    </div>
    )
}