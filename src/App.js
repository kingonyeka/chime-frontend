// import React from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import ProfileInfo from "./pages/ProfileInfo";
// import DashboardLayout from "./pages/DashboardLayout";
import { userDetailsLoader } from "./components/dashboard/Dashboard";
// import Courses from "./components/dashboard/courses/Courses";
import { About } from "./pages/About";
// import { AdminDashboard, AdminLayout, AdminLogin } from "./admin/components";
// import Soon from "./pages/Soon";
// import Forex from "./components/forex/forex-trading/Forex";
// import Stock from "./components/forex/stock-trading/Stock";
// import Crypto from "./components/forex/crypto-trading/Crypto";
// import Comm from "./components/forex/commodities/Comm";
// import Robots from "./components/home/Robots";
// import ForexRobRading from "./components/forex/robots/forex/ForexRobRading";
// import CommRob from "./components/forex/robots/commRob/CommRob";
// import CryptoRob from "./components/forex/robots/cryptoRob.js/CryptoRob";
// import Signal from "./components/forex/signal/Signal";
// import SingleCourse from "./components/forex/forex-trading/SingleCourse";
// import Cart from "./pages/Cart";
// import SingleCrypto from "./components/forex/crypto-trading/SingleCrypto";
// import SingleStock from "./components/forex/stock-trading/SingleStock";
// import SingleCommTrading from "./components/forex/commodities/SingleCommTrading";
// import SingleCommRobot from "./components/forex/robots/commRob/SingleCommRobot";
// import SingleRobF from "./components/forex/robots/forex/SingleRobF";
// import SingleCryptoRobots from "./components/forex/robots/cryptoRob.js/SingleCryptoRobots";
// import Auth from "./pages/Auth";
// import Contact from "./pages/Contact";
// import EmailRe from "./components/register/EmailRe";
// import ForgotPassword from "./pages/ForgotPassword";
// import Fp from "./components/forgotPasswordForms/Fp";
// import RedirectToDash from "./components/register/RedirectToDash";
import { userDetailsLoaderTwo } from "./components/dashboard/account/AccDetails";
// import EditDetails from "./components/dashboard/account/EditDetails";
import { checkoutLoader } from "./pages/Checkout";
// import CreateAdmin from "./admin/pages/CreateAdmin";
// import RobotPage from "./admin/components/admin/robots/RobotPage";
// import CreateRob from "./admin/components/admin/robots/CreateRob";
// import CoursesPage from "./admin/components/admin/courses/CoursesPage";
// import CreateCourse from "./admin/components/admin/courses/CreateCourse";
// import Cat from "./admin/components/admin/categories/Cat";
// import Revenue from "./admin/components/admin/revenue/Revenue";

// const App = () => {
//   const routes = [
//     {
//       path: "/admin",
//       element: <AdminLayout />,
//       children: [
//         { index: true, element: <AdminDashboard /> },
//         { path: "create-admin", element: <CreateAdmin /> },
//         { path: "robots", element: <RobotPage /> },
//         { path: "create-robot", element: <CreateRob /> },
//         { path: "courses", element: <CoursesPage /> },
//         { path: "create-course", element: <CreateCourse /> },
//         { path: "cat", element: <Cat /> },
//         { path: "revenue", element: <Revenue /> },
//       ],
//     },

//     { path: "/admin/login", element: <AdminLogin /> },
//     // public
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         // checkout

//         {
//           path: "checkout",
//           element: <Checkout />,
//           loader: checkoutLoader,
//         },

//         // cart
//         { path: "cart", element: <Cart /> },
//         { path: "about-us", element: <About /> },
//         { path: "contact-us", element: <Contact /> },
//         { path: "forex-trading", element: <Forex /> },
//         { path: "crypto-trading", element: <Crypto /> },
//         { path: "stock-trading", element: <Stock /> },
//         { path: "FTMO", element: <Soon /> },
//         { path: "commodities-trading", element: <Comm /> },
//         // robots
//         { path: "forex-robots", element: <ForexRobRading /> },
//         { path: "commodities-robots", element: <CommRob /> },
//         { path: "crypto-robots", element: <CryptoRob /> },
//         // signal

//         { path: "signals", element: <Signal /> },

//         // single records
//         // ----forex---
//         // courses
//         { path: "forex-trading/:id", element: <SingleCourse /> },
//         // crypto
//         { path: "crypto-trading/:id", element: <SingleCrypto /> },
//         // stock
//         { path: "stock-trading/:id", element: <SingleStock /> },
//         // comm trading
//         { path: "commodities-trading/:id", element: <SingleCommTrading /> },
//         // robot
//         { path: "forex-robots/:id", element: <SingleRobF /> },
//         { path: "commodities-robots/:id", element: <SingleCommRobot /> },
//         { path: "crypto-robots/:id", element: <SingleCryptoRobots /> },

//         // forgot password
//         {
//           path: "forgot-password",
//           element: <ForgotPassword />,
//         },
//         {
//           path: "reset-password",
//           element: <Fp />,
//         },
//         // redirect to dashboard
//         { path: "redirect-to-dashboard", element: <RedirectToDash /> },
//       ],
//     },
//     {
//       path: "login",
//       element: <Auth />,
//     },
//     {
//       path: "register",
//       element: <Auth />,
//     },

//     {
//       path: "registration/proceed",
//       element: <EmailRe />,
//     },
//     {
//       path: "dashboard/profile-information",
//       element: <ProfileInfo />,
//     },
//     {
//       path: "dashboard",

//       element: <DashboardLayout />,
//       children: [
//         {
//           index: true,
//           loader: userDetailsLoader,
//           element: <Dashboard />,
//         },
//         {
//           path: "/dashboard/courses",
//           element: <Courses />,
//         },
//         {
//           path: "/dashboard/robots",
//           element: <Robots />,
//         },
//         {
//           path: "/dashboard/account-details",
//           loader: userDetailsLoaderTwo,
//           element: <AccDetails />,
//         },
//         {
//           path: "/dashboard/edit-details",
//           element: <EditDetails />,
//         },
//       ],
//     },
//   ];

//   const router = createBrowserRouter(routes);

//   return <RouterProvider router={router} />;
// };

// export default App;

import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AdminDashboard, AdminLayout, AdminLogin } from "./admin/components";
import Loader from "./components/loader/Loader";
import NotFound from "./components/not-found/NotFound";
import CreateAdmin from "./admin/pages/CreateAdmin";
import RobotPage from "./admin/components/admin/robots/RobotPage";
import CreateRob from "./admin/components/admin/robots/CreateRob";
import CoursesPage from "./admin/components/admin/courses/CoursesPage";
import CreateCourse from "./admin/components/admin/courses/CreateCourse";
// import Cat from "./admin/components/admin/categories/Cat";
import Revenue from "./admin/components/admin/revenue/Revenue";
import { coursesLoader } from "./components/dashboard/courses/Courses";
import { robotsLoader } from "./components/dashboard/robots/DashRob";
// import Orders, { ordersLoader } from "./components/dashboard/orders/Orders";
import Profile, {
  adminDetLoader,
} from "./admin/components/admin/profile/Profile";
import EditDet from "./admin/components/admin/profile/EditDet";
import SingleRobotPur, {
  s_robLoader,
} from "./components/dashboard/users-courses/robots/SingleRobotPur";
import SingleCoursePur, {
  s_courseLoader,
} from "./components/dashboard/users-courses/courses/SingleCoursePur";
import TelegramPrice from "./admin/components/admin/telegramPrice/TelegramPrice";
import SingleRobotAdmin from "./admin/components/admin/robots/SingleRobotAdmin";
import SingleCourseAdmin from "./admin/components/admin/courses/SingleCourseAdmin";
// import Test from "./pages/Test";

const Layout = lazy(() => import("./pages/Layout"));
const Home = lazy(() => import("./pages/Home"));
const ProfileInfo = lazy(() => import("./pages/ProfileInfo"));
const DashboardLayout = lazy(() => import("./pages/DashboardLayout"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Courses = lazy(() => import("./components/dashboard/courses/Courses"));
const Soon = lazy(() => import("./pages/Soon"));
const Forex = lazy(() => import("./components/forex/forex-trading/Forex"));
const Stock = lazy(() => import("./components/forex/stock-trading/Stock"));
const Crypto = lazy(() => import("./components/forex/crypto-trading/Crypto"));
const Comm = lazy(() => import("./components/forex/commodities/Comm"));
const DashRob = lazy(() => import("./components/dashboard/robots/DashRob"));
const ForexRobRading = lazy(() =>
  import("./components/forex/robots/forex/ForexRobRading")
);
const CommRob = lazy(() => import("./components/forex/robots/commRob/CommRob"));
const CryptoRob = lazy(() =>
  import("./components/forex/robots/cryptoRob.js/CryptoRob")
);
const Signal = lazy(() => import("./components/forex/signal/Signal"));
const SingleCourse = lazy(() =>
  import("./components/forex/forex-trading/SingleCourse")
);
const Cart = lazy(() => import("./pages/Cart"));
const SingleCrypto = lazy(() =>
  import("./components/forex/crypto-trading/SingleCrypto")
);
const SingleStock = lazy(() =>
  import("./components/forex/stock-trading/SingleStock")
);
const SingleCommTrading = lazy(() =>
  import("./components/forex/commodities/SingleCommTrading")
);
const SingleCommRobot = lazy(() =>
  import("./components/forex/robots/commRob/SingleCommRobot")
);
const SingleRobF = lazy(() =>
  import("./components/forex/robots/forex/SingleRobF")
);
const SingleCryptoRobots = lazy(() =>
  import("./components/forex/robots/cryptoRob.js/SingleCryptoRobots")
);
const Auth = lazy(() => import("./pages/Auth"));
const Contact = lazy(() => import("./pages/Contact"));
const EmailRe = lazy(() => import("./components/register/EmailRe"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Fp = lazy(() => import("./components/forgotPasswordForms/Fp"));
const RedirectToDash = lazy(() =>
  import("./components/register/RedirectToDash")
);
const AccDetails = lazy(() =>
  import("./components/dashboard/account/AccDetails")
);
const EditDetails = lazy(() =>
  import("./components/dashboard/account/EditDetails")
);
const Checkout = lazy(() => import("./pages/Checkout"));
// const CreateAdmin = lazy(() => import("./admin/pages/CreateAdmin"));
// const RobotPage = lazy(() =>
//   import("./admin/components/admin/robots/RobotPage")
// );
// const CreateRob = lazy(() =>
//   import("./admin/components/admin/robots/CreateRob")
// );
// const CoursesPage = lazy(() =>
//   import("./admin/components/admin/courses/CoursesPage")
// );
// const CreateCourse = lazy(() =>
//   import("./admin/components/admin/courses/CreateCourse")
// );
// const Cat = lazy(() => import("./admin/components/admin/categories/Cat"));
// const Revenue = lazy(() => import("./admin/components/admin/revenue/Revenue"));

const App = () => {
  const routes = [
    {
      path: "/admin",
      element: <AdminLayout />,
      // errorElement: <NotFound />,
      children: [
        { index: true, element: <AdminDashboard /> },
        { path: "create-admin", element: <CreateAdmin /> },
        { path: "robots", element: <RobotPage /> },
        { path: "create-robot", element: <CreateRob /> },
        { path: "courses", element: <CoursesPage /> },
        { path: "create-course", element: <CreateCourse /> },
        // { path: "cat", element: <Cat /> },
        { path: "telegram-price", element: <TelegramPrice /> },
        { path: "revenue", element: <Revenue /> },
        { path: "profile", element: <Profile />, loader: adminDetLoader },
        { path: "edit-profile", element: <EditDet /> },
        // single
        { path: "update/robot/:id", element: <SingleRobotAdmin /> },
           { path: "update/course/:id", element: <SingleCourseAdmin/> },
      ],
    },

    {
      path: "/admin/login",
      element: <AdminLogin />,
      errorElement: <NotFound />,
    },
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <Layout />
        </Suspense>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "checkout",
          element: (
            <Suspense fallback={<Loader />}>
              <Checkout />
            </Suspense>
          ),
          loader: checkoutLoader,
        },
        {
          path: "cart",
          element: (
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "about-us",
          element: (
            // <Suspense fallback={<Loader />}>
            <About />
            // </Suspense>
          ),
        },
        {
          path: "contact-us",
          element: (
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "forex-trading",
          element: (
            <Suspense fallback={<Loader />}>
              <Forex />
            </Suspense>
          ),
        },
        {
          path: "crypto-trading",
          element: (
            <Suspense fallback={<Loader />}>
              <Crypto />
            </Suspense>
          ),
        },
        {
          path: "stock-trading",
          element: (
            <Suspense fallback={<Loader />}>
              <Stock />
            </Suspense>
          ),
        },
        {
          path: "FTMO",
          element: (
            <Suspense fallback={<Loader />}>
              <Soon />
            </Suspense>
          ),
        },
        {
          path: "commodities-trading",
          element: (
            <Suspense fallback={<Loader />}>
              <Comm />
            </Suspense>
          ),
        },
        {
          path: "forex-robots",
          element: (
            <Suspense fallback={<Loader />}>
              <ForexRobRading />
            </Suspense>
          ),
        },
        {
          path: "commodities-robots",
          element: (
            <Suspense fallback={<Loader />}>
              <CommRob />
            </Suspense>
          ),
        },
        {
          path: "crypto-robots",
          element: (
            <Suspense fallback={<Loader />}>
              <CryptoRob />
            </Suspense>
          ),
        },

        {
          path: "signals",
          element: (
            <Suspense fallback={<Loader />}>
              <Signal />
            </Suspense>
          ),
        },
        {
          path: "forex-trading/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleCourse />
            </Suspense>
          ),
        },
        {
          path: "crypto-trading/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleCrypto />
            </Suspense>
          ),
        },
        {
          path: "stock-trading/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleStock />
            </Suspense>
          ),
        },
        {
          path: "commodities-trading/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleCommTrading />
            </Suspense>
          ),
        },
        {
          path: "forex-robots/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleRobF />
            </Suspense>
          ),
        },
        {
          path: "commodities-robots/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleCommRobot />
            </Suspense>
          ),
        },
        {
          path: "crypto-robots/:id",
          element: (
            <Suspense fallback={<Loader />}>
              <SingleCryptoRobots />
            </Suspense>
          ),
        },
        {
          path: "forgot-password",
          element: (
            <Suspense fallback={<Loader />}>
              <ForgotPassword />
            </Suspense>
          ),
        },
        {
          path: "reset-password",
          element: (
            <Suspense fallback={<Loader />}>
              <Fp />
            </Suspense>
          ),
        },
        {
          path: "redirect-to-dashboard",
          element: (
            <Suspense fallback={<Loader />}>
              <RedirectToDash />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "login",
      element: (
        <Suspense fallback={<Loader />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "register",
      element: (
        <Suspense fallback={<Loader />}>
          <Auth />
        </Suspense>
      ),
    },
    {
      path: "registration/proceed",
      element: (
        <Suspense fallback={<Loader />}>
          <EmailRe />
        </Suspense>
      ),
    },
    {
      path: "dashboard/profile-information",
      element: (
        <Suspense fallback={<Loader />}>
          <ProfileInfo />
        </Suspense>
      ),
    },
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<Loader />}>
          <DashboardLayout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          loader: userDetailsLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <Dashboard />
            </Suspense>
          ),
        },
        {
          path: "/dashboard/courses",
          loader: coursesLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <Courses />
            </Suspense>
          ),
        },
        {
          path: "/dashboard/robots",
          loader: robotsLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <DashRob />
            </Suspense>
          ),
        },
        {
          path: "/dashboard/account-details",
          loader: userDetailsLoaderTwo,
          element: (
            <Suspense fallback={<Loader />}>
              <AccDetails />
            </Suspense>
          ),
        },
        {
          path: "/dashboard/edit-details",
          element: (
            <Suspense fallback={<Loader />}>
              <EditDetails />
            </Suspense>
          ),
        },

        // users robot and courses purchased
        {
          path: "/dashboard/robot/:id",
          loader: s_robLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <SingleRobotPur />
            </Suspense>
          ),
        },
        {
          path: "/dashboard/course/:id",
          loader: s_courseLoader,
          element: (
            <Suspense fallback={<Loader />}>
              <SingleCoursePur />
            </Suspense>
          ),
        },

        // {
        //   path: "/dashboard/orders",
        //   loader: ordersLoader,
        //   element: (
        //     <Suspense fallback={<Loader />}>
        //       <Orders />
        //     </Suspense>
        //   ),
        // },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
