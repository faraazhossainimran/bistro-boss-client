import { Outlet, useLocation } from "react-router-dom"
import Footer from "../shared/Footer/Footer"
import NavBar from "../shared/NavBar/NavBar"


const Main = () => {
    const location = useLocation();
    const noheaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    console.log(location);
    return (
        <div>
           { noheaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    )
}

export default Main