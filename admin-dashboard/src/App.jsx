import Topbar from "./Components/Topbar";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Analytics from "./Components/Analytics";
import Users from "./Components/Users";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-4 flex flex-col">
        <Topbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;