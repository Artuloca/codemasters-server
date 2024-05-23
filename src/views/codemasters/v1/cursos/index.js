'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res) => {
    const cursos = [
        { id: 1, nombre: 'Curso 1', descripcion: 'Descripción del Curso 1' },
        { id: 2, nombre: 'Curso 2', descripcion: 'Descripción del Curso 2' },
    ];

    res.json(cursos);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const curso = cursos.find(curso => curso.id === id);
    if (curso) {
        res.json(curso);
    } else {
        res.status(404).send('Curso no encontrado');
    }
});

export default router