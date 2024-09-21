import { Routes, Route } from "react-router-dom";
import Authlayout from "./components/auth/layout";
import Authlogin from "./pages/auth/login";
import Authregister from "./pages/auth/register";
import Adminlayout from "./components/admin-view/layout";
import Admindashboard from "./pages/admin-view/dashboard";
import Adminorders from "./pages/admin-view/orders";
import Adminproducts from "./pages/admin-view/products";
import Adminfeatures from "./pages/admin-view/features";
import Shoppinglayout from "./components/shopping-view/layout";
import Notfound from "./pages/not-found";
import Shoppinghome from "./pages/shopping-view/home";
import Shoppinglisting from "./pages/shopping-view/listing";
import Shoppingcheckout from "./pages/shopping-view/checkout";
import Shoppingaccount from "./pages/shopping-view/account";
import CheckAuth from "./components/common/check-auth";
import { useSelector } from "react-redux";

function App() {
  const {user, isAuthenticated} = useSelector( (state)=> state.auth )
  return (  

    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>

          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Authlayout/>
            </CheckAuth>
          }>
              <Route path="login" element={<Authlogin />} /> 
              <Route path="register" element={<Authregister />} /> 
          </Route>

          <Route path="/admin" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Adminlayout/>
            </CheckAuth>
          }>
              <Route path="dashboard" element={<Admindashboard/>}/>
              <Route path="orders" element={<Adminorders/>}/>
              <Route path="features" element={<Adminproducts/>}/>
              <Route path="products" element={<Adminfeatures/>}/>
          </Route>

          <Route path="/shop" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <Shoppinglayout/>
            </CheckAuth>
          }>
              <Route path="home" element = {<Shoppinghome/>}/>
              <Route path="listing" element = {<Shoppinglisting/>}/>
              <Route path="checkout" element = {<Shoppingcheckout/>}/>
              <Route path="account" element = {<Shoppingaccount/>}/>
          </Route>

          <Route path="*" element={<Notfound/>}/>

      </Routes>
    </div>
  );
}

export default App;
