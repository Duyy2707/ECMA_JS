import { render } from "../lib"
import HomePage from "./pages/home"
import ProductPage from "./pages/products"
import ProductDetail from "./pages/product-detail"
import Navigo from "navigo"
import './style/main.css'


// DOM declaration
var app = document.querySelector('#app')

// Router
const router = new Navigo('/');
// Defined router
router.on('/', function() {
    console.log("render HomePage");
    render(HomePage(), app)
})

router.on('/products/:id', function({data}) {
    console.log("render ProductPage");
    render(ProductPage(data.id), app)
})
router.on('/product-detail/:id', function({data}) {
    // console.log("render ProductDetail");
    render(ProductDetail(data.id), app)
})


router.resolve();

