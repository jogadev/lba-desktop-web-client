import AppButton from "../ui/BashboardButton";
import HomeBanner from "../ui/HomeBanner";

import PricesIcon from "../../assets/icons/prices.png";
import OrdersIcon from "../../assets/icons/orders.png";

import HomeBackground from "../ui/dashboards/backgrounds/HomeBackground";

function App() {
  return (
    <HomeBackground>
      <div id="container" className="flex flex-col w-4/5 h-3/5 rounded-lg justify-center items-center">
        
        <HomeBanner/>

        <div className="flex flex-row w-4/5 justify-around">
          <AppButton
            label="Lista de Precios"
            icon={PricesIcon}
            link="/pricelist"
          />
          <AppButton
            label="Notas de Venta"
            icon={OrdersIcon}
            link="/orders"
          />
        </div>
      </div>
    </HomeBackground>
  );
}

export default App;