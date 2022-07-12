import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import LoginPage from "../pages/LoginPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/trips/list" element={<ListTripsPage/>} />
            <Route path="/trips/application" element={<ApplicationFormPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/admin/trips/list" element={<AdminHomePage/>} />
            <Route path="/admin/trips/create" element={<CreateTripPage/>} />
            <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
            <Route path='/404' element={<p>Page Not Found</p>} />
            <Route path='*' element={<Navigate replace to="/404" />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Router;