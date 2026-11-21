# WiPri – WPR Kompakt

Lern- und Übungsseite für Wirtschaftsprivatrecht (Hochschule München).

## Inhalt

- `WPR Kompakt.dc.html` – Hauptseite (6 Tabs: Start, Lernen, Schemata, Fälle üben, Probeklausur, BGB)
- `WPR Kompakt (offline).html` – gebündelte Offline-Version (älterer Stand)
- `WPR Lernmaterial.dc.html` / `WPR Lernmaterial.html` – frühere Lernmaterial-Seite
- `wpr-*.js` – Daten: Themen, Fälle, Lösungswege, Vorlesungszettel
  - `wpr-plus-5.js` – 39 neue Transferfälle
  - `wpr-loes-1.js` … `wpr-loes-6.js` – Lösungswege und Begründungen für alle Fälle
- `support.js`, `compat.json` – Laufzeit und Seitenliste aus dem Claude-Artefakt

## Starten

Die Seite braucht nur einen Browser mit Internet (React wird von unpkg.com geladen).

- **Online:** GitHub Pages aktivieren (Settings → Pages → Branch `main`, Ordner `/`). `index.html` leitet auf die Hauptseite weiter.
- **Lokal:** im Ordner `python3 -m http.server 8000` ausführen und `http://localhost:8000` öffnen. Direkt per Doppelklick geht es meist auch.

Fortschritt (beantwortete Fälle, Lernplan) wird im Browser gespeichert (localStorage) – pro Browser und Adresse getrennt.

Vorlesungsfolien, Probeklausuren und Übungsfälle der Dozenten sind bewusst nicht im Repository enthalten.
