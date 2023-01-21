import { useRecoilState, useRecoilValue } from "recoil";
import DataType from "../typeDefinitions/datatype";
import { allSemsData, loginStatus, Sem10Data, Sem11Data, Sem12Data, Sem13Data, Sem14Data, Sem15Data, Sem16Data, Sem1Data, Sem2Data, Sem3Data, Sem4Data, Sem5Data, Sem6Data, Sem7Data, Sem8Data, Sem9Data } from '../typeDefinitions/recoilDeclarations';
import { useState } from "react";
import { SPIstruct } from "../navigation";
export const getSPICPI=(setSemData:any, semData:DataType[][], sem1:DataType[], sem2:DataType[], sem3:DataType[], 
    sem4:DataType[], sem5:DataType[], sem6:DataType[], sem7:DataType[], sem8:DataType[], sem9:DataType[], 
    sem10:DataType[], sem11:DataType[], sem12:DataType[], sem13:DataType[], sem14:DataType[], sem15:DataType[], 
    sem16:DataType[],setCpi:any,setShowStat2:any,results:any,setResults:any) => {
    // const [cpi, setCpi] = useState(0)
    // const [showStat2, setShowStat2] = useState(false)
    // const [semData, setSemData] = useRecoilState(allSemsData)
    //  const [results, setResults] = useState<SPIstruct[]>([])
  // const [trial, setTrial] = useState<DataType[][]>()
    // const [status, setStatus] = useState("Normal");
    // const [showStat, setShowStat] = useState(false)
    // let [sem1a, ] = useRecoilState(Sem1Data);
    // let [sem2a, ] = useRecoilState(Sem2Data)
    // const [sem3a, ] = useRecoilState(Sem3Data)
    // const [sem4a, ] = useRecoilState(Sem4Data)
    // const [sem5a, ] = useRecoilState(Sem5Data)
    // const [sem6a, ] = useRecoilState(Sem6Data)
    // const [sem7a, ] = useRecoilState(Sem7Data)
    // const [sem8a, ] = useRecoilState(Sem8Data)
    // const [sem9a, ] = useRecoilState(Sem9Data)
    // const [sem10a, ] = useRecoilState(Sem10Data)
    // const [sem11a, ] = useRecoilState(Sem11Data)
    // const [sem12a, ] = useRecoilState(Sem12Data)
    // const [sem13a, ] = useRecoilState(Sem13Data)
    // const [sem14a, ] = useRecoilState(Sem14Data)
    // const [sem15a, ] = useRecoilState(Sem15Data)
    // const [sem16a, ] = useRecoilState(Sem16Data)
    let semDataAll = semData
    semDataAll = []
    // console.log(sem1a)
    if(sem1.length !== 0) {semDataAll = [sem1];}
    if(sem2.length !== 0) {semDataAll?.push(sem2)}
    if(sem3.length !== 0) {semDataAll?.push(sem3)}
    if(sem4.length !== 0) {semDataAll?.push(sem4)}
    if(sem5.length !== 0) {semDataAll?.push(sem5)}
    if(sem6.length !== 0) {semDataAll?.push(sem6)}
    if(sem7.length !== 0) {semDataAll?.push(sem7)}
    if(sem8.length !== 0) {semDataAll?.push(sem8)}
    if(sem9.length !== 0) {semDataAll?.push(sem9)}
    if(sem10.length !== 0) {semDataAll?.push(sem10)}
    if(sem11.length !== 0) {semDataAll?.push(sem11)}
    if(sem12.length !== 0) {semDataAll?.push(sem12)}
    if(sem13.length !== 0) {semDataAll?.push(sem13)}
    if(sem14.length !== 0) {semDataAll?.push(sem14)}
    if(sem15.length !== 0) {semDataAll?.push(sem15)}
    if(sem16.length !== 0) {semDataAll?.push(sem16)}
    setSemData(semDataAll)


      let totCreds = 0
      let receivedCreds = 0
      let res = results
      res = []
      for(let index = 0; index < semDataAll.length; index++) {
          
          let spi_cred = 0
          let spi_cred_done = 0
          let cred = 0
          for(let index2 = 0; index2<semDataAll[index].length; index2++) {
              
              if(semDataAll[index][index2].grade !== 'S' && semDataAll[index][index2].grade !== 'X') {
                  if(semDataAll[index][index2].is_repeated === false) {
                      totCreds = totCreds + semDataAll[index][index2].credits
                      receivedCreds = receivedCreds + semDataAll[index][index2].credits_received
                  }
                  spi_cred = spi_cred + semDataAll[index][index2].credits
                  spi_cred_done = spi_cred_done + semDataAll[index][index2].credits_received
              }
              if(semDataAll[index][index2].grade !== 'X' && semDataAll[index][index2].grade !== 'E(old)' && semDataAll[index][index2].grade !== 'E(new)' && semDataAll[index][index2].grade !== 'F') {
                  cred += semDataAll[index][index2].credits
              }
          }
          let sem_name = index.toString()
          let singleSem:SPIstruct = {sem_name:sem_name, spi:Number((spi_cred_done/spi_cred*10).toFixed(3)), credits_completed: cred}
          res.push(singleSem)
      }
      setCpi(Number((receivedCreds/totCreds*10).toFixed(3)))
      setResults(res)
      // console.log(semDataAll)
      setShowStat2(true)
      // console.log("totCreds:", totCreds)
  }