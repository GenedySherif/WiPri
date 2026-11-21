(function () {
const K = window.WPRK; if (!K || K.__vorl2) return; K.__vorl2 = 1;
const T = id => K.topics.find(t => t.id === id);
const add = (id, kern, schema, fallen, norms) => { const t = T(id); if (!t) return; t.kern.push(...(kern || [])); t.schema.push(...(schema || [])); t.fallen.push(...(fallen || [])); (norms || []).forEach(n => { if (!t.norms.includes(n)) t.norms.push(n); }); };

add('per', [
 'Rechtssubjekte :: Natürliche Person (§ 1, Geburt bis Tod), juristische Person (Verein §§ 21 ff., AG, GmbH – Beginn mit konstitutiver Registereintragung, Ende mit Löschung), Personengesellschaft (GbR §§ 705 ff., OHG § 105, KG § 161 HGB – Selbstorganschaft).',
 'Verbraucher § 13 :: Auch ein Unternehmer ist Verbraucher, wenn er als natürliche Person zu privaten Zwecken handelt.',
 'Verbrauchsgüterkauf § 474 :: Merkformel des Dozenten „b (VK) : c (K) über bewegliche Sache“. In der Klausur immer zuerst prüfen, bevor §§ 474 ff. angewendet werden.',
 'Namensrecht § 12 :: Persönlichkeitsrecht.'
], [], ['Grundstücke sind keine Ware i. S. d. § 474 – kein Verbrauchsgüterkauf.'], ['§ 12', '§ 21', '§ 474', '§ 705']);

add('sach', [
 'Sachen § 90 :: Körperliche Gegenstände; beweglich oder unbeweglich (Grundstücke). Vertretbar § 91 = Massenware; Spezialanfertigung meist nicht vertretbar. Sachgesamtheit: Bibliothek, Warenlager.',
 'Keine Sachen :: Computerdaten und -programme, der menschliche Körper, Tiere (§ 90a) – Sachregeln gelten dann analog.',
 'Rechte :: Dingliche Rechte (Eigentum) sind absolut, gelten gegenüber jedermann. Forderungen sind relativ, gelten nur zwischen Gläubiger und Schuldner. Vermögen = Summe aller geldwerten Sachen und Rechte, gesetzlich nicht definiert.',
 'Übertragung :: Bewegliche Sache § 929 (Einigung + Übergabe), Grundstück § 873 (Auflassung + Eintragung), Forderung § 398 (Abtretung, kein Realakt nötig).',
 'Trennungsprinzip :: Verpflichtungsgeschäft (Kauf § 433, Schenkung § 516) und Verfügungsgeschäft (Übereignung § 929 S. 1) sind rechtlich strikt getrennt. Beim Kauf: drei Verträge – Kaufvertrag, Übereignung der Sache, Übereignung des Geldes.',
 'Abstraktionsprinzip :: Beide Geschäfte sind in ihrer Wirksamkeit unabhängig. Wird der Kauf angefochten (§§ 142 I, 119 II), bleibt die Übereignung wirksam; Ausgleich über § 812 I 1.',
 'Ausnahme Fehleridentität :: Bei Geschäftsunfähigkeit (§ 105 I) sind schuldrechtliche und dingliche Einigung beide unwirksam.',
 'Forderungskauf :: Factoring = Kauf § 453 (Verpflichtung). Inhaber wird man erst durch die Abtretung § 398.',
 'Aufbau BGB :: AT §§ 1–240 (vor die Klammer gezogen), Schuldrecht §§ 241–853 (AT bis § 432, BT ab § 433; Person–Person), Sachenrecht §§ 854–1296 (Person–Sache), Familienrecht, Erbrecht.'
], [], ['Der Kaufvertrag allein ändert nichts am Eigentum – erst die Übereignung (§ 929 S. 1).', 'Mit dem Forderungskauf (§ 453) ist man noch nicht Gläubiger – erst mit der Abtretung (§ 398).'], ['§ 90', '§ 90a', '§ 91', '§ 873', '§ 453']);

add('typ', [
 'Rechtsgebiete :: Privatrecht (Gleichordnung, Vertrag §§ 145 ff.), öffentliches Recht (Über-/Unterordnung, Verwaltungsakt § 35 VwVfG), Strafrecht (Strafverfolgungsmonopol des Staates).',
 'Rechtsnorm :: Abstrakt (unbestimmte Vielzahl von Fällen), generell (unbestimmte Vielzahl von Personen), von befugten Organen erlassen, verkündet, notfalls mit Zwang durchsetzbar.',
 'Normenhierarchie :: EU-/Völkerrecht – Grundgesetz – Bundesgesetz – Bundes-RVO – Landesverfassung – Landesgesetz – Landes-RVO – Satzung. Ranghöheres geht vor; lex specialis vor lex generalis.',
 'Gerichte ab 1.1.2026 :: AG bis 10.000 € (und z. B. Miete, Familie), LG ab 10.000 € (und z. B. Arzthaftung, Medien). Berufung meist erst über 1.000 € Beschwer; Revision zum BGH nur mit Zulassung, nur rechtliche Prüfung.',
 'Gerichtsstand :: Grundsätzlich Wohn-/Geschäftssitz des Beklagten. Gerichtsstandsvereinbarung (auch in AGB) nur zwischen Kaufleuten wirksam § 38 I ZPO. Mahnverfahren §§ 688 ff. ZPO.',
 'Klausurhinweis :: Nur das BGB in Buchform ist erlaubt; handschriftlich dürfen keine Wörter hinzugefügt werden (sonst Unterschleif).'
], [], ['Seit 2026 liegt die Grenze AG/LG bei 10.000 €, nicht mehr bei 5.000 €.', 'Gerichtsstandsklausel in AGB gegenüber Verbrauchern ist unwirksam (§ 38 I ZPO).'], ['§ 38 ZPO', '§ 688 ZPO']);

add('lst', [
 'Leistungsgefahr :: Bei Befreiung nach § 275 trägt der Gläubiger die Leistungsgefahr, der Schuldner die Gegenleistungsgefahr (§ 326 I).',
 '§ 275 II :: Grobes Missverhältnis zwischen Aufwand und Gläubigerinteresse. Hat der Schuldner das Hindernis zu vertreten, ist ihm mehr zuzumuten (§ 275 II 2).',
 'Wegfall der Geschäftsgrundlage § 313 :: Umstand, der Grundlage wurde, ohne Vertragsinhalt zu sein, fehlt oder fällt weg. Erst Anpassung, nur wenn auch die unzumutbar ist: Rücktritt/Kündigung. Bsp. Rohstoffpreise im Krieg, Corona-Schließung → Mietherabsetzung.',
 'Abgrenzung § 275 II / § 313 :: § 275 II stellt auf das Interesse des Gläubigers ab, § 313 auf die Beschwerlichkeit für den Schuldner.',
 'Beschränkte Gattungsschuld :: Leistung nur aus einem bestimmten Vorrat (50 Zentner aus der diesjährigen Haferernte). Geht der Vorrat unter → § 275 I. Normale Gattungsschuld: erst wenn die ganze Gattung untergeht.',
 'Bringschuld-Beispiel :: Heizöllieferung. Absolutes Fixgeschäft: Arbeitsleistung eines Tages, Weihnachtsbäume nach Weihnachten.',
 'Geldmangel :: „Geld hat man zu haben“ – eine Geldleistung wird nie unmöglich; Vertretenmüssen entbehrlich.',
 'Vertretenmüssen entbehrlich :: Finanzielle Leistungsfähigkeit, Beschaffungsrisiko bei Gattungsschuld, Garantie, Zufallshaftung im Verzug § 287 S. 2. Milderung: Vertrag (Grenze § 276 III), §§ 690, 708, 277, Annahmeverzug § 300 I.',
 '§ 278 vs. § 831 :: § 278 ist Zurechnungsnorm (keine AGL), Gehilfe muss nicht weisungsgebunden sein, keine Entlastung möglich. § 831 ist eigene AGL, Verrichtungsgehilfe weisungsgebunden, Entlastung § 831 I 2.',
 'Drei Varianten Vertretenmüssen :: Schuldner verantwortlich → alle Rechte. Keiner verantwortlich → Rücktritt ja, SE/Aufwendungsersatz nein. Gläubiger (weit überwiegend) verantwortlich oder Annahmeverzug → nichts.',
 'Anfängliche Unmöglichkeit § 311a :: Vertrag wirksam (§ 311a I). SE nur bei Kenntnis oder zu vertretender Unkenntnis des Hindernisses (§ 311a II 2).',
 'Stellvertretendes Commodum § 285 :: Versicherungssumme herausverlangen, ohne Verschulden. Dann bleibt der Preis geschuldet, gemindert nach § 326 III 2. Lohnt nur, wenn der Ersatz mehr wert ist als die Gegenleistung.',
 'Schon gezahlt :: Ist die Gegenleistung nicht geschuldet, aber bewirkt, kann sie zurückgefordert werden § 326 IV i. V. m. §§ 346 ff.',
 'Rücktrittsausschluss :: §§ 326 V, 323 V (unerhebliche Pflichtverletzung) und 323 VI (Gläubiger verantwortlich, Annahmeverzug).',
 '§ 446 S. 1 :: Gefahrübergang mit Übergabe – praktisch nur bedeutsam beim Eigentumsvorbehalt. § 447 gilt auch, wenn der Verkäufer mit eigenen Leuten transportiert; beim VGK nur, wenn der Käufer die Versendung selbst veranlasst (§ 475 II).'
], ['Beschränkte Gattungsschuld (Vorrat)?', 'Bei Unmöglichkeit: Wer hat sie zu vertreten – Schuldner, keiner, Gläubiger?', '§ 285 verlangt? Dann § 326 III'], ['Geldschulden werden nie unmöglich – Zahlungsunfähigkeit entlastet nicht.', '§ 285 ist verschuldensunabhängig, kostet aber die Befreiung von der Gegenleistung (§ 326 III).', '§ 311a II: Schuldner, der das Hindernis weder kannte noch kennen musste, schuldet keinen Schadensersatz.'], ['§ 275 IV', '§ 276 III', '§ 277', '§ 313', '§ 323 V', '§ 323 VI', '§ 326 III', '§ 326 IV', '§ 326 V', '§ 446', '§ 475 II']);

K.nf.push(
 ['Kaufvertrag angefochten – wer ist Eigentümer der übergebenen Sache?', '§ 929 S. 1'],
 ['Rückforderung nach angefochtenem Kauf trotz wirksamer Übereignung', '§ 812 I 1 Alt. 1'],
 ['Factoring: Wann wird der Käufer Forderungsinhaber?', '§ 398'],
 ['Klage über 8.000 € – welches Gericht in erster Instanz?', '§ 23 GVG'],
 ['Gerichtsstandsklausel in AGB gegenüber Verbraucher', '§ 38 I ZPO'],
 ['Die ganze diesjährige Ernte, aus der zu liefern war, verbrennt', '§ 275 I'],
 ['Corona-Schließung: Mieter will weniger Miete zahlen', '§ 313'],
 ['Käufer will die Versicherungssumme für die verbrannte Sache', '§ 285 I'],
 ['Sache vor Vertragsschluss schon zerstört – Schadensersatz?', '§ 311a II'],
 ['Anzahlung geleistet, Leistung unmöglich geworden', '§ 326 IV'],
 ['Rücktritt bei Unmöglichkeit ohne Fristsetzung', '§ 326 V'],
 ['Schuldner haftet im Verzug auch für Zufall', '§ 287 S. 2']
);
})();

(function () {
const P = 'V4', Q = (topic, sv, q, c, o) => ({ topic, sv, q, c, o });
const L = [
Q('sach', 'V verkauft K ein Gemälde, das beide für ein Werk des Malers M halten, für 20.000 €. V übergibt und übereignet das Bild, K zahlt. Später stellt sich heraus, dass das Bild von einem unbekannten Schüler stammt und nur 2.000 € wert ist. V ficht den Kaufvertrag nicht an, aber K erklärt sofort die Anfechtung nach § 119 II und verlangt die 20.000 € zurück. V fragt, ob er dann wieder Eigentümer des Bildes ist.', 'Wie ist die Eigentumslage nach der Anfechtung?', 2, [
 ['V ist wieder Eigentümer, weil mit dem Kaufvertrag auch die Übereignung rückwirkend entfällt (§ 142 I).', 'Falsch. Angefochten wurde nur der Kaufvertrag. Die Übereignung ist ein eigener, abstrakter Vertrag.'],
 ['V ist wieder Eigentümer, weil das Eigentum bei Nichtigkeit des Kaufs automatisch zurückfällt (§ 158 II).', 'Falsch. Einen automatischen Rückfall gibt es nicht. Eine auflösende Bedingung wurde nicht vereinbart.'],
 ['K bleibt Eigentümer, V hat das Geld; beide müssen nach Bereicherungsrecht zurückübereignen (§§ 929, 812 I 1).', 'Richtig. Abstraktionsprinzip aus Vorlesung 1: Übereignungen bleiben wirksam, Ausgleich über § 812.'],
 ['K bleibt Eigentümer und darf das Bild behalten, weil V selbst nicht angefochten hat (§ 143 I).', 'Falsch. Die Anfechtung durch K wirkt für beide Seiten. K hat das Bild ohne Rechtsgrund und muss es zurückgeben.'],
 ['Beide Übereignungen sind nichtig, weil dieselbe Fehlvorstellung auch das dingliche Geschäft erfasst (§ 105 I).', 'Falsch. Fehleridentität nennt der Dozent nur für Fälle wie die Geschäftsunfähigkeit, nicht für § 119 II.'],
 ['Die Anfechtung ist unwirksam, weil über den Urheber eines Bildes nie ein Eigenschaftsirrtum möglich ist (§ 119 II).', 'Falsch. Die Echtheit eines Kunstwerks ist eine verkehrswesentliche Eigenschaft (Original statt Kopie).']]),
Q('lst', 'Landwirt V verkauft der Mühle K „50 Zentner Hafer aus der diesjährigen Ernte“ seines Hofes. Bevor V liefert, vernichtet ein Blitzschlag die Scheune mit der gesamten diesjährigen Haferernte. V trifft kein Verschulden. Am Markt ist Hafer gleicher Qualität problemlos erhältlich. K verlangt Lieferung von 50 Zentnern Hafer.', 'Muss V liefern?', 4, [
 ['Ja, bei einer Gattungsschuld muss V neu beschaffen, solange Hafer am Markt erhältlich ist (§ 243 I).', 'Falsch. Hier ist die Gattung auf einen Vorrat beschränkt. Andere Ware muss V nicht beschaffen.'],
 ['Ja, weil V das Beschaffungsrisiko trägt und Vertretenmüssen bei der Gattungsschuld entbehrlich ist (§ 276 I).', 'Falsch. Das Beschaffungsrisiko reicht nur so weit wie die Gattung. Diese ist auf die eigene Ernte beschränkt.'],
 ['Nein, aber nur, weil die Ware bereits durch Aussonderung in der Scheune konkretisiert war (§ 243 II).', 'Falsch. Ausgesondert war noch nichts. V ist frei, weil der gesamte geschuldete Vorrat untergegangen ist.'],
 ['Nein, V kann die Lieferung wegen unverhältnismäßigen Aufwands verweigern, muss das aber erklären (§ 275 II).', 'Falsch. Es geht nicht um großen Aufwand. Die Leistung aus dem Vorrat ist jedem unmöglich (§ 275 I).'],
 ['Nein, bei einer beschränkten Gattungsschuld wird V mit Untergang des ganzen Vorrats frei (§ 275 I).', 'Richtig. Beispiel des Dozenten: Vorratsschuld. Geht die Ernte unter, liegt Unmöglichkeit vor.'],
 ['Nein, und K muss trotzdem zahlen, weil die Gefahr mit Vertragsschluss auf ihn übergegangen ist (§ 446).', 'Falsch. Die Gefahr geht erst mit Übergabe über. Ohne Übergabe entfällt der Kaufpreis (§ 326 I 1).']]),
Q('lst', 'V verkauft K einen Oldtimer für 40.000 €. Vor der Übergabe wird der Wagen bei einem Brand in der Garage des V ohne dessen Verschulden zerstört. Die Versicherung des V zahlt 55.000 €, weil der Wagen inzwischen im Wert gestiegen ist. K möchte das Beste aus der Situation machen.', 'Welche Möglichkeit ist für K wirtschaftlich günstiger und rechtlich zulässig?', 1, [
 ['SE statt der Leistung in Höhe von 15.000 €, weil V für den Untergang immer einstehen muss (§§ 280 I, III, 283).', 'Falsch. SE verlangt Vertretenmüssen. V hat den Brand nicht verschuldet, die Vermutung ist widerlegt.'],
 ['Herausgabe der 55.000 €; dafür bleibt er zur Zahlung der 40.000 € verpflichtet, Gewinn 15.000 € (§§ 285 I, 326 III).', 'Richtig. Stellvertretendes Commodum: verschuldensunabhängig. Lohnt sich, weil der Ersatz mehr wert ist.'],
 ['Herausgabe der 55.000 €, ohne den Kaufpreis zu zahlen, weil V von der Leistung frei geworden ist (§§ 285, 326 I).', 'Falsch. Wer das Surrogat verlangt, bleibt nach § 326 III 1 zur Gegenleistung verpflichtet.'],
 ['Gar nichts, weil der Vertrag wegen der Zerstörung des Wagens rückwirkend nichtig geworden ist (§ 311a I).', 'Falsch. Der Vertrag bleibt bei jeder Unmöglichkeit wirksam. § 311a I betrifft die anfängliche Unmöglichkeit.'],
 ['Rücktritt und zusätzlich die 55.000 €, weil Rücktritt und Surrogat nebeneinander bestehen (§§ 326 V, 285).', 'Falsch. Nach Rücktritt gibt es keinen Leistungsanspruch mehr, an dessen Stelle das Surrogat treten könnte.'],
 ['Nur Rücktritt, weil § 285 lediglich eingreift, wenn der Schuldner den Untergang verschuldet hat (§ 285 I).', 'Falsch. § 285 ist verschuldensunabhängig. Gerade das macht ihn bei unverschuldetem Untergang interessant.']]),
Q('lst', 'Kunsthändler V verkauft K am 10. Mai ein Aquarell für 6.000 €. Ohne dass V es wissen konnte, war das Bild bereits am 8. Mai bei einem Wasserrohrbruch im Außenlager völlig zerstört worden; V hatte das Lager regelmäßig kontrolliert. K hatte das Bild für 9.000 € weiterverkauft und verlangt nun 3.000 € Schadensersatz.', 'Hat K Anspruch auf Schadensersatz?', 3, [
 ['Nein, der Kaufvertrag ist von Anfang an nichtig, weil das Bild bei Vertragsschluss nicht mehr existierte (§ 311a I).', 'Falsch. § 311a I bestimmt gerade, dass der Vertrag trotz anfänglicher Unmöglichkeit wirksam ist.'],
 ['Ja, aus §§ 280 I, III, 283, weil das Vertretenmüssen des V bei jeder Unmöglichkeit vermutet wird (§ 280 I 2).', 'Falsch. Bei anfänglicher Unmöglichkeit ist § 311a II die Anspruchsgrundlage, nicht § 283.'],
 ['Ja, aus § 311a II, weil V garantiert, dass verkaufte Sachen bei Vertragsschluss existieren (§ 276 I).', 'Falsch. Eine Garantie hat V nicht übernommen. Es kommt auf Kenntnis oder zu vertretende Unkenntnis an.'],
 ['Nein, V kannte das Hindernis nicht und musste es nicht kennen; § 311a II 2 schließt den Anspruch aus.', 'Richtig. Anfängliche Unmöglichkeit: SE nur bei Kenntnis oder zu vertretender Unkenntnis des Schuldners.'],
 ['Ja, aber nur in Höhe des negativen Interesses, weil der Vertrag wegen Unmöglichkeit angefochten wird (§ 122).', 'Falsch. Hier geht es nicht um Anfechtung. § 311a II gewährt das positive Interesse, wenn die Voraussetzungen vorliegen.'],
 ['Nein, weil Schadensersatz bei Unmöglichkeit nur nach vorheriger Fristsetzung verlangt werden kann (§ 281 I).', 'Falsch. Bei Unmöglichkeit ist keine Frist nötig (§ 311a II 3, § 283 S. 2). Der Anspruch scheitert an § 311a II 2.']]),
Q('lst', 'Einzelhändlerin E hat für ihr Modegeschäft eine Ladenfläche gemietet. Wegen einer behördlichen Schließungsanordnung während einer Pandemie darf sie das Geschäft drei Monate nicht öffnen. Der Vermieter verlangt die volle Miete. E meint, die Mietzahlung sei ihr unmöglich geworden, weil sie keine Einnahmen habe.', 'Wie ist die Rechtslage?', 0, [
 ['Die Zahlung ist nicht unmöglich; in Betracht kommt eine Anpassung wegen Störung der Geschäftsgrundlage (§ 313 I).', 'Richtig. Beispiel aus Vorlesung 4: Geld hat man zu haben. Die Corona-Schließung kann eine Anpassung rechtfertigen.'],
 ['E wird von der Mietzahlung frei, weil ihr die Zahlung ohne Einnahmen tatsächlich unmöglich ist (§ 275 I).', 'Falsch. Geldmangel entlastet nie. Eine Geldleistung wird nicht unmöglich.'],
 ['E kann die Zahlung wegen persönlicher Unzumutbarkeit verweigern, weil sie in Not ist (§ 275 III).', 'Falsch. § 275 III betrifft höchstpersönliche Leistungen wie Arbeits- und Dienstleistungen, nicht Geldzahlungen.'],
 ['E muss voll zahlen; eine Vertragsanpassung ist bei Pandemien ausgeschlossen, weil keine Partei schuld ist (§ 276).', 'Falsch. § 313 setzt kein Verschulden voraus. Die Anpassung ist einzelfallabhängig möglich.'],
 ['E kann sofort fristlos kündigen, ohne dass eine Anpassung des Vertrags zu prüfen ist (§ 313 III).', 'Falsch. Rücktritt oder Kündigung kommen erst in Betracht, wenn auch die Anpassung unzumutbar ist.'],
 ['Die Miete mindert sich automatisch auf null, weil die Schließung ein Mangel der Mietsache ist (§ 536 I).', 'Falsch. Das Beispiel der Vorlesung ordnet den Fall § 313 zu. Die Mietsache selbst ist nicht mangelhaft.']]),
Q('lst', 'Elektriker E soll im Haus des H eine neue Leitung verlegen. E schickt seinen langjährigen Gesellen G, der die Arbeiten eigenständig und ohne Weisungen ausführt. G bohrt fahrlässig ein Wasserrohr an; der Schaden beträgt 4.000 €. E weist nach, dass er G sorgfältig ausgesucht und überwacht hat, und meint, er hafte deshalb nicht.', 'Haftet E aus Vertrag?', 5, [
 ['Nein, weil E sich durch den Nachweis sorgfältiger Auswahl und Überwachung entlasten kann (§ 831 I 2).', 'Falsch. Die Entlastung gilt nur bei § 831 im Deliktsrecht. Im Vertrag gilt § 278 ohne Entlastung.'],
 ['Nein, weil G nicht weisungsgebunden war und deshalb kein Erfüllungsgehilfe des E ist (§ 278 S. 1).', 'Falsch. Der Erfüllungsgehilfe muss nicht weisungsgebunden sein. Es genügt das Tätigwerden im Pflichtenkreis.'],
 ['Nein, H muss sich direkt an G halten, weil dieser den Schaden allein verursacht hat (§ 823 I).', 'Falsch. Ein Anspruch gegen G schließt die vertragliche Haftung des E nicht aus.'],
 ['Ja, aber nur, wenn E selbst an der Baustelle anwesend war und eingreifen konnte (§ 276 I).', 'Falsch. Auf die Anwesenheit kommt es nicht an. Das Verschulden des G wird E zugerechnet.'],
 ['Ja, aus § 278, weil § 278 eine eigene Anspruchsgrundlage für Schäden durch Gehilfen ist (§ 278).', 'Falsch. § 278 ist nur Zurechnungsnorm. Anspruchsgrundlage ist §§ 280 I, 241 II.'],
 ['Ja, aus §§ 280 I, 241 II; das Verschulden des G wird E ohne Entlastungsmöglichkeit zugerechnet (§ 278).', 'Richtig. Vorlesung 4: Fremdes Verschulden wird zum eigenen. Eine Exkulpation ist ausgeschlossen.']]),
Q('typ', 'Online-Händler O verkauft dem Verbraucher V aus Hamburg ein Sofa für 8.000 €. In den AGB von O steht: „Gerichtsstand ist München.“ V zahlt nicht. O will im Januar 2027 auf Zahlung klagen und fragt, wo und bei welchem Gericht.', 'Welches Gericht ist zuständig?', 2, [
 ['Landgericht München, weil die Gerichtsstandsklausel wirksam ist und ab 5.000 € das LG zuständig ist (§ 38 I ZPO).', 'Falsch. Die Klausel wirkt nur unter Kaufleuten. Außerdem liegt die Grenze seit 2026 bei 10.000 €.'],
 ['Amtsgericht München, weil die Gerichtsstandsvereinbarung in AGB auch gegenüber Verbrauchern gilt (§ 38 I ZPO).', 'Falsch. Eine Gerichtsstandsvereinbarung ist nur zwischen Kaufleuten rechtswirksam.'],
 ['Amtsgericht Hamburg: Wohnsitz des Beklagten; bis 10.000 € ist seit 1.1.2026 das AG zuständig (§ 38 I ZPO).', 'Richtig. Klausel gegenüber V unwirksam, also Wohnsitz des Beklagten. 8.000 € liegt unter der neuen Grenze.'],
 ['Landgericht Hamburg, weil für Kaufpreisklagen streitwertunabhängig immer das Landgericht zuständig ist (§ 23 GVG).', 'Falsch. Streitwertunabhängig sind z. B. Miet- oder Arzthaftungssachen, nicht Kaufpreisklagen.'],
 ['Bundesgerichtshof, weil Streitigkeiten im Fernabsatz wegen ihrer Bedeutung direkt dort verhandelt werden (§ 133 GVG).', 'Falsch. Der BGH ist Revisionsinstanz und prüft nur rechtlich. Eine erste Instanz beim BGH gibt es hier nicht.'],
 ['Amtsgericht München, weil bei Online-Verträgen immer der Sitz des Verkäufers maßgeblich ist (§ 269 I).', 'Falsch. § 269 regelt den Leistungsort, nicht den Gerichtsstand. Maßgeblich ist der Wohnsitz des Beklagten.']])
];
{ const W = (window.WPRK_LONG = window.WPRK_LONG || []); L.forEach((q, i) => { const id = P + '-' + i; if (!W.some(x => x.id === id)) W.push({ ...q, id }); }); }
window.dispatchEvent(new Event('wpr-data'));
})();
