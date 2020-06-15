const router = require('express').Router();
const Departamentos = require('../models/departamentos')
//devuelve todos los departamentos
router.get('/', async (req, res) => {
    try {
        const departamentos = await Departamentos.getAll();
        res.json(departamentos);
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});
//crea un departamento
router.post('/', async (req, res) => {
    try {
        const result = await Departamentos.createDepartment(req.body);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Departamento agregado"
            })
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});

//modifica un departamento
router.post('/update', async (req, res) => {
    try {
        const result = await Departamentos.updateDepartment(req.body, req.body.idDepartamento);
        if (result['affectedRows'] === 1) {
            res.json({
                success: "Departamento modificado"
            })
        }
    } catch (err) {
        res.json({
            error: err.message
        })
    }
});

//borrar un departamento
router.get('/delete/:idDepartamento', async (req, res) => {
    try {
        const result = await Departamentos.deleteDepartment(req.params.idDepartamento);
        res.json(result);
    } catch (err) {
        res.json({
            error: err.message
        })
    }
})


module.exports = router;