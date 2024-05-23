'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res) => {

    const alumnos = [
        { id: 1, nombre: 'Alumno 1', cursoId: 1 },
        { id: 2, nombre: 'Alumno 2', cursoId: 2 },

    ];

    res.json(alumnos);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const alumno = alumnos.find(alumno => alumno.id === id);
    if (alumno) {
        res.json(alumno);
    } else {
        res.status(404).send('Alumno no encontrado');
    }
});

export default router