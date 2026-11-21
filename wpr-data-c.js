(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), s = (title, items) => ({ t: 'schema', title, items }),
  b = (title, text) => ({ t: 'bsp', title, text }), f = (title, text) => ({ t: 'falle', title, text }), m = t => ({ t: 'merk', text: t }), v = (title, text) => ({ t: 'vert', title, text });
const fl = (title, items) => ({ t: 'flow', title, items }), cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), rel = (title, items) => ({ t: 'rel', title, items }),
  tf = (title, items) => ({ t: 'tf', title, items }), st = (title, items) => ({ t: 'steps', title, items }), qc = (q, a) => ({ t: 'check', q, a });
const W = window.WPR = window.WPR || {};

W[9] = {
  src: 'Skript S. 4 („Recht der Leistungsstörungen“) · §§ 275, 276, 283, 311a, 326, 446 f.', title: 'Unmöglichkeit & Gefahrtragung',
  intro: `Was passiert, wenn die geschuldete Leistung nicht mehr erbracht werden kann, weil das Bild verbrannt, die Vase zerbrochen oder der Diamantring gestohlen ist? Das BGB beantwortet das mit drei Fragen. Erstens: Muss der Schuldner noch leisten? (Leistungsgefahr, § 275) Zweitens: Muss der Gläubiger trotzdem zahlen? (Preisgefahr, § 326) Drittens: Bekommt der Gläubiger Schadensersatz? (§§ 280, 283, 311a) Wer diese drei Fragen sauber trennt, löst jeden Unmöglichkeitsfall.`,
  ziel: 'Die drei Ebenen Leistungspflicht, Gegenleistung und Schadensersatz trennen, Stück- und Gattungsschuld unterscheiden und die Gefahrübergänge nach §§ 446, 447, 475 II, 300, 326 II prüfen.',
  relevanz: 'Extrem hoch. Mit 8 Übungsfällen ist das der größte Block der Sammlung.',
  faelle: 'Fälle 15, 16, 17, 18, 19, 20, 21 und 25',
  sections: [
    { title: 'Die drei Ebenen der Unmöglichkeit', blocks: [
      fl('Schaubild: Die Unmöglichkeits-Prüfkette', ['1. Leistungspflicht? :: § 275: Schuldner frei', '2. Gegenleistung? :: § 326 I: Gläubiger frei, Ausnahme § 326 II', '3. Schadensersatz? :: §§ 280, 283 / 311a II: nur bei Vertretenmüssen', '4. Alternativ :: § 284 Aufwendungen, § 285 Surrogat']),
      m(`§ 275 I: Der Anspruch auf Leistung ist ausgeschlossen, soweit diese für den Schuldner oder für jedermann unmöglich ist. Das gilt egal, ob der Schuldner die Unmöglichkeit verschuldet hat. Verschulden spielt erst beim Schadensersatz eine Rolle!`),
      cmp('Schaubild: Arten der Unmöglichkeit', ['Art', 'Bedeutung', 'Beispiel'], [
        ['objektiv', 'niemand kann leisten', 'Das verkaufte Unikat ist verbrannt'],
        ['subjektiv (Unvermögen)', 'nur der Schuldner kann nicht leisten', 'Die Sache wurde gestohlen, der Dieb hat sie (Fall 15)'],
        ['anfänglich', 'Hindernis bestand schon bei Vertragsschluss', 'Ring am 06.12. gestohlen, Vertrag am 10.12. (Fall 15). Vertrag trotzdem WIRKSAM, § 311a I'],
        ['nachträglich', 'Hindernis tritt nach Vertragsschluss ein', 'Ferrari am 04.05. zerstört, Vertrag am 02.05. (Fall 25)'],
        ['faktisch, § 275 II', 'Aufwand steht in grobem Missverhältnis zum Leistungsinteresse', 'Ring auf dem Meeresgrund'],
        ['persönlich, § 275 III', 'Leistung ist unzumutbar', 'Sängerin, deren Kind lebensgefährlich erkrankt ist'],
        ['absolutes Fixgeschäft', 'Leistung ist nach dem Termin sinnlos', 'Taxi zum Flughafen, Catering zur Geburtstagsfeier (Fälle 16, 32)']
      ]),
      f('Klausurfalle', `Bei § 275 II und III handelt es sich um Einreden, sie wirken nur, wenn der Schuldner sich darauf beruft. § 275 I wirkt automatisch. Außerdem befreit § 275 nur von der Primärleistungspflicht und nicht „von allen Pflichten“ (Fall 16 b). Die Sekundärpflichten bleiben nach § 275 IV bestehen.`)
    ] },
    { title: 'Stückschuld und Gattungsschuld', blocks: [
      cmp('Schaubild: Stück- vs. Gattungsschuld', ['', 'Stückschuld', 'Gattungsschuld (§ 243)'], [
        ['Geschuldet', 'eine individuell bestimmte Sache', 'eine Sache aus einer Gattung (mittlerer Art und Güte, § 243 I)'],
        ['Beispiel', 'Gemälde, Gebrauchtwagen, Antiquität, Sonderanfertigung', 'Neuwagen eines Modells, 1.000 Kleider, Tannenbäume'],
        ['Untergang', 'Unmöglichkeit, § 275 I', 'keine Unmöglichkeit, solange die Gattung existiert. Der Schuldner muss neu beschaffen'],
        ['Umwandlung', '-', 'Konkretisierung, § 243 II: Hat der Schuldner das seinerseits Erforderliche getan, wird die Gattungsschuld zur Stückschuld']
      ]),
      s('Konkretisierung: Was ist „das seinerseits Erforderliche“?', [
        'Holschuld (Regelfall, § 269 I) :: Ware aussondern, bereitstellen, den Gläubiger benachrichtigen.',
        'Bringschuld :: Ware aussondern und beim Gläubiger tatsächlich anbieten. Erst an dessen Haustür ist die Konkretisierung eingetreten (Fall 22).',
        'Schickschuld (z. B. Versendungskauf) :: Ware aussondern und ordnungsgemäß an die Transportperson übergeben.'
      ]),
      v('Vorratsschuld', `Eine beschränkte Gattungsschuld: Der Schuldner muss nur aus seinem eigenen Vorrat leisten, z. B. ein Landwirt aus seiner Ernte oder ein Händler aus dem Lager. Ist der gesamte Vorrat untergegangen, wird die Leistung unmöglich. Solange noch Bäume im Lager sind, nicht (Fall 22).`)
    ] },
    { title: 'Gegenleistung: § 326', blocks: [
      m(`§ 326 I 1: Braucht der Schuldner nach § 275 nicht zu leisten, entfällt der Anspruch auf die Gegenleistung. Grundsatz: „Keine Ware, kein Geld.“ Der Verkäufer trägt die Preisgefahr bis zum Gefahrübergang.`),
      cmp('Schaubild: Wann muss der Gläubiger trotzdem zahlen?', ['Ausnahme', 'Norm', 'Beispiel'], [
        ['Gläubiger ist (weit überwiegend) verantwortlich', '§ 326 II 1 Fall 1', 'Der Käufer zerstört die Ware vor der Übergabe'],
        ['Gläubiger ist im Annahmeverzug, Schuldner hat den Untergang nicht zu vertreten', '§ 326 II 1 Fall 2', 'Käufer nimmt nicht ab, die Ware geht danach leicht fahrlässig unter (§ 300 I). Achtung Fall 18: grob fahrlässig ist zu vertreten!'],
        ['Gefahr ist schon übergegangen: Übergabe', '§ 446', 'Nach der Übergabe trägt der Käufer jede Zufallsgefahr'],
        ['Gefahr ist schon übergegangen: Versendungskauf', '§ 447', 'Übergabe an den Transporteur auf Verlangen des Käufers (Fall 20). Gilt NICHT im Verbrauchsgüterkauf (§ 475 II, Fall 17)'],
        ['Gläubiger verlangt das Surrogat', '§ 326 III, § 285', 'Versicherungssumme']
      ]),
      st('Versendungskauf: Wer trägt das Risiko?', [
        'Ausgangslage :: V soll auf Verlangen des K die Ware an einen anderen Ort als den Erfüllungsort schicken. Erfüllungsort bleibt grundsätzlich der Wohnort des Verkäufers (§ 269 I, III: Kostenübernahme allein ändert daran nichts).',
        'Übergabe an den Transporteur :: Nach § 447 I geht die Preisgefahr auf den Käufer über, sobald der Verkäufer die Sache der Transportperson ausgeliefert hat.',
        'Untergang auf dem Transport (Zufall) :: V ist nach § 275 I frei, K muss aber nach § 447 zahlen (Fall 20, Privat an Privat).',
        'Verbrauchsgüterkauf :: § 475 II: § 447 gilt nur, wenn der Verbraucher den Transporteur selbst beauftragt hat. Sonst bleibt die Gefahr beim Unternehmer bis zur Übergabe beim Verbraucher (Fall 17).'
      ])
    ] },
    { title: 'Schadensersatz und Vertretenmüssen', blocks: [
      cmp('Schaubild: Welche Norm für welchen Schadensersatz?', ['Situation', 'Anspruchsgrundlage', 'Voraussetzung'], [
        ['Anfängliche Unmöglichkeit', '§ 311a II', 'Schuldner kannte das Hindernis oder hat seine Unkenntnis zu vertreten'],
        ['Nachträgliche Unmöglichkeit', '§§ 280 I, III, 283', 'Schuldner hat die Unmöglichkeit zu vertreten (vermutet, § 280 I 2)'],
        ['Statt Schadensersatz: Aufwendungen', '§ 284', 'Aufwendungen im Vertrauen auf den Erhalt der Leistung (Garagenmiete, Fall 25)'],
        ['Surrogat', '§ 285', 'Herausgabe der Versicherungssumme oder eines Ersatzanspruchs']
      ]),
      s('Vertretenmüssen, § 276', [
        'Vorsatz :: Wissen und Wollen der Pflichtverletzung',
        'Fahrlässigkeit, § 276 II :: Außerachtlassen der im Verkehr erforderlichen Sorgfalt. Leicht fahrlässig = kleines Versehen, grob fahrlässig = was jedem einleuchten müsste, wurde missachtet.',
        'Strengere Haftung :: Übernahme einer Garantie oder eines Beschaffungsrisikos (typisch bei Gattungsschulden)',
        'Haftungsverschärfung im Verzug, § 287 S. 2 :: Der Schuldner haftet auch für Zufall, außer der Schaden wäre auch bei rechtzeitiger Leistung eingetreten (Fall 21).',
        'Haftungsmilderung im Annahmeverzug, § 300 I :: Der Schuldner haftet nur für Vorsatz und grobe Fahrlässigkeit (Fälle 18, 26).',
        'Gehilfen, § 278 :: Das Verschulden von Erfüllungsgehilfen wird zugerechnet.'
      ]),
      cmp('Schaubild: Positives vs. negatives Interesse', ['', 'Positives Interesse (Erfüllungsinteresse)', 'Negatives Interesse (Vertrauensschaden)'], [
        ['Frage', 'Wie stünde der Gläubiger, wenn ordnungsgemäß erfüllt worden wäre?', 'Wie stünde er, wenn er nie auf den Vertrag vertraut hätte?'],
        ['Normen', '§§ 280 III, 281, 283, 311a II', '§ 122, c.i.c., § 284 (Aufwendungen)'],
        ['Fall 19 (wäre ein Anspruch gegeben)', '1.000 € Ersatzpreis − 800 € Kaufpreis = 200 €', '900 € Konkurrenzangebot − 800 € = 100 €']
      ]),
      tf('Schnelltest: Unmöglichkeit', [
        ['Wenn der Schuldner die Unmöglichkeit verschuldet hat, muss er trotzdem liefern.', false, '§ 275 I gilt unabhängig vom Verschulden. Verschulden führt nur zum Schadensersatz.'],
        ['Ein Vertrag über eine schon vorher zerstörte Sache ist nichtig.', false, '§ 311a I: Der Vertrag ist wirksam. Es gibt Schadensersatz nach § 311a II.'],
        ['Bei einer Gattungsschuld führt der Untergang einzelner Stücke in der Regel nicht zur Unmöglichkeit.', true, 'Der Schuldner muss aus der Gattung neu leisten, solange keine Konkretisierung eingetreten ist.'],
        ['Im Verzug haftet der Schuldner auch für Zufall.', true, '§ 287 S. 2, mit Ausnahme, wenn der Schaden auch bei rechtzeitiger Leistung eingetreten wäre.']
      ])
    ] }
  ],
  cases: [
    { n: 15, sv: 'A verkauft B am 10.12. einen Diamantring. Als A den Ring am 15.12. übereignen und damit auch übergeben will, stellt sich heraus, dass der Diamantring, den A in seinem Safe ordnungsgemäß aufbewahrt hat, bereits am 06.12. hieraus gestohlen wurde.', q: 'Der Kaufvertrag ist', c: 2, o: [
      ['nichtig', 'Falsch. Das war die alte Rechtslage vor 2002 (§ 306 a. F.). Heute bestimmt § 311a I ausdrücklich, dass es der Wirksamkeit nicht entgegensteht, wenn das Leistungshindernis schon bei Vertragsschluss vorlag.'],
      ['schwebend unwirksam', 'Falsch. Schwebende Unwirksamkeit setzt ein noch ausstehendes Wirksamkeitserfordernis voraus, z. B. die Genehmigung nach § 108. Daran fehlt es.'],
      ['wirksam', 'Richtig. Es liegt eine anfängliche Unmöglichkeit vor (Diebstahl vor Vertragsschluss, Stückschuld). Nach § 311a I ist der Vertrag wirksam. A wird nach § 275 I (Unvermögen) frei, B nach § 326 I. Schadensersatz nach § 311a II schuldet A nur, wenn er das Hindernis kannte oder kennen musste. Hier hat A den Ring ordnungsgemäß verwahrt und den Diebstahl nicht bemerkt, also wohl kein Anspruch.'],
      ['wirksam, A kann den Kaufvertrag aber anfechten', 'Falsch. A hat sich allenfalls über seine eigene Leistungsfähigkeit geirrt. Das ist ein unbeachtlicher Motivirrtum bzw. eine Risikoverteilung, die § 311a abschließend regelt.']],
      lsg: ['Zeitachse: Diebstahl am 06.12., Vertragsschluss am 10.12., also anfänglich.', 'Ein Diamantring ist ein individuell bestimmtes Stück, also eine Stückschuld. A kann nicht leisten (subjektive Unmöglichkeit, § 275 I).', '§ 311a I: Der Vertrag bleibt wirksam.', 'Ergebnis: c.'] },
    { n: 16, q: 'Welche der nachfolgenden Aussagen trifft zu:', c: 0, o: [
      ['Bei einem absoluten Fixgeschäft führt die Nichteinhaltung der Leistungszeit zur Unmöglichkeit.', 'Richtig. Beim absoluten Fixgeschäft ist die Einhaltung der Leistungszeit so wesentlich, dass eine verspätete Leistung keine Erfüllung mehr ist (Taxi zum Flughafen, Brautkleid zur Hochzeit). Mit Zeitablauf tritt Unmöglichkeit ein (§ 275 I). Abgrenzung: Beim relativen Fixgeschäft ist eine Nachholung möglich, der Gläubiger kann aber ohne Fristsetzung zurücktreten (§ 323 II Nr. 2).'],
      ['Im Falle der Unmöglichkeit wird der Schuldner nach § 275 I BGB von allen Pflichten befreit.', 'Falsch. § 275 I befreit nur von der Primärleistungspflicht. Sekundärpflichten bleiben, z. B. Schadensersatz (§ 275 IV) und die Herausgabe des Surrogats (§ 285).'],
      ['Bei anfänglicher Unmöglichkeit gilt: Der zugrundeliegende Vertrag ist und bleibt unwirksam.', 'Falsch. § 311a I: Der Vertrag ist wirksam.'],
      ['Wenn die (Primär-)Leistungspflicht des Schuldners nach § 275 I BGB erlischt, erlischt auch ausnahmslos die Gegenleistungspflicht des Gläubigers.', 'Falsch. Das Wort „ausnahmslos“ ist das Warnsignal. Ausnahmen sind § 326 II (Verantwortung des Gläubigers, Annahmeverzug), §§ 446, 447 (Gefahrübergang) und § 326 III (Surrogat).']],
      lsg: ['Jede Aussage gegen das Gesetz prüfen: a) Definition des absoluten Fixgeschäfts. b) § 275 IV, § 285. c) § 311a I. d) § 326 II, §§ 446 f.', 'Ergebnis: a.'] },
    { n: 17, sv: 'Studentin S ersteigert zwecks Verschönerung ihres WG-Zimmers bei einem Online-Auktionshaus eine Vase von Powerseller P. P lässt daraufhin, wie vereinbart, die Vase unter Einschaltung des Transportunternehmens T an S liefern. Auf der Fahrt zu S kommt es zu einem schweren Verkehrsunfall, weil der Sportwagen des Z riskant überholt, und der T mit seinem Fahrzeug von der Fahrbahn abgedrängt wird. Die Vase wird völlig zerstört.', q: 'Was passiert mit den vertraglichen Ansprüchen von P und S?', c: 2, o: [
      ['S hat weiterhin einen Lieferanspruch, ist aber nicht mehr zur Zahlung des Kaufpreises verpflichtet.', 'Falsch. Die ersteigerte Vase ist ein bestimmtes Einzelstück, also eine Stückschuld. Mit ihrer Zerstörung ist die Lieferung unmöglich, und P ist nach § 275 I frei.'],
      ['P ist von seiner Lieferpflicht ersatzlos frei geworden, S ist aber weiterhin zur Zahlung verpflichtet.', 'Falsch. Das wäre richtig, wenn § 447 anwendbar wäre. Hier liegt aber ein Verbrauchsgüterkauf vor (Powerseller = Unternehmer, Studentin für ihr WG-Zimmer = Verbraucherin). Nach § 475 II gilt § 447 nicht, weil S den Transporteur nicht selbst beauftragt hat.'],
      ['P und S haben gegeneinander keine Ansprüche mehr.', 'Richtig. P ist nach § 275 I frei. S ist nach § 326 I 1 frei, weil die Preisgefahr wegen § 475 II noch bei P lag. Schadensersatz (§§ 280 I, III, 283) scheidet aus, weil P den Unfall nicht zu vertreten hat. Ihn verursachte allein Z, und T ist als Transportunternehmen kein Erfüllungsgehilfe des P für die Unfallvermeidung bzw. hat selbst nicht schuldhaft gehandelt.'],
      ['Die besonderen Regelungen des Verbrauchsgüterkaufs gelten hier nicht.', 'Falsch. P handelt als Powerseller gewerblich (§ 14), S als Verbraucherin (§ 13). Die Vase ist eine bewegliche Sache. Also liegt ein Verbrauchsgüterkauf vor (§ 474 I).']],
      lsg: ['1. Verbrauchsgüterkauf? Ja: P Unternehmer, S Verbraucherin, bewegliche Sache (§ 474 I).', '2. Lieferpflicht des P: Stückschuld zerstört, also § 275 I.', '3. Zahlungspflicht der S: grundsätzlich § 326 I 1, sie entfällt. Ausnahme § 447? Nein, wegen § 475 II, denn S hat T nicht beauftragt.', '4. Schadensersatz der S: §§ 280 I, III, 283 setzen Vertretenmüssen voraus, das fehlt.', 'Ergebnis: c.'] },
    { n: 18, sv: 'Studentin S, die sehr auf ihr Äußeres achtet, hat einen extra für ihre Bedürfnisse individuell angefertigten Kosmetiktisch bei A bestellt, den dieser am 20.12. liefern soll. Als A am 20.12. vereinbarungsgemäß den makellosen Kosmetiktisch S in deren Wohnung übergeben möchte, erklärt diese völlig überraschend, sie habe nun doch kein Interesse mehr an dem Kosmetiktisch. A ist verärgert und verstaut den Kosmetiktisch wieder ordnungsgemäß in seinem Lieferwagen. Aufgrund grober Fahrlässigkeit verursacht A auf dem Weg zu seinem Geschäft einen Verkehrsunfall, bei dem der Kosmetiktisch völlig zerstört wird.', q: 'Welche der folgenden Aussagen trifft zu?', c: 1, o: [
      ['A ist von der Lieferung des Kosmetiktisches an S nicht befreit, da er den Verkehrsunfall grob fahrlässig verursacht hat.', 'Falsch. Die Befreiung nach § 275 I hängt nicht vom Verschulden ab. Der individuell angefertigte Tisch existiert nicht mehr, also ist die Leistung unmöglich.'],
      ['A ist von der Verpflichtung den Kosmetiktisch an S zu liefern befreit; Auch S muss den Kaufpreis nicht bezahlen, da A den Verkehrsunfall grob fahrlässig verursacht hat.', 'Richtig. A ist nach § 275 I frei. S war zwar im Annahmeverzug (tatsächliches Angebot am vereinbarten Tag in der Wohnung, § 294, Nichtannahme, § 293). Nach § 300 I haftet A im Annahmeverzug aber noch für Vorsatz und grobe Fahrlässigkeit. Hier handelte A grob fahrlässig, also hat er den Untergang zu vertreten. Damit greift § 326 II 1 Fall 2 nicht (er verlangt einen vom Schuldner NICHT zu vertretenden Umstand). Es bleibt bei § 326 I: S muss nicht zahlen.'],
      ['A ist von der Verpflichtung den Kosmetiktisch an S zu liefern befreit; S muss aber den Kaufpreis bezahlen.', 'Falsch. Das wäre richtig, wenn A nur leicht fahrlässig gehandelt hätte (§§ 300 I, 326 II 1 Fall 2), vergleiche Fall 26.'],
      ['Keiner der beiden ist von seiner Leistungsverpflichtung aus dem Kaufvertrag befreit.', 'Falsch. A ist nach § 275 I frei, S nach § 326 I.']],
      lsg: ['Vertragstyp: Ein individuell angefertigter Tisch fällt unter Werklieferungsvertrag (§ 650), es gilt Kaufrecht. Es handelt sich um eine Stückschuld (nicht vertretbare Sache).', 'Leistungspflicht A: Der Tisch ist zerstört, also § 275 I, frei.', 'Annahmeverzug S: Die Leistung war erfüllbar, wurde tatsächlich angeboten (§ 294) und nicht angenommen (§ 293). Verschulden der S ist nicht nötig. Annahmeverzug liegt vor.', 'Haftungsmaßstab A: § 300 I, nur Vorsatz und grobe Fahrlässigkeit. A handelte grob fahrlässig, hat den Untergang also zu vertreten.', 'Gegenleistung: § 326 II 1 Fall 2 verlangt, dass der Schuldner den Umstand nicht zu vertreten hat. Das ist hier nicht der Fall, also bleibt es bei § 326 I 1: S ist frei.', 'Ergebnis: b. Vergleichen Sie Fall 26: Dort leicht fahrlässig, mit umgekehrtem Ergebnis.'] },
    { n: 19, sv: 'K erhält von Antiquar V ein Angebot zum Kauf einer alten, bei V nur einmal vorhandenen Goetheausgabe zum Preis von 800,00 €. Antiquar W bietet K die gleiche Ausgabe zum Preis von 900,00 € an. K nimmt das Angebot des V an. Vor Übereignung an K wird in den Räumen des gegen Brandschaden nicht versicherten V infolge Blitzschlags unter anderem auch die an K verkaufte Goetheausgabe vernichtet. Eine solche Ausgabe ist mittlerweile nur noch für 1.000,00 € zu haben.', q: 'Hat K einen Schadensersatzanspruch gegen V?', c: 0, o: [
      ['Nein', 'Richtig. In Betracht kommt §§ 280 I, III, 283 (nachträgliche Unmöglichkeit). Dafür muss V die Unmöglichkeit zu vertreten haben (§ 280 I 2). Ein Blitzschlag ist höhere Gewalt, und V trifft kein Verschulden. Eine fehlende Versicherung ist keine Pflichtverletzung gegenüber K. Ein Beschaffungsrisiko hat V als Antiquar bei einem Einzelstück nicht übernommen. Kein Anspruch.'],
      ['Ja, auf das positive Interesse (Erfüllungsinteresse) in Höhe von 200,00 €.', 'Falsch. Die Berechnung stimmt (1.000 € − 800 €), wäre ein Anspruch gegeben. Es fehlt aber am Vertretenmüssen.'],
      ['Ja, auf das negative Interesse (Vertrauensinteresse) in Höhe von 100,00 €.', 'Falsch. Erstens fehlt das Vertretenmüssen. Zweitens wäre bei §§ 280, 283 das positive Interesse zu ersetzen und nicht das negative (900 € − 800 €).'],
      ['Unabhängig vom Schadensersatzanspruch gegen V kann K von diesem die Nachlieferung der Goetheausgabe verlangen.', 'Falsch. Die Ausgabe war bei V nur einmal vorhanden, also eine Stückschuld. Mit der Vernichtung ist der Lieferanspruch nach § 275 I erloschen. V muss sich auch keine Ausgabe am Markt beschaffen.']],
      lsg: ['Primäranspruch: Stückschuld vernichtet, also § 275 I.', 'Schadensersatz: Anspruchsgrundlage §§ 280 I, III, 283, weil die Unmöglichkeit nachträglich eintrat (nach Annahme).', 'Vertretenmüssen: Blitzschlag (Zufall), kein Verzug (§ 287) und keine Garantie, also nicht zu vertreten.', 'Gegenleistung: K muss nach § 326 I auch nicht zahlen.', 'Ergebnis: a. Lernpunkt: Die Interessenberechnung in b und c ist korrekt, nur fehlt die Anspruchsvoraussetzung.'] },
    { n: 20, sv: 'Privatmann V verkauft an Privatmann K eine antike Vase für 500,00 €. V versendet auf Verlangen des K die Vase auf eigene Kosten an den Wohnort des K. V bringt die ordnungsgemäß verpackte Vase unter Hinweis auf deren Zerbrechlichkeit zu dem Transportunternehmer T, dessen Fahrer F auf dem Transportweg zu K einen allein von einem anderen Verkehrsteilnehmer verschuldeten Unfall erleidet, bei dem die Vase irreparabel zerstört wird.', q: 'Kann V die Zahlung der 500,00 € gem. § 433 II BGB von K verlangen?', c: 2, o: [
      ['Nein, da V von seiner Hauptleistungspflicht (Übereignung und Übergabe des Kaufgegenstandes) frei geworden ist und somit auch die Gegenleistung (Kaufpreiszahlung) entfällt.', 'Falsch. Das ist der Grundsatz des § 326 I, aber § 447 I ist die Ausnahme: Die Preisgefahr ist auf K übergegangen.'],
      ['Nein, da im vorliegenden Fall § 447 BGB nicht zur Anwendung kommt, da ein Verbrauchsgüterkauf vorliegt.', 'Falsch. Zwischen zwei Privatleuten gibt es keinen Verbrauchsgüterkauf, es fehlt der Unternehmer als Verkäufer (§ 474 I). § 475 II ist nicht anwendbar.'],
      ['Ja, da mit der Übergabe an den Transporteur T bzw. dessen Fahrer die Gefahr des zufälligen Untergangs der Vase auf K bereits übergegangen ist.', 'Richtig. Versendungskauf nach § 447 I: Auf Verlangen des Käufers wird an einen anderen Ort als den Erfüllungsort versandt. Mit der Auslieferung an die Transportperson geht die Preisgefahr über. Dass V die Kosten trägt, ändert nach § 269 III nichts daran, dass der Erfüllungsort beim Verkäufer bleibt.'],
      ['Ja, da Erfüllungsort des Kaufvertrages der Wohnort des V ist und K daher die Vase bei V abholen hätte müssen.', 'Falsch. Das Ergebnis „Ja“ stimmt, die Begründung nicht. Die Parteien haben eine Versendung vereinbart, also musste K nicht abholen. Der Erfüllungsort beim V ist zwar Voraussetzung des § 447, aber nicht die Begründung des Anspruchs.']],
      lsg: ['Anspruch V gegen K aus § 433 II: Ein Kaufvertrag liegt vor.', 'Untergang: V wird nach § 275 I frei. Grundsätzlich entfällt der Kaufpreis nach § 326 I 1.', 'Ausnahme § 447 I: (1) Versendung auf Verlangen des K. (2) An einen anderen Ort als den Erfüllungsort, der nach § 269 I, III beim V liegt. (3) Übergabe an die Transportperson. (4) Zufälliger Untergang. Alles erfüllt.', 'Sperre § 475 II? Nein, weil kein Verbrauchsgüterkauf vorliegt (Privat an Privat).', 'Ergebnis: c.'] },
    { n: 21, sv: 'K hat von V ein Ölgemälde des berühmten Malers Gerhard Trichter gekauft. V kommt mit der Lieferung in Verzug. Wenig später verbrennt das Gemälde bei V, den an dem Brand keinerlei Verschulden trifft. (Ein Schaden des K ist zu unterstellen.)', q: 'Kann K von V Schadensersatz verlangen?', c: 0, o: [
      ['Ja, denn V hat die Unmöglichkeit der Leistung zu vertreten.', 'Richtig. Nach § 287 S. 2 haftet der Schuldner während des Verzugs auch für Zufall. Das Vertretenmüssen wird also fingiert, es sei denn, der Schaden wäre auch bei rechtzeitiger Leistung eingetreten. Hätte V rechtzeitig geliefert, hinge das Bild bei K und wäre nicht verbrannt. Anspruch aus §§ 280 I, III, 283 in Verbindung mit § 287 S. 2.'],
      ['Nur dann, wenn V den Brand vorsätzlich oder grob fahrlässig verursacht hätte.', 'Falsch. Das ist der Maßstab des § 300 I (Annahmeverzug), nicht der des Schuldnerverzugs.'],
      ['Nein, denn K kann von V die Lieferung des Bildes nach wie vor verlangen.', 'Falsch. Das Original ist verbrannt, also ist die Lieferung unmöglich (§ 275 I).'],
      ['Nein, in keinem Fall.', 'Falsch. Ohne den Verzug wäre das richtig. Der Verzug verschärft aber die Haftung.']],
      lsg: ['Primäranspruch: Unikat verbrannt, also § 275 I.', 'Schadensersatz §§ 280 I, III, 283: Pflichtverletzung = Nichtleistung wegen Unmöglichkeit.', 'Vertretenmüssen: kein eigenes Verschulden, aber V war im Verzug (§ 286), also gilt § 287 S. 2: Haftung auch für Zufall.', 'Ausnahme „wäre auch bei rechtzeitiger Leistung eingetreten“: Bei K wäre das Bild nicht verbrannt.', 'Ergebnis: a.'] },
    { n: 25, sv: 'A verkauft B am 02.05.2023 seinen Ferrari 246 Dino. Der Ferrari soll am 10.05.2023 übergeben werden. B mietet bereits am 03.05.2023 für diesen wertvollen Ferrari extra eine Garage für 1 Monat an. Der Mietzins hierfür beträgt 100,00 EUR, den B bereits im Voraus bezahlt hat. Am 04.05.2023 verschuldet A bei einer letzten Spritztour aufgrund überhöhter Geschwindigkeit einen Verkehrsunfall, bei dem der Ferrari irreparabel zerstört wird.', q: 'B hat', c: 2, o: [
      ['nach wie vor einen Anspruch auf Lieferung des Ferraris, da A den Verkehrsunfall verschuldet hat.', 'Falsch. Ein gebrauchter Ferrari Dino ist eine Stückschuld. Er ist zerstört, also § 275 I, unabhängig vom Verschulden.'],
      ['keinen Anspruch auf Ersatz der Garagenmiete in Höhe von 100,00 EUR, da er A keine Nachfrist gesetzt hat.', 'Falsch. Bei Unmöglichkeit ist eine Fristsetzung sinnlos und deshalb nicht erforderlich (§ 283 S. 1 verweist nicht auf § 281 I).'],
      ['Anspruch auf Ersatz der Garagenmiete in Höhe von 100,00 EUR.', 'Richtig. B kann anstelle des Schadensersatzes statt der Leistung Ersatz vergeblicher Aufwendungen verlangen (§ 284). Die Garagenmiete hat B im Vertrauen auf den Erhalt des Ferraris gemacht, und sie war billigerweise gerechtfertigt. Voraussetzung ist ein Anspruch auf Schadensersatz statt der Leistung (§§ 280 I, III, 283), also nachträgliche Unmöglichkeit, die A zu vertreten hat (überhöhte Geschwindigkeit).'],
      ['keinerlei Ansprüche', 'Falsch, siehe c.']],
      lsg: ['Zeitachse: Vertrag am 02.05., Garage am 03.05., Unfall am 04.05., also nachträgliche Unmöglichkeit.', 'Leistungsanspruch: § 275 I, erloschen.', 'Schadensersatz statt der Leistung: §§ 280 I, III, 283. A hat die Pflichtverletzung zu vertreten (Fahrlässigkeit).', 'Aufwendungsersatz: § 284 „anstelle“ des Schadensersatzes. Die Garagenmiete ist eine freiwillige Vermögensopferung im Vertrauen auf die Leistung. Vorteil: B muss nicht beweisen, dass sich die Aufwendung „rentiert“ hätte (Rentabilitätsvermutung).', 'Ergebnis: c.'] }
  ],
  pq: [
    { q: 'Was bedeutet „Leistungsgefahr“ und „Preisgefahr“?', a: 'Die Leistungsgefahr ist das Risiko, trotz Untergangs der Sache noch einmal leisten zu müssen. Bei der Stückschuld trägt sie wegen § 275 I der Gläubiger, denn er bekommt nichts. Bei der Gattungsschuld trägt sie der Schuldner bis zur Konkretisierung (§ 243 II). Die Preisgefahr ist das Risiko, die Gegenleistung zahlen zu müssen, obwohl man die Leistung nicht erhält. Sie trägt nach § 326 I grundsätzlich der Schuldner (Verkäufer), bis zum Gefahrübergang (§§ 446, 447, 326 II).' },
    { q: 'Wie unterscheiden sich §§ 300 I und 287 S. 2?', a: '§ 287 S. 2 verschärft die Haftung des Schuldners, der im Schuldnerverzug ist: Er haftet auch für Zufall. § 300 I mildert die Haftung des Schuldners, wenn der Gläubiger im Annahmeverzug ist: Er haftet nur noch für Vorsatz und grobe Fahrlässigkeit. Merkhilfe: Wer selbst zu spät ist, haftet mehr. Wessen Gegenüber zu spät ist, haftet weniger.' },
    { q: 'Warum ist ein Vertrag über eine schon vor Vertragsschluss untergegangene Sache wirksam, und was folgt daraus?', a: 'Nach § 311a I steht es der Wirksamkeit nicht entgegen, dass der Schuldner nach § 275 nicht zu leisten braucht und das Hindernis schon bei Vertragsschluss vorlag. Der Gesetzgeber wollte dem Gläubiger einen vertraglichen Schadensersatzanspruch auf das positive Interesse ermöglichen (§ 311a II), wenn der Schuldner das Hindernis kannte oder seine Unkenntnis zu vertreten hat. Beide Primärpflichten entfallen nach §§ 275 I, 326 I.' }
  ],
  cards: [
    ['§ 275 I?', 'Leistungspflicht entfällt bei Unmöglichkeit, unabhängig von Verschulden.'],
    ['§ 311a I?', 'Der Vertrag ist auch bei anfänglicher Unmöglichkeit wirksam.'],
    ['§ 326 I?', 'Keine Leistung, keine Gegenleistung.'],
    ['§ 326 II?', 'Der Gläubiger zahlt trotzdem, wenn er verantwortlich ist oder im Annahmeverzug war und der Schuldner es nicht zu vertreten hat.'],
    ['§ 446?', 'Die Gefahr geht mit Übergabe auf den Käufer über.'],
    ['§ 447?', 'Versendungskauf: Gefahrübergang mit Übergabe an die Transportperson.'],
    ['§ 475 II?', 'Im Verbrauchsgüterkauf gilt § 447 nur, wenn der Verbraucher den Transporteur selbst beauftragt hat.'],
    ['Konkretisierung?', '§ 243 II: Gattungsschuld wird zur Stückschuld (Hol-, Bring-, Schickschuld).'],
    ['§ 287 S. 2?', 'Im Verzug haftet der Schuldner auch für Zufall.'],
    ['§ 300 I?', 'Im Annahmeverzug haftet der Schuldner nur für Vorsatz und grobe Fahrlässigkeit.'],
    ['§ 284?', 'Ersatz vergeblicher Aufwendungen anstelle von Schadensersatz statt der Leistung.'],
    ['Absolutes Fixgeschäft?', 'Eine verspätete Leistung ist sinnlos, also tritt Unmöglichkeit ein.']
  ]
};

W[10] = {
  src: 'Skript S. 4 („Recht der Leistungsstörungen“) · §§ 280, 281, 286–288, 293–304', title: 'Verzug & Annahmeverzug',
  intro: `Zwei Spiegelbilder. Beim Schuldnerverzug leistet der Schuldner zu spät. Beim Annahmeverzug nimmt der Gläubiger nicht an. In beiden Fällen ist die Leistung noch möglich, das unterscheidet den Verzug von der Unmöglichkeit. Die Rechtsfolgen sind aber völlig verschieden. Achten Sie besonders auf den Unterschied zwischen Mahnung (für Verzug) und Fristsetzung (für Schadensersatz statt der Leistung und Rücktritt).`,
  ziel: 'Verzugseintritt prüfen, Mahnung von Fristsetzung unterscheiden, Verzugsschaden von Schadensersatz statt der Leistung abgrenzen und die Folgen des Annahmeverzugs anwenden.',
  relevanz: 'Sehr hoch. Fristen, Mahnung und § 300 I sind beliebte MC-Fallen.',
  faelle: 'Fälle 22, 23, 24 und 26',
  sections: [
    { title: 'Schuldnerverzug, § 286', blocks: [
      s('Voraussetzungen des Schuldnerverzugs', [
        'Fälliger und durchsetzbarer Anspruch :: Fälligkeit nach § 271 (im Zweifel sofort). Keine Einrede wie § 320 oder Verjährung.',
        'Nichtleistung trotz Möglichkeit :: Wäre die Leistung unmöglich, gilt § 275 und kein Verzug.',
        'Mahnung oder Entbehrlichkeit :: Mahnung = bestimmte, eindeutige Aufforderung zur Leistung nach Fälligkeit (§ 286 I). Entbehrlich nach § 286 II: Nr. 1 Leistungszeit kalendermäßig bestimmt („am 01.12.“, Fall 24), Nr. 2 berechenbar ab Ereignis, Nr. 3 ernsthafte und endgültige Verweigerung, Nr. 4 besondere Gründe. § 286 III: Bei Entgeltforderungen tritt Verzug 30 Tage nach Fälligkeit und Rechnung ein, gegenüber Verbrauchern nur bei Hinweis.',
        'Vertretenmüssen, § 286 IV :: Der Schuldner kommt nicht in Verzug, solange die Leistung infolge eines Umstands unterbleibt, den er nicht zu vertreten hat. Achtung: Bei Gattungsschulden hat er wegen des Beschaffungsrisikos (§ 276 I) Lieferengpässe regelmäßig zu vertreten.'
      ]),
      fl('Schaubild: Zeitachse Fall 24', ['01.12.: Liefertermin :: kalendermäßig bestimmt', '02.12.: VERZUG :: ohne Mahnung, § 286 II Nr. 1', '06.12.: Anwaltsschreiben :: Kosten = Verzugsschaden', '19.12.: Lieferung :: Verzug endet, Schaden bleibt']),
      cmp('Schaubild: Rechtsfolgen des Schuldnerverzugs', ['Recht', 'Norm', 'Zusätzliche Voraussetzung'], [
        ['Verzugsschaden (neben der Leistung)', '§§ 280 I, II, 286', 'keine. Ersetzt wird, was durch die Verspätung entsteht (Anwaltskosten nach Verzugseintritt, Mietwagen)'],
        ['Verzugszinsen', '§ 288', 'Geldschuld. 5 Prozentpunkte über Basiszins, 9 Prozentpunkte im B2B. 40 € Pauschale im B2B (§ 288 V)'],
        ['Haftungsverschärfung', '§ 287', 'Haftung auch für Zufall (Fall 21)'],
        ['Schadensersatz statt der Leistung', '§§ 280 I, III, 281', 'erfolglose angemessene FRISTSETZUNG (Fall 23)'],
        ['Rücktritt', '§ 323', 'erfolglose Fristsetzung. Vertretenmüssen nicht nötig!']
      ]),
      f('Mahnung ≠ Fristsetzung', `Die Mahnung („Bitte liefern Sie“) begründet nur den Verzug. Für Schadensersatz statt der Leistung, z. B. Mehrkosten eines Deckungskaufs, verlangt § 281 I eine angemessene Frist („Liefern Sie bis zum 30.04.“). Fehlt sie und ist sie nicht entbehrlich (§ 281 II), gibt es keinen Schadensersatz statt der Leistung (Fall 23 d). Eine Fristsetzung kann zugleich Mahnung sein, umgekehrt gilt das nicht.`),
      qc('Kurz-Check: Ein Rechtsanwalt schreibt die erste Mahnung, der Schuldner war vorher nicht im Verzug. Muss der Schuldner die Anwaltskosten tragen?', 'Nein. Die Kosten der verzugsbegründenden Erstmahnung sind kein Verzugsschaden, denn sie entstehen, bevor der Verzug eintritt. Anders, wenn der Schuldner wegen § 286 II schon im Verzug war (Fall 24 c).')
    ] },
    { title: 'Gläubigerverzug (Annahmeverzug), §§ 293 ff.', blocks: [
      s('Voraussetzungen', [
        'Erfüllbarkeit :: Der Schuldner darf leisten (§ 271 II: im Zweifel auch vor Fälligkeit).',
        'Ordnungsgemäßes Angebot :: tatsächlich, also so, wie die Leistung zu bewirken ist (§ 294, bei der Bringschuld an der Haustür). Wörtlich genügt es nach § 295, wenn der Gläubiger erklärt hat, er werde nicht annehmen, oder wenn er mitwirken muss (Abholung). Entbehrlich nach § 296, wenn für die Mitwirkungshandlung eine Zeit nach dem Kalender bestimmt ist.',
        'Leistungsfähigkeit des Schuldners, § 297',
        'Nichtannahme durch den Gläubiger, § 293 :: Verschulden des Gläubigers ist NICHT erforderlich (Fall 26). Ausnahme § 299: Ist die Leistungszeit nicht bestimmt, tritt bei vorübergehender Verhinderung kein Verzug ein, außer der Schuldner hat die Leistung angekündigt.'
      ]),
      cmp('Schaubild: Folgen des Annahmeverzugs', ['Folge', 'Norm', 'Bedeutung'], [
        ['Haftungsmilderung', '§ 300 I', 'Der Schuldner haftet nur noch für Vorsatz und grobe Fahrlässigkeit'],
        ['Übergang der Leistungsgefahr bei Gattungsschuld', '§ 300 II', 'Die Gattungsschuld wird wie eine Stückschuld behandelt'],
        ['Preisgefahr', '§ 326 II 1 Fall 2', 'Geht die Sache unter, ohne dass der Schuldner es zu vertreten hat, muss der Gläubiger zahlen'],
        ['Mehraufwendungen', '§ 304', 'Ersatz der Kosten für das erfolglose Angebot und die Aufbewahrung'],
        ['Keine Verzinsung', '§ 301', 'Geldschuld wird nicht verzinst'],
        ['Hinterlegung, Selbsthilfeverkauf', '§§ 372, 383', 'Befreiungsmöglichkeiten des Schuldners']
      ]),
      cmp('Schaubild: Schuldner- vs. Gläubigerverzug', ['', 'Schuldnerverzug', 'Gläubigerverzug'], [
        ['Wer ist säumig?', 'der Schuldner leistet nicht', 'der Gläubiger nimmt nicht an'],
        ['Verschulden nötig?', 'ja, § 286 IV', 'nein'],
        ['Haftung des Schuldners', 'verschärft, § 287', 'gemildert, § 300 I'],
        ['Typisches Recht', 'Verzugsschaden, Zinsen', 'Gegenleistung trotz Untergangs, Mehraufwendungen']
      ]),
      st('Fall 26 Schritt für Schritt', [
        'Bringschuld mit festem Termin :: Lieferung am 05.06. um 17 Uhr bei K.',
        'Angebot :: V erscheint pünktlich, das ist ein tatsächliches Angebot (§ 294).',
        'Nichtannahme :: K ist im Krankenhaus und unverschuldet verhindert. Unerheblich, denn Annahmeverzug setzt kein Verschulden voraus. § 299 greift nicht, weil die Leistungszeit bestimmt war. K ist im Annahmeverzug.',
        'Untergang :: V baut aus Ärger einen Unfall („rast“, „passt kurz nicht auf“). Nach § 300 I haftet V nur für Vorsatz und grobe Fahrlässigkeit.',
        'Preisgefahr :: War es nur leicht fahrlässig, muss K nach § 326 II 1 Fall 2 zahlen (V muss Ersparnisse anrechnen, § 326 II 2). War es grob fahrlässig („rasen“ spricht dafür), entfällt der Kaufpreis nach § 326 I. Weil der Sachverhalt das offen lässt, ist sicher nur Aussage c richtig.'
      ])
    ] }
  ],
  cases: [
    { n: 22, sv: 'A und Blumenhändler B vereinbaren, dass B einen Tannenbaum am 20.12.22 zu A liefert. Am 21.12. ruft B bei A an und teilt ihm mit, der Tannenbaum könne bei ihm im Geschäft abgeholt werden. Er stehe bereit auf den Namen des A. Liefern könne B wegen der hohen Nachfrage nicht. Am 22.12. wird der für A bestimmte Tannenbaum versehentlich von einem Mitarbeiter des B an einen anderen Kunden verkauft. Andere vergleichbare Bäume sind noch da.', q: 'Welche der folgenden Aussagen ist richtig?', c: 3, o: [
      ['A ist in Annahmeverzug, weil er den Baum nicht rechtzeitig abgeholt hat.', 'Falsch. Vereinbart war eine Bringschuld („zu A liefert“). Ein ordnungsgemäßes Angebot setzt deshalb das tatsächliche Anbieten bei A voraus (§ 294). Ein Anruf „Sie können abholen“ ist kein ordnungsgemäßes Angebot. A musste nicht abholen.'],
      ['Hier liegt eine Stückschuld vor, weil die beschränkte Vorratsschuld sich konkretisiert hat: B hat alles Notwendige zu seiner Leistung getan, § 243 BGB.', 'Falsch. Bei einer Bringschuld tritt die Konkretisierung erst ein, wenn die Ware beim Gläubiger angeboten wird. Das bloße Bereitstellen im Laden reicht nicht.'],
      ['Die Leistung ist dem B unmöglich.', 'Falsch. Es handelt sich um eine (Vorrats-)Gattungsschuld, und vergleichbare Bäume sind noch vorhanden. Der Verkauf des einen Baums macht die Leistung nicht unmöglich.'],
      ['B befindet sich im Verzug und muss an A liefern.', 'Richtig. Der Anspruch auf Lieferung war am 20.12. fällig, und die Leistungszeit war kalendermäßig bestimmt, sodass eine Mahnung entbehrlich ist (§ 286 II Nr. 1). Hohe Nachfrage entlastet B nicht, denn bei einer Gattungsschuld trägt er das Beschaffungsrisiko (§ 276 I). B ist im Verzug, und der Lieferanspruch besteht fort.']],
      lsg: ['Schuldart: Gattungsschuld (Tannenbaum, Vorrat des Händlers). Leistungsort: Bringschuld.', 'Konkretisierung (§ 243 II)? Bei der Bringschuld nur durch Angebot an der Haustür, das ist nicht erfolgt. Es bleibt eine Gattungsschuld.', 'Unmöglichkeit? Nein, andere Bäume sind da.', 'Annahmeverzug A? Nein, es fehlt das ordnungsgemäße Angebot (§ 294).', 'Schuldnerverzug B: fällig am 20.12., keine Mahnung nötig (§ 286 II Nr. 1), Vertretenmüssen (Beschaffungsrisiko). Verzug liegt vor.', 'Ergebnis: d.'] },
    { n: 23, sv: 'A bestellt bei B 1000 Kleider, das Stück zu 50,00 €, zu liefern bis 15.04. Da die Kleider wegen eines von B unverschuldeten Engpasses in der Stoffversorgung am 16.04. noch nicht bei A eingetroffen sind, mahnt A den B schriftlich. Am 25.04. steht die Lieferung noch immer aus. Daher deckt A am 19.05. seinen Bedarf bei C, das Stück zu 55,00 €.', q: 'Kann er die Differenz von 5.000,00 € von B als Schadensersatz verlangen?', c: 3, o: [
      ['Ja, weil B in Verzug war.', 'Falsch. Selbst wenn Verzug vorläge (bei Gattungsschuld wegen des Beschaffungsrisikos naheliegend), gibt der Verzug nur den Verzugsschaden neben der Leistung (§§ 280 I, II, 286). Die Mehrkosten des Deckungskaufs ersetzen die Leistung, das ist Schadensersatz statt der Leistung.'],
      ['Ja, weil A dem B nach der Mahnung noch eine angemessene Frist zur Lieferung gelassen hat.', 'Falsch. Bloßes Abwarten ist keine Fristsetzung. § 281 I verlangt, dass der Gläubiger dem Schuldner eine Frist bestimmt.'],
      ['Ja, weil eine Nachfristsetzung entbehrlich war.', 'Falsch. Keiner der Fälle des § 281 II liegt vor: keine ernsthafte und endgültige Verweigerung, keine besonderen Umstände. Auch ein Fixgeschäft ist nicht ersichtlich.'],
      ['Nein, schon deshalb nicht, weil A dem B im Mahnschreiben und auch sonst keine Nachfrist zur Bewirkung der Leistung gesetzt hatte.', 'Richtig. Der Deckungskauf-Mehrpreis ist Schadensersatz statt der Leistung (§§ 280 I, III, 281). Dafür ist eine erfolglos abgelaufene angemessene Frist erforderlich. Eine Mahnung ist keine Fristsetzung. Das Wort „schon“ zeigt: Auf die Verschuldensfrage kommt es gar nicht mehr an.']],
      lsg: ['Was verlangt A? 5 € Mehrkosten × 1.000 Kleider. Das ersetzt die ausgebliebene Leistung, also Schadensersatz statt der Leistung.', 'Anspruchsgrundlage: §§ 280 I, III, 281 I.', 'Voraussetzung: erfolglose Bestimmung einer angemessenen Frist zur Leistung. Die Mahnung enthält keine Frist, also ist sie nicht erfüllt.', 'Entbehrlichkeit § 281 II: nicht ersichtlich.', 'Ergebnis: d. Lernpunkt: Mahnung und Fristsetzung sind zwei verschiedene Dinge.'] },
    { n: 24, sv: 'Autohändler A kann den mit K vereinbarten Liefertermin für den Ferrari zum 01.12.2022 nicht einhalten. Verärgert wendet sich K daher an einen Rechtsanwalt, der dem A am 06.12.2022 eine Frist zur Lieferung des Ferraris bis zum 20.12.2022 setzt. A übereignet und übergibt den Ferrari daraufhin am 19.12.2022 dem K.', q: 'Kann K von A die Rechtsanwaltskosten verlangen?', c: 2, o: [
      ['Nein, da A erst mit der Mahnung durch den Rechtsanwalt in Verzug gerät und die Rechtsanwaltskosten daher keinen Verzugsschaden darstellen.', 'Falsch. Eine Mahnung war entbehrlich, weil die Leistungszeit kalendermäßig bestimmt war (§ 286 II Nr. 1). A war schon ab dem 02.12. im Verzug.'],
      ['Nein, da A ja noch rechtzeitig geliefert hat.', 'Falsch. A hat innerhalb der Frist für Schadensersatz statt der Leistung geliefert, aber nicht rechtzeitig im Sinne des Vertrags (01.12.). Der Verzugsschaden bleibt bestehen.'],
      ['Ja, da A bereits in Verzug war, als ihn das Mahnschreiben des Rechtsanwalts erreichte.', 'Richtig. Anspruch aus §§ 280 I, II, 286. Der Verzug trat ohne Mahnung mit Ablauf des 01.12. ein (§ 286 II Nr. 1). Die Rechtsanwaltskosten sind danach entstanden und adäquat kausal durch den Verzug verursacht. Damit sind sie ersatzfähiger Verzugsschaden. Vertretenmüssen wird vermutet (§ 286 IV).'],
      ['Nur dann, wenn A auf die Mahnung den Ferrari nicht geliefert hätte und ihm der Rechtsanwalt in einem weiteren Schreiben eine Nachfrist gesetzt hätte.', 'Falsch. Eine Nachfrist ist nur für Schadensersatz statt der Leistung (§ 281) und Rücktritt (§ 323) erforderlich, nicht für den Verzugsschaden.']],
      lsg: ['Anspruchsgrundlage: §§ 280 I, II, 286 (Verzögerungsschaden).', 'Verzug: Fälligkeit am 01.12. (kalendermäßig), Mahnung entbehrlich (§ 286 II Nr. 1), Vertretenmüssen vermutet. Verzug ab 02.12.', 'Schaden: Die Anwaltskosten sind nach Verzugseintritt entstanden, also Verzugsschaden.', 'Die spätere Lieferung beendet den Verzug für die Zukunft, beseitigt aber den bereits entstandenen Schaden nicht.', 'Ergebnis: c.'] },
    { n: 26, sv: 'Der Verbraucher Konrad (K) bestellt beim Fachhändler Victorius (V) eine gebrauchte, antike Espressomaschine aus dem Jahre 1955. Diese soll am 05.06.2023 um 17.00 Uhr bei K angeliefert und die Verwendung von V dem K erklärt werden. Zum vereinbarten Termin erscheint V bei K, K ist jedoch bei seiner Joggingrunde am gleichen Tage um 14.00 Uhr unverschuldet von einer Bulldogge „attackiert“, verletzt, mit dem Krankenwagen sofort abgeholt worden und liegt bereits stationär im Krankenhaus. Aus Ärger darüber, dass ihm niemand aufmacht, er eine Stunde umsonst gewartet hat, rast V um 18.00 Uhr mit seinem Lastwagen nach Hause, passt kurz nicht auf und baut einen selbstverschuldeten Unfall, bei dem die Espressomaschine komplett zerstört wird.', q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 2, o: [
      ['V hat gegen K einen durchsetzbaren Anspruch auf Kaufpreiszahlung aufgrund Vergütungsverpflichtung aus § 326 Abs. 2 Satz 1 Fall 1 BGB.', 'Falsch. Fall 1 verlangt, dass der Gläubiger (K) für den Umstand, der zur Unmöglichkeit führte, allein oder weit überwiegend verantwortlich ist. Den Unfall hat V verursacht, nicht K.'],
      ['V hat gegen K einen durchsetzbaren Anspruch auf Kaufpreiszahlung aufgrund Vergütungsverpflichtung aus § 326 Abs. 2 Satz 1 Fall 2 BGB.', 'Nach überwiegender Lesart falsch. Fall 2 setzt voraus, dass V den Untergang nicht zu vertreten hat. Im Annahmeverzug haftet V nur für Vorsatz und grobe Fahrlässigkeit (§ 300 I). „Rasen“ aus Ärger mit einem Lastwagen spricht für grobe Fahrlässigkeit, dann hätte V den Untergang zu vertreten und kein Kaufpreisanspruch bestünde (§ 326 I). Sieht man nur „passt kurz nicht auf“ (leichte Fahrlässigkeit), wäre b vertretbar. Wegen dieser Unsicherheit ist c die eindeutig richtige Antwort.'],
      ['K befindet sich im Annahmeverzug nach § 293 ff BGB.', 'Richtig. Die Leistung war erfüllbar, V hat sie zum vereinbarten Zeitpunkt am vereinbarten Ort tatsächlich angeboten (§ 294), und K hat sie nicht angenommen (§ 293). Ein Verschulden des Gläubigers ist für den Annahmeverzug nicht erforderlich. § 299 greift nicht, weil die Leistungszeit fest bestimmt war.'],
      ['K befindet sich nicht im Annahmeverzug nach § 293 ff BGB, da bei ihm kein Verschulden vorlag.', 'Falsch. Annahmeverzug ist verschuldensunabhängig. Das ist der zentrale Unterschied zum Schuldnerverzug (§ 286 IV).']],
      lsg: ['Annahmeverzug K: erfüllbar, tatsächliches Angebot am vereinbarten Termin (§ 294), Nichtannahme. Verschulden irrelevant, § 299 nicht einschlägig. Annahmeverzug liegt vor, also c.', 'Unmöglichkeit: Die Maschine (Stückschuld, Antiquität) ist zerstört, also § 275 I.', 'Kaufpreis: § 326 II 1 Fall 2, wenn V den Unfall nicht zu vertreten hat. Maßstab § 300 I. Die Formulierung „rast“ deutet auf grobe Fahrlässigkeit. Dann ist § 326 II nicht anwendbar und K frei (§ 326 I), wie in Fall 18.', 'Hinweis zur Klausurtechnik: Wenn eine Antwort von einer offenen Wertungsfrage abhängt und eine andere zweifelsfrei zutrifft, wählen Sie die zweifelsfreie.'] }
  ],
  pq: [
    { q: 'Unterscheiden Sie Mahnung und Fristsetzung und ihre Funktionen.', a: 'Die Mahnung ist die eindeutige Aufforderung an den Schuldner, die fällige Leistung zu erbringen. Sie begründet den Schuldnerverzug (§ 286 I) und damit den Anspruch auf Verzugsschaden (§§ 280 I, II, 286) und Verzugszinsen (§ 288). Die Fristsetzung bestimmt dem Schuldner eine angemessene Frist zur Leistung. Ihr erfolgloser Ablauf ist Voraussetzung für Schadensersatz statt der Leistung (§ 281 I) und für den Rücktritt (§ 323 I). Eine Fristsetzung enthält regelmäßig eine Mahnung, eine Mahnung aber keine Fristsetzung.' },
    { q: 'Welche Voraussetzungen hat der Annahmeverzug, und braucht es Verschulden?', a: 'Erforderlich sind: Erfüllbarkeit der Leistung, ein ordnungsgemäßes Angebot (tatsächlich nach § 294, wörtlich nach § 295 oder entbehrlich nach § 296), Leistungsfähigkeit des Schuldners (§ 297) und Nichtannahme durch den Gläubiger (§ 293). Ein Verschulden des Gläubigers ist nicht erforderlich. Er trägt das Risiko, die Leistung zum vereinbarten Zeitpunkt nicht entgegennehmen zu können. § 299 enthält eine Ausnahme nur bei unbestimmter Leistungszeit.' }
  ],
  cards: [
    ['Verzug: Voraussetzungen?', 'Fälliger, durchsetzbarer Anspruch, Nichtleistung, Mahnung oder Entbehrlichkeit, Vertretenmüssen (§ 286 IV).'],
    ['Mahnung entbehrlich?', '§ 286 II: kalendermäßig, ab Ereignis berechenbar, Verweigerung, besondere Gründe.'],
    ['Verzugsschaden?', '§§ 280 I, II, 286: Schäden durch Verspätung neben der Leistung.'],
    ['Deckungskauf-Mehrkosten?', 'Schadensersatz statt der Leistung, §§ 280 I, III, 281, mit Fristsetzung.'],
    ['Rücktritt bei Verzug?', '§ 323: Fristsetzung, aber KEIN Vertretenmüssen nötig.'],
    ['Verzugszinsen?', '§ 288: 5 Prozentpunkte über Basiszins (B2B: 9), 40 € Pauschale B2B.'],
    ['Annahmeverzug: Verschulden?', 'Nicht erforderlich.'],
    ['Bringschuld: Angebot?', 'Tatsächlich an der Haustür des Gläubigers (§ 294).'],
    ['Folgen des Annahmeverzugs?', '§ 300 I Haftungsmilderung, § 300 II Gattung, § 326 II, § 304 Mehraufwand.']
  ]
};

W[11] = {
  src: 'Skript S. 4 („Gewährleistungsrecht“) · §§ 433–445, 474–479, 327 ff.', title: 'Kaufgewährleistung & digitale Elemente',
  intro: `Der Verkäufer muss die Sache frei von Sach- und Rechtsmängeln verschaffen (§ 433 I 2). Liefert er mangelhaft, gibt § 437 dem Käufer ein abgestuftes System von Rechten. Zuerst bekommt der Verkäufer eine zweite Chance (Nacherfüllung), erst danach kann sich der Käufer vom Vertrag lösen oder Geld verlangen. Seit 2022 kennt das Gesetz zudem Waren mit digitalen Elementen und eine Aktualisierungspflicht.`,
  ziel: 'Den Sachmangel nach § 434 n. F. prüfen, die Rechte aus § 437 in der richtigen Reihenfolge anwenden, Fristsetzung und Entbehrlichkeit beherrschen und die Verbrauchsgüterkauf-Sonderregeln einsetzen.',
  relevanz: 'Extrem hoch. Gewährleistung ist der Kern jeder WPR-Klausur.',
  faelle: 'Fälle 27, 28, 29, 30, 31, 32, 33 und 35',
  sections: [
    { title: 'Der Sachmangel, § 434 (Fassung seit 01.01.2022)', blocks: [
      m(`Die Sache ist frei von Sachmängeln, wenn sie bei Gefahrübergang den subjektiven Anforderungen, den objektiven Anforderungen und den Montageanforderungen entspricht (§ 434 I). Alle drei müssen kumulativ erfüllt sein!`),
      cmp('Schaubild: Die drei Säulen des § 434', ['Säule', 'Norm', 'Inhalt', 'Beispiel'], [
        ['Subjektive Anforderungen', '§ 434 II', 'vereinbarte Beschaffenheit; Eignung für die nach dem Vertrag vorausgesetzte Verwendung; vereinbartes Zubehör und Anleitungen', 'vereinbart 15.000 km, tatsächlich 80.000 km (Fall 31); Rasenroboter verlässt den Rasen (Fall 28)'],
        ['Objektive Anforderungen', '§ 434 III', 'Eignung für die gewöhnliche Verwendung; übliche Beschaffenheit, die der Käufer erwarten kann (auch nach Werbung); Beschaffenheit einer Probe; Zubehör, Anleitungen', 'Motorschaden bei 6 Monate altem Wagen (Fall 30)'],
        ['Montageanforderungen', '§ 434 IV', 'sachgemäße Montage bzw. mangelfreie Montageanleitung („IKEA-Klausel“)', 'falsche Aufbauanleitung'],
        ['Gleichgestellt', '§ 434 V', 'Lieferung einer anderen Sache (aliud) oder zu geringer Menge', 'vegetarisch statt vegan (Fall 32)']
      ]),
      s('Weitere Voraussetzungen der Gewährleistung', [
        'Wirksamer Kaufvertrag',
        'Mangel bei Gefahrübergang :: In der Regel bei Übergabe (§ 446). Beim Verbrauchsgüterkauf wird bei Mängeln, die sich innerhalb eines Jahres zeigen, vermutet, dass sie schon bei Gefahrübergang vorlagen (§ 477 I).',
        'Kein Ausschluss :: Kenntnis des Käufers (§ 442), vertraglicher Ausschluss (§ 444 Grenze: Arglist, Garantie; § 476: im Verbrauchsgüterkauf unwirksam), § 377 HGB (Rügeobliegenheit unter Kaufleuten).'
      ]),
      f('Klausurfalle: „so, wie das Fahrzeug ist“', `Ein solcher Satz ist ein Gewährleistungsausschluss. Beim Verbrauchsgüterkauf ist er nach § 476 I 1 unwirksam. Eine negative Beschaffenheitsvereinbarung („Motor defekt“) wäre nach § 476 I 2 nur möglich, wenn der Verbraucher eigens darüber informiert wurde und sie ausdrücklich und gesondert vereinbart. Ein pauschaler Satz genügt nicht (Fall 30).`)
    ] },
    { title: 'Die Rechte des Käufers, § 437', blocks: [
      fl('Schaubild: Die Stufenleiter des § 437', ['Nr. 1: Nacherfüllung :: § 439. VORRANG, verschuldensunabhängig', 'Frist abgelaufen / entbehrlich', 'Nr. 2: Rücktritt § 323 oder Minderung § 441 :: verschuldensunabhängig', 'Nr. 3: Schadensersatz §§ 280 ff. :: NUR bei Vertretenmüssen']),
      s('Nacherfüllung, § 439', [
        'Wahlrecht des Käufers :: Beseitigung des Mangels (Reparatur) oder Lieferung einer mangelfreien Sache (§ 439 I)',
        'Verschuldensunabhängig :: Der Verkäufer haftet ohne Rücksicht auf Verschulden (Fall 27). Gewährleistung ist eine Einstandspflicht für das Äquivalenzverhältnis.',
        'Kosten, § 439 II :: Der Verkäufer trägt Transport-, Wege-, Arbeits- und Materialkosten.',
        'Ein- und Ausbau, § 439 III',
        'Verweigerung, § 439 IV :: wenn unverhältnismäßige Kosten',
        'Rückgabe der mangelhaften Sache, § 439 V',
        'Grenze: Unmöglichkeit, § 275 :: Bei einem einmaligen Gebrauchtwagen mit falschem Kilometerstand ist weder Reparatur noch Ersatzlieferung möglich (Fall 31).'
      ]),
      cmp('Schaubild: Rücktritt, Minderung, Schadensersatz', ['', 'Rücktritt', 'Minderung', 'Schadensersatz'], [
        ['Norm', '§§ 437 Nr. 2, 440, 323, 326 V', '§§ 437 Nr. 2, 441', '§§ 437 Nr. 3, 280, 281, 283, 311a'],
        ['Frist nötig?', 'ja, außer entbehrlich', 'ja (wie Rücktritt: „statt zurückzutreten“)', 'ja beim SE statt der Leistung (§ 281), außer entbehrlich'],
        ['Vertretenmüssen?', 'nein', 'nein', 'JA (vermutet, § 280 I 2)'],
        ['Unerheblicher Mangel?', 'ausgeschlossen (§ 323 V 2)', 'möglich (§ 441 I 2)', 'SE statt der ganzen Leistung ausgeschlossen (§ 281 I 3)'],
        ['Folge', 'Rückabwicklung (§ 346)', 'Herabsetzung des Preises im Verhältnis (§ 441 III)', 'Geld']
      ]),
      s('Wann ist die Fristsetzung entbehrlich?', [
        '§ 281 II / § 323 II :: ernsthafte und endgültige Verweigerung; relatives Fixgeschäft; besondere Umstände',
        '§ 440 S. 1 :: Der Verkäufer verweigert die Nacherfüllung berechtigt, die Nacherfüllung ist fehlgeschlagen oder unzumutbar.',
        '§ 440 S. 2 :: Eine Nachbesserung gilt nach dem erfolglosen zweiten Versuch als fehlgeschlagen. Das ist eine Vermutung zugunsten des Käufers und kein Recht des Verkäufers auf einen zweiten Versuch (Fall 33 b).',
        '§ 326 V :: Bei Unmöglichkeit der Nacherfüllung kann der Käufer sofort zurücktreten (Fall 31).',
        '§ 475d I Nr. 1 (Verbrauchsgüterkauf) :: Rücktritt ohne Fristsetzung, wenn der Unternehmer nach Ablauf einer angemessenen Frist ab Unterrichtung über den Mangel nicht nacherfüllt hat (Fall 33).'
      ]),
      tf('Schnelltest: Gewährleistung', [
        ['Für die Nacherfüllung muss der Verkäufer den Mangel verschuldet haben.', false, 'Nacherfüllung ist verschuldensunabhängig (Fall 27).'],
        ['Rücktritt setzt grundsätzlich eine erfolglose Fristsetzung voraus.', true, '§ 323 I. Ausnahmen gibt es nach §§ 323 II, 326 V, 440, 475d.'],
        ['Bei einem unerheblichen Mangel kann der Käufer mindern, aber nicht zurücktreten.', true, '§ 323 V 2 und § 441 I 2.'],
        ['Der Käufer darf zwischen Reparatur und Neulieferung wählen.', true, '§ 439 I: Der Käufer wählt.']
      ])
    ] },
    { title: 'Verjährung und Handelskauf', blocks: [
      cmp('Schaubild: Verjährung der Mängelrechte, § 438', ['Fall', 'Frist', 'Norm'], [
        ['Regelfall', '2 Jahre ab Ablieferung', '§ 438 I Nr. 3, II'],
        ['Bauwerke und Baustoffe', '5 Jahre', '§ 438 I Nr. 2'],
        ['Dingliche Herausgabeansprüche Dritter', '30 Jahre', '§ 438 I Nr. 1'],
        ['Arglist', 'regelmäßige Verjährung, 3 Jahre ab Kenntnis (§§ 195, 199)', '§ 438 III'],
        ['Gebrauchte Sachen im Verbrauchsgüterkauf', 'Verkürzung auf 1 Jahr möglich', '§ 476 II']
      ]),
      v('§ 377 HGB: Rügeobliegenheit beim beiderseitigen Handelskauf', `Sind beide Parteien Kaufleute, muss der Käufer die Ware unverzüglich nach Ablieferung untersuchen und Mängel unverzüglich rügen. Unterlässt er das, gilt die Ware als genehmigt, und alle Mängelrechte sind verloren. Versteckte Mängel sind unverzüglich nach Entdeckung zu rügen. In Fall 31 (U und Autohändler A) wäre deshalb zu fragen, ob U nach der ersten Inspektion sofort gerügt hat.`)
    ] },
    { title: 'Digitale Produkte und Waren mit digitalen Elementen', blocks: [
      cmp('Schaubild: Was gilt wofür?', ['Produkt', 'Beispiel', 'Regeln'], [
        ['Digitale Inhalte / Dienstleistungen', 'App, E-Book, Streaming, Cloud', '§§ 327 ff. (Verbraucher gegen Unternehmer)'],
        ['Ware mit digitalen Elementen', 'Smartphone, Smartwatch, Rasenroboter, hochautomatisiertes Kfz', 'KAUFRECHT: §§ 434, 475b ff. (§ 327a III)'],
        ['Datenträger als bloßer Träger', 'DVD, Spiele-Disc', '§§ 327 ff. (§ 327 V)']
      ]),
      s('Ware mit digitalen Elementen, § 475b', [
        'Begriff, § 327a III :: Waren, die in einer Weise digitale Inhalte enthalten oder mit ihnen verbunden sind, dass sie ihre Funktionen ohne diese nicht erfüllen können.',
        'Einheitlicher Mangelbegriff :: Ein Softwarefehler ist ein Sachmangel der Ware. Eine Trennung von Hard- und Software findet nicht statt (Fall 28 a, b).',
        'Aktualisierungspflicht, § 475b III Nr. 2, IV Nr. 2 :: Der VERKÄUFER (nicht nur der Hersteller!) schuldet die Bereitstellung von Aktualisierungen, die für den Erhalt der Vertragsmäßigkeit erforderlich sind, und zwar während des Zeitraums, den der Verbraucher erwarten kann (Fall 29).',
        'Beweislast, § 477 II :: Bei dauerhafter Bereitstellung digitaler Elemente gilt die Beweislastumkehr für die gesamte Bereitstellungsdauer, mindestens 2 Jahre.',
        'Praxis :: Der Verkäufer erfüllt meist über den Hersteller, haftet aber selbst gegenüber dem Käufer. Den Rückgriff regelt § 478.'
      ]),
      f('Klausurfalle', `Option „Der Vertrag wird in erster Linie nach den Vorschriften über Kaufverträge über digitale Produkte beurteilt“ (Fall 29 a) ist falsch. Für eine Ware mit digitalen Elementen gilt nach § 327a III gerade nicht §§ 327 ff., sondern Kaufrecht mit den Sonderregeln §§ 475b ff.`)
    ] }
  ],
  cases: [
    { n: 27, q: 'Für Sachmängel haftet der Verkäufer auf Nacherfüllung', c: 1, o: [
      ['nur bei Vorsatz.', 'Falsch. Vorsatz ist für die Nacherfüllung irrelevant.'],
      ['ohne Rücksicht auf Verschulden.', 'Richtig. §§ 437 Nr. 1, 439 enthalten kein Verschuldenserfordernis. Der Verkäufer hat die mangelfreie Sache versprochen (§ 433 I 2) und muss dieses Versprechen erfüllen, auch wenn er den Mangel nicht kennen konnte. Verschulden ist nur für den Schadensersatz (§ 437 Nr. 3) relevant.'],
      ['nur bei Vorsatz und grober Fahrlässigkeit.', 'Falsch. Das ist der Maßstab des § 300 I bzw. des § 521 (Schenkung).'],
      ['bei Vorsatz und jeder Fahrlässigkeit.', 'Falsch. Das ist der Maßstab des § 276 I für den Schadensersatz.']],
      lsg: ['§ 437 Nr. 1 verweist auf § 439. Dort ist kein Verschulden vorausgesetzt.', 'Systematik: Nur § 437 Nr. 3 verweist auf § 280, der in Abs. 1 S. 2 das Vertretenmüssen verlangt.', 'Ergebnis: b.'] },
    { n: 28, sv: 'A ist Eigentümer eines stattlichen Grundstücks. Da er des ständigen Rasenmähens überdrüssig ist, kauft er sich bei Händler H einen Rasenroboter. Das funktioniert die ersten Male fantastisch und A betrachtet das Rasenmähen vom Liegestuhl aus. Eines Tages muss er jedoch mit ansehen, wie der Rasenmäher vom Weg abkommt, den Rasenbereich verlässt, durch die geöffnete Terrassentür in das Wohnzimmer einfährt und dort sämtliche hochflauschigen Teppiche „rasiert“, was an einem Softwarefehler liegt.', q: 'Welche der Antworten ist richtig?', c: 2, o: [
      ['Für Ansprüche des A gegen H muss unterschieden werden, ob der Fehler in der Hard- oder in der Software liegt.', 'Falsch. Ein Rasenroboter ist eine Ware mit digitalen Elementen (§ 327a III). Für sie gilt einheitlich Kaufrecht, Fehler der Software sind Sachmängel der Ware.'],
      ['Es liegt kein Sachmangel vor, da der Fehler nicht die Hard-, sondern die Software betrifft.', 'Falsch. Die Software ist Teil der Ware. Ohne sie kann der Roboter seine Funktion nicht erfüllen.'],
      ['Der Rasenroboter entspricht nicht den subjektiven Anforderungen an eine Sache.', 'Richtig. Nach § 434 II 1 Nr. 2 muss sich die Sache für die nach dem Vertrag vorausgesetzte Verwendung eignen. Vorausgesetzt war, dass der Roboter den Rasen mäht und dabei im Rasenbereich bleibt. Ein Roboter, der ins Haus fährt, eignet sich dafür nicht. Daneben fehlt auch die Eignung für die gewöhnliche Verwendung (§ 434 III).'],
      ['Selbst bei Vorliegen eines Mangels hat A gegen H keine Ansprüche, da er den Rasenroboter ständig überwachen muss.', 'Falsch. Gerade das selbstständige Mähen ohne Aufsicht ist der Sinn des Produkts. Ein Mitverschulden (§ 254) könnte allenfalls beim Schadensersatz eine Rolle spielen (offene Terrassentür), schließt die Gewährleistung aber nicht aus.']],
      lsg: ['Ware mit digitalen Elementen, also Kaufrecht mit einheitlichem Mangelbegriff.', '§ 434 II 1 Nr. 2: vertraglich vorausgesetzte Verwendung ist Rasenmähen im Rasenbereich. Diese Eignung fehlt.', 'Rechte: Nacherfüllung (Software-Update), danach Rücktritt oder Minderung. Für die Teppiche Schadensersatz neben der Leistung (§§ 437 Nr. 3, 280 I), wenn H den Mangel zu vertreten hat, was bei reinen Händlern oft fehlt. Daneben kommt eine Herstellerhaftung (ProdHaftG, Modul 13) in Betracht.', 'Ergebnis: c.'] },
    { n: 29, sv: 'K erwirbt zum privaten Gebrauch und zum Preis von 35000 Euro vom KFZ-Händler V ein neues, vom Hersteller H produziertes und vertriebenes hochautomatisiertes Kfz, das mit bereitgestellter Software geliefert wird, welche Fahrfunktionen selbstständig ausführt. Um eine vertragsgemäße Nutzung des Fahrzeuges zu gewährleisten, muss die Software über den Hersteller ständig mit drahtlos übermittelten Daten und Weiterentwicklungen versorgt werden.', q: 'Welche der Antworten ist richtig?', c: 2, o: [
      ['Der Vertrag wird im BGB in erster Linie nach den Vorschriften über Kaufverträge über digitale Produkte beurteilt.', 'Falsch. Nach § 327a III sind die §§ 327 ff. auf Kaufverträge über Waren mit digitalen Elementen gerade nicht anzuwenden. Es gilt Kaufrecht mit den §§ 475b ff.'],
      ['Die Vorschriften über Verträge über eine Ware mit digitalen Elementen sind hier nicht anwendbar', 'Falsch. Das Fahrzeug kann seine hochautomatisierten Funktionen ohne die Software nicht erfüllen, also ist es eine Ware mit digitalen Elementen (§ 327a III 1). K ist Verbraucher, V Unternehmer, also gilt § 475b.'],
      ['K hat gegen V einen Anspruch auf Bereitstellung von Aktualisierungen von Software, mittels derer die vertragsgemäße Nutzung der hochautomatisierten Fahrfunktionen dauerhaft gesichert wird.', 'Richtig. § 475b III Nr. 2 bzw. IV Nr. 2: Der Unternehmer (Verkäufer) muss dem Verbraucher Aktualisierungen bereitstellen, die für den Erhalt der Vertragsmäßigkeit erforderlich sind, und zwar über den Zeitraum, den der Verbraucher erwarten kann. Bei dauerhafter Bereitstellung gilt das für den gesamten Bereitstellungszeitraum.'],
      ['Nur H als Hersteller, nicht V als Verkäufer trifft die Aktualisierungspflicht.', 'Falsch. Vertragspartner und Schuldner ist V. Dass V die Updates tatsächlich über H bereitstellen lässt, ändert daran nichts. V kann bei H Rückgriff nehmen (§ 478).']],
      lsg: ['Verbrauchsgüterkauf: V Unternehmer, K privat, Kfz ist Ware.', 'Ware mit digitalen Elementen: Die Fahrfunktionen hängen von der Software ab (§ 327a III).', 'Folge: §§ 475b ff. Aktualisierungspflicht des Verkäufers (§ 475b IV Nr. 2).', 'Ergebnis: c.'] },
    { n: 30, sv: 'Autohändler A verkauft, übereignet und übergibt der Studentin S aus Shanghai einen (wie S weiß) aus einer Leasingflotte stammenden Gebrauchtwagen in beiderseitigem Einverständnis, nach eingehender Besichtigung und ausgiebiger Probefahrt „so, wie das Fahrzeug ist“. Der erst 6 Monate alte Wagen hat jedoch bereits einen Motorschaden, was zunächst allerdings noch keine spürbaren Auswirkungen auf die Fahrleistung hat und deshalb von den Beteiligten nicht bemerkt wird. 3 Wochen nach Erwerb durch S bleibt der Wagen dann wegen Motorschadens stehen.', q: 'S hat', c: 0, o: [
      ['Gewährleistungsrechte nach § 437, weil das Fahrzeug schon bei Gefahrübergang einen Motorschaden, also einen Sachmangel, hatte', 'Richtig. Ein 6 Monate alter Wagen mit Motorschaden entspricht nicht den objektiven Anforderungen (§ 434 III 1 Nr. 2), denn er weist nicht die übliche Beschaffenheit auf. Der Mangel lag laut Sachverhalt schon bei Übergabe vor, ohnehin würde § 477 I das vermuten. Der Ausschluss „so, wie das Fahrzeug ist“ ist im Verbrauchsgüterkauf (A Unternehmer, S Verbraucherin) nach § 476 I unwirksam.'],
      ['keine Gewährleistungsrechte nach § 437, weil das Fahrzeug bei Gefahrübergang keinen Sachmangel im Rechtssinn aufwies', 'Falsch. Dass der Schaden noch nicht spürbar war, ist unerheblich. Es kommt auf das Vorliegen des Mangels an, nicht auf seine Erkennbarkeit.'],
      ['keine Gewährleistungsrechte trotz des Sachmangels (Motorschadens), weil eine Gewährleistung des Verkäufers A in vorliegendem Fall wirksam ausgeschlossen worden war.', 'Falsch. Im Verbrauchsgüterkauf ist ein solcher Ausschluss nach § 476 I 1 unwirksam. Eine negative Beschaffenheitsvereinbarung nach § 476 I 2 setzt eine eigene Information über das konkrete Merkmal und eine ausdrückliche, gesonderte Vereinbarung voraus. Dass das Fahrzeug aus einer Leasingflotte stammt, ist keine Abrede über einen Motorschaden.'],
      ['keine Gewährleistungsrechte, da kein Sachmangel vorliegt, da die Vertragsparteien über die Beschaffenheit des Motors keine Vereinbarung getroffen haben.', 'Falsch. Fehlt eine Beschaffenheitsvereinbarung, gelten nach § 434 I die objektiven Anforderungen trotzdem, und zwar kumulativ.']],
      lsg: ['Verbrauchsgüterkauf: A Autohändler (§ 14), S Studentin privat (§ 13). Die Herkunft aus Shanghai ist für die Rechtsfrage unerheblich.', 'Sachmangel: § 434 III, übliche Beschaffenheit eines 6 Monate alten Wagens. Motorschaden liegt vor.', 'Bei Gefahrübergang: laut Sachverhalt ja, und § 477 I hilft zusätzlich.', 'Ausschluss: „so, wie das Fahrzeug ist“ ist ein Gewährleistungsausschluss, unwirksam nach § 476 I. Kenntnis (§ 442) fehlt, niemand wusste davon.', 'Ergebnis: a.'] },
    { n: 31, sv: 'Unternehmer U will für seinen Fuhrpark einen gebrauchten BMW X5, den er seinem zukünftigen Geschäftsführer als Firmenfahrzeug zur Verfügung stellen will, kaufen. Der Autohändler A bietet U einen solchen gebrauchten, aufgrund seiner Sonderausstattung einmaligen BMW X5 mit einer Laufleistung von 15.000 km zu einem Kaufpreis von 30.000,00 € an. U nimmt dieses Angebot des A an, der das Fahrzeug – wie vereinbart – am nächsten Tag zum Geschäftssitz des U liefert. Bei der ersten Inspektion stellt sich heraus, dass die Laufleistung des BMW X5 tatsächlich 80.000 km und nicht 15.000 km beträgt, was Autohändler A selbst nicht wusste.', q: 'Welche Ansprüche/Rechte hat U gegenüber A?', c: 1, o: [
      ['U hat gegen A einen Anspruch auf Nacherfüllung.', 'Falsch. Eine Nachbesserung ist unmöglich, denn die Laufleistung lässt sich nicht rückgängig machen. Eine Ersatzlieferung ist unmöglich, denn das Fahrzeug ist wegen der Sonderausstattung einmalig. Der Anspruch ist nach § 275 I ausgeschlossen.'],
      ['U kann ohne Fristsetzung vom Kaufvertrag zurücktreten.', 'Richtig. §§ 437 Nr. 2, 326 V: Ist die Nacherfüllung unmöglich, kann der Käufer ohne Fristsetzung zurücktreten. Der Mangel (80.000 statt vereinbarter 15.000 km, § 434 II) ist erheblich (§ 323 V 2). Verschulden ist für den Rücktritt nicht nötig, deshalb schadet es nicht, dass A nichts wusste. Bei einem beiderseitigen Handelsgeschäft muss U aber unverzüglich gerügt haben (§ 377 HGB).'],
      ['Es liegt ein Fall der nachträglichen Unmöglichkeit der Nacherfüllung vor (nachträglich unbehebbarer Mangel).', 'Falsch. Die Laufleistung war schon bei Vertragsschluss falsch, also ist der Mangel anfänglich unbehebbar (qualitative anfängliche Unmöglichkeit). Für den Schadensersatz wäre deshalb § 311a II einschlägig.'],
      ['U ist im vorliegenden Fall auf ein Minderungsrecht beschränkt.', 'Falsch. U kann wählen zwischen Rücktritt und Minderung. Eine Beschränkung auf die Minderung gäbe es nur bei unerheblichem Mangel (§ 323 V 2), hier ist der Mangel aber erheblich.']],
      lsg: ['Kaufvertrag B2B, kein Verbrauchsgüterkauf. U kauft für sein Unternehmen.', 'Sachmangel: vereinbarte Beschaffenheit 15.000 km (§ 434 II 1 Nr. 1), tatsächlich 80.000 km.', 'Nacherfüllung: Beide Varianten unmöglich (Stückschuld, unbehebbar), also § 275 I.', 'Rücktritt: §§ 437 Nr. 2, 326 V, Fristsetzung entbehrlich. Mangel erheblich. Kein Verschulden nötig.', 'Schadensersatz: § 311a II würde Kenntnis oder zu vertretende Unkenntnis verlangen. A wusste nichts, und ob er es hätte erkennen müssen, bleibt offen.', 'Ergebnis: b.'] },
    { n: 32, sv: 'Zu ihrem 25. Geburtstag bestellt Karlotta K bei Caterer Clean Food C ein veganes Buffet. Als C pünktlich am Geburtstag liefert, stellt K fest, dass das Essen vegetarisch, aber nicht vegan ist. K wirft den C, seinen Mitarbeiter Matze M und sein Catering erbost hinaus. M, der dem C schon öfter als schusselig aufgefallen ist, lässt beim fluchtartigen Verlassen der Wohnung die Eier mit Mayonnaise fallen, so dass der Teppich im Eingang der Wohnung verschmiert ist und aufwändig gereinigt werden muss.', q: 'Welche der folgenden Antworten ist richtig?', c: 3, o: [
      ['K muss dem C Gelegenheit geben, ein veganes Essen nachzuliefern und ihm hierzu eine Frist einräumen.', 'Falsch. Das Buffet war für die Geburtstagsfeier an genau diesem Tag bestellt, also ein absolutes Fixgeschäft. Eine spätere Nachlieferung wäre sinnlos, die Nacherfüllung ist unmöglich (§ 275 I). Eine Fristsetzung ist entbehrlich (§ 326 V).'],
      ['M haftet als Angestellter des C gegenüber der K nicht für den verschmutzten Teppich.', 'Falsch. M haftet persönlich aus § 823 I: Er hat das Eigentum der K (Teppich) fahrlässig beschädigt. Dass er Angestellter ist, schützt ihn im Außenverhältnis nicht. Im Innenverhältnis kann ihn C nach den Grundsätzen des innerbetrieblichen Schadensausgleichs ggf. freistellen.'],
      ['C haftet gegenüber der K nicht für die Verschmutzung des Bodens durch M.', 'Falsch. C haftet vertraglich aus §§ 280 I, 241 II, 278 (M ist Erfüllungsgehilfe bei der Lieferung, Schutzpflicht für Eigentum der K). Daneben haftet er deliktisch aus § 831 I. Eine Exkulpation scheitert, weil C wusste, dass M schusselig ist, und ihn trotzdem einsetzte.'],
      ['K muss das Catering nicht bezahlen', 'Richtig. Geliefert wurde nicht das Vereinbarte (vegan), sondern ein aliud bzw. eine mangelhafte Leistung (§ 434 II, V). Eine Nacherfüllung ist wegen des Fixcharakters unmöglich. K kann deshalb ohne Fristsetzung zurücktreten (§§ 437 Nr. 2, 326 V) bzw. ist nach § 326 I frei. Sie muss nicht zahlen.']],
      lsg: ['Vertragstyp: Catering mit Lieferung von Speisen. Je nach Schwerpunkt ist es ein Kauf- oder Werklieferungsvertrag (§ 650), Ergebnis gleich.', 'Mangel: vereinbart „vegan“, geliefert vegetarisch, also eine Abweichung von der vereinbarten Beschaffenheit.', 'Nacherfüllung: absolutes Fixgeschäft (Geburtstagsfeier), also unmöglich. Rücktritt ohne Frist (§ 326 V), keine Zahlungspflicht.', 'Teppich: M nach § 823 I. C nach §§ 280 I, 241 II, 278 und § 831 (Exkulpation scheitert, Auswahl und Überwachung mangelhaft).', 'Ergebnis: d.'] },
    { n: 33, sv: 'Der 20-jährige Kevin kauft sich am 14.01.2022 zu seinem bevorstehenden 21. Geburtstag ein neues Skateboard bei Sport Schreck. Als er das Skateboard das erste Mal ausprobiert, fallen die zwei Vorderrollen ab. K bringt das Skateboard zu Sport Schreck, teilt den Mangel mit und bittet um Beseitigung des Mangels durch Reparatur. Sport Schreck erklärt sich damit einverstanden und händigt Kevin einen Reparatur- und Abholschein aus. Sport Schreck werde sich wieder bei ihm melden. Nach Ablauf einer für die Mangelbeseitigung angemessenen Frist geht K zu Sport Schreck und erklärt, er will nun von dem Kaufvertrag zurücktreten und sein Geld zurück. Sport Schreck meint, die Voraussetzungen hierfür liegen nicht vor; er solle noch auf die Reparatur warten.', q: 'Wer hat Recht?', c: 0, o: [
      ['Kevin, denn die Voraussetzungen für den Rücktritt sind gegeben.', 'Richtig. Es handelt sich um einen Verbrauchsgüterkauf (Sport Schreck = Unternehmer, Kevin privat). Seit 01.01.2022 gilt § 475d I Nr. 1: Der Verbraucher kann ohne Fristsetzung zurücktreten, wenn der Unternehmer nach Ablauf einer angemessenen Frist ab dem Zeitpunkt, zu dem der Verbraucher ihn über den Mangel unterrichtet hat, die Nacherfüllung nicht vorgenommen hat. Kevin hat den Mangel mitgeteilt, und eine angemessene Frist ist abgelaufen. Der Mangel ist erheblich (Rollen fallen ab).'],
      ['Sport Schreck, da diesem sogar ein zweiter Reparaturversuch zusteht.', 'Falsch. § 440 S. 2 regelt nur, dass eine Nachbesserung nach dem zweiten erfolglosen Versuch als fehlgeschlagen gilt. Ein Recht des Verkäufers auf zwei Versuche folgt daraus nicht. Außerdem hat Sport Schreck noch nicht einmal den ersten Versuch abgeschlossen.'],
      ['Sport Schreck, da Kevin durch den Reparatur- und Abholschein noch gezwungen war, bis zur erfolgreichen Reparatur zu warten.', 'Falsch. Der Abholschein ist nur eine Quittung und keine Vereinbarung über einen Verzicht auf Mängelrechte. Ein solcher Verzicht wäre im Verbrauchsgüterkauf vor Mitteilung des Mangels ohnehin nach § 476 I unwirksam.'],
      ['Keiner der beiden hat Recht.', 'Falsch, Kevin hat Recht.']],
      lsg: ['Verbrauchsgüterkauf: Kevin (20, privat) kauft beim Sportgeschäft.', 'Mangel bei Gefahrübergang: Rollen fallen beim ersten Gebrauch ab (§ 434 III, § 477 I).', 'Rücktritt §§ 437 Nr. 2, 323 I: Grundsätzlich ist eine Fristsetzung nötig. Hier gilt § 475d I Nr. 1, das bloße Unterrichten über den Mangel und der Ablauf einer angemessenen Frist genügen.', 'Erheblichkeit: Das Skateboard ist unbrauchbar, also erheblich.', 'Ergebnis: a.'] },
    { n: 35, sv: 'Abwandlung zu Fall 34 (Karla bestellt im Webshop von Unternehmerin Victoria versandkostenpflichtig ein Kleid; die Ärmel sind ihr zu kurz; Kirschflecken nach dem Kaffeehausbesuch): Nicht nur ist Karla das Kleid zu klein. Sondern der Saum an den Ärmeln hat sich auch schon während des ersten Tragens beim Kaffeehausbesuch gelöst. Unübersehbare Fransen schauen an den Handgelenken aus den Ärmeln. Einige Tage nach Erhalt des Kleides und nach dem Kaffeehausbesuch schickt sie folgende Nachricht zusammen mit dem Kleid an Victoria: „Das Kleid ist zu klein und mangelhaft. Bitte senden Sie mir auf Ihre Kosten das gleiche Kleid mangelfrei und eine Größe größer zu.“', q: 'Wie ist die Rechtslage?', c: 0, o: [
      ['Karla kann den Vertrag ohne jede Begründung widerrufen.', 'Richtig. Es handelt sich um einen Fernabsatzvertrag (Webshop, Verbraucherin gegen Unternehmerin, § 312c). Karla hat ein Widerrufsrecht nach §§ 312g I, 355. Die Frist von 14 Tagen ab Erhalt (§ 356 II Nr. 1a) läuft noch („einige Tage“). Der Widerruf bedarf nach § 355 I 4 keiner Begründung. Das Widerrufsrecht besteht neben den Mängelrechten.'],
      ['Karla kann von Victoria den geforderten Umtausch verlangen.', 'Falsch. Nacherfüllung durch Ersatzlieferung (§ 439 I) bedeutet: dieselbe Sache in mangelfreiem Zustand. Ein Kleid in einer anderen Größe ist eine andere Sache. Dass das Kleid zu klein ist, ist kein Mangel, denn die Größe war ja bestellt. Einen Anspruch auf die größere Größe gibt es nur über einen neuen Vertrag.'],
      ['Karla kann wählen, ob sie von ihrem Widerrufsrecht Gebrauch macht oder Minderung geltend macht.', 'Falsch. Die Minderung erfolgt „statt zurückzutreten“ (§ 441 I) und setzt deshalb die Rücktrittsvoraussetzungen voraus, insbesondere eine erfolglose Frist zur Nacherfüllung. Das Vorrangprinzip der Nacherfüllung gilt auch hier. Eine sofortige Minderung ist nicht möglich.'],
      ['Karla tritt wegen des Mangels durch ihre Nachricht wirksam vom Vertrag zurück.', 'Falsch. Die Nachricht verlangt gerade die Zusendung eines anderen Kleides, also ein Nacherfüllungsverlangen und keine Lösung vom Vertrag. Außerdem fehlt die erfolglose Fristsetzung zur Nacherfüllung.']],
      lsg: ['Zwei parallele Schienen: (1) Widerruf nach Fernabsatzrecht, (2) Mängelrechte nach § 437.', 'Widerruf: Fernabsatzvertrag, Frist läuft, keine Begründung nötig, also möglich.', 'Mängelrechte: Der gelöste Saum ist ein Sachmangel. Erste Stufe ist die Nacherfüllung, also ein gleiches Kleid in gleicher Größe mangelfrei. Die Größe ist kein Mangel.', 'Ergebnis: a.'] }
  ],
  pq: [
    { q: 'Erklären Sie das Stufenverhältnis der Mängelrechte und den „Vorrang der Nacherfüllung“.', a: 'Nach § 437 hat der Käufer zunächst einen Anspruch auf Nacherfüllung (§ 439). Rücktritt, Minderung und Schadensersatz statt der Leistung setzen grundsätzlich voraus, dass der Käufer dem Verkäufer erfolglos eine angemessene Frist zur Nacherfüllung gesetzt hat (§§ 323 I, 281 I, 441 I). Dem Verkäufer wird so ein „Recht zur zweiten Andienung“ gewährt: Er soll den Mangel selbst beheben dürfen, bevor der Vertrag rückabgewickelt wird. Entbehrlich ist die Frist in den Fällen der §§ 281 II, 323 II, 440, 326 V und im Verbrauchsgüterkauf nach § 475d.' },
    { q: 'Welche Sonderregeln gelten beim Verbrauchsgüterkauf für die Gewährleistung?', a: 'Abweichungen zum Nachteil des Verbrauchers vor Mangelmitteilung sind unwirksam, also auch ein pauschaler Gewährleistungsausschluss. Negative Beschaffenheitsvereinbarungen sind nur unter den strengen Voraussetzungen des § 476 I 2 möglich (§ 476). Es gilt eine Beweislastumkehr für Mängel, die sich innerhalb eines Jahres zeigen (§ 477). Rücktritt und Schadensersatz sind ohne Fristsetzung möglich, wenn der Unternehmer nach Mangelmitteilung nicht innerhalb angemessener Frist nacherfüllt (§ 475d). Für Waren mit digitalen Elementen besteht eine Aktualisierungspflicht (§ 475b). Beim Versendungskauf gilt § 447 grundsätzlich nicht (§ 475 II).' }
  ],
  cards: [
    ['§ 434 I n. F.?', 'Subjektive, objektive und Montageanforderungen müssen kumulativ erfüllt sein.'],
    ['§ 437?', 'Nr. 1 Nacherfüllung, Nr. 2 Rücktritt / Minderung, Nr. 3 Schadensersatz / Aufwendungen.'],
    ['Nacherfüllung: Verschulden?', 'Nicht nötig.'],
    ['Wer wählt bei § 439 I?', 'Der Käufer (Reparatur oder Neulieferung).'],
    ['§ 440 S. 2?', 'Nach zwei erfolglosen Versuchen gilt die Nachbesserung als fehlgeschlagen.'],
    ['§ 326 V?', 'Bei unmöglicher Nacherfüllung Rücktritt ohne Fristsetzung.'],
    ['§ 323 V 2?', 'Kein Rücktritt bei unerheblichem Mangel, Minderung bleibt möglich.'],
    ['§ 476?', 'Kein Gewährleistungsausschluss im Verbrauchsgüterkauf.'],
    ['§ 477?', 'Beweislastumkehr: Mangel binnen 1 Jahr, dann wird Mangel bei Gefahrübergang vermutet.'],
    ['§ 475d?', 'Verbraucher: Rücktritt ohne Frist nach Unterrichtung und Ablauf einer angemessenen Frist.'],
    ['Ware mit digitalen Elementen?', '§ 327a III: Kaufrecht und §§ 475b ff., Aktualisierungspflicht des Verkäufers.'],
    ['§ 438?', 'Verjährung grundsätzlich 2 Jahre ab Ablieferung.'],
    ['§ 377 HGB?', 'Rügeobliegenheit beim beiderseitigen Handelskauf.']
  ]
};
window.dispatchEvent(new Event('wpr-data'));
})();
