import Navbar from "../components/Navbar"
import SideMenu from "../components/SideMenu"
import Main from "../components/Main"

const Steam = () => {
    return (
        <div className="flex flex-col w-full h-full">
            <Navbar/>
            <div className="flex ">
            <SideMenu/>
            <Main/>
            </div>
        </div>
    )
}

export default Steam