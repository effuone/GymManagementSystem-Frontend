import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/";
import { privateRoutes, publicRoutes } from "./router/";
import Loader from "./ui/loader/Loader";
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if(isLoading) {
        return <Loader/>
    }

    return(
        isAuth ?
            <Routes>
                {privateRoutes.map((route)=>
                    <Route 
                        exact = {route.exact} 
                        path = {route.path}
                        element={route.element}
                        key= {route.path}
                    />
                )}
            </Routes>
        : <Routes>
            {publicRoutes.map((route)=>
                <Route 
                    exact = {route.exact} 
                    path = {route.path}
                    element={route.element}
                    key= {route.path}
                />
            )}
        </Routes>
    )
}
export default AppRouter