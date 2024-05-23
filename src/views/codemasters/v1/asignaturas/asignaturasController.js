'use strict'

let asignaturas = [
    { id: 1, nombre: 'Asignatura 1' },
    { id: 2, nombre: 'Asignatura 2' },
    // Agrega más asignaturas aquí
];

export function getAsignaturas(req, res) {
    res.json(asignaturas);
}

export function getAsignatura(req, res) {
    const id = parseInt(req.params.id);
    const asignatura = asignaturas.find(asignatura => asignatura.id === id);
    if (asignatura) {
        res.json(asignatura);
    } else {
        res.status(404).send('Asignatura no encontrada');
    }
}

export function createAsignatura(req, res) {
    const nuevaAsignatura = req.body;
    asignaturas.push(nuevaAsignatura);
    res.status(201).json(nuevaAsignatura);
}

export function updateAsignatura(req, res) {
    const id = parseInt(req.params.id);
    const updatedAsignatura = req.body;
    const index = asignaturas.findIndex(asignatura => asignatura.id === id);
    if (index !== -1) {
        asignaturas[index] = updatedAsignatura;
        res.json(updatedAsignatura);
    } else {
        res.status(404).send('Asignatura no encontrada');
    }
}

export function deleteAsignatura(req, res) {
    const id = parseInt(req.params.id);
    const index = asignaturas.findIndex(asignatura => asignatura.id === id);
    if (index !== -1) {
        asignaturas.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Asignatura no encontrada');
    }
}