import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/GlobalStyle'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EditProfile from './pages/EditProfile';
import Offers from './pages/Offers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Profile from './pages/Profile';
import Review from './pages/Review';
import TermCondition from './pages/TermCondition';
import Login from './pages/auth/Login';
import Ragister from './pages/auth/Ragister';
import ForgotPassword from './pages/auth/ForgotPassword';
import KidsProduct from './pages/kids/KidsProduct';
import KidsProductDetails from './pages/kids/KidsProductDetails';
import MenProduct from './pages/men/MenProduct';
import MenProductDetails from './pages/men/MenProductDetails';
import WomenProduct from './pages/women/WomenProduct';
import WomenProductDetails from './pages/women/WomenProductDetails';
import Order from './pages/order/Order';
import OrderHistory from './pages/order/OrderHistory';
import OrderTracking from './pages/order/OrderTracking';
import SavedAddress from './pages/order/SavedAddress';
import WhishList from './pages/order/WhishList';
import Cart from './pages/order/Cart';
import Header from './pages/section/Header';
import Footer from './pages/section/Footer';

function App() {

  const theme = {
    colors: {
      headingColor: '#000',
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Offers' element={<Offers />} />
            <Route path='/Review' element={<Review />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/EditProfile' element={<EditProfile />} />
            <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='/TermCondition' element={<TermCondition />} />


            <Route path='/Ragister' element={<Ragister />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/ForgotPassword' element={<ForgotPassword />} />


            <Route path='/KidsProduct' element={<KidsProduct />} />
            <Route path='/KidsProductDetails' element={<KidsProductDetails />} />
            <Route path='/MenProduct' element={<MenProduct />} />
            <Route path='/MenProductDetails' element={<MenProductDetails />} />
            <Route path='/WomenProduct' element={<WomenProduct />} />
            <Route path='/WomenProductDetails' element={<WomenProductDetails />} />

            <Route path='/Cart' element={<Cart />} />
            <Route path='/WhishList' element={<WhishList />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/OrderHistory' element={<OrderHistory />} />
            <Route path='/OrderTracking' element={<OrderTracking />} />
            <Route path='/SavedAddress' element={<SavedAddress />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>

  );
}

export default App;
