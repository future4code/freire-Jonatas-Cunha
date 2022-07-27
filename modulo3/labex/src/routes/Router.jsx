import HomePage from "../pages/HomePage/HomePage";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/Header/Header";
import ERROR_404 from "../pages/ERROR_404";

function Router() {
    return (
        <BrowserRouter >
                <Header />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    <Route path="/trips/application/:id" element={<ApplicationFormPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/trips/list" element={<AdminHomePage />} />
                    <Route path="/admin/trips/create" element={<CreateTripPage />} />
                    <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
                    <Route path="/countries.json" />
                    <Route path='/404' element={<ERROR_404/>} />
                    <Route path='*' element={<Navigate replace to="/404" />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router;