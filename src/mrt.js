import { calculateRate } from './utils';

const mrt =  [
    {
        number: 5700,
        title: 'Magnetresonanztomographie im Bereich des Kopfes gegebenenfalls einschließlich des Halses , in zwei Projektionen, davon mindestens eine Projektion unter Einschluß T2-gewichteter Aufnahmen',
        points: 4400,
        simple_unit_rate: calculateRate(4400),
        max_unit_rate: '?',
    },
    {
        number: 5705,
        title: 'Magnetresonanztomographie im Bereich der Wirbelsäule, in zwei Projektionen',
        points: 4200,
        simple_unit_rate: calculateRate(4200),
        max_unit_rate: '?',
    },
    {
        number: 5715,
        title: 'Magnetresonanztomographie im Bereich des Thorax gegebenenfalls einschließlich des Halses, der Thoraxorgane und/oder der Aorta in ihrer gesamten Länge',
        points: 4300,
        simple_unit_rate: calculateRate(4300),
        max_unit_rate: '?',
    },
    {
        number: 5720,
        title: 'Magnetresonanztomographie im Bereich des Abdomens und/oder des Beckens',
        points: 4400,
        simple_unit_rate: calculateRate(4400),
        max_unit_rate: '?',
    },
    {
        number: 5721,
        title: 'Magnetresonanztomographie der Mamma(e)',
        points: 4000,
        simple_unit_rate: calculateRate(4000),
        max_unit_rate: '?',
    },
    {
        number: 5729,
        title: 'Magnetresonanztomographie eines oder mehrerer Gelenke oder Abschnitte von Extremitäten',
        points: 2400,
        simple_unit_rate: calculateRate(2400),
        max_unit_rate: '?',
    },
    {
        number: 5730,
        title: 'Magnetresonanztomographie einer oder mehrerer Extremität(en) mit Darstellung von mindestens zwei großen Gelenken einer Extremität',
        points: 4000,
        simple_unit_rate: calculateRate(4000),
        max_unit_rate: '?',
    },
    {
        number: 5731,
        title: 'Ergänzende Serie(n) zu den Leistungen nach den Nummern 5700 bis 5730 (z.B. nach Kontrastmitteleinbringung, Darstellung von Arterien als MR-Angiographie)',
        points: 1000,
        simple_unit_rate: calculateRate(1000),
        max_unit_rate: '?',
    },
    {
        number: 5732,
        title: 'Zuschlag zu den Leistungen nach den Nummern 5700 bis 5730 für Positionswechsel und/oder Spulenwechsel',
        points: 1000,
        simple_unit_rate: calculateRate(1000),
        max_unit_rate: '?',
    },
    {
        number: 5733,
        title: 'Zuschlag für computergesteuerte Analyse (z. B. Kinetik, 3D-Rekonstruktion)',
        points: 800,
        simple_unit_rate: calculateRate(800),
        max_unit_rate: '?',
    },
    {
        number: 5735,
        title: 'Höchstwert für Leistungen nach den Nummern 5700 bis 5730',
        points: 6000,
        simple_unit_rate: calculateRate(6000),
        max_unit_rate: '?',
    },
];

export default mrt;
