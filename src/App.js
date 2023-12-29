import Navbar from "./component/Navbar"
import Search from "./component/Search"
import Product from "./component/Product"
import About from "./component/About"
import Footer from "./component/Footer"



function App() {
    return (
        <div>
           <Navbar></Navbar> 
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </div>
    );
}

export default App;
