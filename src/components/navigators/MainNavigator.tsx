import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeDashboard from "../dashboards/Home";
import PriceListDashboard from "../dashboards/PriceList";

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