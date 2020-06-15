const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from empleados_activos', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const createEmpleado = ({
    nombre,
    dni,
    sexo,
    fecha_nacimiento,
    salario,
    cargo,
    fk_departamento,
    fk_jefe
}) => {
    return new Promise((resolve, reject) => {
        db.query('insert into empleados_activos (nombre, dni, sexo, fecha_nacimiento, salario, cargo, fk_departamento, fk_jefe)value (?, ?, ?, ?, ?, ?, ?, ?)', [nombre, dni, sexo, fecha_nacimiento, salario, cargo, fk_departamento, fk_jefe], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const updateEmpleado = ({
    nombre,
    dni,
    sexo,
    fecha_nacimiento,
    salario,
    cargo,
    fk_departamento,
    fk_jefe
}, idEmpleado) => {
    return new Promise((resolve, reject) => {
        db.query('update empleados_activos set nombre = ?, dni = ?, sexo = ?, fecha_nacimiento = ?, salario = ?, cargo = ?, fk_departamento = ?, fk_jefe = ? where id = ?', [nombre, dni, sexo, fecha_nacimiento, salario, cargo, fk_departamento, fk_jefe, idEmpleado], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
};

const deleteEmpleado = (idEmpleado) => {
    return new Promise((resolve, reject) => {
        db.query('delete from empleados_activos where id = ?', [idEmpleado], (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    })
}


module.exports = {
    getAll,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
}