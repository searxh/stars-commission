import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Commissions from "./pages/Commissions";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import LoginResult from "./pages/LoginResult";
import Orders from "./pages/Orders";
import Archives from "./pages/Archives";
import { GlobalStateProvider } from "./states";
import OrderPage from "./components/admin/pages/OrderPage";
import InfoPage from "./components/admin/pages/InfoPage";
import { ConfirmationProvider } from "./confirmation";
import About from "./pages/About";
import ReactGA from "react-ga4";
import Store from "./pages/Store";
import WebService from "./pages/WebService";
import GFX from "./pages/GFX";

//ReactGA.initialize("G-71992L5E5Q");

function App() {
    /*const location = useLocation();
    React.useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);*/
    return (
        <GlobalStateProvider>
            <ConfirmationProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/archives" element={<Archives />} />
                    <Route path="/commissions" element={<Commissions />}>
                        <Route path="gfx" element={<GFX />} />
                        <Route path="web" element={<WebService />} />
                    </Route>
                    <Route path="/authorized" element={<LoginResult />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/dashboard" element={<Dashboard />}>
                        <Route path="list" element={<OrderPage />} />
                        <Route path=":orderObj" element={<InfoPage />} />
                    </Route>
                </Routes>
            </ConfirmationProvider>
        </GlobalStateProvider>
    );
}

export default App;
