
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'
import Service from './Pages/Service'
import Subservice from './Pages/Service/Subservice'
import Contactus from './Pages/Contactus'
import Gst from './Pages/Gst'
import { ToastContainer } from 'react-toastify'


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<WebLayout />}>
        <Route index element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/service_detail_url/:url' element={<Subservice />} />
        <Route path='/gst' element={<Gst />} />
        <Route path='/contact' element={<Contactus />} />
      </Route>

    )

  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
