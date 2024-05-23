'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res) => {
    const profesores = [
        { id: 1, nombre: 'Profesor 1', asignaturaId: 1 },
        { id: 2, nombre: 'Profesor 2', asignaturaId: 2 },

    ];

    res.json(profesores);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const profesor = profesores.find(profesor => profesor.id === id);
    if (profesor) {
        res.json(profesor);
    } else {
        res.status(404).send('Profesor no encontrado');
    }
});

export default router