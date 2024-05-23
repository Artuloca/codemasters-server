'use strict'

let profesores = [
    { id: 1, nombre: 'Profesor 1', asignaturaId: 1 },
    { id: 2, nombre: 'Profesor 2', asignaturaId: 2 },
    // Agrega más profesores aquí
];

export function getProfesores(req, res) {
    res.json(profesores);
}

export function getProfesor(req, res) {
    const id = parseInt(req.params.id);
    const profesor = profesores.find(profesor => profesor.id === id);
    if (profesor) {
        res.json(profesor);
    } else {
        res.status(404).send('Profesor no encontrado');
    }
}

export function createProfesor(req, res) {
    const nuevoProfesor = req.body;
    profesores.push(nuevoProfesor);
    res.status(201).json(nuevoProfesor);
}

export function updateProfesor(req, res) {
    const id = parseInt(req.params.id);
    const updatedProfesor = req.body;
    const index = profesores.findIndex(profesor => profesor.id === id);
    if (index !== -1) {
        profesores[index] = updatedProfesor;
        res.json(updatedProfesor);
    } else {
        res.status(404).send('Profesor no encontrado');
    }
}

export function deleteProfesor(req, res) {
    const id = parseInt(req.params.id);
    const index = profesores.findIndex(profesor => profesor.id === id);
    if (index !== -1) {
        profesores.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Profesor no encontrado');
    }
}