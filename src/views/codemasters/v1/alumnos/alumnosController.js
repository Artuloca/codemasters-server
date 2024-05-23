'use strict'

let alumnos = [
    { id: 1, nombre: 'Alumno 1', cursoId: 1 },
    { id: 2, nombre: 'Alumno 2', cursoId: 2 },
    // Agrega más alumnos aquí
];

export function getAlumnos(req, res) {
    res.json(alumnos);
}

export function getAlumno(req, res) {
    const id = parseInt(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    if (alumno) {
        res.json(alumno);
    } else {
        res.status(404).send('Alumno no encontrado');
    }
}

export function createAlumno(req, res) {
    const nuevoAlumno = req.body;
    alumnos.push(nuevoAlumno);
    res.status(201).json(nuevoAlumno);
}

export function updateAlumno(req, res) {
    const id = parseInt(req.params.id);
    const updatedAlumno = req.body;
    const index = alumnos.findIndex(alumno => alumno.id === id);
    if (index !== -1) {
        alumnos[index] = updatedAlumno;
        res.json(updatedAlumno);
    } else {
        res.status(404).send('Alumno no encontrado');
    }
}

export function deleteAlumno(req, res) {
    const id = parseInt(req.params.id);
    const index = alumnos.findIndex(alumno => alumno.id === id);
    if (index !== -1) {
        alumnos.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Alumno no encontrado');
    }
}