import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import UserEdit from "./pages/UserEdit";
import Layout from "./pages/Layout";

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/user_edit" element={<UserEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;
