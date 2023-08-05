import { useState } from "react"
import { CounterApp } from "./01-useState/CounterApp"
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
import { MultiCounterApp } from "./01-useState/MultiCounterApp"
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"
import { Search } from "./03-examples/Search"
import { FocusScreen } from "./04-useRef/FocusScreen"

export const HooksApp = () => {

  const [countryCode, setCountryCode] = useState("CHL"); // Default country code

  const handleSearch = (newCountryCode: string) => {
    setCountryCode(newCountryCode);
  };

  return (
    <>
        <h1>HooksApp</h1>

        <h2>01 - useState</h2>
          <ul>
                
              <li><CounterApp/></li>
              <li><MultiCounterApp/> </li>
              <li><CounterWithCustomHook/></li>
          </ul>
          
        <h2>02 - useEffect</h2>

          <ul>
            <li><SimpleForm/></li>
            <li><FormWithCustomHook/></li>
          </ul>
        
        <h3>03 - ufeFetch + useCounter</h3>
        
          <ul>
            <li><Search onSearch={handleSearch}/></li>
            <li><MultipleCustomHooks countryCode={countryCode}/></li>
          </ul>

        <h3>04 - useRef </h3>

        <ul>
          <li><FocusScreen/></li>
          <li></li>
        </ul>
    </>
  )
}
