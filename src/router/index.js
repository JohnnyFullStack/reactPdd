import Home from "../components/home";
import Atlas from "../components/map";
import Cart from "../components/cart";
import My from "../components/my";
import Details from "../components/details";
import Goods from "../components/goods";
import Not404 from "../components/not404";

const routes = [
    {
        path : "/",
        exact : true,
        component : Home
    },
    {
        path : "/map",
        component : Atlas
    },
    {
        path : "/cart",
        component : Cart
    },
    {
        path : "/my",
        component : My
    },
    {
        path : "/details/:name",
        component : Details
    },
    {
        path : "/goods/:id",
        component : Goods
    },
    {
        component : Not404
    }
];

export default routes;