import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Route, Link,Routes, Switch } from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FAQ from './pages/FAQ';
import Condition from './pages/Condition';
import Privacy from './pages/Privacy';
import Upcoming from './pages/Upcoming';
import Medicine from './pages/Medicine';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Cart from './pages/Cart';

import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

//dashboardComponents
import Dashboard from "./pages/dashboard/Dashboard";
import ForgotPassword from "./pages/dashboard/ForgotPassword";
import Register from "./pages/dashboard/Register";
import Login from "./pages/dashboard/Login";
import PawanUserAcc from "./pages/dashboard/PawanUserAcc";
import PawanPharmacyAcc from "./pages/dashboard/PawanPharmacyAcc";
import Charts from "./pages/dashboard/Charts";
import Table from "./pages/dashboard/Table";
import PieCharts from "./pages/dashboard/PieCharts";
import LineCharts from "./pages/dashboard/LineCharts";
import BarCharts from "./pages/dashboard/BarCharts";
import SkillBar from "./pages/dashboard/SkillBar";
import AdminChatRoomComponent from "./pages/admin/AdminChatRoomComponent";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";

//user components
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserOredrDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserProfilePage from "./pages/user/UserProfilePage";

//admin components
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminCreateProductPage from"./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/signUp' element={<SignUp />}/>
          <Route path='/fAQ' element={<FAQ/>}/>
          <Route path='/condition' element={<Condition/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/medicine' element={<Medicine/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/cart' element={<Cart/>}/>


	
	//shashika
	<Route path="/adminhome" element={<HomePage/>}/>
	<Route path="/product-list" element={<ProductListPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
	 <Route path="/product-details" element={<ProductDetailsPage/>}/>
        <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
	 <Route path="*" element="Page not exist 404"/>
	<Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/forgot-password" element={<ForgotPassword/>}/>
	<Route path="/dashboard/register" element={<Register/>}/>
        <Route path="/dashboard/login" element={<Login/>}/>
        <Route path="/dashboard/user" element={<PawanUserAcc/>}/>
        <Route path="/dashboard/pharmacy" element={<PawanPharmacyAcc/>}/>
	
	<Route path="/dashboard/charts" element={<Charts/>}/>
        <Route path="/dashboard/table" element={<Table/>}/>
        <Route path="/dashboard/chat-room" element={<AdminChatRoomComponent/>}/>
        <Route path="/dashboard/graph" element={<AdminAnalyticsPage/>}/>
        <Route path="/dashboard/piechart" element={<PieCharts/>}/>
        <Route path="/dashboard/linechart" element={<LineCharts/>}/>
        <Route path="/dashboard/barchart" element={<BarCharts/>}/>
        <Route path="/dashboard/skillbar" element={<SkillBar/>}/>
	

	//user
	<Route path="/user" element={<UserProfilePage/>}/>
        <Route path="/user/my-orders" element={<UserOrderPage/>}/>
        <Route path="/user/cart-details" element={<UserCartDetailsPage/>}/>
        <Route
          path="/user/order-details"
          element={<UserOredrDetailsPage/>}
        />


	//admin

	<Route path="/admin/users" element={<AdminUsersPage/>}/>
        <Route path="/admin/edit-user" element={<AdminEditUserPage/>}/>
        <Route path="/admin/products" element={<AdminProductsPage/>}/>
        

        <Route
          path="/admin/create-new-product"
          element={<AdminCreateProductPage/>}
        />

        <Route
          path="/admin/edit-product"
          element={<AdminEditProductPage/>}
        
        />
        <Route path="/admin/orders" element={<AdminOrdersPage/>} />
        <Route 
          path="/admin/order-details"
          element={<AdminOrderDetailsPage/>}
          />



        </Routes>
      </Router>
       
        </div>

  )
}

export default App;
