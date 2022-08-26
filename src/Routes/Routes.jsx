import { Route } from "react-router-dom"
import { SearchBar } from "../Components/Search/SearchBar"



export const Routes = () => {
    return(
<div>
    
        <Route path='/' element={<Routes />} >
        <SearchBar/>
        </Route>
    
</div>
    )
}