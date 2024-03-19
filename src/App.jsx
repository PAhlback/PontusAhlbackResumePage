import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import FullResumePage from './pages/FullResumePage.jsx'

function App() {
  return (
    <>
      <BrowserRouter basename='/cvsida-scroll-react'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/resume" element={<FullResumePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
