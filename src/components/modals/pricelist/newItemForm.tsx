import { Radio } from "@mui/material";
import React, { FormEvent, FC } from "react";

import PrimaryButton from "../../ui/buttons/primary";
import { TextInput, DropdownSelect, RadioGroup } from "../../ui/inputs";
import { HorizontalSeparator, FormRow, VerticalSeparator, FormCol } from "../../ui/utils";



const onSubmit = (callback: ()=>void ) => (e: FormEvent) => {
    e.preventDefault();
}

const providerDemoOptions = [
    {
      "id": "630456dbab466b719c6cfa23",
      "label": "XYQAG"
    },
    {
      "id": "630456db2691701c40e4b9dd",
      "label": "ZYPLE"
    },
    {
      "id": "630456db3a2bf558529f2479",
      "label": "FRENEX"
    },
    {
      "id": "630456db48d6225dc66a8b97",
      "label": "EARTHPURE"
    },
    {
      "id": "630456db52835e15ba646245",
      "label": "ZOARERE"
    }
];

const demoRadioOptions = [
    {
      "id": "632d30e979ac2c941b061b03",
      "label": "Por Kilo/Pieza",
      "value": "piece"
    },
    {
      "id": "632d30e9cddaa890faf7c126",
      "label": "Por Caja / Bulto",
      "value": "pack"
    },
    {
      "id": "632d30e94792b590d2048763",
      "label": "Hibrido",
      "value": "hybrid"
    }
  ];

const purchaseUnits = [
    {
        id: "box",
        label: "Caja"
    },
    {
        id: "pack",
        label: "Bulto"
    },
    {
        id: "weight",
        label: "Kgs"
    }
];

const categoriesOptions = [
    {
        "id": "63327c83c10a9f2d96de037a",
        "label": "Cereales",
        "value": "Laurel"
    },
    {
        "id": "63327c83fa3d078e232402a2",
        "label": "Semillas",
        "value": "Sondra"
    },
    {
        "id": "63327c8397f9be9a1d6f61aa",
        "label": "Chiles Secos",
        "value": "Bernadette"
    },
    {
        "id": "63327c838832229f4bab1b64",
        "label": "Cerveza",
        "value": "Graciela"
    },
];

function NewItemForm(props: any){
    const nothing = () => {};
    
    return (
        <form onSubmit={onSubmit(props.callback)} className="flex z-50 w-full flex-col">
            <FormRow>
                <TextInput
                    name="name"
                    label="Nombre"
                    size='md'
                    placeholder="Descripción del Producto"
                    required
                />
                <DropdownSelect
                    name="category"
                    label="Categoría"
                    options={categoriesOptions}
                    size="sm"
                    required
                />
            </FormRow>
            <FormRow>
                <DropdownSelect
                    name="purchaseUnit"
                    label="Unidad de Compra"
                    options={purchaseUnits}
                    size="sm"
                />
                <TextInput
                    name="cost"
                    label="Costo"
                    placeholder="Costo por unidad"
                    size="sm"
                    isNumber
                    required
                />
                <DropdownSelect
                    name="provider"
                    label="Proveedor"
                    options={providerDemoOptions}
                    size="sm"
                />
            </FormRow>

            <FormRow>
                <RadioGroup
                    name="radioTest"
                    label="Unidad de Venta"
                    options={demoRadioOptions}
                    size="sm"
                />
                <VerticalSeparator/>
                <FormCol>
                    <FormRow>
                        <TextInput
                            name="ASDSAF"
                            label="Artículos por Caja"
                            />
                        <TextInput
                            name="ASDSAF"
                            label="Tamaño/Presentación del Artículo"
                            />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            name="adseqrrt"
                            label="Kilos por Bulto"
                        />
                    </FormRow>
                </FormCol>
            </FormRow>

            <HorizontalSeparator
                label="Precios"
            />

            <FormCol border>
                <TextInput
                    name="sadfwer"
                    label="Por bulto o caja"
                />
                <TextInput
                    name="Hoekmowrem"
                    label="Por kilo o pieza"
                />
            </FormCol>

            <div className="flex flex-row items-center justify-end p-2">
                <PrimaryButton
                    label="Guardar"
                    onClick={nothing}
                />
            </div>
        </form>
    )
}

export default NewItemForm;