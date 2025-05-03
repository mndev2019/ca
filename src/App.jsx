
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'
import Service from './Pages/Service'
import Subservice from './Pages/Service/Subservice'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/sub-service' element={<Subservice/>}/>

      </Route>

    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
