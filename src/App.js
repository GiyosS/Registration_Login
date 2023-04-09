import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Error from "./Page/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
