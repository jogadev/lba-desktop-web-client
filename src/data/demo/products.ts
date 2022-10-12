import { tags } from '../demo/categories';



var viveres: any[] = [
    {
        id: 1,
        name: "Aceite Comestible Ave",
        singlePrice: "254.00",
        presentation: "12/900 mL",
        singleLabel: "Caja",
        category: tags.VIVERES,
        _kw: ['aceite', 'ave']
    }, 
    {
        id: 2,
        name: "Arroz San Diego Extra",
        singlePrice: "315.00",
        presentation: "1/25 Kg",
        singleLabel: "Caja",
        category: tags.VIVERES,
        _kw: ['arroz', 'san', 'diego', 'extra']
    },
    {
        id: 3,
        name: "Ajonjolí Blanco Importado",
        presentation: "1/20 Kg",
        packPrice: "480",
        unitPrice: "49",
        pickerData:{
            packLabel: "Bulto",
            unitLabel: "Kilo",
            selected: "Bulto"
        },
        category: tags.VIVERES,
        _kw: ['ajonjolí', 'ajonjoli', 'blanco']
    },
    {
        id: 4,
        name: "Avena Granel Royal Oats", 
        presentation: "1/20 Kg",
        packPrice: "300.00",
        unitPrice: "15.5",
        pickerData:{
            packLabel: "Bulto",
            unitLabel: "Kilo",
            selected: "Bulto"
        },
        category: tags.VIVERES,
        _kw: ['avena', 'royal', 'oats']
    },
    {
        id: 5,
        name: "Azúcar Estándar",
        singlePrice: "795",
        presentation: "1/50 Kg",
        singleLabel: "Bulto",
        category: tags.VIVERES,
        _kw: ['azucar', 'estandar']
    },
    {
        id: 6,
        name: "Frijol F. Junio Leon Nuevo",
        packPrice: "637.50",
        unitPrice: "26",
        presentation: "1/25 Kg",
        pickerData:{
            packLabel: "Bulto",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.VIVERES,
        _kw: ['frijol', 'junio', 'leon']
    },
    {
        id: 7,
        name: "Leche LALA Entera",
        singlePrice: "201.3",
        presentation: "12L",
        singleLabel: "Caja",
        category: tags.VIVERES,
        _kw: ['leche', 'lala'],
    }
];

var chiles = [
    {
        id: 10,
        name: "Chilaca Peruana Suprema",
        presentation: "1/11.5Kg",
        packPrice: "1127",
        unitPrice: "99",
        pickerData: {
            packLabel: "Bulto",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.CHILES,
        _kw: ['chile', 'chilaca', 'peruana', 'suprema']
    },
    {
        id: 11,
        name: "Chile Guiajillo Zacatecas",
        presentation: "1/10Kg",
        packPrice: "900",
        unitPrice: "90",
        pickerData: {
            packLabel: "Caja",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.CHILES,
        _kw: ['chile', 'guajillo', 'zacatecas']
    },
    {
        id: 12,
        name: "Chile Arbol Importado",
        presentation: "1/10Kg",
        singlePrice: "840",
        singleLabel: "Bulto",
        category: tags.CHILES,
        _kw: ['chile', 'arbol']
    },
    {
        id: 13,
        name: "Chile Morita",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "92",
        category: tags.CHILES,
        _kw: ['chile', 'morita']
    },
    {
        id: 14,
        name: "Chile Mulato",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "120",
        _kw: ['chile', 'mulato']
    },
    {
        id: 15,
        name: "Chile Negro (Largo)",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "110",
        category: tags.CHILES,
        _kw: ['chile', 'negro']
    },
    {
        id: 16,
        name: "Chile Pasilla (Ancho)",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "105",
        category: tags.CHILES,
        _kw: ['chile', 'pasilla']
    },
    {
        id: 17,
        name: "Chile Puya",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "92",
        category: tags.CHILES,
        _kw: ['chile', 'puya']
    },
]

var especias = [
    {
        id: 20,
        name: "Ajo Nvo Zacatecas Morado #9",
        presentation: "1/10Kg",
        packPrice: "480",
        unitPrice: "49",
        pickerData: {
            packLabel: "Caja",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.ESPECIAS,
        _kw: ['ajo', 'zacatecas', '9', 'morado']
    },
    {
        id: 21,
        name: "Ajo Nvo Zacatecas Morado #8",
        presentation: "1/10Kg",
        packPrice: "470",
        unitPrice: "48",
        pickerData: {
            packLabel: "Caja",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.ESPECIAS,
        _kw: ['ajo', 'zacatecas', '8', 'morado']
    },
    {
        id: 22,
        name: "Ajo Molido",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "38",
        category: tags.ESPECIAS,
        _kw: ['ajo', 'molido']
    },
    {
        id: 23,
        name: "Camaron Molido",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "30",
        _kw: ['camaron', 'molido']
    },
    {
        id: 24,
        name: "Canela Molida",
        presentation: "KGS",
        singleLabel: "Kilo", 
        singlePrice: "36",
        category: tags.ESPECIAS,
        _kw: ['canela', 'molida']
    },
    {
        id: 25,
        name: "Canela Trozo 4 Ceros Econom",
        singlePrice: "396",
        singleLabel: "1/1Kg",
        category: tags.ESPECIAS,
        _kw: ['canela', 'trozo', '4', 'ceros']
    },
    {
        id: 26,
        name: "Canela Trozo Campo Fresco",
        singlePrice: "204",
        singleLabel: "1/500g",
        category: tags.ESPECIAS,
        _kw: ['canela', 'trozo', 'campo', 'fresco']
    },
    {
        id: 27,
        name: "Canela Vara 50CM Campo Fresco",
        singlePrice: "204",
        singleLabel: "1/500g",
        category: tags.ESPECIAS,
        _kw: ['canela', 'vara', '50cm', '50', 'cm', 'campo', 'fresco']
    },
    {
        id: 28,
        name: "Chile Piquin Molido c/ Sal y Limón",
        singlePrice: "30",
        singleLabel: "Kilo",
        category: tags.ESPECIAS,
        _kw: ['chile', 'piquin', 'molido']
    },
    {
        id: 29,
        name: "Clavo Granel",
        singlePrice: "230",
        singleLabel: "Kilo",
        category: tags.ESPECIAS,
        _kw: ['clavo', 'granel']
    }
];

var secos = [
    {
        id: 30,
        name: "Almendra Granel",
        singleLabel: "Kilo",
        singlePrice: "205",
        category: tags.SECOS,
        _kw: ['almendra', 'granel']
    },
    {
        id: 31,
        name: "Arandanos Granel",
        singleLabel: "Kilo",
        singlePrice: "90",
        category: tags.SECOS,
        _kw: ['arandanos', 'granel']
    },
    {
        id: 32,
        name: "Ciruela Pasa C/Hueso Chilena",
        presentation: "1/10Kg",
        packPrice: "630",
        unitPrice: "64",
        pickerData: {
            unitLabel: "Kilo",
            packLabel: "Caja",
            selected: "Kilo"
        },
        category: tags.SECOS,
        _kw: ['ciruela', 'pasa', 'peruana']
    },
    {
        id: 33,
        name: "Tamarindos Selectos Extra",
        presentation: "1/17Kg",
        packPrice: "442",
        unitPrice: "26",
        pickerData: {
            unitLabel: "Kilo",
            packLabel: "Caja",
            selected: "Kilo"
        },
        category: tags.SECOS,
        _kw: ['tamarindo', 'tamarindos', 'extra']
    },
    {
        id: 34,
        name: "Nuez Mitades Granel",
        singlePrice: "225",
        singleLabel: "Kilo",
        category: tags.SECOS,
        _kw: ['nuez', 'mitades', 'granel']
    },
    {
        id: 35,
        name: "Uva Pasa Chica Rio",
        presentation: "1/10Kg",
        unitPrice: "47",
        packPrice: "460",
        pickerData:{
            packLabel: "Caja",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.SECOS,
        _kw: ['uva', 'pasa', 'rio']
    },
    {
        id: 36,
        name: "Uva Pasa Jumbo Chilena",
        presentation: "1/10Kg",
        unitPrice: "63",
        packPrice: "620",
        pickerData:{
            packLabel: "Caja",
            unitLabel: "Kilo",
            selected: "Kilo"
        },
        category: tags.SECOS,
        _kw: ['uva', 'pasa', 'jumbo', 'chilena']
    },
]

var cerveza = [
    {
        id: 40,
        name: "Barrilito",
        singleLabel: "24/325 mL",
        singlePrice: "240",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'barrilito']
    },
    {
        id: 41,
        name: "Bud Light Lata",
        singleLabel: "24/355 mL",
        singlePrice: "240",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'bud', 'light', 'lata']
    },
    {
        id: 42,
        name: "Caribe Cooler (Dz, Fr, Tin, Marac)",
        singleLabel: "24/300 mL",
        singlePrice: "335",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'caribe', 'cooler']
    },
    {
        id: 43,
        name: "Corona Cero (Sin Alcohol)",
        singleLabel: "24/355 mL",
        singlePrice: "290",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'corona', 'cero', 'lata']
    },
    {
        id: 44,
        name: "Corona Extra Latón",
        singleLabel: "24/473 mL",
        singlePrice: "345",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'corona', 'extra', 'laton']
    },
    {
        id: 45,
        name: "Corona Light",
        singleLabel: "24/355 mL",
        singlePrice: "265",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'corona', 'light']
    },
    {
        id: 46,
        name: "Estrella Latón",
        singleLabel: "24/325 mL",
        singlePrice: "240",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'estrella', 'laton']
    },
    {
        id: 47,
        name: "Modelo Especial Latón",
        singleLabel: "24/473 mL",
        singlePrice: "345",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'modelo', 'especial', 'laton']
    },
    {
        id: 48,
        name: "Modelo Especial",
        singleLabel: "24/355 mL",
        singlePrice: "298",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'modelo', 'especial']
    },
    {
        id: 49,
        name: "Michelob Ultra Lata",
        singleLabel: "24/355 mL",
        singlePrice: "330",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'michelob', 'ultra', 'lata']
    }, 
    {
        id: 402,
        name: "Michelob Ultra Vidrio N/R",
        singleLabel: "24/355 mL",
        singlePrice: "330",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'michelob', 'ultra', 'vidrio']
    },
    {
        id: 403,
        name: "Vicky Chelada",
        singleLabel: "24/473 mL",
        singlePrice: "370",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'vicky', 'victoria', 'chelada']
    },
    {
        id: 404,
        name: "Victoria Latón",
        singleLabel: "24/473 mL",
        singlePrice: "340",
        category: tags.CERVEZA,
        _kw: ['cerveza', 'victoria', 'laton']
    },
]

var allProducts = viveres
                    .concat(chiles)
                    .concat(especias)
                    .concat(secos)
                    .concat(cerveza);

exports.VIVERES = viveres;
exports.CHILES = chiles;
exports.ESPECIAS = especias;
exports.SECOS = secos;
exports.CERVEZA = cerveza;
exports.ALL = allProducts;