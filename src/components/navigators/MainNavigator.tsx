import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeDashboard from "../pages/Home";
import PriceListDashboard from "../pages/PriceList";

export default function MainNavigator(props: any) {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/"
                    element={<HomeDashboard/>}
                />
                <Route
                    path="/pricelist"
                    element={<PriceListDashboard/>}
                />
            </Routes>
        </BrowserRouter>
    )
}