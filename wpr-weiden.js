(function () {
const K = window.WPRK; if (!K || K.__weiden) return; K.__weiden = 1;
const T = id => K.topics.find(t => t.id === id);
const add = (id, kern, schema, fallen, norms) => { const t = T(id); if (!t) return; t.kern.push(...(kern || [])); t.schema.push(...(schema || [])); t.fallen.push(...(fallen || [])); (norms || []).forEach(n => { if (!t.norms.includes(n)) t.norms.push(n); }); };

add('typ', [
 'Europarecht (Weiden) :: Geht nationalem Recht vor. Verordnung gilt unmittelbar (z. B. DSGVO), Richtlinie muss umgesetzt werden. Primärrecht: EUV, AEUV.',
 'Auslegung von Gesetzen :: Wortlaut, Systematik, Historie, Telos (Sinn und Zweck); dazu europarechts- und verfassungskonform. Signalwörter markieren: „grundsätzlich“, „insbesondere“, „im Zweifel“.',
 'Influencer-Verträge :: Werkvertrag § 631, wenn eine bestimmte Anzahl Posts geschuldet ist; Dienstvertrag § 611 bei langfristiger Zusammenarbeit ohne feste Posts.',
 'Vertragstypen :: Schuldrecht kennt keinen Typenzwang – auch atypische Verträge sind möglich. Im Sachenrecht gilt dagegen Typenzwang.',
 'Beweislast :: Darlegen muss man alles, was einem nützt. Bewiesen werden muss nur eine entscheidungserhebliche, bestrittene Tatsache. Umkehr durch gesetzliche Vermutung: § 280 I 2, § 477.'
], [], [], ['§ 611', '§ 631']);

add('form', [
 'Grenzen der Vertragsfreiheit (Weiden) :: Kontrahierungszwang (§ 17 EnWG), AGB-Kontrolle §§ 307 ff., Verbraucherschutz, gesetzliche Verbote § 134, gute Sitten § 138. Moral allein bindet nicht – Lügen wird erst als arglistige Täuschung relevant.',
 'Formänderung 1.1.2025 :: Gewerbe- und Grundstücksmiete: Textform genügt, um die lange Bindung nach § 550 zu sichern. Nachweisgesetz: Arbeitsbedingungen auch in Textform (§ 126b), Arbeitnehmer kann Schriftform verlangen.',
 'Schriftform praktisch :: Handschriftlicher Namenszug, der das Papierdokument unten räumlich abschließt (§ 126 I).',
 'Formfreiheit :: Ohne gesetzliche oder vereinbarte Form gilt jede Form – auch E-Mail-Verträge sind wirksam.'
], [], ['Seit 2025 genügt bei Gewerbemietverträgen Textform für § 550 – Prüfungsfrage zur Gesetzesänderung.'], ['§ 550']);

add('vs', [
 'essentialia negotii :: Ein bindendes Angebot muss Parteien, Leistung und Gegenleistung erkennen lassen.',
 'Webshop :: Warenpräsentation ist invitatio ad offerendum (Selbstbelieferungsvorbehalt). Das Angebot macht der Kunde mit „zahlungspflichtig bestellen“; der Warenkorb allein bewirkt nichts.',
 'eBay :: Nach den Nutzungsbedingungen gibt der Verkäufer mit dem Einstellen das verbindliche Angebot ab; der Käufer nimmt durch Gebot (aufschiebend bedingt auf Höchstgebot) bzw. „Sofort-Kaufen“ an.',
 'Unbestellte Ware § 241a :: Kein Vertrag, auch nicht über § 151; der Verbraucher muss nichts zurücksenden, auch keine Pflicht zur Aktivität. § 241a ist lex specialis.',
 'Auslobung § 657 :: Nicht empfangsbedürftige WE (Finderlohn auf Zettel/Facebook). Der Finder erhält die Belohnung auch, wenn er die Auslobung nicht kannte.',
 'Fernabsatz :: §§ 312c ff., Informationspflichten § 312d i. V. m. Art. 246a EGBGB. Widerruf nur für Verbraucher, kein Anspruch auf Umtausch. Auch telefonisch oder per Brief möglich, nicht nur online.',
 'Widerrufsfrist :: 14 Tage ab Erhalt der Ware (§ 356 II), nicht vor ordnungsgemäßer Belehrung (§ 356 III) – dann höchstens 12 Monate und 14 Tage (§ 356 III 2).'
], [], ['Ohne Widerrufsbelehrung läuft die 14-Tage-Frist nicht – Widerruf ist auch nach Wochen noch möglich.', 'Einlegen in den Warenkorb ist noch kein Angebot.'], ['§ 241a', '§ 312c', '§ 312d', '§ 356', '§ 657']);

add('agb', [
 'Zweck von AGB :: Rationalisierung, Risikobegrenzung, Regelung gesetzlicher Lücken.',
 'Prüfung „von vorn nach hinten“ :: AGB-Qualität und Einbeziehung § 305 → keine überraschende/mehrdeutige Klausel § 305c → Vorrang der Individualabrede § 305b.',
 'Prüfung „von hinten nach vorn“ :: § 309 (ohne Wertung, nur gegenüber Verbrauchern) → § 308 (mit Wertung) → § 307 I Generalklausel (gilt für alle Verträge).',
 'B2B :: § 309 gilt gegenüber Unternehmern nicht (§ 310 I 1); Prüfung nur über § 307. Folge der Unwirksamkeit: Gesetz gilt, Vertrag im Übrigen wirksam § 306.',
 'Preisanpassung § 309 Nr. 1 :: Preiserhöhung für Lieferung innerhalb von 4 Monaten nach Vertragsschluss unwirksam.',
 'Waschanlage (BGH) :: Haftungsausschluss für Anbauteile außer bei grobem Verschulden verstößt nicht gegen § 309 Nr. 7, aber gegen § 307 I – Schadensprävention liegt beim Betreiber.',
 'Vertragsstrafe :: In AGB grundsätzlich zulässig; mehr als das Dreifache des Branchenüblichen ist unangemessen § 307 I.'
], [], ['Gegenüber Unternehmern nie mit § 309 argumentieren – § 310 I 1.', 'Ob ein Kunde überrascht war, spielt bei § 305c keine Rolle; maßgeblich ist, ob die Klausel objektiv ungewöhnlich ist.'], ['§ 305b', '§ 305c', '§ 306', '§ 307', '§ 308', '§ 309', '§ 310']);

add('lst', [
 'Verschulden vs. Vertretenmüssen :: Verschulden = subjektive Vorwerfbarkeit (§ 276). Vertretenmüssen = Pflicht, Verantwortung zu übernehmen – auch für fremdes Verschulden (§ 278) oder ohne Verschulden (Garantie).',
 'Haftungsgrenzen :: Vorsatzhaftung nicht abdingbar § 276 III; in AGB nur eingeschränkt § 309 Nr. 7.',
 'Kontrollfrage SE (Weiden) :: Würde der Schaden bei rechtzeitiger Nacherfüllung entfallen? Nein → nicht behebbar, SE neben der Leistung § 280 I. Ja → behebbar, SE statt der Leistung § 281 (Frist).',
 'Nebenpflichten :: pFV §§ 280 I, 241 II; SE statt der Leistung zusätzlich § 282; Rücktritt § 324. Nicht verwechseln: Vertrag mit Schutzwirkung für Dritte und Vertrag zugunsten Dritter § 328.',
 'Gläubigerverzug HGB :: § 373 HGB – Verkäufer darf Ware auf Gefahr und Kosten des Käufers hinterlegen.',
 '§ 325 :: Schadensersatz und Rücktritt schließen einander nicht aus.',
 'Beendigung :: Erfüllung § 362, Aufrechnung § 387, Rücktritt, Vertragsbeendigung § 327m, Widerruf § 355, Anfechtung, Kündigung (Kündigungsbutton § 312k, wichtiger Grund § 314).'
], [], ['Behebbarer Schaden → § 281 mit Fristsetzung; nicht behebbarer → § 280 I ohne Frist.'], ['§ 282', '§ 324', '§ 325', '§ 328', '§ 373 HGB']);

add('del', [
 'Kausalität :: Äquivalenz (conditio sine qua non), Adäquanz (nicht völlig atypisch), Schutzzweck der Norm.',
 'Differenzmethode :: Vergleich der Lage vor und nach dem Ereignis. Grundsatz positives Interesse (z. B. § 179 I), ausnahmsweise negatives (§ 179 II). Immateriell nur, wenn gesetzlich angeordnet (§ 253).',
 'Werkstattwahl § 249 II :: Der Geschädigte muss sich nicht auf die Reparatur durch den Schädiger einlassen und darf fiktiv abrechnen – dann ohne Umsatzsteuer (§ 249 II 2).',
 'Mitverschulden § 254 :: Durchbricht die Totalreparation: Quote bis auf null. Abs. 1 Beitrag zur Entstehung, Abs. 2 Verstoß gegen Schadensminderungspflicht.',
 'Verkehrssicherungspflicht :: Entsteht durch Eröffnen einer Gefahrenquelle: Streupflicht, alte Bäume, Sportanlagen (Wartung), Gaststätten, Internetplattformen (Inhalte löschen), Hersteller.',
 'Gefährdungshaftung :: Ohne Verschulden, kaum Entlastung: Tierhalter § 833 S. 1, Kfz-Halter § 7 StVG, ProdHaftG.',
 'Rechtswidrigkeit :: Wird durch die Rechtsgutsverletzung indiziert.'
], [], ['Fiktive Abrechnung: Reparaturkosten ohne Umsatzsteuer.', 'Ideeller Wert einer zerstörten Sache wird nicht ersetzt (§ 253 I).'], ['§ 251', '§ 253', '§ 7 StVG']);

add('kauf', [
 'Reihenfolge § 437 :: Erst Nacherfüllung. Solange der Verkäufer bereit ist und keine Frist abgelaufen ist, sind Rücktritt, Minderung und SE statt der Leistung nicht durchsetzbar.',
 'Fehlschlagen § 440 S. 2 :: Nachbesserung gilt erst nach dem zweiten erfolglosen Versuch als fehlgeschlagen.',
 'Minderung „statt zurückzutreten“ :: § 441 verlangt die Voraussetzungen des Rücktritts.',
 'Kosten der Nacherfüllung :: Transport, Arbeit, Material trägt der Verkäufer § 439 II; Rücknahme der mangelhaften Sache § 439 VI 2.',
 'Gewährleistung vs. Garantie :: Gewährleistung gesetzlich, immer gegen Verkäufer, 2 Jahre (gebraucht 1 Jahr), Mangel bei Gefahrübergang. Garantie § 443 freiwillig, gegen Garantiegeber, Inhalt frei – auch Verschleiß. Informationspflicht § 479, Art. 246a EGBGB.',
 'Haltbarkeit :: Gehört zur Beschaffenheit, begründet aber keine gesetzliche Haltbarkeitsgarantie – maßgeblich bleibt der Gefahrübergang.',
 'Digitale Produkte vs. Ware mit digitalen Elementen :: E-Book, App, SaaS, Social-Media-Account (Zahlung mit Daten, § 327 III) → §§ 327 ff. Funktionsnotwendige Software (Roboter-Mäher mit App) → Kaufrecht §§ 433, 475b ff. (§ 327a III). Smarter Kühlschrank: Auslegung.',
 'Gefahrübergang :: Sachkauf mit Übergabe § 446; Versendung § 447; VGK erst bei Erhalt § 475 II; Rechtskauf mit Abtretung § 398; Immobilie mit Besitzübergang (Schlüssel).'
], [], ['Ein erfolgloser Nachbesserungsversuch reicht für den Rücktritt nicht (§ 440 S. 2).', 'Funktionsnotwendige App macht den Mäher nicht zum digitalen Produkt – es bleibt Kaufrecht (§ 327a III).'], ['§ 327', '§ 327a', '§ 440', '§ 475b', '§ 479']);

add('sach', [
 'Sachenrechtsprinzipien :: Absolutheit, Typenzwang, Publizität (Besitz/Grundbuch), Spezialität (bestimmte Sachen), Abstraktion.',
 'Besitzformen :: Unmittelbar § 854, mittelbar § 868, Besitzdiener § 855 (kein Besitzer). Schutz §§ 861, 862; Eigentümer §§ 985, 1004.',
 'EBV :: § 985 scheitert am Recht zum Besitz § 986 (Miete, Leihe, Eigentumsvorbehalt). Nach Mietende: § 546 I und § 985.',
 'Anwartschaft :: Zwischenverfügungen des Vorbehaltsverkäufers sind unwirksam § 161 I.',
 'Grundbuch § 892 :: Eingetragener gilt als Eigentümer, außer Widerspruch eingetragen oder Erwerber kennt Unrichtigkeit.',
 'Überweisung :: Kein Eigentum an Geldscheinen – Rückforderung nie über § 985, sondern § 812.',
 'Wesentlicher Bestandteil :: Das Haus teilt das Schicksal des Grundstücks (§ 94).',
 'Bereicherung :: Leistung = bewusste, zweckgerichtete Mehrung fremden Vermögens. Leistungs- und Eingriffskondiktion; Verfügung eines Nichtberechtigten § 816.',
 'Abtretung & Factoring :: Zedent tritt an Zessionar ab (§ 398); Schuldner zahlt an den Neuen befreiend erst ab Kenntnis (§ 407). Echtes Factoring: Factor trägt das Ausfallrisiko (Delkredere).'
], [], ['Anzahlung per Überweisung kann man nicht nach § 985 zurückverlangen – nur nach § 812.'], ['§ 94', '§ 161', '§ 546', '§ 855', '§ 861', '§ 1004', '§ 816', '§ 407']);

K.nf.push(
 ['Unbestellt zugeschickte Kopfhörer – zurücksenden?', '§ 241a'],
 ['Finderlohn auf Zettel – Finder kannte ihn nicht', '§ 657'],
 ['Webshop: Wer macht das Angebot?', '§ 145'],
 ['Widerruf ohne Belehrung nach 3 Wochen', '§ 356 III'],
 ['AGB-Preiserhöhung bei Lieferung nach 4 Monaten', '§ 309 Nr. 1'],
 ['Klauselverbote gegenüber einem Unternehmer', '§ 310 I'],
 ['Überraschende Klausel im Kleingedruckten', '§ 305c I'],
 ['Fiktive Reparaturkosten nach Unfall', '§ 249 II 2'],
 ['Zerstörtes Bild: ideeller Wert ersetzt?', '§ 253 I'],
 ['Zweite Nachbesserung schlägt fehl', '§ 440 S. 2'],
 ['Mieter gibt nach Vertragsende nicht zurück', '§ 546 I'],
 ['Grundstückskauf nur mündlich – Anzahlung zurück', '§ 812 I 1'],
 ['Rücktritt: Wertverlust durch eigene Nachlässigkeit', '§ 346 III Nr. 3'],
 ['Rücktritt und Schadensersatz nebeneinander', '§ 325']
);
})();

(function () {
const P = 'W', Q = (topic, sv, q, c, o) => ({ topic, sv, q, c, o });
const L = [
Q('sach', 'Studentin S verkauft ihren Laptop an ihren Kommilitonen K zum Preis von 150 EUR. K gibt S das Geld. S und K vereinbaren, dass S den Laptop am folgenden Tag mit in die Hochschule bringt und ihn dann dem K gibt.', 'Wer ist zu diesem Zeitpunkt Eigentümer des Laptops?', 3, [
 ['K, weil mit Abschluss des Kaufvertrags und Zahlung das Eigentum automatisch übergeht (§ 433 I).', 'Falsch. Der Kaufvertrag verpflichtet nur zur Übereignung. Er ändert nichts am Eigentum (Trennungsprinzip).'],
 ['K, weil S und K sich über den Eigentumsübergang bereits geeinigt haben und das genügt (§ 929 S. 1).', 'Falsch. § 929 S. 1 verlangt Einigung und Übergabe. Die Übergabe soll erst morgen stattfinden.'],
 ['Beide gemeinsam, weil K bereits bezahlt hat und S noch Besitzerin ist (§ 1008).', 'Falsch. Miteigentum entsteht nicht durch Zahlung. Es fehlt jede Grundlage für Bruchteilseigentum.'],
 ['S, weil die Übergabe des Laptops noch fehlt; K hat nur das Geld übereignet (§ 929 S. 1).', 'Richtig. K hat S das Geld übereignet (Einigung + Übergabe), S ist also Eigentümerin der 150 EUR. Beim Laptop fehlt die Übergabe, er gehört bis morgen weiter S.'],
 ['K, weil S den Laptop für ihn verwahrt und K dadurch mittelbarer Besitzer ist (§ 930).', 'Falsch. Ein Besitzmittlungsverhältnis wurde nicht vereinbart. S soll den Laptop einfach morgen übergeben.'],
 ['Niemand, weil der Kaufvertrag erst mit der Übergabe zustande kommt (§ 145).', 'Falsch. Der Kaufvertrag ist schon geschlossen. Nur die Übereignung des Laptops steht noch aus.']]),
Q('vs', 'Viktor hat seine Bachelor-Arbeit abgeschlossen und möchte sein Notebook verkaufen. Er postet ein Foto des Geräts auf dem Schwarzen Brett in NINE und bietet es für 450 EUR zum Kauf an. Klara teilt Viktor mit, dass sie das Notebook kaufen möchte. Viktor ist einverstanden, die beiden verabreden sich zur Übergabe. Erst bei der Übergabe merkt Viktor, dass er sich vertippt hat: Er wollte 540 EUR. Klara sieht, dass das Notebook viel mehr Kratzer hat als auf dem Bild erkennbar.', 'Welche Aussage trifft zu?', 1, [
 ['Kein Kaufvertrag, weil Viktor 540 EUR gewollt hat und Wille und Erklärung auseinanderfallen (§ 155).', 'Falsch. Maßgeblich ist der objektive Empfängerhorizont (§§ 133, 157). Klara durfte 450 EUR verstehen.'],
 ['Kaufvertrag über 450 EUR; Viktor kann wegen Erklärungsirrtums anfechten (§ 119 I Alt. 2).', 'Richtig. Vertippen = Erklärungsirrtum. Bis zur Anfechtung gilt der Vertrag zu 450 EUR.'],
 ['Kein Kaufvertrag, weil Klara ein so zerkratztes Notebook gar nicht kaufen wollte (§ 119 II).', 'Falsch. Der Zustand ist eine Frage der Mängelrechte bzw. Anfechtung, nicht des Vertragsschlusses.'],
 ['Kaufvertrag über 540 EUR, weil der wirkliche Wille des Erklärenden maßgeblich ist (§ 133).', 'Falsch. Bei empfangsbedürftigen Erklärungen gilt der objektive Empfängerhorizont, nicht der innere Wille.'],
 ['Kein Kaufvertrag, weil ein Post am Schwarzen Brett nie ein bindendes Angebot sein kann (§ 145).', 'Falsch. Selbst bei bloßer invitatio kommt der Vertrag durch Klaras Angebot und Viktors Annahme zustande.'],
 ['Kaufvertrag über 495 EUR, weil die Abweichung im Zweifel hälftig zu teilen ist (§ 157).', 'Falsch. Eine solche Teilungsregel gibt es nicht. Es gilt der objektiv erklärte Preis.']]),
Q('vs', 'Influencer Ingolf (Verbraucher) erhält von der Firma Singsang unaufgefordert ein Paar hochwertige Kopfhörer. Im beiliegenden Schreiben heißt es: „Wenn Sie die Kopfhörer behalten, gehen wir von einem Kauf zu 249 € aus.“ Ingolf legt die Kopfhörer in den Schrank und meldet sich nicht.', 'Wie ist die Rechtslage?', 4, [
 ['Ein Kaufvertrag ist zustande gekommen, weil Ingolf durch Behalten konkludent angenommen hat (§ 151).', 'Falsch. § 241a geht als lex specialis vor. Bloßes Behalten begründet keinen Vertrag.'],
 ['Ingolf muss die Kopfhörer auf Kosten von Singsang zurücksenden, sonst haftet er (§ 241a II).', 'Falsch. Ingolf muss nicht aktiv werden. Singsang kann die Sache allenfalls selbst abholen.'],
 ['Ein Vertrag kommt zustande, weil Schweigen unter Bekannten als Zustimmung gilt (§ 362 HGB).', 'Falsch. Ingolf ist Verbraucher und nicht Geschäftsbesorger. Schweigen ist grundsätzlich keine Erklärung.'],
 ['Ingolf muss 249 € zahlen, weil er Besitzer geworden ist und die Sache nutzen kann (§ 854).', 'Falsch. Besitz begründet keine Zahlungspflicht. Ohne Vertrag gibt es keinen Kaufpreisanspruch.'],
 ['Kein Vertrag; Ingolf ist auch nicht verpflichtet, die unbestellten Kopfhörer zurückzuschicken (§ 241a I).', 'Richtig. Influencer-Fall: § 241a schützt Verbraucher vor unbestellten Lieferungen.'],
 ['Kein Vertrag, aber Ingolf muss innerhalb von 14 Tagen widersprechen (§ 355 II).', 'Falsch. Eine Widerspruchspflicht besteht nicht. § 355 regelt den Widerruf geschlossener Verträge.']]),
Q('vs', 'Sie suchen online Fußballschuhe bei einem Sportartikelhersteller. Um sicherzugehen, dass Sie die Schuhe zurückgeben können, klicken Sie auf „Widerrufsbelehrung“, landen aber nur auf der Fehlermeldung „Diese Seite wurde nicht gefunden.“ Dennoch klicken Sie am 12.11. auf „zahlungspflichtig bestellen“ und erhalten eine Bestellbestätigung per E-Mail. Die Schuhe kommen kommentarlos am 15.11. an. Am 1.12. möchten Sie die Schuhe zurücksenden.', 'Welche Aussage trifft zu?', 2, [
 ['Der Kaufvertrag ist nicht wirksam zustande gekommen, weil die Belehrung fehlte (§ 312d I).', 'Falsch. Fehlende Informationen hindern den Vertragsschluss nicht. Sie verlängern die Widerrufsfrist.'],
 ['Die Widerrufsfrist ist am 1.12. abgelaufen, weil seit Erhalt der Ware mehr als 14 Tage vergangen sind (§ 356 II).', 'Falsch. Ohne ordnungsgemäße Belehrung beginnt die Frist gar nicht (§ 356 III 1).'],
 ['Sie können am 1.12. noch widerrufen, weil die Frist ohne Belehrung nicht beginnt (§ 356 III).', 'Richtig. Höchstfrist: 12 Monate und 14 Tage ab Erhalt der Ware (§ 356 III 2).'],
 ['Sie haben Anspruch auf Umtausch der Schuhe gegen dasselbe Modell in anderer Größe (§ 355 I).', 'Falsch. Das Widerrufsrecht gibt kein Umtauschrecht. Ein Umtausch ist nur freiwillige Kulanz.'],
 ['Ein Widerruf ist ausgeschlossen, weil Schuhe nach Maß angefertigte Ware sind (§ 312g II Nr. 1).', 'Falsch. Serienschuhe in einer Standardgröße sind keine Anfertigung nach Kundenspezifikation.'],
 ['Der Widerruf ist nur wirksam, wenn Sie ihn schriftlich mit Unterschrift erklären (§ 126 I).', 'Falsch. Der Widerruf ist formfrei; eine eindeutige Erklärung genügt (§ 355 I 2, 3).']]),
Q('vs', 'Amirs Hund Bruno ist weggelaufen. Amir hängt an Bäumen Zettel auf: „Hund vermisst! … Wenn Sie Bruno gefunden haben, rufen Sie mich bitte an. Finderlohn: 200 EURO.“ Das postet er auch auf Facebook. Theresa findet Bruno, kennt aber weder Aushang noch Post. Ihre Freundin Natalia hat den Aushang gesehen und erzählt davon. Theresa ruft Amir an, der den Hund glücklich abholt.', 'Hat Theresa Anspruch auf 200 EUR?', 0, [
 ['Ja, Auslobung als nicht empfangsbedürftige WE; Kenntnis der Finderin ist nicht nötig (§ 657).', 'Richtig. Weiden-Fall: Die Auslobung wird mit Abgabe wirksam, der Lohn steht auch Unwissenden zu.'],
 ['Nein, weil Theresa beim Finden die Auslobung nicht kannte und deshalb nicht annehmen konnte (§ 151).', 'Falsch. Die Auslobung ist kein Vertragsangebot. § 657 a. E. stellt gerade auf Kenntnis nicht ab.'],
 ['Nein, weil die Zettel nur eine unverbindliche invitatio ad offerendum sind (§ 145).', 'Falsch. Amir verspricht öffentlich eine Belohnung für eine Handlung. Das ist eine bindende Auslobung.'],
 ['Ja, aber nur 5 % des Hundewerts als gesetzlicher Finderlohn, die Auslobung ist unwirksam (§ 971).', 'Falsch. Die wirksame Auslobung geht dem gesetzlichen Finderlohn vor. Theresa erhält 200 EUR.'],
 ['Nein, weil eine Auslobung nur gilt, wenn sie dem Finder vor dem Finden zugeht (§ 130 I).', 'Falsch. Die Auslobung ist nicht empfangsbedürftig. Zugang ist nicht erforderlich.'],
 ['Ja, aber nur, wenn Theresa den Facebook-Post vorher kommentiert hat (§ 147).', 'Falsch. Eine Reaktion auf den Post ist nicht nötig. Es genügt, die ausgelobte Handlung vorzunehmen.']]),
Q('vs', 'Bettina fragt Uhrmacher Uwe per E-Mail, ob er ihre wertvolle Uhr für 200 EUR repariert. Am selben Tag um 23 Uhr schreibt Uwe: „Ich repariere die Uhr für 200 EUR.“ Bettina liest die E-Mail um 23.30 Uhr und antwortet kurz „Ok“. Nachts ärgert sich Uwe und schreibt um 3.30 Uhr: „Die Reparatur kostet doch 350 EUR.“', 'Hat Bettina Anspruch auf Reparatur für 200 EUR?', 5, [
 ['Nein, die Mail um 23 Uhr ging erst morgens zu, gleichzeitig mit dem Widerruf (§ 130 I 2).', 'Falsch. Bettina hat die Mail um 23.30 Uhr tatsächlich gelesen. Damit ist sie spätestens dann zugegangen.'],
 ['Nein, weil Uwe als Handwerker an Angebote nach Feierabend nicht gebunden ist (§ 145).', 'Falsch. Eine solche Ausnahme gibt es nicht. Uwe hat das Angebot von Bettina angenommen.'],
 ['Ja, aber nur, wenn Bettina die Uhr noch vor 3.30 Uhr bei Uwe abgegeben hat (§ 631).', 'Falsch. Der Vertragsschluss hängt nicht von der Übergabe der Uhr ab.'],
 ['Nein, weil ein Werkvertrag über eine wertvolle Uhr schriftlich geschlossen werden muss (§ 126).', 'Falsch. Werkverträge sind formfrei. Die E-Mails genügen.'],
 ['Ja, aber nur zu 275 EUR, weil die beiden Preise im Dissens gemittelt werden (§ 155).', 'Falsch. Es gibt keinen Dissens. Der Vertrag zu 200 EUR war schon geschlossen.'],
 ['Ja, Uwes Annahme ging um 23.30 Uhr zu; der spätere Widerruf ist wirkungslos (§ 130 I 2).', 'Richtig. Weiden-Fall: Uwe kann sich nicht darauf berufen, dass normalerweise erst morgens gelesen wird.']]),
Q('agb', 'Kurt kauft im Autohaus Vollmer einen Neuwagen für 15.700 €. Mit den übrigen Vertragsunterlagen erklärt er sich durch Unterschrift mit den AGB einverstanden. Ziff. 18 lautet: „Liegen zwischen Vertragsschluss und Auslieferung mehr als 3 Monate, dann ist der zur Zeit der Auslieferung gültige Listenpreis zu zahlen.“ Nach 4 Monaten wird geliefert. V verlangt unter Verweis auf den neuen Listenpreis 16.800 €.', 'Zu Recht?', 3, [
 ['Ja, Kurt hat die AGB unterschrieben und die Preisanpassung damit akzeptiert (§ 305 II).', 'Falsch. Die Einbeziehung macht die Klausel nicht wirksam. Die Inhaltskontrolle folgt danach.'],
 ['Ja, weil erst nach mehr als 3 Monaten geliefert wurde und die Klausel greift (§ 305b).', 'Falsch. § 309 Nr. 1 verbietet Preiserhöhungen für Lieferungen binnen 4 Monaten nach Vertragsschluss.'],
 ['Nein, der gesamte Kaufvertrag ist wegen der unwirksamen Preisanpassungsklausel nichtig (§ 139).', 'Falsch. Bei AGB bleibt der Vertrag im Übrigen wirksam (§ 306 I). Nur die Klausel fällt weg.'],
 ['Nein, nur 15.700 €; die Klausel verstößt gegen § 309 Nr. 1 und ist unwirksam (§ 306 I).', 'Richtig. Weiden-Fall: kurzfristige Preisanpassung innerhalb von 4 Monaten ist ohne Wertung unwirksam.'],
 ['Nein, aber nur, weil die Klausel für Kurt persönlich überraschend war (§ 305c I).', 'Falsch. Preisanpassungsklauseln sind im Autohandel nicht ungewöhnlich. Der Verstoß folgt aus § 309 Nr. 1.'],
 ['Ja, aber nur die Hälfte der Erhöhung, weil das Risiko steigender Preise geteilt wird (§ 313 I).', 'Falsch. Eine Preissteigerung ist kein Wegfall der Geschäftsgrundlage. Es gilt der vereinbarte Preis.']]),
Q('agb', 'An einer Tankstelle hängt im Kassenbereich ein Schild: „(1) Der Waschanlagenunternehmer haftet für Schäden, die er durch Anwendung der erforderlichen Sorgfalt hätte abwenden können. (2) Eine Haftung für die Beschädigung außen angebrachter Teile wie Zierleisten, Spiegel, Antennen sowie dadurch verursachte Lack- und Schrammschäden bleibt ausgeschlossen, es sei denn, den Unternehmer trifft grobes Verschulden.“', 'Ist Absatz 2 wirksam?', 1, [
 ['Nein, weil er gegen § 309 Nr. 7 a) verstößt, der jeden Haftungsausschluss verbietet (§ 309).', 'Falsch. § 309 Nr. 7 a) betrifft Leben, Körper, Gesundheit. Hier geht es nur um Sachschäden.'],
 ['Nein; zwar nicht nach § 309 Nr. 7, wohl aber wegen unangemessener Benachteiligung (§ 307 I).', 'Richtig. BGH: Schadensprävention liegt in der Sphäre des Betreibers. Die Klausel scheitert an § 307 I.'],
 ['Ja, weil die Haftung für grobes Verschulden erhalten bleibt und das genügt (§ 309 Nr. 7 b).', 'Falsch. § 309 ist eingehalten. Aber § 307 I prüft zusätzlich die unangemessene Benachteiligung.'],
 ['Nein, weil ein Schild an der Kasse nie in einen Vertrag einbezogen werden kann (§ 305 II).', 'Falsch. Ein gut sichtbarer Aushang am Ort des Vertragsschlusses kann genügen (§ 305 II Nr. 1).'],
 ['Ja, weil der Kunde die Waschanlage freiwillig nutzt und das Risiko von Lackschäden kennt (§ 254).', 'Falsch. Freiwilligkeit rechtfertigt keine unangemessene Klausel. § 254 betrifft das Mitverschulden.'],
 ['Ja, weil Tankstellen gegenüber Verbrauchern keiner AGB-Kontrolle unterliegen (§ 310 I).', 'Falsch. § 310 I schränkt die Kontrolle gegenüber Unternehmern ein, nicht gegenüber Verbrauchern.']]),
Q('agb', 'Influencer Ingolf (Unternehmer) schließt mit dem Sportartikelhersteller RUN einen Werbevertrag auf Basis der AGB von RUN. Darin enthalten: ein Wettbewerbsverbot für andere Sportmarken und eine Vertragsstrafe, die mehr als dreimal so hoch ist wie branchenüblich. Ingolf war von beidem überrascht.', 'Wie ist die Vertragsstrafe zu beurteilen?', 4, [
 ['Unwirksam nach § 309 Nr. 6, weil Vertragsstrafen in AGB generell verboten sind.', 'Falsch. § 309 gilt gegenüber Unternehmern nicht (§ 310 I 1). Vertragsstrafen sind auch nicht generell verboten.'],
 ['Nicht Vertragsbestandteil, weil Ingolf persönlich überrascht war (§ 305c I).', 'Falsch. Maßgeblich ist, ob die Klausel objektiv ungewöhnlich ist. Vertragsstrafen sind im Geschäftsverkehr üblich.'],
 ['Wirksam, weil Ingolf als Unternehmer überhaupt keine AGB-Kontrolle genießt (§ 310 I).', 'Falsch. § 307 gilt auch gegenüber Unternehmern. Nur §§ 308, 309 sind ausgeschlossen.'],
 ['Wirksam, weil ein Druckmittel für vertragsgemäßes Verhalten immer angemessen ist (§ 339).', 'Falsch. Grundsätzlich zulässig, aber nicht in jeder Höhe. Das Dreifache des Üblichen ist unangemessen.'],
 ['Unwirksam, weil sie mehr als dreimal so hoch wie üblich ist (§ 307 I).', 'Richtig. Weiden-Fall: § 309 scheidet nach § 310 I aus, aber § 307 I greift. Folge § 306 I.'],
 ['Wirksam, aber das Gericht setzt sie auf das Übliche herab (geltungserhaltende Reduktion, § 343).', 'Falsch. Bei AGB gibt es keine geltungserhaltende Reduktion. Die Klausel fällt vollständig weg.']]),
Q('lst', 'Knut will vom vorweihnachtlichen Kaufrausch profitieren und mietet ein leerstehendes Ladengeschäft für die Zeit vom 1.11. bis zum 31.12. Im Juli bestellt er bei Veronika mehrere Paletten Weihnachtsschmuck aus dem Erzgebirge, die er sofort bezahlt. Liefertermin ist der 1.11. Veronika hat Lieferprobleme und liefert erst am 10.12.', 'Welche Art von Rechtsgeschäft liegt in Bezug auf die Leistungszeit vor?', 2, [
 ['Absolutes Fixgeschäft, weil der Schmuck ab dem 1.11. für Knut wertlos ist (§ 275 I).', 'Falsch. Am 10.12. kann Knut den Schmuck noch drei Wochen verkaufen. Die Leistung ist nachholbar.'],
 ['Gar kein Fixgeschäft, weil im Vertrag kein „fix“ steht und deshalb nur § 271 I gilt.', 'Falsch. Es wurde ein fester Termin vereinbart, dessen Einhaltung für Knut erkennbar wesentlich war.'],
 ['Relatives Fixgeschäft: Termin wesentlich, aber nachholbar – es gilt Verzugsrecht (§§ 286, 323 II Nr. 2).', 'Richtig. Weiden-Fall: Anders als die Hochzeitstorte bleibt der Schmuck bis Weihnachten verkäuflich.'],
 ['Absolutes Fixgeschäft, weil Knut den Schmuck schon im Voraus bezahlt hat (§ 326 IV).', 'Falsch. Die Vorauszahlung sagt nichts über die Art der Leistungszeit. Sie ist hier ohne Bedeutung.'],
 ['Handelskauf mit Gefahrübergang bei Bestellung, Knut trägt das Verspätungsrisiko (§ 447).', 'Falsch. § 447 betrifft den zufälligen Untergang beim Versand, nicht die verspätete Lieferung.'],
 ['Dauerschuldverhältnis wie die Ladenmiete, das Knut aus wichtigem Grund kündigen kann (§ 314).', 'Falsch. Der Kauf von Weihnachtsschmuck ist ein einmaliger Austausch, kein Dauerschuldverhältnis.']]),
Q('lst', 'Kurt fragt bei Victor nach einem Buch über Gartenpflege zum Sonderpreis von 30 €. Victor sagt zu, es baldmöglichst, spätestens innerhalb einer Woche zuzusenden; Kurt bezahlt. Victor schickt das Buch versehentlich an einen anderen Kunden. Zwei Wochen später ruft Kurt an: Wenn das Buch nicht binnen drei Tagen komme, kaufe er es woanders. Fünf Tage danach ist es noch nicht da. Kurt kauft es für 35 € in einem anderen Laden und verlangt Schadensersatz.', 'Welche Aussage trifft zu?', 5, [
 ['Durch den Versand hat Victor erfüllt und ist von der Leistungspflicht frei (§ 362 I).', 'Falsch. Das Buch ging an einen anderen Kunden. An Kurt wurde nichts geleistet, keine Erfüllung.'],
 ['Kurt hat einen nicht behebbaren Schaden, der ohne Frist nach § 280 I zu ersetzen ist (§ 280 I).', 'Falsch. Der Mehrpreis wäre bei rechtzeitiger Lieferung entfallen. Er ist behebbar, also § 281.'],
 ['Kurt muss Victor zunächst schriftlich mahnen, sonst hat er keine Ansprüche (§ 286 I).', 'Falsch. Die Mahnung ist formfrei, der Anruf genügt. Zudem war ein Termin bestimmt.'],
 ['Kurt kann die 30 € nicht zurückfordern, weil er den Vertrag nicht vorher fristlos gekündigt hat (§ 314).', 'Falsch. Kurt verlangt Schadensersatz statt der Leistung. Kündigung passt nur für Dauerschuldverhältnisse.'],
 ['Nur Verzögerungsschaden, weil Victor das Versehen gar nicht bemerkt hat (§ 286 IV).', 'Falsch. Das Versehen ist fahrlässig; das Vertretenmüssen wird ohnehin vermutet (§ 280 I 2).'],
 ['SE statt der Leistung nach Fristablauf, Ersatz für das Deckungsgeschäft (§§ 280 I, III, 281).', 'Richtig. Weiden-Fall: behebbarer Schaden, Frist von drei Tagen abgelaufen, Victor hat zu vertreten.']]),
Q('del', 'Rudi Raser verursacht fahrlässig einen Verkehrsunfall, bei dem der Kotflügel des Autos von Sergei Sorgfalt beschädigt wird. Sergei hat unstreitig einen Schadensersatzanspruch gegen Rudi. Rudi ist zufällig Kfz-Mechatroniker mit eigener Werkstatt und bietet an, das Auto selbst zu reparieren. Sergei will das Auto aber gar nicht reparieren lassen, weil ihn die Delle nicht stört, und verlangt den Betrag laut Kostenvoranschlag seiner Vertrauenswerkstatt.', 'Was kann Sergei verlangen?', 0, [
 ['Die fiktiven Kosten seiner Vertrauenswerkstatt ohne Umsatzsteuer (§ 249 II 2).', 'Richtig. Weiden-Fall: Keine Pflicht zur Reparatur; Umsatzsteuer nur, wenn sie tatsächlich anfällt.'],
 ['Nichts, weil er sich auf die Reparatur in Rudis Werkstatt einlassen muss (§ 249 I).', 'Falsch. Bei Sachbeschädigung darf der Geschädigte Geld statt Herstellung verlangen (§ 249 II 1).'],
 ['Nur den Betrag, den Rudi in seiner eigenen Werkstatt dafür berechnen würde (§ 254 II).', 'Falsch. Sergei darf die Werkstatt seines Vertrauens wählen. Das ist kein Verstoß gegen § 254 II.'],
 ['Die vollen Reparaturkosten einschließlich Umsatzsteuer, egal ob repariert wird (§ 249 II 1).', 'Falsch. Bei fiktiver Abrechnung schließt § 249 II 2 die Umsatzsteuer ausdrücklich aus.'],
 ['Nichts, weil ohne Reparatur kein Schaden entsteht und die Delle ihn nicht stört (§ 253 I).', 'Falsch. Der Vermögensschaden besteht im Wertverlust des Autos. Auf Sergeis Empfinden kommt es nicht an.'],
 ['Nur Schmerzensgeld wegen des Ärgers über den Unfall, weil kein Sachschaden vorliegt (§ 253 II).', 'Falsch. Es liegt ein Sachschaden vor. Schmerzensgeld setzt eine Körper- oder Gesundheitsverletzung voraus.']]),
Q('del', 'Herbert Hoch beauftragt die LieferLustig GmbH mit dem Transport eines wertvollen Bildes, das für ihn einen hohen ideellen Wert hat; er zahlt 300 EUR im Voraus. Durch eine Unachtsamkeit des eingesetzten Mitarbeiters wird das Bild beim Transport zerstört. Herbert verlangt Schadensersatz für den Wert des Bildes und ein angemessenes Schmerzensgeld für den ideellen Verlust.', 'Zu Recht?', 3, [
 ['Beides, weil bei vorsätzlicher oder fahrlässiger Zerstörung immer auch der ideelle Wert ersetzt wird (§ 253 II).', 'Falsch. § 253 II gilt nur bei Körper, Gesundheit, Freiheit, sexueller Selbstbestimmung.'],
 ['Nichts, weil der Mitarbeiter und nicht die GmbH gehandelt hat und sie sich entlasten kann (§ 831 I 2).', 'Falsch. Im Vertrag gilt § 278: Das Verschulden des Mitarbeiters wird der GmbH ohne Entlastung zugerechnet.'],
 ['Nur das Schmerzensgeld, weil der Sachwert bereits durch die Transportkosten abgegolten ist (§ 249 I).', 'Falsch. Die Transportkosten sind Gegenleistung für den Transport, kein Ersatz für das Bild.'],
 ['Den Wert des Bildes ja (§§ 280 I, 241 II, 251 I), Ersatz des ideellen Werts nein (§ 253 I).', 'Richtig. Weiden-Fall: Herstellung unmöglich → Geldersatz. Immaterielles nur in gesetzlich genannten Fällen.'],
 ['Nur die 300 EUR zurück, weil mehr als die Vergütung nie als Schaden ersetzt wird (§ 284).', 'Falsch. § 284 ersetzt vergebliche Aufwendungen statt SE. Herbert kann den vollen Sachwert verlangen.'],
 ['Nichts, weil Herbert das Bild hätte versichern müssen und deshalb voll mitverantwortlich ist (§ 254 I).', 'Falsch. Eine fehlende Versicherung ist kein Beitrag zur Entstehung des Schadens. § 254 greift nicht.']]),
Q('kauf', 'Kira Kunterbunt kauft für ihre Werbeagentur im Möbelhaus Viva das Regal „DesignX“. Beim Auspacken stellt sie fest, dass eine Seitenwand stark verkratzt ist. Sie reklamiert sofort. Viva schickt einen Mitarbeiter, der die Seitenwand austauscht. Danach sieht Kira, dass die neue Seitenwand ebenfalls völlig zerkratzt ist. Sie möchte sofort vom Vertrag zurücktreten.', 'Kann Kira zurücktreten?', 1, [
 ['Ja, weil die Nachbesserung fehlgeschlagen ist und eine Frist deshalb entbehrlich ist (§ 440 S. 1).', 'Falsch. Fehlgeschlagen ist eine Nachbesserung erst nach dem zweiten erfolglosen Versuch (§ 440 S. 2).'],
 ['Noch nicht; nach einem erfolglosen Versuch muss sie zuerst eine Frist setzen (§§ 323 I, 440 S. 2).', 'Richtig. Weiden-Fall: Solange Viva nacherfüllen will und keine Frist abgelaufen ist, kein Rücktritt.'],
 ['Ja, weil Kira Viva für völlig unfähig hält und ihr ein Festhalten unzumutbar ist (§ 440 S. 1 Alt. 3).', 'Falsch. Ein subjektives Misstrauen genügt nicht. Die Unzumutbarkeit muss objektiv begründet sein.'],
 ['Nein, aber sie kann sofort den Kaufpreis mindern, weil Minderung keine Frist voraussetzt (§ 441 I).', 'Falsch. Minderung ist nur „statt zurückzutreten“ möglich und verlangt dieselben Voraussetzungen.'],
 ['Nein, weil Kira als Unternehmerin den Mangel nicht unverzüglich nach Lieferung gerügt hat (§ 377 HGB).', 'Falsch. Kira hat sofort reklamiert. Ob sie Kauffrau ist, kann deshalb offen bleiben.'],
 ['Ja, weil Kratzer an einem Designregal immer ein erheblicher Mangel sind (§ 323 V 2).', 'Falsch. Die Erheblichkeit ist nicht das Problem. Es fehlt am Ablauf einer Frist oder am Fehlschlagen.']]),
Q('kauf', 'Klaus K kauft im Baumarkt den Roboter-Rasenmäher „Schneid3000“, der nur über eine App steuerbar ist. Der Hersteller wirbt: „Modernste Technik, vereint mit dem besten, langlebigen Klingensystem.“ Nach einigen Wochen lässt die Schneidkraft nach, der Rasen sieht zerrupft aus. K verlangt neue Klingen als „Aktualisierung“, weil der Mäher ein digitales Produkt sei. V meint, das Gerät sei bei Übergabe mangelfrei gewesen.', 'Wie ist die Rechtslage?', 4, [
 ['K hat Anspruch aus §§ 327f, 327i, weil der Mäher wegen der App ein digitales Produkt ist (§ 327 I).', 'Falsch. Die App ist funktionsnotwendig. Dann liegt eine Ware mit digitalen Elementen vor (§ 327a III).'],
 ['K hat keinen Anspruch, weil Werbeaussagen des Herstellers den Verkäufer nicht binden (§ 434 II).', 'Falsch. Öffentliche Äußerungen des Herstellers gehören zur objektiven Beschaffenheit (§ 434 III 1 Nr. 2 b).'],
 ['K hat keinen Anspruch, weil der Mangel erst nach Wochen auftrat und V die Mangelfreiheit beweisen kann (§ 446).', 'Falsch. Beim Verbrauchsgüterkauf wird ein Mangel im ersten Jahr als von Anfang an vorhanden vermutet (§ 477 I).'],
 ['K hat einen Anspruch auf neue Klingen über die Aktualisierungspflicht des Verkäufers (§ 475b IV Nr. 2).', 'Falsch. Die Aktualisierungspflicht betrifft nur die digitalen Elemente, nicht mechanische Klingen.'],
 ['Nacherfüllung aus Kaufrecht: Die Werbeaussage begründet einen Mangel, die Vermutung hilft K (§§ 434, 437 Nr. 1, 477 I).', 'Richtig. Weiden-Fall: Ware mit digitalen Elementen, Mangel bei Gefahrübergang wird vermutet.'],
 ['K hat einen Garantieanspruch gegen V, weil „langlebig“ eine Haltbarkeitsgarantie ist (§ 443).', 'Falsch. Haltbarkeit ist Teil der Beschaffenheit, aber keine Garantie. Garantiegeber wäre zudem der Hersteller.']]),
Q('anf', 'Rentner Richard sucht eine Hantelbank für seinen Keller. Er ruft bei einem Kaufhaus an und bestellt „wie nennt man das heutzutage? So eine Powerbank, bitte“. Man verständigt sich auf ein Modell in dunkelrot, besonders leistungsstark und leicht, für 119 € auf Rechnung. Drei Tage später erhält er ein überraschend kleines Päckchen mit einem Ladegerät. Er ruft gleich an und erklärt, er „widerrufe“ den Vertrag.', 'Muss Richard die 119 € zahlen?', 2, [
 ['Ja, weil ein Vertrag über eine Powerbank geschlossen wurde und Irrtümer über Begriffe unbeachtlich sind.', 'Falsch. Richard irrte über die Bedeutung des Wortes. Das ist ein beachtlicher Inhaltsirrtum.'],
 ['Nein, weil beide eigentlich eine Hantelbank meinten und falsa demonstratio gilt (§ 133).', 'Falsch. Die Mitarbeiterin verstand objektiv eine Ladestation. Ein gemeinsamer Wille fehlt.'],
 ['Nein, die „Widerrufserklärung“ ist als Anfechtung wegen Inhaltsirrtums auszulegen (§ 119 I).', 'Richtig. Weiden-Fall: Vertrag über Powerbank, aber anfechtbar. Das Kaufhaus erhält ggf. § 122.'],
 ['Nein, weil ein telefonischer Kauf nie wirksam ist, wenn dieser Vertriebsweg nicht vorgesehen ist (§ 125).', 'Falsch. Kaufverträge sind formfrei. Auch ein unüblicher Vertriebsweg hindert den Vertrag nicht.'],
 ['Ja, aber er kann wegen Eigenschaftsirrtums über die Leistungsstärke anfechten (§ 119 II).', 'Falsch. Richard irrt nicht über Eigenschaften der Powerbank, sondern darüber, was das Wort bedeutet.'],
 ['Nein, weil Richard als Rentner Verbraucher ist und jeder Kauf ohne Grund nichtig ist (§ 13).', 'Falsch. Verbraucherstatus macht Verträge nicht nichtig. Es kommt auf die Anfechtung an.']]),
Q('sr', 'Webdesigner Woycek kauft im Mai 2022 beim Händler Burga einen gebrauchten Plotter für 12.000 EUR, beschrieben als „neuwertig, ohne größere Schäden oder Reparaturen“. Woycek zögert Wartungen hinaus, um Kosten zu sparen. Bei der Wartung im Januar 2023 zeigt sich, dass der Plotter schon vor der Übergabe aus großer Höhe gefallen war und Nicht-Original-Ersatzteile enthält. Woycek tritt zurück. Burga will die verspätete Wartung (Wertminderung 2.000 EUR) und die sechsmonatige Nutzung anrechnen.', 'Was kann Woycek verlangen?', 0, [
 ['12.000 EUR abzüglich Nutzungsersatz, aber ohne Abzug für die späte Wartung (§ 346 I, III Nr. 3).', 'Richtig. Weiden-Fall: Nacherfüllung unmöglich, Rücktritt ohne Frist. Eigenübliche Sorgfalt schützt W.'],
 ['12.000 EUR ohne jeden Abzug, weil der Händler den Mangel verursacht hat (§ 346 I).', 'Falsch. Gezogene Nutzungen sind herauszugeben bzw. zu vergüten (§ 346 I a. E., II Nr. 1).'],
 ['10.000 EUR minus Nutzungen, weil die verspätete Wartung voll anzurechnen ist (§ 346 II Nr. 3).', 'Falsch. Grundsätzlich ja, aber § 346 III Nr. 3 entlastet bei Sorgfalt in eigenen Angelegenheiten.'],
 ['Nichts, weil er Burga zuvor keine Frist zur Nacherfüllung gesetzt hat (§ 323 I).', 'Falsch. Unfallfreiheit lässt sich nicht nachholen. Die Frist ist entbehrlich (§ 326 V).'],
 ['Nur Minderung, weil ein Rücktritt bei gebrauchten Sachen ausgeschlossen ist (§ 441).', 'Falsch. Auch bei gebrauchten Sachen ist der Rücktritt möglich. Einen solchen Ausschluss gibt es nicht.'],
 ['Nichts, weil der Rücktritt erst nach 8 Monaten erklärt und damit verfristet ist (§ 121 I).', 'Falsch. § 121 gilt für die Anfechtung. Für Mängelrechte gilt die Verjährung des § 438, hier noch nicht abgelaufen.']]),
Q('frist', 'Vitus hat Kathrin Katzenfutter geliefert, zahlbar sofort nach Wareneingang. Mit Schreiben vom 10.4., das Kathrin am 12.4. zugeht, mahnt Vitus zum zweiten Mal und setzt eine Frist von 10 Tagen. Der 22.4. ist ein Werktag.', 'Wann endet die Frist?', 1, [
 ['Am 23.4. um 24 Uhr, weil der Zugangstag und der Folgetag nicht mitgezählt werden (§ 187 II).', 'Falsch. § 187 II gilt nur, wenn der Beginn eines Tages maßgeblich ist. Hier zählt ein Ereignis.'],
 ['Am 22.4. um 24 Uhr; der Zugangstag zählt nicht mit (§§ 187 I, 188 I).', 'Richtig. Weiden-Übung: Frist beginnt am 13.4. und endet mit Ablauf des 22.4.'],
 ['Am 21.4. um 24 Uhr, weil der Zugangstag als erster Tag mitgezählt wird (§ 187 II).', 'Falsch. Bei einem Ereignis wie dem Zugang zählt dieser Tag nicht mit (§ 187 I).'],
 ['Am 20.4. um 24 Uhr, weil die Frist ab dem Datum des Schreibens am 10.4. läuft (§ 130 I).', 'Falsch. Eine Mahnung wird erst mit Zugang wirksam. Maßgeblich ist der 12.4.'],
 ['Am 24.4. um 24 Uhr, weil Fristen immer auf den nächsten Werktag verlängert werden (§ 193).', 'Falsch. § 193 greift nur bei Fristende an Samstag, Sonntag oder Feiertag. Der 22.4. ist ein Werktag.'],
 ['Am 22.4. um 18 Uhr, weil Fristen gegenüber Kaufleuten mit Geschäftsschluss enden (§ 358 HGB).', 'Falsch. Fristen enden mit dem Ablauf des letzten Tages (§ 188 I). § 358 HGB betrifft die Leistungszeit.']]),
Q('frist', 'Am 31.1.2023 (Mittwoch) kauft Karl von Veronika einen Neuwagen.', 'Wann verjähren die Ansprüche auf Lieferung und auf Zahlung des Kaufpreises?', 3, [
 ['Am 31.1.2026 um 24 Uhr, weil drei Jahre ab Vertragsschluss gerechnet werden (§§ 195, 188 II).', 'Falsch. Die Regelverjährung beginnt nicht am Tag der Entstehung, sondern am Jahresende (§ 199 I).'],
 ['Am 30.1.2026 um 24 Uhr, weil der Tag des Vertragsschlusses mitgezählt wird (§ 187 II).', 'Falsch. Auf die Tagesberechnung kommt es nicht an. Die Frist beginnt mit Schluss des Jahres.'],
 ['Am 1.1.2026 um 24 Uhr, weil die Frist am ersten Tag des neuen Jahres beginnt (§ 199 I).', 'Falsch. Die Frist beginnt mit Schluss des 31.12.2023 und endet mit Ablauf des 31.12.2026.'],
 ['Am 31.12.2026 um 24 Uhr: drei Jahre ab Schluss des Jahres 2023 (§§ 195, 199 I).', 'Richtig. Weiden-Übung: Ultimo-Verjährung – Anspruch entstanden 2023, Kenntnis vorhanden.'],
 ['Am 31.1.2025, weil Ansprüche aus Kaufverträgen in zwei Jahren verjähren (§ 438 I Nr. 3).', 'Falsch. § 438 gilt für Mängelansprüche. Lieferung und Kaufpreis verjähren nach §§ 195, 199.'],
 ['Am 31.12.2053, weil Ansprüche auf Herausgabe einer Sache in 30 Jahren verjähren (§ 197 I Nr. 2).', 'Falsch. § 197 I Nr. 2 betrifft Herausgabe aus Eigentum, nicht den Lieferanspruch aus Kauf.']]),
Q('del', 'Holzfäller Herbert fällt auf einem Privatgrundstück eine uralte Eiche von 12 m Höhe. Durch grobe Unachtsamkeit fällt der Baum früher als vorhergesehen und kracht auf den Wintergarten des Nachbarn Norbert. Der Wintergarten ist irreparabel beschädigt.', 'Welche Aussage trifft zu?', 5, [
 ['N hat keine Ansprüche gegen H, weil zwischen ihnen kein Vertrag besteht (§ 241 I).', 'Falsch. Deliktsansprüche setzen keinen Vertrag voraus. § 823 I gilt gegenüber jedermann.'],
 ['N kann die Kosten für einen neuen, zeitgemäßen Wintergarten von H verlangen (§ 249 I).', 'Falsch. Ersetzt wird der Schaden, nicht eine Verbesserung. Ein moderner Neubau wäre mehr als der Verlust.'],
 ['N kann den Wert der Eiche verlangen, weil H keine Fällgenehmigung eingeholt hat (§ 823 II).', 'Falsch. Die Eiche gehört nicht N. Er ist nur in seinem Eigentum am Wintergarten verletzt.'],
 ['N kann nur die Hälfte verlangen, weil ein Wintergarten an der Grenze Mitverschulden ist (§ 254 I).', 'Falsch. Für einen Verursachungsbeitrag des N gibt es im Sachverhalt keinen Anhaltspunkt.'],
 ['N kann von H nur Schmerzensgeld verlangen, weil er sich sehr erschreckt hat (§ 253 II).', 'Falsch. Ein Schreck ist keine Gesundheitsverletzung. N hat einen Sachschaden erlitten.'],
 ['N kann Wertersatz und die Kosten für den Abtransport des Schutts von seinem Grundstück verlangen (§§ 823 I, 251 I).', 'Richtig. Weiden-Fall: Herstellung unmöglich → Geldersatz plus Folgekosten.']]),
Q('lst', 'B lässt seinen Neuwagen in der Tuningwerkstatt des U motortunen. U betraut seinen Angestellten A mit der Durchführung. A setzt sich mit seiner ölverschmierten Arbeitskleidung auf die Wildledersitze. Da eine Reinigung nicht möglich ist, müssen die Sitze neu bezogen werden; das kostet beim Hersteller 8.000 EUR.', 'Kann B von U die 8.000 EUR verlangen?', 2, [
 ['Ja, aus §§ 631, 633, 634 Nr. 4, 280 I, weil das Werk des U mangelhaft ist (§ 633).', 'Falsch. Geschuldet war das Motortuning, und das ist mangelfrei. Die Sitze waren nicht Gegenstand des Werks.'],
 ['Nein, weil nicht U, sondern A die Sitze beschädigt hat und U sich entlasten kann (§ 831 I 2).', 'Falsch. Im Vertrag gilt § 278: Das Verschulden des A wird U ohne Entlastungsmöglichkeit zugerechnet.'],
 ['Ja, aus §§ 280 I, 241 II, weil U sich das Verschulden des A zurechnen lassen muss (§ 278).', 'Richtig. Weiden-Fall: Schutz- und Obhutspflichten am überlassenen Auto, Zurechnung über § 278.'],
 ['Nein, B muss sich direkt an A halten, weil nur dieser gehandelt hat (§ 823 I).', 'Falsch. Ein Anspruch gegen A schließt die vertragliche Haftung des U nicht aus.'],
 ['Ja, aber nur nach erfolgloser Fristsetzung zur Reinigung der Sitze durch U (§ 281 I).', 'Falsch. Eine Reinigung ist unmöglich, und es geht um SE neben der Leistung. Eine Frist ist nicht nötig.'],
 ['Nein, weil 8.000 EUR unverhältnismäßig sind und B billiger reparieren lassen muss (§ 251 II).', 'Falsch. § 251 II betrifft unverhältnismäßige Herstellungskosten. Ein Neubezug der Sitze ist das nicht.']]),
Q('sach', 'Erwin vermietet sein Motorrad an Bettina für Juni und Juli zu 400 EUR/Monat und übergibt es am 1. Juni. Weil er im Juli überraschend viel Zeit hat und das Wetter schön ist, fordert er am 5. Juli die Herausgabe, um selbst einen Ausflug zu machen.', 'Kann Erwin Herausgabe nach § 985 verlangen?', 4, [
 ['Ja, Erwin ist Eigentümer und Bettina Besitzerin; mehr verlangt § 985 nicht (§ 985).', 'Falsch. Der Anspruch scheitert, wenn der Besitzer ein Recht zum Besitz hat (§ 986 I).'],
 ['Ja, weil Bettina durch die Übergabe Eigentümerin wurde und zurückübereignen muss (§ 929).', 'Falsch. Erwin und Bettina haben sich nicht über den Eigentumsübergang geeinigt. Erwin bleibt Eigentümer.'],
 ['Nein, weil Bettina als bloße Besitzdienerin gar keine Besitzerin ist (§ 855).', 'Falsch. Bettina ist Mieterin mit eigener tatsächlicher Gewalt, also unmittelbare Besitzerin (§ 854 I).'],
 ['Ja, weil der Vermieter bei eigenem Bedarf jederzeit fristlos kündigen kann (§ 543).', 'Falsch. Eigenbedarf für einen Ausflug ist kein wichtiger Grund. Der Vertrag ist bis Ende Juli befristet.'],
 ['Nein, Bettina darf aus dem Mietvertrag bis Ende Juli besitzen (§ 986 I).', 'Richtig. Weiden-Fall: Eigentum (+), Besitz (+), aber Recht zum Besitz aus Miete. Nach Mietende § 546 I.'],
 ['Nein, weil Erwin als mittelbarer Besitzer nur nach §§ 861, 862 vorgehen kann (§ 868).', 'Falsch. §§ 861, 862 schützen gegen verbotene Eigenmacht. Hier scheitert § 985 an § 986.']]),
Q('sach', 'Anna und Bernd einigen sich mündlich über den Verkauf von Bernds Grundstück am Waldsee mit Wochenendhaus für 300.000 EUR. In zwei Wochen soll beim Notar beurkundet werden. Anna überweist wie vereinbart schon 50.000 EUR Anzahlung. Zwei Tage vor dem Termin erklärt Bernd, er habe das Grundstück schon länger seinem Bruder versprochen, und „tritt zurück“.', 'Welche Ansprüche hat Anna?', 3, [
 ['Übereignung des Grundstücks aus dem Kaufvertrag, weil die Anzahlung den Formmangel heilt (§§ 433 I, 311b I 2).', 'Falsch. Heilung tritt erst durch Auflassung und Eintragung ein. Eine Anzahlung genügt nicht.'],
 ['Herausgabe des Grundstücks aus § 985, weil sie durch die Anzahlung Eigentümerin geworden ist (§ 985).', 'Falsch. Für Grundstückseigentum braucht es Auflassung und Eintragung (§§ 873, 925).'],
 ['Rückzahlung der 50.000 EUR aus § 985, weil sie Eigentümerin des überwiesenen Geldes geblieben ist.', 'Falsch. Bei einer Überweisung gibt es keine Geldscheine. Anna hatte nur einen Auszahlungsanspruch gegen die Bank.'],
 ['Nur Rückzahlung der 50.000 EUR aus § 812, weil der mündliche Vertrag formnichtig ist (§ 311b I 1).', 'Richtig. Weiden-Fall: Kein Anspruch auf das Grundstück, aber Leistungskondiktion der Anzahlung.'],
 ['Schadensersatz statt der Leistung, weil Bernd den Vertrag grundlos gebrochen hat (§§ 280 I, III, 281).', 'Falsch. Ohne wirksamen Vertrag besteht keine Leistungspflicht, die Bernd verletzen könnte.'],
 ['Nichts, weil Bernd wirksam zurückgetreten ist und die Anzahlung als Reugeld verfällt (§ 353).', 'Falsch. Ein Reugeld wurde nicht vereinbart. Mangels Vertrag kommt es auf den Rücktritt nicht an.']]),
Q('kauf', 'Rechtsanwalt R bestellt bei Weinhändler W 12 Flaschen Champagner für die Feier seines Kanzleijubiläums; W soll sie an die Kanzlei schicken. W übergibt einen ordentlich verpackten Karton mit den Flaschen an DHL. Auf dem Weg gehen die Flaschen ohne Verschulden des W zu Bruch. W verlangt den Kaufpreis.', 'Muss R zahlen?', 0, [
 ['Ja; R kauft als Unternehmer, die Preisgefahr ging mit Übergabe an DHL über (§ 447).', 'Richtig. Weiden-Fall: Kein Verbrauchsgüterkauf, daher gilt § 447. W ist frei, R muss trotzdem zahlen.'],
 ['Nein, weil die Gegenleistung bei Unmöglichkeit ausnahmslos entfällt (§ 326 I 1).', 'Falsch. § 447 ist eine Ausnahme von § 326 I. Die Preisgefahr ist bereits auf R übergegangen.'],
 ['Nein, weil beim Versendungskauf die Gefahr erst mit Erhalt der Ware übergeht (§ 475 II).', 'Falsch. § 475 II gilt nur beim Verbrauchsgüterkauf. R handelt für seine Kanzlei als Unternehmer.'],
 ['Nein, W muss neu liefern, weil Champagner eine Gattungsschuld ist (§ 243 I).', 'Falsch. Mit Übergabe an DHL ist die Schickschuld konkretisiert (§ 243 II). Danach ist W frei.'],
 ['Ja, aber nur zur Hälfte, weil das Transportrisiko zwischen beiden geteilt wird (§ 254).', 'Falsch. Eine Teilung kennt § 447 nicht. R trägt die volle Preisgefahr.'],
 ['Nein, weil W für Fehler von DHL als Erfüllungsgehilfe einstehen muss (§ 278).', 'Falsch. Beim Versendungskauf ist die Transportperson nicht Erfüllungsgehilfe des Verkäufers für den Transport.']])
];
{ const W = (window.WPRK_LONG = window.WPRK_LONG || []); L.forEach((q, i) => { const id = P + '-' + i; if (!W.some(x => x.id === id)) W.push({ ...q, id }); }); }
window.dispatchEvent(new Event('wpr-data'));
})();
