const router = require('express').Router();
const Empleados = require('../models/empleados');
//Devuelve todos los empleados
router.get('/', async (req, res) => {
    try {
        const empleados = await Empleados.getAll();
        res.json(empleados);
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});

//Crea un nuevo empleado
router.post('/', async (req, res) => {
    try {
        const result = await Empleados.createEmpleado(req.body);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Empleado agregado"
            })
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});
//Actualiza un empelado
router.post('/update', async (req, res) => {
    try {
        const result = await Empleados.updateEmpleado(req.body, req.body.idEmpleado);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Empleado modificado"
            })
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }

});

//Borra un empleado
router.get('/delete/:idEmpleado', async (req, res) => {
    try {
        const result = await Empleados.deleteEmpleado(req.params.idEmpleado);
        res.json({
            tablasborradas: result.affectedRows
        });
    } catch (err) {
        res.json({
            error: err.message
        })
    }
})


module.exports = router;