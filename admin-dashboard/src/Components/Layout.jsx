import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = ({isOpen, setIsOpen}) => {

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="flex-4 flex flex-col">
        <Topbar toggle={() => setIsOpen(!isOpen)}/>
        <div>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;