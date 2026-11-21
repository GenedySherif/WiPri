(function () {
// Fallbuch Teil 3: VL 6–7 (Holztrattner, WiSe 2026/27) – Kaufrecht
const FB = (window.WPRK_FB = window.WPRK_FB || []);
const F = (id, vl, b, t, sv, q, hint, erg, weg, falle) => { if (!FB.some(x => x.id === id)) FB.push({ id, vl, b, t, sv, q, hint, erg, weg, falle }); };

// ───────── VL 6 ─────────
F('6-sm1', 'VL 6', 'Sachmangel (§ 434)', 'Das „Bastlerfahrzeug“ im Kleingedruckten',
 'Autohändler A verkauft der Studentin S einen acht Jahre alten Kleinwagen für 4.500 €. In den mitunterschriebenen Verkaufsbedingungen steht auf Seite 3 unter vielen anderen Punkten: „Das Fahrzeug wird als Bastlerfahrzeug verkauft.“ Darüber gesprochen wurde nicht. Nach zwei Wochen fällt das Getriebe aus. A verweist auf die Bastler-Klausel.',
 'Hat das Auto einen Sachmangel?',
 'Kann ein Unternehmer beim Verbrauchsgüterkauf die objektiven Anforderungen einfach „wegvereinbaren“?',
 'Ja. Die negative Beschaffenheitsvereinbarung ist gegenüber der Verbraucherin unwirksam, weil sie nicht eigens in Kenntnis gesetzt und die Abweichung nicht ausdrücklich und gesondert vereinbart wurde (§ 476 I 2). Es gelten die objektiven Anforderungen, das Getriebe muss funktionieren.',
 ['Mangelfrei ist die Sache nur, wenn sie den subjektiven, objektiven und Montageanforderungen entspricht (§ 434 I).',
  'Objektive Anforderungen (§ 434 III): Eignung zur gewöhnlichen Verwendung und übliche Beschaffenheit. Ein Auto, dessen Getriebe nach zwei Wochen ausfällt, erfüllt sie nicht.',
  'Abweichung durch Vereinbarung? Beim Verbrauchsgüterkauf (§ 474: S Verbraucherin, A Unternehmer) nur, wenn der Verbraucher vor Abgabe seiner Erklärung eigens davon in Kenntnis gesetzt wurde und die Abweichung ausdrücklich und gesondert vereinbart wurde (§ 476 I 2).',
  'Eine Klausel auf Seite 3 der AGB genügt dem nicht → objektive Anforderungen gelten → Sachmangel. S kann Nacherfüllung verlangen (§§ 437 Nr. 1, 439).'],
 'Der Vertrag scheint die Beschaffenheit „Bastlerfahrzeug“ festzulegen. Beim Verbrauchsgüterkauf hat der Gesetzgeber dafür eigene Hürden gebaut.');

F('6-sm2', 'VL 6', 'Sachmangel (§ 434)', 'Die falschen Laufschuhe',
 'K bestellt beim Sportgeschäft S ein bestimmtes Laufschuhmodell „Cloud X“ in Größe 44 für 160 €. Geliefert wird das ähnlich aussehende Modell „Cloud Y“. K kauft sofort ein Paar „Cloud X“ bei einem anderen Händler für 180 € und verlangt von S die Rückzahlung der 160 € und Ersatz der 20 € Mehrkosten, ohne S vorher eine Frist gesetzt zu haben.',
 'Kann K Rückzahlung und Mehrkosten verlangen?',
 'Ist eine Falschlieferung bloß „Nichterfüllung“ oder ein Sachmangel? Was folgt daraus für die Reihenfolge der Rechte?',
 'Nein, jedenfalls noch nicht. Die Falschlieferung steht einem Sachmangel gleich (§ 434 V). K hätte S zuerst Gelegenheit zur Nacherfüllung geben müssen. Ohne Fristsetzung gibt es weder Rücktritt noch Schadensersatz statt der Leistung.',
 ['Aliud-Lieferung: Liefert der Verkäufer eine andere als die geschuldete Sache, steht das einem Sachmangel gleich (§ 434 V).',
  'Damit gilt das Gewährleistungsrecht des § 437 mit seinem Vorrang der Nacherfüllung.',
  'Rücktritt (§§ 437 Nr. 2, 323) und SE statt der Leistung (§§ 437 Nr. 3, 280, 281) setzen grundsätzlich eine erfolglose Frist zur Nacherfüllung voraus.',
  'Entbehrlichkeit (§§ 281 II, 323 II, 440) liegt nicht vor: S hat weder verweigert, noch ist die Nacherfüllung fehlgeschlagen oder unzumutbar.',
  'K kann von S nur die Lieferung der richtigen Schuhe verlangen. Den falschen Schuh muss er zurückgeben (§ 439 V).'],
 'Wer „falsche Ware = gar nicht geliefert“ denkt, landet direkt beim Schadensersatz. Das Gesetz verlangt vorher die zweite Chance.');

F('6-rm', 'VL 6', 'Rechtsmangel (§ 435)', 'Das Haus mit Mieter',
 'V verkauft K ein Einfamilienhaus für 600.000 €. Im notariellen Vertrag sichert V zu, das Haus sei „bei Übergabe bezugsfrei“. Tatsächlich ist es seit einem Jahr unbefristet an die Familie F vermietet. F weigert sich auszuziehen. K meint, V müsse die Familie „rausholen“, sonst wolle er vom Vertrag zurücktreten.',
 'Muss F ausziehen? Welche Rechte hat K gegen V?',
 'Was passiert mit einem Mietvertrag, wenn das Haus verkauft wird? Ist ein Mietrecht eines Dritten ein Sach- oder ein Rechtsmangel?',
 'F muss nicht ausziehen: K tritt in den Mietvertrag ein (§ 566 I, „Kauf bricht nicht Miete“). Gegen V hat K wegen eines Rechtsmangels (§ 435) die Rechte aus § 437: Nacherfüllung (Räumung herbeiführen, wenn möglich), dann Rücktritt, Minderung oder Schadensersatz.',
 ['Rechtsmangel (§ 435 S. 1): Die Sache ist frei von Rechtsmängeln, wenn Dritte keine oder nur die im Vertrag übernommenen Rechte gegen den Käufer geltend machen können. Das Mietrecht der Familie F wirkt nach § 566 I gegen K → Rechtsmangel.',
  'Vereinbart war „bezugsfrei“, also hat K das Mietrecht gerade nicht übernommen.',
  'Rechte aus § 437: Vorrang der Nacherfüllung (z. B. eine Einigung mit F über einen Auszug). Gelingt sie nicht innerhalb angemessener Frist oder ist sie unmöglich → Rücktritt (§ 323, § 326 V) oder Minderung, bei Vertretenmüssen Schadensersatz (§§ 280, 281/283).',
  'V hat die Vermietung gekannt → Vertretenmüssen (+), womöglich sogar Arglist.'],
 'Der Fall sieht nach einem „Mieterproblem“ aus. Kaufrechtlich ist er ein Rechtsmangel mit allen Rechten aus § 437.');

F('6-gef', 'VL 6', 'Gefahrübergang & Beweislast', 'Das Display nach 8 und nach 14 Monaten',
 'Verbraucherin V kauft beim Händler H ein Smartphone. Nach 8 Monaten fällt das Display ohne äußere Einwirkung aus. H meint, V habe das Handy sicher fallen gelassen, beweisen könne sie das Gegenteil nicht. Bei ihrem zweiten, baugleichen Gerät, das V ein Jahr früher gekauft hat, passiert dasselbe nach 14 Monaten.',
 'Wer muss in den beiden Fällen beweisen, dass der Mangel schon bei Übergabe vorlag?',
 'Wie lange gilt die Vermutung des § 477 I?',
 'Beim ersten Gerät (8 Monate) wird vermutet, dass der Mangel schon bei Gefahrübergang vorlag. H muss das Gegenteil beweisen. Beim zweiten Gerät (14 Monate) greift die Vermutung nicht mehr, V muss beweisen.',
 ['Mängelrechte setzen einen Mangel bei Gefahrübergang voraus (§§ 434 I, 446).',
  'Grundsatz: Der Käufer muss beweisen, dass der Mangel schon bei Übergabe vorlag.',
  'Beim Verbrauchsgüterkauf: Zeigt sich innerhalb eines Jahres seit Gefahrübergang ein vom vertragsgemäßen Zustand abweichender Zustand, wird vermutet, dass die Sache bereits bei Gefahrübergang mangelhaft war (§ 477 I 1). Ausnahme: Die Vermutung ist mit der Art der Sache oder des Mangels unvereinbar.',
  'Erstes Gerät: 8 Monate → Vermutung. Die bloße Behauptung „sicher fallen gelassen“ widerlegt sie nicht. Zweites Gerät: 14 Monate → keine Vermutung, aber Verjährung noch nicht eingetreten (§ 438 I Nr. 3: 2 Jahre).'],
 'Viele verwechseln die Beweislastfrist (1 Jahr) mit der Gewährleistungsfrist (2 Jahre). Nach 14 Monaten gibt es noch Rechte, nur keine Vermutung mehr.');

F('6-dig', 'VL 6', 'Ware mit digitalen Elementen', 'Kein Update für den Smart-TV',
 'Verbraucher K kauft im März 2026 beim Elektronikhändler E einen neuen Smart-TV für 900 €. Im Oktober 2026 stellt der Hersteller die Sicherheitsupdates für das Modell ein. Die Streaming-Apps laufen deshalb nicht mehr. E meint, Updates seien Sache des Herstellers, er selbst habe einen funktionierenden Fernseher übergeben.',
 'Hat K Rechte gegen E?',
 'Wer schuldet beim Verbrauchsgüterkauf über eine Ware mit digitalen Elementen die Aktualisierungen?',
 'Ja. Der Verkäufer schuldet dem Verbraucher Aktualisierungen für den Zeitraum, den der Verbraucher erwarten kann (§ 475b III Nr. 2, IV Nr. 2). Bleiben sie aus, ist der Fernseher mangelhaft. K hat die Rechte aus § 437 gegen E.',
 ['Smart-TV = Ware mit digitalen Elementen (§ 327a III): Er kann seine Funktionen ohne die enthaltene Software nicht erfüllen.',
  '§ 475b: Neben § 434 muss die Ware beim Verbrauchsgüterkauf auch die Aktualisierungsanforderungen erfüllen. Der Verkäufer muss sicherstellen, dass dem Verbraucher Aktualisierungen bereitgestellt werden, die für den Erhalt der Vertragsmäßigkeit erforderlich sind, und zwar für den Zeitraum, den der Verbraucher aufgrund der Art der Sache erwarten kann.',
  'Sieben Monate nach Kauf eines neuen Fernsehers erwartet niemand das Ende der Sicherheitsupdates → Verstoß → Mangel.',
  'Pflichtiger ist der Verkäufer, nicht der Hersteller. E kann sich beim Hersteller bzw. Lieferanten schadlos halten (§§ 445a, 478).'],
 'Der Hinweis auf den Hersteller klingt plausibel. Das Gesetz legt die Aktualisierungspflicht aber dem Verkäufer auf.');

F('6-ne1', 'VL 6', 'Nacherfüllung (§ 439)', 'Fliesen raus, Fliesen rein',
 'Die Bauträgerin B-GmbH kauft beim Fliesenhändler F 300 m² Fliesen und lässt sie von einem eigenen Subunternehmer in einem Neubau verlegen. Danach zeigen sich Haarrisse in der Glasur, ein Herstellungsfehler. F liefert neue Fliesen, will aber das Herausreißen und Neuverlegen (Kosten 18.000 €) nicht bezahlen: „Ich habe ja nur verkauft, nicht verlegt.“ F hat den Fehler nicht verschuldet.',
 'Muss F die Aus- und Einbaukosten tragen?',
 'Lies § 439 III. Gilt die Regel nur für Verbraucher, und braucht es Verschulden?',
 'Ja. Nach § 439 III muss der Verkäufer im Rahmen der Nacherfüllung die erforderlichen Aufwendungen für das Entfernen der mangelhaften und den Einbau der nachgelieferten Sache ersetzen, verschuldensunabhängig und auch gegenüber Unternehmern.',
 ['Mangel bei Gefahrübergang (Haarrisse durch Herstellungsfehler) (+).',
  '§ 439 III 1: Hat der Käufer die mangelhafte Sache ihrer Art und ihrem Verwendungszweck gemäß in eine andere Sache eingebaut, ist der Verkäufer im Rahmen der Nacherfüllung verpflichtet, dem Käufer die erforderlichen Aufwendungen für das Entfernen und den Einbau zu ersetzen.',
  'Die Vorschrift steht im allgemeinen Kaufrecht (seit 2018) und gilt damit auch zwischen Unternehmern.',
  'Es handelt sich um einen Teil der Nacherfüllung, kein Schadensersatz → Verschulden unerheblich.',
  'Ausschluss nur bei Kenntnis des Mangels beim Einbau (§ 439 III 2 i. V. m. § 442 I). Der Fehler zeigte sich erst danach.'],
 '„Ohne Verschulden kein Ersatz“ passt hier nicht. Die Ein- und Ausbaukosten sind Nacherfüllung, kein Schadensersatz.');

F('6-ne2', 'VL 6', 'Nacherfüllung (§ 439)', 'Neuwagen wegen eines klappernden Handschuhfachs',
 'K kauft beim Autohaus A einen Neuwagen für 38.000 €. Nach einer Woche klappert das Handschuhfach. Die Reparatur dauert 30 Minuten und kostet 120 €. K verlangt die Lieferung eines neuen Fahrzeugs. A bietet die Reparatur an.',
 'Kann K auf einem neuen Auto bestehen?',
 'Wer wählt die Art der Nacherfüllung, und gibt es dafür eine Grenze?',
 'Nein. K darf zwar grundsätzlich wählen (§ 439 I), A kann die gewählte Neulieferung aber verweigern, weil sie im Vergleich zur Reparatur unverhältnismäßige Kosten verursacht (§ 439 IV). Der Anspruch beschränkt sich auf die Nachbesserung.',
 ['Mangel (§ 434) (+). Nacherfüllung nach §§ 437 Nr. 1, 439 I: Der Käufer wählt zwischen Beseitigung des Mangels und Lieferung einer mangelfreien Sache.',
  '§ 439 IV 1: Der Verkäufer kann die gewählte Art verweigern, wenn sie nur mit unverhältnismäßigen Kosten möglich ist (relative Unverhältnismäßigkeit).',
  'Abwägung (§ 439 IV 2): Wert der mangelfreien Sache, Bedeutung des Mangels, ob auf die andere Art ohne erhebliche Nachteile für den Käufer zurückgegriffen werden kann. Ein Neuwagen (Wertverlust von mehreren Tausend Euro) gegen 120 € Reparatur → krass unverhältnismäßig.',
  'Folge: Der Anspruch beschränkt sich auf die andere Art (§ 439 IV 3) → Reparatur.'],
 'Das Wahlrecht des Käufers ist richtig gelernt. Übersehen wird das Verweigerungsrecht des Verkäufers.');

F('6-ne3', 'VL 6', 'Nacherfüllung (§ 439)', 'Selbst repariert und Rechnung geschickt',
 'K kauft bei Fahrradhändler H ein E-Bike. Nach einem Monat ist der Akkustecker defekt. K hat keine Lust auf den Weg zu H und lässt den Stecker in der Werkstatt um die Ecke für 90 € tauschen. Dann schickt er H die Rechnung: Dieser habe sich die eigene Reparatur schließlich erspart.',
 'Muss H die 90 € zahlen?',
 'Gibt es im Kaufrecht ein Selbstvornahmerecht wie im Werkvertragsrecht (§ 637)?',
 'Nein. Das Kaufrecht kennt kein Selbstvornahmerecht. Wer ohne Fristsetzung selbst reparieren lässt, nimmt dem Verkäufer sein Recht zur zweiten Andienung und kann weder die Kosten noch die ersparten Aufwendungen des Verkäufers verlangen (BGH VIII ZR 100/04).',
 ['Mangel (+). Rechte aus § 437 setzen grundsätzlich voraus, dass der Käufer dem Verkäufer erfolglos eine Frist zur Nacherfüllung gesetzt hat.',
  'Selbstvornahme mit Kostenerstattung ist nur im Werkvertragsrecht geregelt (§ 637). Im Kaufrecht fehlt eine solche Norm.',
  'SE statt der Leistung (§§ 437 Nr. 3, 280, 281) scheitert an der fehlenden Fristsetzung. Eine Entbehrlichkeit (§ 440) liegt nicht vor.',
  'Auch Ersatz der ersparten Aufwendungen analog § 326 II 2 lehnt der BGH ab: Sonst würde der Vorrang der Nacherfüllung umgangen.'],
 'Die Rechnung wirkt vernünftig, weil H ohnehin hätte reparieren müssen. Gerade dieses Recht zur zweiten Andienung schützt das Gesetz.');

F('6-wlv', 'VL 6', 'Werklieferungsvertrag', 'Die maßgefertigte Gartenbank',
 'Die Restaurant-GmbH R bestellt beim Schreiner S e. K. eine nach ihren Maßen anzufertigende Eichen-Gartenbank für 2.400 €. Bei Lieferung prüft R nicht. Nach sechs Wochen zeigen sich deutliche Risse, die schon bei Lieferung sichtbar waren. R verlangt, S solle eine neue Bank bauen. Hilfsweise will R die Bank selbst reparieren lassen und die Kosten erstattet bekommen (§ 637).',
 'Welches Recht gilt, und hat R noch Mängelrechte?',
 'Wird die Sache „hergestellt“ und ist sie beweglich? Was folgt daraus für § 377 HGB?',
 'Es gilt Kaufrecht (§ 650 S. 1). Damit gilt auch § 377 HGB: R hat sichtbare Mängel nicht unverzüglich gerügt, die Bank gilt als genehmigt. Mängelrechte bestehen nicht mehr, ein Selbstvornahmerecht nach § 637 gäbe es ohnehin nicht.',
 ['§ 650 S. 1: Auf einen Vertrag, der die Lieferung herzustellender oder zu erzeugender beweglicher Sachen zum Gegenstand hat, finden die Vorschriften über den Kauf Anwendung. Die Bank ist beweglich (nicht eingebaut) → Kaufrecht, kein Werkvertragsrecht.',
  'Folge 1: Kein Selbstvornahmerecht (§ 637 gilt nicht).',
  'Folge 2: Beide Parteien sind Kaufleute (GmbH, e. K.) → beiderseitiger Handelskauf → Untersuchungs- und Rügeobliegenheit (§ 377 I HGB, gilt über § 381 II HGB auch für Werklieferungsverträge).',
  'Sichtbare Risse, sechs Wochen ohne Rüge → verspätet → Genehmigungsfiktion (§ 377 II HGB).'],
 'Weil die Bank „gebaut“ wird, denken viele an Werkvertrag und § 637. Für bewegliche Sachen gilt aber Kaufrecht, mit allen Folgen.');

// ───────── VL 7 ─────────
F('7-rt', 'VL 7', 'Rücktritt', 'Der Lackfehler am Neuwagen',
 'K kauft einen Neuwagen für 30.000 €. An der Heckklappe ist ein kleiner Lackeinschluss, Beseitigung durch Polieren 80 €. Der Händler lehnt die Nachbesserung ab, weil es „Kleinkram“ sei. K setzt eine Frist, die verstreicht, und erklärt den Rücktritt.',
 'Ist der Rücktritt wirksam? Was bleibt K?',
 'Lies § 323 V 2. Ab wann ist ein Mangel erheblich?',
 'Nein. Bei einer unerheblichen Pflichtverletzung ist der Rücktritt ausgeschlossen (§ 323 V 2). 80 € bei 30.000 € liegen weit unter der Erheblichkeitsschwelle (nach BGH in der Regel 5 % des Kaufpreises bei behebbaren Mängeln). K kann mindern oder kleinen Schadensersatz verlangen.',
 ['Rücktritt nach §§ 437 Nr. 2, 323 I: Mangel (+), erfolglose Frist (+).',
  'Ausschluss § 323 V 2: Hat der Schuldner die Leistung nicht vertragsgemäß bewirkt, kann der Gläubiger nicht zurücktreten, wenn die Pflichtverletzung unerheblich ist.',
  'Erheblichkeit: umfassende Interessenabwägung. Bei behebbaren Mängeln regelmäßig erst ab Beseitigungskosten von über 5 % des Kaufpreises (BGH VIII ZR 94/13). Hier: 0,27 %.',
  'Minderung (§ 441 I 2) ist ausdrücklich auch bei unerheblichen Mängeln möglich. Kleiner SE (§§ 280, 281) ebenfalls, großer nicht (§ 281 I 3).'],
 'Die Ablehnung der Nachbesserung lässt K als „Opfer“ erscheinen. Am Ausschluss des Rücktritts bei Bagatellen ändert das nichts.');

F('7-min', 'VL 7', 'Minderung', 'Richtig mindern',
 'K kauft eine gebrauchte Espressomaschine für 1.200 €, ein gutes Geschäft: Mangelfrei wäre sie 1.500 € wert. Wegen eines defekten Milchschäumers, den der Verkäufer trotz Frist nicht repariert, ist sie nur 1.000 € wert. K mindert und will 500 € zurück (Wertdifferenz). Der Verkäufer will nur 200 € erstatten (Kaufpreis minus tatsächlicher Wert).',
 'Wie viel muss der Verkäufer erstatten?',
 'Lies § 441 III. Wird die Wertdifferenz einfach abgezogen oder verhältnismäßig gerechnet?',
 '400 €. Geminderter Preis = 1.200 € × 1.000 / 1.500 = 800 €. Erstattung 1.200 € − 800 € = 400 € (§ 441 III, IV).',
 ['Minderung (§§ 437 Nr. 2, 441): Mangel (+), Frist erfolglos (+). Erklärung gegenüber dem Verkäufer (§ 441 I).',
  'Berechnung (§ 441 III 1): Der Kaufpreis ist in dem Verhältnis herabzusetzen, in dem zur Zeit des Vertragsschlusses der Wert der Sache in mangelfreiem Zustand zu dem wirklichen Wert gestanden haben würde.',
  'Verhältnis: wirklicher Wert / mangelfreier Wert = 1.000 / 1.500 = 2/3. Geminderter Preis = 1.200 € × 2/3 = 800 €.',
  'Zu viel Gezahltes ist zu erstatten (§ 441 IV): 400 €. Das gute Geschäft (unter Wert gekauft) bleibt K proportional erhalten.'],
 'Beide Parteien rechnen falsch. Die Minderung ist eine Verhältnisrechnung, keine Subtraktion.');

F('7-se', 'VL 7', 'Schadensersatz', 'Der brennende Wasserkocher',
 'K kauft im Kaufhaus H einen Wasserkocher eines Markenherstellers in Originalverpackung. Wegen eines nicht erkennbaren Fabrikationsfehlers im Thermostat überhitzt er beim ersten Gebrauch und beschädigt die Arbeitsplatte (Reparatur 600 €). K verlangt die 600 € von H, sofort und ohne Frist.',
 'Braucht K eine Frist? Haftet H?',
 'Mangelschaden oder Mangelfolgeschaden? Und hat der Händler den Fehler zu vertreten?',
 'Für einen Mangelfolgeschaden braucht K keine Frist (§§ 437 Nr. 3, 280 I). Der Anspruch gegen H scheitert aber am Vertretenmüssen: Der Händler muss originalverpackte Markenware nicht untersuchen, und der Hersteller ist nicht sein Erfüllungsgehilfe. K muss sich an den Hersteller halten (ProdHaftG, § 823 I).',
 ['Schaden an der Arbeitsplatte = Schaden an anderen Rechtsgütern (Mangelfolgeschaden) → Schadensersatz neben der Leistung nach §§ 437 Nr. 3, 280 I. Eine Nachfrist hätte diesen Schaden nicht verhindert → keine Fristsetzung nötig.',
  'Vertretenmüssen wird vermutet (§ 280 I 2), H kann sich aber entlasten: Ein Händler hat keine allgemeine Untersuchungspflicht für originalverpackte Markenware, der Fehler war nicht erkennbar.',
  'Der Hersteller ist nicht Erfüllungsgehilfe des Verkäufers (§ 278), weil der Verkäufer die Herstellung nicht schuldet.',
  'Gegen den Hersteller: § 1 I ProdHaftG (Sachschaden an privat genutzter Sache, Selbstbeteiligung 500 € nach § 11 → 100 €) und § 823 I (Produzentenhaftung mit Beweislastumkehr → volle 600 €, wenn der Hersteller sich nicht entlasten kann).'],
 'Zwei Fallen: Die Frist ist für Folgeschäden unnötig, aber das Verschulden des Händlers fehlt trotzdem.');

F('7-aus', 'VL 7', 'Ausschlüsse (§§ 442, 444)', '„Gekauft wie gesehen“',
 'Privatmann V verkauft Privatmann K seinen gebrauchten Golf für 6.000 € „unter Ausschluss jeder Gewährleistung, gekauft wie gesehen“. Bei der Besichtigung zeigt V auf eine großflächige Roststelle an der Tür, K sieht sie sich an. V weiß außerdem, dass der Motor regelmäßig Öl verliert, sagt es aber nicht. Nach zwei Monaten verlangt K Reparatur von Tür und Motor.',
 'Für welche Mängel haftet V?',
 'Zwei verschiedene Ausschlussgründe, zwei verschiedene Mängel.',
 'Für den Rost nicht, weil K ihn kannte (§ 442 I 1). Für den Ölverlust schon: Auf den Gewährleistungsausschluss kann sich V nicht berufen, weil er den Mangel arglistig verschwiegen hat (§ 444).',
 ['Kein Verbrauchsgüterkauf (privat an privat) → ein individuell vereinbarter Gewährleistungsausschluss ist grundsätzlich zulässig (§ 476 gilt nicht).',
  'Rost: K kannte den Mangel bei Vertragsschluss → Rechte ausgeschlossen (§ 442 I 1), unabhängig vom Ausschluss.',
  'Ölverlust: grundsätzlich vom Ausschluss erfasst. Aber § 444: Auf eine Vereinbarung, durch welche die Rechte des Käufers ausgeschlossen werden, kann sich der Verkäufer nicht berufen, soweit er den Mangel arglistig verschwiegen hat.',
  'Arglist: V kannte den Mangel und wusste, dass K ihn nicht kennt und bei Kenntnis nicht oder nicht so kaufen würde → Rechte aus § 437 bestehen. Daneben Anfechtung nach § 123 möglich.'],
 '„Gekauft wie gesehen“ wirkt wie ein Totalausschluss. Er hält aber nicht gegen Arglist, und für Gesehenes braucht es ihn gar nicht.');

F('7-gar', 'VL 7', 'Garantie (§ 443)', 'Fünf Jahre Motorgarantie',
 'K kauft im Mai 2023 beim Händler H einen Neuwagen. Der Hersteller gibt in seinem Garantieheft eine „5-Jahres-Garantie auf Motor und Getriebe“. Im Juni 2026 versagt das Getriebe. H lehnt ab: Die Gewährleistung sei nach zwei Jahren abgelaufen. K meint, damit sei auch die Garantie wertlos.',
 'Hat K noch Ansprüche, und gegen wen?',
 'Sind Gewährleistung und Garantie dasselbe? Was regelt § 443 II?',
 'Gegen H verjährt (§ 438 I Nr. 3, Ablieferung Mai 2023). Gegen den Hersteller hat K aber einen Anspruch aus der Haltbarkeitsgarantie (§ 443 I). Dabei wird vermutet, dass ein während der Laufzeit auftretender Mangel die Garantie auslöst (§ 443 II).',
 ['Gewährleistung = gesetzliche Mängelhaftung des Verkäufers (§ 437), Verjährung 2 Jahre ab Ablieferung (§ 438 I Nr. 3, II) → Mai 2025 abgelaufen.',
  'Garantie = freiwillige, zusätzliche Verpflichtung, hier des Herstellers (§ 443 I). Sie gibt dem Käufer Rechte gegen den Garantiegeber zu den Bedingungen der Garantieerklärung, „unbeschadet der gesetzlichen Ansprüche“.',
  'Haltbarkeitsgarantie: Es wird vermutet, dass ein während ihrer Geltungsdauer auftretender Sachmangel die Rechte aus der Garantie begründet (§ 443 II).',
  'Getriebeschaden nach 3 Jahren und 1 Monat → innerhalb der 5 Jahre → Anspruch gegen den Hersteller nach den Garantiebedingungen.'],
 'Der Händler hat recht, die Gewährleistung ist abgelaufen. Falsch ist der Schluss, dass damit alles vorbei sei.');

F('7-reg', 'VL 7', 'Regress (§§ 445a, 445b)', 'Der Händler und sein Lieferant',
 'Fahrradhändler H verkauft der Verbraucherin V ein E-Bike, das er vom Großhändler G gekauft hat. Wegen eines Herstellungsfehlers am Motor muss H den Motor im Rahmen der Nacherfüllung tauschen (Material und Arbeit: 700 €). H verlangt die 700 € von G. G meint, H hätte ihm erst eine Frist zur Nacherfüllung setzen müssen, außerdem treffe ihn kein Verschulden.',
 'Muss G die 700 € zahlen?',
 'Lies § 445a I und II. Braucht der Händler für den Regress eine Frist oder ein Verschulden des Lieferanten?',
 'Ja. Der Verkäufer einer neu hergestellten Sache kann vom Lieferanten Ersatz der Aufwendungen verlangen, die er gegenüber seinem Käufer nach § 439 II, III tragen musste (§ 445a I). Eine Fristsetzung ist entbehrlich (§ 445a II), Verschulden ist nicht nötig.',
 ['§ 445a I: Aufwendungsersatz für die im Verhältnis zum Käufer nach § 439 II, III getragenen Aufwendungen, wenn der Mangel schon beim Übergang der Gefahr auf den Verkäufer vorlag.',
  'Herstellungsfehler → Mangel schon bei Lieferung an H (+). Neu hergestellte Sache (+).',
  '§ 445a II: Für die Rechte nach § 437 gegen den Lieferanten bedarf es der sonst erforderlichen Fristsetzung nicht, wenn der Verkäufer die Sache vom Käufer zurücknehmen musste oder der Käufer den Kaufpreis gemindert hat. Der Aufwendungsersatz aus Absatz 1 setzt ohnehin keine Frist voraus.',
  'Aufwendungsersatz ist kein Schadensersatz → kein Verschulden nötig. Wichtig: § 377 HGB bleibt im Verhältnis H–G anwendbar (§ 445a IV), wenn beide Kaufleute sind.'],
 'G argumentiert mit Frist und Verschulden wie beim normalen Schadensersatz. Der Regress ist bewusst einfacher gestaltet, damit der Händler nicht auf den Kosten sitzen bleibt.');

F('7-vj', 'VL 7', 'Verjährung (§ 438)', 'Undichte Dachziegel nach drei Jahren',
 'Bauherrin B kauft beim Baustoffhändler H Dachziegel und lässt damit ihr neues Haus decken. Ablieferung der Ziegel war im März 2023. Im April 2026 zeigt sich, dass die Ziegel wegen eines Brennfehlers Wasser ziehen und das Dach undicht wird. H beruft sich auf die zweijährige Verjährung.',
 'Sind B’s Mängelrechte verjährt?',
 'Lies § 438 I Nr. 2. Für welche Sachen gilt eine längere Frist?',
 'Nein. Für Sachen, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden sind und dessen Mangelhaftigkeit verursacht haben, beträgt die Verjährung 5 Jahre (§ 438 I Nr. 2 b). Sie läuft bis März 2028.',
 ['Regelfrist für Kaufmängel: 2 Jahre (§ 438 I Nr. 3) → wäre März 2025 abgelaufen.',
  '§ 438 I Nr. 2 b: 5 Jahre bei einer Sache, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden ist und dessen Mangelhaftigkeit verursacht hat.',
  'Dachziegel werden üblicherweise für Bauwerke verwendet, sie sind verbaut und machen das Dach undicht → 5 Jahre.',
  'Beginn mit Ablieferung (§ 438 II): März 2023 → Ablauf März 2028. Daneben gilt § 439 III für die Ein- und Ausbaukosten.'],
 'Die zwei Jahre sind richtig gelernt, aber nur die Regel. Baumaterial hat eine eigene, längere Frist.');

F('7-vgk1', 'VL 7', 'Verbrauchsgüterkauf: Sonderregeln', 'Ein Jahr Gewährleistung beim Gebrauchtwagen',
 'Autohändler A verkauft dem Verbraucher K einen Gebrauchtwagen. In den AGB, die K beim Kauf unterschreibt, steht: „Die Gewährleistungsfrist beträgt ein Jahr.“ Gesondert besprochen wird das nicht. Nach 18 Monaten zeigt sich ein Mangel, für den die Vermutung des § 477 nicht mehr gilt, den K aber beweisen kann. A beruft sich auf die Ein-Jahres-Frist.',
 'Sind K’s Rechte verjährt?',
 'Darf man beim Verbrauchsgüterkauf gebrauchter Sachen die Verjährung verkürzen? Unter welchen Voraussetzungen?',
 'Nein. Eine Verkürzung auf ein Jahr ist bei gebrauchten Sachen zwar möglich, setzt aber voraus, dass der Verbraucher vor Abgabe seiner Erklärung eigens davon in Kenntnis gesetzt und die Verkürzung ausdrücklich und gesondert vereinbart wurde (§ 476 II). Das fehlt, es gelten 2 Jahre.',
 ['Verbrauchsgüterkauf (§ 474) (+). Vereinbarungen zum Nachteil des Verbrauchers sind grundsätzlich unwirksam (§ 476 I).',
  '§ 476 II: Die Verjährung darf bei gebrauchten Sachen auf nicht weniger als ein Jahr verkürzt werden, wenn der Verbraucher vor der Abgabe seiner Vertragserklärung von der Verkürzung eigens in Kenntnis gesetzt und sie im Vertrag ausdrücklich und gesondert vereinbart wurde.',
  'Eine Zeile in den AGB genügt nicht → Verkürzung unwirksam → 2 Jahre (§ 438 I Nr. 3).',
  'Nach 18 Monaten noch nicht verjährt. K muss aber den Mangel bei Gefahrübergang beweisen, weil § 477 I nur ein Jahr gilt.'],
 'Dass man beim Gebrauchtwagen auf ein Jahr verkürzen darf, stimmt. Seit 2022 stellt § 476 II aber zusätzliche Formhürden auf.');

F('7-vgk2', 'VL 7', 'Verbrauchsgüterkauf: Sonderregeln', 'Der Mangel kurz vor Fristende',
 'Verbraucherin V kauft beim Händler H eine Waschmaschine, Ablieferung am 1. März 2024. Am 15. Februar 2026 zeigt sich erstmals ein Defekt an der Pumpe. V ist beruflich eingespannt und verlangt erst am 1. Juni 2026 Nacherfüllung. H meint, die zwei Jahre seien am 1. März 2026 abgelaufen.',
 'Ist der Anspruch verjährt?',
 'Gibt es beim Verbrauchsgüterkauf eine Ablaufhemmung für Mängel, die sich spät zeigen?',
 'Nein. Zeigt sich ein Mangel innerhalb der Verjährungsfrist, tritt die Verjährung beim Verbrauchsgüterkauf nicht vor Ablauf von vier Monaten nach dem ersten Auftreten ein (§ 475e III). Frist also bis 15. Juni 2026, der 1. Juni ist rechtzeitig.',
 ['Regelverjährung: 2 Jahre ab Ablieferung (§ 438 I Nr. 3, II) → 1. März 2026.',
  '§ 475e III: Hat sich ein Mangel innerhalb der Verjährungsfrist gezeigt, so tritt die Verjährung nicht vor dem Ablauf von vier Monaten nach dem Zeitpunkt ein, zu dem sich der Mangel erstmals gezeigt hat.',
  'Erstes Auftreten: 15. Februar 2026 (innerhalb der Frist) → Verjährung frühestens mit Ablauf des 15. Juni 2026.',
  'Nacherfüllungsverlangen am 1. Juni → rechtzeitig. (Ein bloßes Verlangen hemmt nicht, V sollte vor dem 15. Juni Klage erheben oder H zu Verhandlungen bewegen, § 203.)'],
 'Stur „zwei Jahre ab Übergabe“ zu rechnen, übersieht die Verbraucher-Ablaufhemmung von 2022.');

F('7-dp', 'VL 7', 'Digitale Produkte (§§ 327 ff.)', 'Die „kostenlose“ App',
 'Verbraucher K lädt die Fitness-App des Anbieters A herunter. Sie ist kostenlos, K muss dafür aber in die Nutzung seiner Standort- und Gesundheitsdaten zu Werbezwecken einwilligen. Seit einem Update stürzt die App bei jedem Start ab. A meint, bei einer Gratis-App gebe es keine Gewährleistung.',
 'Hat K Rechte gegen A?',
 'Lies § 327 III. Wann gelten die Vorschriften über digitale Produkte auch ohne Geldzahlung?',
 'Ja. Die §§ 327 ff. gelten auch, wenn der Verbraucher statt Geld personenbezogene Daten bereitstellt (§ 327 III). K kann die Herstellung des vertragsgemäßen Zustands verlangen (§ 327l), bei Ausbleiben den Vertrag beenden (§ 327m).',
 ['Verbrauchervertrag über ein digitales Produkt (§ 327 I): App = digitaler Inhalt.',
  '§ 327 III: Die Vorschriften gelten auch für Verbraucherverträge, bei denen der Verbraucher dem Unternehmer personenbezogene Daten bereitstellt oder sich hierzu verpflichtet, soweit die Daten nicht ausschließlich zur Vertragserfüllung verarbeitet werden. Werbezwecke gehen darüber hinaus.',
  'Produktmangel (§ 327e): Die App erfüllt die objektiven Anforderungen (Funktionsfähigkeit) nicht. Auch ein mangelhaftes Update ist erfasst (§ 327f).',
  'Rechte (§ 327i): Nacherfüllung (§ 327l), Vertragsbeendigung (§ 327m), Schadensersatz (§§ 327i Nr. 3, 280).'],
 '„Kostenlos = keine Rechte“ stimmt bei Datenzahlung nicht. Das Gesetz behandelt Daten wie einen Preis.');

window.dispatchEvent(new Event('wpr-data'));
})();
