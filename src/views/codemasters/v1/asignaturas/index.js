'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res) => {
    const asignaturas = [
        { id: 1, nombre: 'Asignatura 1', profesorId: 1, alumnoId: 1 },
        { id: 2, nombre: 'Asignatura 2', profesorId: 2, alumnoId: 2 },

    ];

    res.json(asignaturas);
});

router.get('/profesor/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const asignaturasProfesor = asignaturas.filter(asignatura => asignatura.profesorId === id);
    if (asignaturasProfesor.length > 0) {
        res.json(asignaturasProfesor);
    } else {
        res.status(404).send('No se encontraron asignaturas para el profesor indicado');
    }
});

router.get('/alumno/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const asignaturasAlumno = asignaturas.filter(asignatura => asignatura.alumnoId === id);
    if (asignaturasAlumno.length > 0) {
        res.json(asignaturasAlumno);
    } else {
        res.status(404).send('No se encontraron asignaturas para el alumno indicado');
    }
});

export default router