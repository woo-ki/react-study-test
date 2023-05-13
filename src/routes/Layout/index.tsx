import {Outlet} from "react-router-dom";
import NavigationBar from "./NavigationBar.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
    return (
        <>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;
