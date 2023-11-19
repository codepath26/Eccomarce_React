import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';
import { AuthContextProvider } from './your-auth-context'; // Import your AuthContextProvider
import { CartProvider } from './your-cart-context'; // Import your CartProvider
import { ProductsProvider } from './your-products-context'; // Import your ProductsProvider
import Header from './Header';
import Cart from './Cart';
import Footer from './Footer';
import AuthForm from './AuthForm';
import Home from './Home';
import About from './About';
import Store from './Store';
import Contact from './Contact';
import Details from './Details';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const onShowCart = () => {
    setShowCart(true);
  };

  const onHideCart = () => {
    setShowCart(false);
  };

  return (
    <Router>
      <AuthContextProvider>
        <CartProvider>
          <ProductsProvider>
            {/* Conditionally render Header and Footer based on the route */}
            {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && (
              <>
                <Header onOpen={onShowCart} />
                {showCart && <Cart onClose={onHideCart} />}
              </>
            )}

            <Outlet />
            
            {/* Conditionally render Footer based on the route */}
            {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Footer />}
          </ProductsProvider>
        </CartProvider>
      </AuthContextProvider>
    </Router>
  );
};

const createBrowserRouter = (routes) => {
  // Your route creation logic here
};

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <AuthForm />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'details/:id',
        element: <Details />,
      },
    ],
  },
]);

export default router;
