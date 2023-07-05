import {MantineProvider} from '@mantine/core'

import {light} from "./style/theme";
import { Notifications } from '@mantine/notifications';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import BaseComponent from "./components/HOC/index";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import ListUsers from "./pages/users/listUsers/index";
import NewUser from "./pages/users/newUser/index";
import ShowUser from "./pages/users/showUser/index";
import EditUser from "./pages/users/editUser/index";


const router = createBrowserRouter([
    {path: "/", Component: Login},
    {path: "/registro", Component: Register},
    {path: "/usuarios", Component: () => BaseComponent(ListUsers)},
    {path: "/usuarios/novo", Component: () => BaseComponent(NewUser)},
    {path: "/usuarios/listar/:id", Component: () => BaseComponent(ShowUser)},
    {path: "/usuarios/editar/:id", Component: () => BaseComponent(EditUser)}
]);

function App() {

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={light}>
            <Notifications position="top-right"/>
            <RouterProvider router={router}/>
        </MantineProvider>
    )
}

export default App
