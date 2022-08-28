import { Route, Routes } from "react-router-dom"
import Recommend from "../Components/Recommend"
import { SearchBar } from "../Components/Search/SearchBar"
import Home from "./Home"
import Login from "./Login"



export const AllRoutes = () => {
    return(

    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/login" element={<Login />} />
    

    </Routes>
       
    )
}