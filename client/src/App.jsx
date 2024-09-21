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

function App() {
  return (  // Add 'return' to return JSX
    <div className="flex flex-col overflow-hidden">
      <h1>Header Component</h1>
      <Routes>

          <Route path="/auth" element={<Authlayout />}>
              <Route path="login" element={<Authlogin />} /> 
              <Route path="register" element={<Authregister />} /> 
          </Route>

          <Route path="/admin" element={<Adminlayout/>}>
              <Route path="dashboard" element={<Admindashboard/>}/>
              <Route path="orders" element={<Adminorders/>}/>
              <Route path="features" element={<Adminproducts/>}/>
              <Route path="products" element={<Adminfeatures/>}/>
          </Route>

          <Route path="/shopping" element = {<Shoppinglayout/>}>
              {/* <Route path="header" element = {<Shoppingheader/>}/> */}
          </Route>

          <Route path="*" element={<Notfound/>}/>

      </Routes>
    </div>
  );
}

export default App;
