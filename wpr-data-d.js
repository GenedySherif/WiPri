(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), s = (title, items) => ({ t: 'schema', title, items }),
  b = (title, text) => ({ t: 'bsp', title, text }), f = (title, text) => ({ t: 'falle', title, text }), m = t => ({ t: 'merk', text: t }), v = (title, text) => ({ t: 'vert', title, text });
const fl = (title, items) => ({ t: 'flow', title, items }), cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), rel = (title, items) => ({ t: 'rel', title, items }),
  tf = (title, items) => ({ t: 'tf', title, items }), st = (title, items) => ({ t: 'steps', title, items }), qc = (q, a) => ({ t: 'check', q, a });
const W = window.WPR = window.WPR || {};

const SV34 = 'Karla hat im Webshop von Unternehmerin Victoria versandkostenpflichtig ein Kleid bestellt. Noch am Tag der Lieferung trägt sie es für einen kurzen Kaffeehausbesuch und stellt dabei fest, dass ihr die Ärmel zu kurz sind. Leider fällt ihr dabei auch ein Stück Schwarzwälder Kirschtorte in den Schoß und hinterlässt auf dem Kleid Kirschflecken, die Karla nicht vollständig mit Wasser und Seife entfernen kann. Am nächsten Tag verpackt sie das Kleid und legt einen Zettel bei: „Ich möchte vom Kauf zurücktreten, weil mir das Kleid zu klein ist.“ Sie schickt das Paket an Victoria.';

W[12] = {
  src: 'Skript S. 4 („Inhalt von Verträgen“, „Beendigung“) · §§ 305–310, 312 ff., 355 ff., 186–193', title: 'AGB, Fernabsatz & Fristen',
  intro: `Massengeschäfte laufen über vorformulierte Bedingungen und über das Internet. Das BGB reagiert darauf mit zwei Schutzsystemen. Das AGB-Recht kontrolliert, ob vorformulierte Klauseln überhaupt Vertragsinhalt werden und ob sie inhaltlich fair sind. Das Fernabsatzrecht gibt Verbrauchern ein Widerrufsrecht, weil sie die Ware vorher nicht prüfen konnten. Beide hängen an Fristen, und deren Berechnung ist ein eigenes, sehr klausurrelevantes Handwerk.`,
  ziel: 'AGB in drei Schritten prüfen (Begriff, Einbeziehung, Inhaltskontrolle), Widerrufsrecht und Rechtsfolgen sicher anwenden und jede Frist nach §§ 187 ff. tagesgenau berechnen.',
  relevanz: 'Sehr hoch. Fristberechnung und AGB-Einbeziehung sind Standard-MC-Fragen.',
  faelle: 'Fälle 34, 36, 37, 38, 39 und 40. AGB-Inhaltskontrolle auch in Fall 44 (Modul 13).',
  sections: [
    { title: 'AGB: Begriff und Einbeziehung', blocks: [
      fl('Schaubild: AGB-Prüfung in drei Stufen', ['1. AGB? :: § 305 I', '2. Einbezogen? :: § 305 II, III, § 305c I', '3. Wirksam? :: §§ 309, 308, 307', 'Folge :: § 306: Rest-Vertrag bleibt']),
      s('Begriff, § 305 I', [
        'Vertragsbedingungen :: Regelungen, die den Vertragsinhalt gestalten sollen. Auch Hinweisschilder und Hinweise in Apps zählen dazu (Fall 37).',
        'Für eine Vielzahl von Verträgen vorformuliert :: Nach der Rechtsprechung ab beabsichtigter dreimaliger Verwendung. Gegenüber Verbrauchern genügt auch die einmalige Verwendung für die Inhaltskontrolle (§ 310 III Nr. 2).',
        'Von einer Partei (Verwender) gestellt :: einseitig auferlegt. Gegenüber Verbrauchern wird das vermutet (§ 310 III Nr. 1).',
        'Nicht im Einzelnen ausgehandelt, § 305 I 3 :: Individualabreden gehen vor (§ 305b).'
      ]),
      s('Einbeziehung gegenüber Verbrauchern, § 305 II', [
        'Ausdrücklicher Hinweis bei Vertragsschluss :: oder, wenn das unverhältnismäßig schwierig ist, ein deutlich sichtbarer Aushang am Ort des Vertragsschlusses',
        'Möglichkeit, in zumutbarer Weise Kenntnis zu nehmen :: Bei Distanzgeschäften heißt das Übersendung, Abdruck oder ein Link. „Liegen in meinem Geschäft in Stuttgart aus“ ist für einen Kunden in München nicht zumutbar (Fall 36).',
        'Einverständnis der anderen Partei :: in der Regel konkludent durch den Vertragsschluss. Eine ausdrückliche Zustimmung oder ein Vermerk ist nicht nötig (Fall 36 b, Fall 44 d).',
        'Zeitpunkt :: BEI Vertragsschluss. Ein Hinweis erst danach (auf der Rechnung, auf einem Schild an der Ausfahrt) ist zu spät (Fall 37 d).'
      ]),
      cmp('Schaubild: Einbeziehung B2C vs. B2B', ['', 'Gegenüber Verbraucher (B2C)', 'Gegenüber Unternehmer (B2B)'], [
        ['§ 305 II, III', 'gilt', 'gilt NICHT (§ 310 I 1)'],
        ['Was ist nötig?', 'ausdrücklicher Hinweis, zumutbare Kenntnisnahme, Einverständnis', 'rechtsgeschäftliche Einigung, auch konkludent. Erkennbarer Hinweis auf AGB genügt, Kenntnisnahme muss nur möglich sein (Anforderung)'],
        ['§§ 308, 309', 'gelten direkt', 'nicht direkt, aber über § 307 als Indiz'],
        ['§ 305c (überraschend)', 'gilt', 'gilt']
      ]),
      f('Klausurfalle', `„Wenn K Unternehmer ist, gibt es keine rechtlichen Anforderungen an den Einbezug von AGB“ ist falsch (Fall 37 b). § 310 I erspart nur die Formalien des § 305 II. Eine vertragliche Einigung über die Geltung der AGB ist immer nötig, und die Inhaltskontrolle nach § 307 gilt ebenfalls.`)
    ] },
    { title: 'AGB: Inhaltskontrolle', blocks: [
      s('Reihenfolge der Inhaltskontrolle (vom Speziellen zum Allgemeinen)', [
        '§ 309: Klauselverbote OHNE Wertungsmöglichkeit :: Ist die Klausel aufgelistet, ist sie unwirksam. Wichtigster Fall ist Nr. 7: Ein Ausschluss oder eine Begrenzung der Haftung für (a) Verletzung von Leben, Körper oder Gesundheit bei jeder Fahrlässigkeit und (b) sonstige Schäden bei grober Fahrlässigkeit oder Vorsatz ist unwirksam (Fall 44).',
        '§ 308: Klauselverbote MIT Wertungsmöglichkeit :: unbestimmte Rechtsbegriffe wie „unangemessen lange Frist“ (Nr. 1) oder ein Änderungsvorbehalt (Nr. 4).',
        '§ 307: Generalklausel :: Eine Klausel ist unwirksam, wenn sie den Vertragspartner entgegen Treu und Glauben unangemessen benachteiligt. Im Zweifel ist das der Fall, wenn sie von wesentlichen Grundgedanken des Gesetzes abweicht (II Nr. 1) oder wesentliche Rechte und Pflichten aushöhlt, sog. Kardinalpflichten (II Nr. 2). Hinzu kommt das Transparenzgebot (I 2).'
      ]),
      v('Waschanlagen-Klausel (Fall 37) weitergedacht', `Fall 37 fragt nur nach der Einbeziehung. Bei der Inhaltskontrolle wäre zu prüfen: § 309 Nr. 7 b erfasst nur grobe Fahrlässigkeit, ist also nicht einschlägig. Nach § 307 II Nr. 2 hat der BGH aber entschieden, dass ein Waschanlagenbetreiber seine Haftung für leicht fahrlässig verursachte Fahrzeugschäden nicht ausschließen kann, weil der Schutz des Fahrzeugs eine Kardinalpflicht des Waschvertrags ist. Die Klausel ist also zwar einbezogen, aber wohl unwirksam.`),
      p(`Rechtsfolge einer unwirksamen oder nicht einbezogenen Klausel nach § 306: Der Vertrag bleibt im Übrigen wirksam. An die Stelle der Klausel tritt das Gesetz. Eine geltungserhaltende Reduktion (Kürzen der Klausel auf das gerade noch Zulässige) gibt es nicht. Die Klausel fällt ganz weg.`),
      tf('Schnelltest: AGB', [
        ['AGB müssen dem Kunden immer ausgehändigt werden.', false, 'Es genügt die Möglichkeit zumutbarer Kenntnisnahme (§ 305 II Nr. 2), z. B. ein Link oder Aushang (Fall 36 c).'],
        ['Ein Haftungsausschluss für Körperverletzungen in AGB ist unwirksam.', true, '§ 309 Nr. 7 a (Fall 44).'],
        ['§ 312j verdrängt die AGB-Regeln.', false, '§ 312j regelt zusätzliche Pflichten im E-Commerce (Button), die §§ 305 ff. gelten daneben (Fall 37 c).'],
        ['Eine unwirksame Klausel macht den ganzen Vertrag nichtig.', false, '§ 306 I: Der Vertrag bleibt im Übrigen wirksam.']
      ])
    ] },
    { title: 'Fernabsatz und Widerrufsrecht', blocks: [
      s('Widerrufsrecht: Prüfung', [
        'Verbrauchervertrag, § 312 I :: Unternehmer und Verbraucher, entgeltliche Leistung',
        'Fernabsatzvertrag, § 312c :: Ausschließlich Fernkommunikationsmittel (Internet, Telefon, Brief) im Rahmen eines für den Fernabsatz organisierten Systems. ODER Außergeschäftsraumvertrag, § 312b (Haustür, Messe-Ausflug).',
        'Kein Ausschluss, § 312g II :: u. a. nach Kundenspezifikation angefertigte Waren (Nr. 1), schnell verderbliche Waren (Nr. 2), versiegelte Hygieneartikel nach Entsiegelung (Nr. 3).',
        'Widerrufserklärung, § 355 I :: Gegenüber dem Unternehmer muss der Entschluss zum Widerruf eindeutig hervorgehen. Das Wort „Widerruf“ ist nicht nötig, eine Begründung auch nicht (§ 355 I 4). Kommentarlose Rücksendung genügt NICHT. „Ich möchte vom Kauf zurücktreten“ ist als Widerruf auszulegen (§ 133).',
        'Frist, § 355 II :: 14 Tage. Zur Fristwahrung genügt die rechtzeitige ABSENDUNG (§ 355 I 5).',
        'Fristbeginn, § 356 :: Bei Waren mit Erhalt (§ 356 II Nr. 1a), aber nicht vor ordnungsgemäßer Belehrung (§ 356 III 1). Spätestens erlischt das Recht 12 Monate und 14 Tage nach Fristbeginn (§ 356 III 2).'
      ]),
      cmp('Schaubild: Rechtsfolgen des Widerrufs (§§ 357, 357a)', ['Wer?', 'Was?', 'Norm'], [
        ['Unternehmer', 'Kaufpreis zurück innerhalb von 14 Tagen', '§ 357 I'],
        ['Unternehmer', 'Hinsendekosten zurück (Standardversand)', '§ 357 II'],
        ['Verbraucher', 'Ware zurück innerhalb von 14 Tagen', '§ 357 I'],
        ['Verbraucher', 'Rücksendekosten, wenn er darüber informiert wurde', '§ 357 V'],
        ['Verbraucher', 'Wertersatz für Wertverlust durch einen Umgang, der zur Prüfung nicht nötig war (Tragen im Café, Flecken)', '§ 357a I'],
        ['Unternehmer', 'Zurückbehaltungsrecht bis Rückerhalt oder Nachweis der Absendung', '§ 357 IV']
      ]),
      f('Klausurfalle', `Im stationären Handel gibt es kein Widerrufsrecht (Fall 38 a, Fall 10). Außerdem ist zwischen Widerruf und Rücktritt zu unterscheiden: Ein Rücktritt braucht einen Grund (Mangel). „Zu klein“ ist kein Mangel, wenn die Größe bestellt war. Wer „Rücktritt“ schreibt, aber keinen Grund hat, dessen Erklärung wird als Widerruf ausgelegt (Fall 34).`),
      st('Fall 34 Schritt für Schritt', [
        'Fernabsatz :: Karla (Verbraucherin) kauft im Webshop von Victoria (Unternehmerin). Das ist ein Fernabsatzvertrag nach § 312c, Widerrufsrecht nach § 312g I.',
        'Erklärung :: „Ich möchte vom Kauf zurücktreten, weil mir das Kleid zu klein ist.“ Als Rücktritt unwirksam, weil „zu klein“ kein Mangel ist. Auszulegen ist die Erklärung als Widerruf (§§ 133, 355 I 3), denn der Wille, sich vom Vertrag zu lösen, ist eindeutig.',
        'Frist :: Absendung am Tag nach Erhalt, also rechtzeitig. Auf den Eingang bei Victoria kommt es nicht an (§ 355 I 5).',
        'Rückabwicklung :: Victoria erstattet den Kaufpreis und die Hinsendekosten (§ 357 I, II).',
        'Wertersatz :: Tragen im Café und Flecken gehen über die Prüfung hinaus. Karla muss für den Wertverlust Ersatz leisten (§ 357a I), wenn sie ordnungsgemäß belehrt wurde. Das ergibt Antwort c.'
      ])
    ] },
    { title: 'Fristberechnung, §§ 186–193', blocks: [
      cmp('Schaubild: Die Fristregeln', ['Regel', 'Norm', 'Bedeutung'], [
        ['Ereignisfrist', '§ 187 I', 'Fällt der Beginn auf ein Ereignis im Lauf des Tages (Zugang, Erhalt, Bestellung), wird dieser Tag nicht mitgerechnet. Die Frist beginnt am Folgetag um 0 Uhr.'],
        ['Beginnfrist', '§ 187 II', 'Ist der Beginn eines Tages maßgeblich (z. B. „ab 1. Mai“, Lebensalter), zählt der Tag mit.'],
        ['Tagesfrist: Ende', '§ 188 I', 'mit Ablauf des letzten Tages der Frist (24 Uhr)'],
        ['Wochen- oder Monatsfrist: Ende', '§ 188 II', 'mit Ablauf des Tages, der durch seine Benennung dem Ereignistag entspricht (Samstag → Samstag)'],
        ['Wochenende, Feiertag', '§ 193', 'Fällt der letzte Tag einer Frist für eine Willenserklärung oder Leistung auf Samstag, Sonntag oder Feiertag, endet sie am nächsten Werktag. Gilt NUR für das Ende, nicht für den Beginn (Fall 38 d).']
      ]),
      st('Fall 39: Widerrufsfrist rechnen', [
        'Ereignis :: Die Kette kommt am Samstag, 7. Mai 2022 an (Erhalt, § 356 II Nr. 1a). Ein Ereignis im Lauf des Tages, also § 187 I: Der 7. Mai zählt nicht mit.',
        'Fristbeginn :: Sonntag, 8. Mai 2022, 0 Uhr.',
        '14 Tage zählen :: Tag 1 = 8. Mai, Tag 14 = Samstag, 21. Mai 2022 (§ 188 II: Samstag entspricht dem Ereignistag Samstag).',
        'Wochenende? :: Der 21. Mai ist ein Samstag. Nach § 193 verschiebt sich das Fristende auf den nächsten Werktag.',
        'Ergebnis :: Die Frist endet mit Ablauf des Montag, 23. Mai 2022. Klaudia kann noch widerrufen, also Antwort b.'
      ]),
      st('Fall 40: Lieferfrist rechnen', [
        'Ereignis :: Die Bestellung geht am Freitag, 7. Juli 2023 um 10 Uhr ein, ein Ereignis im Lauf des Tages, also § 187 I: Der 7. Juli zählt nicht.',
        'Fristbeginn :: Samstag, 8. Juli 2023.',
        '7 Tage :: Tag 1 = Sa 8.7., Tag 7 = Fr 14.7. (§ 188 I bzw. II: Freitag entspricht dem Ereignistag Freitag).',
        'Wochenende? :: Freitag ist ein Werktag, § 193 greift nicht.',
        'Ergebnis :: Vera muss spätestens am Freitag, 14. Juli 2023 liefern, also Antwort b.'
      ]),
      qc('Kurz-Check: Ein Brief geht am Mittwoch, 3. Januar zu und setzt eine Frist von 2 Wochen. Wann endet sie?', 'Ereignisfrist (§ 187 I): Der 3. Januar zählt nicht. Nach § 188 II endet die Frist mit Ablauf des Tages der zweiten Woche, der durch seine Benennung dem Ereignistag entspricht, also Mittwoch, 17. Januar, 24 Uhr.')
    ] }
  ],
  cases: [
    { n: 34, sv: SV34, q: 'Wie ist die Rechtslage?', c: 2, o: [
      ['Karla ist wirksam vom Kauf zurückgetreten.', 'Falsch. Ein Rücktritt setzt einen Rücktrittsgrund voraus, etwa einen Mangel und eine Frist nach §§ 437 Nr. 2, 323. „Zu klein“ ist kein Mangel, wenn die Größe so bestellt war. Die Erklärung wirkt aber als Widerruf.'],
      ['Karla hat Anspruch auf Erstattung des Kaufpreises, die Versandkosten muss Unternehmerin Victoria tragen.', 'Falsch, weil unvollständig und teilweise unrichtig. Victoria trägt nur die Hinsendekosten (§ 357 II), die Rücksendekosten trägt grundsätzlich Karla (§ 357 V). Vor allem fehlt der Wertersatz für die Flecken (§ 357a I).'],
      ['Victoria muss Karla die Hinsendekosten und den Kaufpreis erstatten. Karla muss sich jedoch die Wertminderung des Kleides durch die Verschmutzung anrechnen lassen.', 'Richtig. Die Erklärung ist als Widerruf auszulegen (§§ 312g I, 355 I). Folge: Erstattung des Kaufpreises und der Kosten der Standard-Hinsendung (§ 357 I, II). Das Tragen im Café und die Flecken sind ein Umgang, der zur Prüfung der Ware nicht nötig war. Karla muss Wertersatz leisten (§ 357a I).'],
      ['Karla hat nur dann von ihrem Widerrufsrecht wirksam Gebrauch gemacht, wenn das Kleid binnen 14 Tagen ab Erhalt zurück bei Victoria eingetroffen ist.', 'Falsch. Zur Fristwahrung genügt nach § 355 I 5 die rechtzeitige Absendung der Widerrufserklärung. Es kommt nicht auf den Eingang an.']],
      lsg: ['Widerrufsrecht: Fernabsatz (§ 312c), Verbraucherin gegen Unternehmerin, kein Ausschluss. Recht nach § 312g I.', 'Erklärung: „zurücktreten“ ist nach §§ 133, 157 als Widerruf auszulegen. Eine Begründung ist nicht nötig, eine falsche schadet nicht.', 'Frist: Absendung am Tag 2, also rechtzeitig.', 'Folgen: § 357 I, II (Kaufpreis und Hinsendekosten). § 357a I Wertersatz für Wertverlust durch über die Prüfung hinausgehende Nutzung.', 'Ergebnis: c.'] },
    { n: 36, sv: 'Weinhändler V aus Stuttgart bietet seinem Kunden K aus München am 17. Juni 2022 schriftlich mehrere Sorten württembergischen Rotwein an. Hierbei weist er ausdrücklich auf die Gültigkeit seiner AGB hin, die in seinem Geschäft zur Einsichtnahme bereitliegen würden. K bestellt schriftlich mehrere Flaschen zu den im Angebot genannten Bedingungen. V nimmt das Angebot des K am 20. Juni 2022 an.', q: 'Welche der folgenden Antworten ist richtig?', c: 3, o: [
      ['Für einen wirksamen Einbezug der AGBs müsste V in der Auftragsbestätigung auf die Gültigkeit seiner AGB verweisen.', 'Falsch. Der Hinweis muss bei Vertragsschluss erfolgen, und er ist hier bereits im Angebot ausdrücklich erfolgt. Ein erneuter Hinweis in der Auftragsbestätigung ist nicht erforderlich.'],
      ['K hätte für einen wirksamen Einbezug der AGBs diesen ausdrücklich zustimmen müssen, in Form eines speziellen Vermerks auf der Bestellung.', 'Falsch. Das Einverständnis (§ 305 II a. E.) kann konkludent erklärt werden. Die Bestellung „zu den im Angebot genannten Bedingungen“ genügt.'],
      ['AGBs sind immer nur dann wirksam einbezogen, wenn sie an den Kunden ausgehändigt werden.', 'Falsch. Es genügt die Möglichkeit zumutbarer Kenntnisnahme. Ein Aushändigen ist eine, aber nicht die einzige Möglichkeit (Link, Abdruck auf der Rückseite, Aushang).'],
      ['V hätte K für einen wirksamen Einbezug der AGBs die Möglichkeit einräumen müssen, vor Vertragsschluss von den AGB in zumutbarer Weise Kenntnis zu nehmen, bspw. durch Übersendung der AGBs an den Kunden.', 'Richtig. § 305 II Nr. 2 verlangt, dass die andere Vertragspartei in zumutbarer Weise vom Inhalt Kenntnis nehmen kann. Einem Kunden in München ist es nicht zumutbar, nach Stuttgart zu fahren. Bei einem Distanzgeschäft hätte V die AGB übersenden oder beifügen müssen. Die AGB sind nicht einbezogen, der Vertrag gilt ohne sie (§ 306).']],
      lsg: ['Annahme: K ist Verbraucher, ein Weinkauf für private Zwecke liegt nahe. Wäre K Unternehmer, gälte § 305 II nicht (§ 310 I), und eine Einbeziehung wäre leichter möglich.', '§ 305 II Nr. 1: Ausdrücklicher Hinweis ist erfolgt (im Angebot).', '§ 305 II Nr. 2: Zumutbare Kenntnisnahme fehlt (Distanz München–Stuttgart).', 'Einverständnis: konkludent durch die Bestellung.', 'Ergebnis: d.'] },
    { n: 37, sv: 'Unternehmer Volkmar (V) betreibt eine Autowaschanlage, bei der der Kunde zunächst eine App herunterladen muss, mit der er das Waschprogramm auswählen, zahlen und den Waschvorgang starten kann. Auf der Bestellseite der App ist ein gut lesbarer Hinweis oberhalb des „Bestell-Button“ angebracht auf dem steht: „Wir haften nicht für leicht fahrlässig verursachte Schäden an Ihrem Fahrzeug durch die Waschanlage.“ Unternehmer Klaus (K) möchte seinen Firmenwagen in einer Autowaschanlage des V reinigen lassen. K wählt ein Programm aus, zahlt und fährt vorschriftsmäßig in die Waschanlage. Während des Waschvorgangs erfasst eine Reinigungsbürste einen Scheibenwischer am Wagen des K und reißt ihn ab. Grund war eine unzureichende Wartung der Waschanlage durch V. V handelte im Hinblick auf die Wartung leicht fahrlässig.', q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 0, o: [
      ['Bei dem Hinweis in der App handelt es sich um eine Haftungsbegrenzung durch AGB. Sie ist wirksam Vertragsbestandteil geworden.', 'Richtig, bezogen auf die Einbeziehung. Der Hinweis ist eine für eine Vielzahl von Verträgen vorformulierte, von V gestellte Vertragsbedingung (§ 305 I). Er steht gut lesbar unmittelbar vor dem Bestellbutton, also bei Vertragsschluss. K schließt mit Kenntnis ab. Gegenüber dem Unternehmer K genügt das (§ 310 I), es wären sogar die strengeren Anforderungen des § 305 II erfüllt. „Vertragsbestandteil geworden“ betrifft die Einbeziehung. Ob die Klausel der Inhaltskontrolle standhält, ist eine zweite Frage (BGH: Kardinalpflicht, § 307 II Nr. 2).'],
      ['Wenn K ein Unternehmer ist, gibt es keine rechtlichen Anforderungen an den Einbezug von AGBs.', 'Falsch. § 310 I nimmt nur § 305 II, III aus. Eine (auch konkludente) rechtsgeschäftliche Einbeziehungsvereinbarung bleibt erforderlich. Außerdem gilt § 305c.'],
      ['§ 312j BGB verdrängt die Regelungen des Einbezuges von AGBs nach den §§ 305 ff BGB bei Verbrauchern.', 'Falsch. § 312j regelt besondere Pflichten im elektronischen Geschäftsverkehr mit Verbrauchern (Button-Lösung, Informationspflichten). Er tritt neben die §§ 305 ff. und verdrängt sie nicht.'],
      ['Wenn K ein Unternehmer ist und es sich bei dem Fahrzeug um einen Firmenwagen handelt, reicht für die wirksame Haftungsbegrenzung, wenn das Hinweisschild gut sichtbar erst an der Ausfahrt steht.', 'Falsch. Ein Hinweis nach Vertragsschluss und nach Erbringung der Leistung kann nicht mehr Vertragsinhalt werden, auch nicht im B2B-Verkehr. Die Einigung muss bei Vertragsschluss erfolgen.']],
      lsg: ['AGB-Begriff (§ 305 I): Der App-Hinweis ist vorformuliert, für eine Vielzahl bestimmt und gestellt.', 'Einbeziehung: K ist Unternehmer, also § 310 I. Nötig ist eine Einigung bei Vertragsschluss. Hinweis vor dem Button und Abschluss in Kenntnis: einbezogen.', 'Inhaltskontrolle (über die Frage hinaus): § 309 Nr. 7 b greift nicht, weil es um leichte Fahrlässigkeit geht. § 307 II Nr. 2: Schutz des Fahrzeugs ist eine Kardinalpflicht, nach dem BGH ist ein Ausschluss auch für leichte Fahrlässigkeit unwirksam.', 'Ergebnis: a.'] },
    { n: 38, q: 'Welche der folgenden Aussagen trifft zu?', c: 2, o: [
      ['Auch bei einem Kauf innerhalb von Geschäftsräumen eines Händlers, im sog. stationären Handel, besteht grundsätzlich ein Widerrufsrecht nach § 312g BGB.', 'Falsch. § 312g I gewährt das Widerrufsrecht nur bei Außergeschäftsraum- und Fernabsatzverträgen. Im Laden kann der Kunde die Ware prüfen, deshalb ist er nicht schutzbedürftig.'],
      ['Die Frist des Widerrufsrechts gem. § 312g BGB beginnt immer mit dem Vertragsschluss.', 'Falsch. § 355 II 2 nennt den Vertragsschluss nur als Grundsatz, § 356 II verschiebt den Beginn beim Warenkauf auf den Erhalt der Ware. Außerdem beginnt die Frist nicht vor ordnungsgemäßer Belehrung (§ 356 III).'],
      ['Sofern es an einer ordnungsgemäßen Widerrufsbelehrung fehlt, fängt die Widerrufsfrist zunächst nicht an zu laufen.', 'Richtig. § 356 III 1: Die Frist beginnt nicht, bevor der Unternehmer den Verbraucher ordnungsgemäß belehrt hat (Art. 246a § 1 II EGBGB). Spätestens erlischt das Widerrufsrecht aber nach 12 Monaten und 14 Tagen (§ 356 III 2). Daher das Wort „zunächst“.'],
      ['Wenn der Fristbeginn für den Widerruf rechnerisch auf einen Sonntag fällt, beginnt die Frist am darauffolgenden Montag.', 'Falsch. § 193 verschiebt nur das Fristende, nicht den Beginn. Eine Frist kann an einem Sonntag beginnen (Fall 39: Beginn am Sonntag, 8. Mai).']],
      lsg: ['a) § 312g I nennt nur §§ 312b, 312c.', 'b) § 356 II: Beginn mit Erhalt der Ware.', 'c) § 356 III 1: richtig.', 'd) § 193 betrifft nur den letzten Tag.'] },
    { n: 39, sv: 'Klaudia bestellt am 1. Mai 2022 in Viktorias Webshop eine Modeschmuck-Kette als Geburtstagsgeschenk für ihre Tochter. Viktoria erfüllt in ihrer Webpräsenz alle Informationspflichten ordnungsgemäß. Die Kette kommt am Samstag, dem 7. Mai 2022 bei Klaudia an. Ihre Tochter packt das Geschenk 14 Tage später, am Samstag, den 21. Mai 2022, aus und ist entsetzt. Die Mutter hat den Geschmack der Tochter klar verfehlt. Deshalb möchte Klaudia die Kette zurückgeben.', q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 1, o: [
      ['Klaudia kann den Vertrag nach den Regelungen über den Fernabsatz bis zum Montag, dem 16. Mai 2022, 24 Uhr, widerrufen.', 'Falsch. Der 16. Mai wäre richtig, wenn man ab Bestellung (1. Mai) rechnet und auf den nächsten Werktag verschiebt. Beim Warenkauf beginnt die Frist aber erst mit Erhalt (§ 356 II Nr. 1a).'],
      ['Die Widerrufsfrist läuft am Montag, dem 23. Mai 2022 ab.', 'Richtig. Erhalt am Sa 07.05. (Ereignis, § 187 I), also Fristbeginn am So 08.05. Nach 14 Tagen endet die Frist am Sa 21.05. (§ 188 II). Weil das ein Samstag ist, verschiebt § 193 das Ende auf den nächsten Werktag, Mo 23.05.2022.'],
      ['Klaudia kann den Vertrag nicht widerrufen.', 'Falsch. Es liegt ein Fernabsatzvertrag vor, kein Ausschlussgrund nach § 312g II (Modeschmuck ist weder individuell angefertigt noch eine Hygieneware). Die Frist läuft noch.'],
      ['Klaudia hat lediglich einen Anspruch auf Umtausch, nicht auf Widerruf.', 'Falsch. Ein gesetzliches Umtauschrecht gibt es nicht. Das Gesetz gibt ein Widerrufsrecht.']],
      lsg: ['Widerrufsrecht: Fernabsatz, Verbraucherin, Belehrung ordnungsgemäß, kein Ausschluss.', 'Frist: 14 Tage (§ 355 II), Beginn mit Erhalt der Ware (§ 356 II Nr. 1a).', 'Berechnung: Ereignis 07.05., Beginn 08.05. (§ 187 I), Ende rechnerisch 21.05. (§ 188 II), Samstag, also nach § 193 Montag 23.05.', 'Ergebnis: b.'] },
    { n: 40, sv: 'Knut bestellt am Freitag, 7. Juli 2023, 10 Uhr, per E-Mail bei Vera eine Palette Schrauben in Sonderanfertigung für seinen Betrieb. Vera sagt die Lieferung binnen 7 Tage ab Eingang der Bestellung zu.', q: 'An welchem Tag muss Vera spätestens liefern, um ihre zugesagte Leistung fristgerecht zu erbringen?', c: 1, o: [
      ['Donnerstag, 13. Juli 2023', 'Falsch. Dieses Ergebnis entsteht, wenn man den Ereignistag (7. Juli) fälschlich mitzählt. § 187 I schließt ihn aus.'],
      ['Freitag, 14. Juli 2023', 'Richtig. Der Eingang der Bestellung am Fr 07.07. um 10 Uhr ist ein Ereignis im Lauf des Tages, also zählt der Tag nicht mit (§ 187 I). Fristbeginn am Sa 08.07. Der 7. Tag ist Fr 14.07., die Frist endet mit dessen Ablauf (§ 188 I). Freitag ist ein Werktag, § 193 greift nicht.'],
      ['Samstag, 15. Juli 2023', 'Falsch. Das wäre der 8. Tag.'],
      ['Montag, 17. Juli 2023', 'Falsch. Das wäre richtig, wenn das Fristende auf Samstag oder Sonntag fiele (§ 193). Das ist nicht der Fall.']],
      lsg: ['Ereignis: Eingang der E-Mail am 07.07. Nach § 187 I zählt der Tag nicht.', 'Zählen: 08. (1), 09. (2), 10. (3), 11. (4), 12. (5), 13. (6), 14. (7).', 'Ende: Ablauf des 14.07. (§ 188 I). Werktag, also keine Verschiebung.', 'Ergebnis: b. Hinweis: Ein Widerrufsrecht bestünde ohnehin nicht (Unternehmer, Sonderanfertigung), aber danach war nicht gefragt.'] }
  ],
  pq: [
    { q: 'Nennen Sie die Einbeziehungsvoraussetzungen von AGB gegenüber Verbrauchern.', a: 'Nach § 305 II muss der Verwender bei Vertragsschluss (1) ausdrücklich auf die AGB hinweisen, oder, wenn das unverhältnismäßig schwierig ist, durch deutlich sichtbaren Aushang am Ort des Vertragsschlusses. (2) Er muss der anderen Partei die Möglichkeit verschaffen, in zumutbarer Weise von ihrem Inhalt Kenntnis zu nehmen. (3) Die andere Partei muss mit der Geltung einverstanden sein, was auch konkludent geschehen kann. Überraschende Klauseln werden nicht Vertragsbestandteil (§ 305c I). Gegenüber Unternehmern gilt § 305 II nicht (§ 310 I).' },
    { q: 'Wie berechnen Sie eine Frist von 14 Tagen, die mit Erhalt einer Ware am Freitag beginnt?', a: 'Der Erhalt ist ein Ereignis im Lauf des Tages, also wird dieser Tag nach § 187 I nicht mitgerechnet. Die Frist beginnt am Samstag um 0 Uhr. Nach § 188 II endet sie mit Ablauf des Tages der zweiten Woche, der durch seine Benennung dem Ereignistag entspricht, also am Freitag zwei Wochen später um 24 Uhr. Fiele das Ende auf einen Samstag, Sonntag oder Feiertag, verschöbe es sich nach § 193 auf den nächsten Werktag.' },
    { q: 'Was sind die Rechtsfolgen eines wirksamen Widerrufs?', a: 'Die empfangenen Leistungen sind spätestens nach 14 Tagen zurückzugewähren (§ 357 I). Der Unternehmer erstattet den Kaufpreis und die Kosten der Standard-Hinsendung (§ 357 II). Der Verbraucher trägt die Rücksendekosten, wenn er darüber informiert wurde (§ 357 V). Er muss Wertersatz leisten, soweit der Wertverlust auf einen Umgang zurückgeht, der zur Prüfung von Beschaffenheit, Eigenschaften und Funktionsweise nicht notwendig war, und er ordnungsgemäß belehrt wurde (§ 357a I). Der Unternehmer kann die Erstattung verweigern, bis er die Ware zurückerhalten oder den Nachweis der Absendung bekommen hat (§ 357 IV).' }
  ],
  cards: [
    ['AGB: Begriff?', '§ 305 I: für eine Vielzahl vorformuliert, gestellt, nicht ausgehandelt.'],
    ['Einbeziehung B2C?', '§ 305 II: Hinweis, zumutbare Kenntnisnahme, Einverständnis, bei Vertragsschluss.'],
    ['Einbeziehung B2B?', '§ 310 I: § 305 II gilt nicht, aber eine Einigung ist nötig.'],
    ['§ 309 Nr. 7?', 'Kein Haftungsausschluss für Körperschäden (jede Fahrlässigkeit) und für sonstige Schäden bei grober Fahrlässigkeit oder Vorsatz.'],
    ['§ 307 II Nr. 2?', 'Kardinalpflichten dürfen nicht ausgehöhlt werden.'],
    ['§ 306?', 'Unwirksame Klausel fällt weg, der Vertrag bleibt, und es gilt das Gesetz.'],
    ['Widerrufsrecht wann?', '§ 312g: Fernabsatz (§ 312c) oder Außergeschäftsraum (§ 312b).'],
    ['Widerrufsfrist?', '14 Tage (§ 355 II), Warenkauf ab Erhalt (§ 356 II), nicht vor Belehrung, max. 12 Monate und 14 Tage.'],
    ['Fristwahrung Widerruf?', 'Rechtzeitige Absendung (§ 355 I 5).'],
    ['Wertersatz?', '§ 357a I: bei einem Umgang, der über die Prüfung hinausgeht.'],
    ['§ 187 I?', 'Ereignistag zählt nicht mit.'],
    ['§ 188 II?', 'Wochenfrist endet am gleich benannten Wochentag.'],
    ['§ 193?', 'Fristende am Wochenende oder Feiertag verschiebt sich auf den nächsten Werktag (nur das Ende!).']
  ]
};

W[13] = {
  src: 'Skript S. 4 („Deliktsrecht“) · §§ 823, 831, 253, 278 BGB, ProdHaftG', title: 'Delikt & Produkthaftung',
  intro: `Das Deliktsrecht regelt die Haftung zwischen Personen, die keinen Vertrag haben: zwischen dem Passanten und dem Gerüstbauer, zwischen dem Schläger und dem Geschlagenen, zwischen dem Autohersteller und dem Käufer, der beim Händler gekauft hat. Kernnorm ist § 823 I. Dazu kommen die Haftung für Gehilfen (§ 831) und die verschuldensunabhängige Produkthaftung.`,
  ziel: '§ 823 I sicher prüfen, § 831 von § 278 abgrenzen, Schmerzensgeld begründen und das ProdHaftG mit seinen Grenzen anwenden.',
  relevanz: 'Sehr hoch. § 278 gegen § 831 ist ein Dauerbrenner.',
  faelle: 'Fälle 41, 42, 43, 44, 45 und 46',
  sections: [
    { title: '§ 823 I: das Prüfungsschema', blocks: [
      fl('Schaubild: § 823 I in drei Blöcken', ['Haftungsbegründender Tatbestand :: Rechtsgutsverletzung, Handlung, Kausalität', 'Rechtswidrigkeit :: indiziert', 'Verschulden :: Vorsatz / Fahrlässigkeit', 'Haftungsausfüllung :: Schaden, Kausalität, §§ 249 ff.']),
      s('Die Prüfungspunkte', [
        'Rechtsgutsverletzung :: Leben, Körper, Gesundheit, Freiheit, Eigentum oder ein „sonstiges Recht“. Sonstige Rechte müssen eigentumsähnlich, also absolut, sein: Besitz, allgemeines Persönlichkeitsrecht, Recht am eingerichteten und ausgeübten Gewerbebetrieb. NICHT das Vermögen als solches (Fall 14).',
        'Verletzungshandlung :: Positives Tun oder Unterlassen trotz Rechtspflicht zum Handeln. Wichtig sind die Verkehrssicherungspflichten: Wer eine Gefahrenquelle schafft oder beherrscht, muss die nötigen und zumutbaren Vorkehrungen treffen (Baustelle, Gerüst, Ladenlokal).',
        'Haftungsbegründende Kausalität :: Äquivalenz (conditio sine qua non), Adäquanz (nicht völlig außerhalb jeder Lebenserfahrung) und Schutzzweck der Norm. Der Faustschlag ist kausal für Nasenbruch UND zerstörte Brille (Fall 41 a).',
        'Rechtswidrigkeit :: wird durch die Rechtsgutsverletzung indiziert. Rechtfertigungsgründe sind Notwehr (§ 227), Notstand (§§ 228, 904) und Einwilligung. Wer sich auf einen Streit einlässt, willigt nicht in Faustschläge ein (Fall 41 d).',
        'Verschulden :: Vorsatz oder Fahrlässigkeit (§ 276), Deliktsfähigkeit (§§ 827, 828). Alkohol entlastet nicht, wenn man sich schuldhaft in diesen Zustand versetzt hat (§ 827 S. 2).',
        'Schaden und haftungsausfüllende Kausalität :: §§ 249 ff. Naturalrestitution oder Geldersatz (§ 249 II), Behandlungskosten, Sachschaden. Immaterieller Schaden (Schmerzensgeld) nach § 253 II bei Verletzung von Körper, Gesundheit, Freiheit oder sexueller Selbstbestimmung. Mitverschulden nach § 254.'
      ]),
      l('Weitere Anspruchsgrundlagen im Deliktsrecht', [
        '§ 823 II :: Verletzung eines Schutzgesetzes, das den Einzelnen schützen soll, z. B. § 223 StGB (Körperverletzung), § 263 StGB (Betrug). Damit sind auch reine Vermögensschäden ersatzfähig.',
        '§ 826 :: vorsätzliche sittenwidrige Schädigung, auch für Vermögensschäden (Abgasskandal).',
        '§ 831 :: Haftung für den Verrichtungsgehilfen (siehe unten).',
        '§ 833 :: Tierhalterhaftung (Luxustier verschuldensunabhängig).',
        '§ 840 :: Mehrere Schädiger haften als Gesamtschuldner.'
      ]),
      f('Klausurfalle', `„Für immaterielle Schäden gibt es grundsätzlich kein Geld“ ist nur der Grundsatz des § 253 I. § 253 II macht bei Körper- und Gesundheitsverletzungen die zentrale Ausnahme, und zwar für deliktische UND vertragliche Ansprüche. Fälle 41 b, 43 d: falsch.`)
    ] },
    { title: '§ 831 und § 278: Haftung für Gehilfen', blocks: [
      cmp('Schaubild: § 278 vs. § 831', ['', '§ 278 Erfüllungsgehilfe', '§ 831 Verrichtungsgehilfe'], [
        ['Rechtsnatur', 'ZURECHNUNGSNORM (keine Anspruchsgrundlage)', 'eigene ANSPRUCHSGRUNDLAGE'],
        ['Voraussetzung', 'bestehendes Schuldverhältnis (Vertrag, c.i.c.)', 'kein Schuldverhältnis nötig'],
        ['Wer ist Gehilfe?', 'wer mit Wissen und Wollen des Schuldners in dessen Pflichtenkreis tätig wird, auch selbstständige Unternehmer', 'wer weisungsabhängig ist (Arbeitnehmer), nicht selbstständige Unternehmer'],
        ['Haftung für', 'fremdes Verschulden (das des Gehilfen)', 'EIGENES vermutetes Verschulden bei Auswahl und Überwachung'],
        ['Verschulden des Gehilfen nötig?', 'ja', 'nein, nur eine rechtswidrige Schädigung'],
        ['Entlastung (Exkulpation)?', 'NEIN', 'JA, § 831 I 2: sorgfältige Auswahl und Überwachung'],
        ['Kombination', '§ 280 I + § 278', '§ 831 I allein']
      ]),
      s('§ 831 I: Prüfung', [
        'Verrichtungsgehilfe :: Weisungsgebunden, sozial abhängig. Das ist ein definitorisches Merkmal, also „immer weisungsgebunden“ (Fall 42 a). Ein selbstständiger Schreiner, Gerüstbauer oder Taxiunternehmer ist es nicht.',
        'Widerrechtliche Schadenszufügung durch den Gehilfen :: Der Tatbestand des § 823 I muss rechtswidrig erfüllt sein. Verschulden des Gehilfen ist NICHT nötig (Fall 42 c).',
        'In Ausführung der Verrichtung :: Es muss ein innerer Zusammenhang bestehen, nicht nur „bei Gelegenheit“ (ein Diebstahl beim Kunden fällt nicht darunter).',
        'Kein Entlastungsbeweis, § 831 I 2 :: Der Geschäftsherr kann sich entlasten, wenn er den Gehilfen sorgfältig ausgewählt und überwacht hat oder wenn der Schaden auch bei Sorgfalt entstanden wäre. Wer praktisch nie kontrolliert und von früheren Fehlern weiß, kann sich nicht entlasten (Fall 43).'
      ]),
      rel('Schaubild: Wer haftet wem in Fall 45?', [
        ['Arbeitnehmer A und B', '§ 823 I (eigenes Delikt, Alkohol) → haften persönlich', 'Passant P'],
        ['Arbeitgeber G', '§ 831 I (vermutetes Auswahl-/Überwachungsverschulden)', 'Passant P'],
        ['A, B und G', 'kein Vertrag mit P → KEINE vertraglichen Ansprüche', 'Passant P'],
        ['G', 'Innenverhältnis: innerbetrieblicher Schadensausgleich, § 426', 'A und B']
      ]),
      tf('Schnelltest: Gehilfenhaftung', [
        ['§ 278 ist eine Anspruchsgrundlage.', false, 'Zurechnungsnorm, nur in Verbindung mit § 280 I (Fall 42 b).'],
        ['Beim Erfüllungsgehilfen kann sich der Schuldner exkulpieren.', false, '§ 278 kennt keine Entlastung (Fall 42 d).'],
        ['Der Arbeitnehmer haftet dem Geschädigten neben dem Arbeitgeber selbst.', true, 'Er haftet aus eigenem § 823 I (Fälle 43 b, 45 a).'],
        ['§ 831 setzt voraus, dass der Gehilfe schuldhaft gehandelt hat.', false, 'Nur eine widerrechtliche Schadenszufügung ist nötig (Fall 42 c).']
      ])
    ] },
    { title: 'Produkthaftung', blocks: [
      cmp('Schaubild: ProdHaftG vs. Produzentenhaftung (§ 823 I)', ['', 'ProdHaftG § 1', 'Produzentenhaftung § 823 I'], [
        ['Haftungsart', 'Gefährdungshaftung, kein Verschulden', 'Verschuldenshaftung mit Beweislastumkehr zulasten des Herstellers'],
        ['Wer haftet?', 'Hersteller, Quasi-Hersteller, EU-Importeur, subsidiär Lieferant (§ 4)', 'Hersteller (Händler grundsätzlich nicht, Fall 46 b)'],
        ['Fehlerarten', 'Konstruktion, Fabrikation, Instruktion (§ 3)', 'dieselben, dazu Produktbeobachtung'],
        ['Sachschaden', 'nur an ANDERER Sache als dem Produkt, privat genutzt (§ 1 I 2)', 'auch „Weiterfresserschaden“ am Produkt selbst möglich'],
        ['Selbstbeteiligung', '500 € bei Sachschäden (§ 11)', 'keine'],
        ['Höchstbetrag', '85 Mio. € bei Personenschäden (§ 10)', 'keiner (Fall 46 d)'],
        ['Schmerzensgeld', 'ja (§ 8 S. 2)', 'ja (§ 253 II)'],
        ['Verhältnis', 'andere Haftung bleibt unberührt (§ 15 II)', 'gilt daneben (Fall 46 c)']
      ]),
      st('Fall 46 Schritt für Schritt', [
        'Produktfehler :: Die Handbremse ist fehlerhaft produziert, also ein Fabrikationsfehler (§ 3 ProdHaftG).',
        'Garagentor (1.200 €) :: Eine andere Sache als das Produkt, privat genutzt, also § 1 I 2 ProdHaftG erfüllt. Nach Selbstbeteiligung (§ 11) haftet H mit 700 €. Damit ist Aussage a falsch.',
        'Auto selbst (2.500 €) :: Das Produkt selbst ist nach § 1 I 2 ausgeschlossen. Es bleibt § 823 I, wenn ein Weiterfresserschaden vorliegt (der Mangel war auf die Handbremse begrenzt, der Schaden am übrigen Auto ist nicht „stoffgleich“), und daneben die Gewährleistung gegen V.',
        'Händler V :: Ein Händler hat keine allgemeine Untersuchungspflicht und ist nicht Hersteller. Kein § 823 I gegen V (b falsch), aber Gewährleistung nach § 437.',
        '§ 823 I gegen H :: daneben anwendbar (§ 15 II, c falsch) und OHNE Haftungshöchstgrenze oder Selbstbeteiligung, also Aussage d richtig.'
      ]),
      v('Ausblick: neue EU-Produkthaftungsrichtlinie', `Die Richtlinie (EU) 2024/2853 ersetzt die alte Produkthaftungsrichtlinie und ist bis Dezember 2026 in deutsches Recht umzusetzen. Software wird ausdrücklich zum Produkt, und Selbstbeteiligung sowie Höchstgrenzen sollen entfallen. Für Ihre Klausur gilt das ProdHaftG in der Fassung Ihrer BGB-Textausgabe (dtv, Nr. 4). Fragen Sie im Zweifel Ihren Dozenten, welcher Stand geprüft wird.`)
    ] }
  ],
  cases: [
    { n: 41, sv: 'A und B, die sich nicht persönlich kennen, sitzen gemeinsam an einem Tisch in einem Bierzelt des Münchener Oktoberfestes. Aufgrund der beiderseitigen Zuneigung zu einer am Nebentisch sitzenden Dame geraten sie in Streit, der immer heftiger wird. Plötzlich schlägt A den B mit der Faust ins Gesicht. B trägt eine Brille, die durch den Schlag irreparabel zerstört wird. Außerdem ist das Nasenbein des B gebrochen. Er muss deshalb ins Krankenhaus und hat noch wochenlang starke Schmerzen im Gesicht. B verlangt von A die Kosten für die Krankenhausbehandlung und eine neue Brille. Darüber hinaus verlangt er Schmerzensgeld von A.', q: 'Zu Recht?', c: 2, o: [
      ['Nein, da die Zerstörung der Brille des B keine ursächliche Folge des Faustschlages durch A ist.', 'Falsch. Ohne den Faustschlag wäre die Brille nicht zerstört (Äquivalenz). Die Zerstörung einer Brille bei einem Schlag ins Gesicht liegt nicht außerhalb jeder Lebenserfahrung (Adäquanz).'],
      ['Nein, da für immaterielle Schäden grundsätzlich kein Geldentschädigungsanspruch besteht, somit B wegen der Körperverletzung des A auch kein Schmerzensgeld verlangen kann.', 'Falsch. § 253 II gewährt bei Verletzung des Körpers und der Gesundheit ausdrücklich eine billige Entschädigung in Geld.'],
      ['Ja, B kann von A sowohl Ersatz der Kosten für die Krankenhausbehandlung und die neue Brille sowie Schmerzensgeld verlangen.', 'Richtig. § 823 I: Verletzung von Körper (Nasenbein) und Eigentum (Brille) durch vorsätzlichen Faustschlag, rechtswidrig und schuldhaft. Schaden: Behandlungskosten und Brille (§§ 249 ff.), dazu Schmerzensgeld (§ 253 II). Zugleich ergibt sich der Anspruch aus § 823 II in Verbindung mit § 223 StGB.'],
      ['Nein, durch das Einlassen auf den Streit mit B hat dieser in die Körperverletzung durch A eingewilligt; die Körperverletzung war daher nicht rechtswidrig, ein Schadensersatz kommt daher nicht in Betracht.', 'Falsch. Wer sich auf einen verbalen Streit einlässt, willigt nicht konkludent in eine Körperverletzung ein. Eine Einwilligung bräuchte einen erkennbaren Willen, das Risiko eines Faustschlags hinzunehmen (anders etwa beim Boxkampf).']],
      lsg: ['§ 823 I: Rechtsgutsverletzung Körper und Eigentum.', 'Handlung: Faustschlag. Kausalität: äquivalent und adäquat für beide Verletzungen.', 'Rechtswidrigkeit: indiziert, keine Einwilligung, keine Notwehr.', 'Verschulden: Vorsatz. Alkohol schließt die Verantwortung nicht aus (§ 827 S. 2).', 'Schaden: Krankenhauskosten, Brille, Schmerzensgeld (§ 253 II).', 'Ergebnis: c.'] },
    { n: 42, q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 0, o: [
      ['Der Verrichtungsgehilfe ist immer weisungsgebunden.', 'Richtig. Die Weisungsgebundenheit ist gerade das Merkmal, das den Verrichtungsgehilfen definiert: Der Geschäftsherr kann Zeit, Ort und Art der Tätigkeit bestimmen. Wer nicht weisungsgebunden ist, ist begrifflich kein Verrichtungsgehilfe, sondern ein selbstständiger Unternehmer.'],
      ['§ 831 BGB und § 278 BGB sind beides Anspruchsnormen.', 'Falsch. Nur § 831 ist eine Anspruchsgrundlage. § 278 ist eine Zurechnungsnorm im bestehenden Schuldverhältnis und wird mit § 280 I kombiniert.'],
      ['Nur wenn der Verrichtungsgehilfe schuldhaft handelt, kommt eine Haftung des Geschäftsherrn nach § 831 BGB in Betracht.', 'Falsch. § 831 setzt nur eine „widerrechtliche“ Schadenszufügung voraus. Der Geschäftsherr haftet für eigenes, vermutetes Auswahl- oder Überwachungsverschulden.'],
      ['Auch beim Erfüllungsgehilfen ist der Entlastungsbeweis (Exkulpation) möglich.', 'Falsch. § 278 rechnet das Gehilfenverschulden wie eigenes zu, eine Entlastung ist nicht vorgesehen. Das ist der zentrale Vorteil des Vertragsrechts für den Geschädigten.']],
      lsg: ['Begriff des Verrichtungsgehilfen: weisungsabhängig.', '§ 278: Zurechnung ohne Exkulpation. § 831: eigene Haftung, Exkulpation möglich, kein Verschulden des Gehilfen nötig.', 'Ergebnis: a.'] },
    { n: 43, sv: 'U ist Inhaber einer Glaserei und kontrolliert seine Angestellten praktisch nie. Der bei ihm angestellte V hantiert, wie bereits mehrfach in der Vergangenheit, ungeschickt mit einer größeren Glasscheibe und trifft den wartenden Kunden K mit der Glasscheibe am Kopf, der dadurch eine klaffende Wunde am Kopf erleidet. K muss wochenlang ärztlich behandelt werden und hat über 10 Tage starke Kopfschmerzen.', q: 'Welche Aussage trifft zu:', c: 0, o: [
      ['U muss dem K Schadensersatz leisten. Eine Exkulpation scheidet im vorliegenden Fall aus.', 'Richtig. Deliktisch haftet U aus § 831 I 1: V ist als Angestellter Verrichtungsgehilfe, hat den Körper des K widerrechtlich verletzt, und zwar in Ausführung der Verrichtung. Die Entlastung nach § 831 I 2 scheitert, weil U praktisch nie kontrolliert und V schon mehrfach ungeschickt war. Daneben haftet U vertraglich bzw. aus c.i.c. (§§ 280 I, 241 II, 278), dort ist eine Exkulpation von vornherein ausgeschlossen.'],
      ['V schuldet dem K keinen Schadensersatz, weil er nur Verrichtungshilfe ist.', 'Falsch. Der Verrichtungsgehilfe haftet selbst aus § 823 I für sein eigenes fahrlässiges Verhalten. § 831 ist eine zusätzliche Haftung des Geschäftsherrn und befreit den Gehilfen nicht.'],
      ['U haftet für V nur, wenn V grob fahrlässig oder vorsätzlich gehandelt hat.', 'Falsch. § 831 verlangt nicht einmal ein Verschulden des V, und § 278 rechnet jede Fahrlässigkeit zu.'],
      ['K hat keinen Schadensersatzanspruch wegen seiner Kopfschmerzen, da immaterielle Schäden im Deliktsrecht nicht ersetzt werden.', 'Falsch. § 253 II gewährt Schmerzensgeld bei Körperverletzung.']],
      lsg: ['Anspruch K gegen U aus § 831 I: Verrichtungsgehilfe V, widerrechtliche Körperverletzung in Ausführung der Arbeit. Entlastung scheitert an fehlender Überwachung und bekannter Ungeschicklichkeit.', 'Daneben §§ 280 I, 311 II bzw. Vertrag, 241 II, 278: K ist wartender Kunde.', 'Gegen V: § 823 I.', 'Schmerzensgeld: § 253 II.', 'Ergebnis: a.'] },
    { n: 44, sv: 'Wie Fall 43. U verweist K jedoch auf die für jeden deutlich sichtbaren und auch von K zur Kenntnis genommenen Allgemeinen Geschäftsbedingungen (AGBen) seiner Glaserei, welche eine Schadensersatzpflicht für Verletzungen am Körper ausschließt.', q: 'Zu Recht?', c: 2, o: [
      ['Ja, da die AGBen wirksam Vertragsbestandteil geworden sind.', 'Falsch. Selbst wenn sie einbezogen sind, scheitern sie an der Inhaltskontrolle.'],
      ['Ja, denn der Schadenersatz ist ja nicht für alle Fälle ausgeschlossen.', 'Falsch. Gerade für Körperschäden ist jeder Ausschluss oder jede Begrenzung unwirksam, egal wie eng er formuliert ist.'],
      ['Nein, da eine solch weitreichende „Klausel“ unwirksam ist.', 'Richtig. § 309 Nr. 7 a: In AGB ist ein Ausschluss oder eine Begrenzung der Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen Pflichtverletzung des Verwenders oder seiner Erfüllungsgehilfen beruhen, unwirksam. Die Klausel fällt weg (§ 306), und es bleibt bei der gesetzlichen Haftung.'],
      ['Nein, da sich der Kunde mit den AGBen ausdrücklich einverstanden erklären muss.', 'Falsch. Das Ergebnis „Nein“ stimmt, die Begründung nicht. Das Einverständnis kann konkludent erfolgen. Eine ausdrückliche Zustimmung ist nicht nötig.']],
      lsg: ['AGB: ja (§ 305 I).', 'Einbeziehung: deutlich sichtbar und zur Kenntnis genommen, wohl einbezogen.', 'Inhaltskontrolle: § 309 Nr. 7 a verbietet einen Haftungsausschluss für Körperschäden, also unwirksam.', 'Rechtsfolge: § 306. Für die deliktische Haftung aus § 831 gilt die Klausel ohnehin nur, wenn sie einbezogen und wirksam wäre.', 'Ergebnis: c.'] },
    { n: 45, sv: 'Alfons A und Bruno B sind Arbeitnehmer der Gerüstbaufirma des Gino G. Als sie gerade ein Baugerüst abbauen, fallen ihnen Bretter hinunter, die den Passanten Paul P treffen und leicht verletzen. Sie hatten wegen der schweren Arbeit schon ein „paar Bierchen gekippt“.', q: 'Welche der nachfolgenden Antworten ist richtig?', c: 2, o: [
      ['A und B haften dem P gegenüber nicht, wenn sie nachweisen, dass sie normalerweise sorgfältig arbeiten und sich dadurch exkulpieren.', 'Falsch. Eine Exkulpation gibt es nur für den Geschäftsherrn nach § 831 I 2, nicht für den Täter selbst. A und B haften aus § 823 I für ihr eigenes fahrlässiges Verhalten (Bretter fallen lassen, Alkohol bei der Arbeit). Wie sie „normalerweise“ arbeiten, ist irrelevant.'],
      ['P hat keine deliktischen Ansprüche gegen G, da er kein Delikt verübt hat.', 'Falsch. § 831 I begründet eine eigene deliktische Haftung des G für sein vermutetes Auswahl- und Überwachungsverschulden. Daneben kommt § 823 I wegen Verletzung eigener Verkehrssicherungspflichten (Absicherung der Baustelle) in Betracht.'],
      ['P hat keine vertraglichen Ansprüche gegen A und B.', 'Richtig. Zwischen dem Passanten P und den Arbeitnehmern A und B besteht weder ein Vertrag noch ein vorvertragliches Schuldverhältnis. Es bleiben deliktische Ansprüche (§ 823 I, § 823 II in Verbindung mit § 229 StGB).'],
      ['P kann in dieser Situation nur vertragliche Ansprüche gegen G geltend machen.', 'Falsch. P ist ein zufälliger Passant und hat keinen Vertrag mit G. Ein Vertrag mit Schutzwirkung zugunsten Dritter scheitert, weil P nicht in Leistungsnähe zum Bauvertrag steht. Es bleiben deliktische Ansprüche.']],
      lsg: ['P gegen A, B: kein Schuldverhältnis, also nur § 823 I (Körperverletzung, Fahrlässigkeit), Gesamtschuldner (§ 840).', 'P gegen G: § 831 I (A und B sind Verrichtungsgehilfen). Die Entlastung ist fraglich (Alkohol während der Arbeit spricht gegen ausreichende Überwachung). Außerdem § 823 I (Verkehrssicherung).', 'Vertragliche Ansprüche: keine.', 'Ergebnis: c.'] },
    { n: 46, sv: 'Kunde K kauft am 20. Juni 2022 beim Autohändler V einen vom Autohersteller H hergestellten Elektro-Neuwagen. Einen Tag nach Inbetriebnahme setzt sich das mit angezogener Handbremse auf der abschüssigen Garageneinfahrt abgestellte Auto wegen eines Produktionsfehlers an der Handbremse allein in Bewegung und fährt gegen das Garagentor des K. Am Auto entsteht dabei ein Schaden von 2.500 €, am Garagentor ein Schaden von 1.200 €. Hinweis: Das Produkthaftungsgesetz (ProdHaftG) finden Sie unter Nr. 4 in Ihrer BGB-Textausgabe.', q: 'Welche der folgenden Antworten ist richtig?', c: 3, o: [
      ['K hat gegenüber H keinen Anspruch aus § 1 ProdHaftG.', 'Falsch. Für das Garagentor besteht ein Anspruch: eine andere Sache als das Produkt, gewöhnlich privat genutzt (§ 1 I 2), Fabrikationsfehler (§ 3), H ist Hersteller (§ 4). Nach Abzug der Selbstbeteiligung von 500 € (§ 11) bleiben 700 €. Für das Auto selbst gibt es keinen Anspruch aus dem ProdHaftG.'],
      ['K hat gegenüber V einen Anspruch aus § 823 I.', 'Falsch. V ist nur Händler. Ihm fällt keine eigene Verkehrspflichtverletzung zur Last, denn ein Händler muss Neuwagen nicht auf versteckte Produktionsfehler untersuchen. Gegen V bestehen Gewährleistungsrechte aus § 437.'],
      ['Ein Anspruch wegen eines fehlerhaften Produktes gemäß § 823 Abs. 1 BGB ist neben einem Anspruch aus § 1 ProdHaftG ausgeschlossen.', 'Falsch. § 15 II ProdHaftG: Eine Haftung aufgrund anderer Vorschriften bleibt unberührt. Beide Ansprüche bestehen nebeneinander.'],
      ['Liegen die Voraussetzungen der Haftung nach § 823 Abs. 1 vor, gibt es keine Haftungsbegrenzung.', 'Richtig. Die deliktische Produzentenhaftung kennt weder eine Selbstbeteiligung (anders § 11 ProdHaftG) noch einen Haftungshöchstbetrag (anders § 10 ProdHaftG). Der Schaden ist nach §§ 249 ff. voll zu ersetzen. Deshalb ist § 823 I trotz Verschuldenserfordernis praktisch wichtig. Die Beweislast für das fehlende Verschulden trägt nach der Rechtsprechung der Hersteller.']],
      lsg: ['ProdHaftG gegen H: Garagentor ja (minus 500 €), Auto nein (§ 1 I 2).', '§ 823 I gegen H (Produzentenhaftung): Fabrikationsfehler, Beweislastumkehr. Am Garagentor liegt eine Eigentumsverletzung vor. Am Auto selbst nur bei einem Weiterfresserschaden.', 'V: Gewährleistung, kein Delikt.', 'Ergebnis: d.'] }
  ],
  pq: [
    { q: 'Grenzen Sie § 278 von § 831 ab.', a: '§ 278 ist eine Zurechnungsnorm. Sie setzt ein bestehendes Schuldverhältnis voraus und rechnet dem Schuldner das Verschulden seiner Erfüllungsgehilfen wie eigenes zu, ohne Entlastungsmöglichkeit. Erfüllungsgehilfe kann auch ein selbstständiger Unternehmer sein. § 831 ist eine eigene deliktische Anspruchsgrundlage. Sie gilt ohne Schuldverhältnis, erfasst nur weisungsabhängige Verrichtungsgehilfen und begründet eine Haftung für eigenes, vermutetes Auswahl- und Überwachungsverschulden. Der Geschäftsherr kann sich entlasten (§ 831 I 2), und ein Verschulden des Gehilfen ist nicht erforderlich.' },
    { q: 'Unter welchen Voraussetzungen gibt es Schmerzensgeld?', a: 'Nach § 253 I nur in den gesetzlich bestimmten Fällen. Der wichtigste ist § 253 II: Bei Verletzung des Körpers, der Gesundheit, der Freiheit oder der sexuellen Selbstbestimmung kann eine billige Entschädigung in Geld verlangt werden, und zwar unabhängig davon, ob der Anspruch auf Vertrag (§ 280 I), c.i.c. oder Delikt (§ 823) beruht. Auch das ProdHaftG gewährt Schmerzensgeld (§ 8 S. 2). Bei Verletzungen des allgemeinen Persönlichkeitsrechts gewährt die Rechtsprechung eine Geldentschädigung direkt aus Art. 1, 2 GG.' },
    { q: 'Was sind die Grenzen der Haftung nach dem ProdHaftG?', a: 'Sachschäden werden nur an einer anderen Sache als dem fehlerhaften Produkt ersetzt, wenn diese gewöhnlich für den privaten Ge- oder Verbrauch bestimmt ist und hauptsächlich so verwendet wurde (§ 1 I 2). Bei Sachschäden trägt der Geschädigte eine Selbstbeteiligung von 500 € (§ 11). Für Personenschäden gilt ein Höchstbetrag von 85 Mio. € (§ 10). Die Haftung entfällt in den Fällen des § 1 II, III, z. B. beim Entwicklungsrisiko. Andere Haftungsgrundlagen, insbesondere § 823 I, bleiben unberührt (§ 15 II).' }
  ],
  cards: [
    ['§ 823 I: Rechtsgüter?', 'Leben, Körper, Gesundheit, Freiheit, Eigentum, sonstiges (absolutes) Recht. Nicht das Vermögen.'],
    ['Kausalität?', 'Äquivalenz, Adäquanz, Schutzzweck der Norm.'],
    ['Rechtswidrigkeit?', 'Indiziert. Rechtfertigung: Notwehr, Notstand, Einwilligung.'],
    ['§ 253 II?', 'Schmerzensgeld bei Körper-, Gesundheits- und Freiheitsverletzung, vertraglich und deliktisch.'],
    ['§ 823 II?', 'Schutzgesetzverletzung, z. B. § 223 StGB.'],
    ['Verrichtungsgehilfe?', 'Weisungsabhängig.'],
    ['§ 831 I 2?', 'Exkulpation bei sorgfältiger Auswahl und Überwachung.'],
    ['§ 278?', 'Zurechnungsnorm im Schuldverhältnis, keine Exkulpation.'],
    ['Haftet der Arbeitnehmer selbst?', 'Ja, aus § 823 I. Im Innenverhältnis gilt der innerbetriebliche Schadensausgleich.'],
    ['ProdHaftG: Haftungsart?', 'Gefährdungshaftung des Herstellers.'],
    ['ProdHaftG: Sachschaden?', 'Nur an einer anderen, privat genutzten Sache, mit 500 € Selbstbeteiligung.'],
    ['§ 15 II ProdHaftG?', 'Andere Haftung (§ 823 I) bleibt unberührt.']
  ]
};

W[14] = {
  src: 'Skript S. 10–11 · §§ 854–1296, 398 ff., 812 ff.', title: 'Sachenrecht, Abtretung, Bereicherung',
  intro: `Zum Abschluss setzen wir das Abstraktionsprinzip aus Modul 3 in die Praxis um. Wer ist Eigentümer, wenn zweimal verkauft wurde? Kann man von jemandem Eigentum erwerben, dem die Sache gar nicht gehört? Wie werden Forderungen übertragen? Und wie wird rückabgewickelt, wenn der Grund für eine Vermögensverschiebung fehlt?`,
  ziel: 'Eigentumserwerb vom Berechtigten und vom Nichtberechtigten prüfen, die Abtretung beherrschen und den Umfang der Bereicherungshaftung (§ 818) bestimmen.',
  relevanz: 'Hoch. Doppelverkauf, Gutglaubenserwerb und Factoring sind Klassiker.',
  faelle: 'Fälle 48, 49, 50, 51 und 52. Fall 47 steht in Modul 3, Fall 4 in Modul 5.',
  sections: [
    { title: 'Grundprinzipien des Sachenrechts', blocks: [
      cmp('Schaubild: Die fünf Prinzipien', ['Prinzip', 'Bedeutung', 'Beispiel'], [
        ['Absolutheit', 'Dingliche Rechte wirken gegenüber jedermann', 'Der Eigentümer kann von JEDEM Besitzer herausverlangen (§ 985)'],
        ['Publizität', 'Rechte müssen nach außen erkennbar sein', 'Besitz bei beweglichen Sachen (§ 1006), Grundbuch bei Grundstücken (§ 891)'],
        ['Spezialität / Bestimmtheit', 'Rechte bestehen nur an einzelnen, bestimmten Sachen', 'Ein Warenlager wird Stück für Stück übereignet'],
        ['Typenzwang (numerus clausus)', 'Nur die gesetzlich vorgesehenen dinglichen Rechte gibt es', 'Eigentum, Pfandrecht, Grundschuld, Hypothek'],
        ['Abstraktion', 'Verfügung ist unabhängig vom Grundgeschäft', 'Modul 3'],
        ['Priorität', 'Das zuerst entstandene dingliche Recht geht vor (§ 879)', 'Rangfolge von Grundschulden. Im Schuldrecht gibt es keinen Vorrang des ersten Vertrags (Fall 49 a)!']
      ]),
      cmp('Schaubild: Besitz vs. Eigentum', ['', 'Besitz (§ 854)', 'Eigentum (§ 903)'], [
        ['Was?', 'tatsächliche Sachherrschaft', 'rechtliche Herrschaft'],
        ['Beispiel', 'Mieter, Entleiher, Dieb', 'der, dem die Sache gehört'],
        ['Sonderformen', 'mittelbarer Besitz (§ 868), Besitzdiener (§ 855)', 'Miteigentum (§ 1008)'],
        ['Schutz', '§§ 858 ff. (verbotene Eigenmacht)', '§ 985 (Herausgabe), § 1004 (Störung)']
      ])
    ] },
    { title: 'Erwerb vom Berechtigten und vom Nichtberechtigten', blocks: [
      s('Erwerb vom Berechtigten, § 929 S. 1 (bewegliche Sachen)', [
        'Einigung über den Eigentumsübergang :: dinglicher Vertrag',
        'Übergabe :: Der Erwerber erlangt Besitz auf Veranlassung des Veräußerers, und der Veräußerer verliert jeden Besitz. Ersatz der Übergabe: § 929 S. 2 (Erwerber hat schon Besitz), § 930 (Besitzkonstitut, Veräußerer behält die Sache, z. B. als Mieter), § 931 (Abtretung des Herausgabeanspruchs).',
        'Einigsein bei Übergabe',
        'Berechtigung :: Der Veräußerer ist Eigentümer oder verfügungsbefugt. Ein Nichtberechtigter kann mit Einwilligung (§ 185 I) oder Genehmigung (§ 185 II) des Berechtigten verfügen (Fall 50).'
      ]),
      s('Gutgläubiger Erwerb vom Nichtberechtigten, §§ 932 ff.', [
        'Rechtsgeschäft im Sinne eines Verkehrsgeschäfts :: kein Erwerb bei wirtschaftlicher Personenidentität',
        'Einigung und Übergabe (bzw. Surrogat, §§ 932–934)',
        'Guter Glaube, § 932 II :: Der Erwerber darf weder wissen noch grob fahrlässig nicht wissen, dass die Sache nicht dem Veräußerer gehört. Wer WEISS, dass der Verkäufer nur Entleiher ist, ist bösgläubig (Fall 50).',
        'Kein Abhandenkommen, § 935 I :: Gestohlene, verlorene oder sonst unfreiwillig aus dem Besitz gekommene Sachen können nicht gutgläubig erworben werden. Ausnahme: Geld, Inhaberpapiere, öffentliche Versteigerung (§ 935 II). Eine verliehene Sache ist nicht abhanden gekommen, denn der Eigentümer hat sie freiwillig weggegeben.',
        'Ergänzung HGB :: § 366 HGB schützt den guten Glauben an die Verfügungsbefugnis eines Kaufmanns.'
      ]),
      cmp('Schaubild: Gutgläubiger Erwerb bewegliche Sache vs. Grundstück', ['', 'Bewegliche Sache (§ 932)', 'Grundstück (§ 892)'], [
        ['Rechtsscheinträger', 'Besitz', 'Grundbucheintragung'],
        ['Schädlich', 'Kenntnis und grobe Fahrlässigkeit', 'nur positive Kenntnis (oder Widerspruch im Grundbuch)'],
        ['Abhandenkommen', 'schließt Erwerb aus (§ 935)', 'irrelevant']
      ]),
      l('Ausgleichsansprüche des früheren Eigentümers', [
        '§ 985 :: Herausgabe von jedem Besitzer, solange er noch Eigentümer ist (bei Fall 50 ohne Genehmigung: C gegen K).',
        '§ 816 I 1 :: Verfügt ein Nichtberechtigter wirksam (gutgläubiger Erwerb oder Genehmigung nach § 185 II), muss er dem Berechtigten das durch die Verfügung Erlangte herausgeben, also den Kaufpreis (Fall 50 c).',
        '§§ 280, 823 :: Schadensersatz gegen den Entleiher wegen Vertragsverletzung und Eigentumsverletzung.'
      ]),
      st('Fälle 48 und 49: Doppelverkauf eines Grundstücks', [
        'Kaufvertrag 1 :: E verkauft notariell an K (1,5 Mio. €). Das ist das Verpflichtungsgeschäft, K hat nur einen Anspruch auf Übereignung (§ 433 I).',
        'Kaufvertrag 2 :: E verkauft dasselbe Grundstück notariell an G (2 Mio. €). Auch dieser Vertrag ist wirksam, denn man kann sich mehrfach verpflichten. Es gibt keinen Vorrang des älteren Vertrags.',
        'Eigentumslage jetzt :: Keine Auflassung, keine Eintragung, also ist E weiterhin Eigentümer (Fall 48 a).',
        'Wettlauf :: Wer zuerst Auflassung und Eintragung erreicht (§§ 873, 925), wird Eigentümer. E ist Berechtigter, deshalb kann auch G wirksam erwerben (Fall 49 b).',
        'Folgen für den Verlierer :: Wird G Eigentümer, wird E gegenüber K die Leistung unmöglich (§ 275). K hat Schadensersatz gegen E (§§ 280 I, III, 283), also z. B. die Mehrkosten eines Ersatzgrundstücks. Gegen den gutgläubigen G hat K keinen Anspruch, weil die Forderung relativ ist (Fall 49 c).',
        'Praxis-Tipp: Vormerkung :: Eine Auflassungsvormerkung (§ 883) im Grundbuch hätte K geschützt. Spätere Verfügungen wären ihm gegenüber unwirksam (§ 883 II).'
      ])
    ] },
    { title: 'Abtretung, §§ 398 ff.', blocks: [
      rel('Schaubild: Das Dreieck der Abtretung', [
        ['Alter Gläubiger V (Zedent)', 'Abtretungsvertrag § 398 (Verfügung) + Forderungskauf § 453 (Verpflichtung)', 'Neuer Gläubiger F (Zessionar)'],
        ['Neuer Gläubiger F', 'Forderung aus § 433 II (jetzt bei F)', 'Schuldner K'],
        ['Schuldner K', 'Zustimmung NICHT nötig; Schutz durch §§ 404, 406, 407', 'Abtretung V an F']
      ]),
      s('Voraussetzungen der Abtretung', [
        'Abtretungsvertrag zwischen altem und neuem Gläubiger, § 398 S. 1 :: formfrei, ohne Realakt. Mit Abschluss tritt der neue Gläubiger an die Stelle des alten (§ 398 S. 2).',
        'Bestehen der Forderung :: Kein gutgläubiger Erwerb einer nicht bestehenden Forderung (Ausnahme § 405).',
        'Bestimmtheit oder Bestimmbarkeit :: Auch künftige Forderungen können abgetreten werden (Globalzession).',
        'Kein Abtretungsausschluss :: § 399 (Inhaltsänderung, vertragliches Verbot), § 400 (unpfändbare Forderungen). Unter Kaufleuten ist ein Abtretungsverbot bei Geldforderungen trotzdem wirksam überwindbar (§ 354a HGB).',
        'Berechtigung des Zedenten'
      ]),
      l('Schuldnerschutz', [
        '§ 404 :: Der Schuldner behält alle Einwendungen, die er gegen den alten Gläubiger hatte, z. B. Mangel oder Anfechtung.',
        '§ 406 :: Aufrechnung gegenüber dem neuen Gläubiger ist weiter möglich.',
        '§ 407 :: Zahlt der Schuldner in Unkenntnis der Abtretung an den alten Gläubiger, wird er frei. Deshalb wird die Abtretung beim offenen Factoring angezeigt.',
        '§ 410 :: Leistung nur gegen Aushändigung der Abtretungsurkunde.'
      ]),
      cmp('Schaubild: Echtes vs. unechtes Factoring', ['', 'Echtes Factoring', 'Unechtes Factoring'], [
        ['Ausfallrisiko (Delkredere)', 'trägt der Faktor', 'bleibt beim Verkäufer'],
        ['Rechtsnatur', 'Forderungskauf (§ 453)', 'Darlehen mit Sicherungsabtretung'],
        ['Kunde zahlt nicht', 'Faktor kann NICHT auf den Verkäufer zurückgreifen (Fall 51 d)', 'Faktor kann Rückbelastung vom Verkäufer verlangen']
      ])
    ] },
    { title: 'Bereicherungsrecht, §§ 812 ff.', blocks: [
      s('Leistungskondiktion, § 812 I 1 Alt. 1', [
        'Etwas erlangt :: jeder vermögenswerte Vorteil, z. B. Eigentum, Besitz, Befreiung von einer Schuld oder Gebrauchsvorteile',
        'Durch Leistung :: bewusste und zweckgerichtete Mehrung fremden Vermögens',
        'Ohne rechtlichen Grund :: Der Vertrag ist von Anfang an unwirksam (Dissens, Formnichtigkeit, Anfechtung, § 142 I). § 812 I 2 Alt. 1: Der Grund ist später weggefallen. § 812 I 2 Alt. 2: Der mit der Leistung bezweckte Erfolg tritt nicht ein.',
        'Kein Ausschluss :: § 814 (Leistung in Kenntnis der Nichtschuld), § 817 S. 2 (beiderseitiger Gesetzes- oder Sittenverstoß)'
      ]),
      cmp('Schaubild: Umfang der Herausgabe, § 818', ['Absatz', 'Inhalt', 'Beispiel'], [
        ['§ 818 I', 'Herausgabe des Erlangten und der gezogenen NUTZUNGEN (§ 100: Früchte und Gebrauchsvorteile) sowie der Surrogate', 'Maschine zurück plus Nutzungsvorteile'],
        ['§ 818 II', 'Ist Herausgabe nicht möglich (Gebrauchsvorteile kann man nicht „zurückgeben“), dann WERTERSATZ', 'objektiver Mietwert der Maschine (Fall 52 d)'],
        ['§ 818 III', 'Entreicherung: keine Haftung, soweit der Empfänger nicht mehr bereichert ist', 'Geld für eine Luxusreise ausgegeben, die man sonst nicht gemacht hätte'],
        ['§§ 818 IV, 819', 'verschärfte Haftung ab Rechtshängigkeit bzw. Kenntnis des fehlenden Rechtsgrunds', 'Entreicherung ist ausgeschlossen']
      ]),
      f('Klausurfalle: Gewinn ist keine Nutzung', `Der Gewinn, den B mit der Maschine erwirtschaftet, beruht auf seiner eigenen unternehmerischen Leistung (Arbeit, Material, Kundenbeziehungen). Er ist weder Frucht noch Gebrauchsvorteil der Maschine. Herauszugeben ist nach §§ 818 I, II nur der objektive Wert der Nutzung, typischerweise der übliche Mietpreis (Fall 52 c vs. d). Schadensersatz (Fall 52 b) setzt eine Pflichtverletzung oder ein Delikt voraus. Das Bereicherungsrecht schöpft nur ab, es ersetzt keinen Schaden.`),
      v('Saldotheorie', `Bei der Rückabwicklung gegenseitiger Verträge werden die beiden Bereicherungsansprüche nicht isoliert betrachtet, sondern saldiert: Gleichartige Ansprüche (Geld gegen Nutzungswert) werden verrechnet. Ungleichartige werden Zug um Zug abgewickelt. In Fall 52 heißt das: A gibt den Kaufpreis zurück, B gibt die Maschine zurück und zahlt den Nutzungswert, und gleichartige Geldbeträge werden verrechnet.`)
    ] }
  ],
  cases: [
    { n: 48, sv: 'Emil ist Eigentümer eines Grundstücks am Chiemsee, das einen Wert von € 1,5 Mio hat. Er schließt mit Karl K einen notariellen Kaufvertrag über diesen Betrag und verpflichtet sich zur Übertragung des Eigentums an K. Einige Tage später, noch bevor K den Kaufpreis bezahlt hat und in das Grundbuch eingetragen ist, verkauft E dasselbe Grundstück für € 2 Mio an den gutgläubigen Gustav G, ebenfalls unter Einhaltung der gesetzlichen Formvorschriften für den Kaufvertrag.', q: 'Welche der nachfolgenden Antworten ist richtig?', c: 0, o: [
      ['Eigentümer des Grundstücks ist E.', 'Richtig. Beide Kaufverträge sind nur Verpflichtungsgeschäfte und ändern nichts an der Eigentumslage (Trennungsprinzip). Weder K noch G hat eine Auflassung und Eintragung erreicht (§§ 873, 925). E ist weiterhin Eigentümer.'],
      ['Eigentümer des Grundstücks ist K.', 'Falsch. Der zeitlich frühere Kaufvertrag verschafft kein Eigentum.'],
      ['Eigentümer des Grundstücks ist G.', 'Falsch. Auch G hat nur einen Kaufvertrag. Die Gutgläubigkeit spielt keine Rolle, denn E ist ohnehin Berechtigter.'],
      ['Eigentum wird erworben durch die Zahlung des Kaufpreises, so dass es für die Frage wer Eigentümer ist, darauf ankommt, wer zuerst zahlt.', 'Falsch. Die Zahlung ist die Erfüllung der Käuferpflicht (§ 433 II) und hat mit dem Eigentumserwerb am Grundstück nichts zu tun.']],
      lsg: ['Eigentumserwerb an Grundstücken nur nach §§ 873, 925 (Auflassung und Eintragung).', 'Beide Kaufverträge sind wirksam, aber nur schuldrechtlich (Doppelverkauf ist zulässig).', 'Ergebnis: a.'] },
    { n: 49, sv: 'Sachverhalt wie Fall 48.', q: 'Welche der nachfolgenden Antworten ist richtig?', c: 1, o: [
      ['G kann nicht Eigentum an dem Grundstück erwerben, weil E den Kaufvertrag zuerst mit K geschlossen hat.', 'Falsch. Im Schuldrecht gibt es kein Prioritätsprinzip. Der Vertrag mit K ist ein relatives Recht und bindet nur E, nicht G. E bleibt verfügungsbefugt.'],
      ['G kann Eigentümer des Grundstücks werden, wenn die Auflassung und die Eintragung in das Grundbuch erfolgt sind.', 'Richtig. §§ 873 I, 925: E ist als Eigentümer berechtigt. Erklären E und G die Auflassung und wird G eingetragen, wird G Eigentümer, unabhängig vom früheren Vertrag mit K. Nur eine Vormerkung zugunsten des K (§ 883) hätte das verhindert.'],
      ['Wenn G Eigentümer des Grundstücks wird, kann K von G Ersatz des Schadens verlangen, der dadurch entsteht, dass K sich jetzt ein gleichwertiges, aber teureres Grundstück besorgt.', 'Falsch. Zwischen K und G besteht kein Schuldverhältnis. Eine Forderung ist kein „sonstiges Recht“ im Sinne des § 823 I. § 826 scheidet aus, weil G gutgläubig ist. K kann nur gegen E vorgehen (§§ 280 I, III, 283).'],
      ['Unter Auflassung versteht man die notarielle Beurkundung des Kaufvertrages über ein Grundstück.', 'Falsch. Auflassung ist die dingliche Einigung über den Eigentumsübergang an einem Grundstück (§ 925 I), erklärt bei gleichzeitiger Anwesenheit vor einer zuständigen Stelle (Notar). Die Beurkundung des Kaufvertrags folgt aus § 311b I und ist das Verpflichtungsgeschäft.']],
      lsg: ['Erwerb des G: Auflassung und Eintragung vom Berechtigten E, also möglich.', 'Folgen für K: Schadensersatz nur gegen E (Unmöglichkeit der Übereignung, § 283).', 'Begriffe: Auflassung (§ 925) ist nicht dasselbe wie der Kaufvertrag (§ 311b I).', 'Ergebnis: b.'] },
    { n: 50, sv: 'K möchte ein gebrauchtes Mountainbike von B erwerben. Er weiß jedoch, dass der verkaufsbereite B nur Besitzer des Fahrrades ist, nicht Eigentümer; das MTB wurde dem B nur von C geliehen. B und K schließen einen Kaufvertrag über € 500. K bezahlt an B.', q: 'Welche der folgenden Antworten ist richtig?', c: 3, o: [
      ['Es kommt nicht darauf an, wer Voreigentümer des MTB ist, denn der Eigentumsübergang setzt nur Einigung und Übergabe voraus.', 'Falsch. Weitere Voraussetzung des § 929 S. 1 ist die Berechtigung des Veräußerers. Fehlt sie, hilft nur der gutgläubige Erwerb (§ 932), und dafür kommt es gerade auf die Eigentümerstellung an.'],
      ['K kann selbst dann nicht Eigentümer des MTB werden, wenn C die Eigentumsverschaffung von B an K genehmigt, weil der Kaufvertrag nicht zwischen K und C geschlossen wurde.', 'Falsch. Nach § 185 II 1 wird die Verfügung eines Nichtberechtigten wirksam, wenn der Berechtigte sie genehmigt. Der Kaufvertrag ist für den Eigentumserwerb irrelevant (Abstraktionsprinzip).'],
      ['Wenn C die Eigentumsübertragung von B an K genehmigt, darf B den Kaufpreis behalten.', 'Falsch. Durch die Genehmigung wird die Verfügung des Nichtberechtigten B gegenüber C wirksam. Nach § 816 I 1 muss B das durch die Verfügung Erlangte, also die 500 €, an C herausgeben. Die Genehmigung ist gerade der Weg, über den C an den Erlös kommt.'],
      ['Mit Zahlung der € 500 des K an B ist K nicht Eigentümer der MTB geworden.', 'Richtig. Die Zahlung erfüllt nur die Pflicht des K aus § 433 II. Für den Eigentumserwerb am Fahrrad braucht es Einigung und Übergabe (§ 929 S. 1). Selbst dann würde K wegen der fehlenden Berechtigung des B und seiner eigenen Bösgläubigkeit (§ 932 II, er WUSSTE es) nicht Eigentümer, außer C genehmigt (§ 185 II).']],
      lsg: ['Kaufvertrag B–K: wirksam, auch über eine fremde Sache (Fall 2 b).', 'Eigentumserwerb nach § 929 S. 1: B ist nicht berechtigt.', '§ 932: K weiß, dass B nur Entleiher ist, also bösgläubig. Kein gutgläubiger Erwerb.', '§ 185 II: Mit Genehmigung des C wäre der Erwerb möglich, dann muss B nach § 816 I 1 die 500 € an C herausgeben.', 'Ergebnis: d.'] },
    { n: 51, sv: 'Verkäufer V, der Möbel online und stationär verkauft, hat sein Forderungsmanagement an einen Faktor F ausgelagert, der insbesondere auch die Kundenforderungen beitreibt. Kunde K ist aus einem Kaufvertrag mit V den Kaufpreis schuldig geblieben. V hat seine Forderung gegen K auf F übertragen. F verlangt von K die Zahlung an sich, den F.', q: 'Welche der folgenden Aussagen ist richtig?', c: 2, o: [
      ['F kann nichts von K verlangen, da dieser nicht sein Vertragspartner ist.', 'Falsch. Durch die Abtretung tritt F an die Stelle des V als Gläubiger (§ 398 S. 2). Er kann die Forderung aus dem Kaufvertrag geltend machen, obwohl er nicht Vertragspartner ist.'],
      ['F wird Inhaber der Forderung des V gegen K, sobald F an V für die Kundenforderung bezahlt hat.', 'Falsch. Das verwechselt Verpflichtungs- und Verfügungsgeschäft. Die Zahlung des F ist die Erfüllung des Forderungskaufs (§ 453). Die Inhaberschaft geht durch den Abtretungsvertrag (§ 398) über, unabhängig von der Zahlung.'],
      ['F erwirbt die Kundenforderung gegen den K mittels Abtretung V an F. K muss der Abtretung nicht zustimmen.', 'Richtig. § 398: Vertrag zwischen altem und neuem Gläubiger. Der Schuldner ist am Vertrag nicht beteiligt und muss nicht zustimmen. Er wird geschützt durch §§ 404, 406, 407 (Einwendungen bleiben, befreiende Zahlung an V bei Unkenntnis).'],
      ['Falls K nicht fristgerecht an F zahlt, kann F von V die Zahlung verlangen.', 'Falsch. Beim echten Factoring (Forderungskauf) übernimmt der Faktor das Ausfallrisiko (Delkredere). Ein Rückgriff auf V ist nicht vorgesehen. Nur beim unechten Factoring oder bei besonderer Vereinbarung wäre das anders. Außerdem haftet der Verkäufer einer Forderung nur für ihren Bestand (Veritätshaftung), nicht für die Zahlungsfähigkeit des Schuldners.']],
      lsg: ['Verpflichtungsgeschäft: Forderungskauf V–F (§ 453, Factoring).', 'Verfügungsgeschäft: Abtretung (§ 398), keine Zustimmung des K nötig.', 'Schuldnerschutz: §§ 404 ff.', 'Ergebnis: c.'] },
    { n: 52, sv: 'Unternehmer A verkauft Unternehmer B eine Maschine und übereignet sie. B produziert mit der Maschine Zulieferteile für die Automobilindustrie mit einer hohen Gewinnmarge. Später stellt sich heraus, dass der Vertrag zwischen A und B unwirksam ist.', q: 'Welche Rechtsfolge tritt ein?', c: 3, o: [
      ['A kann von B lediglich die Maschine herausverlangen. B hat gegen A einen Anspruch auf Rückzahlung des Kaufpreises.', 'Falsch, weil unvollständig. Nach § 818 I sind auch die gezogenen Nutzungen herauszugeben bzw. nach § 818 II deren Wert zu ersetzen. Das Wort „lediglich“ macht die Aussage falsch.'],
      ['A hat gegen B einen Anspruch auf Schadensersatz, weil er seine Maschine für einen gewissen Zeitraum nicht nutzen konnte.', 'Falsch. Das Bereicherungsrecht gewährt keinen Schadensersatz, sondern schöpft die Bereicherung ab. Für Schadensersatz fehlt eine Pflichtverletzung des B. Er hat die Maschine im Glauben an einen wirksamen Vertrag benutzt.'],
      ['A hat gegen B einen Anspruch auf Rückgabe der Maschine und auf Auszahlung des Gewinns, den B in dem Zeitraum mit den mit der Maschine produzierten Teilen gemacht hat.', 'Falsch. Der Unternehmergewinn ist keine Nutzung der Maschine (§ 100), sondern beruht auf der eigenen Leistung des B (Arbeit, Material, Know-how, Kunden).'],
      ['A hat gegen B einen Anspruch auf Rückgabe der Maschine und Zahlung des durchschnittlichen Mietpreises für eine Maschine derselben Art', 'Richtig. § 812 I 1 Alt. 1: B hat Eigentum und Besitz an der Maschine ohne Rechtsgrund erlangt, also muss er die Maschine zurückübereignen. § 818 I: Gezogene Nutzungen sind herauszugeben, dazu gehören die Gebrauchsvorteile (§ 100). Weil man Gebrauchsvorteile nicht zurückgeben kann, schuldet B nach § 818 II Wertersatz, gemessen am objektiven Wert, also am üblichen Mietzins.']],
      lsg: ['Abstraktionsprinzip: Der Vertrag ist unwirksam, die Übereignung wirksam. B ist Eigentümer ohne Rechtsgrund.', '§ 812 I 1 Alt. 1: Rückübereignung der Maschine.', '§ 818 I, II: Nutzungen (Gebrauchsvorteile, § 100) durch Wertersatz = objektiver Mietwert.', 'Gegenseitig: B kann den Kaufpreis zurückverlangen (§ 812). Nach der Saldotheorie werden die Geldbeträge verrechnet.', 'Ergebnis: d.'] }
  ],
  pq: [
    { q: 'Unter welchen Voraussetzungen kann man eine bewegliche Sache vom Nichtberechtigten erwerben?', a: 'Nach §§ 929 S. 1, 932 sind erforderlich: (1) eine Einigung über den Eigentumsübergang, (2) die Übergabe, (3) ein Rechtsgeschäft im Sinne eines Verkehrsgeschäfts, (4) guter Glaube des Erwerbers. Er darf nicht wissen oder grob fahrlässig nicht wissen, dass die Sache nicht dem Veräußerer gehört (§ 932 II). (5) Die Sache darf dem Eigentümer nicht abhanden gekommen sein (§ 935 I), außer es handelt sich um Geld, Inhaberpapiere oder öffentlich versteigerte Sachen (§ 935 II). Alternativ wird der Erwerb durch Genehmigung des Berechtigten wirksam (§ 185 II). Der Berechtigte kann dann vom Veräußerer den Erlös verlangen (§ 816 I 1).' },
    { q: 'Wie wird eine Forderung übertragen, und wie wird der Schuldner geschützt?', a: 'Durch einen formlosen Abtretungsvertrag zwischen dem bisherigen und dem neuen Gläubiger (§ 398). Mit Vertragsschluss tritt der neue Gläubiger an die Stelle des alten. Der Schuldner muss nicht mitwirken. Er wird geschützt, weil er alle Einwendungen gegen den alten Gläubiger behält (§ 404), unter Umständen aufrechnen kann (§ 406) und befreiend an den alten Gläubiger zahlen kann, solange er von der Abtretung nichts weiß (§ 407).' },
    { q: 'Was muss ein Bereicherungsschuldner nach § 818 herausgeben?', a: 'Zunächst das Erlangte selbst. Daneben die gezogenen Nutzungen, also Früchte und Gebrauchsvorteile (§ 100), sowie Surrogate (§ 818 I). Ist die Herausgabe nicht möglich, insbesondere bei Gebrauchsvorteilen, schuldet er Wertersatz nach dem objektiven Wert (§ 818 II). Ist er nicht mehr bereichert, entfällt die Pflicht (§ 818 III), außer er haftet verschärft, weil er den fehlenden Rechtsgrund kannte oder verklagt wurde (§§ 818 IV, 819). Einen durch eigene Leistung erzielten Gewinn muss er nicht herausgeben.' }
  ],
  cards: [
    ['Publizitätsprinzip?', 'Dingliche Rechte müssen erkennbar sein: Besitz bzw. Grundbuch.'],
    ['Gibt es Priorität im Schuldrecht?', 'Nein. Doppelverkauf ist möglich, wer zuerst übereignet bekommt, gewinnt.'],
    ['Auflassung?', '§ 925: dingliche Einigung über ein Grundstück vor dem Notar.'],
    ['Vormerkung?', '§ 883: sichert den Anspruch auf Eigentumsübertragung, spätere Verfügungen sind relativ unwirksam.'],
    ['§ 932 II?', 'Bösgläubig ist, wer weiß oder grob fahrlässig nicht weiß.'],
    ['§ 935?', 'Kein gutgläubiger Erwerb abhanden gekommener Sachen (außer Geld, Inhaberpapiere, Versteigerung).'],
    ['§ 185 II?', 'Genehmigung des Berechtigten macht die Verfügung des Nichtberechtigten wirksam.'],
    ['§ 816 I 1?', 'Der Nichtberechtigte muss den Erlös an den Berechtigten herausgeben.'],
    ['Abtretung?', '§ 398: Vertrag alter und neuer Gläubiger, ohne Zustimmung des Schuldners.'],
    ['§ 407?', 'Zahlung an den alten Gläubiger in Unkenntnis der Abtretung befreit.'],
    ['Echtes Factoring?', 'Der Faktor trägt das Ausfallrisiko (Delkredere).'],
    ['§ 812 I 1 Alt. 1?', 'Etwas erlangt, durch Leistung, ohne Rechtsgrund.'],
    ['§ 818 I, II?', 'Nutzungen herausgeben, sonst Wertersatz (objektiver Mietwert).'],
    ['§ 818 III?', 'Entreicherung.']
  ]
};
window.dispatchEvent(new Event('wpr-data'));
})();
