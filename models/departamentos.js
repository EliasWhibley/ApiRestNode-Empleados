const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM empleados.departamento', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
};

const createDepartment = ({
    nombre,
    ciudad
}) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO departamento (nombre, ciudad) VALUE (?, ?)', [nombre, ciudad], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const updateDepartment = ({
    nombre,
    ciudad
}, idDepartamento) => {
    return new Promise((resolve, reject) => {
        db.query('update departamento set nombre = ?, ciudad = ? where id = ?', [nombre, ciudad, idDepartamento], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const deleteDepartment = (idEmpleado) => {
    return new Promise((resolve, reject) => {
        db.query('delete from departamento where id = ?', [idEmpleado], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}

module.exports = {
    getAll,
    createDepartment,
    updateDepartment,
    deleteDepartment
}