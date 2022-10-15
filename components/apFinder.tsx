import { useState } from "react"
import App from "./uploadTranscript"
import {useRecoilState} from "recoil"
import { allSemsData } from "./recoilDeclarations"
import { Button } from "antd"
import DataType from "./datatype"

export default function APFinder () {
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

    return(
        <div >
            {/* <App /> */}
            
            
        </div>
    )
}