import { useState } from "react"
import App from "./uploadTranscript"

export default function APFinder () {
    const [enableUpl, setEnableUpl] = useState(false)
    const [enableFill, setEnableFill] = useState(false)

    return(
        <div>
            <p style={{"fontSize":"35px"}}>Check your Academic status</p>
            <p style={{"fontSize":"25px"}}>Normal / Warning / Academic Probation / Programme Termination</p>
            <button disabled={enableFill}  onClick = {() => {
                if(enableUpl === false) setEnableUpl(true)
                else setEnableUpl(false)
            }}>Upload Transcript</button>
            <button disabled={enableUpl}  onClick = {() => {
                if(enableFill === false) setEnableFill(true)
                else setEnableFill(false)
            }}>Fill grades</button>
            <div>{enableUpl && 
            <App />
            }</div>
        </div>
    )
}