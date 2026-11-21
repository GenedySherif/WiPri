(function () {
const K = window.WPRK; if (!K || K.__holz) return; K.__holz = 1;
const T = id => K.topics.find(t => t.id === id);
const add = (id, kern, schema, fallen, norms) => { const t = T(id); if (!t) return; t.kern.push(...(kern || [])); t.schema.push(...(schema || [])); t.fallen.push(...(fallen || [])); (norms || []).forEach(n => { if (!t.norms.includes(n)) t.norms.push(n); }); };

// Ergänzungen aus den Folien von RA Rudolf Holztrattner, WiSe 2026/27 (Vorlesung 1–9)

add('typ', [
 'Dozent WiSe 2026/27 :: Rechtsanwalt Rudolf Holztrattner (Lehrbeauftragter HM). Seine Folien zu Vorlesung 1–9 sind die Grundlage der Vorlesungsfälle.',
 'Hilfsmittel laut Folie :: Nur das BGB in Buchform (empfohlen: Beck-Texte im dtv, Folie nennt die 98. Auflage 2026). Markieren ist erlaubt, handschriftlich hinzugefügte Wörter sind verboten; systematische Umgehung gilt als Unterschleif.',
 'Rechtsschutzgarantie Art. 19 IV 1 GG :: Wer durch die öffentliche Gewalt in seinen Rechten verletzt wird, dem steht der Rechtsweg offen. Neben der ordentlichen Gerichtsbarkeit gibt es die Verwaltungsgerichtsbarkeit (öffentliches Recht). Einstweiliger Rechtsschutz schützt Rechte bei Dringlichkeit schon vor dem Urteil.',
 'Vertragstypen (Beispiele VL 2) :: Werkvertrag § 631 = Erfolg geschuldet (Bau, Pauschalreise, Architekt, Homepage, Individualsoftware). Dienstvertrag § 611 = nur Tätigkeit (Behandlung, Arbeit, Anwalt, digitale Dienstleistungen). Miete § 535 = Dauerschuldverhältnis, endet durch Kündigung.',
 'Kaufmann & Firma :: Kaufmann ist, wer ein Handelsgewerbe betreibt (§ 1 HGB); die Firma ist der Name, unter dem er seine Geschäfte betreibt (§ 17 I HGB). Für Kaufleute gelten Sonderregeln, z. B. Rügeobliegenheit § 377 HGB und Gerichtsstandsvereinbarung § 38 I ZPO.',
 'Lernempfehlungen des Dozenten ::Einführung von Prof. Köhler im dtv-BGB lesen; „6 Minuten Jura“ (Prof. Lange), Videos von Prof. Fervers, Podcasts von Prof. Lorenz (LMU). Das Skript allein reicht laut Dozent nicht.'
], [], [], ['§ 535', '§ 611', '§ 631']);

add('sach', [
 'Immaterialgüterrechte :: Geistige Schöpfungen wie Literatur, Kunst, Patente – keine Sachen i. S. d. § 90. Daneben gibt es Mitgliedschaftsrechte als eigene Kategorie.',
 'Eigentumsvorbehalt – Sonderformen :: Erweiterter EV: Eigentum geht erst über, wenn auch weitere Forderungen des Verkäufers bezahlt sind. Verlängerter EV: Käufer darf weiterverkaufen oder verarbeiten, tritt dafür die Weiterverkaufsforderung im Voraus ab bzw. das Produkt fällt dem Verkäufer zu.',
 'Leistungskondiktion – Ausschluss & Haftung :: Ausschluss bei Leistung in Kenntnis der Nichtschuld (§ 814) und bei eigenem Gesetzes- oder Sittenverstoß des Leistenden (§ 817 S. 2). Verschärfte Haftung ab Rechtshängigkeit oder Kenntnis vom fehlenden Rechtsgrund (§§ 818 IV, 819 I) – dann keine Berufung auf Entreicherung (§ 818 III).'
], [], [], ['§ 814', '§ 817', '§ 819']);

add('form', [
 'Button-Lösung § 312j III, IV :: Bei Online-Bestellungen von Verbrauchern muss die Bestellschaltfläche eindeutig auf die Zahlungspflicht hinweisen (z. B. „zahlungspflichtig bestellen“). Sonst kommt der Vertrag nicht zustande (§ 312j IV) – Wirksamkeitshindernis aus VL 2.',
 'Weitere Formbeispiele :: Öffentliche Beglaubigung (§ 129) z. B. bei der Handelsregisteranmeldung (§ 12 HGB) und der Erbausschlagung (§ 1945). Eigenhändiges Testament (§ 2247): handschriftlich und persönlich unterschrieben.'
], [], ['Ein Button, auf dem nur „Weiter“ steht, reicht nicht – es kommt kein Vertrag zustande (§ 312j IV).'], ['§ 312j']);

add('agb', [
 'Elektronischer Geschäftsverkehr § 312i :: Der Unternehmer muss Eingabefehler vor der Bestellung korrigierbar machen, bestimmte Informationen geben, den Zugang der Bestellung unverzüglich elektronisch bestätigen und die AGB abrufbar und speicherbar bereitstellen.',
 'Kein Widerruf im Laden :: Beim Kauf in Geschäftsräumen (stationär) besteht grundsätzlich kein gesetzliches Widerrufsrecht. Widerrufsfrist sonst 14 Tage (§ 355 II), beim Warenkauf ab Erhalt der Ware (§ 356 II Nr. 1); Fristende nach §§ 187 ff., insbesondere § 193.'
], [], [], ['§ 312i']);

add('frist', [
 'Unverjährbare Ansprüche :: z. B. § 194 II (bestimmte familienrechtliche Ansprüche), § 902 (Ansprüche aus eingetragenen Rechten), § 924 (nachbarrechtliche Ansprüche). Eigentum und Gestaltungsrechte verjähren nicht; für Gestaltungsrechte gelten Ausschlussfristen, bei der Anfechtung §§ 121, 124.'
], [], [
 'Folie VL 3 nennt als Ausschlussfristen der Anfechtung „§§ 122 I, 124“ – gemeint sind §§ 121, 124 (§ 122 regelt den Schadensersatz).',
 'Die PowerPoint (Folie 20) nennt die Einrede der Verjährung „§ 241 I“ – richtig ist § 214 I.'
], ['§ 902', '§ 924']);

add('lst', [
 'Haftungsmilderung :: Vertraglich möglich, Haftung für Vorsatz kann aber nicht im Voraus erlassen werden (§ 276 III). Gesetzlich: unentgeltliche Verwahrung (§ 690) und Gesellschafter (§ 708) haften nur für eigenübliche Sorgfalt (§ 277 – grobe Fahrlässigkeit bleibt). Im Annahmeverzug nur Vorsatz und grobe Fahrlässigkeit (§ 300 I).',
 'Fix-Klauseln (VL 5) :: Relatives Fixgeschäft nur, wenn der Fixcharakter für den Schuldner erkennbar wesentlich ist: Mitteilung vor Vertragsschluss, Klauseln „fix“, „genau“, „exakt“, „prompt“ mit Zeitangabe, Tag und Stunde („just in time“) oder Umstände (Gänse „zum Verkauf für Weihnachten“, Saisonartikel). Nicht genug: bloße Zeitangabe, „spätestens“, „Lieferung sofort“; ein Termingeschäft ist noch kein Fixgeschäft.',
 'Relativ vs. absolut (Beispiele) :: Weihnachtskugeln nach Weihnachten = nur relativ (im nächsten Jahr nutzbar) → § 323 II Nr. 2. Weihnachtsbäume nach Weihnachten, Band kommt einen Tag nach der Hochzeit, Brautkleid für den 1. Mai kommt am 3. Mai = absolut → Unmöglichkeit (§ 275 I).',
 'SE statt der Leistung verlangt – Folgen :: Sobald der Gläubiger SE statt der Leistung verlangt, ist der Leistungsanspruch ausgeschlossen (§ 281 IV); bereits Geleistetes wird nach §§ 346–348 zurückgefordert (§ 281 V). Eine zu kurze Nachfrist setzt eine angemessene Frist in Gang.',
 'Gläubigerverzug – weitere Folgen :: § 300 II: Bei Gattungsschulden geht die Leistungsgefahr auf den Gläubiger über, der Schuldner muss nicht neu beschaffen. § 301 keine Zinsen auf Geldschulden, § 302 nur tatsächlich gezogene Nutzungen, § 303 Besitzaufgabe bei Grundstücken, § 372 Hinterlegung.',
 'Kein Annahmeverzug :: § 299 – ist die Leistungszeit nicht bestimmt, gerät der Gläubiger durch eine vorübergehende Verhinderung nicht in Verzug, außer der Schuldner hat die Leistung angemessene Zeit vorher angekündigt. § 298 – bei Zug-um-Zug-Leistung tritt Annahmeverzug auch ein, wenn der Gläubiger die Gegenleistung nicht anbietet.'
], [], [
 'Relatives Fixgeschäft: Rücktritt ohne Frist (§ 323 II Nr. 2). Für SE statt der Leistung schreibt die Folie ebenfalls „ohne Fristsetzung“ – im Gesetz geht das nur über § 281 II (besondere Umstände).',
 'Folie VL 5 gewährt die 40-€-Pauschale, „wenn der Gläubiger kein Verbraucher ist“ – nach § 288 V kommt es darauf an, dass der Schuldner kein Verbraucher ist.'
], ['§ 281 IV', '§ 281 V', '§ 298', '§ 299', '§ 300 II', '§ 372', '§ 690', '§ 708']);

add('kauf', [
 'Großer vs. kleiner Schadensersatz :: Großer SE (Sache zurück, voller Schaden) nur bei erheblichem Mangel (§ 281 I 3). Kleiner SE (Sache behalten, Minderwert ersetzt) auch bei unerheblichem Mangel. Bei Schlechtleistung wird der Käufer nicht automatisch von der Gegenleistung frei (§ 326 I 2).',
 'Dauerhafte Bereitstellung § 475c :: Bei Waren mit digitalen Elementen, die über einen Zeitraum bereitgestellt werden (z. B. Verkehrsdaten im Navigationssystem), muss das digitale Element während des ganzen Zeitraums mangelfrei sein. Fehlt ein Update, kann der Verbraucher Nacherfüllung durch Bereitstellung verlangen.',
 'Werklieferungsvertrag ::Lieferung herzustellender oder zu erzeugender beweglicher Sachen – es gilt Kaufrecht (heute § 650; die Folie nennt noch § 651 a. F.).'
], [], [], ['§ 650']);

const P = 'HZ', Q = (topic, sv, q, c, o) => ({ topic, sv, q, c, o });
const L = [
Q('lst', 'Geflügelhändler G bestellt beim Züchter Z 200 Gänse. G sagt bei der Bestellung, die Tiere seien „für den Verkauf im Weihnachtsgeschäft“; vereinbart ist die Lieferung bis 15. Dezember. Am 16. Dezember teilt Z mit, er könne erst am 22. Dezember liefern. G erklärt sofort den Rücktritt, ohne eine Nachfrist zu setzen.', 'Ist der Rücktritt wirksam?', 3, [
 ['Nein, ohne erfolglose Nachfrist ist ein Rücktritt wegen verspäteter Leistung nie möglich (§ 323 I).', 'Falsch. Die Frist ist in den Fällen des § 323 II entbehrlich, u. a. beim relativen Fixgeschäft.'],
 ['Nein, „bis 15. Dezember“ ist eine bloße Zeitangabe wie „spätestens“ und begründet kein Fixgeschäft (§ 323 II Nr. 2).', 'Falsch. Der Fixcharakter folgt hier aus den Umständen: Z kannte den Zweck „Weihnachtsgeschäft“.'],
 ['Ja, aber nur, wenn Z die Verspätung zu vertreten hat (§ 276 I).', 'Falsch. Der Rücktritt ist immer verschuldensunabhängig.'],
 ['Ja, es liegt ein relatives Fixgeschäft vor; der Rücktritt ist ohne Fristsetzung möglich (§ 323 II Nr. 2).', 'Richtig. Beispiel aus VL 5: Gänse „zum Verkauf für Weihnachten“. Die Leistung ist noch nachholbar, das Interesse aber an den Termin gebunden.'],
 ['Ja, weil die Leistung nach dem Termin unmöglich geworden ist (§ 275 I).', 'Falsch. Am 22. Dezember lassen sich die Gänse noch verkaufen. Absolut wäre etwa die Lieferung von Weihnachtsbäumen nach Weihnachten.'],
 ['Nein, G muss Z zuerst mahnen, damit Verzug eintritt (§ 286 I).', 'Falsch. Die Mahnung braucht man für den Verzögerungsschaden, nicht für den Rücktritt nach § 323.']]),
Q('lst', 'Braut B kauft im Modehaus M ein Brautkleid für 2.400 €. M sagt ausdrücklich zu, das Kleid rechtzeitig vor der Hochzeit am 1. Mai zu liefern. Das Kleid kommt am 3. Mai. B verweigert die Annahme; M verlangt den Kaufpreis.', 'Muss B zahlen?', 1, [
 ['Ja, das Kleid ist mangelfrei und nur verspätet; B kann lediglich den Verzögerungsschaden verlangen (§§ 280 I, II, 286).', 'Falsch. Bei einem absoluten Fixgeschäft gilt nicht Verzugs-, sondern Unmöglichkeitsrecht.'],
 ['Nein; als absolutes Fixgeschäft ist die Leistung nach dem 1. Mai unmöglich (§§ 275 I, 326 I 1).', 'Richtig. Beispiel aus VL 5. Ein Brautkleid nach der Hochzeit ist für B wertlos. SE statt der Leistung zusätzlich über §§ 280 I, III, 283, wenn M die Verspätung zu vertreten hat.'],
 ['Ja, aber B kann nach erfolgloser Fristsetzung zurücktreten und muss dann das Kleid zurückgeben (§ 323 I).', 'Falsch. Eine Frist wäre sinnlos. Die Leistung ist nicht mehr nachholbar.'],
 ['Nein, aber nur, weil B den Vertrag wegen eines Eigenschaftsirrtums anfechten kann (§ 119 II).', 'Falsch. B irrt über nichts. Das Problem ist die Leistungszeit.'],
 ['Ja, weil die Gefahr mit der Absendung des Kleides auf B übergegangen ist (§ 447).', 'Falsch. Es geht nicht um den Untergang der Sache. Außerdem ist § 447 beim Verbrauchsgüterkauf grundsätzlich ausgeschlossen (§ 475 II).'],
 ['Nein, aber nur, wenn M die Verspätung verschuldet hat, weil sonst der Kaufpreis bleibt (§ 280 I 2).', 'Falsch. Der Wegfall der Gegenleistung nach § 326 I 1 ist verschuldensunabhängig.']]),
Q('lst', 'Heizölhändler H soll K 3.000 Liter Heizöl am 5. November zwischen 8 und 12 Uhr in dessen Haus liefern. Der Fahrer von H kommt pünktlich, K ist aber nicht da. Auf der Rückfahrt rammt ein unachtsamer Dritter den Tankwagen; das Öl läuft vollständig aus. Den Fahrer trifft kein Verschulden. K verlangt eine neue Lieferung und will erst danach zahlen.', 'Wie ist die Rechtslage?', 1, [
 ['H muss erneut liefern, weil er bei einer Gattungsschuld das Beschaffungsrisiko trägt (§ 243 I).', 'Falsch. Mit dem Annahmeverzug des K geht die Leistungsgefahr bei der Gattungsschuld auf ihn über (§ 300 II).'],
 ['H muss nicht erneut liefern und behält den Kaufpreisanspruch (§§ 300 II, 326 II 1 Alt. 2).', 'Richtig. Tatsächliches Angebot zur vereinbarten Zeit (§ 294), K nimmt nicht an (§ 293). Die Gegenleistung bleibt, weil H den Verlust nicht zu vertreten hat; Mehraufwand zusätzlich über § 304.'],
 ['H muss nicht erneut liefern, verliert aber den Kaufpreisanspruch (§ 326 I 1).', 'Falsch. Wird die Leistung während des Annahmeverzugs unmöglich, behält der Schuldner die Gegenleistung (§ 326 II 1 Alt. 2).'],
 ['H muss erneut liefern, K muss ihm aber die Kosten der ersten Fahrt ersetzen (§ 304).', 'Falsch. § 304 gibt es zusätzlich, die Lieferpflicht ist aber entfallen.'],
 ['K schuldet H Schadensersatz, weil er seine Pflicht zur Annahme verletzt hat (§§ 280 I, 241 II).', 'Falsch. Die Annahme ist eine Obliegenheit, keine Pflicht i. S. d. § 280.'],
 ['H wird nur frei, wenn K den Unfall verschuldet hat (§ 326 II 1 Alt. 1).', 'Falsch. Alt. 1 betrifft die Verantwortlichkeit des Gläubigers. Hier greift Alt. 2: Annahmeverzug.']]),
Q('lst', 'Maschinenhändler V liefert dem Unternehmer K eine fällige Verpackungsmaschine trotz Mahnung nicht. K setzt eine Frist von zwei Wochen, die erfolglos abläuft. K schreibt: „Ich verlange jetzt Schadensersatz statt der Leistung, nämlich die Mehrkosten meines Deckungskaufs.“ Eine Woche später findet K keinen günstigen Ersatz und verlangt doch wieder die Lieferung.', 'Muss V noch liefern?', 2, [
 ['Ja, der Erfüllungsanspruch besteht immer neben dem Schadensersatz fort (§ 433 I 1).', 'Falsch. Neben der Leistung gibt es nur den Verzögerungsschaden. SE statt der Leistung ersetzt die Leistung.'],
 ['Ja, weil K noch nicht zurückgetreten ist und der Vertrag deshalb fortbesteht (§ 323 I).', 'Falsch. Der Leistungsanspruch erlischt schon durch das Verlangen von SE statt der Leistung.'],
 ['Nein, denn mit dem Verlangen von Schadensersatz statt der Leistung ist der Leistungsanspruch ausgeschlossen (§ 281 IV).', 'Richtig. VL 5: Sobald SE statt der Leistung verlangt wird, kann der Gläubiger nicht mehr zur Erfüllung zurückkehren.'],
 ['Nein, weil der Vertrag schon mit dem Ablauf der Frist automatisch erloschen ist (§ 281 I).', 'Falsch. Der Fristablauf allein beendet nichts. Bis zum Verlangen von SE hätte K weiter Lieferung fordern können.'],
 ['Ja, solange V die Maschine liefern kann und kein Fall der Unmöglichkeit vorliegt (§ 275 I).', 'Falsch. § 275 betrifft die Unmöglichkeit, nicht die Wahl des Gläubigers.'],
 ['Nein, weil K schon Verzugszinsen hätte verlangen können und damit sein Wahlrecht verbraucht hat (§ 288).', 'Falsch. Zinsen haben mit dem Ausschluss des Leistungsanspruchs nichts zu tun.']]),
Q('form', 'Verbraucherin V bestellt im Online-Shop des Unternehmers U Kopfhörer für 199 €. Die letzte Schaltfläche des Bestellvorgangs ist nur mit „Weiter“ beschriftet. Danach erhält V eine Bestellbestätigung per E-Mail. U verlangt Zahlung.', 'Muss V zahlen?', 2, [
 ['Ja, der Vertrag ist wirksam; V kann ihn nur binnen 14 Tagen widerrufen (§ 355).', 'Falsch. Ein Widerruf setzt einen Vertrag voraus. Hier fehlt schon der Vertrag.'],
 ['Ja, V kann den Vertrag aber wegen Erklärungsirrtums anfechten, weil sie die Zahlungspflicht übersehen hat (§ 119 I).', 'Falsch. Auf eine Anfechtung kommt es nicht an.'],
 ['Nein, wegen der Schaltfläche „Weiter“ ist kein Vertrag zustande gekommen (§ 312j III, IV).', 'Richtig. Wirksamkeitshindernis aus VL 2: Ohne eindeutige Beschriftung wie „zahlungspflichtig bestellen“ kommt kein Vertrag zustande.'],
 ['Nein, der Vertrag ist formnichtig, weil bei Online-Käufen die Textform fehlt (§§ 125, 126b).', 'Falsch. Für den Kauf gilt Formfreiheit. Das Problem ist der Button.'],
 ['Ja, die Bestellbestätigung von U ist die Annahme, damit ist der Vertrag geschlossen (§ 147).', 'Falsch. § 312j IV verhindert das Zustandekommen trotz übereinstimmender Erklärungen.'],
 ['Der Vertrag ist schwebend unwirksam, bis V ihn durch Zahlung genehmigt (§§ 108, 184).', 'Falsch. § 108 betrifft Minderjährige.']]),
Q('lst', 'Maler M soll die Fassade des K „im Laufe des Septembers“ streichen; ein Tag ist nicht vereinbart. Am 12. September steht M ohne Ankündigung um 7 Uhr vor dem Haus. K ist bei der Arbeit, das Grundstück ist verschlossen. M verlangt 80 € für die vergebliche Anfahrt.', 'Kann M die 80 € verlangen?', 1, [
 ['Ja, K war nicht da und ist daher in Annahmeverzug; Mehraufwand ist zu ersetzen (§§ 293, 304).', 'Falsch. Bei unbestimmter Leistungszeit und ohne Ankündigung tritt kein Annahmeverzug ein.'],
 ['Nein, ohne vorherige Ankündigung tritt bei unbestimmter Leistungszeit kein Annahmeverzug ein (§ 299).', 'Richtig. VL 5: §§ 298, 299 beachten. M hätte den Termin angemessene Zeit vorher ankündigen müssen.'],
 ['Ja, der Annahmeverzug ist verschuldensunabhängig, und K war zur Leistungszeit nicht da (§ 293).', 'Falsch. Verschulden braucht man zwar nicht, aber § 299 schließt den Verzug hier aus.'],
 ['Nein, weil M die Leistung nur wörtlich hätte anbieten dürfen, da K berufstätig ist (§ 295).', 'Falsch. § 295 lässt ein wörtliches Angebot ausnahmsweise genügen, verbietet aber kein tatsächliches.'],
 ['Ja, aus §§ 280 I, 241 II, weil K seine Pflicht zur Mitwirkung verletzt hat.', 'Falsch. Die Mitwirkung ist eine Obliegenheit, ihre Verletzung löst keinen Schadensersatz aus.'],
 ['Nein, weil § 304 nur für Kaufverträge gilt und M einen Werkvertrag erfüllt (§ 433 II).', 'Falsch. §§ 293 ff. gelten für alle Schuldverhältnisse.']])
];
{ const W = (window.WPRK_LONG = window.WPRK_LONG || []); L.forEach((q, i) => { const id = P + '-' + i; if (!W.some(x => x.id === id)) W.push({ ...q, id }); }); }
window.dispatchEvent(new Event('wpr-data'));
})();
