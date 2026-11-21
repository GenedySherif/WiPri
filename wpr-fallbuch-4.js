(function () {
// Fallbuch Teil 4: VL 8–9 (Holztrattner, WiSe 2026/27) – AGB, Widerruf, Delikt, Sachenrecht, Bereicherung
const FB = (window.WPRK_FB = window.WPRK_FB || []);
const F = (id, vl, b, t, sv, q, hint, erg, weg, falle) => { if (!FB.some(x => x.id === id)) FB.push({ id, vl, b, t, sv, q, hint, erg, weg, falle }); };

// ───────── VL 8 ─────────
F('8-agb1', 'VL 8', 'AGB: Einbeziehung', 'AGB auf der Rückseite der Rechnung',
 'K lässt in der Werkstatt W ihr Fahrrad reparieren. Der Auftrag wird mündlich am Tresen erteilt, ein Hinweis auf AGB gibt es nicht. Bei der Abholung erhält K die Rechnung. Auf deren Rückseite steht: „Haftung für Schäden am Fahrzeug nur bei Vorsatz.“ Ein Mechaniker hat beim Reparieren fahrlässig den Carbonrahmen beschädigt (800 €).',
 'Kann sich W auf die Haftungsbeschränkung berufen?',
 'Wann müssen AGB spätestens ins Spiel gebracht werden?',
 'Nein. Die AGB wurden nicht Vertragsbestandteil, weil bei Vertragsschluss weder auf sie hingewiesen wurde noch K sie zur Kenntnis nehmen konnte (§ 305 II). Ein Abdruck auf der späteren Rechnung kommt zu spät. W haftet nach §§ 280 I, 241 II, 278.',
 ['Einbeziehung (§ 305 II): ausdrücklicher Hinweis bei Vertragsschluss (oder deutlich sichtbarer Aushang), Möglichkeit zumutbarer Kenntnisnahme, Einverständnis.',
  'Vertragsschluss war die mündliche Auftragserteilung am Tresen. Damals: kein Hinweis, kein Aushang.',
  'Die Rechnung kommt nach Vertragsschluss. Einseitig nachgeschobene Klauseln werden nicht Vertragsinhalt.',
  'Folge: Es gilt das Gesetz. Verletzung einer Schutzpflicht durch den Mechaniker (§ 278) → 800 € aus § 280 I. (Selbst bei Einbeziehung wäre die Klausel nach § 309 Nr. 7 b für grobe Fahrlässigkeit unwirksam.)'],
 'Viele prüfen sofort die Inhaltskontrolle. Davor steht die Frage, ob die AGB überhaupt gelten.');

F('8-agb2', 'VL 8', 'AGB: überraschende Klauseln', 'Die Kaffeemaschine mit Kapsel-Abo',
 'K kauft im Onlineshop des Herstellers H eine Kapselmaschine für 49 €. In den AGB, die vor der Bestellung per Häkchen bestätigt werden, heißt es unter Ziffer 14 „Sonstiges“: „Mit dem Kauf der Maschine schließt der Kunde ein Kapsel-Abonnement über 24 Monate zu je 29,90 € ab.“ Auf der Produktseite steht davon nichts. Nach drei Monaten verlangt H die Abo-Beiträge.',
 'Muss K die Abo-Beiträge zahlen?',
 'Rechnet ein Kunde beim Kauf einer Maschine mit einem zweijährigen Abo, das in den „Sonstiges“-Klauseln versteckt ist?',
 'Nein. Die Klausel ist überraschend und wird nicht Vertragsbestandteil (§ 305c I). Der Kaufvertrag über die Maschine bleibt wirksam (§ 306 I).',
 ['AGB (§ 305 I) (+), Einbeziehung durch Häkchen (§ 305 II) grundsätzlich (+).',
  '§ 305c I: Bestimmungen, die nach den Umständen, insbesondere nach dem äußeren Erscheinungsbild des Vertrags, so ungewöhnlich sind, dass der Vertragspartner mit ihnen nicht zu rechnen braucht, werden nicht Vertragsbestandteil.',
  'Ungewöhnlich: Ein Kaufvertrag über eine Maschine wird durch AGB zu einem zweijährigen Dauerschuldverhältnis (ca. 718 €), das 15-mal so viel kostet wie die Maschine. Überraschend: versteckt unter „Sonstiges“, nichts auf der Produktseite.',
  'Folge: Klausel ist nicht Vertragsinhalt, der Rest gilt (§ 306 I). Zusätzlich verstieße ein Entgelt ohne ausdrückliche Vereinbarung gegen § 312a III.'],
 'Wer nur auf die wirksame Einbeziehung (Häkchen) schaut, übersieht, dass einzelne Klauseln trotzdem draußen bleiben können.');

F('8-agb3', 'VL 8', 'AGB: Inhaltskontrolle', 'Das Fitnessstudio haftet „für nichts“',
 'In den AGB des Fitnessstudios F steht: „Die Haftung des Studios für Schäden aller Art ist ausgeschlossen.“ Wegen leicht fahrlässig unterlassener Wartung reißt ein Seilzug, das Mitglied M verletzt sich an der Schulter (Behandlungskosten 2.000 €) und seine Smartwatch geht kaputt (300 €). F meint, die Klausel sei zumindest für den Sachschaden wirksam.',
 'Kann F sich wenigstens beim Sachschaden auf die Klausel berufen?',
 'Prüfe § 309 Nr. 7 a. Was passiert mit einer teilweise unzulässigen Klausel?',
 'Nein. Die Klausel ist insgesamt unwirksam. Sie schließt auch die Haftung für Körperschäden aus (§ 309 Nr. 7 a), und eine geltungserhaltende Reduktion auf den zulässigen Teil gibt es nicht. F haftet für beide Schäden nach Gesetz (§ 306 II).',
 ['AGB (+), Einbeziehung (+).',
  '§ 309 Nr. 7 a: Unwirksam ist ein Ausschluss oder eine Begrenzung der Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen Pflichtverletzung beruhen. „Schäden aller Art“ erfasst das.',
  'Keine geltungserhaltende Reduktion: Die Klausel wird nicht auf das gerade noch Zulässige (z. B. leicht fahrlässige Sachschäden) zurückgeschnitten, sondern fällt ganz weg.',
  'Folge (§ 306 II): Es gilt das Gesetz → §§ 280 I, 241 II (Wartung = Schutzpflicht), Vertretenmüssen vermutet → 2.000 € + 300 €, dazu Schmerzensgeld (§ 253 II).'],
 'Der Gedanke „für Sachschäden hätte man die Haftung doch beschränken dürfen“ ist richtig. Weil die Klausel zu weit geht, fällt sie aber ganz.');

F('8-wr1', 'VL 8', 'Widerruf & Fristberechnung', 'Fristende am Wochenende',
 'Verbraucherin V bestellt online eine Jacke. Die Widerrufsbelehrung ist ordnungsgemäß. Das Paket wird ihr am Samstag, 4. Juli 2026 zugestellt. V schickt am Montag, 20. Juli 2026 eine E-Mail: „Ich widerrufe meinen Kauf.“ Der Händler meint, die 14 Tage seien am Samstag, 18. Juli abgelaufen.',
 'Hat V rechtzeitig widerrufen?',
 'Wann beginnt die Frist, wann endet sie, und was gilt, wenn das Ende auf ein Wochenende fällt?',
 'Ja. Die Frist endete nach §§ 187 I, 188 II rechnerisch am Samstag, 18. Juli. Weil das ein Samstag ist, verschiebt sich das Ende auf den nächsten Werktag (§ 193), also Montag, 20. Juli. Der Widerruf an diesem Tag ist rechtzeitig.',
 ['Widerrufsrecht im Fernabsatz (§§ 312c, 312g I, 355). Frist 14 Tage (§ 355 II 1), Beginn bei Warenkauf mit Erhalt der Ware (§ 356 II Nr. 1 a).',
  'Fristbeginn: Ereignisfrist, der Tag der Zustellung zählt nicht mit (§ 187 I).',
  'Fristende: mit Ablauf des Tages der zweiten Woche, der durch seine Benennung dem Ereignistag entspricht (§ 188 II) → Samstag, 18. Juli.',
  '§ 193: Fällt das Ende einer Frist für die Abgabe einer Willenserklärung auf einen Samstag, Sonntag oder Feiertag, tritt der nächste Werktag an die Stelle → Montag, 20. Juli.',
  'Rechtzeitige Absendung genügt (§ 355 I 5). E-Mail am 20. Juli → wirksam.'],
 'Der Händler rechnet richtig bis zum Samstag und hört dann auf. § 193 ist die häufigste Fristfalle in MC-Klausuren.');

F('8-wr2', 'VL 8', 'Widerruf & Fristberechnung', 'Widerruf nach zehn Monaten',
 'K bestellt im Onlineshop des U im Januar 2026 einen Saugroboter für 400 €. Eine Widerrufsbelehrung hat U nicht erteilt. K benutzt den Roboter täglich. Im November 2026 erklärt K den Widerruf und schickt den Roboter zurück. U verweigert die Rückzahlung, hilfsweise verlangt er 250 € Wertersatz für die Abnutzung.',
 'Ist der Widerruf wirksam? Schuldet K Wertersatz?',
 'Was passiert mit der Widerrufsfrist, wenn nicht belehrt wurde? Und unter welcher Voraussetzung gibt es Wertersatz?',
 'Ja. Ohne Belehrung erlischt das Widerrufsrecht erst 12 Monate und 14 Tage nach Fristbeginn (§ 356 III 2). K bekommt die 400 € zurück. Wertersatz schuldet er nicht, weil U ihn nicht über das Widerrufsrecht unterrichtet hat (§ 357a I Nr. 2).',
 ['Widerrufsrecht im Fernabsatz (§§ 312c, 312g I) (+).',
  'Fristbeginn setzt eine ordnungsgemäße Belehrung voraus (§ 356 III 1). Ohne Belehrung erlischt das Recht spätestens 12 Monate und 14 Tage nach dem regulären Fristbeginn (§ 356 III 2).',
  'Erhalt im Januar 2026 → Widerruf bis Februar 2027 möglich → November 2026 rechtzeitig.',
  'Rückabwicklung (§ 357): U muss die 400 € innerhalb von 14 Tagen erstatten.',
  'Wertersatz für Wertverlust (§ 357a I) nur, wenn der Umgang über die Prüfung hinausging und der Unternehmer den Verbraucher nach Art. 246a § 1 II 1 Nr. 1 EGBGB über sein Widerrufsrecht unterrichtet hat. Die Unterrichtung fehlt → kein Wertersatz.'],
 'Zehn Monate Nutzung und dann Geld zurück wirkt unfair. Das ist die gewollte Sanktion für die fehlende Belehrung.');

F('8-wr3', 'VL 8', 'Widerruf & Fristberechnung', 'Der Hoodie mit Namen',
 'K bestellt im Onlineshop einen Hoodie, auf den sein Name und seine Lieblingszahl gestickt werden. Zwei Tage nach Erhalt gefällt ihm die Farbe nicht mehr, er widerruft.',
 'Hat K ein Widerrufsrecht?',
 'Lies die Ausnahmen in § 312g II.',
 'Nein. Bei Waren, die nach Kundenspezifikation angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind, besteht kein Widerrufsrecht (§ 312g II Nr. 1).',
 ['Grundsätzlich Widerrufsrecht im Fernabsatz (§ 312g I).',
  '§ 312g II Nr. 1: Ausgenommen sind Verträge über Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse zugeschnitten sind.',
  'Ein Hoodie mit eingesticktem Namen ist nach Kundenwunsch personalisiert → kein Widerrufsrecht.',
  'Mängelrechte bleiben unberührt. Ein Farbe-gefällt-nicht ist aber kein Mangel.'],
 'Fernabsatz klingt automatisch nach 14 Tagen Widerruf. Die Ausnahmenliste des § 312g II wird oft vergessen.');

F('8-del1', 'VL 8', 'Delikt: § 823 I', 'Das durchtrennte Stromkabel',
 'Baggerfahrer B der Baufirma X beschädigt fahrlässig ein öffentliches Stromkabel. Der Strom fällt für sechs Stunden aus. Die Bäckerei P kann in dieser Zeit nicht backen und verliert 3.000 € Umsatz. In der Brüterei R sterben wegen des Ausfalls der Brutapparate 2.000 Hühnerküken in den Eiern (Wert 1.500 €). Beide verlangen Schadensersatz von X.',
 'Wer hat einen Anspruch aus § 823 I?',
 'Welches Rechtsgut ist bei P verletzt, welches bei R?',
 'Nur R. Bei R ist Eigentum verletzt (Substanzschaden an den Eiern), bei P liegt nur ein reiner Vermögensschaden vor, den § 823 I nicht schützt. Gegen X richtet sich der Anspruch über § 831 (Entlastung möglich), gegen B direkt aus § 823 I.',
 ['§ 823 I schützt Leben, Körper, Gesundheit, Freiheit, Eigentum und sonstige absolute Rechte, nicht das Vermögen als solches.',
  'P: Die Backöfen und Rohstoffe sind unversehrt. Der Umsatzausfall ist ein reiner Vermögensschaden → kein § 823 I. Das Kabel gehört dem Netzbetreiber, nicht P. (Recht am eingerichteten Gewerbebetrieb scheidet aus: kein betriebsbezogener Eingriff.)',
  'R: Die Eier wurden in ihrer Substanz zerstört → Eigentumsverletzung (+). Verschulden des B (Fahrlässigkeit) (+) → Anspruch gegen B aus § 823 I: 1.500 €.',
  'Gegen X: § 831 I 1, B ist Verrichtungsgehilfe. X kann sich aber nach § 831 I 2 entlasten (sorgfältige Auswahl und Überwachung).'],
 'Beide Betriebe wurden gleich getroffen, daher scheint eine gleiche Lösung naheliegend. Entscheidend ist aber, ob eine Sache beschädigt oder nur Geld verloren wurde.');

F('8-del2', 'VL 8', 'Delikt: § 823 II, § 826', 'Der Anlagebetrüger',
 'Finanzberater A überredet die Rentnerin R mit gefälschten Renditeprognosen, ihm 10.000 € für eine „sichere Anlage“ zu überweisen. Das Geld verwendet A für sich. Ein Vertrag zwischen R und A ist wegen eines Formfehlers nichtig, daher scheiden vertragliche Ansprüche aus. A meint, § 823 I schütze das Vermögen nicht.',
 'Hat R einen deliktischen Anspruch?',
 'Gibt es Deliktstatbestände, die auch das Vermögen schützen?',
 'Ja. Zwar nicht aus § 823 I, aber aus § 823 II i. V. m. § 263 StGB (Betrug als Schutzgesetz) und aus § 826 (vorsätzliche sittenwidrige Schädigung). R bekommt 10.000 €.',
 ['§ 823 I: Vermögen ist kein „sonstiges Recht“ → (−).',
  '§ 823 II: Wer gegen ein den Schutz eines anderen bezweckendes Gesetz verstößt. § 263 StGB schützt das Vermögen des Einzelnen → Schutzgesetz.',
  'Tatbestand des § 263 StGB: Täuschung (gefälschte Prognosen), Irrtum, Vermögensverfügung (Überweisung), Schaden, Vorsatz und Bereicherungsabsicht (+).',
  '§ 826: vorsätzliche Schädigung in einer gegen die guten Sitten verstoßenden Weise (+).',
  'Rechtsfolge: Ersatz des Vermögensschadens (§ 249) → 10.000 €.'],
 'A hat mit § 823 I recht. Delikt besteht aber aus mehr als einem Absatz.');

F('8-831', 'VL 8', 'Delikt: §§ 831–833', 'Der Lieferfahrer und der Passant',
 'Der Getränkehändler G hat seinen Lagerarbeiter F sorgfältig ausgewählt (zehn Jahre ohne Beanstandung) und kontrolliert ihn regelmäßig. Beim Ausladen vor dem Laden stellt F einen Getränkekasten unachtsam auf ein abgestelltes Fahrrad des Passanten P, das umkippt (Schaden 400 €). Zwischen P und G besteht kein Vertrag. P verlangt Ersatz von G.',
 'Haftet G?',
 'Zurechnung nach § 278 oder eigene Haftung nach § 831? Und was bedeutet § 831 I 2?',
 'Nein, nicht aus § 831. G kann sich entlasten, weil er F sorgfältig ausgewählt und überwacht hat (§ 831 I 2). § 278 scheidet mangels Schuldverhältnis aus. P muss sich an F halten (§ 823 I).',
 ['§ 278 setzt ein bestehendes Schuldverhältnis zwischen Geschädigtem und Geschäftsherrn voraus. P und G haben keinen Vertrag → § 278 (−).',
  '§ 831 I 1: F ist weisungsabhängiger Verrichtungsgehilfe, er hat in Ausführung der Verrichtung rechtswidrig das Eigentum des P verletzt.',
  '§ 831 I 2: Die Ersatzpflicht tritt nicht ein, wenn der Geschäftsherr bei Auswahl und Überwachung die erforderliche Sorgfalt beobachtet hat. G hat das dargelegt → Entlastung.',
  'F selbst haftet aus § 823 I (fahrlässige Eigentumsverletzung).'],
 'Arbeitgeber haftet für Arbeitnehmer stimmt im Vertrag (§ 278). Außerhalb eines Vertrags gibt es die Entlastungsmöglichkeit.');

F('8-833', 'VL 8', 'Delikt: §§ 831–833', 'Zwei Hunde, zwei Ergebnisse',
 'Der Schrotthändler S hält auf seinem Betriebsgelände einen Wachhund, die Familie F hält einen Labrador als Familienhund. Beide Tiere sind ordnungsgemäß angeleint und eingezäunt. Trotzdem beißen beide wegen eines unvorhersehbaren Zaundefekts je einen Passanten (Behandlungskosten jeweils 800 €). S und F weisen nach, dass sie bei der Beaufsichtigung alles richtig gemacht haben.',
 'Wer von beiden haftet?',
 'Lies § 833 S. 2. Für welche Tiere gibt es eine Entlastungsmöglichkeit?',
 'Familie F haftet ohne Verschulden (§ 833 S. 1, Gefährdungshaftung für Luxustiere). S kann sich entlasten, weil sein Wachhund seinem Erwerbsgewerbe dient und er die erforderliche Sorgfalt beachtet hat (§ 833 S. 2).',
 ['§ 833 S. 1: Wird durch ein Tier ein Mensch verletzt, ist der Halter zum Ersatz verpflichtet. Kein Verschulden nötig (Gefährdungshaftung). Typische Tiergefahr: Biss (+).',
  '§ 833 S. 2: Die Ersatzpflicht tritt nicht ein, wenn der Schaden durch ein Haustier verursacht wird, das dem Beruf, der Erwerbstätigkeit oder dem Unterhalt des Tierhalters zu dienen bestimmt ist (Nutztier), und der Halter die erforderliche Sorgfalt beobachtet hat.',
  'Wachhund des Schrotthändlers: dient dem Gewerbe → Nutztier → Entlastung (+).',
  'Labrador der Familie: Luxustier → keine Entlastung → Haftung auf 800 € und Schmerzensgeld (§ 253 II).'],
 'Gleiche Sorgfalt, gleicher Schaden, unterschiedliches Ergebnis. Der Zweck der Tierhaltung entscheidet.');

F('8-sch1', 'VL 8', 'Schadensumfang (§§ 249–254)', 'Fiktiv abrechnen',
 'S fährt K fahrlässig ins Heck. Ein Gutachten beziffert die Reparaturkosten auf 3.000 € netto zuzüglich 570 € Umsatzsteuer. K repariert den Wagen nicht, sondern fährt mit der Delle weiter. Er verlangt von S 3.570 €. S meint, ohne Reparatur müsse er gar nichts zahlen.',
 'Was kann K verlangen?',
 'Lies § 249 II. Muss das Geld für die Reparatur verwendet werden? Was gilt für die Umsatzsteuer?',
 'K kann 3.000 € verlangen, auch ohne Reparatur (fiktive Abrechnung). Die 570 € Umsatzsteuer bekommt er nicht, weil sie nicht tatsächlich angefallen ist (§ 249 II 2).',
 ['Anspruch aus § 823 I (bzw. § 7 StVG): Eigentumsverletzung (+), Verschulden (+).',
  '§ 249 II 1: Bei Sachbeschädigung kann der Geschädigte statt der Herstellung den dafür erforderlichen Geldbetrag verlangen. Er ist in der Verwendung frei (Dispositionsfreiheit) → fiktive Abrechnung erlaubt.',
  '§ 249 II 2: Der Geldbetrag schließt die Umsatzsteuer nur mit ein, wenn und soweit sie tatsächlich angefallen ist.',
  'Ohne Reparatur keine Umsatzsteuer → 3.000 €.'],
 'Beide liegen falsch: S schuldet auch ohne Reparatur, K bekommt aber nicht den Bruttobetrag.');

F('8-sch2', 'VL 8', 'Schadensumfang (§§ 249–254)', 'Schmerzensgeld aus dem Vertrag',
 'Friseurin F trägt bei der Kundin K ein Blondiermittel in falscher Konzentration auf. K erleidet schmerzhafte Verätzungen der Kopfhaut, die drei Wochen behandelt werden müssen. F meint, K könne höchstens die Behandlungskosten verlangen, Schmerzensgeld gebe es nur bei Unfällen und Straftaten.',
 'Kann K Schmerzensgeld verlangen?',
 'Lies § 253 II. Steht dort etwas von „Delikt“?',
 'Ja. Schmerzensgeld gibt es bei Verletzung von Körper oder Gesundheit unabhängig davon, ob der Anspruch aus Vertrag oder Delikt folgt (§ 253 II). K hat Ansprüche aus §§ 280 I, 241 II und aus § 823 I, jeweils mit Schmerzensgeld.',
 ['Vertrag: Werkvertrag (Haarbehandlung). Pflichtverletzung durch falsche Konzentration, Verschulden vermutet (§ 280 I 2) → §§ 280 I, 241 II (bzw. §§ 634 Nr. 4, 280).',
  'Delikt: Körper- und Gesundheitsverletzung, fahrlässig → § 823 I.',
  'Umfang: materieller Schaden (Behandlungskosten) nach § 249, immaterieller Schaden nur in den gesetzlich bestimmten Fällen (§ 253 I).',
  '§ 253 II: Ist wegen einer Verletzung des Körpers, der Gesundheit, der Freiheit oder der sexuellen Selbstbestimmung Schadensersatz zu leisten, kann auch wegen des Nichtvermögensschadens eine billige Entschädigung in Geld gefordert werden. Das gilt seit 2002 für alle Anspruchsgrundlagen.'],
 'Vor 2002 gab es Schmerzensgeld tatsächlich nur im Delikt. Wer altes Wissen hat, tappt in diese Falle.');

F('8-not', 'VL 8', 'Notwehr & Notstand', 'Der angreifende Hund',
 'Spaziergänger S wird vom freilaufenden Schäferhund des Nachbarn N angegriffen. Der Hund hat sich selbst losgerissen, N ist nicht in der Nähe. S kann sich nur retten, indem er den Hund mit einem Spazierstock so heftig schlägt, dass das Tier stirbt (Wert 1.500 €). N verlangt Schadensersatz und beruft sich darauf, dass ein Tier nicht „angreifen“ könne im Sinne der Notwehr.',
 'Muss S den Hund ersetzen?',
 'Notwehr setzt einen Angriff eines Menschen voraus. Welche Vorschrift passt, wenn die Gefahr von einer Sache bzw. einem Tier ausgeht?',
 'Nein. Zwar greift § 227 nicht, weil kein menschlicher Angriff vorliegt, aber S handelte im Defensivnotstand (§ 228). Er durfte das gefahrbringende Tier zur Abwehr beschädigen, der Schaden steht nicht außer Verhältnis zur Gefahr für seine Gesundheit. Die Tötung war gerechtfertigt.',
 ['Anspruch aus § 823 I: Eigentumsverletzung (Tier, § 90a) (+). Fraglich ist die Rechtswidrigkeit.',
  '§ 227 Notwehr: gegenwärtiger rechtswidriger Angriff eines Menschen. Ein Tier, das selbstständig angreift, ist kein menschlicher Angriff → (−). (Hätte N den Hund gehetzt, läge Notwehr gegen N vor.)',
  '§ 228 Defensivnotstand: Wer eine fremde Sache beschädigt, um eine durch sie drohende Gefahr von sich abzuwenden, handelt nicht widerrechtlich, wenn die Beschädigung zur Abwendung erforderlich ist und der Schaden nicht außer Verhältnis zur Gefahr steht. Tiere werden wie Sachen behandelt (§ 90a).',
  'Erforderlich (nur so konnte S sich retten) (+). Verhältnis: Gesundheit des S gegen 1.500 € → nicht außer Verhältnis → gerechtfertigt, kein Schadensersatz.'],
 'N hat mit § 227 recht, verliert aber trotzdem. Der Defensivnotstand ist die passende Norm.');

// ───────── VL 9 ─────────
F('9-dfk', 'VL 9', 'Deliktsfähigkeit', 'Das Kind und das parkende Auto',
 'Der 8-jährige Paul fährt mit seinem Fahrrad zu schnell auf dem Gehweg, verliert die Kontrolle und schrammt einen ordnungsgemäß parkenden Pkw (Schaden 900 €). Paul ist ein vernünftiges Kind und weiß, dass man vorsichtig fahren muss. Seine Eltern berufen sich auf § 828 II: Kinder unter zehn Jahren hafteten im Straßenverkehr nie.',
 'Haftet Paul?',
 'Welchen Zweck hat das Haftungsprivileg des § 828 II, und passt es auf ein parkendes Auto?',
 'Ja, Paul haftet grundsätzlich nach §§ 823 I, 828 III. Das Privileg des § 828 II gilt nach dem BGH nicht, wenn das Kind mit einem ordnungsgemäß parkenden Fahrzeug kollidiert, weil sich dann nicht die typische Überforderung durch den fließenden Verkehr verwirklicht.',
 ['§ 823 I: Eigentumsverletzung am Pkw (+).',
  'Deliktsfähigkeit: unter 7 Jahren nie (§ 828 I). Zwischen 7 und 10 Jahren keine Haftung für Unfälle mit Kraftfahrzeugen, Schienen- oder Schwebebahnen, außer bei Vorsatz (§ 828 II 1).',
  'Teleologische Reduktion (BGH VI ZR 335/03): Das Privileg soll Kinder vor der Überforderung durch die Geschwindigkeit und Unberechenbarkeit des motorisierten Verkehrs schützen. Bei einem ordnungsgemäß parkenden Auto verwirklicht sich diese Gefahr nicht → § 828 II greift nicht.',
  'Dann § 828 III: Haftung, wenn das Kind die zur Erkenntnis der Verantwortlichkeit erforderliche Einsicht hat. Paul weiß, dass man vorsichtig fahren muss → Einsicht (+). Verschulden (+) → Haftung. Daneben ggf. Haftung der Eltern aus § 832 bei Aufsichtspflichtverletzung.'],
 '„Unter zehn haftet nie im Straßenverkehr“ ist die Faustregel. Der BGH macht beim ruhenden Verkehr eine Ausnahme.');

F('9-prod', 'VL 9', 'Produzentenhaftung', 'Der explodierende E-Bike-Akku',
 'Der Akku des E-Bikes von P explodiert wegen eines Fabrikationsfehlers beim Laden in der privaten Garage. P erleidet Verbrennungen an der Hand (Behandlung 1.200 €), die Garagenwand und P’s privat genutzter Rasenmäher werden beschädigt (Sachschaden 3.000 €). Der Hersteller H weist nach, dass seine Qualitätskontrolle dem Stand der Technik entspricht und der Fehler ein nicht vermeidbarer „Ausreißer“ war.',
 'Was kann P von H verlangen?',
 'Vergleiche die verschuldensunabhängige Haftung nach dem ProdHaftG mit der Produzentenhaftung nach § 823 I. Wo gibt es eine Selbstbeteiligung, wo eine Entlastung?',
 'Nach dem ProdHaftG: 1.200 € Personenschaden und 2.500 € Sachschaden (3.000 € minus 500 € Selbstbeteiligung, § 11), zusätzlich Schmerzensgeld (§ 8 S. 2). Aus § 823 I bekäme P nichts zusätzlich, weil H sich für den Ausreißer entlasten kann.',
 ['§ 1 I ProdHaftG: Fehler des Produkts (Fabrikationsfehler) → Körperverletzung und Beschädigung einer anderen, privat genutzten Sache (Garage, Rasenmäher). Das E-Bike selbst ist nicht ersatzfähig.',
  'Kein Verschulden nötig. Ausreißer sind gerade erfasst: Der Ausschluss nach § 1 II Nr. 5 gilt nur für Entwicklungsrisiken, die nach dem Stand der Wissenschaft nicht erkennbar waren.',
  'Sachschaden: Selbstbeteiligung von 500 € (§ 11) → 2.500 €. Personenschaden voll, Schmerzensgeld nach § 8 S. 2.',
  '§ 823 I (Produzentenhaftung): Beweislastumkehr beim Verschulden. Bei einem trotz aller zumutbaren Kontrollen unvermeidbaren Ausreißer kann sich der Hersteller entlasten → hier (−). Ohne Entlastung bekäme P die vollen 3.000 €.'],
 'Wer nur § 823 I prüft, verneint wegen des Ausreißers jede Haftung. Das ProdHaftG greift trotzdem, nur mit Selbstbeteiligung.');

F('9-bes', 'VL 9', 'Besitz & Eigentum', 'Der Vermieter tauscht das Schloss',
 'Mieterin M ist mit zwei Monatsmieten im Rückstand. Während sie im Urlaub ist, lässt der Vermieter und Eigentümer V das Schloss der Wohnungstür austauschen, damit M „endlich zahlt oder auszieht“. M kommt zurück und steht vor verschlossener Tür. V meint, er sei schließlich Eigentümer.',
 'Kann M wieder in die Wohnung?',
 'Darf ein Eigentümer dem Besitzer die Sache eigenmächtig wegnehmen? Welcher Anspruch schützt den Besitz unabhängig vom Recht zum Besitz?',
 'Ja. V hat verbotene Eigenmacht begangen (§ 858 I). M kann die Wiedereinräumung des Besitzes verlangen (§ 861 I). Ob V kündigen und räumen lassen dürfte, spielt dafür keine Rolle (§ 863).',
 ['Besitz = tatsächliche Sachherrschaft (§ 854 I). M ist unmittelbare Besitzerin der Wohnung, auch während des Urlaubs (vorübergehende Verhinderung beendet den Besitz nicht, § 856 II).',
  'Verbotene Eigenmacht (§ 858 I): Wer dem Besitzer ohne dessen Willen den Besitz entzieht, handelt widerrechtlich, sofern nicht das Gesetz die Entziehung gestattet. Schlosstausch ohne Räumungstitel ist nicht gestattet.',
  '§ 861 I: Possessorischer Anspruch auf Wiedereinräumung des Besitzes.',
  '§ 863: Gegen den Besitzschutzanspruch kann der Störer ein Recht zum Besitz grundsätzlich nicht einwenden. Auch das Eigentum hilft V nicht. Er muss kündigen und auf Räumung klagen.'],
 'Eigentum ist das stärkere Recht, und deshalb scheint V im Recht. Der Besitzschutz verbietet aber gerade die Selbstjustiz des Eigentümers.');

F('9-930', 'VL 9', 'Übereignung & gutgläubiger Erwerb', 'Zweimal verkauft',
 'V verkauft K sein Rennrad für 1.500 €. Weil V am Wochenende noch ein Rennen fahren will, vereinbaren sie: „K wird sofort Eigentümer, V darf das Rad aber noch bis Montag benutzen.“ K zahlt. Am Samstag verkauft V das Rad für 1.800 € an den gutgläubigen D und übergibt es ihm. K verlangt das Rad von D heraus.',
 'Wer ist Eigentümer?',
 'Wie wurde K Eigentümer, und warum war V danach Nichtberechtigter? Was braucht D für einen gutgläubigen Erwerb?',
 'D ist Eigentümer. K war zunächst Eigentümer durch Besitzkonstitut (§§ 929 S. 1, 930). D hat das Rad aber vom Nichtberechtigten V gutgläubig erworben (§§ 929 S. 1, 932 I). Das Rad war K nicht abhandengekommen. K hat nur Ansprüche gegen V (z. B. § 816 I 1 auf die 1.800 €).',
 ['Erwerb des K: Einigung + Vereinbarung eines Besitzmittlungsverhältnisses (Leihe bis Montag) statt Übergabe → § 930. K wird Eigentümer und mittelbarer Besitzer.',
  'Veräußerung an D: Einigung und Übergabe (§ 929 S. 1), aber V ist nicht mehr Eigentümer → Nichtberechtigter.',
  'Gutgläubiger Erwerb (§ 932 I 1): D war gutgläubig, d. h. ihm war nicht bekannt und nicht grob fahrlässig unbekannt, dass das Rad nicht V gehört (§ 932 II).',
  'Kein Abhandenkommen (§ 935 I): K hat den unmittelbaren Besitz freiwillig bei V gelassen → gutgläubiger Erwerb möglich → D Eigentümer.',
  'Ausgleich: K kann von V den Erlös herausverlangen (§ 816 I 1) bzw. Schadensersatz aus §§ 280 I, 241 II wegen Verletzung des Leihvertrags.'],
 'K hat zuerst und bezahlt erworben, das klingt nach Vorrang. Das Gesetz schützt aber den Gutgläubigen, wenn der Eigentümer die Sache freiwillig aus der Hand gegeben hat.');

F('9-932', 'VL 9', 'Übereignung & gutgläubiger Erwerb', 'Gebrauchtwagen ohne Brief',
 'D bietet auf einem Parkplatz einen fast neuen BMW für 22.000 € an, Marktwert 30.000 €. Er übergibt K Fahrzeug und Schlüssel, die Zulassungsbescheinigung Teil II („Fahrzeugbrief“) könne er „nachreichen“. K zahlt bar. Der Wagen gehört der Leasinggesellschaft L, D war nur Leasingnehmer. L verlangt das Auto von K heraus.',
 'Ist K Eigentümer geworden?',
 'Lies § 932 II. Welche Rolle spielt die Zulassungsbescheinigung Teil II beim Gebrauchtwagenkauf?',
 'Nein. K war grob fahrlässig und damit nicht gutgläubig (§ 932 II). Wer einen Gebrauchtwagen ohne Zulassungsbescheinigung Teil II erwirbt, handelt nach ständiger Rechtsprechung des BGH regelmäßig grob fahrlässig. L bleibt Eigentümerin und kann nach § 985 herausverlangen.',
 ['Einigung und Übergabe (§ 929 S. 1) (+), D aber Nichtberechtigter (Leasingnehmer).',
  'Kein Abhandenkommen (§ 935): L hat D den Wagen freiwillig überlassen → gutgläubiger Erwerb grundsätzlich möglich.',
  'Guter Glaube (§ 932 II): ausgeschlossen bei Kenntnis oder grob fahrlässiger Unkenntnis. Beim Gebrauchtwagen muss sich der Erwerber mindestens die Zulassungsbescheinigung Teil II vorlegen lassen, um die Berechtigung des Veräußerers zu prüfen.',
  'Zusätzliche Verdachtsmomente: Parkplatzverkauf, Barzahlung, Preis weit unter Marktwert → grobe Fahrlässigkeit (+).',
  'L bleibt Eigentümerin, K hat kein Recht zum Besitz (§ 986) → Herausgabe (§ 985). K kann sich an D halten.'],
 'Kein Diebstahl, also gutgläubiger Erwerb möglich: Das ist richtig, scheitert hier aber am fehlenden guten Glauben.');

F('9-892', 'VL 9', 'Grundstücke', 'Der falsche Eigentümer im Grundbuch',
 'B steht im Grundbuch als Eigentümer eines Baugrundstücks, weil die Auflassung von A an B wegen Geisteskrankheit des A bei der Erklärung nichtig war (§ 105 I). Davon weiß niemand. B verkauft das Grundstück notariell an C, erklärt die Auflassung, C wird eingetragen. Der Betreuer des A verlangt das Grundstück von C zurück.',
 'Ist C Eigentümer geworden?',
 'Worauf darf man beim Grundstückserwerb vertrauen, wenn es keinen Besitz gibt, an den man anknüpfen könnte?',
 'Ja. C hat gutgläubig vom Nichtberechtigten erworben (§§ 873 I, 925, 892 I). Der Inhalt des Grundbuchs gilt zugunsten des redlichen Erwerbers als richtig. Ein Abhandenkommen wie bei § 935 gibt es im Grundstücksrecht nicht. A hat nur Ansprüche gegen B (§ 816 I 1).',
 ['Übertragung eines Grundstücks: Auflassung vor dem Notar (§§ 873 I, 925 I) und Eintragung → beides (+).',
  'B war nicht Eigentümer: Seine Eintragung beruht auf einer nichtigen Auflassung → Grundbuch unrichtig, Nichtberechtigter.',
  '§ 892 I 1: Zugunsten desjenigen, der ein Recht an einem Grundstück durch Rechtsgeschäft erwirbt, gilt der Inhalt des Grundbuchs als richtig, es sei denn, ein Widerspruch ist eingetragen oder die Unrichtigkeit ist dem Erwerber bekannt. Nur positive Kenntnis schadet, nicht grobe Fahrlässigkeit.',
  'C wusste nichts, kein Widerspruch eingetragen → C wird Eigentümer.',
  'Der Schutz Geschäftsunfähiger geht im Grundbuchrecht nicht so weit wie § 935 bei beweglichen Sachen. A bleibt auf Ansprüche gegen B verwiesen.'],
 'Der Schutz des Geschäftsunfähigen scheint Vorrang zu haben. Beim Grundstück schützt § 892 aber das Vertrauen in das Grundbuch, und dort schadet nur Kenntnis.');

F('9-ev', 'VL 9', 'Eigentumsvorbehalt & Abtretung', 'Der verlängerte Eigentumsvorbehalt',
 'Großhändler G liefert dem Elektrohändler H Fernseher unter verlängertem Eigentumsvorbehalt: H darf im ordentlichen Geschäftsgang weiterverkaufen und tritt dafür schon jetzt alle Kaufpreisforderungen aus dem Weiterverkauf an G ab. H verkauft einen Fernseher an Kundin K, übereignet ihn und kassiert von ihr 800 €. K weiß von der Abtretung nichts. H wird insolvent, ohne G bezahlt zu haben. G verlangt von K den Fernseher oder die 800 €.',
 'Ist K Eigentümerin? Muss sie noch einmal zahlen?',
 'Wer durfte über den Fernseher verfügen? Und was schützt einen Schuldner, der an den alten Gläubiger zahlt?',
 'K ist Eigentümerin und muss nicht noch einmal zahlen. H war zum Weiterverkauf ermächtigt (§ 185 I). Die Kaufpreisforderung stand zwar G zu (§ 398), K wurde aber durch die Zahlung an H frei, weil sie die Abtretung nicht kannte (§ 407 I).',
 ['Eigentum: G blieb bis zur Zahlung Eigentümer (§§ 929, 158 I, 449). H war jedoch ermächtigt, im ordentlichen Geschäftsgang im eigenen Namen über die Ware zu verfügen (§ 185 I) → K erwirbt wirksam vom Berechtigten (§ 929 S. 1). Auf guten Glauben kommt es nicht an.',
  'Forderung: Durch die Vorausabtretung (§ 398) ging die Kaufpreisforderung gegen K mit ihrer Entstehung auf G über.',
  'Schuldnerschutz (§ 407 I): Der neue Gläubiger muss eine Leistung, die der Schuldner nach der Abtretung an den bisherigen Gläubiger bewirkt, gegen sich gelten lassen, es sei denn, der Schuldner kannte die Abtretung. K kannte sie nicht → schuldbefreiende Zahlung.',
  'G bleibt auf einen Anspruch gegen H verwiesen (§ 816 II: Herausgabe des von K Erlangten), der in der Insolvenz wenig wert ist.'],
 'Weil G das Eigentum vorbehalten hat und ihm die Forderung zusteht, scheint K doppelt zu haften. Ermächtigung und § 407 schützen sie gleich zweimal.');

F('9-abtr', 'VL 9', 'Eigentumsvorbehalt & Abtretung', 'Das vertragliche Abtretungsverbot',
 'Die Maschinenbau M-GmbH liefert an die Autozulieferer A-AG. Die AGB der A enthalten ein Abtretungsverbot: „Forderungen gegen uns dürfen nicht abgetreten werden.“ M tritt ihre Kaufpreisforderung über 50.000 € trotzdem an die Factoring-Bank F ab. A zahlt danach an M, die insolvent wird. F verlangt von A Zahlung.',
 'War die Abtretung wirksam? Muss A noch einmal zahlen?',
 'Lies § 399 BGB und dann § 354a HGB.',
 'Die Abtretung ist trotz Verbots wirksam (§ 354a I 1 HGB), F ist Gläubigerin. A muss trotzdem nicht noch einmal zahlen: Nach § 354a I 2 HGB kann der Schuldner mit befreiender Wirkung an den bisherigen Gläubiger leisten.',
 ['§ 399 Alt. 2 BGB: Eine Forderung kann nicht abgetreten werden, wenn die Abtretung durch Vereinbarung mit dem Schuldner ausgeschlossen ist. Danach wäre die Abtretung unwirksam.',
  '§ 354a I 1 HGB: Ist die Abtretung einer Geldforderung durch Vereinbarung ausgeschlossen und ist das Geschäft für beide Teile ein Handelsgeschäft, ist die Abtretung gleichwohl wirksam.',
  'M und A sind Formkaufleute, Kaufpreis = Geldforderung → Abtretung wirksam, F ist Gläubigerin.',
  '§ 354a I 2 HGB: Der Schuldner kann jedoch mit befreiender Wirkung an den bisherigen Gläubiger leisten. A hat an M gezahlt → frei. F muss sich an M halten.'],
 'Wer nur § 399 kennt, hält die Abtretung für unwirksam. Wer § 354a I 1 HGB kennt, aber Satz 2 übersieht, lässt A doppelt zahlen.');

F('9-985', 'VL 9', 'Herausgabe (§§ 985, 986)', 'Ratenkauf und Rücknahme',
 'K kauft beim Händler H ein Sofa für 2.400 € unter Eigentumsvorbehalt, zahlbar in zwölf Raten. Nach sechs pünktlichen Raten zahlt K eine Rate drei Wochen zu spät. H holt sich das Sofa nicht ab, verlangt aber schriftlich Herausgabe nach § 985, weil er ja noch Eigentümer sei. Einen Rücktritt erklärt H nicht.',
 'Muss K das Sofa herausgeben?',
 'Ist K trotz fehlenden Eigentums zum Besitz berechtigt? Was sagt § 449 II?',
 'Nein. K hat aus dem Kaufvertrag ein Recht zum Besitz (§ 986 I 1). H kann die Sache aufgrund des Eigentumsvorbehalts nur herausverlangen, wenn er vom Vertrag zurückgetreten ist (§ 449 II). Ein Rücktritt setzt zudem grundsätzlich eine erfolglose Frist voraus (§ 323 I).',
 ['§ 985: H ist Eigentümer (aufschiebend bedingte Übereignung, §§ 929, 158 I, 449 I), K Besitzerin.',
  '§ 986 I 1: Der Besitzer kann die Herausgabe verweigern, wenn er ein Recht zum Besitz hat. Der Kaufvertrag gibt K ein solches Recht.',
  '§ 449 II: Aufgrund des Eigentumsvorbehalts kann der Verkäufer die Sache nur herausverlangen, wenn er vom Vertrag zurückgetreten ist.',
  'Rücktritt (§ 323 I) braucht eine erfolglose angemessene Frist zur Zahlung. Ohne Rücktritt besteht das Besitzrecht fort → keine Herausgabe.'],
 'Eigentümer schlägt Besitzer, daher scheint § 985 durchzugreifen. Der Kaufvertrag gibt K ein Besitzrecht, bis H zurücktritt.');

F('9-812a', 'VL 9', 'Bereicherungsrecht', 'Doppelt bezahlt und ausgegeben',
 'K überweist seinem Vermieter V versehentlich die Novembermiete zweimal (je 800 €). V bemerkt nichts, hält sich für reich und geht vom zusätzlichen Geld mit Freunden in ein Sternerestaurant, das er sich sonst nie geleistet hätte (800 €). Zwei Monate später verlangt K die 800 € zurück.',
 'Muss V die 800 € zurückzahlen? Was wäre, wenn V das Geld für eine ohnehin fällige Stromrechnung verwendet hätte?',
 'Lies § 818 III und überlege, ob V bei der Stromrechnung wirklich „entreichert“ wäre.',
 'Grundsätzlich hat K einen Anspruch aus § 812 I 1 Alt. 1. V ist aber nach § 818 III entreichert, weil er die 800 € für eine Luxusausgabe verwendet hat, die er sonst nicht getätigt hätte. Er muss nichts zurückzahlen. Bei der Stromrechnung wäre V nicht entreichert: Er hätte eigene Aufwendungen erspart und müsste zahlen.',
 ['§ 812 I 1 Alt. 1: V hat etwas erlangt (Gutschrift über 800 €) durch Leistung des K (Zahlung auf die vermeintliche Mietschuld) ohne Rechtsgrund (Miete war schon bezahlt).',
  'Kein Ausschluss nach § 814: K wusste nicht, dass er nicht schuldet.',
  '§ 818 III: Die Herausgabepflicht ist ausgeschlossen, soweit der Empfänger nicht mehr bereichert ist. Eine Luxusausgabe, die er sonst nicht gemacht hätte → Vermögen nicht mehr vermehrt → entreichert.',
  'Variante: Bezahlung einer ohnehin fälligen Schuld → V hat eigenes Geld gespart, der Vermögensvorteil besteht fort → nicht entreichert.',
  'Achtung: Hätte V die Doppelzahlung bemerkt, haftete er ab Kenntnis verschärft (§ 819 I) und könnte sich nicht auf § 818 III berufen.'],
 'Rechtsgrundlos erhaltenes Geld muss man immer zurückzahlen? § 818 III schützt den gutgläubigen Empfänger, aber nur bei echter Entreicherung.');

F('9-812b', 'VL 9', 'Bereicherungsrecht', 'Zahlung unter Vorbehalt',
 'Handwerker H verlangt von K für eine Reparatur 1.200 €, obwohl nur 800 € vereinbart waren. K ist sich sicher, dass er nur 800 € schuldet. Um einen Rechtsstreit zu vermeiden und weil H sonst das Auto nicht herausgibt, zahlt K 1.200 € mit dem Vermerk „Zahlung unter Vorbehalt der Rückforderung“. Später verlangt K 400 € zurück. H beruft sich auf § 814.',
 'Kann K die 400 € zurückverlangen?',
 'Wann schließt § 814 die Rückforderung aus, und wie wirkt ein Vorbehalt?',
 'Ja. § 814 greift nicht, weil K unter Vorbehalt geleistet hat. Er wollte die Leistung gerade nicht endgültig gegen sich gelten lassen. Anspruch aus § 812 I 1 Alt. 1 auf 400 €.',
 ['§ 812 I 1 Alt. 1: H hat 400 € ohne Rechtsgrund durch Leistung des K erlangt (geschuldet waren nur 800 €).',
  '§ 814: Die Rückforderung ist ausgeschlossen, wenn der Leistende wusste, dass er zur Leistung nicht verpflichtet war. K wusste das.',
  'Aber: Nach dem Zweck des § 814 (Verbot widersprüchlichen Verhaltens) greift der Ausschluss nicht, wenn der Leistende unter Vorbehalt oder unter Zwang (hier: Zurückhalten des Autos) zahlt, um einen Nachteil abzuwenden.',
  'K bekommt 400 € zurück.'],
 'K kannte die Nichtschuld, und § 814 scheint damit eindeutig. Der Vorbehalt nimmt der Norm den Boden.');

window.dispatchEvent(new Event('wpr-data'));
})();
