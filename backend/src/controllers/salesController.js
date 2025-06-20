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