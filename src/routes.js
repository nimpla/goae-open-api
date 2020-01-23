import { Router } from 'express';
import data from './data';

const router = Router();

router.get('/', (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'Einfacher Gebührensatz: der einfache Gebührensatz errechnet sich aus Punkte x 0,0582873 €',
    });
});

router.get('/:category/:roman?/:id?', (req, res) => {
    const { category, roman, id } = req.params;
    let out = data.find(x => x.id === category);
    if (roman) out = out.records.find(x => x.id === roman);
    if (id) out = out.records.find(x => x.id === parseInt(id));
    if (out) {
        return res.status(200).json({
            success: true,
            title: out.title,
            records: out.records,
        });
    }
    return res.status(404).json({
        success: false,
        message: `Datensatz der Kategorie ${category} mit der ID ${id} im Index ${roman} wurde nicht gefunden!`,
    });
});

export default router;
