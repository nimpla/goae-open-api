import { calculateRate } from './utils';

const data = [
    {
        id: 'o',
        title: 'Strahlenmedizin/MRT',
        records: [
            {
                id: 'i',
                title: 'Strahlendiagnostik',
                records: [
                    {
                        id: '1',
                        title: 'Skelett',
                        records: [],
                    },
                    {
                        id: '2',
                        title: 'Hals- und Brustorgane',
                        records: [],
                    },
                    {
                        id: '3',
                        title: 'Bauch- und Verdauungsorgane',
                        records: [],
                    },
                    {
                        id: '4',
                        title: 'Spezialuntersuchungen',
                        records: [],
                    },
                    {
                        id: '5',
                        title: 'Angiographie',
                        records: [],
                    },
                    {
                        id: '6',
                        title: 'Interventionelle Maßnahmen',
                        records: [],
                    },
                    {
                        id: '7',
                        title: 'Computertomographie',
                        records: [
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
                        ],
                    },
                ],
            },
            {
                id: 'ii',
                title: 'Nuklearmedizin',
                records: [],
            },
            {
                id: 'iii',
                title: 'Magnetresonanztomographie',
                records: [
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
                ],
            },
            {
                id: 'iv',
                title: 'Strahlentherapie',
                records: [
                    {
                        id: '1',
                        title: 'Strahlenbehandlung dermatologischer Erkrankungen',
                        records: [],
                    },
                    {
                        id: '2',
                        title: 'Orthovolt- oder Hochvoltstrahlenbehandlung',
                        records: [],
                    },
                    {
                        id: '3',
                        title: 'Hochvoltstrahlenbehandlung bösartiger Erkrankungen (mindestens 1 MeV)',
                        records: [],
                    },
                    {
                        id: '4',
                        title: 'Brachytherapie mit umschlossenen Radionukliden',
                        records: [],
                    },
                    {
                        id: '5',
                        title: 'Besonders aufwendige Bestrahlungstechniken',
                        records: [],
                    },
                ],
            },
        ],
    },
    {
        id: 'p',
        title: 'Sektionsleistungen',
        records: [
            {
                number: 6000,
                title: 'Vollständige innere Leichenschau einschließlich Leichenschaubericht und pathologisch-anatomischer Diagnose',
                points: 1710,
                simple_unit_rate: calculateRate(1710),
                max_unit_rate: '?',
            },
            {
                number: 6001,
                title: 'Vollständige innere Leichenschau, die zusätzliche besonders zeitaufwendige oder umfangreiche ärztliche Verrichtungen erforderlich macht (z. B. ausgedehnte Untersuchung des Knochensystems oder des peripheren Gefäßsystems mit Präparierung und/oder Untersuchung von Organen bei fortschreitender Zersetzung mit bereits wesentlichen Fäulniserscheinungen) einschließlich Leichenschaubericht und pathologisch-anatomischer Diagnose',
                points: 2300,
                simple_unit_rate: calculateRate(2300),
                max_unit_rate: '?',
            },
        ],
    },
];

export default data;
