import { useContext } from "react";
import "./DarkMode.css"
import { DarkModeContext } from "../../context/Context";
import Light from "../../assets/svg/Light";
import Dark from "../../assets/svg/Dark";


const DarkMode = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
    return ( 
        <div className="dark-light-mode" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Light /> : <Dark />}
        </div>
    );
}

export default DarkMode;