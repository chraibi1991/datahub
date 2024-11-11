
# Projektname
**Webbasiertes Reporting-Tool für benutzerdefinierte Analyseberichte**

## Projektbeschreibung
Dieses Projekt ist ein webbasiertes Reporting-Tool, das Benutzern ermöglicht, benutzerdefinierte Berichte zu erstellen, Datenvisualisierungen anzuzeigen und Ergebnisse als PDF herunterzuladen. Das Tool wurde in eine bestehende Webplattform integriert und bietet zentralen Zugriff auf Analyse-, Prognose- und Simulationsergebnisse. Es nutzt **Angular** als Frontend-Framework und **Node.js** im Backend.

## Inhaltsverzeichnis
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Kernkomponenten](#kernkomponenten)
- [Technologien](#technologien)
- [Weitere Bibliotheken](#weitere-bibliotheken)
- [Features](#features)
- [Kommunikation zwischen den Komponenten](#kommunikation-zwischen-den-komponenten)
- [Ablauf der Anwendung](#ablauf-der-anwendung)

## Installation
1. **Abhängigkeiten installieren**  
   Öffne das Terminal in Visual Studio Code und führe den folgenden Befehl aus:
   npm install
2. Backend starten
Im Terminal in Visual Studio Code:
node .\datahub.js
3. Frontend starten
Im Terminal in Visual Studio Code:
ng serve

## Verwendung
Nach dem Starten der Anwendung über `ng serve` kann die Webanwendung unter `http://localhost:4200` im Browser aufgerufen werden. Die Hauptseite zeigt eine interaktive Karte, Diagramme und Auswahlfelder zur Berichterstellung an.

## Kernkomponenten
### Data-Regio Component
- **Beschreibung**: Herzstück der Anwendung; Darstellung und Analyse regionaler Daten.
- **Funktionen**:
  - **Kartendarstellung**: Nutzt Leaflet zur Anzeige geografischer Daten.
  - **Diagrammerstellung**: Verschiedene Diagrammtypen mit Chart.js.
  - **Datenfilterung**: Filterung nach Jahren, Werten und Regionen.
  - **Interaktive Legende**: Regionen in der Legende an-/abwählbar.
  - **Charttypen**: Unterstützt allgemeine Charts, Jahresvergleiche, Änderungsraten und Vergleichscharts.

### Report-Modal Component
- **Beschreibung**: Modal zur Anzeige und Anpassung von Berichten basierend auf den aktuellen Daten.
- **Funktionen**: Anpassung des Berichtslayouts und Export als PDF.

### Select-Indikatoren-Modal Component
- **Beschreibung**: Modal zur Auswahl der zu analysierenden Indikatoren.
- **Funktionen**: Mehrfachauswahl von Indikatoren zur Anpassung der Visualisierungen.

## Technologien
### Frontend
- **Angular**: Framework zur UI-Entwicklung.
- **Angular Material**: UI-Komponenten.
- **TypeScript**: Typsichere Programmiersprache.
- **Chart.js**: Datenvisualisierungen.
- **Leaflet.js**: Kartendarstellungen.
- **html-to-image und pdfmake**: Bild- und PDF-Erstellung.
- **ngx-charts**: Interaktive Diagramme.

### Backend
- **Node.js**: Serverseitige Entwicklung.
- **MongoDB**: Datenbank für Anwendungsdaten.
- **Mongoose**: MongoDB-Abstraktionsschicht.

## Weitere Bibliotheken
- **RxJS**: Reaktive Programmierung, u.a. für Subscription-Handling.
- **Day.js**: Datums- und Zeitfunktionen.

## Features
- **Interaktive Datenvisualisierung**: Darstellung von Diagrammen und Karten.
- **Berichtserstellung und Export**: Anpassbare Berichte mit PDF-Export.
- **Dynamische Filter**: Auswahl und Filterung der Indikatoren zur Analyse.
- **Kartenintegration**: Darstellung geografischer Daten.
- **Modulare Komponentenstruktur**: Flexibler und erweiterbarer Code.

## Kommunikation zwischen den Komponenten
- Die **Data-Regio Component** kommuniziert mit den Modal-Komponenten über den Angular MatDialog-Service.
- Die ausgewählten Indikatoren aus dem **Select-Indikatoren-Modal** werden an die Data-Regio Komponente zurückgegeben und beeinflussen die Datenvisualisierung.
- Die **Report-Modal Component** erhält Daten von der Data-Regio Komponente zur Berichtserstellung.

## Ablauf der Anwendung
1. **Initialisierung**: Die Data-Regio Komponente wird geladen und initialisiert die Karte und das erste Diagramm.
2. **Datenauswahl**: Benutzer können Indikatoren über das Select-Indikatoren-Modal auswählen.
3. **Datenvisualisierung**: Die ausgewählten Daten werden in verschiedenen Diagrammtypen dargestellt.
4. **Interaktion**: Benutzer können die Daten filtern, Regionen auswählen/abwählen und zwischen verschiedenen Charttypen wechseln.
5. **Analyse**: Die Anwendung bietet verschiedene Analysemöglichkeiten wie Zeitreihenanalyse und Vergleichsdiagramme.
6. **Berichterstellung**: Über das Report-Modal können Benutzer Berichte generieren und exportieren.
