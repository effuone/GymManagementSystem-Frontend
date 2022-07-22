import Auth from "../pages/Auth";
import Gyms from "../pages/Gyms";
import GymIdPage from "../pages/GymIdPage";
import Members from "../pages/Members";
import Coaches from "../pages/Coaches";
import About from "../pages/About";

export const privateRoutes = [
    {path: '/gyms', element: <Gyms/>, exact: true},
    {path: '/gyms/:id', element: <GymIdPage/>, exact: true},
    {path: '/coaches', element: <Coaches/>, exact: true},
    {path: '/members', element: <Members/>, exact: true},
    {path: '/members:id', element: <Members/>, exact: true},
]
export const publicRoutes = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/auth', element: <Auth/>, exact: false}
]