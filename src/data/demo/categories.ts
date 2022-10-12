interface Category {
    label: string,
    id: string
}

export const categoriesData: Category[] = [
    {
        label: "Viveres",
        id: "VIVERES"
    },
    {
        label: "Chiles Secos", 
        id: "CHILES_SECOS"
    },
    {
        label: "Cerveza", 
        id: "CERVEZA"
    },
    {
        label: "Especias y Condimentos",
        id: "ESPECIAS_CONDIMENTOS"
    },
    {
        label: "Frutas Secas y Otros",
        id: "FRUTAS_SECAS_OTROS"
    }
];

export const tags = {
    VIVERES: "VIVERES",
    ESPECIAS: "ESPECIAS_CONDIMENTOS",
    CHILES: "CHILES_SECOS",
    SECOS: "FRUTAS_SECAS_OTROS",
    CERVEZA: "CERVEZA"
}