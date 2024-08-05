import {BrowserRouter, Route, Routes } from "react-router-dom"
import Steam from "./screens/Steam"
import NotFound from "./screens/NotFound"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/steam" element={<Steam />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
