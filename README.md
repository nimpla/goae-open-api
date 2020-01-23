# GOÄ-Public-API (unofficial)

<img src="https://flat.badgen.net/github/last-commit/nimpla/goae-open-api"> <img src="https://flat.badgen.net/david/dep/nimpla/goae-open-api">

## Hinweis

Die hier verwendeten Daten wurden mit vollster Fürsorge des Autors übertragen. Für die Veröffentlichung dieser Informationen kann aber keine Haftung oder Garantie für Aktualität, Richtigkeit und Vollständigkeit übernommen werden.

Quelle: <a href="http://www.e-bis.de/goae/defaultFrame.htm">http://www.e-bis.de/goae/defaultFrame.htm<a>

## Unterstützte Leistungen

    B. Grundleistungen
        I. Allgemeine Beratungen und Untersuchungen
    C. Sonderleistungen
    D. Anästhesieleistungen
    O. Strahlenmedizin/MRT
        I. Strahlendiagnostik
            7. Computertomographie
       III. MRT
    P. Sektionsleistungen

## Verwendung

#### Strahlenmedizin/MRT => Strahlendiagnostik => Computertomographie
https://localhost:3000/o/i/7

#### Suche nach Nummer 5371
https://localhost:3000/search/5371

## Contribute

    {
        number: 000,
        title: 'Test',
        points: 000,
        simple_unit_rate: calculateRate(000),
        max_unit_rate: '?',
    },
