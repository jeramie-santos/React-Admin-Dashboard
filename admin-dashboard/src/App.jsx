import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import Users from "./Components/Users";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Components/Layout";

const App = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
        <Routes>
          <Route element={<Layout isOpen={isOpen} setIsOpen={setIsOpen}/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/users" element={<Users/>}/>
          </Route>
        </Routes>
  )
}

export default App;