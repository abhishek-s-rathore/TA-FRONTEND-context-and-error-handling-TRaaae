import { ModeContext } from "./context/ModeContext";
import {useContext} from 'react';

function Header({ isDarkMode }) {
  let mode = useContext(ModeContext);
  return (
      
       <h1 className={`heading ${mode.isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
      
  );
}

export default Header;



{/* <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
{isDarkMode ? "Dark Mode" : "Light Mode"}
</h1> */}