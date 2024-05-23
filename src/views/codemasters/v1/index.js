'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res, next) => {
    res.send(`CodeMasters server V1 API`)
})

import alumnos from './alumnos/index.js'
router.use('/alumnos', alumnos)

import profesores from "./profesores/index.js";
router.use('/profesores', profesores)

import asignaturas from "./asignaturas/index.js";
router.use('/asignaturas', asignaturas)

import cursos from './cursos/index.js'
router.use('/cursos', cursos)

export default router