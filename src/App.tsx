import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './rootLayout/RootLayout'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import { useState } from 'react'
import { DarkModeContext } from './context/Context'
import Gallery from './pages/gallery/Gallery'
import Loader from './components/loader/Loader'

function App() {
  // Context state
  const [darkMode, setDarkMode] = useState<boolean>(false);
  

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='gallery' element={<Gallery />} />
      <Route path='*' element={<NotFound />} />
      <Route path='loader' element={<Loader />} /> 

    </Route>
    </>
  )
)

return (
  <div className={`${darkMode && "dark"}`}>
    {/* verheiraten... */}
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <RouterProvider router={router} />
    </DarkModeContext.Provider>
  </div>
)
}

export default App