import { useState, useEffect } from 'react'
import { getUsers } from './api/users'
import { getProducts } from './api/products'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Home from "./components/Home"
import List from "./components/List"

function App() {
  const [errorState, setErrorState] = useState({ hasError: false })
  const [usersData, setUsersData] = useState()

  useEffect(() => {
    getUsers().then((data) => setUsersData({ count: data.count, users: data.users }))
    .catch(handleError)
  }, [])

  const [productsData, setProductsData] = useState()

  useEffect(() => {
    getProducts().then((data) => setProductsData({
      count: data.count,
      categories: data.count_by_category,
      products: data.products
    })).catch(handleError)
  }, [])

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message })
  }

  if(errorState.hasError) {
    return (
      <div>{errorState.message}</div>
    )
  }
  
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Topbar />
            {productsData && usersData &&
            <Switch>
                <Route path="/products">
                  <List
                    productsData={productsData}
                  />
                </Route>
                <Route exact path="/">
                   <Home
                      productsData={productsData}
                      usersData={usersData}
                    />
                </Route>
            </Switch>
            }
            {(!productsData || !usersData) &&
              <div className="container-fluid">
                 <div className="d-sm-flex align-items-center justify-content-between mb-12">
                  <h1 className="h3 mb-12 text-gray-800">Cargando...</h1>
                </div>
              </div>
            }
          </div>
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Bertedeco 2022</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  )
}

export default App
