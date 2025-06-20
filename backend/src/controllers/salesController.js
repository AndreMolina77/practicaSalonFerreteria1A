import salesModel from "../models/sales.js";

const salesController = {};

//----------------------------
//   VENTAS POR CATEGORIA
//----------------------------

salesController.getSalesByCategory = async (req, res) => {
    try {
        
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: "$category", /*para agregar más campos padres, se hace por comas ","" */
                        totalVentas: {$sum: "$total"}
                    }
                },
                //ordenar los resultados
                {
                    $sort: {totalVentas: -1} /*-1 es de mayor a menor, 1 es de menor a mayor */
                }
            ]
        )
        
        res.status(200).json(resultado)
    } catch (error) {
        
    }
}
import salesModel from "../models/sales.js";

const salesController = {};

//=========================
//   VENTAS POR CATEGORIA
//=========================

salesController.getSalesByCategory = async (req, res) => {
    try {
        
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: "$category", /*para agregar más campos padres, se hace por comas ","" */
                        totalVentas: {$sum: "$total"}
                    }
                },
                //ordenar los resultados
                {
                    $sort: {totalVentas: -1} /*-1 es de mayor a menor, 1 es de menor a mayor */
                }
            ]
        )
        
        res.status(200).json(resultado)
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "internal server error"})
    }
};

//===========================
//   VENTAS POR MAS VENDIDOS
//===========================

salesController.getBestSellingProducts = async(req, res) => {
    try {
        
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: "$product",
                        cantidadVentas: {$sum: 1} //Ese 1 significa
                                                  //que va a sumar la cantidad de 
                                                  //veces que se repite ese mismo campo
                    }
                },
                //ordenar
                {
                    $sort:{cantidadVentas: -1}
                },
                //limitar la cantidad de datos a mostrar
                {
                    $limit: 5
                }
            ]
        );

        res.status(200).json(resultado);
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}

salesController.getFrequentCustomer = async (req, res) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id: "$customer",
                        clienteFrecuente: {$sum: 1}
                    }
                },
                {
                    $sort:{clienteFrecuente: -1}
                },
                {
                    $limit: 5
                }
            ]
        );
        res.status(200).json(resultado);
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}


salesController.totalEarnings = async(req, res) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id:null, //null significa que no hay campo padre
                        gananciasTotales: {$sum: "$total"}
                    }
                }
            ]
         );
        res.status(200).json(resultado);
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}


//===========================
//   VENTAS POR FECHA
//===========================

salesController.getSalesByDate = async (req, res) => {
    try {
        const resultado = await salesModel.aggregate(
            [
                {
                    $group:{
                        _id:{
                                //Divideremos fecha en dos campos padres
                            anio: {$year:"$fecha"},
                            mes: {$month: "$fecha"}
                        },
                        totalVentas: {$sum: "$total"}
                    }
                },
                //ordenar
                {
                    $sort: {totalVentas: -1}
                }
            ]
        );
        res.status(200).json(resultado);
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    }
}

//Insertar ventas
salesController.insertSales = async (req, res) => {
    try {
        const { product, category, customer,total, date} = req.body;
    const newSale = new salesModel({
        product, 
        category,
        customer,
        total,
        date
    })
    await newSale.save();
    res.status(200).json({message: "Sales saved"})
        
    } catch (error) {
        console.log("error"+error)
        res.status(500).json({message: "Internal server error"})
    } 
}

export default salesController