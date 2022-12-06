import React, { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
// import Aboutme from "./pages/Aboutme"
// import Contact from "./pages/Contact"
// import Languages from "./pages/Languages"
// import Interests from "./pages/Interests"
import ProjectIndex from "./pages/ProjectIndex"
// import ProjectShow from "./pages/ProjectShow"
// import ProjectNew from "./pages/ProjectNew"
// import ProjectEdit from "./pages/ProjectEdit"
import projectdata from "./components/projectdata"
import Footer from "./components/Footer"

const App = () => {
  const [projects, setProjects] = useState(projectdata)
  console.log(projects)


  return (
    <> 
      <Routes>
        <Route path="/" element={<Home projects={projects}/>} />
        {/* <Route path="/aboutme" element={<Aboutme/>} />
        <Route path="/languages" element={<Languages/>} />
        <Route path="/interests" element={<Interests/>} />
        <Route path="/contact" element={<Contact/>} /> */}
        <Route path="/projectindex" element={<ProjectIndex projects={projects}/>} />
        {/* <Route path="/projectshow" element={<ProjectShow />} />
        <Route path="/projectnew" element={<ProjectNew />} />
        <Route path="/projectedit" element={<ProjectEdit />} /> */}
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App



// you may need to undo the changes on the projects page. re-evaluate the plan for portfolio so you can execute it better. you made lots of changes causeing flow change. look into navigations. create the scroll to top feature and scroll to sections with nave bar.