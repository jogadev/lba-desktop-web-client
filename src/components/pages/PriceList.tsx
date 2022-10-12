import DashboardHeading from "../ui/dashboards/DashboardHeading";
import DashboardBackground from "../ui/dashboards/backgrounds/DashboardsBackground";
import DashboardContainer from "../ui/dashboards/DashboardsContainer";
import PillButton from "../ui/PillButton";
import PriceListPanel from "../ui/dashboards/PriceListPanel";
import GenericModal from "../modals/generic/modal";
import NewItemForm from "../modals/pricelist/newItemForm";

import PriceListHomeIcon from "../../assets/icons/home.png"; 
import NewProductIcon from "../../assets/icons/plus.png";
import AllProductsIcon from "../../assets/icons/infinity.png";


import { categoriesData } from "../../data/demo/categories";
import { panelsData } from "../../data/demo/panels";
import { useState } from "react";

export default function PriceListDashboard(props: any){
    let navigateHome = () => { alert("Dashboard home"); }
    // let createNewProduct = () => { alert("Add new product") }
    
    let activateFilter = (id: string) => () => { alert(`Activate filter ${id}`); }
    let disableFilter = () => { alert("Disable filter")};

    const [modalVisibility, setModalVisibility] = useState<boolean>(false);

    let categoriesButtons = categoriesData.map(({label, id}) => (
        <PillButton
            label={label}
            onClick={activateFilter(id)}
        />
    ));

    let panels = panelsData.map(({count, item}) => (
        <PriceListPanel
            item={item}
            count={count}
        />
    ));

    return (
        <DashboardBackground>
            <DashboardContainer>
                <DashboardHeading
                    title="Lista de Precios"
                />

                <GenericModal visible={modalVisibility}>
                    <NewItemForm/>
                </GenericModal>

                <div className="flex flex-1 px-3 py-3 mt-7 flex-col items-center">
                    <div className="flex flex-row flex-0 w-full">
                        <PillButton
                            icon={PriceListHomeIcon}
                            label=""
                            onClick={navigateHome}
                            active
                        />
                        <PillButton
                            icon={NewProductIcon}
                            label="Agregar Producto"
                            onClick={navigateHome}
                            extraProps={{
                                "data-modal-toggle": "defaultModal"
                            }}
                        />
                    </div>
                    <div className="flex flex-row flex-grow-0 mt-5 w-11/12 flex-wrap">
                        <PillButton
                            label="Ver Todo"
                            icon={AllProductsIcon}
                            onClick={disableFilter}
                        />
                        {categoriesButtons}
                    </div>

                    <div className="flex flex-row flex-wrap mt-6 w-4/5">
                        {panels}
                    </div>

                </div>
            </DashboardContainer>
        </DashboardBackground>
    )
}