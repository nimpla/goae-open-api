import express from 'express';
const router = express.Router();

import ct from '../src/ct';
import mrt from '../src/mrt';

// CT
router.get('/ct', (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'ok',
        title: 'Computertomographie',
        data: ct,
    });
});

// MRT
router.get('/mrt', (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'ok',
        title: 'Magnetresonanztomographie',
        data: mrt,
    });
});

export default router;
