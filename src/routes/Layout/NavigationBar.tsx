import {Link} from "react-router-dom";


const NavigationBar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "center", gap: "16px"}}>
            <Link to="/query1">query1</Link>
            <Link to="/query2">query2</Link>
            <Link to="/query3">query3</Link>
        </nav>
    );
};

export default NavigationBar;
