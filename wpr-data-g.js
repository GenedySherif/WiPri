(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), st = (title, items) => ({ t: 'steps', title, items });
const cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), m = t => ({ t: 'merk', text: t }), f = (title, text) => ({ t: 'falle', title, text });
const W = window.WPR = window.WPR || {};
const K = (n, sv, q, c, o, lsg) => ({ n, sv, q, c, o, lsg: lsg || [] });

W[16] = {
  src: 'Altklausuren Prof. Weiden, SS 2018 bis WS 2024/25', title: 'Weiden-Klausurtraining',
  intro: 'Dieses Modul ist ganz auf Ihre Klausur bei Prof. Weiden zugeschnitten: das Format, die Antwortstrategie für Multiple Choice, die Themen, die sie besonders oft abfragt, ihr Influencer-Fall und rund 70 Aufgaben aus ihren Altklausuren. Aufgaben, die schon in den Modulen 1–14 als Übungsfall vorkommen, sind hier nicht doppelt enthalten.',
  ziel: 'In 60 Minuten 20 MC-Aufgaben sicher lösen: Fallen in den Antworten erkennen, mit dem BGB schnell die richtige Norm finden und keine Punkte verschenken.',
  relevanz: 'Maximal. Die Altklausuren zeigen, wie Prof. Weiden fragt. Viele Sachverhalte kehren in abgewandelter Form wieder.',
  faelle: 'Altklausur-Aufgaben WS 24/25, WS 23/24, SS 23, WS 22/23, WS 18/19, SS 18',
  casesTitle: 'Altklausur-Aufgaben Prof. Weiden', casesToc: 'Altklausuren',
  sections: [
    { title: 'So ist die Klausur aufgebaut', blocks: [
      cmp('Format laut Deckblatt der Altklausuren', ['Punkt', 'Regel'], [
        ['Umfang', '20 Aufgaben (früher 25), je vier Antworten a–d'],
        ['Richtige Antworten', 'Genau eine pro Aufgabe'],
        ['Zeit', '60 Minuten, also 3 Minuten pro Aufgabe'],
        ['Punkte', '4 oder 5 pro Aufgabe, 0 für falsch oder leer, kein Abzug'],
        ['Bestehen', 'Mindestens die Hälfte der Punkte (Einzelheiten ASPO)'],
        ['Hilfsmittel', 'Nur BGB, Beck-Texte im dtv. ProdHaftG darin unter Nr. 4'],
        ['Wertung', 'Nur der Prüfungsbogen zählt, nicht die Aufgabenblätter']]),
      l('Antwortstrategie für Multiple Choice', [
        'Immer ankreuzen :: Kein Abzug für Fehler. Eine leere Aufgabe ist sicher 0 Punkte.',
        'Absolute Wörter :: „immer“, „nie“, „nur“, „stets“, „ausnahmslos“, „unter keinen Umständen“, „keinesfalls“ sind fast immer falsch. Das BGB kennt fast überall Ausnahmen.',
        'Begründung mitlesen :: Ist das Ergebnis richtig, die Begründung aber falsch, ist die ganze Antwort falsch (z. B. Verjährung zum richtigen Datum, aber mit falscher Herleitung).',
        '„Alle Antworten sind falsch“ :: Kann die richtige sein. Prüfen Sie jede andere Option sauber, bevor Sie sie wählen.',
        'Kombinationsaufgaben :: Bei „Welche Kombination der Aussagen 1–8 ist richtig?“ jede Aussage einzeln mit + oder – markieren und erst dann vergleichen.',
        'Abwandlungen :: Die Folgeaufgabe zum selben Sachverhalt ändert meist genau ein Detail (17 statt 18 Jahre, Händler statt Privatperson). Suchen Sie das Detail.',
        'Hinweise im Sachverhalt :: Ein abgedrucktes StGB-Delikt heißt § 823 II prüfen. „ProdHaftG unter Nr. 4“ heißt Produkthaftung prüfen. „Deliktische Ansprüche sind nicht zu prüfen“ heißt c.i.c. oder Vertrag.',
        'Fristaufgaben :: Kalender skizzieren, Ereignistag nicht mitzählen (§ 187 I), § 193 nur beim Fristende.',
        'Zweimal lesen :: Wer ist Verbraucher, wer Unternehmer? Bring-, Schick- oder Holschuld? Wann war Gefahrübergang?'
      ]),
      f('Rechtsstand prüfen', 'Ältere Folien nannten bei der AG-Zuständigkeit noch „künftig 8.000 €“; das Gesetz und Holztrattners Folien (WiSe 2026/27) sagen seit 01.01.2026 10.000 €. Holztrattner empfiehlt die 98. Auflage des BGB (dtv, 2026). Wenn Folie und Gesetzestext abweichen, gilt der Gesetzestext in Ihrer zugelassenen Ausgabe. Klären Sie Zweifel vorher in Moodle oder der Sprechstunde.')
    ] },
    { title: 'Was Prof. Weiden besonders oft fragt', blocks: [
      cmp('Themen in den Altklausuren 2018–2025', ['Häufigkeit', 'Thema', 'Modul'], [
        ['sehr oft', 'Gewährleistung, Gefahrübergang, Verbrauchsgüterkauf, digitale Elemente', '9, 11'],
        ['sehr oft', 'Verzug, Annahmeverzug, Unmöglichkeit, Schadensersatz neben/statt der Leistung', '9, 10'],
        ['sehr oft', 'Vertragsschluss, invitatio, Zugang, Auslobung', '5'],
        ['oft', 'Minderjährige, Rechtsfähigkeit, § 107', '2'],
        ['oft', 'Abstraktion, Eigentum, Grundstück, § 946', '3, 14'],
        ['oft', 'Anfechtung und § 122', '7'],
        ['oft', 'Delikt, ProdHaftG, Erfüllungs- und Verrichtungsgehilfe', '13'],
        ['oft', 'Widerruf und Fristberechnung', '12'],
        ['regelmäßig', 'AGB: Einbeziehung, § 309 Nr. 7', '12'],
        ['regelmäßig', 'Stellvertretung, Prokura, § 181, § 165', '5'],
        ['regelmäßig', 'Form (Schriftform, Textform, Bürgschaft, Testament)', '6'],
        ['gelegentlich', 'c.i.c., § 313, Abtretung/Factoring, Bereicherung, Darlehen, Miete', '8, 14, 10']]),
      cmp('Weidens Lernpakete und die Module dieser App', ['Lernpaket', 'Thema', 'Modul'], [
        ['1', 'Rechtsquellen und Rechtsmethodik', '1, 4'], ['2', 'Rechtssubjekte', '2'], ['3', 'Vertragstypen', '4, 6'],
        ['4', 'Inhalt und Zustandekommen von Verträgen, Form', '5, 6'], ['5', 'Fernabsatzrecht', '12'], ['6', 'Willenserklärungen', '5'],
        ['7', 'AGB', '12'], ['8', 'Leistungsstörung', '9, 10'], ['9', 'Schadensersatz', '10, 13'], ['10', 'Gewährleistung, digitale Produkte', '11'],
        ['10a', 'Abtretung, Factoring (nur Selbststudium)', '14'], ['11', 'Vertragsbeendigung: Anfechtung, Rücktritt', '7, 11'], ['12', 'Fristen und Verjährung', '12'],
        ['13', 'Delikt und Gefährdungshaftung', '13'], ['14', 'Haftung für Dritte', '13'], ['15', 'Sachenrecht', '14'],
        ['16', 'Abstraktion und Bereicherung', '3, 14'], ['17', 'Rechtsdurchsetzung', '1']])
    ] },
    { title: 'Der Influencer-Fall „Ingolf“', blocks: [
      p('Prof. Weiden zieht einen Fall durch die ganze Vorlesung. Wer die Ergebnisse kennt, erkennt viele Klausurmuster wieder.'),
      st('Die Stationen und ihre Ergebnisse', [
        'Maler Woyzeck :: Streichen ist „anderer Erfolg“, also Werkvertrag (§ 631 II). Woyzeck kann verlangen, auch das Wohnzimmer zu streichen.',
        'Job bei dm :: Dienstvertrag (§ 611). Nach Ende der vereinbarten 5-Stunden-Schicht muss Ingolf nicht bleiben.',
        'Fly GmbH, „Klar Bro!“ :: Auch ohne Rechtsbindungswillen zählt der objektive Empfängerhorizont (§§ 133, 157). Werkvertrag über zwei Videos ist zustande gekommen.',
        'Kopfhörer von Singsang :: Unbestellte Lieferung an einen Verbraucher: kein Vertrag, keine Rücksendepflicht (§ 241a als lex specialis zu § 151).',
        'Formfrage :: Vertrag mit Fly per E-Mail wirksam, es gilt Formfreiheit. Schriftform hieße: eigenhändige Unterschrift, die den Text räumlich abschließt.',
        'Fußball im Webshop :: Warenkorb ist kein Vertrag. Die Präsentation ist invitatio, der Klick auf „zahlungspflichtig bestellen“ das Angebot. Ohne Annahme keine Ansprüche.',
        'Influencer-Verträge :: Bestimmte Zahl an Posts: Werkvertrag. Langfristige Zusammenarbeit ohne festgelegte Posts: Dienstvertrag.',
        'Vertrag mit RUN :: Wettbewerbsverbot nicht überraschend (§ 305c). Vertragsstrafe: § 309 Nr. 6 gilt nicht gegenüber Unternehmer Ingolf (§ 310 I), aber mehr als dreimal branchenüblich, also unwirksam nach § 307 I.',
        'Ingolf postet zu spät :: Fly verlangt 4.000 € aus §§ 631, 280 I, III, 281. Frist entbehrlich, weil die Umstände ein relatives Fixgeschäft nahelegen (§ 281 II).',
        'Sessel mit gebrochenem Fuß :: Verbrauchsgüterkauf, Gefahr geht erst mit Übergabe an Ingolf über (§ 475 II). Nacherfüllung nach seiner Wahl, Kosten trägt die Schreinerei (§ 439 II).',
        'Anfechtung gegenüber Fly :: Fehlendes Erklärungsbewusstsein, Anfechtung nach § 119 I Var. 2. Ingolf schuldet das negative Interesse (§ 122): nur speziell im Vertrauen entstandene Produktionskosten, nicht den Ersatz-Influencer.',
        'Unfall im Skate-Park :: § 823 I durch Unterlassen (Verkehrssicherungspflicht, Wartung). Verdienstausfall ersatzfähig, wenn Einnahmen wahrscheinlich waren (z. B. gebuchte Videos).',
        'Die grüne Alternative :: Konrad ficht wegen Inhaltsirrtums an und verlangt 89 € nach § 812 I 1 Var. 1. Ingolf bekommt die Kleidung zurück und § 122 (Herstellung und Lieferung), nicht den Kaufpreis.'
      ])
    ] }
  ],
  cases: [
    K('WS 24/25 · 1', 'Kalle ficht den Kaufvertrag über ein Fahrzeug gegenüber Valerio wirksam an. Das Fahrzeug ist bereits übereignet, der Preis bezahlt.', 'Welche Aussage ist richtig?', 1, [
      ['Ist nur das Verpflichtungsgeschäft nach § 142 nichtig, ist V Eigentümer.', 'Falsch. Dann bleibt die Übereignung wirksam, K ist Eigentümer.'],
      ['Sind Verpflichtungs- und Verfügungsgeschäft nichtig, ist V Eigentümer.', 'Richtig. Fehleridentität: Ohne wirksame Übereignung ist V Eigentümer geblieben.'],
      ['Sind beide nichtig, ist K Eigentümer.', 'Falsch. Siehe b.'],
      ['Sind beide nichtig, hat V einen Herausgabeanspruch nur aus § 812.', 'Falsch. Daneben steht § 985 („nur“).']]),
    K('WS 24/25 · 2', 'Verbraucher Valentin kauft am 10.03.23 bei Unternehmer Udo einen Laptop und nimmt ihn gleich mit. Am 09.01.25 stellt er einen Defekt am Arbeitsspeicher fest und verlangt Nacherfüllung.', 'Wann tritt die Verjährung ein?', 3, [
      ['Nach § 195 in 3 Jahren ab Jahresende, am 31.12.2026.', 'Falsch. Für Mängelrechte gilt § 438.'],
      ['2 Jahre ab Ende des Entstehungsjahres, also 31.12.2025.', 'Falsch. § 438 II: Beginn mit Ablieferung, nicht Jahresende.'],
      ['2 Jahre ab Gefahrübergang, der Zeitpunkt des Eigentumsübergangs ist, also 10.03.2025.', 'Falsch. Gefahrübergang ist die Übergabe, und § 475e III verlängert.'],
      ['Am 09.05.2025.', 'Richtig. Der Mangel hat sich innerhalb der Frist gezeigt, Verjährung frühestens 4 Monate danach (§ 475e III).']]),
    K('WS 24/25 · 3', 'Gastronom G kauft für sein Restaurant ein Profi-Kühlgerät. L beschädigt es bei der Anlieferung leicht fahrlässig, nach zwei Tagen fällt die Kühlung aus. Die Reparatur wäre möglich, G will aber nichts mehr mit L zu tun haben.', 'Welche Aussage ist richtig?', 2, [
      ['G kann ohne Frist Schadensersatz statt der Leistung (teureres Ersatzgerät) verlangen.', 'Falsch. § 281 I verlangt eine Frist zur Nacherfüllung.'],
      ['G kann ohne Fristsetzung zurücktreten.', 'Falsch. § 323 I, keine Ausnahme ersichtlich.'],
      ['G muss L erfolglos eine Frist zur Nacherfüllung setzen, bevor er Schadensersatz statt der Leistung verlangen kann.', 'Richtig. Vorrang der Nacherfüllung.'],
      ['L hat die Wahl zwischen Reparatur und Neulieferung.', 'Falsch. Der Käufer wählt (§ 439 I).']]),
    K('WS 24/25 · 4', 'Guido kauft für sein Privathaus bei L ein Kühlgerät, geliefert am 10.01.2024. Am 13.01.2025 fällt die Kühlung aus. L will reparieren, wenn G das Gerät auf eigene Kosten zu ihm nach Lüneburg bringt.', 'Welche Aussage ist richtig?', 2, [
      ['Es wird vermutet, dass der Mangel schon bei Gefahrübergang vorlag.', 'Falsch. § 477 I gilt nur ein Jahr, das ist hier vorbei.'],
      ['G muss das Gerät auf eigene Kosten schicken, ohne Erstattung.', 'Falsch. § 439 II: Der Verkäufer trägt die Transportkosten.'],
      ['G kann von L einen Vorschuss für die Transportkosten verlangen.', 'Richtig. § 475 IV beim Verbrauchsgüterkauf.'],
      ['G muss erst eine Frist setzen, sonst ist die Reparatur nicht fällig.', 'Falsch. Der Nacherfüllungsanspruch ist mit dem Verlangen fällig.']]),
    K('WS 24/25 · 5', 'Pit kauft privat einen Kühlschrank, dessen KI im Modus „Automatik“ die Temperaturen selbst einstellt. Man kann ihn auch manuell einstellen. Die Automatik erkennt die Lebensmittel nicht, sie verderben.', 'Welche Aussage ist richtig?', 0, [
      ['Es handelt sich nicht um eine Ware mit digitalen Elementen.', 'Richtig nach h. M.: Die Grundfunktion Kühlen geht auch manuell, das Digitale ist nicht funktionsnotwendig (§ 327a III). Es bleibt bei Kaufrecht für das Gerät.'],
      ['§§ 327 ff. gelten für B2B, B2C und C2C.', 'Falsch. Nur für Verbraucherverträge.'],
      ['Gewährleistung ausschließlich nach § 327i.', 'Falsch („ausschließlich“).'],
      ['P kann zwischen §§ 474 ff. und §§ 327 ff. wählen.', 'Falsch. Das Gesetz ordnet zu, es gibt kein Wahlrecht.']]),
    K('WS 24/25 · 6', '', 'Die essentialia negotii des Kaufvertrages sind …', 1, [
      ['… zwei übereinstimmende Willenserklärungen.', 'Falsch. Das ist der Vertragsschluss, nicht dessen wesentlicher Inhalt.'],
      ['… Kaufpreis, Kaufgegenstand und Vertragspartner.', 'Richtig.'],
      ['… Kaufpreis, Kaufgegenstand und Übergabeort.', 'Falsch. Der Leistungsort ergibt sich notfalls aus § 269.'],
      ['… Angebot und Annahme.', 'Falsch. Siehe a.']]),
    K('WS 24/25 · 7', 'Vanessa probiert im Kaufhaus Make-up aus und öffnet dabei auch Produkte, die keine Tester sind. Sie weiß, dass nur Tester zum Ausprobieren bestimmt sind. Deliktische Ansprüche sind nicht zu prüfen.', 'Welche Aussage ist richtig?', 3, [
      ['Durch das Öffnen ist konkludent ein Kaufvertrag über alle benutzten Produkte zustande gekommen.', 'Falsch. Die Ware im Regal ist invitatio, das Kaufhaus hat nichts angenommen.'],
      ['Ein Kaufvertrag wäre anfechtbar, weil sie sich über die Tragweite ihres Handelns geirrt hat.', 'Falsch. Rechtsfolgenirrtum ist unbeachtlich.'],
      ['Sie könnte ohne Fristsetzung zurücktreten.', 'Falsch. Kein Rücktrittsgrund.'],
      ['Das Kaufhaus kann Schadensersatz aus §§ 280 I, 311 II, 241 II verlangen.', 'Richtig. Vertragsanbahnung, Verletzung der Rücksichtnahmepflicht.']]),
    K('WS 24/25 · 8', 'Gottlieb verpflichtet sich wirksam, seinem Sohn monatlich 500 € Unterhalt zu zahlen. Seine Einkünfte legt er nicht offen, sie stehen nicht im Vertrag. Nach drei Monaten zahlt er wegen tatsächlich gesunkener Einnahmen nur noch 50 € und beruft sich auf § 313.', 'Welche Aussage ist richtig?', 1, [
      ['Eine nachträgliche Anpassung eines wirksamen Vertrages ist nicht möglich.', 'Falsch. § 313 erlaubt sie.'],
      ['Die Anpassung setzt voraus, dass man die Grundlagen bei Vertragsschluss mit den Umständen danach vergleicht.', 'Richtig.'],
      ['G kann die Anpassung verlangen.', 'Falsch. Seine verschwiegenen Einkünfte sind nicht Geschäftsgrundlage geworden. Eine einseitige Kürzung gibt es ohnehin nicht.'],
      ['Die Belange des Kindes werden nicht berücksichtigt.', 'Falsch. § 313 verlangt eine Abwägung der Zumutbarkeit.']]),
    K('WS 24/25 · 9', '', 'Welche Aussage trifft zu?', 1, [
      ['Ein Vertragsschluss per E-Mail genügt der Schriftform des § 126 I.', 'Falsch. E-Mail ist Textform.'],
      ['Die Kündigung eines Arbeitsverhältnisses bedarf der Schriftform.', 'Richtig. § 623 BGB.'],
      ['Die Schriftform kann ausnahmslos durch die elektronische Form ersetzt werden.', 'Falsch. § 126 III und § 623 schließen sie aus.'],
      ['Ein Testament muss immer notariell beurkundet oder beglaubigt werden.', 'Falsch. Eigenhändiges Testament, § 2247.']]),
    K('WS 24/25 · 10', 'V soll einen antiken Schreibtisch um 15 Uhr in die Wohnung des K liefern. K ist nicht da. V lagert den Tisch für 60 € bei X ein.', 'Kann V die 60 € ersetzt verlangen?', 2, [
      ['Nein, freiwillige Aufwendung, kein Schaden.', 'Falsch. § 304 erfasst gerade Mehraufwendungen.'],
      ['Nein, V muss nachliefern.', 'Falsch. Nicht entscheidend.'],
      ['Ja, da K in Annahmeverzug ist.', 'Richtig. §§ 293, 294, 304.'],
      ['Nur nach einer Anzahlung.', 'Falsch. Keine solche Voraussetzung.']]),
    K('WS 24/25 · 11', 'Wie zuvor. Einige Tage später zerstört ein plötzliches Hochwasser den eingelagerten Schreibtisch.', 'Kann V trotzdem den Kaufpreis verlangen?', 2, [
      ['Nein, ohne Lieferung keinesfalls Kaufpreis.', 'Falsch („keinesfalls“). § 326 II.'],
      ['Nein, K trifft am Hochwasser kein Verschulden.', 'Falsch. Auf Verschulden des K kommt es nicht an.'],
      ['Ja, da V an dem Hochwasser kein Verschulden trifft.', 'Richtig. Unmöglichkeit während des Annahmeverzugs ohne Vertretenmüssen des V: Der Preisanspruch bleibt (§ 326 II 1 Alt. 2, § 300 I).'],
      ['Nein, K war nicht in Annahmeverzug.', 'Falsch. Siehe Aufgabe 10.']]),
    K('WS 24/25 · 12', 'S kauft für ihre private Fotosammlung bei Fotohändler F eine Bildbearbeitungssoftware. Das Programm stürzt regelmäßig ab. F lehnt eine funktionierende Version kategorisch ab.', 'Welche Aussage ist richtig?', 0, [
      ['S kann den Vertrag beenden und den Preis zurückfordern.', 'Richtig. Digitales Produkt: Vertragsbeendigung nach § 327m I, weil F die Nacherfüllung verweigert, Rückzahlung nach § 327o.'],
      ['Es handelt sich um eine Ware mit digitalem Element.', 'Falsch. Reine Software ist ein digitales Produkt.'],
      ['Es gelten ausschließlich §§ 434 ff.', 'Falsch. §§ 327 ff. gelten.'],
      ['Nur der Hersteller schuldet Nacherfüllung.', 'Falsch. Vertragspartner ist F.']]),
    K('WS 24/25 · 14', 'D kauft Möbel, Lieferung bis spätestens 31.3. Sie kommen nicht. Am 5.4. setzt D eine Frist bis 20.4. Am 27.4. will S liefern, D verweigert und erklärt, nicht mehr am Vertrag festhalten zu wollen. Am 30.4. kauft er dieselben Möbel bei H, wegen Preiserhöhung 300 € teurer.', 'Welche Antwort ist richtig?', 2, [
      ['S kann Zahlung und Abnahme verlangen (§ 433 II).', 'Falsch. Nach Fristablauf und Rücktritt bzw. Schadensersatzverlangen ist der Erfüllungsanspruch weg (§ 281 IV).'],
      ['D hat keinen Anspruch auf die 300 €.', 'Falsch. Siehe c.'],
      ['S hat keinen Anspruch auf Kaufpreis und Abnahme, D kann die 300 € Mehrkosten verlangen.', 'Richtig. §§ 280 I, III, 281, Rücktritt und Schadensersatz nebeneinander (§ 325).'],
      ['Es bestehen keine gegenseitigen Ansprüche.', 'Falsch. Siehe c.']]),
    K('WS 24/25 · 15', 'R fährt mit überhöhter Geschwindigkeit auf einen Zebrastreifen zu und überfährt M. Sie hat monatelang Schmerzen. Abgedruckt ist § 229 StGB (fahrlässige Körperverletzung).', 'Wie ist die Rechtslage?', 1, [
      ['R haftet nur aus § 823 I.', 'Falsch („nur“). Daneben § 823 II und § 7 StVG.'],
      ['R haftet aus § 823 I und § 823 II für Heilbehandlung und Schmerzensgeld, § 229 StGB ist Schutzgesetz.', 'Richtig. Schmerzensgeld nach § 253 II.'],
      ['M kann nur entweder Heilbehandlung oder Schmerzensgeld verlangen.', 'Falsch. Beides nebeneinander.'],
      ['Die Rechtswidrigkeit fehlt.', 'Falsch. Sie ist indiziert, kein Rechtfertigungsgrund.']]),
    K('WS 24/25 · 17', 'Die Geschäftsführer zweier GmbHs einigen sich mündlich über 1.000 Ziegel. Am Ende des Treffens überreicht B die eigenen AGB: „Es gelten natürlich unsere Lieferbedingungen.“ Ein kaufmännisches Bestätigungsschreiben liegt nicht vor.', 'Sind die AGB Vertragsbestandteil geworden?', 2, [
      ['Nein, § 305 II ist nicht erfüllt.', 'Falsch begründet. § 305 II gilt gegenüber Unternehmern nicht (§ 310 I).'],
      ['Ja, § 305 II ist erfüllt.', 'Falsch. § 305 II ist nicht anwendbar.'],
      ['Nein, weil der Hinweis erst nach der mündlichen Einigung erfolgte.', 'Richtig. Der Vertrag war schon geschlossen, ein nachträglicher Hinweis bezieht nichts mehr ein.'],
      ['Ja, unter Unternehmern genügt der Hinweis nach Vertragsschluss.', 'Falsch. Auch B2B braucht es eine Einigung bei Vertragsschluss.']]),
    K('WS 24/25 · 18', 'Student K bestellt am Mittwoch, 15.5., online eine Kaffeemaschine (ordnungsgemäße Widerrufsbelehrung). Lieferung am Dienstag, 21.5. Er will am Montag, 3.6., widerrufen.', 'Welche Aussage ist richtig?', 2, [
      ['Die Frist ist am Mittwoch, 29.5., abgelaufen.', 'Falsch. Beginn ist der Erhalt der Ware, nicht die Bestellung.'],
      ['Die Frist ist am Dienstag, 28.5., abgelaufen.', 'Falsch. Das wären nur 7 Tage.'],
      ['Die Frist läuft erst am Dienstag, 4.6., ab, K kann noch widerrufen.', 'Richtig. Fristbeginn 22.5. (§ 187 I), 14 Tage, Ende 4.6., 24 Uhr.'],
      ['Die Frist läuft am Montag, 3.6., ab.', 'Falsch. Ein Tag zu früh gerechnet.']]),
    K('WS 24/25 · 19', 'Die angetrunkene 21-jährige A hängt Zettel auf: „Ohrring verloren … Der Finder erhält 100 € Finderlohn.“ B findet ihn, weiß, dass er A gehört, und gibt ihn zurück. Den Zettel hat er nie gesehen.', 'Welche Aussage ist richtig?', 2, [
      ['Kein Anspruch, A war angetrunken und daher geschäftsunfähig.', 'Falsch. Angetrunken heißt nicht dauerhaft geschäftsunfähig, das Aushängen geschah ohnehin später.'],
      ['Kein Anspruch, B hat das Angebot nicht angenommen.', 'Falsch. Bei der Auslobung braucht es keine Annahme.'],
      ['Anspruch auf 100 €, es handelt sich um eine Auslobung.', 'Richtig. § 657 BGB, auch ohne Kenntnis der Auslobung.'],
      ['Anspruch, B hat konkludent nach § 151 angenommen.', 'Falsch. Kein Vertrag, sondern einseitiges Rechtsgeschäft.']]),
    K('WS 24/25 · 20', 'K bestellt per E-Mail einen Fernseher aus dem Katalog des V für 1.200 €. V vertippt sich in der Bestätigung und schreibt 1.000 €. K antwortet: „Einverstanden.“ V schreibt sofort: „Ich habe mich vertippt und widerrufe.“', 'Wie ist die Rechtslage?', 2, [
      ['K kann gegen 1.000 € Lieferung verlangen, V kann als Unternehmer nicht widerrufen.', 'Falsch. Es geht nicht um ein Verbraucher-Widerrufsrecht.'],
      ['K kann gegen 1.000 € Lieferung verlangen, weil V sorgfältig formulieren muss.', 'Falsch. Anfechtung setzt kein fehlendes Verschulden voraus.'],
      ['K hat keinen Anspruch auf Lieferung für 1.000 €, V hat wirksam angefochten.', 'Richtig. Erklärungsirrtum (§ 119 I Var. 2), „widerrufe“ ist als Anfechtung auszulegen.'],
      ['Es fehlt an einer Anfechtungserklärung.', 'Falsch. Das Wort muss nicht fallen (§ 133).']]),
    K('WS 23/24 · 1', 'Kilian vereinbart mit Vera Lieferung einer Werkbank zum 15.6. Am 16.6. erklärt er, er müsse sonst 2.500 € Vertragsstrafe an seinen Auftraggeber zahlen, und brauche sie bis 21.6. Sie kommt nicht. Ab 23.6. mietet er für 38 €/Tag eine Ersatz-Werkbank (früher war keine zu bekommen). Die Vertragsstrafe wird fällig. Am 27.6. liefert Vera.', 'Wie ist die Rechtslage?', 2, [
      ['Vertragsstrafe ja, Mietkosten nein.', 'Falsch. Beides ist Verzögerungsschaden.'],
      ['Nur die Mietkosten 23.–27.6.', 'Falsch. Die Vertragsstrafe ist ebenfalls ersatzfähig.'],
      ['Zusätzlich zur Vertragsstrafe auch die Mietkosten 23.–27.6.', 'Richtig. Verzug ab 16.6. ohne Mahnung (§ 286 II Nr. 1), Schaden nach §§ 280 I, II, 286.'],
      ['Kein Ersatz, weil kein relatives Fixgeschäft.', 'Falsch. Für den Verzögerungsschaden braucht es kein Fixgeschäft.']]),
    K('WS 23/24 · 2', 'Max schreibt am Montag, 10. März, 14 Uhr, eine E-Mail an ein Autohaus mit fünf Mitarbeitern. Der zuständige Mitarbeiter ist krank und liest sie erst am Freitag, 14. März, 11 Uhr.', 'Wann ist die Erklärung zugegangen?', 1, [
      ['Am 10. März beim Absenden.', 'Falsch. Absenden ist Abgabe, nicht Zugang.'],
      ['Am 10. März, als sie auf dem Server des Empfängers abrufbereit war.', 'Richtig. Machtbereich des Empfängers, Kenntnisnahme während der Geschäftszeit zu erwarten.'],
      ['Am 17. März, 9 Uhr.', 'Falsch. Kein Grund für eine Verschiebung.'],
      ['Am 14. März, 11 Uhr, bei tatsächlicher Kenntnis.', 'Falsch. Krankheit fällt in die Risikosphäre des Empfängers.']]),
    K('WS 23/24 · 3', 'Wie zuvor. Max schreibt: „Sie haben in Ihrem Webauftritt einen Renault Twingo für 8.890 € inseriert (Daten …). Ich kaufe ihn!“', 'Ist ein Kaufvertrag zustande gekommen?', 2, [
      ['Nein, die essentialia negotii sind unvollständig.', 'Falsch. Sache, Preis und Parteien stehen fest.'],
      ['Ja, weil Max ein rechtsverbindliches Angebot abgegeben hat.', 'Falsch. Ein Angebot allein ist noch kein Vertrag.'],
      ['Nein, weil das Inserat des Autohauses kein verbindliches Angebot im Sinne des § 145 ist.', 'Richtig. Invitatio ad offerendum. Max hat ein Angebot gemacht, die Annahme fehlt.'],
      ['Ja, Max hat das Angebot des Autohauses angenommen.', 'Falsch. Siehe c.']]),
    K('WS 23/24 · 4', 'Die Geschäftsführerin der Blitzsauber GmbH kauft bei der Herstellerin Müller & Söhne OHG einen Hochdruckreiniger. Er explodiert bei der ersten Benutzung durch Mitarbeiter Martin wegen eines Konstruktionsfehlers, der bei ordnungsgemäßer Endkontrolle erkennbar gewesen wäre.', 'Welche Aussage ist richtig?', 3, [
      ['Wegen Naturalrestitution kommt nur Reparatur in Betracht.', 'Falsch. Bei Unmöglichkeit Geld (§ 251).'],
      ['Die GmbH kann nach ProdHaftG Ersatz des Reinigers verlangen.', 'Falsch. Das ProdHaftG ersetzt nicht das Produkt selbst und nur privat genutzte Sachen.'],
      ['Die GmbH hat keinen Schadensersatz, nur Nacherfüllung.', 'Falsch. § 437 Nr. 3 ist möglich.'],
      ['Der Tatbestand des § 823 I zugunsten von Martin ist erfüllt.', 'Richtig. Körperverletzung durch Verletzung der Herstellerpflichten, Verschulden bei erkennbarem Fehler.']]),
    K('WS 23/24 · 5', 'Wie zuvor. Martin fällt sechs Wochen aus, die GmbH muss dafür aufkommen und verlangt Ersatz von Müller & Söhne.', 'Welche Aussage ist richtig?', 1, [
      ['§ 823 I ist erfüllt, die Kosten der Arbeitsunfähigkeit sind aber nicht ersatzfähig.', 'Falsch. Die GmbH hat einen Weg zum Ersatz, siehe b.'],
      ['Die GmbH hat einen Anspruch auf Ersatz der Kosten der Arbeitsunfähigkeit.', 'Richtig. Aus dem Kaufvertrag (§§ 437 Nr. 3, 280 I, Mangelfolgeschaden), zudem geht Martins Anspruch auf Verdienstausfall bei Lohnfortzahlung auf die GmbH über (§ 6 EFZG).'],
      ['Nach ProdHaftG muss sie beweisen, dass die Endkontrolle die Explosion verhindert hätte.', 'Falsch. Das ProdHaftG ist verschuldensunabhängig.'],
      ['Hätte ein Zulieferer das Teil hergestellt, haftet Müller & Söhne nicht nach ProdHaftG.', 'Falsch. Auch der Endhersteller ist Hersteller (§ 4 I).']]),
    K('WS 23/24 · 6', 'U bestellt 3.000 Blatt „DIN A4, reinweiß“, B liefert Recyclingpapier. Eine LegalTech-Software prüft: (1) Kaufvertrag durch Bestellung und Bestätigung. (2) Sachmangel nach § 434 II Nr. 1, weil reinweiß vereinbart war. (3) B muss die Pflichtverletzung zu vertreten haben, vermutet nach § 280 I 2. (4) Es ist eine Gattungsschuld. (5) Anspruch auf Nacherfüllung entstanden.', 'Welche Kombination ergibt die richtige Lösung? (Optionen leicht angepasst, im Original waren b und c identisch.)', 1, [
      ['1, 3, 5', 'Falsch. Ohne Mangel kein Nacherfüllungsanspruch, Verschulden ist keine Voraussetzung.'],
      ['1, 2, 5', 'Richtig. Nacherfüllung braucht Kaufvertrag und Sachmangel. Vertretenmüssen nur beim Schadensersatz.'],
      ['1, 2, 3, 5', 'Falsch. Punkt 3 gehört nicht in die Prüfung der Nacherfüllung.'],
      ['1, 3, 4, 5', 'Falsch. Gattungsschuld spielt keine Rolle.']]),
    K('WS 23/24 · 7', 'Lukas fragt Sophie über ihr Kontaktformular: „Kannst du mir das Armband (Einzelstück) für 50 € reservieren?“ Sophie: „Ja. Bitte komm morgen zwischen 15 und 16 Uhr, um es abzuholen.“ Lukas kommt um 17 Uhr, Sophie hat es um 16:30 Uhr verkauft. Ein ähnliches Armband kostet ihn 60 €.', 'Welche Aussage ist richtig?', 3, [
      ['Lukas hat einen Anspruch auf Übereignung aus § 433.', 'Falsch. Die Reservierung galt nur bis 16 Uhr.'],
      ['Lukas kann 10 € Schadensersatz verlangen.', 'Falsch. Sophie hat keine Pflicht verletzt.'],
      ['Er muss erst eine Frist zur Nacherfüllung setzen.', 'Falsch. Es geht nicht um einen Mangel.'],
      ['Lukas hat keine Ansprüche gegen Sophie.', 'Richtig. Die befristete Reservierung ist mit Ablauf des Zeitfensters erloschen, danach durfte Sophie frei verkaufen.']]),
    K('WS 23/24 · 8', 'Restaurantbesitzer Michael bittet GreenHarvest um ein Angebot und erhält Preise. Er bestellt per E-Mail 40 kg Karotten, GreenHarvest antwortet: „Gut, wir liefern wie bestellt.“ Am nächsten Morgen schreibt er, er gehe von 5 % Rabatt aus. GreenHarvest: Lieferung ohne Rabatt.', 'Welche Aussage ist richtig?', 2, [
      ['Er zahlt mit 5 % Rabatt, durch sein Bestätigungsschreiben.', 'Falsch. Ein Bestätigungsschreiben gibt nur das Verhandelte wieder, der Rabatt war nie Thema. GreenHarvest hat widersprochen.'],
      ['Kein Vertrag, Dissens.', 'Falsch. Der Vertrag kam am 11.1. zustande.'],
      ['Er zahlt den Preis aus der Informations-E-Mail ohne Abzüge.', 'Richtig.'],
      ['Seine Mail vom 12.1. ist ein bindendes abänderndes Angebot.', 'Falsch. Einen geschlossenen Vertrag kann er nicht einseitig ändern.']]),
    K('WS 23/24 · 9', 'Max bestellt am 12.12. online einen Laptop und erhält ihn am 14.12. (§ 193 bleibt unberücksichtigt).', 'In welchem Fall kann er am 30.12. wirksam widerrufen?', 0, [
      ['Wenn er nicht ordnungsgemäß über sein Widerrufsrecht belehrt wurde.', 'Richtig. Dann hat die Frist nicht begonnen (§ 356 III).'],
      ['Bei ordnungsgemäßer Belehrung, wenn der Laptop mangelhaft ist.', 'Falsch. Die Frist endete am 28.12., ein Mangel verlängert sie nicht.'],
      ['Bei ordnungsgemäßer Belehrung, wenn er den Laptop erst am 16.12. ausgepackt hat.', 'Falsch. Maßgeblich ist der Erhalt.'],
      ['In allen Fällen.', 'Falsch.']]),
    K('WS 23/24 · 10', 'Siri erklärt Nebenpflichtverletzungen: (1) geregelt in § 241 II. (2) nur bei gesetzlichen Schuldverhältnissen. (3) Folge sind Gewährleistungsansprüche. (4) Folge können nur Schadensersatz und Rücktritt sein. (5) Nebenpflichten sind weniger wichtige Pflichten wie die Abnahme durch den Käufer. (6) § 280 I 2 gilt nicht. (7) Nebenpflichten sind Rücksichtnahmepflichten. (8) Beispiel: Beschädigung des Teppichs bei der Reparatur des Treppengeländers.', 'Welche Kombination ist richtig?', 1, [
      ['1, 2, 6, 7', 'Falsch. 2 und 6 sind falsch.'],
      ['1, 4, 7, 8', 'Richtig. Schadensersatz (§§ 280 I, 282) und Rücktritt (§ 324).'],
      ['1, 3, 5, 8', 'Falsch. 3 und 5 sind falsch.'],
      ['1, 4, 5, 8', 'Falsch. 5 ist falsch, die Abnahme ist keine Rücksichtnahmepflicht nach § 241 II.']]),
    K('WS 23/24 · 11', '', 'Welche Aussage ist richtig?', 3, [
      ['Personen über 18 können beschränkt geschäftsfähig sein.', 'Falsch. Beschränkt geschäftsfähig sind nur Minderjährige (§ 106).'],
      ['Ein Kind am Tag vor seinem 7. Geburtstag verkauft wirksam sein Kuscheltier, wenn die Eltern einwilligen.', 'Falsch. Es ist noch geschäftsunfähig (§§ 104 Nr. 1, 105 I).'],
      ['Volljährige Geschäftsunfähige können keinerlei Rechtsgeschäfte tätigen und brauchen immer einen Betreuer.', 'Falsch. § 105a, „keinerlei“ und „immer“.'],
      ['Verkauft K am Tag nach seinem 7. Geburtstag sein Kuscheltier an einen 8-Jährigen, der am nächsten Tag zahlt, ist das Geschäft schwebend unwirksam.', 'Richtig. Für beide nicht lediglich vorteilhaft, § 108.']]),
    K('WS 23/24 · 12', 'Zahnarzt Z verkauft seine Forderungen gegen Privatpatienten an Factor F, F zahlt den Kaufpreis. Die Einwilligung der Patienten liegt vor.', 'Welche Aussage ist richtig?', 2, [
      ['Mit Abschluss des Kaufvertrages wird F Inhaber der Forderungen.', 'Falsch. Trennungsprinzip, der Kaufvertrag verpflichtet nur.'],
      ['F wird Inhaber durch Übergabe der Liste nach § 929.', 'Falsch. § 929 gilt für bewegliche Sachen.'],
      ['F wird Inhaber durch eine Abtretungsvereinbarung.', 'Richtig. § 398.'],
      ['F wird Inhaber durch einseitige Erklärung des Z und Zahlung.', 'Falsch. Die Abtretung ist ein Vertrag.']]),
    K('WS 23/24 · 13', 'Eltern wollen ihrer 17-jährigen Tochter zum Abitur ein Grundstück mit vermietetem Haus schenken.', 'Welche Antwort ist richtig?', 1, [
      ['Die Schenkung ist als unzulässiges Insichgeschäft (§ 181) nichtig.', 'Falsch. Der Schenkungsvertrag ist lediglich vorteilhaft, und § 181 führt nicht zur Nichtigkeit.'],
      ['T braucht für den Schenkungsvertrag keine Vertretung, er ist lediglich rechtlich vorteilhaft.', 'Richtig. § 107.'],
      ['Die Schenkung ist ein einseitiges Rechtsgeschäft.', 'Falsch. Sie ist ein Vertrag (§ 516).'],
      ['Auch die Übereignung ist lediglich vorteilhaft.', 'Falsch. Eintritt in die Mietverträge (§ 566) ist ein rechtlicher Nachteil.']]),
    K('WS 23/24 · 14', 'Wie zuvor, aber T ist 18.', 'Welche Antwort ist richtig?', 2, [
      ['Grundstück und Gebäude werden in zwei Rechtsgeschäften übertragen.', 'Falsch. Das Haus ist wesentlicher Bestandteil (§§ 94, 946).'],
      ['Einigung in Schriftform, ersetzbar durch E-Mail, und Eintragung.', 'Falsch. Die Auflassung muss vor dem Notar erklärt werden (§ 925).'],
      ['Einigung in notarieller Form (Auflassung) und Eintragung ins Grundbuch.', 'Richtig. §§ 873, 925.'],
      ['„Auflassung“ ist die notarielle Einigung im Rahmen der Schenkung.', 'Falsch. Auflassung ist die dingliche Einigung, nicht der Schenkungsvertrag.']]),
    K('WS 23/24 · 15', 'Juwelier G verkauft Verbraucherin V eine Kette. Im schriftlichen Vertrag steht: „Bei dieser Kette handelt es sich um eine Handarbeit, die auf Grund Alters und Material nicht den gängigen Standards entspricht.“ Der Verschluss funktioniert nicht richtig.', 'Welche Antwort ist richtig?', 2, [
      ['Negative Beschaffenheitsvereinbarungen sind nur zwischen Unternehmern zulässig.', 'Falsch. § 476 I 2 erlaubt sie unter Voraussetzungen.'],
      ['Sie sind im Verbrauchsgüterkauf immer unzulässig.', 'Falsch („immer“).'],
      ['Sie sind grundsätzlich zulässig, diese entspricht aber nicht den gesetzlichen Vorgaben und ist unwirksam.', 'Richtig. Keine eigene Information vor Vertragsschluss, keine ausdrückliche und gesonderte Vereinbarung.'],
      ['Es ist eine individuelle Absprache, die die Gewährleistung wirksam ausschließt.', 'Falsch. § 476 I 1.']]),
    K('WS 23/24 · 16', 'V hat ein Klavier für 3.000 € erworben und verkauft es K für 5.000 €. Ein Angebot des B über 6.000 € lehnt er ab. K ficht später wirksam wegen Irrtums an.', 'V kann von K …', 1, [
      ['… den vollen Vertrauensschaden von 3.000 € verlangen.', 'Falsch. Gedeckelt durch das Erfüllungsinteresse.'],
      ['… nur 2.000 € verlangen, weil das Erfüllungsinteresse den Anspruch aus § 122 I begrenzt.', 'Richtig. 5.000 € − 3.000 € = 2.000 €.'],
      ['… nichts verlangen, wenn K kein Verschulden trifft.', 'Falsch. § 122 ist verschuldensunabhängig.'],
      ['… nur Rückabwicklung verlangen.', 'Falsch. Daneben § 122.']]),
    K('WS 23/24 · 17', 'Jan kauft bei Künstler Genio ein Gemälde. Abholung und Zahlung sollen am 25.2. in der Galerie sein. Jan kommt nicht. Am 26.2. zerstört ein Besucher das Bild mit Säure.', 'Muss Jan zahlen?', 1, [
      ['Nein, Genio ist frei und kann auch keinen Preis verlangen.', 'Falsch. § 326 II.'],
      ['Ja, Jan hat nicht wie vereinbart abgeholt, und Genio trifft kein Verschulden.', 'Richtig. Annahmeverzug ohne Angebot (§ 296, Abholtermin nach dem Kalender), Preisgefahr bei Jan (§ 326 II 1 Alt. 2).'],
      ['Nein, Genio hat nicht nach § 294 angeboten.', 'Falsch. § 296 macht das Angebot entbehrlich.'],
      ['Nein, anfängliche Unmöglichkeit macht den Vertrag unwirksam.', 'Falsch. Nachträglich, und selbst anfänglich bliebe der Vertrag wirksam (§ 311a I).']]),
    K('WS 23/24 · 18', '', 'Die Sonderbestimmungen der §§ 475b und 475c BGB …', 2, [
      ['… gelten für digitale Produkte und für Waren mit digitalen Elementen.', 'Falsch. Für digitale Produkte gelten §§ 327 ff.'],
      ['… ersetzen den Sachmangelbegriff des § 434.', 'Falsch. Sie ergänzen ihn.'],
      ['… ergänzen § 434 für Waren mit digitalen Elementen, insbesondere um die Aktualisierungspflicht.', 'Richtig.'],
      ['… gelten nicht, weil sie nur in einer EU-Richtlinie stehen.', 'Falsch. Die Richtlinie wurde ins BGB umgesetzt.']]),
    K('WS 23/24 · 19', 'Im vorformulierten Fitnessvertrag steht: „Das Fitnessstudio schließt jegliche Haftung bis auf grobe Fahrlässigkeit und Vorsatz aus.“ F stellt das Laufband leicht fahrlässig zu schnell ein, A stürzt und hat eine Platzwunde.', 'Darf F jeden Schadensersatz verweigern?', 3, [
      ['Nein, der Passus ist keine AGB.', 'Falsch. Vorformuliert für eine Vielzahl von Verträgen.'],
      ['Nein, wenn A die erste Kundin wäre, weil dann keine AGB vorlägen.', 'Falsch. Es reicht die Absicht der mehrfachen Verwendung.'],
      ['Ja, die AGB schließt die Haftung aus.', 'Falsch. Siehe d.'],
      ['Nein. Die AGB ist unwirksam, F haftet auch bei leichter Fahrlässigkeit.', 'Richtig. § 309 Nr. 7a, Körperverletzung.']]),
    K('WS 23/24 · 20', 'Kanzleiangestellte S kommt um 22 Uhr auf dem Heimweg von einem privaten Treffen an der Kanzlei vorbei und stiehlt aus dem vergessenen Mantel des Mandanten M die Geldbörse. M verlangt Schadensersatz von Anwalt R.', 'Kann er das?', 3, [
      ['Ja, wenn S nicht sorgfältig ausgewählt oder überwacht wurde.', 'Falsch. § 831 verlangt Handeln in Ausführung der Verrichtung.'],
      ['Nein, S ist nur Erfüllungs-, nicht Verrichtungsgehilfin.', 'Falsch begründet. Sie ist weisungsgebunden, also beides.'],
      ['Ja, der Unternehmer haftet immer für vorsätzliche Taten seiner Angestellten.', 'Falsch („immer“).'],
      ['Nein, R haftet nicht dafür, dass S ihren Zugang nutzt, um einen Mandanten zu bestehlen.', 'Richtig. Sie handelte nur bei Gelegenheit, nicht in Erfüllung oder Ausführung ihrer Aufgaben.']]),
    K('SS 23 · 1', '', 'Welche Aussage ist richtig?', 1, [
      ['Das Abstraktionsprinzip trennt Verpflichtungsgeschäft und schuldrechtlichen Vertrag.', 'Falsch. Das ist dasselbe.'],
      ['Ein Kaufvertrag ist auch wirksam, wenn der Verkäufer nicht Eigentümer der Sache ist.', 'Richtig. Er verpflichtet nur.'],
      ['Mit dem notariellen Kaufvertrag ist der Käufer Eigentümer der Immobilie.', 'Falsch. Erst Auflassung und Eintragung.'],
      ['§ 929 S. 1 scheidet immer aus, wenn der Kaufvertrag unwirksam ist.', 'Falsch. Abstraktion.']]),
    K('SS 23 · 2', 'Der 6-jährige Anton, sehr reif, kauft allein im Fan-Shop ein Trikot für 42 €. Er sagt wahrheitsgemäß, die Eltern hätten es erlaubt, und zahlt mit Taschengeld.', 'Welche Aussage trifft zu?', 3, [
      ['Der Kaufvertrag ist wirksam.', 'Falsch. § 105 I.'],
      ['Der Kaufvertrag ist unwirksam, Anton ist aber Eigentümer geworden.', 'Falsch. Auch die Einigung über die Übereignung ist nichtig.'],
      ['Beide Geschäfte sind durch die Einwilligung wirksam.', 'Falsch. Einwilligung hilft nur bei beschränkter Geschäftsfähigkeit.'],
      ['Keiner der Verträge ist wirksam.', 'Richtig. Geschäftsunfähig, § 104 Nr. 1.']]),
    K('SS 23 · 3', 'V verkauft K am 02.01.2022 einen Golf und versichert auf Frage wider besseres Wissen Unfallfreiheit. Am 02.02.2022 erfährt K vom TÜV, dass es ein Unfallwagen ist. Am 03.08.2022 ficht K wegen arglistiger Täuschung an.', 'Die Anfechtung ist …', 0, [
      ['… wirksam.', 'Richtig. Frist 1 Jahr ab Entdeckung (§ 124).'],
      ['… unwirksam, kein Anfechtungsgrund.', 'Falsch. § 123 I.'],
      ['… unwirksam, weil nicht unverzüglich (§ 121).', 'Falsch. § 121 gilt für §§ 119, 120.'],
      ['… schwebend unwirksam.', 'Falsch.']]),
    K('SS 23 · 5', 'Hakan kauft im Baumarkt einen nur per App steuerbaren Roboter-Rasenmäher. Er ignoriert alle Update-Hinweise, auch den, dass die App nur mit Update weiter funktioniert. Als der Mäher auf einen Rosenbusch zusteuert, lässt er sich wegen des fehlenden Updates nicht stoppen.', 'Welche Ansprüche hat H?', 2, [
      ['Keine gegen B, weil der Mäher bei Gefahrübergang mangelfrei war.', 'Falsch begründet. Bei digitalen Elementen zählt auch die Aktualisierungspflicht danach (§ 475b IV).'],
      ['Schadensersatz gegen B, weil ein technisch erzwungenes Update einen Mangel darstellt.', 'Falsch. Siehe c.'],
      ['Schadensersatzansprüche gegen B sind ausgeschlossen, weil H die Updates nicht installiert hat.', 'Richtig. § 475b V.'],
      ['Jedenfalls keinen Anspruch gegen G, weil kein Vertrag besteht.', 'Falsch („jedenfalls“). Deliktische Ansprüche sind denkbar.']]),
    K('SS 23 · 6', 'Abwandlung: Schon die Installation der Steuerungs-App scheitert mit „Software im Moment nicht verfügbar“. H kann den Mäher nicht in Betrieb nehmen.', 'Wie ist die Rechtslage?', 2, [
      ['H kann den Vertrag nach § 327c II beenden.', 'Falsch. Ware mit digitalen Elementen, §§ 327 ff. gelten nicht (§ 327a III).'],
      ['Keine Ansprüche, weil kein Termin vereinbart war.', 'Falsch.'],
      ['Anspruch auf Nacherfüllung durch Bereitstellung der App.', 'Richtig. Sachmangel (§ 475b), §§ 437 Nr. 1, 439.'],
      ['H kann vom Vertrag zurücktreten.', 'Falsch. Erst nach erfolgloser Fristsetzung.']]),
    K('SS 23 · 10', 'Prokuristin P (einzelvertretungsberechtigt, von § 181 befreit) soll für das Sommerfest Rosen bis 225 € kaufen. Im Laden ihres Bruders gilt „kaufe 300, zahle 250“. Sie kauft im Namen der U 300 Rosen für 250 €.', 'Welche Aussage ist richtig?', 3, [
      ['Unwirksam, die Vertretungsmacht war der Höhe nach beschränkt.', 'Falsch. Die Beschränkung wirkt nach außen nicht (§ 50 I HGB).'],
      ['Unzulässiges Insichgeschäft.', 'Falsch. Der Bruder ist eine andere Person, und P war befreit.'],
      ['Die Prokura kann nur gemeinsam im Innen- und Außenverhältnis beschränkt werden.', 'Falsch. Nach außen gar nicht (außer Gesamt-/Filialprokura).'],
      ['Alle Antworten sind falsch.', 'Richtig.']]),
    K('SS 23 · 11', 'P parkt 6 Stunden vor der als „Ausfahrt“ gekennzeichneten Garage des F (unterstellt: Nötigung nach § 240 StGB). F muss zum Feuerwehreinsatz.', 'Welche Antwort ist richtig?', 0, [
      ['F kann die Taxikosten von 50 € als Schadensersatz verlangen.', 'Richtig. § 823 I und § 823 II i. V. m. § 240 StGB.'],
      ['Erst nach dem Versuch, über die Polizei den Halter zu finden.', 'Falsch. Im Einsatzfall nicht zumutbar, § 254 II ist gewahrt.'],
      ['F darf jederzeit ein Fenster einschlagen, um das Auto wegzurollen (§ 229).', 'Falsch („jederzeit“).'],
      ['Eine Schadensminderungspflicht gibt es hier nicht.', 'Falsch. Sie besteht immer (§ 254 II), F hat sie nur nicht verletzt.']]),
    K('SS 23 · 12', '', 'Bei der Übertragung von Eigentum an einem Grundstück im Zusammenhang mit einem Kaufvertrag …', 3, [
      ['… gilt § 929 mit Eintragung statt Übergabe.', 'Falsch. §§ 873, 925.'],
      ['… ist die Auflassung erforderlich, d. h. die notarielle Beurkundung des Kaufvertrages.', 'Falsch. Auflassung ist die dingliche Einigung.'],
      ['… ist die Beurkundung des Kaufvertrages dasselbe wie die der Auflassung.', 'Falsch. Zwei Geschäfte.'],
      ['… kann ein Formmangel des Kaufvertrages durch Auflassung und Eintragung geheilt werden.', 'Richtig. § 311b I 2.']]),
    K('SS 23 · 14', 'Handwerker G soll bei Frieda einen Boden verlegen. Wegen Zeitnot bittet er seinen Kumpel K, einen Gärtner, um Hilfe. K arbeitet trotz Anweisungen fehlerhaft, der Boden muss neu verlegt werden.', 'Welche Antwort ist richtig?', 1, [
      ['Keine Ansprüche, K ist als Fachfremder kein Erfüllungsgehilfe.', 'Falsch. Es zählt nur, dass G sich seiner bedient.'],
      ['F hat Ansprüche gegen G, der für das Verschulden des K einstehen muss.', 'Richtig. § 278.'],
      ['G hat keine Ansprüche gegen K, weil er keinen Fachfremden fragen darf.', 'Falsch.'],
      ['F hat auch Ansprüche gegen K als Gesamtschuldner.', 'Falsch. K ist nicht Vertragspartner der F.']]),
    K('SS 23 · 16', 'Martin repariert in der gemieteten Lagerhalle Autos, der Boden ist danach ölverschmiert. Er dachte, das sei erlaubt, weil kein Zweck vereinbart war. V wendet 6.000 € auf und will gegen die Kaution aufrechnen.', 'Wie ist die Rechtslage?', 2, [
      ['Keine Aufrechnung, keine gleichartigen Forderungen.', 'Falsch. Beide auf Geld gerichtet.'],
      ['Schadensersatz setzt eine erfolglose Frist zur Reinigung voraus.', 'Falsch. Schadensersatz neben der Leistung.'],
      ['V kann Schadensersatz wegen Verletzung einer Nebenpflicht verlangen.', 'Richtig. §§ 280 I, 241 II, 538.'],
      ['Kein Anspruch, weil der vertragsgemäße Gebrauch unbestimmt war.', 'Falsch. Nur die übliche Nutzung ist gedeckt.']]),
    K('SS 23 · 19', 'Konditorin L leiht sich das Fahrrad ihrer Freundin V (vor 5 Jahren bei Radlglück gekauft, gut gewartet). Die Gabel bricht wegen eines Konstruktionsfehlers, L bricht sich den Arm und muss 6 Wochen einen Ersatz-Konditor bezahlen.', 'Wie ist die Rechtslage?', 1, [
      ['V hat gegen L Anspruch auf Wiederbeschaffung.', 'Falsch. L trifft kein Verschulden.'],
      ['L hat gegen den Hersteller Anspruch auf Ersatz der Kosten für den Konditor.', 'Richtig. § 1 I ProdHaftG, Körperverletzung, Folgeschaden.'],
      ['V hat gegen Radlglück Anspruch auf ein neues Rad.', 'Falsch. Gewährleistung nach 5 Jahren verjährt.'],
      ['Keine Ansprüche, allgemeines Lebensrisiko.', 'Falsch.']]),
    K('SS 23 · 20', 'Rentner Robert setzt in einem handgeschriebenen Testament seinen Hund Hanno als Alleinerben ein. Er ist schwer krank.', 'Wie ist die Rechtslage?', 2, [
      ['Unwirksam, weil nicht notariell.', 'Falsch. § 2247.'],
      ['Wirksam, R muss einen gesetzlichen Vertreter für Hanno benennen.', 'Falsch.'],
      ['Hanno ist kein Rechtssubjekt und kann nicht Erbe sein.', 'Richtig. § 1923, § 90a.'],
      ['Schwere Krankheit führt immer zur Geschäftsunfähigkeit.', 'Falsch („immer“).']]),
    K('WS 22/23 · 2', 'Privatmann V verkauft privat an K einen 12 Jahre alten Gebrauchtwagen mit 102.000 km. Nach 2 Monaten fällt der durchgerostete Auspuff ab. V wusste nichts und hatte die Haftung ausgeschlossen.', 'Welche Aussage ist richtig?', 0, [
      ['Soweit der Auspuff ein Verschleißteil ist, liegt kein Mangel vor.', 'Richtig. Übliche Beschaffenheit bei Alter und Laufleistung (§ 434 III).'],
      ['Auch ein Privater kann die Haftung nicht wirksam ausschließen.', 'Falsch. Zwischen Privaten zulässig (§ 444).'],
      ['C2C kann die Haftung immer wirksam ausgeschlossen werden.', 'Falsch („immer“: Arglist, Garantie).'],
      ['K kann anfechten.', 'Falsch. Kein Anfechtungsgrund.']]),
    K('WS 22/23 · 3', 'Wie zuvor, aber V ist Gebrauchtwagenhändler, K Verbraucher.', 'Welche Aussage ist richtig?', 2, [
      ['V kann die Haftung für den Auspuff wirksam ausschließen.', 'Falsch. § 476 I.'],
      ['V hätte ohne weitere Hinweise eine negative Beschaffenheitsvereinbarung schließen können.', 'Falsch. § 476 I 2 verlangt Hinweis und gesonderte Vereinbarung.'],
      ['Ein vollumfänglicher Haftungsausschluss in seinen AGB wäre unwirksam.', 'Richtig. §§ 476, 309 Nr. 7.'],
      ['Angaben ins Blaue sind keine arglistige Täuschung.', 'Falsch. Sie sind es.']]),
    K('WS 22/23 · 4', 'Händler H verkauft e-Bikes mit Software von Hersteller S. Bei Käufer K zeigt die Software die Kilometer falsch an, Fahren geht. H kann die Software nicht ändern.', 'Welche Aussage ist richtig?', 3, [
      ['Es ist ein Vertrag über ein digitales Produkt.', 'Falsch. Ware mit digitalen Elementen.'],
      ['K muss sich an S wenden.', 'Falsch. Vertragspartner ist H.'],
      ['H muss das e-Bike bei K abholen.', 'Falsch. Eine Abholpflicht besteht nicht zwingend.'],
      ['K kann das e-Bike an H schicken, H muss einen Vorschuss auf die Kosten zahlen, die er zu tragen hat.', 'Richtig. §§ 439 II, 475 IV.']]),
    K('WS 22/23 · 5', 'Spezialfirma S baut in einer Villa die Hardware eines Infotainment-Systems ein, dann werden Wände und Decken aufwändig verschlossen. Wegen falscher Kabel von S kommt nur Lärm aus der Anlage.', 'Wie ist die Rechtslage?', 1, [
      ['S muss nur neue Kabel liefern.', 'Falsch. § 439 III.'],
      ['S muss das Öffnen und Verschließen der Wände samt Arbeiten bezahlen.', 'Richtig. Aus- und Einbaukosten, § 439 III.'],
      ['S kann verlangen, dass R sich an den Kabelhersteller wendet.', 'Falsch. Rückgriff ist Sache von S (§ 445a).'],
      ['R hat deliktische Ansprüche gegen S.', 'Falsch. Kein Rechtsgut über das Produkt hinaus verletzt.']]),
    K('WS 22/23 · 6', 'Die 16-jährige Karlotta erhält ein schriftliches Angebot für ein Smartphone für 400 €. Die Eltern stimmen schriftlich zu und geben ihr das Geld. Am Tag darauf widerruft H sein Angebot. K erklärt dennoch die Annahme.', 'Zu Recht?', 2, [
      ['Nein, das Angebot ist nicht lediglich vorteilhaft, und das Smartphone konnte wegen ihrer beschränkten Geschäftsfähigkeit nicht wirksam übergeben werden.', 'Falsch. Die Eltern haben eingewilligt (§ 107), und die Übereignung an K wäre ohnehin lediglich vorteilhaft.'],
      ['Nein, H hat sein Angebot wirksam widerrufen.', 'Falsch. Das Angebot war K schon zugegangen und bindet H (§ 145). Ein Widerruf wirkt nur, wenn er vorher oder gleichzeitig zugeht (§ 130 I 2).'],
      ['Es ist ein wirksamer Kaufvertrag geschlossen worden, K kann Übereignung verlangen.', 'Richtig. Bindendes Angebot, Annahme mit Einwilligung der Eltern.'],
      ['Bei einem Prospekt im Briefkasten wäre es genauso.', 'Falsch. Ein Prospekt ist nur invitatio ad offerendum.']], ['Angebot zugegangen: H ist gebunden (§ 145), der spätere Widerruf ist unwirksam (§ 130 I 2).', 'Annahme durch die 16-jährige K: nicht lediglich vorteilhaft, aber mit Einwilligung der Eltern wirksam (§ 107).', 'Kaufvertrag zustande gekommen, Anspruch aus § 433 I 1.']),
    K('WS 22/23 · 7', 'Brauerei B und Agrargenossenschaft A vereinbaren 2021 Gerstelieferungen für 3 Jahre zum Fixpreis. Ab 2022 steigen Dünger- und Treibstoffpreise erheblich, ohne Anpassung müsste A nachweislich Insolvenz anmelden. B erhält im Gegensatz zu A staatliche Hilfen.', 'Welche Aussage ist richtig?', 3, [
      ['A kann zurücktreten.', 'Falsch. Vorrang der Anpassung (§ 313 III).'],
      ['A kann uneingeschränkt Marktpreise verlangen.', 'Falsch („uneingeschränkt“).'],
      ['B kann uneingeschränkt Herabsetzung verlangen.', 'Falsch.'],
      ['A kann eine Vertragsanpassung verlangen.', 'Richtig. § 313 I, Unzumutbarkeit bei drohender Insolvenz.']]),
    K('WS 22/23 · 10', '', 'Welche Aussage ist zutreffend?', 0, [
      ['Ob ein „lediglich rechtlicher Vorteil“ vorliegt, ist ausschließlich rechtlich zu beurteilen, auch wenn die wirtschaftlichen Vorteile deutlich überwiegen.', 'Richtig.'],
      ['Auch bei lediglich rechtlichem Vorteil braucht es die Einwilligung der Eltern.', 'Falsch. § 107.'],
      ['Auch dann braucht es die Genehmigung.', 'Falsch.'],
      ['§ 107 gilt nur für das Verpflichtungsgeschäft.', 'Falsch. Auch für Verfügungen.']]),
    K('WS 22/23 · 11', 'Die 20-jährige Clara braucht ein Darlehen über 5.000 €. Ihr Vater erklärt dem Bankangestellten telefonisch, er bürge selbstverständlich. Die Bank zahlt aus, Clara kann nicht zurückzahlen.', 'Kann die Bank den Vater in Anspruch nehmen?', 2, [
      ['Ja, die Erklärung ist telefonisch zugegangen.', 'Falsch. Formmangel.'],
      ['Nein, Clara hätte annehmen müssen.', 'Falsch. Der Bürgschaftsvertrag wird zwischen Bürge und Gläubiger geschlossen.'],
      ['Nein, die Bürgschaftserklärung hätte schriftlich erfolgen müssen.', 'Richtig. §§ 766 S. 1, 125.'],
      ['Ja, als sittliche Pflicht.', 'Falsch.']]),
    K('WS 22/23 · 12', '', 'Welche Aussage ist richtig?', 0, [
      ['Die Schadensersatzpflicht nach § 122 setzt kein Verschulden voraus.', 'Richtig.'],
      ['Auch bei Täuschung oder Drohung besteht ein Anspruch aus § 122.', 'Falsch. § 122 nennt nur §§ 118–120.'],
      ['Der Irrtum über eine verkehrswesentliche Eigenschaft einer Person ist ein unbeachtlicher Motivirrtum.', 'Falsch. § 119 II.'],
      ['Die Anfechtungserklärung ist nicht empfangsbedürftig.', 'Falsch. § 143 I, Zugang nötig.']]),
    K('WS 22/23 · 15', 'Gebrauchtwagenhändler H verkauft Studentin S einen Pkw als unfallfrei. Er hatte einen schweren Unfallschaden, was H selbst nicht wusste. Ein vergleichbares Fahrzeug ist nicht zu beschaffen. S will zurücktreten.', 'Zu Recht?', 2, [
      ['Nein, S hätte eine Nachfrist setzen müssen.', 'Falsch. Nacherfüllung ist unmöglich, § 326 V.'],
      ['Nein, sie muss zuerst Nacherfüllung verlangen.', 'Falsch. Unmöglich.'],
      ['Ja, die Rücktrittsvoraussetzungen liegen vor, der Kaufpreis ist nach § 346 I zurückzugewähren.', 'Richtig.'],
      ['Nein, H trifft kein Verschulden.', 'Falsch. Rücktritt ist verschuldensunabhängig.']]),
    K('WS 22/23 · 16', '', 'Welche Aussage trifft zu?', 2, [
      ['Auch im stationären Handel besteht grundsätzlich ein Widerrufsrecht.', 'Falsch. Nur Fernabsatz und außerhalb von Geschäftsräumen.'],
      ['Die Widerrufsfrist beginnt immer mit Vertragsschluss.', 'Falsch. Beim Warenkauf mit Erhalt.'],
      ['Fehlt eine ordnungsgemäße Belehrung, beginnt die Frist zunächst nicht.', 'Richtig. § 356 III.'],
      ['Fällt der Fristbeginn auf einen Sonntag, beginnt sie am Montag.', 'Falsch. § 193 betrifft nur das Ende.']]),
    K('WS 22/23 · 19', 'Rudolf hat am Hochzeitstag unaufschiebbare Termine im Ausland. Er bittet seinen Freund Dieter, ihn bei der Trauung zu vertreten.', 'D kann R bei der standesamtlichen Eheschließung wirksam vertreten …', 2, [
      ['… nur mit notarieller Vollmacht.', 'Falsch.'],
      ['… nur mit Einwilligung der Braut.', 'Falsch.'],
      ['… überhaupt nicht.', 'Richtig. § 1311 S. 1, höchstpersönlich.'],
      ['… nur mit Einwilligung des Standesbeamten.', 'Falsch.']]),
    K('WS 18/19 · 1', '', 'Welche Aussage zur Anfechtung ist richtig?', 2, [
      ['Die Anfechtung setzt einen unverschuldeten Irrtum voraus.', 'Falsch. Auch fahrlässige Irrtümer berechtigen.'],
      ['Schadensersatz schuldet der Anfechtende nur, wenn er den Schaden irrtümlich verursacht hat.', 'Falsch.'],
      ['Bei einer Anfechtung nach §§ 119, 120 ist grundsätzlich das negative Interesse zu ersetzen.', 'Richtig. § 122.'],
      ['Das positive Interesse kommt grundsätzlich nicht in Betracht.', 'Falsch formuliert. Es ist die Obergrenze.']]),
    K('WS 18/19 · 2', 'Inhaber I beauftragt seinen 17-jährigen Azubi A, für I eine Festplatte zu kaufen. A kauft bei G mit den Worten „die Rechnung geht an I“. I will die Festplatte nicht mehr.', 'Welche Aussage ist richtig?', 0, [
      ['Der Kaufvertrag ist zwischen I und G zustande gekommen, A hat die Offenkundigkeit gewahrt.', 'Richtig. §§ 164 I, 165.'],
      ['Wegen der Minderjährigkeit des A schwebend unwirksam.', 'Falsch. § 165.'],
      ['Nur wenn I genehmigt.', 'Falsch. A hatte Vertretungsmacht.'],
      ['Nur wenn die Eltern des A genehmigen.', 'Falsch.']]),
    K('WS 18/19 · 5', 'Die gehbehinderte Tante T erteilt Neffe N eine unbeschränkte Kontovollmacht und bittet ihn, 500 € abzuheben. N hebt 1.000 € ab und behält 500 €.', 'Welche Aussage ist richtig?', 2, [
      ['N hat ohne Vertretungsmacht gehandelt.', 'Falsch. Im Außenverhältnis unbeschränkt.'],
      ['Die Bank durfte nicht 1.000 € auszahlen.', 'Falsch.'],
      ['N konnte wirksam 1.000 € abheben, muss aber alles der Tante geben.', 'Richtig. § 667.'],
      ['Für die zweiten 500 € gibt es keine Anspruchsgrundlage.', 'Falsch. § 667, § 280.']]),
    K('WS 18/19 · 7', 'B kauft zwei Biathlon-Gewehre: ein Standardmodell (72 Stück auf Lager) und eine Sonderanfertigung. Bei beiden funktioniert das Visier am Tag nach dem Kauf nicht. Vereinbart war dazu nichts.', 'Welche Aussage ist richtig?', 1, [
      ['Ohne Vereinbarung keine Beschaffenheitsabweichung.', 'Falsch. Objektive Anforderungen.'],
      ['Ein Mangel liegt auch vor, wenn sich die Sache nicht für die gewöhnliche Verwendung eignet oder nicht die übliche Beschaffenheit hat.', 'Richtig. § 434 III.'],
      ['Es ist nicht davon auszugehen, dass der Mangel schon bei Gefahrübergang vorlag.', 'Falsch. § 477.'],
      ['Wegen Konkretisierung schuldet F beim Standardgewehr keine Neulieferung.', 'Falsch. Konkretisierung schützt nicht vor Gewährleistung.']]),
    K('WS 18/19 · 8', 'Wie zuvor, zum Sondermodell.', 'Welche Aussage ist richtig?', 2, [
      ['B hat keinen Anspruch auf Mangelbeseitigung.', 'Falsch.'],
      ['B muss beweisen, dass der Mangel bei Übergabe bestand.', 'Falsch. § 477.'],
      ['F ist von der Nacherfüllung befreit, wenn die Reparatur nicht möglich ist.', 'Richtig. Stückschuld, Neulieferung kommt bei der Sonderanfertigung nicht in Betracht (§ 275 I).'],
      ['F ist nicht schadensersatzpflichtig.', 'Falsch. Pauschal nicht feststellbar.']]),
    K('WS 18/19 · 9', 'O bestellt für seine Feier am 30.01. ein Festzelt (2.000 €, rechtzeitig aufgebaut und bezahlt) und bei Caterer C ein Buffet für 15.000 €, „unbedingt rechtzeitig“, sofort bezahlt. C kommt zu spät von einer Kochsendung zurück und liefert nicht. O muss im Lokal 16.000 € für ein gleichwertiges Buffet zahlen.', 'Welche Aussage ist richtig?', 1, [
      ['Mit Verstreichen der Leistungszeit wurde die Leistung nicht unmöglich.', 'Falsch. Absolutes Fixgeschäft.'],
      ['O kann die 15.000 € zurückverlangen.', 'Richtig. §§ 326 I, IV, 346.'],
      ['O kann 16.000 € für das Ersatzcatering verlangen.', 'Falsch. Schaden ist nur die Differenz von 1.000 €.'],
      ['Für das Zelt keinen Anspruch, kein Schaden.', 'Falsch. Aufwendungsersatz § 284.']]),
    K('WS 18/19 · 10', 'Wie zuvor.', 'Welche Aussage ist richtig?', 3, [
      ['Hat der Sender die Verzögerung verschuldet, muss C die 15.000 € nicht zurückzahlen.', 'Falsch. Die Rückzahlung ist verschuldensunabhängig, und das Risiko liegt in C’s Sphäre.'],
      ['O kann von Z die 2.000 € zurückverlangen.', 'Falsch. Z hat ordnungsgemäß geleistet.'],
      ['Bei unverschuldetem Unfall des C keine Rückzahlung der 15.000 €.', 'Falsch. § 326 I, IV gelten ohne Verschulden.'],
      ['Bei unverschuldetem Unfall des C kein Anspruch auf die 2.000 € für das Zelt.', 'Richtig. § 284 setzt Vertretenmüssen voraus.']]),
    K('WS 18/19 · 12', 'Kfz-Meister M lässt den Praktikanten P, der seit einer Woche da ist und noch nie Reifen gewechselt hat (was M weiß), eigenständig Antons Winterreifen aufziehen. Beim Wegfahren fällt ein Rad ab.', 'Welche Aussage ist richtig?', 2, [
      ['P muss auch bei grober Fahrlässigkeit nicht geradestehen.', 'Falsch. § 823 I.'],
      ['P ist Verrichtungs-, aber kein Erfüllungsgehilfe.', 'Falsch. Er ist beides.'],
      ['M muss für das Handeln des P einstehen.', 'Richtig. §§ 280 I, 278.'],
      ['M ist frei, weil er nicht selbst gehandelt hat.', 'Falsch.']]),
    K('WS 18/19 · 16', 'Vitus soll Katharina eine Einbauküche am 15.2. in ihre Wohnung liefern und dort einbauen.', 'Welche Aussage ist richtig?', 1, [
      ['Sie haben eine Schickschuld vereinbart.', 'Falsch. Er schuldet mehr als die Übergabe an einen Transporteur.'],
      ['Sie haben eine Bringschuld vereinbart.', 'Richtig. Der Einbau beim Gläubiger ist starkes Indiz.'],
      ['Bei der Bringschuld fallen Leistungs- und Erfolgsort auseinander.', 'Falsch. Das ist die Schickschuld.'],
      ['Die Bringschuld erkennt man daran, dass der Verkäufer die Versandkosten trägt.', 'Falsch. § 269 III.']]),
    K('WS 18/19 · 19', 'Schreiner S bestellt Holz zum 2.1. Erst am 1.8. setzt er eine Frist und verlangt 5.600 € Lehrlingsgehalt für 2.1. bis 1.8., der Azubi sei nur für dieses Holz eingeplant gewesen. Am 4.8. wird geliefert.', 'Welche Aussage ist richtig?', 0, [
      ['S bekommt den Schadensersatz nicht in voller Höhe.', 'Richtig. § 254 II, er hätte den Schaden durch früheres Handeln oder anderen Einsatz mindern können.'],
      ['Die c.i.c. gibt das positive Interesse.', 'Falsch. Negatives Interesse.'],
      ['Nach §§ 280 ff. wird allgemein der Vertrauensschaden ersetzt.', 'Falsch. Grundsätzlich das Erfüllungsinteresse.'],
      ['Ohne Vertretenmüssen ist Schadensersatz generell ausgeschlossen.', 'Falsch. Gefährdungshaftung.']]),
    K('WS 18/19 · 22', 'Paul bittet Züchter Zirno, die gekaufte Stute erst am 15.1. zu liefern. Zirno steht pünktlich da, Paul ist nicht da. Auf dem Heimweg verunglückt Zirno leicht fahrlässig, die Stute stirbt.', 'Welche Aussage ist richtig?', 1, [
      ['Zirno muss eine andere Stute anbieten.', 'Falsch. Stückschuld, und Paul ist im Annahmeverzug.'],
      ['Paul muss die Stute bezahlen.', 'Richtig. Annahmeverzug, Zirno haftet nur für Vorsatz und grobe Fahrlässigkeit (§ 300 I), § 326 II.'],
      ['Weil Paul den Stall unverschuldet nicht fertig hatte, ging die Gefahr nicht über.', 'Falsch. Annahmeverzug ist verschuldensunabhängig.'],
      ['Hätte Zirno schon am 14.1. angeboten, müsste Paul ebenfalls zahlen.', 'Falsch. Ein verfrühtes Angebot begründet keinen Annahmeverzug, die Vereinbarung geht § 271 II vor.']]),
    K('WS 18/19 · 23', '', 'Welche Aussage zum Bereicherungsrecht ist richtig?', 0, [
      ['Wer ohne Rechtsgrund eine Sache erlangt, muss auch den Ersatz für die zerstörte Sache herausgeben.', 'Richtig. § 818 I (Surrogat).'],
      ['Wer die Sache nicht mehr besitzt, ist stets befreit.', 'Falsch. §§ 816, 818 II.'],
      ['Ohne Verschulden des Bereicherten kein Anspruch.', 'Falsch. Verschuldensunabhängig.'],
      ['Der Anspruch ist nicht ausgeschlossen, wenn der Leistende seine Nichtschuld kannte.', 'Falsch. § 814.']]),
    K('SS 18 · 1', 'Karl kauft beim unabhängigen Händler Victor einen neuen VW Diesel. Wegen der Abgas-Manipulation des Herstellers, von der Victor nichts wusste, gilt später ein Fahrverbot. Karl muss teuer Taxi fahren.', 'Welche Aussage ist richtig?', 3, [
      ['Mangels Kenntnis haftet Victor nicht aus Gewährleistung.', 'Falsch. Gewährleistung ist verschuldensunabhängig.'],
      ['Karl hat einen Schadensersatzanspruch gegen Victor.', 'Falsch. Victor hat nichts zu vertreten, der Hersteller ist nicht sein Erfüllungsgehilfe.'],
      ['Karl hat einen Nachbesserungsanspruch gegen VW.', 'Falsch. Kein Kaufvertrag mit VW.'],
      ['Karl kann von Victor Beseitigung des Mangels verlangen, wenn nicht Unmöglichkeit eingreift.', 'Richtig. §§ 437 Nr. 1, 439, 275.']]),
    K('SS 18 · 2', 'Victoria inseriert einen Schaukelstuhl für 150 € Festpreis. Katja fragt, ob sie ihn am Sonntag ansehen kann. Vor Ort sieht sie Kratzer und sagt: „Für 100 € kommen wir aber trotzdem ins Geschäft.“ Victoria lehnt ab.', 'Wie ist die Rechtslage?', 0, [
      ['Ein Kaufvertrag ist mangels Einigung nicht zustande gekommen.', 'Richtig. Inserat invitatio, Katjas Angebot über 100 € wurde abgelehnt.'],
      ['Katja kann wegen Eigenschaftsirrtums anfechten.', 'Falsch. Es gibt keinen Vertrag.'],
      ['Katja hat einen Nacherfüllungsanspruch.', 'Falsch.'],
      ['Katja kann auf 100 € mindern.', 'Falsch.']]),
    K('SS 18 · 5', 'Kurt kauft am Mittwoch einen Neuwagen. In der Nacht beschädigt ein Marder auf dem Hof der Händlerin den Motorraum. Auf dem Heimweg hat Kurt eine Panne.', 'Wie ist die Rechtslage?', 1, [
      ['Gewährleistung nur bei nachweisbarem Verschulden.', 'Falsch.'],
      ['Kurt kann Nachbesserung verlangen.', 'Richtig. Mangel bei Gefahrübergang (Übergabe), § 439.'],
      ['Kurt kann sofort mindern.', 'Falsch. Vorrang der Nacherfüllung.'],
      ['Victoria kann die Nachbesserung unter keinen Umständen ablehnen.', 'Falsch. § 439 IV.']]),
    K('SS 18 · 9', 'Bei einer Auktion hebt Kassandra die Hand und meint 110 €. Nach den bekannten Regeln gilt das als 120 €, sie erhält den Zuschlag. Sie will nicht zahlen. Die Verkäuferin bietet ihr die Uhr für 110 € an.', 'Welche Aussage ist richtig?', 3, [
      ['Kassandra hatte keinen Rechtsbindungswillen.', 'Falsch. Sie wollte bieten.'],
      ['Die Anfechtung ist ausgeschlossen, weil der Vertrag verbindlich ist.', 'Falsch. Gerade verbindliche Verträge werden angefochten.'],
      ['Kassandra muss 120 € zahlen.', 'Falsch. Sie könnte anfechten.'],
      ['Kassandra muss die Uhr für 110 € abnehmen (§ 242).', 'Richtig. Wer anficht, muss sich am Gewollten festhalten lassen.']]),
    K('SS 18 · 10', 'Großmutter Martina ist noch draußen am Einkaufswagen, als ihr sechsjähriger Enkel im Drogeriemarkt eine Parfumflasche fallen lässt. Ein Schild sagt: „Eltern haften für ihre Kinder.“', 'Wie ist die Rechtslage?', 3, [
      ['Durch Emils Verhalten ist ein Rechtsgeschäft mit Martina entstanden.', 'Falsch.'],
      ['Emil haftet selbst.', 'Falsch. § 828 I.'],
      ['Emil haftet nur bei Einsichtsfähigkeit.', 'Falsch. Das gilt erst ab 7 (§ 828 III).'],
      ['Martina haftet nur, wenn sie ihre Aufsichtspflicht verletzt hat.', 'Richtig. § 832, das Schild ändert nichts.']]),
    K('SS 18 · 13', 'Kristin braucht 1.500 Sonderanfertigungs-Schrauben bis 13.8. und weist auf eine eigene Vertragsstrafe bei Verspätung hin. Der Lieferant liefert erst am 26.8., die Vertragsstrafe wird fällig.', 'Wie ist die Rechtslage?', 1, [
      ['Ludwig haftet wegen der inter-partes-Wirkung nicht.', 'Falsch. Es geht um Kristins eigenen Schaden.'],
      ['Die Vertragsstrafe ist ein nicht behebbarer Schaden aus §§ 280 I, II, 286.', 'Richtig. Verzögerungsschaden.'],
      ['Es ist ein behebbarer Schaden nach §§ 280 I, III, 281.', 'Falsch. Die spätere Lieferung beseitigt ihn nicht.'],
      ['Nicht behebbare Schäden brauchen eine Frist zur Nacherfüllung.', 'Falsch.']]),
    K('SS 18 · 14', '', 'Welche Aussage zur Unmöglichkeit ist richtig?', 0, [
      ['§ 275 regelt anfängliche und nachträgliche, subjektive und objektive Unmöglichkeit.', 'Richtig.'],
      ['Bei der Gattungsschuld ist Unmöglichkeit ausgeschlossen.', 'Falsch. Wenn die ganze Gattung untergeht oder nach Konkretisierung.'],
      ['Bei anfänglicher Unmöglichkeit kommt kein wirksamer Vertrag zustande.', 'Falsch. § 311a I.'],
      ['Bei nachträglicher Unmöglichkeit wird der Schuldner nur frei, wenn er sie nicht zu vertreten hat.', 'Falsch. Befreiung immer, Vertretenmüssen spielt nur für Schadensersatz eine Rolle.']])
  ],
  pq: [
    { q: 'Grenzen Sie digitale Produkte und Waren mit digitalen Elementen ab und nennen Sie die jeweils anwendbaren Vorschriften.', a: 'Digitale Produkte sind digitale Inhalte (Software, Apps, E-Books) und digitale Dienstleistungen (Cloud, Streaming, soziale Netzwerke), § 327 I, II BGB. Für Verbraucherverträge über sie gelten §§ 327 ff. mit eigenen Rechten (Bereitstellung § 327c, Mangel § 327e ff., Vertragsbeendigung § 327m). Waren mit digitalen Elementen sind Sachen, die ihre Funktion ohne das digitale Produkt nicht erfüllen können (§ 327a III), z. B. ein nur per App steuerbarer Rasenmäher. Für sie gilt Kaufrecht, ergänzt durch §§ 475b ff., insbesondere die Aktualisierungspflicht. Ist das digitale Element nicht funktionsnotwendig, liegt ein Paketvertrag vor (§ 327a I).' },
    { q: 'Was unterscheidet § 278 von § 831 BGB? Nennen Sie je ein Beispiel aus den Altklausuren.', a: '§ 278 ist eine Zurechnungsnorm innerhalb eines bestehenden Schuldverhältnisses. Der Schuldner haftet ohne Entlastungsmöglichkeit für das Verschulden seines Gehilfen, Weisungsgebundenheit ist nicht nötig (Gärtner hilft beim Bodenverlegen). § 831 ist eine eigene deliktische Anspruchsgrundlage. Sie setzt einen weisungsabhängigen Gehilfen voraus, der in Ausführung der Verrichtung widerrechtlich schädigt, und der Geschäftsherr kann sich entlasten (Praktikant wechselt Reifen: Entlastung scheitert, weil der Meister die Unerfahrenheit kannte). Bei Handlungen nur bei Gelegenheit (Diebstahl um 22 Uhr) greift keine der beiden.' },
    { q: 'Erklären Sie Weidens Kontrollfrage zur Abgrenzung von Schadensersatz neben und statt der Leistung.', a: 'Man fragt, ob der geltend gemachte Schaden bei einer hypothetisch rechtzeitigen (Nach-)Erfüllung entfallen würde. Wenn nein, ist der Schaden nicht behebbar, und es gibt Schadensersatz neben der Leistung nach § 280 I, bei Verzögerung über §§ 280 II, 286. Beispiel: Vertragsstrafe, Lehrlingsgehalt in der Wartezeit. Wenn ja, ist er behebbar, und es gibt Schadensersatz statt der Leistung nach §§ 280 I, III, 281, grundsätzlich erst nach erfolgloser Fristsetzung. Beispiel: Mehrkosten des Deckungskaufs.' },
    { q: 'Wann wirkt die Beschränkung einer Vertretungsmacht gegenüber Dritten?', a: 'Bei der Prokura grundsätzlich nie (§ 50 I HGB), zulässig sind nur Gesamt- und Filialprokura. Bei der Handlungsvollmacht nur, wenn der Dritte die Beschränkung kannte oder kennen musste (§ 54 III HGB). Bei der BGB-Vollmacht wirkt sie, wie sie erteilt ist. Interne Weisungen (Auftrag) betreffen dagegen nur das Innenverhältnis: Überschreitet der Vertreter sie, ist das Geschäft wirksam, er haftet aber intern. Ausnahme ist der evidente Missbrauch oder die Kollusion.' },
    { q: 'Ein Gebrauchtwagenhändler will gegenüber einem Verbraucher möglichst wenig haften. Was ist erlaubt?', a: 'Die Mängelrechte kann er vor Mitteilung eines Mangels nicht ausschließen (§ 476 I 1). Möglich ist eine negative Beschaffenheitsvereinbarung, wenn der Verbraucher vor Vertragsschluss eigens über die konkrete Abweichung informiert wird und sie ausdrücklich und gesondert vereinbart wird (§ 476 I 2). Die Verjährung kann bei gebrauchten Sachen unter denselben Voraussetzungen auf ein Jahr verkürzt werden (§ 476 II). Schadensersatz kann er beschränken, aber in AGB nicht für Körperschäden oder grobes Verschulden (§§ 476 III, 309 Nr. 7). Normaler Verschleiß ist ohnehin kein Mangel. Behauptungen ins Blaue sind Arglist und machen jeden Ausschluss unwirksam (§ 444).' }
  ],
  cards: [
    ['Klausurformat Prof. Weiden?', '20 MC-Aufgaben a–d, genau eine richtig, 60 Minuten, kein Abzug, bestanden ab 50 %. Nur BGB (dtv).'],
    ['§ 165 BGB?', 'Der Vertreter muss nur beschränkt geschäftsfähig sein.'],
    ['§ 181 BGB: Folge eines Verstoßes?', 'Schwebend unwirksam (analog § 177), nicht nichtig. Ausnahmen: Gestattung, Erfüllung einer Verbindlichkeit, lediglich rechtlicher Vorteil.'],
    ['§ 50 I HGB?', 'Eine Beschränkung der Prokura ist Dritten gegenüber unwirksam.'],
    ['Eheschließung durch Vertreter?', 'Unmöglich, § 1311 S. 1 BGB.'],
    ['Kann ein Hund erben?', 'Nein, kein Rechtssubjekt. Lösung über Auflage (§ 1940).'],
    ['§ 254 II BGB?', 'Schadensminderungspflicht: warnen, abwenden, mindern. Folge: Kürzung bis auf null.'],
    ['§ 475 IV BGB?', 'Verbraucher kann für Kosten der Nacherfüllung (z. B. Transport) Vorschuss verlangen.'],
    ['§ 475e III BGB?', 'Zeigt sich der Mangel in der Verjährungsfrist, verjährt er frühestens 4 Monate danach.'],
    ['§ 327c BGB?', 'Digitales Produkt nicht bereitgestellt: Aufforderung, dann Vertragsbeendigung. Gilt nicht für Waren mit digitalen Elementen.'],
    ['§ 475b V BGB?', 'Keine Haftung für Mängel, die allein auf einem nicht installierten, bereitgestellten Update beruhen.'],
    ['§ 946 BGB?', 'Bewegliche Sache wird wesentlicher Bestandteil eines Grundstücks: Grundstückseigentümer wird Eigentümer.'],
    ['§ 488 III 3 BGB?', 'Vorzeitige Rückzahlung ohne Kündigung nur beim zinslosen Darlehen.'],
    ['Angaben ins Blaue?', 'Behauptungen ohne Grundlage = bedingter Vorsatz = Arglist.'],
    ['Verschleiß beim Gebrauchtwagen?', 'Kein Mangel, wenn bei Alter und Laufleistung üblich.'],
    ['Beschädigung der Mietsache: Frist nötig?', 'Nein. §§ 280 I, 241 II, Schadensersatz neben der Leistung. Verjährung 6 Monate (§ 548).'],
    ['Kaution und Schadensersatz aufrechenbar?', 'Ja, beide Geldforderungen (§ 387). Auch nach Verjährung, wenn vorher aufrechenbar (§ 215).'],
    ['§ 623 BGB?', 'Kündigung des Arbeitsverhältnisses nur schriftlich, elektronische Form ausgeschlossen.'],
    ['Bürgschaft telefonisch?', 'Unwirksam, § 766 S. 1. Ausnahme Kaufmann (§ 350 HGB).'],
    ['AG-Zuständigkeit (Folie vs. Gesetz)?', 'Ältere Folie: „künftig 8.000 €“. Gesetz seit 01.01.2026 und Folien WiSe 26/27: 10.000 €.']
  ]
};
window.dispatchEvent(new Event('wpr-data'));
})();
