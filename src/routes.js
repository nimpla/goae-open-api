import { Router } from 'express';
import data from './data';

const router = Router();

router.get('/', (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: 'Einfacher Gebührensatz: der einfache Gebührensatz errechnet sich aus Punkte x 0,0582873 €',
    });
});

router.get('/search/:number', (req, res) => {
    const arr = [];
    const { number } = req.params;

    data.map(i => {
        if (i.hasOwnProperty('records')) {
            if (i.records.length > 0 ) {
                if (i.records[0].hasOwnProperty('number')) {
                    arr.push(i.records);
                }
                else {
                    i.records.map(j => {
                        if (j.hasOwnProperty('records')) {
                            if (j.records.length > 0 ) {
                                if (j.records[0].hasOwnProperty('number')) {
                                    arr.push(j.records);
                                }
                                else {
                                    j.records.map(k => {
                                        if (k.hasOwnProperty('records')) {
                                            if (k.records.length > 0 ) {
                                                if (k.records[0].hasOwnProperty('number')) {
                                                    arr.push(k.records);
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        }
    });

    const out = arr.flat().filter(x => x.number === parseInt(number));
    return res.status(200).json({
        success: out.length > 0 ? true : false,
        record: out[0],
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
