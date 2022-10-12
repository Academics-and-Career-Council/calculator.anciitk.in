import { useState } from "react"
import SPIFinder from "./spiFinder"
import APFinder from "./apFinder"

export default function Navigation() {
    const [enableSpi, setEnableSpi] = useState(false)
    const [enableAp, setEnableAp] = useState(false)
    return (
        <div>
            <p>SPI/CPI/AP calculator</p>
            <button disabled={enableAp} onClick = {() => {
                if(enableSpi === false) setEnableSpi(true)
                else setEnableSpi(false)
            }}>Find SPI/CPI</button>
            <button disabled={enableSpi} onClick = {() => {
                if(enableAp === false) setEnableAp(true)
                else setEnableAp(false)
            }}>Find AP</button>
            <div>{enableSpi && 
            <SPIFinder />}</div>
            <div>{enableAp &&
                <APFinder />
            }
            </div>
        </div>
    )
}