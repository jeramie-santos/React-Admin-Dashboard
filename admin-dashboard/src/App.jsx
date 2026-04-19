import Dashboard from "./Components/Dashboard";
import Analytics from "./Components/Analytics";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import UsersLists from "./Components/UsersList";

const App = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
        <Routes>
          <Route element={<Layout isOpen={isOpen} setIsOpen={setIsOpen}/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/users" element={<UsersLists/>}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
  )
}

export default App;