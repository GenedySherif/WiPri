(function () {
// Fallbuch Teil 2: VL 4–5 (Holztrattner, WiSe 2026/27)
const FB = (window.WPRK_FB = window.WPRK_FB || []);
const F = (id, vl, b, t, sv, q, hint, erg, weg, falle) => { if (!FB.some(x => x.id === id)) FB.push({ id, vl, b, t, sv, q, hint, erg, weg, falle }); };

// ───────── VL 4 ─────────
F('4-275a', 'VL 4', '§ 275 I–III', 'Der Ring im See',
 'V verkauft K einen antiken Ring für 1.000 €, Wert 1.500 €, Übergabe in einer Woche. Beim Spaziergang am Starnberger See spielt V unvorsichtig mit dem Ring, er fällt ins tiefe Wasser. Eine Bergung durch Taucher würde ca. 40.000 € kosten. K verlangt den Ring, hilfsweise Schadensersatz. V verweigert die Bergung.',
 'Muss V bergen lassen? Was kann K verlangen?',
 'Unmöglich ist die Bergung nicht. Welche Absätze des § 275 gibt es außer Absatz 1?',
 'V darf die Leistung nach § 275 II verweigern. K wird von der Kaufpreispflicht frei (§ 326 I 1) und kann Schadensersatz statt der Leistung verlangen (§§ 280 I, III, 283): 500 €.',
 ['Keine Unmöglichkeit nach § 275 I: Die Bergung ist technisch möglich.',
  '§ 275 II: Der Schuldner kann die Leistung verweigern, wenn der Aufwand in grobem Missverhältnis zum Leistungsinteresse des Gläubigers steht. 40.000 € zu einem Interesse von 1.500 € → grobes Missverhältnis. Dass V die Lage selbst verschuldet hat, ist zu berücksichtigen (§ 275 II 2), ändert hier aber nichts an der Krassheit.',
  'Gegenleistung: Mit der Einrede entfällt der Kaufpreisanspruch (§ 326 I 1).',
  'SE statt der Leistung (§§ 280 I, III, 283): V hat fahrlässig gehandelt (§ 276). Schaden: Wert 1.500 € minus ersparter Kaufpreis 1.000 € = 500 €.'],
 '„Möglich ist möglich“ führt zur Bergungspflicht. § 275 II begrenzt sie, und § 283 gleicht den Nachteil des Käufers aus.');

F('4-275b', 'VL 4', '§ 275 I–III', 'Die Sängerin und das kranke Kind',
 'Sopranistin S ist für ein Konzert am Samstag gebucht, Gage 5.000 €. Am Freitag wird ihr Kind mit lebensgefährlichen Symptomen in die Klinik eingeliefert. S sagt ab und bleibt bei ihrem Kind. Der Veranstalter V verlangt Schadensersatz für die erstatteten Eintrittsgelder.',
 'Musste S singen? Schuldet sie Schadensersatz oder bekommt sie die Gage?',
 'Geht es um ein Hindernis der Leistung selbst oder um die Zumutbarkeit für die Person?',
 'S durfte nach § 275 III die Leistung verweigern. Sie bekommt keine Gage (§ 326 I 1) und schuldet keinen Schadensersatz, weil sie das Hindernis nicht zu vertreten hat.',
 ['§ 275 III: Bei einer persönlich zu erbringenden Leistung kann der Schuldner verweigern, wenn sie ihm unter Abwägung des Hindernisses mit dem Leistungsinteresse des Gläubigers nicht zugemutet werden kann.',
  'Konzert = persönliche Leistung. Lebensgefahr des eigenen Kindes wiegt schwerer als das Interesse an einem Konzerttermin → unzumutbar.',
  '§ 275 III ist eine Einrede: S muss sich darauf berufen, was mit der Absage geschehen ist.',
  'Gegenleistung entfällt (§ 326 I 1). SE (§§ 280 I, III, 283) setzt Vertretenmüssen voraus. Die Erkrankung des Kindes hat S nicht zu vertreten (§ 280 I 2 widerlegt).'],
 'Die Leistung wäre objektiv möglich gewesen. § 275 III greift trotzdem, aber nur auf Einrede und ohne Gage.');

F('4-gat1', 'VL 4', 'Stück- & Gattungsschuld, Konkretisierung', 'Verlorener Wein auf dem Postweg',
 'Weinhändler W in Würzburg verkauft dem Münchner Restaurant R-GmbH 60 Flaschen Silvaner einer bestimmten Lage und Jahrgang aus seinem Großbestand. Vereinbart ist Versand an R auf R’s Wunsch. W übergibt die ordnungsgemäß verpackten Kartons einem zuverlässigen Paketdienst. Die Kartons gehen ohne W’s Verschulden verloren. R verlangt Neulieferung und weigert sich zu zahlen.',
 'Muss W neu liefern? Muss R zahlen?',
 'Welche Schuldart (Hol-, Bring-, Schickschuld) liegt vor, und wann konkretisiert sie sich? Wer trägt beim Versendungskauf die Preisgefahr?',
 'W muss nicht neu liefern (Konkretisierung, § 275 I). R muss trotzdem zahlen, weil die Preisgefahr mit Übergabe an den Paketdienst übergegangen ist (§ 447 I).',
 ['Gattungsschuld (§ 243 I): Wein einer Lage und eines Jahrgangs aus einem Großbestand, nach allgemeinen Merkmalen bestimmt.',
  'Versand auf Verlangen des Käufers, Leistungsort bleibt beim Verkäufer → Schickschuld. Konkretisierung (§ 243 II) mit Auswahl mittlerer Art und Güte und Übergabe an die Transportperson.',
  'Danach beschränkt sich die Schuld auf genau diese Flaschen. Sie sind untergegangen → W frei nach § 275 I.',
  'Preisgefahr: Grundsätzlich entfällt der Kaufpreis (§ 326 I 1). Beim Versendungskauf geht die Gefahr aber mit Auslieferung an die Transportperson auf den Käufer über (§ 447 I) → R muss zahlen.',
  'Gegenprobe: Wäre R Verbraucher, gälte § 447 nicht (§ 475 II). Die Preisgefahr bliebe bis zur Übergabe beim Verkäufer.'],
 'Die Gattungsschuld suggeriert „W muss sich neu eindecken“. Durch die Konkretisierung ist es keine Gattungsschuld mehr, und der Versendungskauf verlagert die Preisgefahr.');

F('4-gat2', 'VL 4', 'Stück- & Gattungsschuld, Konkretisierung', 'Hafer aus eigener Ernte',
 'Landwirt L verkauft der Mühle M im Frühjahr „10 Tonnen Hafer aus meiner diesjährigen Ernte“ zu 3.000 €. Ein Hagelsturm vernichtet im Juli die gesamte Ernte des L. Der Marktpreis für Hafer liegt inzwischen bei 4.500 € für 10 Tonnen. M verlangt, L solle den Hafer anderswo kaufen und liefern.',
 'Muss L sich Hafer am Markt beschaffen?',
 'Aus welcher Menge wird geschuldet: aus allem Hafer der Welt oder aus einem begrenzten Vorrat?',
 'Nein. Es liegt eine beschränkte Gattungsschuld (Vorratsschuld) vor. Mit dem Untergang der ganzen Ernte ist die Leistung unmöglich (§ 275 I). L wird frei, M muss nicht zahlen (§ 326 I 1).',
 ['Gattungsschuld: Hafer nach Menge bestimmt. Beschränkt wird die Gattung aber durch die Vereinbarung „aus meiner diesjährigen Ernte“.',
  'Bei einer Vorratsschuld besteht keine Beschaffungspflicht über den Vorrat hinaus. Geht der ganze Vorrat unter, ist die Leistung unmöglich (§ 275 I).',
  'Vertretenmüssen: Ein Hagelsturm ist nicht zu vertreten, ein Beschaffungsrisiko (§ 276 I) für Fremdware hat L gerade nicht übernommen → kein SE.',
  'Gegenleistung entfällt (§ 326 I 1).'],
 'Hätte L einfach „10 Tonnen Hafer“ verkauft, müsste er am Markt kaufen, auch mit Verlust. Die Beschränkung auf die eigene Ernte ändert das Ergebnis.');

F('4-gat3', 'VL 4', 'Hol-, Bring- & Schickschuld', 'Abholbereit – und dann der Brand',
 'K kauft bei Baustoffhändler B 200 Säcke Zement, „abzuholen bei B ab dem 10. Mai“. B stellt die 200 Säcke am 8. Mai gekennzeichnet in eine Lagerhalle und teilt K mit: „Ihr Zement steht ab sofort zur Abholung bereit.“ K will wie geplant am 12. Mai kommen. Am 9. Mai brennt die Halle durch Blitzschlag ab.',
 'Muss B neue Säcke liefern? Muss K zahlen?',
 'Wann konkretisiert sich eine Holschuld, und was geht dabei über: Leistungsgefahr oder Preisgefahr?',
 'B muss nicht neu liefern, weil die Schuld sich konkretisiert hat (§§ 243 II, 275 I). K muss aber auch nicht zahlen (§ 326 I 1), weil er weder die Sache erhalten hat noch in Annahmeverzug war.',
 ['Holschuld: Leistungsort beim Verkäufer (Vereinbarung, im Übrigen § 269 I). Konkretisierung: Aussondern, Bereitstellen und Benachrichtigen des Gläubigers. Das ist am 8. Mai geschehen.',
  'Die Schuld beschränkt sich auf die 200 bereitgestellten Säcke. Sie sind untergegangen → B frei (§ 275 I).',
  'Die Konkretisierung verschiebt nur die Leistungsgefahr. Die Preisgefahr bleibt beim Verkäufer, bis ein Übergangstatbestand greift: Übergabe (§ 446), Versendung (§ 447), Annahmeverzug (§ 326 II 1 Alt. 2).',
  'K war nicht im Annahmeverzug: Abholung war erst ab dem 10. Mai vereinbart. → Kaufpreis entfällt (§ 326 I 1).'],
 'Wer beim Untergang nach Konkretisierung „Käufer zahlt“ annimmt, verwechselt Leistungs- und Preisgefahr.');

F('4-fix', 'VL 4', 'Fixgeschäft', 'Das Taxi zum Flughafen',
 'F bestellt beim Taxiunternehmen T für 5:00 Uhr ein Taxi zum Flughafen, Abflug 7:00 Uhr, Fahrpreis 70 €. Der Fahrer verschläft und kommt um 6:30 Uhr. F erreicht den Flug nicht mehr und muss ein Ersatzticket für 280 € kaufen. T verlangt die 70 € für die nun angebotene Fahrt. F verweigert die Fahrt.',
 'Muss F die 70 € zahlen? Bekommt er die 280 €?',
 'Hat eine Fahrt zum Flughafen nach dem Abflug für F noch einen Sinn?',
 'F muss nichts zahlen: Es liegt ein absolutes Fixgeschäft vor, die Leistung ist mit Zeitablauf unmöglich geworden (§§ 275 I, 326 I 1). Die 280 € bekommt er als Schadensersatz statt der Leistung (§§ 280 I, III, 283, 278).',
 ['Absolutes Fixgeschäft: Die Einhaltung der Leistungszeit ist so wesentlich, dass eine verspätete Leistung keine Erfüllung mehr ist. Die Fahrt um 5:00 Uhr sollte den Flug um 7:00 Uhr erreichen.',
  'Mit Ablauf des Zeitpunkts → Unmöglichkeit (§ 275 I). Eine Nachfrist wäre sinnlos, Verzugsrecht passt nicht.',
  'Gegenleistung entfällt (§ 326 I 1).',
  'SE statt der Leistung (§§ 280 I, III, 283): Verschulden des Fahrers wird T nach § 278 zugerechnet. Schaden: Mehrkosten des Ersatzfluges 280 €.'],
 'Die Verspätung wirkt wie „Verzug“. Weil die Leistung danach sinnlos ist, ist es aber ein Fall der Unmöglichkeit.');

F('4-vert', 'VL 4', 'Vertretenmüssen (§§ 276, 278)', 'Die ausverkaufte Konsole',
 'Elektronikhändler E verkauft K eine neue Spielkonsole „Modell X, 1 TB“ für 499 €, Lieferung in zwei Wochen. Sein Großhändler fällt überraschend aus. Andere Anbieter haben noch Restbestände, aber nur zu 650 €. E liefert nicht und meint, ihn treffe kein Verschulden. K setzt eine angemessene Frist, die erfolglos abläuft, und kauft die Konsole bei einem Dritten für 650 €.',
 'Muss E die 151 € Mehrkosten ersetzen?',
 'Lies § 276 I 1 bis zum Ende. Was übernimmt, wer eine Gattungssache verkauft?',
 'Ja. E hat mit dem Verkauf einer Gattungssache ein Beschaffungsrisiko übernommen und haftet für sein Unvermögen ohne Verschulden. Anspruch auf 151 € aus §§ 280 I, III, 281.',
 ['Schuldverhältnis (+), fällige Leistung nicht erbracht (+), angemessene Frist erfolglos (+).',
  'Vertretenmüssen: Grundsätzlich Vorsatz und Fahrlässigkeit (§ 276 I 1). Eine strengere Haftung ergibt sich aber „aus dem Inhalt des Schuldverhältnisses, insbesondere aus der Übernahme eines Beschaffungsrisikos“.',
  'Wer eine marktgängige Gattungssache verkauft, übernimmt typischerweise das Risiko, sie beschaffen zu können, solange sie am Markt erhältlich ist. Sie war es (zu 650 €).',
  'Schaden: Mehrkosten des Deckungskaufs 650 € − 499 € = 151 €.'],
 '„Kein Verschulden, also kein SE“ übersieht die Garantiehaftung des Gattungsschuldners für die Beschaffung.');

F('4-311a', 'VL 4', 'Folgen: SE (§§ 280, 283, 311a)', 'Das abgebrannte Ferienhaus',
 'V vermietet K von München aus ein Ferienhaus an der Ostsee für August, Miete 2.000 €. Am Tag vor Vertragsschluss ist das Haus durch einen Kurzschluss abgebrannt. V konnte davon nichts wissen, sein Hausmeister vor Ort hat ihn erst eine Woche später informiert. K hat bereits Fahrkarten für 180 € gekauft und verlangt Ersatz.',
 'Ist der Vertrag wirksam? Bekommt K die 180 €?',
 'Wann trat das Hindernis ein, vor oder nach Vertragsschluss? Was sagt § 311a II 2?',
 'Der Vertrag ist trotz anfänglicher Unmöglichkeit wirksam (§ 311a I). K muss keine Miete zahlen (§ 326 I 1). Die 180 € bekommt er nicht, weil V die Unmöglichkeit weder kannte noch kennen musste (§ 311a II 2).',
 ['Anfängliche Unmöglichkeit: Das Hindernis bestand schon bei Vertragsschluss.',
  '§ 311a I: Das steht der Wirksamkeit des Vertrags nicht entgegen. Die Leistungspflicht entfällt aber (§ 275 I), ebenso die Gegenleistung (§ 326 I 1).',
  'Anspruchsgrundlage für SE oder Aufwendungsersatz (§ 284) ist § 311a II. Ausgeschlossen, wenn der Schuldner das Hindernis nicht kannte und seine Unkenntnis nicht zu vertreten hat (§ 311a II 2).',
  'V konnte nichts wissen → kein Ersatz der Fahrkarten. Dass der Hausmeister zu spät informiert hat, betrifft die Zeit nach Vertragsschluss und begründet keine Kenntnis vorher.'],
 'Viele halten einen Vertrag über eine nicht mehr existierende Sache für nichtig. § 311a I sagt das Gegenteil, und der Ersatzanspruch hängt allein an der Kenntnis.');

F('4-285', 'VL 4', 'Folgen: Surrogat (§ 285)', 'Die großzügige Versicherung',
 'V verkauft K seinen Oldtimer für 20.000 €, Übergabe in einer Woche. Vor der Übergabe rammt ein unbekannter Lkw-Fahrer den ordnungsgemäß geparkten Wagen, Totalschaden. Die Vollkaskoversicherung zahlt V den Wiederbeschaffungswert von 24.000 €. K hat noch nichts gezahlt.',
 'Was kann K tun, und was lohnt sich für ihn?',
 'Kann K etwas von dem verlangen, was V wegen des Untergangs bekommen hat? Was passiert dann mit dem Kaufpreis?',
 'K kann die 24.000 € Versicherungsleistung nach § 285 I herausverlangen, muss dann aber den Kaufpreis von 20.000 € zahlen (§ 326 III). Unterm Strich gewinnt K 4.000 €. Ohne § 285 bekäme er nichts und zahlte nichts.',
 ['Unmöglichkeit nach § 275 I, V ist frei. SE scheidet aus: V hat den Untergang nicht zu vertreten.',
  '§ 285 I: Erlangt der Schuldner infolge des Umstands, der ihn nach § 275 befreit, einen Ersatz oder Ersatzanspruch, kann der Gläubiger dessen Herausgabe verlangen. Die Versicherungsleistung ist ein solcher Ersatz (stellvertretendes commodum).',
  'Verlangt K das Surrogat, bleibt er zur Gegenleistung verpflichtet (§ 326 III 1). Ist das Surrogat weniger wert, mindert sich der Preis entsprechend (§ 326 III 2, § 441 III).',
  'Vergleich: § 285 bringt 24.000 € − 20.000 € = +4.000 €. Ohne § 285: frei von der Zahlungspflicht (§ 326 I 1), aber ohne Auto.'],
 'Weil V nichts zu vertreten hat, scheint K leer auszugehen. § 285 setzt kein Verschulden voraus.');

F('4-284', 'VL 4', 'Folgen: Aufwendungsersatz (§ 284)', 'Gutachten für ein Auto, das nie kommt',
 'K kauft von V einen Oldtimer für 15.000 €, das entspricht genau dem Marktwert. Im Vertrauen auf die Lieferung lässt K ein Wertgutachten erstellen (300 €) und schließt eine Oldtimer-Versicherung mit nicht erstattungsfähiger Jahresprämie ab (200 €). V verkauft und übereignet das Auto danach für 18.000 € an einen Dritten, der es nicht herausgibt.',
 'Welchen Ersatz kann K verlangen?',
 'Hat K einen Schaden im Sinne der Differenzhypothese? Wenn nicht: gibt es eine Alternative zum Schadensersatz?',
 'K kann nach §§ 284, 283 (bzw. § 280 III) Ersatz seiner vergeblichen Aufwendungen von 500 € verlangen. Der Schadensersatz statt der Leistung bringt ihm nichts, weil Wert und Preis gleich sind. Daneben kann er nach § 285 die 18.000 € Erlös verlangen (gegen Zahlung der 15.000 €).',
 ['Unmöglichkeit (§ 275 I, Unvermögen): V hat das Auto übereignet, der Dritte gibt es nicht heraus. V hat das zu vertreten.',
  'SE statt der Leistung (§§ 280 I, III, 283): Schaden = Wert 15.000 € − ersparter Kaufpreis 15.000 € = 0 €. Die Aufwendungen sind kein Schaden, weil sie auch bei Erfüllung angefallen wären.',
  '§ 284: Anstelle des SE statt der Leistung kann der Gläubiger Ersatz der Aufwendungen verlangen, die er im Vertrauen auf die Leistung billigerweise gemacht hat. Gutachten und Versicherungsprämie → 500 €.',
  'Wahlrecht: § 284 nur „anstelle“ des SE statt der Leistung. Unabhängig davon besteht § 285 auf den Veräußerungserlös (stellvertretendes commodum, auch rechtsgeschäftlich erlangt), dann bleibt K zur Zahlung verpflichtet (§ 326 III).'],
 'Ein Schaden von 0 € heißt nicht „kein Ersatz“. § 284 erfasst gerade frustrierte Aufwendungen.');

F('4-446', 'VL 4', 'Gefahrübergang (§§ 446, 447)', 'Das Pferd unter Eigentumsvorbehalt',
 'Reiterin K kauft vom Züchter Z ein Pferd für 12.000 € unter Eigentumsvorbehalt, zahlbar in vier Raten. Z übergibt das Pferd am 1. Juni. Am 2. Juni wird es auf K’s Koppel vom Blitz getroffen und stirbt. K meint: „Das Pferd gehörte noch Z, also trägt er den Verlust.“',
 'Muss K die Raten weiterzahlen?',
 'Knüpft der Gefahrübergang an das Eigentum oder an die Übergabe?',
 'Ja. Die Preisgefahr ist mit der Übergabe auf K übergegangen (§ 446 S. 1). Auf das Eigentum kommt es nicht an.',
 ['Z ist nach § 275 I von der Pflicht zur Eigentumsverschaffung frei. Grundsätzlich entfiele damit auch die Gegenleistung (§ 326 I 1).',
  'Ausnahme § 446 S. 1: Mit der Übergabe der verkauften Sache geht die Gefahr des zufälligen Untergangs auf den Käufer über.',
  'Übergabe am 1. Juni → Gefahrübergang. Dass Z wegen des Eigentumsvorbehalts noch Eigentümer war, ist für § 446 unerheblich.',
  'K muss den Kaufpreis vollständig zahlen.'],
 'Eigentumsvorbehalt verleitet zu „Gefahr beim Eigentümer“. Das Kaufrecht verknüpft die Gefahr aber mit dem Besitz.');

// ───────── VL 5 ─────────
F('5-vz1', 'VL 5', 'Schuldnerverzug: Voraussetzungen', 'Lieferung zwei Wochen nach Abruf',
 'Der Caterer C-GmbH hat mit der Großbäckerei B-GmbH vereinbart: „Lieferung von 2.000 Brötchen zwei Wochen nach Abruf.“ C ruft am 3. Oktober ab. B liefert nicht. C mahnt nicht, verlangt aber ab dem 18. Oktober Ersatz der Kosten für eine teurere Ersatzbeschaffung, die ihr täglich entstehen.',
 'Ist B ohne Mahnung in Verzug geraten?',
 'Kann man den Leistungszeitpunkt hier vom Kalender aus berechnen?',
 'Ja. B ist ab dem 18. Oktober ohne Mahnung in Verzug (§ 286 II Nr. 2), weil sich die Leistungszeit von einem Ereignis (Abruf) an nach dem Kalender berechnen lässt.',
 ['Verzug (§ 286 I): fälliger, durchsetzbarer Anspruch, Nichtleistung, grundsätzlich Mahnung, Vertretenmüssen (§ 286 IV).',
  'Mahnung entbehrlich nach § 286 II Nr. 2: Der Leistung geht ein Ereignis voraus, und eine angemessene Zeit ist so bestimmt, dass sie sich von dem Ereignis an nach dem Kalender berechnen lässt.',
  'Ereignis: Abruf am 3. Oktober. Frist von zwei Wochen: angemessen für Brötchen → Ende am 17. Oktober (§§ 187 I, 188 II). Verzug ab 18. Oktober.',
  'Vertretenmüssen wird vermutet (§ 286 IV). Ersatz der Verzögerungsschäden nach §§ 280 I, II, 286.'],
 'Ohne festes Datum denken viele: Mahnung nötig. Nr. 2 lässt auch ein berechenbares Datum genügen.');

F('5-vz2', 'VL 5', 'Schuldnerverzug: Voraussetzungen', 'Die Rechnung ohne Hinweis',
 'Elektriker E repariert bei der Rentnerin R die Haustürklingel und schickt ihr am 1. März eine Rechnung über 400 €, ohne weiteren Text. R zahlt nicht. Am 15. April verlangt E 400 € plus Verzugszinsen seit dem 31. März: „Nach 30 Tagen ist jeder in Verzug.“',
 'Ist R in Verzug?',
 'Lies § 286 III 1 bis zum Ende. Gilt die 30-Tage-Regel gegenüber Verbrauchern ohne Weiteres?',
 'Nein. Gegenüber einer Verbraucherin greift die 30-Tage-Regel nur, wenn die Rechnung auf diese Folge besonders hinweist. Ohne Hinweis und ohne Mahnung ist R nicht in Verzug, Verzugszinsen schuldet sie nicht.',
 ['Fälliger Anspruch auf 400 € (§§ 631, 641) (+).',
  'Keine Mahnung, kein Kalenderdatum (§ 286 I, II).',
  '§ 286 III 1: Der Schuldner einer Entgeltforderung kommt spätestens in Verzug, wenn er nicht innerhalb von 30 Tagen nach Fälligkeit und Zugang einer Rechnung leistet. Gegenüber einem Verbraucher gilt das nur, wenn auf diese Folgen in der Rechnung besonders hingewiesen worden ist.',
  'R ist Verbraucherin (§ 13), kein Hinweis → kein Verzug. E muss mahnen. Erst ab Zugang der Mahnung laufen Zinsen.'],
 '„30 Tage nach Rechnung“ gilt unter Unternehmern automatisch. Beim Verbraucher fehlt der Hinweis oft, und dann greift die Regel nicht.');

F('5-vz3', 'VL 5', 'Schuldnerverzug: Folgen', 'Die Anwaltskosten der ersten Mahnung',
 'Großhändler G stellt der M-GmbH am 1. März eine Rechnung über 2.000 €, „zahlbar sofort“. Ein Kalenderdatum ist nicht vereinbart. M zahlt nicht. Am 8. März beauftragt G einen Anwalt, der die erste Mahnung schreibt (Kosten 150 €). M zahlt daraufhin umgehend, lehnt die 150 € aber ab.',
 'Muss M die Anwaltskosten ersetzen?',
 'War M schon in Verzug, als der Anwalt beauftragt wurde?',
 'Nein. Verzug trat erst mit der Mahnung des Anwalts ein (die 30 Tage waren noch nicht vorbei). Kosten, die vor Verzugseintritt entstehen, sind kein Verzögerungsschaden.',
 ['Verzögerungsschaden nach §§ 280 I, II, 286 setzt voraus, dass der Schaden durch den Verzug verursacht wurde, also nach Verzugseintritt entstanden ist.',
  'Verzugseintritt: Kein Kalenderdatum, die 30-Tage-Frist des § 286 III war nach einer Woche noch nicht abgelaufen → Verzug erst durch Mahnung, also mit Zugang des Anwaltsschreibens.',
  'Die Beauftragung des Anwalts lag davor. Die Kosten der verzugsbegründenden Erstmahnung sind daher nicht ersatzfähig.',
  'Anders, wenn M schon in Verzug war (z. B. Kalendertermin) oder wenn V selbst gemahnt und erst danach den Anwalt eingeschaltet hätte.'],
 'Anwaltskosten wirken wie typischer Verzugsschaden. Für die erste, verzugsbegründende Mahnung sind sie es gerade nicht.');

F('5-zins', 'VL 5', 'Schuldnerverzug: Folgen', 'Zinsen und Pauschale unter Unternehmern',
 'Die Druckerei D-GmbH schuldet dem Papierhändler P e. K. 10.000 € aus einer Lieferung. D ist seit dem 1. Februar in Verzug. P beauftragt am 1. März einen Anwalt (Kosten 600 €) und verlangt Zahlung, Verzugszinsen, die 40-€-Pauschale und die Anwaltskosten. D meint, Verzugszinsen betrügen nur 5 Prozentpunkte über dem Basiszinssatz, und die Pauschale sei „zusätzlich zu den Anwaltskosten“ unzulässig.',
 'Welcher Zinssatz gilt, und bekommt P Pauschale und Anwaltskosten nebeneinander?',
 'Lies § 288 II und § 288 V 3.',
 'Zinssatz 9 Prozentpunkte über dem Basiszinssatz (§ 288 II). Die 40 € stehen P zu, werden aber auf die Anwaltskosten angerechnet (§ 288 V 3). Ergebnis: 600 € Anwaltskosten insgesamt, nicht 640 €.',
 ['Verzug (+) seit 1. Februar.',
  'Zinssatz: Bei Rechtsgeschäften, an denen kein Verbraucher beteiligt ist, beträgt der Zinssatz für Entgeltforderungen 9 Prozentpunkte über dem Basiszinssatz (§ 288 II). Die 5 Prozentpunkte des § 288 I gelten sonst.',
  'Pauschale: Gläubiger einer Entgeltforderung gegenüber einem Schuldner, der kein Verbraucher ist → 40 € (§ 288 V 1).',
  'Anwaltskosten nach Verzugseintritt sind Verzögerungsschaden (§§ 280 I, II, 286). Die Pauschale ist aber auf einen geschuldeten Schadensersatz anzurechnen, soweit er in Kosten der Rechtsverfolgung begründet ist (§ 288 V 3).'],
 'Die Pauschale ist kein „Bonus“ obendrauf, wenn ohnehin Rechtsverfolgungskosten ersetzt werden.');

F('5-287', 'VL 5', 'Schuldnerverzug: Folgen', 'Hochwasser in der ganzen Stadt',
 'Antiquitätenhändler V ist mit der Lieferung eines Barockschranks an K seit zwei Wochen in Verzug. Dann zerstört ein Jahrhunderthochwasser V’s Laden samt Schrank. Dasselbe Hochwasser hat auch das Erdgeschoss von K’s Wohnung in derselben Straße überflutet, wo der Schrank hätte stehen sollen. K verlangt Schadensersatz statt der Leistung.',
 'Haftet V für den zufälligen Untergang?',
 'Lies § 287 S. 2 bis zum Ende: Gibt es einen Entlastungsweg?',
 'Nein. V haftet zwar im Verzug grundsätzlich auch für Zufall (§ 287 S. 2), aber nicht, wenn der Schaden auch bei rechtzeitiger Leistung eingetreten wäre. Der Schrank wäre in K’s Wohnung ebenfalls zerstört worden.',
 ['Unmöglichkeit (§ 275 I) durch Hochwasser → Leistungspflicht entfällt, auch der Kaufpreis (§ 326 I 1).',
  'SE statt der Leistung (§§ 280 I, III, 283) setzt Vertretenmüssen voraus. Ein Hochwasser ist nicht zu vertreten.',
  'Haftungsverschärfung im Verzug (§ 287 S. 2): Der Schuldner haftet wegen der Leistung auch für Zufall, es sei denn, der Schaden wäre auch bei rechtzeitiger Leistung eingetreten.',
  'Bei rechtzeitiger Lieferung hätte der Schrank in K’s überfluteter Wohnung gestanden → Schaden wäre ebenso eingetreten → keine Haftung.'],
 '„Im Verzug haftet man für Zufall“ ist nur die halbe Norm. Der zweite Halbsatz kann die Haftung wieder ausschließen.');

F('5-281', 'VL 5', 'SE statt der Leistung (§ 281)', 'Zwei Tage Frist für eine Sondermaschine',
 'Die Metallbau M-GmbH ist mit der Lieferung einer Spezialfräse an die F-GmbH in Verzug. F setzt am Montag eine Frist „bis Mittwoch“. Angemessen wären wegen der Komplexität zehn Tage. Am Donnerstag kauft F die Fräse bei einem anderen Hersteller 8.000 € teurer und verlangt diese Mehrkosten von M.',
 'Bekommt F die 8.000 €?',
 'Was passiert mit einer zu kurz gesetzten Frist?',
 'Nein, jedenfalls nicht so. Die zu kurze Frist ist nicht unwirksam, sondern setzt eine angemessene Frist von zehn Tagen in Gang. Am Donnerstag war auch diese noch nicht abgelaufen, die Voraussetzungen des § 281 I lagen beim Deckungskauf noch nicht vor.',
 ['SE statt der Leistung (§§ 280 I, III, 281): fällige Leistung nicht erbracht, erfolglose angemessene Frist, Vertretenmüssen.',
  'Eine zu kurze Frist ist nicht wirkungslos. Sie setzt nach h. M. eine angemessene Frist in Lauf, solange der Gläubiger nicht zu erkennen gibt, dass er nur die kurze Frist akzeptiert.',
  'Angemessen: zehn Tage → Ablauf frühestens am Donnerstag der folgenden Woche. Deckungskauf am Donnerstag der ersten Woche → vor Fristablauf.',
  'Ausnahme nur, wenn die Frist entbehrlich war (§ 281 II), z. B. bei ernsthafter und endgültiger Verweigerung. Dafür spricht hier nichts.'],
 'Zwei Fehler: Die kurze Frist ist nicht „unwirksam“, aber sie ist auch nicht schon abgelaufen.');

F('5-323', 'VL 5', 'Rücktritt (§ 323)', 'Streik beim Zulieferer',
 'Händler H soll K bis 1. Juni eine Küche liefern. Wegen eines unvorhersehbaren Streiks beim Hersteller kann H nicht liefern. K setzt eine Frist von drei Wochen, die erfolglos abläuft. K erklärt den Rücktritt und verlangt zusätzlich 1.200 € Mehrkosten für eine teurere Küche. H meint, er könne nichts dafür, deshalb sei weder Rücktritt noch Schadensersatz möglich.',
 'Ist der Rücktritt wirksam? Bekommt K die 1.200 €?',
 'Welche der beiden Rechtsfolgen setzt Verschulden voraus?',
 'Der Rücktritt ist wirksam, denn § 323 setzt kein Vertretenmüssen voraus. Die 1.200 € bekommt K nur, wenn H die Verzögerung zu vertreten hat. Hier konnte H sich entlasten (Annahme: kein übernommenes Beschaffungsrisiko für eine individuelle Küche).',
 ['Rücktritt (§ 323 I): gegenseitiger Vertrag, fällige Leistung nicht erbracht, angemessene Frist erfolglos. Kein Vertretenmüssen nötig.',
  'Rücktrittserklärung (§ 349) → Rückgewährschuldverhältnis (§ 346).',
  'SE statt der Leistung (§§ 280 I, III, 281): Vertretenmüssen wird vermutet (§ 280 I 2). Ein unvorhersehbarer Streik bei einem Drittunternehmen kann die Vermutung widerlegen.',
  'Rücktritt und Schadensersatz schließen sich nicht aus (§ 325). Der Schadensersatz scheitert hier aber am Vertretenmüssen.'],
 'Wer Rücktritt und Schadensersatz in einen Topf wirft, verneint beides. Nur der Schadensersatz hängt am Verschulden.');

F('5-323iv', 'VL 5', 'Rücktritt (§ 323)', 'Absage vor dem Liefertermin',
 'Der Möbelhersteller M soll der Hotel-GmbH H am 1. Dezember 80 Betten liefern. Am 1. Oktober schreibt M: „Wir haben die Produktion eingestellt und werden die Betten keinesfalls liefern.“ H will sofort andere Betten bestellen und vom Vertrag loskommen. M meint, vor dem 1. Dezember könne H gar nichts tun.',
 'Kann H schon im Oktober zurücktreten?',
 'Braucht man für einen Rücktritt immer eine fällige Leistung?',
 'Ja. H kann schon vor Fälligkeit zurücktreten, weil offensichtlich ist, dass die Voraussetzungen des Rücktritts eintreten werden (§ 323 IV). Eine Fristsetzung ist wegen ernsthafter und endgültiger Verweigerung entbehrlich (§ 323 II Nr. 1).',
 ['Grundsätzlich setzt § 323 I eine fällige Leistung voraus. Fällig wäre erst am 1. Dezember.',
  '§ 323 IV: Der Gläubiger kann schon vor Eintritt der Fälligkeit zurücktreten, wenn offensichtlich ist, dass die Voraussetzungen des Rücktritts eintreten werden.',
  'Die endgültige Absage macht das offensichtlich. Eine Frist wäre sinnlos (§ 323 II Nr. 1).',
  'Daneben SE statt der Leistung nach §§ 280 I, III, 281 II: Die ernsthafte Erfüllungsverweigerung vor Fälligkeit ist selbst eine Pflichtverletzung.'],
 '„Vor Fälligkeit geht nichts“ ist die naheliegende, aber falsche Antwort. § 323 IV wird oft übersehen.');

F('5-glv1', 'VL 5', 'Gläubigerverzug', 'Abgesagt und dann abgebrannt',
 'Händler V soll K am 10. Mai einen maßgefertigten Esstisch liefern (Bringschuld). Am 5. Mai schreibt K: „Ich nehme den Tisch nicht ab, ich habe es mir anders überlegt.“ V antwortet am 6. Mai: „Der Tisch ist fertig, ich halte ihn für Sie bereit.“ Am 12. Mai zerstört ein Brand das Lager. Er wurde durch eine leicht fahrlässig liegen gelassene Heizdecke eines Mitarbeiters von V verursacht. V verlangt den Kaufpreis.',
 'Muss K zahlen?',
 'Reicht hier ein wörtliches Angebot? Und für welches Verschulden haftet der Schuldner im Annahmeverzug noch?',
 'Ja. K ist durch die Ablehnung und V’s wörtliches Angebot in Annahmeverzug geraten (§§ 293, 295). V haftet dann nur noch für Vorsatz und grobe Fahrlässigkeit (§ 300 I). Er ist frei, und der Kaufpreis bleibt geschuldet (§ 326 II 1 Alt. 2).',
 ['Annahmeverzug (§ 293): Grundsätzlich ist ein tatsächliches Angebot nötig (§ 294). Ein wörtliches genügt, wenn der Gläubiger erklärt hat, die Leistung nicht anzunehmen (§ 295 S. 1). Das hat K getan.',
  'V war leistungsbereit und leistungsfähig (§ 297): Der Tisch war fertig.',
  'Haftungsmaßstab im Annahmeverzug: nur Vorsatz und grobe Fahrlässigkeit (§ 300 I). Leichte Fahrlässigkeit des Mitarbeiters (zugerechnet über § 278) reicht nicht → V ist nach § 275 I frei, ohne dass ihm das zuzurechnen wäre.',
  'Gegenleistung: Wird der Schuldner während des Annahmeverzugs frei, ohne dass er es zu vertreten hat, behält er den Anspruch (§ 326 II 1 Alt. 2).'],
 'Das Verschulden des Mitarbeiters scheint V haftbar zu machen. Im Annahmeverzug zählt aber nur noch grobe Fahrlässigkeit.');

F('5-glv2', 'VL 5', 'Gläubigerverzug', 'Der Handwerker ohne Material',
 'Fliesenleger F kündigt sich bei K für Montag 8 Uhr zum Verlegen der Badfliesen an. K öffnet nicht, er hat den Termin vergessen. F verlangt Ersatz für die Anfahrt (§ 304). K findet heraus, dass F die Fliesen, die er laut Vertrag mitbringen sollte, gar nicht dabei hatte, sie waren noch beim Großhändler.',
 'Kann F Mehraufwand nach § 304 verlangen?',
 'Lies § 297. Was setzt der Annahmeverzug beim Schuldner voraus?',
 'Nein. Der Gläubiger kommt nicht in Annahmeverzug, wenn der Schuldner zur Zeit des Angebots außerstande ist, die Leistung zu bewirken (§ 297). Ohne Fliesen konnte F nicht leisten.',
 ['§ 304 setzt Annahmeverzug voraus (§§ 293 ff.).',
  'Tatsächliches Angebot (§ 294): F stand zur vereinbarten Zeit vor der Tür. Insoweit (+).',
  '§ 297: Kein Annahmeverzug, wenn der Schuldner zur Zeit des Angebots außerstande ist, die Leistung zu bewirken. Ohne das geschuldete Material hätte F nicht verlegen können.',
  'Dass K den Termin vergessen hat, ändert nichts. Ein tatsächliches Angebot gibt es nur mit leistungsfähigem Schuldner.'],
 'K’s Vergesslichkeit drängt zur Bejahung. Der Fall dreht sich aber darum, ob F überhaupt leisten konnte.');

window.dispatchEvent(new Event('wpr-data'));
})();
