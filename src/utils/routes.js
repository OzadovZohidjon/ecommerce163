import { Navigate } from "react-router-dom";
import PageNotFound from "../pages/404";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const routes = [
    // {
    //     id: 1,
    //     path: '/',
    //     component: <Home/>
    // },
    {
        id: 2,
        path: '/product/:slug',
        component: <Product/>
    },
    {
        id: 3,
        path: '/category/:slug',
        component: <Category/>
    },
    {
        id: 4,
        path: '/cart',
        component: <Cart/>
    },
    {
        id: 5,
        path: '/404',
        component: <PageNotFound/>
    },
    {
        id: 6,
        path: '*',
        component:  <Navigate to="404" replace="true"/>
    },
]