import { calculateRate } from './utils';

const ct =  [
    {
        number: 5369,
        title: 'Höchstwert für Leistungen nach den Nummern 5370 bis 5374',
        points: 3000,
        simple_unit_rate: calculateRate(3000),
        max_unit_rate: '?',
    },
    {
        number: 5370,
        title: 'Computergesteuerte Tomographie im Kopfbereich gegebenenfalls einschließlich des kranio-zervikalen Übergangs',
        points: 2000,
        simple_unit_rate: calculateRate(2000),
        max_unit_rate: '?',
    },
    {
        number: 5371,
        title: 'Computergesteuerte Tomographie im Hals- und/oder Thoraxbereich',
        points: 2300,
        simple_unit_rate: calculateRate(2300),
        max_unit_rate: '?',
    },
    {
        number: 5372,
        title: 'Computergesteuerte Tomographie im Abdominalbereich',
        points: 2600,
        simple_unit_rate: calculateRate(2600),
        max_unit_rate: '?',
    },
    {
        number: 5373,
        title: 'Computergesteuerte Tomographie des Skeletts (Wirbelsäule, Extremitäten oder Gelenke bzw. Gelenkpaare)',
        points: 1900,
        simple_unit_rate: calculateRate(1900),
        max_unit_rate: '?',
    },
    {
        number: 5374,
        title: 'Computergesteuerte Tomographie der Zwischenwirbelräume im Bereich der Hals-, Brust- und/oder Lendenwirbelsäule gegebenenfalls einschließlich der Übergangsregionen',
        points: 1900,
        simple_unit_rate: calculateRate(1900),
        max_unit_rate: '?',
    },
    {
        number: 5375,
        title: 'Computergesteuerte Tomographie der Aorta in ihrer gesamten Länge',
        points: 2000,
        simple_unit_rate: calculateRate(2000),
        max_unit_rate: '?',
    },
    {
        number: 5376,
        title: 'Ergänzende computergesteuerte Tomographie(n) mit mindestens einer zusätzlichen Serie (z.B. bei Einsatz von Xenon, bei Einsatz der High-Resolution-Technik, bei zusätzlichen Kontrastmittelgaben) zusätzlich zu den Leistungen nach den Nummern 5370 bis 5375',
        points: 500,
        simple_unit_rate: calculateRate(500),
        max_unit_rate: '?',
    },
    {
        number: 5377,
        title: 'Zuschlag für computergesteuerte Analyse einschließlich speziell nachfolgender 3D-Rekonstruktion',
        points: 800,
        simple_unit_rate: calculateRate(800),
        max_unit_rate: '?',
    },
    {
        number: 5378,
        title: 'Computergesteuerte Tomographie zur Bestrahlungsplanung oder zu interventionellen Maßnahmen',
        points: 1000,
        simple_unit_rate: calculateRate(1000),
        max_unit_rate: '?',
    },
    {
        number: 5380,
        title: 'Bestimmung des Mineralgehalts (Osteodensitometrie) von repräsentativen (auch mehreren) Skeletteilen mit quantitativer Computertomographie oder quantitativer digitaler Röntgentechnik',
        points: 300,
        simple_unit_rate: calculateRate(300),
        max_unit_rate: '?',
    },
];

export default ct;
