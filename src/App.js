
import './App.css';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Routes, Route } from "react-router-dom"
import RootLayout from './components/RootLayout';
import { Provider } from "react-redux"
import appStore from './utils/appStore';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className="App">
      {/* <Product /> */}
      {/* <Sample /> */}
      <Provider store={appStore}>

        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
