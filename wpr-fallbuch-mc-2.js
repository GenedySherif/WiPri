(function () {
// Antwortmöglichkeiten a–f im Stil der Weiden/Wende-Probeklausur – Fallbuch VL 4–7
const M = (window.WPRK_FB_MC = window.WPRK_FB_MC || {});
const A = 'Welche Aussage ist richtig?', K = 'Welche Kombination ist richtig?';
const S = (id, q, c, o, st) => { M[id] = st ? { q, c, o, st } : { q, c, o }; };
const ALLE = ['Alle anderen Antworten sind falsch.'];

// ───────── VL 4 ─────────
S('4-275a', K, 2, [
 ['2 und 3', 'Falsch. Auch Aussage 4 stimmt: V hat fahrlässig gehandelt (§ 283).'],
 ['1 und 4', 'Falsch. Aussage 1 ist falsch: § 275 II gibt bei grobem Missverhältnis eine Einrede.'],
 ['2, 3 und 4', 'Richtig. Einrede nach § 275 II, Kaufpreis entfällt (§ 326 I 1), SE statt der Leistung 1.500 € − 1.000 € = 500 €.'],
 ['2, 3 und 5', 'Falsch. Aussage 5 ist falsch: Wer keinen Kaufpreis zahlt, bekommt nur die Differenz.'],
 ['1, 3 und 4', 'Falsch. Aussage 1 ist falsch.'],
 ['nur 2', 'Falsch. Auch 3 und 4 stimmen.']],
 ['V muss den Ring bergen lassen, weil die Bergung technisch möglich ist.',
  'V kann die Leistung nach § 275 II verweigern.',
  'K muss den Kaufpreis nicht zahlen.',
  'K kann 500 € Schadensersatz statt der Leistung verlangen.',
  'K kann 1.500 € Schadensersatz verlangen und muss keinen Kaufpreis zahlen.']);

S('4-275b', A, 5, [
 ['S musste singen, weil das Konzert objektiv möglich war.', 'Falsch. Bei persönlich geschuldeten Leistungen gibt es § 275 III.'],
 ['S durfte absagen, bekommt aber die volle Gage (§ 326 II).', 'Falsch. Der Veranstalter ist für das Hindernis nicht verantwortlich.'],
 ['S durfte absagen, haftet aber auf Schadensersatz statt der Leistung (§ 283).', 'Falsch. Die Erkrankung des Kindes hat S nicht zu vertreten.'],
 ['S wird automatisch frei, ohne sich auf ein Recht berufen zu müssen.', 'Falsch. § 275 III ist eine Einrede. S musste sich darauf berufen, was mit der Absage geschah.'],
 ['S durfte absagen und bekommt die halbe Gage.', 'Falsch. Eine Teilvergütung sieht das Gesetz hier nicht vor.'],
 ['S durfte die Leistung verweigern, bekommt keine Gage und haftet auch nicht auf Schadensersatz.', 'Richtig. §§ 275 III, 326 I 1. SE scheitert am fehlenden Vertretenmüssen.']]);

S('4-gat1', A, 1, [
 ['W muss neu liefern, R muss erst nach Lieferung zahlen.', 'Falsch. Mit der Übergabe an den Paketdienst hat sich die Schuld konkretisiert.'],
 ['W muss nicht neu liefern, R muss trotzdem zahlen.', 'Richtig. Konkretisierung bei der Schickschuld (§ 243 II, § 275 I), Preisgefahr beim Versendungskauf auf R (§ 447 I).'],
 ['W muss nicht neu liefern, und R muss nicht zahlen (§ 326 I 1).', 'Falsch. § 447 I ist die Ausnahme zu § 326 I 1.'],
 ['W muss neu liefern, weil der Paketdienst sein Erfüllungsgehilfe ist (§ 278).', 'Falsch. Bei der Schickschuld schuldet W nur die Versendung, nicht den Transport. Der Paketdienst ist nicht sein Erfüllungsgehilfe.'],
 ['R muss zahlen, W muss aber zusätzlich neu liefern.', 'Falsch. W ist nach § 275 I frei.'],
 ['Es gilt § 475 II, die Preisgefahr bleibt bei W.', 'Falsch. § 475 II gilt nur beim Verbrauchsgüterkauf. R ist eine GmbH.']]);

S('4-gat2', A, 3, [
 ['L muss am Markt Hafer kaufen, weil er eine Gattungsschuld übernommen hat und Hafer weiter erhältlich ist.', 'Falsch. Die Schuld war auf die eigene Ernte beschränkt (Vorratsschuld).'],
 ['L wird frei, M muss aber den Kaufpreis zahlen, weil die Gefahr mit Vertragsschluss auf ihn übergegangen ist.', 'Falsch. Die Gegenleistung entfällt (§ 326 I 1). Die Gefahr geht erst mit Übergabe über (§ 446).'],
 ['L wird frei, schuldet aber 1.500 € Schadensersatz für den Mehrpreis.', 'Falsch. Ein Hagelsturm ist nicht zu vertreten, ein Beschaffungsrisiko hat L nicht übernommen.'],
 ['L wird frei, weil der ganze Vorrat unterging; M muss nicht zahlen und bekommt keinen Schadensersatz.', 'Richtig. Beschränkte Gattungsschuld, ganzer Vorrat untergegangen → § 275 I, § 326 I 1, kein Vertretenmüssen.'],
 ['L muss liefern, darf aber wegen § 313 den höheren Marktpreis verlangen.', 'Falsch. Die Leistung ist unmöglich, eine Anpassung kommt nicht in Betracht.'],
 ['L wird nur frei, wenn er sich auf § 275 II beruft, weil Hafer am Markt noch zu beschaffen wäre.', 'Falsch. Bei echter Unmöglichkeit wirkt § 275 I kraft Gesetzes.']]);

S('4-gat3', A, 4, [
 ['B muss neu liefern, weil Zement eine Gattungssache ist.', 'Falsch. Mit Aussondern, Bereitstellen und Benachrichtigen hat sich die Holschuld konkretisiert.'],
 ['B muss nicht neu liefern, K muss aber zahlen, weil die Gefahr mit der Konkretisierung übergegangen ist.', 'Falsch. Die Konkretisierung verschiebt nur die Leistungsgefahr, nicht die Preisgefahr.'],
 ['K muss zahlen, weil er sich im Annahmeverzug befand.', 'Falsch. Abholung war erst ab dem 10. Mai vereinbart. Am 9. Mai war K nicht im Verzug.'],
 ['B muss neu liefern, K muss nach Lieferung zahlen.', 'Falsch. B ist nach § 275 I frei.'],
 ['B muss nicht neu liefern, K muss aber auch nicht zahlen.', 'Richtig. §§ 243 II, 275 I und § 326 I 1, weil weder Übergabe noch Annahmeverzug vorliegen.'],
 ['B schuldet Schadensersatz statt der Leistung, weil er die Säcke nicht feuersicher gelagert hat.', 'Falsch. Blitzschlag ist nicht zu vertreten.']]);

S('4-fix', A, 0, [
 ['F muss die 70 € nicht zahlen und kann die 280 € als Schadensersatz statt der Leistung verlangen.', 'Richtig. Absolutes Fixgeschäft → § 275 I, § 326 I 1. SE nach §§ 280 I, III, 283, Verschulden des Fahrers über § 278.'],
 ['F muss die 70 € zahlen, weil T noch leisten will; die 280 € sind Verzugsschaden.', 'Falsch. Eine Fahrt nach Abflug ist keine Erfüllung mehr. Es geht um Unmöglichkeit, nicht um Verzug.'],
 ['F muss nicht zahlen, die 280 € bekommt er aber nur nach Fristsetzung.', 'Falsch. Bei Unmöglichkeit ist keine Frist nötig (§ 283 S. 2).'],
 ['F muss zahlen, kann aber zurücktreten, wenn er eine Frist gesetzt hat.', 'Falsch. Eine Frist wäre sinnlos.'],
 ['F muss nicht zahlen; die 280 € scheitern, weil nicht T, sondern der Fahrer verschlafen hat.', 'Falsch. Das Verschulden des Fahrers wird T nach § 278 zugerechnet.'],
 ['Relatives Fixgeschäft: F kann ohne Frist zurücktreten, Schadensersatz gibt es nicht.', 'Falsch. Die Fahrt ist nicht nachholbar – absolutes Fixgeschäft.']]);

S('4-vert', A, 2, [
 ['Nein, weil E den Ausfall des Großhändlers nicht verschuldet hat und ihn sorgfältig ausgewählt hatte.', 'Falsch. Wer eine Gattungssache verkauft, haftet für die Beschaffung auch ohne Verschulden (§ 276 I 1).'],
 ['Ja, aber nur über § 278, weil der Großhändler E’s Erfüllungsgehilfe ist.', 'Falsch. Der Lieferant des Verkäufers ist nicht sein Erfüllungsgehilfe.'],
 ['Ja, 151 €, weil E mit dem Gattungskauf das Beschaffungsrisiko übernommen hat.', 'Richtig. §§ 280 I, III, 281, Vertretenmüssen nach § 276 I 1 („Übernahme eines Beschaffungsrisikos“).'],
 ['Nein, weil die Leistung für E unmöglich geworden ist, nachdem sein einziger Lieferant ausgefallen war (§ 275 I).', 'Falsch. Die Konsole war am Markt erhältlich.'],
 ['Ja, aber nur zur Hälfte, weil K bei einem anderen Händler zu teuer gekauft hat (§ 254 II).', 'Falsch. 650 € war der Marktpreis. Ein Mitverschulden liegt nicht vor.'],
 ['Nein, K hätte zurücktreten müssen; Rücktritt und Schadensersatz schließen sich aus.', 'Falsch. Beides ist nebeneinander möglich (§ 325), Schadensersatz auch ohne Rücktritt.']]);

S('4-311a', A, 5, [
 ['Der Vertrag ist nichtig, weil er auf eine unmögliche Leistung gerichtet ist.', 'Falsch. § 311a I: Ein anfängliches Leistungshindernis steht der Wirksamkeit nicht entgegen.'],
 ['Der Vertrag ist wirksam, K muss die Miete zahlen.', 'Falsch. Die Gegenleistung entfällt (§ 326 I 1).'],
 ['Der Vertrag ist wirksam, K bekommt die 180 € nach § 311a II, ohne dass es auf V’s Kenntnis ankommt.', 'Falsch. § 311a II 2 schließt den Anspruch bei unverschuldeter Unkenntnis aus.'],
 ['Der Vertrag ist wirksam, K bekommt die 180 € nach § 284, weil Aufwendungsersatz kein Verschulden voraussetzt.', 'Falsch. § 284 gilt nur „anstelle“ des SE und setzt dieselben Voraussetzungen voraus.'],
 ['Der Vertrag ist nichtig, V haftet aber aus c.i.c. auf die 180 €.', 'Falsch. Der Vertrag ist wirksam. § 311a II ist die abschließende Regelung.'],
 ['Der Vertrag ist wirksam, K zahlt keine Miete, die 180 € bekommt er nicht.', 'Richtig. § 311a I, § 326 I 1, § 311a II 2.']]);

S('4-285', A, 3, [
 ['K kann die 24.000 € verlangen und muss nichts zahlen.', 'Falsch. Wer das Surrogat verlangt, bleibt zur Gegenleistung verpflichtet (§ 326 III).'],
 ['K kann nichts verlangen, weil V den Untergang nicht zu vertreten hat.', 'Falsch. § 285 setzt kein Vertretenmüssen voraus.'],
 ['K kann 4.000 € Schadensersatz statt der Leistung verlangen.', 'Falsch. SE scheitert am fehlenden Vertretenmüssen. Die 4.000 € sind der wirtschaftliche Vorteil aus § 285.'],
 ['K kann die 24.000 € verlangen, muss dann aber 20.000 € zahlen.', 'Richtig. § 285 I, § 326 III 1. Netto +4.000 €.'],
 ['K kann den Wagen vom Schrottplatz nach § 985 herausverlangen.', 'Falsch. K war nie Eigentümer.'],
 ['K kann die 24.000 € nur verlangen, wenn er vorher zurückgetreten ist.', 'Falsch. Wer zurücktritt, verliert den Anspruch auf das Surrogat gerade.']]);

S('4-284', K, 1, [
 ['2 und 3', 'Falsch. Auch 4 und 5 stimmen.'],
 ['2, 3, 4 und 5', 'Richtig. Aufwendungsersatz (2), stellvertretendes commodum (3) gegen Zahlung (4), SE wäre 0 € (5).'],
 ['1, 2 und 4', 'Falsch. Aussage 1 ist falsch: K war nie Eigentümer.'],
 ['3 und 4', 'Falsch. Auch 2 und 5 stimmen.'],
 ['2 und 5', 'Falsch. Auch 3 und 4 stimmen.'],
 [...ALLE, 'Falsch. Antwort b ist richtig.']],
 ['K kann den Oldtimer nach § 985 vom Dritten herausverlangen.',
  'K kann nach § 284 Ersatz seiner Aufwendungen von 500 € verlangen.',
  'K kann nach § 285 den Veräußerungserlös von 18.000 € herausverlangen.',
  'Verlangt K den Erlös, muss er den Kaufpreis von 15.000 € zahlen.',
  'Der Schadensersatz statt der Leistung beträgt 0 €, weil Wert und Preis übereinstimmen.']);

S('4-446', A, 2, [
 ['K muss nicht weiterzahlen, weil Z wegen des Eigentumsvorbehalts noch Eigentümer war.', 'Falsch. Die Gefahr geht mit der Übergabe über, nicht mit dem Eigentum.'],
 ['K muss nicht weiterzahlen, Z muss die gezahlten Raten nach § 326 IV zurückgeben.', 'Falsch. Wegen § 446 S. 1 bleibt der Kaufpreis geschuldet.'],
 ['K muss weiterzahlen, weil die Preisgefahr mit der Übergabe übergegangen ist.', 'Richtig. § 446 S. 1.'],
 ['K muss weiterzahlen, kann aber eine Anpassung nach § 313 verlangen.', 'Falsch. Der zufällige Untergang ist durch § 446 abschließend geregelt.'],
 ['K muss weiterzahlen, weil der Blitzschlag ein von ihr zu vertretender Umstand ist (§ 326 II 1).', 'Falsch. Ergebnis richtig, Begründung falsch: K hat den Blitz nicht zu vertreten.'],
 ['K muss nur zahlen, wenn Z gegen Blitzschlag versichert war.', 'Falsch. Eine Versicherung ist für den Gefahrübergang unerheblich.']]);

// ───────── VL 5 ─────────
S('5-vz1', A, 1, [
 ['Nein. Ohne Mahnung und ohne Kalenderdatum gibt es keinen Verzug.', 'Falsch. § 286 II Nr. 2 lässt eine vom Ereignis aus berechenbare Frist genügen.'],
 ['Ja, ab dem 18. Oktober ohne Mahnung (§ 286 II Nr. 2).', 'Richtig. Abruf 3.10. + zwei Wochen → Ende 17.10. (§§ 187 I, 188 II), Verzug ab 18.10.'],
 ['Ja, schon ab dem 3. Oktober, weil der Abruf als Mahnung wirkt.', 'Falsch. Vor Fälligkeit kann nicht gemahnt werden.'],
 ['Ja, ab dem 17. Oktober, weil der Tag des Abrufs mitzählt.', 'Falsch. Der Ereignistag zählt nicht mit (§ 187 I).'],
 ['Ja, aber erst 30 Tage nach dem Abruf (§ 286 III).', 'Falsch. § 286 III gilt für Entgeltforderungen, nicht für Lieferpflichten.'],
 ['Nein, weil C zuerst eine Nachfrist setzen muss (§ 281).', 'Falsch. Die Frist braucht man für SE statt der Leistung, nicht für den Verzug.']]);

S('5-vz2', 'Schuldet R Verzugszinsen für die Zeit vom 31. März bis zum 15. April?', 4, [
 ['Ja, R ist seit dem 31. März nach § 286 III in Verzug, weil seit Zugang der Rechnung 30 Tage vergangen sind.', 'Falsch. Gegenüber Verbrauchern nur mit Hinweis in der Rechnung.'],
 ['Ja, weil eine Rechnung mit Fälligkeitsangabe zugleich als Mahnung wirkt (§ 286 I).', 'Falsch. Die erste Rechnung stellt die Forderung erst und ist grundsätzlich keine Mahnung.'],
 ['Ja, weil das Schreiben vom 15. April den Verzug rückwirkend begründet.', 'Falsch. Eine Mahnung wirkt nur für die Zukunft, ab Zugang.'],
 ['Nein, weil Werklohn keine Entgeltforderung ist und § 286 III deshalb für Handwerker nicht gilt.', 'Falsch. Auch Werklohn ist eine Entgeltforderung.'],
 ['Nein, weil § 286 III ohne Hinweis in der Rechnung nicht gilt und niemand gemahnt hat.', 'Richtig. § 286 III 1 Hs. 2, R ist Verbraucherin (§ 13).'],
 ['Ja, aber nur in Höhe von 5 Prozentpunkten über dem Basiszinssatz, weil R Verbraucherin ist.', 'Falsch. Der Zinssatz stimmt für Verbraucher (§ 288 I), aber R ist gar nicht in Verzug.']]);

S('5-vz3', A, 0, [
 ['Nein, weil erst das Anwaltsschreiben den Verzug begründete und seine Kosten schon davor entstanden waren.', 'Richtig. Der Schaden muss nach Verzugseintritt entstehen.'],
 ['Ja, weil „zahlbar sofort“ ein Kalendertermin ist (§ 286 II Nr. 1).', 'Falsch. „Sofort“ ist kein kalendermäßig bestimmter Tag.'],
 ['Ja, weil ein Unternehmer nach sieben Tagen automatisch in Verzug ist.', 'Falsch. Die automatische Frist beträgt 30 Tage (§ 286 III).'],
 ['Ja, aber nur 40 € als Pauschale nach § 288 V, auf die die Anwaltskosten anzurechnen sind.', 'Falsch. Auch die Pauschale setzt Verzug voraus, und der trat erst mit der Mahnung ein.'],
 ['Nein, weil die Kosten eines Anwalts nie ersatzfähig sind, solange der Gläubiger selbst mahnen könnte.', 'Falsch. Nach Verzugseintritt sind sie typischer Verzögerungsschaden.'],
 ['Ja, aus § 280 I ohne Verzug, weil die Nichtzahlung eine Pflichtverletzung ist.', 'Falsch. Verzögerungsschaden gibt es nur unter den Voraussetzungen des § 286 (§ 280 II).']]);

S('5-zins', K, 3, [
 ['1 und 3', 'Falsch. Auch Aussage 5 stimmt.'],
 ['1, 3 und 4', 'Falsch. Aussage 4 ist falsch: Die Pauschale wird angerechnet.'],
 ['2, 3 und 5', 'Falsch. Aussage 2 ist falsch: Ohne Verbraucherbeteiligung gelten 9 Prozentpunkte.'],
 ['1, 3 und 5', 'Richtig. § 288 II, § 288 V 1, § 288 V 3.'],
 ['1 und 5', 'Falsch. Auch Aussage 3 stimmt.'],
 ['3, 4 und 5', 'Falsch. Aussage 4 ist falsch, und 1 fehlt.']],
 ['Der Zinssatz beträgt 9 Prozentpunkte über dem Basiszinssatz.',
  'Der Zinssatz beträgt 5 Prozentpunkte über dem Basiszinssatz, weil P ein Einzelkaufmann ist.',
  'P hat Anspruch auf die 40-€-Pauschale.',
  'P kann 600 € Anwaltskosten und zusätzlich 40 € verlangen.',
  'Die Pauschale wird auf die Anwaltskosten angerechnet.']);

S('5-287', A, 5, [
 ['Ja, weil der Schuldner im Verzug für jeden Zufall haftet (§ 287 S. 2).', 'Falsch. § 287 S. 2 enthält eine Ausnahme.'],
 ['Ja, weil V den Schrank rechtzeitig hätte in Sicherheit bringen müssen.', 'Falsch. Dafür fehlt jeder Anhaltspunkt. Es geht um Zufallshaftung.'],
 ['Nein, weil bei nachträglicher Unmöglichkeit nie Schadensersatz geschuldet ist, sondern nur die Gegenleistung entfällt.', 'Falsch. Bei Vertretenmüssen gibt es SE nach §§ 280, 283.'],
 ['Ja, K muss sich aber den ersparten Kaufpreis anrechnen lassen, weil er sonst bereichert wäre.', 'Falsch. Die Anrechnung stimmt, eine Haftung besteht aber nicht.'],
 ['Nein, weil höhere Gewalt den Verzug rückwirkend beendet und damit § 287 S. 2 ausschließt.', 'Falsch. Einen solchen Rechtssatz gibt es nicht.'],
 ['Nein, weil der Schrank auch bei rechtzeitiger Lieferung zerstört worden wäre.', 'Richtig. § 287 S. 2 Hs. 2.']]);

S('5-281', A, 2, [
 ['Ja, weil die gesetzte Frist am Mittwoch abgelaufen war und F danach Schadensersatz statt der Leistung verlangen durfte.', 'Falsch. Die Frist war zu kurz.'],
 ['Nein, weil eine zu kurze Frist unwirksam ist und F eine neue hätte setzen müssen.', 'Falsch. Ergebnis richtig, Begründung falsch: Die zu kurze Frist setzt eine angemessene in Gang.'],
 ['Nein, weil die zu kurze Frist eine angemessene Frist auslöste, die noch lief.', 'Richtig. Angemessen zehn Tage, Deckungskauf vorher → § 281 I noch nicht erfüllt.'],
 ['Ja, weil im Verzug stets ohne Frist Schadensersatz statt der Leistung verlangt werden kann.', 'Falsch. § 281 I verlangt grundsätzlich eine Frist.'],
 ['Ja, aber nur zur Hälfte, weil F mit dem Deckungskauf zu früh gehandelt hat (§ 254 II).', 'Falsch. Der Anspruch besteht noch gar nicht.'],
 ['Nein, weil Mehrkosten eines Deckungskaufs nur beim Rücktritt nach § 325 ersatzfähig sind.', 'Falsch. Sie sind der typische Schaden statt der Leistung.']]);

S('5-323', A, 3, [
 ['Weder Rücktritt noch Schadensersatz, weil H nichts für den Streik kann.', 'Falsch. Der Rücktritt hängt nicht am Verschulden.'],
 ['Rücktritt und 1.200 €, weil das Vertretenmüssen nach § 280 I 2 vermutet wird und ein Streik zum Betriebsrisiko gehört.', 'Falsch. Die Vermutung ist widerlegt, wenn der Streik unvorhersehbar war.'],
 ['Nur Schadensersatz, weil sich Rücktritt und Schadensersatz ausschließen.', 'Falsch. § 325 erlaubt beides nebeneinander.'],
 ['Rücktritt wirksam; die 1.200 € gibt es nur bei Vertretenmüssen, das hier fehlt.', 'Richtig. § 323 I verschuldensunabhängig, § 281 braucht Vertretenmüssen (§ 280 I 2 widerlegt).'],
 ['Rücktritt erst nach einer zweiten, längeren Frist, weil H während des Streiks unverschuldet verhindert war.', 'Falsch. Eine angemessene Frist genügt.'],
 ['Rücktritt wirksam; die 1.200 € bekommt K verschuldensunabhängig als Ersatz vergeblicher Aufwendungen (§ 284).', 'Falsch. Mehrkosten eines Deckungskaufs sind keine vergeblichen Aufwendungen, und § 284 setzt ebenfalls Vertretenmüssen voraus.']]);

S('5-323iv', A, 4, [
 ['Nein, H muss bis zum 1. Dezember warten, weil ein Rücktritt eine fällige Leistung voraussetzt.', 'Falsch. § 323 IV erlaubt den Rücktritt schon vor Fälligkeit.'],
 ['Ja, aber erst nach Ablauf einer angemessenen Frist, die H trotz der Ankündigung setzen muss.', 'Falsch. Bei ernsthafter und endgültiger Verweigerung ist sie entbehrlich (§ 323 II Nr. 1).'],
 ['Nein, H kann sich nur durch Anfechtung wegen arglistiger Täuschung über die Lieferfähigkeit lösen.', 'Falsch. Es gibt keinen Anfechtungsgrund. Bei Vertragsschluss wurde nicht getäuscht.'],
 ['Ja, aber nur, wenn M die Einstellung der Produktion zu vertreten hat (§ 280 I 2).', 'Falsch. Der Rücktritt ist verschuldensunabhängig.'],
 ['Ja, schon vor Fälligkeit (§ 323 IV) und ohne Fristsetzung, weil M endgültig verweigert hat.', 'Richtig. § 323 IV (offensichtlicher Eintritt der Voraussetzungen), § 323 II Nr. 1 (ernsthafte und endgültige Verweigerung).'],
 ['Ja, H muss M aber den entgangenen Gewinn ersetzen, weil er vor Fälligkeit zurücktritt.', 'Falsch. Wer endgültig verweigert, bekommt keine Entschädigung.']]);

S('5-glv1', A, 0, [
 ['Ja, weil K im Annahmeverzug war und V nur für grobe Fahrlässigkeit haftet.', 'Richtig. §§ 293, 295, 300 I, 326 II 1 Alt. 2.'],
 ['Nein, weil V für die Fahrlässigkeit seines Mitarbeiters nach § 278 voll einstehen muss.', 'Falsch. § 278 rechnet zu, aber im Annahmeverzug genügt leichte Fahrlässigkeit nicht (§ 300 I).'],
 ['Nein, weil bei einer Bringschuld ein wörtliches Angebot nie genügt, auch nicht nach einer Ablehnung.', 'Falsch. Nach vorheriger Ablehnung genügt es (§ 295 S. 1).'],
 ['Ja, aber nur, wenn K den Brand verschuldet hat (§ 326 II 1 Alt. 1).', 'Falsch. Es genügt, dass der Untergang im Annahmeverzug eintritt.'],
 ['Nein, weil der Liefertermin bei der Ablehnung noch nicht erreicht war.', 'Falsch. Der Annahmeverzug trat jedenfalls mit dem 10. Mai ein, der Brand war am 12. Mai.'],
 ['Ja, und K schuldet zusätzlich Schadensersatz für den Tisch, weil er den Brand durch die Ablehnung mitverursacht hat.', 'Falsch. Im Annahmeverzug bleibt nur der Kaufpreisanspruch bestehen (§ 326 II 1 Alt. 2). Zusätzlichen Ersatz für den Tisch schuldet K nicht.']]);

S('5-glv2', A, 5, [
 ['Ja, weil K den Termin vergessen hat und F zur vereinbarten Zeit tatsächlich angeboten hat (§ 294).', 'Falsch. Annahmeverzug setzt einen leistungsfähigen Schuldner voraus.'],
 ['Ja, weil Annahmeverzug kein Verschulden voraussetzt und K nicht zu Hause war.', 'Falsch. Das stimmt, hilft aber nicht über § 297 hinweg.'],
 ['Nein, weil F die Leistung nur wörtlich hätte anbieten dürfen, nachdem K den Termin vergessen hatte.', 'Falsch. Ein tatsächliches Angebot ist der Regelfall (§ 294).'],
 ['Ja, aber nur zur Hälfte, weil F das Fehlen der Fliesen mitverschuldet hat (§ 254).', 'Falsch. Es besteht gar kein Anspruch.'],
 ['Nein, weil § 304 nur für Kaufverträge gilt und F einen Werkvertrag erfüllt.', 'Falsch. §§ 293 ff. gelten für alle Schuldverhältnisse.'],
 ['Nein, weil F ohne die Fliesen zur Zeit des Angebots nicht leisten konnte (§ 297).', 'Richtig.']]);

// ───────── VL 6 ─────────
S('6-sm1', A, 2, [
 ['Nein, weil S die Bastler-Klausel gesondert unterschrieben und damit die negative Beschaffenheit vereinbart hat.', 'Falsch. Beim Verbrauchsgüterkauf genügt eine Unterschrift unter AGB nicht (§ 476 I 2).'],
 ['Nein, weil bei einem acht Jahre alten Auto mit Getriebeschäden zu rechnen ist.', 'Falsch. Ein Totalausfall nach zwei Wochen ist kein üblicher Verschleiß.'],
 ['Ja, weil die Bastler-Klausel gegenüber S nicht nach § 476 I 2 vereinbart wurde.', 'Richtig. Eigens informieren + ausdrücklich und gesondert vereinbaren fehlt.'],
 ['Ja, aber nur, weil A die Klausel zusätzlich mündlich hätte erklären müssen (§ 476 I 2).', 'Falsch. Mündlich genügt nicht ohne Weiteres. Verlangt ist eine eigene, gesonderte Vereinbarung.'],
 ['Nein, weil gebrauchte Sachen, die öffentlich versteigert werden, nicht unter den Verbrauchsgüterkauf fallen.', 'Falsch. Eine Ausnahme gibt es nur für bestimmte öffentlich zugängliche Versteigerungen gebrauchter Sachen (§ 474 II 2). Eine Versteigerung fand hier nicht statt.'],
 ['Ja, aber S muss beweisen, dass das Getriebe bei Übergabe schon defekt war.', 'Falsch. Innerhalb eines Jahres gilt die Vermutung des § 477 I.']]);

S('6-sm2', A, 1, [
 ['Ja, weil S nicht geliefert hat, was geschuldet war, sodass ein Fall der Nichterfüllung vorliegt (§ 323 I).', 'Falsch. Die Falschlieferung steht einem Sachmangel gleich (§ 434 V).'],
 ['Nein, weil K S zuerst eine Frist zur Nacherfüllung hätte setzen müssen.', 'Richtig. Vorrang der Nacherfüllung (§§ 437, 439, 281 I, 323 I).'],
 ['Ja, weil bei einer Falschlieferung die Frist stets entbehrlich ist (§ 440).', 'Falsch. § 440 verlangt Verweigerung, Fehlschlag oder Unzumutbarkeit.'],
 ['Nein, K muss die falschen Schuhe behalten und kann nur mindern, weil eine Falschlieferung als Genehmigung gilt.', 'Falsch. Zuerst kann K Lieferung der richtigen Schuhe verlangen.'],
 ['Ja, aber nur die 160 € über den Rücktritt, nicht die 20 € Mehrkosten des Deckungskaufs.', 'Falsch. Ohne Frist gibt es weder Rücktritt noch Schadensersatz.'],
 ['Nein, weil Schuhe nach § 312g II vom Widerrufsrecht ausgenommen sind und K deshalb kein Lösungsrecht hat.', 'Falsch. Der Widerruf hat mit der Frage nichts zu tun, und Schuhe sind nicht ausgenommen.']]);

S('6-rm', A, 4, [
 ['F muss ausziehen, weil K als neuer Eigentümer nicht an den Mietvertrag gebunden ist.', 'Falsch. Kauf bricht nicht Miete (§ 566 I).'],
 ['F darf bleiben; K hat keine Rechte, weil ein Mietvertrag kein Mangel der Sache ist.', 'Falsch. Das Mietrecht eines Dritten ist ein Rechtsmangel (§ 435).'],
 ['F darf bleiben; das Haus hat einen Sachmangel, K kann nur mindern.', 'Falsch. Es liegt ein Rechtsmangel vor, und K hat alle Rechte aus § 437.'],
 ['F muss ausziehen, weil V „bezugsfrei“ zugesichert hat.', 'Falsch. Die Zusicherung bindet nur V, nicht die Mieter.'],
 ['F darf bleiben; K hat wegen eines Rechtsmangels die Rechte aus § 437 gegen V.', 'Richtig. § 566 I, § 435 S. 1, § 437.'],
 ['F darf bleiben; K kann den Vertrag nur nach § 123 anfechten.', 'Falsch. Eine Anfechtung ist möglich, aber nicht der einzige Weg.']]);

S('6-gef', A, 3, [
 ['In beiden Fällen muss H beweisen, weil die Gewährleistung zwei Jahre läuft.', 'Falsch. Die Beweislastumkehr gilt nur ein Jahr.'],
 ['In beiden Fällen muss V beweisen, weil sie den Mangel geltend macht.', 'Falsch. Beim ersten Gerät greift § 477 I.'],
 ['Beim ersten Gerät muss H beweisen; beim zweiten sind die Rechte schon verjährt.', 'Falsch. Nach 14 Monaten ist noch nicht verjährt (§ 438 I Nr. 3).'],
 ['Beim ersten Gerät muss H beweisen, beim zweiten muss V beweisen.', 'Richtig. § 477 I 1: Vermutung nur innerhalb eines Jahres.'],
 ['Beim ersten Gerät muss V beweisen, dass sie das Handy nicht fallen gelassen hat.', 'Falsch. Die Vermutung kehrt die Beweislast um.'],
 ['In beiden Fällen muss H beweisen, weil die Vermutung seit 2022 zwei Jahre gilt.', 'Falsch. Länger gilt die Vermutung nur bei Waren mit dauerhaft bereitgestellten digitalen Elementen (§ 477 II). Ein Display gehört nicht dazu.']]);

S('6-dig', A, 0, [
 ['Ja, fehlende Updates sind ein Mangel, für den E als Verkäufer einsteht (§ 475b IV).', 'Richtig. § 475b III Nr. 2, IV Nr. 2.'],
 ['Nein, Updates schuldet nur der Hersteller, weil E keinen Einfluss auf die Software hat.', 'Falsch. Das Gesetz legt die Pflicht dem Verkäufer auf.'],
 ['Ja, aber nur gegen den Hersteller aus § 327f, weil die Software ein eigenes digitales Produkt ist.', 'Falsch. Es geht um einen Kaufvertrag mit E, nicht um einen Vertrag über ein digitales Produkt mit dem Hersteller.'],
 ['Nein, weil der Fernseher bei Gefahrübergang einwandfrei war (§ 434 I).', 'Falsch. Die Aktualisierungspflicht wirkt über die Übergabe hinaus.'],
 ['Ja, aber nur, wenn E bei Vertragsschluss eine Update-Garantie gegeben hat (§ 443).', 'Falsch. Die Pflicht besteht von Gesetzes wegen.'],
 ['Nein, weil ein Smart-TV keine Ware mit digitalen Elementen ist.', 'Falsch. Ohne Software erfüllt er seine Funktionen nicht (§ 327a III).']]);

S('6-ne1', A, 5, [
 ['Nein, weil F die Fliesen nicht selbst verlegt hat und Einbaukosten nur beim eigenen Einbau zu tragen sind.', 'Falsch. § 439 III betrifft gerade den Einbau durch den Käufer.'],
 ['Nein, weil § 439 III nur beim Verbrauchsgüterkauf gilt und B als Unternehmer gekauft hat.', 'Falsch. Die Norm steht im allgemeinen Kaufrecht.'],
 ['Ja, aber nur, wenn F den Fehler der Fliesen zu vertreten hat (§§ 280 I, 276).', 'Falsch. Das wäre Schadensersatz. § 439 III ist Nacherfüllung.'],
 ['Ja, aber nur zur Hälfte, weil der Subunternehmer von B die Fliesen verlegt hat (§ 254).', 'Falsch. Eine Kürzung sieht das Gesetz nicht vor.'],
 ['Nein, B muss sich an den Hersteller halten, weil der Fehler in der Produktion entstanden ist.', 'Falsch. Anspruchsgegner der Nacherfüllung ist der Verkäufer.'],
 ['Ja, § 439 III gilt verschuldensunabhängig und auch, wenn beide Parteien Unternehmer sind.', 'Richtig.']]);

S('6-ne2', A, 2, [
 ['Ja, weil der Käufer die Art der Nacherfüllung frei wählt und der Verkäufer daran gebunden ist (§ 439 I).', 'Falsch. Das Wahlrecht ist durch § 439 IV begrenzt.'],
 ['Ja, weil ein Neuwagen mangelfrei sein muss und eine Reparatur ihn zum Unfallwagen macht.', 'Falsch. Die Mangelfreiheit begründet die Nacherfüllung, nicht ihre Art. Eine Reparatur macht das Auto nicht zum Unfallwagen.'],
 ['Nein, A darf die Neulieferung wegen unverhältnismäßiger Kosten verweigern.', 'Richtig. § 439 IV 1–3.'],
 ['Nein, weil bei geringfügigen Mängeln keine Nacherfüllung geschuldet ist.', 'Falsch. Auch geringe Mängel sind zu beseitigen.'],
 ['Nein, K kann aber sofort zurücktreten, weil A die gewählte Art der Nacherfüllung verweigert hat.', 'Falsch. Der Mangel ist unerheblich (§ 323 V 2).'],
 ['Ja, K muss aber für die bisherige Nutzung des Wagens eine Nutzungsentschädigung zahlen (§ 439 V).', 'Falsch. Beim Verbrauchsgüterkauf schuldet er keine (§ 475 III 1).']]);

S('6-ne3', A, 4, [
 ['Ja, aus § 637 analog, weil das Kaufrecht insoweit eine planwidrige Lücke hat.', 'Falsch. Eine Analogie lehnt der BGH ab. Im Kaufrecht fehlt eine Selbstvornahme.'],
 ['Ja, in Höhe der Kosten, die H selbst erspart hat (§ 326 II 2 analog).', 'Falsch. Auch das lehnt der BGH ab, weil sonst der Vorrang der Nacherfüllung umgangen würde.'],
 ['Ja, weil der Mangel unstreitig war und eine Frist deshalb bloße Förmelei gewesen wäre.', 'Falsch. Das ersetzt die Fristsetzung nicht.'],
 ['Ja, aber nur, wenn K den H nachträglich über die Reparatur informiert hat.', 'Falsch. Die Chance zur Nacherfüllung muss vorher bestehen.'],
 ['Nein, weder die 90 € noch die Kosten, die H durch die Selbstvornahme des K erspart hat (BGH).', 'Richtig. Im Kaufrecht gibt es keine Selbstvornahme, und § 326 II 2 analog lehnt der BGH ab (VIII ZR 100/04).'],
 ['Nein, weil Reparaturen unter 100 € als Bagatellen nicht ersatzfähig sind.', 'Falsch. Eine solche Bagatellgrenze gibt es nicht.']]);

S('6-wlv', A, 1, [
 ['Werkvertragsrecht gilt; R kann nach § 637 selbst reparieren lassen.', 'Falsch. Bewegliche Sachen, die hergestellt werden: Kaufrecht (§ 650).'],
 ['Kaufrecht gilt (§ 650); R hat wegen verspäteter Rüge (§ 377 HGB) keine Mängelrechte mehr.', 'Richtig. § 650 S. 1, § 381 II HGB, § 377 II HGB.'],
 ['Kaufrecht gilt; R kann Neulieferung verlangen, weil die Gewährleistung zwei Jahre läuft.', 'Falsch. § 377 HGB geht vor.'],
 ['Werkvertragsrecht gilt; S wählt die Art der Nacherfüllung.', 'Falsch. Es gilt Kaufrecht.'],
 ['Kaufrecht gilt, aber § 377 HGB nicht, weil die Bank erst hergestellt wurde.', 'Falsch. § 381 II HGB erstreckt § 377 HGB auf Werklieferungsverträge.'],
 ['Kaufrecht gilt; R hat noch Mängelrechte, weil Risse verdeckte Mängel sind.', 'Falsch. Die Risse waren schon bei Lieferung sichtbar.']]);

// ───────── VL 7 ─────────
S('7-rt', A, 0, [
 ['Kein Rücktritt; K kann aber mindern oder kleinen Schadensersatz verlangen.', 'Richtig. § 323 V 2, § 441 I 2, § 281 I 3.'],
 ['Rücktritt wirksam, weil der Händler die Nachbesserung verweigert hat und die Frist deshalb entbehrlich war.', 'Falsch. Die Verweigerung macht die Frist entbehrlich, nicht den Mangel erheblich.'],
 ['Kein Rücktritt; K hat überhaupt keine Rechte, weil der Mangel geringfügig ist.', 'Falsch. Minderung bleibt möglich.'],
 ['Rücktritt wirksam, weil bei Neuwagen jeder Mangel erheblich ist, der die vereinbarte Beschaffenheit verfehlt.', 'Falsch. Auch beim Neuwagen gilt die Interessenabwägung (Faustregel 5 %).'],
 ['Kein Rücktritt; K kann aber großen Schadensersatz verlangen, weil der Händler die Nachbesserung verweigert hat.', 'Falsch. Großer SE scheitert ebenso an der Unerheblichkeit (§ 281 I 3).'],
 ['Rücktritt wirksam, weil K eine angemessene Frist gesetzt hat und diese erfolglos abgelaufen ist.', 'Falsch. Die Frist allein genügt nicht.']]);

S('7-min', A, 3, [
 ['500 €, nämlich die Wertdifferenz.', 'Falsch. Die Minderung ist eine Verhältnisrechnung.'],
 ['200 €, nämlich Kaufpreis minus tatsächlicher Wert.', 'Falsch. Auch diese Subtraktion entspricht nicht § 441 III.'],
 ['333,33 €, nämlich ein Drittel der Wertdifferenz.', 'Falsch. Das Verhältnis wird auf den Kaufpreis angewandt, nicht auf die Wertdifferenz.'],
 ['Der Verkäufer muss 400 € erstatten.', 'Richtig. 1.200 € × 1.000 / 1.500 = 800 €. Erstattung 1.200 € − 800 € = 400 €.'],
 ['0 €, weil K ohnehin unter Wert gekauft hat.', 'Falsch. Auch ein gutes Geschäft wird verhältnismäßig gemindert.'],
 ['600 €, nämlich die Hälfte des Kaufpreises.', 'Falsch. Dafür gibt es keine Grundlage.']]);

S('7-se', K, 0, [
 ['1, 3 und 5', 'Richtig. Mangelfolgeschaden ohne Frist (1), Händler kann sich entlasten (3), Hersteller haftet daneben aus § 823 I (5).'],
 ['1, 2 und 4', 'Falsch. Aussagen 2 und 4 sind falsch.'],
 ['1 und 3', 'Falsch. Auch 5 stimmt.'],
 ['3, 4 und 5', 'Falsch. Aussage 4 ist falsch: 500 € Selbstbeteiligung (§ 11 ProdHaftG) → 100 €.'],
 ['2 und 5', 'Falsch. Aussage 2 ist falsch.'],
 ['1, 3, 4 und 5', 'Falsch. Aussage 4 ist falsch.']],
 ['K braucht für den Schaden an der Arbeitsplatte keine Frist zu setzen.',
  'H haftet aus §§ 437 Nr. 3, 280 I, weil der Hersteller sein Erfüllungsgehilfe ist.',
  'H kann sich entlasten, weil er originalverpackte Markenware nicht untersuchen muss.',
  'Nach dem ProdHaftG bekommt K vom Hersteller die vollen 600 €.',
  'Gegen den Hersteller kommt auch ein Anspruch aus § 823 I in Betracht.']);

S('7-aus', A, 3, [
 ['V haftet für nichts, weil die Gewährleistung wirksam ausgeschlossen ist.', 'Falsch. Bei Arglist kann er sich nicht auf den Ausschluss berufen (§ 444).'],
 ['V haftet für beides, weil Gewährleistungsausschlüsse unter Privatleuten unwirksam sind.', 'Falsch. Unter Privatleuten sind sie grundsätzlich wirksam.'],
 ['V haftet für den Rost, weil der Ausschluss nur verdeckte Mängel erfasst.', 'Falsch. K kannte den Rost (§ 442).'],
 ['V haftet für den Ölverlust, den er arglistig verschwieg (§ 444), nicht aber für den Rost.', 'Richtig. Rost: § 442 I 1. Ölverlust: § 444.'],
 ['V haftet für beides, weil er bei einem Mangel arglistig war.', 'Falsch. Die Arglist betrifft nur den Ölverlust.'],
 ['V haftet für den Ölverlust nur, wenn K den Vertrag anficht.', 'Falsch. Die Mängelrechte bestehen auch ohne Anfechtung.']]);

S('7-gar', A, 5, [
 ['K hat Ansprüche gegen H, weil die Garantie die Gewährleistung auf fünf Jahre verlängert.', 'Falsch. Die Herstellergarantie verpflichtet nur den Hersteller.'],
 ['K hat gegen niemanden Ansprüche, weil Garantie und Gewährleistung gemeinsam enden.', 'Falsch. Beide laufen unabhängig voneinander.'],
 ['K hat Ansprüche gegen H und den Hersteller als Gesamtschuldner.', 'Falsch. Gegen H ist verjährt.'],
 ['K hat einen Anspruch gegen den Hersteller aus § 437.', 'Falsch. Anspruchsgrundlage ist die Garantie (§ 443), nicht das Gewährleistungsrecht.'],
 ['K hat Ansprüche gegen H, weil die Vermutung des § 477 fünf Jahre gilt.', 'Falsch. § 477 gilt ein Jahr.'],
 ['Gegen H nicht mehr, gegen den Hersteller aus der Garantie.', 'Richtig. § 438 I Nr. 3 abgelaufen. Haltbarkeitsgarantie § 443 I, II.']]);

S('7-reg', A, 2, [
 ['Nein, H hätte G zuerst eine Frist setzen müssen.', 'Falsch. Der Aufwendungsersatz nach § 445a I verlangt keine Frist.'],
 ['Nein, weil G den Fehler nicht verschuldet hat.', 'Falsch. Aufwendungsersatz ist kein Schadensersatz.'],
 ['Ja, aus § 445a I, ohne Frist und ohne Verschulden.', 'Richtig.'],
 ['Ja, aber nur, wenn V selbst Ansprüche gegen G geltend macht.', 'Falsch. V hat keinen Vertrag mit G.'],
 ['Nein, H muss sich an den Hersteller halten.', 'Falsch. Regressgegner ist der eigene Lieferant.'],
 ['Ja, aber nur, wenn H den Mangel binnen zwei Wochen gerügt hat.', 'Falsch. § 377 HGB bleibt zwar anwendbar (§ 445a IV), verlangt aber „unverzüglich“, keine starre Zwei-Wochen-Frist.']]);

S('7-vj', A, 1, [
 ['Ja, seit März 2025, zwei Jahre nach der Ablieferung der Ziegel (§ 438 I Nr. 3).', 'Falsch. Für Baumaterial gelten fünf Jahre.'],
 ['Nein, für Baumaterial in einem Bauwerk gilt die Fünfjahresfrist (§ 438 I Nr. 2 b).', 'Richtig. Ablieferung März 2023 → Ablauf März 2028.'],
 ['Nein, weil die Regelverjährung von drei Jahren gilt (§ 195).', 'Falsch. § 438 ist die speziellere Norm.'],
 ['Ja, weil die fünf Jahre nur für Bauwerke selbst, nicht für das dafür gelieferte Baumaterial gelten.', 'Falsch. § 438 I Nr. 2 b erfasst gerade das Baumaterial.'],
 ['Nein, die Frist beginnt erst mit Entdeckung des Mangels.', 'Falsch. Sie beginnt mit Ablieferung (§ 438 II).'],
 ['Ja, weil B die Ziegel nicht selbst eingebaut hat.', 'Falsch. Wer einbaut, ist unerheblich.']]);

S('7-vgk1', A, 4, [
 ['Ja, weil bei Gebrauchtwagen ein Jahr gesetzlich vorgesehen ist.', 'Falsch. Gesetzlich sind es zwei Jahre. Verkürzung nur nach § 476 II.'],
 ['Ja, weil K die AGB unterschrieben hat.', 'Falsch. Die Formhürden des § 476 II fehlen.'],
 ['Nein, weil eine Verkürzung bei Gebrauchtwagen gegenüber Verbrauchern ganz verboten ist.', 'Falsch. Sie ist auf ein Jahr möglich, nur nicht so.'],
 ['Nein, und K muss den Mangel auch nicht beweisen (§ 477).', 'Falsch. Nach 18 Monaten gilt die Vermutung nicht mehr.'],
 ['Nein. Die Verkürzung ist unwirksam (§ 476 II), es gelten zwei Jahre.', 'Richtig.'],
 ['Ja, K kann aber noch mindern.', 'Falsch. Auch die Minderung wäre bei Verjährung ausgeschlossen (§ 438 V, § 218).']]);

S('7-vgk2', A, 0, [
 ['Nein, die Verjährung tritt frühestens am 15. Juni 2026 ein (§ 475e III).', 'Richtig. Vier Monate nach dem ersten Auftreten am 15. Februar.'],
 ['Ja, seit dem 1. März 2026, zwei Jahre nach der Ablieferung (§ 438 I Nr. 3).', 'Falsch. § 475e III verlängert die Frist.'],
 ['Nein, die Frist verlängert sich um zwei Jahre ab dem ersten Auftreten des Mangels.', 'Falsch. Die Verlängerung beträgt vier Monate.'],
 ['Nein, weil die Verjährung bei Verbrauchern erst ab Kenntnis beginnt.', 'Falsch. § 438 II knüpft an die Ablieferung an.'],
 ['Ja, weil V den Mangel innerhalb der zwei Jahre gegenüber dem Händler hätte rügen müssen.', 'Falsch. Eine Rügepflicht trifft Verbraucher nicht.'],
 ['Nein, die Verjährung tritt frühestens am 1. Juli 2026 ein (§ 475e III).', 'Falsch. Die vier Monate laufen ab dem ersten Auftreten, nicht ab dem regulären Fristende.']]);

S('7-dp', A, 3, [
 ['Nein, kostenlose Apps sind Gefälligkeiten ohne Rechtsbindung, weil K kein Geld gezahlt hat.', 'Falsch. Wer Daten bereitstellt, schließt einen Verbrauchervertrag (§ 312 Ia).'],
 ['Ja, aber nur nach Kaufrecht, weil die App als sonstiger Gegenstand verkauft wurde (§ 453).', 'Falsch. Für digitale Produkte gelten die §§ 327 ff.'],
 ['Nein, weil § 327 I einen Preis voraussetzt und K nur seine Daten angegeben hat.', 'Falsch. § 327 III stellt die Bereitstellung personenbezogener Daten einem Preis gleich.'],
 ['Ja, die §§ 327 ff. gelten auch, wenn K statt Geld seine Daten bereitstellt (§ 327 III).', 'Richtig. § 327 III, Mangel (§§ 327e, 327f), Rechte nach § 327i.'],
 ['Ja, aber nur, wenn K zusätzlich ein kostenpflichtiges Abo abgeschlossen hat.', 'Falsch. Daten genügen.'],
 ['Nein, weil ein fehlerhaftes Update kein Mangel der App ist, sondern ein neues Produkt.', 'Falsch. § 327f erfasst gerade Aktualisierungen.']]);

window.dispatchEvent(new Event('wpr-data'));
})();
