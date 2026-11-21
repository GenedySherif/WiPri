(function () {
// Lernzettel je Vorlesung: Gliederung nach Holztrattner (VL 1–9), ausgerichtet auf die Klausur bei Weiden/Wende
// (Lernpakete 1–17 der Weiden/Wende-Folien, Schemafolien, Altklausuren SS 2018 – WS 2024/25).
const R = (t, s) => ({ t, s });
window.WPRK_VL = [
{
 id: 'vl1', vl: 'VL 1', t: 'Grundlagen des Rechts', fb: 'VL 1', ft: 'typ',
 lp: 'Weiden/Wende LP 1 Rechtsquellen & Rechtsmethodik · LP 2 Rechtssubjekte · LP 3 Vertragstypen · LP 17 Rechtsdurchsetzung',
 klausur: 'regelmäßig', klausurD: 'Meist als Einstieg in einen Fall: Verbraucher oder Unternehmer? Kaufmann? Welcher Vertragstyp? Welches Gericht?',
 merk: 'Wer will was von wem woraus? → entstanden → nicht erloschen → durchsetzbar',
 ueber: [
  'Öffentliches Recht = Über-/Unterordnung (Staat handelt hoheitlich) · Privatrecht = Gleichordnung',
  'Rangordnung: EU-Recht (Anwendungsvorrang) → Grundgesetz → Bundesgesetze → Verordnungen → Satzungen',
  'BGB in 5 Büchern: Allgemeiner Teil · Schuldrecht · Sachenrecht · Familienrecht · Erbrecht. Allgemeines steht „vor der Klammer“',
  'Jede Norm hat Tatbestand und Rechtsfolge. Eine Anspruchsgrundlage gibt einem das Recht, etwas zu verlangen (§ 194 I)',
  'Trennungs- und Abstraktionsprinzip: Verpflichtung (z. B. § 433) und Verfügung (z. B. § 929) sind getrennt und unabhängig wirksam'],
 reihen: [
  R('Anspruchsaufbau (Weiden-Folie 36, gilt für jeden Fall)', ['Frage zerlegen: Wer will was von wem woraus?', 'I. Anspruch entstanden? Vertrag zustande gekommen und wirksam?', 'II. Anspruch nicht erloschen? Erfüllung (§ 362 I), Rücktritt (§ 346), Kündigung (§§ 314, 626)', 'III. Anspruch durchsetzbar? Keine Einrede: Verjährung (§ 214 I), Zurückbehaltungsrecht (§§ 273 I, 320)']),
  R('Reihenfolge der Anspruchsgrundlagen', ['Vertrag (§§ 433, 631, 280 …)', 'Vertragsähnlich: c.i.c. (§§ 280 I, 311 II, 241 II)', 'Dinglich (§ 985)', 'Delikt (§§ 823 ff.)', 'Bereicherung (§§ 812 ff.)']),
  R('Welches Gericht? (Rechtsdurchsetzung, LP 17)', ['Zivilrechtsstreit → ordentliche Gerichtsbarkeit', 'Amtsgericht bis 10.000 € Streitwert (§ 23 Nr. 1 GVG, seit 01.01.2026); Zinsen und Kosten zählen nicht mit (§ 4 ZPO)', 'Darüber Landgericht (§ 71 I GVG), dort Anwaltszwang (§ 78 ZPO)', 'Berufung: AG → LG, LG → OLG · Revision → BGH', 'Schneller Weg zum Titel: Mahnverfahren (§§ 688 ff. ZPO); daneben alternative Streitbeilegung (Schlichtung, Mediation)'])],
 defs: [
  ['Verbraucher (§ 13)', 'natürliche Person, die ein Rechtsgeschäft überwiegend zu privaten Zwecken abschließt'],
  ['Unternehmer (§ 14)', 'natürliche oder juristische Person bzw. rechtsfähige Personengesellschaft, die in Ausübung gewerblicher oder selbständiger beruflicher Tätigkeit handelt'],
  ['Kaufmann (§ 1 HGB)', 'wer ein Handelsgewerbe betreibt; Kleingewerbe erst mit Eintragung (§ 2 HGB); GmbH und AG immer (§ 6 HGB)'],
  ['Rechtsfähigkeit (§ 1)', 'Fähigkeit, Träger von Rechten und Pflichten zu sein – ab Vollendung der Geburt'],
  ['Sache (§ 90)', 'körperlicher Gegenstand; Tiere sind keine Sachen, werden aber wie Sachen behandelt (§ 90a)'],
  ['Abstraktionsprinzip', 'Die Wirksamkeit der Verfügung hängt nicht von der Wirksamkeit des Verpflichtungsgeschäfts ab']],
 weiden: [
  'Weiden/Wende trainieren „Tatbestand und Rechtsfolge“ (Level 1–3) und den Aufbau I.–III. – genau so sind die MC-Antworten aufgebaut.',
  'Vertragstypen sicher zuordnen (Influencer-Fall): feste Zahl an Posts = Werkvertrag, laufende Kooperation = Dienstvertrag. Dazu Kauf, Miete, Darlehen, Schenkung.',
  'LP 17: Wer etwas behauptet, muss es beweisen. Wichtige Beweislastumkehrungen: Vertretenmüssen (§ 280 I 2) und Mangel beim Verbrauchsgüterkauf (§ 477).',
  'Ihr Skript nennt dtv 96. Aufl. (2025). Maßgeblich ist die Ausgabe, die in Moodle für die Klausur zugelassen ist.'],
 fallen: [
  'Stadtwerke-GmbH in Staatshand handelt privatrechtlich, wenn sie Verträge schließt.',
  'Kleingewerbetreibender = Unternehmer, aber kein Kaufmann → kein § 377 HGB.',
  'Die Ärztin, die einen Laptop überwiegend privat nutzt, ist beim Kauf Verbraucherin.',
  'Für den Streitwert zählen Zinsen und Kosten nicht mit.']
},
{
 id: 'vl2', vl: 'VL 2', t: 'Willenserklärung, Vertragsschluss, Form', fb: 'VL 2', ft: 'vs',
 lp: 'Weiden/Wende LP 4 Inhalt und Zustandekommen von Verträgen · LP 6 Willenserklärungen',
 klausur: 'sehr oft', klausurD: 'In fast jeder Klausur: invitatio ad offerendum (Inserat, Onlineshop), Zugang (E-Mail!), Schweigen, Auslobung, Formvorschriften (Bürgschaft, Grundstück, Kündigung).',
 merk: 'Angebot → Zugang → Annahme (deckungsgleich, rechtzeitig) → wirksam (Form, §§ 116–118, 134, 138)',
 ueber: [
  'Vertrag = zwei übereinstimmende Willenserklärungen: Angebot (§ 145) und Annahme (§§ 147 ff.)',
  'Willenserklärung = Äußerung eines Willens, der auf eine Rechtsfolge gerichtet ist',
  'Grundsatz der Formfreiheit – Formzwang nur, wo das Gesetz ihn anordnet',
  'Nichtigkeitsgründe: §§ 105, 116–118, 125, 134, 138 und online § 312j IV'],
 reihen: [
  R('Vertragsschluss prüfen', ['Angebot: essentialia negotii (Parteien, Gegenstand, Preis) + Rechtsbindungswille. Abgrenzung invitatio ad offerendum (Schaufenster, Inserat, Onlineshop, Katalog)', 'Wirksam geworden: Abgabe + Zugang (§ 130 I): im Machtbereich und Kenntnisnahme unter gewöhnlichen Umständen zu erwarten; Widerruf nur vorher oder gleichzeitig (§ 130 I 2)', 'Angebot nicht erloschen: Ablehnung, Fristablauf (§§ 146–148)', 'Annahme deckungsgleich und rechtzeitig – sonst neues Angebot (§ 150 I, II)', 'Sonderfälle: Annahme ohne Zugang (§ 151), Schweigen auf kaufmännisches Bestätigungsschreiben, unbestellte Ware (§ 241a)']),
  R('Willenserklärung prüfen (LP 6)', ['Objektiv: Rechtsbindungswille aus Sicht des Empfängers (§§ 133, 157) – Abgrenzung Gefälligkeit', 'Handlungswille – fehlt er (Reflex, Schlaf, Gewalt), gibt es keine Willenserklärung', 'Erklärungsbewusstsein – fehlt es, liegt trotzdem eine WE vor, wenn das Verhalten erkennbar als WE verstanden werden konnte; Anfechtung analog § 119 I', 'Geschäftswille – fehlt er, ist die WE wirksam, aber anfechtbar']),
  R('Wirksamkeitshindernisse prüfen', ['Geschäftsfähigkeit (§§ 104 ff. → Kapitel „Minderjährige“)', 'Ernstlichkeit: geheimer Vorbehalt unbeachtlich (§ 116), Scheingeschäft nichtig (§ 117 I, verdecktes Geschäft § 117 II), Scherz nichtig (§ 118) + Vertrauensschaden (§ 122)', 'Form (§ 125): Textform § 126b < elektronische Form § 126a < Schriftform § 126 < öffentliche Beglaubigung § 129 < notarielle Beurkundung § 128 – Heilung prüfen (§§ 311b I 2, 518 II, 766 S. 3)', 'Gesetzliches Verbot (§ 134), Sittenwidrigkeit und Wucher (§ 138)', 'Online: Bestellbutton muss eindeutig auf die Zahlungspflicht hinweisen (§ 312j III, IV)'])],
 defs: [
  ['invitatio ad offerendum', 'Aufforderung, ein Angebot abzugeben – noch keine Willenserklärung'],
  ['Zugang (§ 130 I)', 'Die WE ist so in den Machtbereich des Empfängers gelangt, dass unter gewöhnlichen Umständen mit Kenntnisnahme zu rechnen ist'],
  ['essentialia negotii', 'wesentliche Vertragsbestandteile: Vertragsparteien, Kaufgegenstand, Kaufpreis'],
  ['Textform (§ 126b)', 'lesbare Erklärung auf dauerhaftem Datenträger mit Nennung des Erklärenden (E-Mail, SMS)'],
  ['Schriftform (§ 126)', 'Urkunde mit eigenhändiger Namensunterschrift'],
  ['Auslobung (§ 657)', 'öffentlich bekannt gemachte Belohnung – Anspruch auch, wenn der Handelnde sie nicht kannte'],
  ['Rechtsbindungswille', 'Wille, sich rechtlich zu binden; fehlt bei bloßer Gefälligkeit']],
 weiden: [
  'Zugang von E-Mails im Geschäftsverkehr: sobald sie während der Geschäftszeit auf dem Server abrufbar sind; nach Geschäftsschluss am nächsten Geschäftstag. Altklausur: „am 10. März, als sie auf dem Server abrufbereit war“.',
  'Altklausur: Das Inserat eines Autohauses ist kein verbindliches Angebot im Sinne des § 145. Die essentialia negotii sind Kaufpreis, Kaufgegenstand und Vertragspartner.',
  'Formvorschriften nach Strenge sortieren (Folie 51). Neu seit 01.01.2025: Für Mietverträge über Grundstücke und Gewerberäume genügt für die lange Bindung die Textform (§ 578 i. V. m. § 550); Arbeitsbedingungen nach dem Nachweisgesetz in Textform.',
  'Altklausuren: Kündigung eines Arbeitsverhältnisses braucht Schriftform (§ 623). Bürgschaft schriftlich (§ 766 S. 1, keine E-Mail). Grundstückskauf notariell (§ 311b I 1).',
  'Altklausur Auslobung: Wer den Hund findet, hat Anspruch auf die Belohnung.'],
 fallen: [
  'Automatische Eingangsbestätigung im Onlineshop ist keine Annahme.',
  'E-Mail ist Textform, nicht Schriftform.',
  'Testament getippt und unterschrieben ist formnichtig (§ 2247: eigenhändig geschrieben).',
  'Annahme mit Änderung = Ablehnung + neues Angebot (§ 150 II).',
  'Unbestellte Ware: kein Vertrag, keine Rücksendepflicht (§ 241a).',
  'Ohne Erklärungsbewusstsein gibt es trotzdem eine WE – nur ohne Handlungswillen nicht.']
},
{
 id: 'zmj', vl: 'Zusatz', t: 'Minderjährige & Geschäftsfähigkeit', fb: null, ft: 'per',
 lp: 'Nicht in Holztrattners Vorlesung · Weiden/Wende LP 2 Rechtssubjekte und Altklausuren (rund 9 Aufgaben)',
 klausur: 'oft', klausurD: 'Weiden/Wende fragen: lediglich rechtlicher Vorteil (rein rechtlich beurteilt!), Taschengeld, schwebende Unwirksamkeit, Handeln der Eltern.',
 merk: 'Alter → lediglich rechtlicher Vorteil? → Einwilligung / Taschengeld → sonst schwebend unwirksam → Genehmigung',
 ueber: [
  'Unter 7 Jahren geschäftsunfähig (§ 104 Nr. 1) → Willenserklärung nichtig (§ 105 I)',
  '7 bis 17 Jahre beschränkt geschäftsfähig (§ 106) → Schutz über §§ 107–113',
  'Gesetzliche Vertreter sind die Eltern gemeinsam (§ 1629 I)',
  'Ein Minderjähriger kann selbst Vertreter eines anderen sein (§ 165)'],
 reihen: [
  R('Geschäft eines Minderjährigen prüfen', ['Alter bestimmen: unter 7 → nichtig (§§ 104 Nr. 1, 105 I); 7–17 → weiter prüfen', 'Lediglich rechtlicher Vorteil? → wirksam ohne Zustimmung (§ 107). Nur rechtlich beurteilen, nicht wirtschaftlich', 'Einwilligung (vorherige Zustimmung, § 183) der Eltern? Auch als Generaleinwilligung für einen Kreis von Geschäften', 'Taschengeld (§ 110): mit Mitteln, die zu diesem Zweck oder zur freien Verfügung überlassen wurden, vollständig bewirkt', 'Erwerbsgeschäft (§ 112), Dienst- oder Arbeitsverhältnis (§ 113)', 'Sonst schwebend unwirksam: Genehmigung (§§ 108 I, 184) wirkt zurück; nach Aufforderung 2 Wochen, Schweigen = Verweigerung (§ 108 II); Vertragspartner kann widerrufen (§ 109)'])],
 defs: [
  ['Lediglich rechtlicher Vorteil', 'Das Geschäft begründet für den Minderjährigen keine rechtlichen Pflichten (Schenkung ohne Auflage: ja; Kaufvertrag: nie)'],
  ['Einwilligung / Genehmigung', 'vorherige (§ 183) bzw. nachträgliche (§ 184) Zustimmung'],
  ['Schwebend unwirksam', 'noch nicht wirksam, kann durch Genehmigung rückwirkend wirksam werden']],
 weiden: [
  'Altklausur: Ob ein lediglich rechtlicher Vorteil vorliegt, ist ausschließlich rechtlich zu beurteilen, auch wenn die wirtschaftlichen Vorteile deutlich überwiegen.',
  'Altklausur: Für eine Schenkung ohne Pflichten braucht der Minderjährige keine Vertretung.',
  'Altklausur: Verkauft ein Kind am Tag nach seinem 7. Geburtstag sein Kuscheltier an ein 8-jähriges Kind, ist das Geschäft schwebend unwirksam.',
  'Altklausur: Eltern haften nicht automatisch für ihre Kinder, sondern nur bei Verletzung der Aufsichtspflicht (§ 832).'],
 fallen: [
  '§ 110 greift erst, wenn vollständig bezahlt ist – kein Ratenkauf.',
  'Geschenkte vermietete Wohnung ist nicht lediglich vorteilhaft (Vermieterpflichten).',
  '§ 105a gilt nur für volljährige Geschäftsunfähige.',
  'Holztrattner prüft das Thema nicht vertieft – Weiden/Wende schon.']
},
{
 id: 'zsv', vl: 'Zusatz', t: 'Stellvertretung', fb: null, ft: 'stv',
 lp: 'Nicht in Holztrattners Vorlesung · in den Weiden/Wende-Altklausuren regelmäßig',
 klausur: 'regelmäßig', klausurD: 'Abgrenzung Bote und Vertreter, Offenkundigkeit, Vollmacht im Innen- und Außenverhältnis, höchstpersönliche Geschäfte.',
 merk: 'Zulässig → eigene WE → im fremden Namen → mit Vertretungsmacht',
 ueber: [
  'Der Vertreter gibt eine eigene Willenserklärung ab, die für und gegen den Vertretenen wirkt (§ 164 I)',
  'Vertretungsmacht kraft Gesetzes (Eltern § 1629) oder Rechtsgeschäft (Vollmacht § 167, Prokura §§ 48 ff. HGB)',
  'Ohne Vertretungsmacht: schwebend unwirksam (§ 177), Haftung des Vertreters (§ 179)'],
 reihen: [
  R('Stellvertretung prüfen (§ 164 I)', ['Zulässigkeit: keine höchstpersönlichen Geschäfte (Eheschließung, Testament)', 'Eigene Willenserklärung des Vertreters (Abgrenzung Bote: überbringt nur eine fremde Erklärung)', 'Im fremden Namen (Offenkundigkeit, auch aus den Umständen, § 164 I 2)', 'Mit Vertretungsmacht: Vollmacht (§ 167), gesetzlich, Prokura, Duldungs- oder Anscheinsvollmacht; Grenzen: § 181 Insichgeschäft', 'Folge: Vertrag zwischen Vertretenem und Drittem', 'Ohne Vertretungsmacht: Genehmigung (§ 177); sonst § 179 I Erfüllung oder SE (bei Kenntnis des Mangels), § 179 II nur Vertrauensschaden (bei Unkenntnis), § 179 III keine Haftung, wenn der Dritte den Mangel kannte oder kennen musste'])],
 defs: [
  ['Vertreter vs. Bote', 'Vertreter gibt eine eigene WE ab (Entscheidungsspielraum), Bote übermittelt eine fremde'],
  ['Innen- und Außenverhältnis', 'Weisungen im Innenverhältnis beschränken eine nach außen unbeschränkte Vollmacht nicht'],
  ['Prokura (§§ 48, 49 HGB)', 'umfassende Vollmacht eines Kaufmanns – Grundstücke veräußern oder belasten nur mit besonderer Befugnis']],
 weiden: [
  'Altklausur: Bei der standesamtlichen Eheschließung ist Vertretung überhaupt nicht möglich.',
  'Altklausur: Offenkundigkeit gewahrt → Kaufvertrag kommt mit dem Vertretenen zustande.',
  'Altklausur: Mit Vollmacht wirksam Geld abgehoben, aber im Innenverhältnis alles herauszugeben.'],
 fallen: [
  'Der Vertreter darf beschränkt geschäftsfähig sein (§ 165).',
  'Ein beschränkt geschäftsfähiger Vertreter ohne Vertretungsmacht haftet nicht nach § 179 (§ 179 III 2).',
  'Bote und Vertreter werden in MC-Antworten gern vertauscht.']
},
{
 id: 'vl3', vl: 'VL 3', t: 'Anfechtung, Fristen & Verjährung, Erlöschen', fb: 'VL 3', ft: 'anf',
 lp: 'Weiden/Wende LP 6 Willenserklärungen (Anfechtung) · LP 11 Vertragsbeendigung · LP 12 Fristen und Verjährung · LP 8 (Nebenpflichten, c.i.c.)',
 klausur: 'oft', klausurD: 'Anfechtung gehört zu den häufigsten Klausurthemen (§ 122, Fehleridentität, Motivirrtum). Fristberechnung und Verjährungsbeginn kommen als Rechenaufgabe.',
 merk: 'Anfechtung: Auslegung → Grund → Erklärung → Frist → Folge · Verjährung: 3 Jahre ab Jahresende',
 ueber: [
  'Anfechtung vernichtet eine Willenserklärung rückwirkend (§ 142 I)',
  'Verjährung lässt den Anspruch bestehen, gibt aber ein Leistungsverweigerungsrecht (§ 214 I)',
  'Ein Schuldverhältnis hat Hauptleistungspflichten, Nebenpflichten (§ 241 II) und Obliegenheiten',
  'Erlöschen: Erfüllung, Ersatzleistung, Aufrechnung, Rücktritt, Kündigung, Widerruf'],
 reihen: [
  R('Anfechtung prüfen', ['Vorrang der Auslegung (§§ 133, 157) – falsa demonstratio non nocet', 'Anfechtungsgrund: Inhaltsirrtum (§ 119 I Alt. 1), Erklärungsirrtum (§ 119 I Alt. 2), Eigenschaftsirrtum (§ 119 II), falsche Übermittlung (§ 120), Täuschung oder Drohung (§ 123)', 'Anfechtungserklärung gegenüber dem Anfechtungsgegner (§ 143)', 'Frist: unverzüglich bei §§ 119, 120 (§ 121); 1 Jahr ab Entdeckung bei § 123 (§ 124)', 'Kein Ausschluss: Bestätigung (§ 144); beim Käufer nach Gefahrübergang Vorrang des Mängelrechts vor § 119 II', 'Folge: nichtig von Anfang an (§ 142 I); bei §§ 119, 120 Vertrauensschaden (§ 122), verschuldensunabhängig, höchstens bis zum Erfüllungsinteresse']),
  R('Fristberechnung (LP 12)', ['Ereignisfrist (§ 187 I): Der Tag des Ereignisses (z. B. Zugang) zählt nicht mit', 'Beginnfrist (§ 187 II): Der erste Tag zählt mit (Lebensalter, „ab 1. März“)', 'Ende (§ 188): Tagesfrist mit Ablauf des letzten Tages; Wochen- und Monatsfristen an dem Tag, der durch Benennung oder Zahl dem Anfangstag entspricht', 'Fällt das Ende auf Samstag, Sonntag oder Feiertag → nächster Werktag (§ 193)']),
  R('Verjährung (LP 12)', ['Regelverjährung 3 Jahre (§ 195)', 'Beginn: Schluss des Jahres, in dem der Anspruch entstanden ist und der Gläubiger Kenntnis hat (§ 199 I)', 'Höchstfristen (§ 199 II–IV): 10 bzw. 30 Jahre', 'Sonderfristen: Kaufmängel 2 Jahre ab Ablieferung (§ 438), Werk § 634a, Grundstücke 10 Jahre (§ 196), Titel 30 Jahre (§ 197)', 'Hemmung (§§ 203 ff.: Verhandlungen, Klage, Mahnbescheid) – die Zeit wird nicht eingerechnet. Neubeginn (§ 212: Anerkenntnis, z. B. Abschlag) – volle Frist neu, taggenau', 'Folge: Einrede (§ 214 I); trotzdem Geleistetes bleibt beim Gläubiger (§ 214 II)']),
  R('Erlöschen (LP 11)', ['Erfüllung (§ 362 I) – an Dritte nur mit Ermächtigung (§§ 362 II, 185)', 'An Erfüllungs statt (§ 364 I, sofort) oder erfüllungshalber (§ 364 II, erst bei Befriedigung)', 'Aufrechnung (§§ 387 ff.): gegenseitig, gleichartig, Gegenforderung fällig und durchsetzbar; mit verjährter Forderung nach § 215', 'Rücktritt (§§ 346 ff.): gesetzlich nach §§ 323, 324, 326 V; SE daneben möglich (§ 325)', 'Kündigung bei Dauerschuldverhältnissen (§ 314) – nur für die Zukunft', 'Widerruf (§ 355), Vertragsbeendigung bei digitalen Produkten (§ 327m)'])],
 defs: [
  ['Motivirrtum', 'Irrtum im Beweggrund – grundsätzlich unbeachtlich (Ausnahme § 119 II)'],
  ['Verkehrswesentliche Eigenschaft', 'wertbildender Faktor, der der Sache unmittelbar anhaftet (Echtheit, Alter, Urheber) – nicht der Preis selbst'],
  ['Vertrauensschaden (negatives Interesse)', 'Stellung, als hätte man nie auf die Gültigkeit vertraut'],
  ['Obliegenheit', 'Verhaltensanforderung im eigenen Interesse – Verletzung führt zu Rechtsverlust, nicht zu Schadensersatz'],
  ['c.i.c. (§ 311 II)', 'vorvertragliches Schuldverhältnis mit Rücksichtnahmepflichten (§ 241 II) → Haftung über § 280 I']],
 weiden: [
  'Altklausuren: § 122 setzt kein Verschulden voraus. Ersetzt wird das negative Interesse, begrenzt durch das Erfüllungsinteresse (Altklausur: „nur 2.000 €, weil das Erfüllungsinteresse den Anspruch begrenzt“).',
  'Altklausur: Sind Verpflichtungs- und Verfügungsgeschäft nichtig (Fehleridentität, typisch bei § 123), bleibt der Verkäufer Eigentümer.',
  'Altklausur (Anfechtung beim Gebrauchtwagen): Soweit der Auspuff ein Verschleißteil ist, liegt kein Mangel vor.',
  'Weiden-Übung (Folie 178): Mahnung mit 10-Tage-Frist geht am 12.4. zu → Frist endet am 22.4. um 24 Uhr. Kaufvertrag vom 31.1.2023 → Ansprüche verjähren mit Ablauf des 31.12.2026.',
  'LP 11: Schadensersatz und Rücktritt schließen einander nicht aus (§ 325).'],
 fallen: [
  'Ein Mahnschreiben hemmt die Verjährung nicht – nur der Mahnbescheid (§ 204 I Nr. 3).',
  '§ 438 beginnt mit Ablieferung, nicht am Jahresende.',
  'Neubeginn nach § 212 läuft taggenau, ohne Jahresendregel.',
  '§ 193 verschiebt nur das Ende, nie den Beginn.',
  'Kalkulationsirrtum ist ein Motivirrtum – keine Anfechtung.',
  'Kündigung wirkt nur für die Zukunft.']
},
{
 id: 'vl4', vl: 'VL 4', t: 'Unmöglichkeit & Gefahrübergang', fb: 'VL 4', ft: 'lst',
 lp: 'Weiden/Wende LP 8 Leistungsstörungen (Folien 115–117 „Lösungsaufbau bei Unmöglichkeit“) · LP 10 Exkurs Gefahrübergang (Folie 164)',
 klausur: 'regelmäßig', klausurD: 'Typisch: Versendungskauf (§ 447 oder § 475 II), zufälliger Untergang nach Übergabe (Stute), Gattungsschuld, anfängliche Unmöglichkeit.',
 merk: '1. Primärleistung frei? → 2. Gegenleistung? → 3. Sekundäransprüche?',
 ueber: [
  'Unmöglichkeit befreit von der Leistungspflicht (§ 275 I) – egal ob anfänglich oder nachträglich, objektiv oder subjektiv',
  'Die Gegenleistung entfällt grundsätzlich mit (§ 326 I 1)',
  'Schadensersatz nur bei Vertretenmüssen (§§ 280 I, III, 283 / § 311a II)',
  'Die Preisgefahr kann vorher auf den Käufer übergehen (§§ 446, 447)'],
 reihen: [
  R('Lösungsaufbau bei Unmöglichkeit (Weiden-Folie 116)', ['1. Schritt – Schicksal der Primärleistung: Schuldner frei nach § 275 I (oder Einrede § 275 II, III)? Gattungsschuld erst nach Konkretisierung (§ 243 II)', '2. Schritt – Gegenleistung: entfällt (§ 326 I 1). Ausnahmen: Gläubiger verantwortlich (§ 326 II 1 Alt. 1), Annahmeverzug (Alt. 2), Gefahrübergang (§§ 446, 447), Surrogat verlangt (§ 326 III)', '3. Schritt – Sekundäransprüche: SE statt der Leistung §§ 280 I, III, 283 (nachträglich) oder § 311a II (anfänglich); Aufwendungsersatz § 284; Surrogat § 285; Rücktritt § 326 V']),
  R('Konkretisierung der Gattungsschuld', ['Holschuld (Regelfall, § 269 I): aussondern + bereitstellen + Gläubiger benachrichtigen', 'Bringschuld: tatsächlich am Wohnsitz des Gläubigers anbieten', 'Schickschuld: Übergabe an die Transportperson', 'Folge: Leistungsgefahr geht über; die Preisgefahr bleibt, bis ein Übergangstatbestand greift']),
  R('Gefahrübergang (Weiden-Folie 164)', ['Sachkauf: Übergabe an den Käufer (§ 446 S. 1)', 'Versendungskauf: Übergabe an den Frachtführer (§ 447) – nicht beim Verbrauchsgüterkauf (§ 475 II)', 'Immobilien: Besitzübergang (§ 446), beim Hauskauf mit der Schlüsselübergabe', 'Rechtskauf: Übertragung des Rechts, in der Regel mit der Abtretung (§ 398)', 'Annahmeverzug steht der Übergabe gleich (§ 446 S. 3)'])],
 defs: [
  ['Leistungsgefahr', 'Risiko, nach Untergang erneut leisten zu müssen'],
  ['Preisgefahr', 'Risiko, trotz Untergangs zahlen zu müssen'],
  ['Absolutes Fixgeschäft', 'Leistung nach dem Termin sinnlos → Unmöglichkeit (§ 275 I)'],
  ['Vertretenmüssen (§ 276)', 'Vorsatz und Fahrlässigkeit; strenger bei Garantie oder Beschaffungsrisiko; Gehilfen über § 278'],
  ['Stellvertretendes commodum (§ 285)', 'Ersatz, den der Schuldner wegen des Untergangs erlangt (z. B. Versicherungsleistung)']],
 weiden: [
  'Weiden-Beispiel: Champagner geht beim Versand mit DHL zu Bruch – zuerst Schicksal der Primärleistung, dann Gegenleistung.',
  'Altklausur: § 275 regelt anfängliche und nachträgliche, subjektive und objektive Unmöglichkeit.',
  'Altklausur: Der Käufer muss die Stute bezahlen, die nach der Übergabe stirbt (§ 446).',
  'Folie 103: Verschulden ≠ Vertretenmüssen. Vorsatzhaftung nicht abdingbar (§ 276 III), in AGB Beschränkung nur nach § 309 Nr. 7, § 280 I 2 = widerlegbare Vermutung.',
  'Altklausur: Hat der Käufer die vereinbarte Abholung versäumt und trifft den Verkäufer kein Verschulden, muss der Käufer zahlen.'],
 fallen: [
  'Vor der Konkretisierung muss der Gattungsschuldner neu beschaffen.',
  'Die Konkretisierung verschiebt die Leistungs-, nicht die Preisgefahr.',
  '§ 275 II und III sind Einreden.',
  'Anfängliche Unmöglichkeit macht den Vertrag nicht nichtig (§ 311a I).',
  '§ 285 und § 326 V brauchen kein Verschulden, § 283 schon.']
},
{
 id: 'vl5', vl: 'VL 5', t: 'Verzug', fb: 'VL 5', ft: 'lst',
 lp: 'Weiden/Wende LP 8 Leistungsstörungen (Folien 107, 112–113, 117)',
 klausur: 'regelmäßig', klausurD: 'Weiden/Wende fragen: Verzögerungsschaden (Mietwagen, Vertragsstrafe, Taxi), Annahmeverzug (Abholung versäumt), relatives Fixgeschäft, Unterscheidung SE neben und statt der Leistung.',
 merk: 'Fällig → Mahnung (oder entbehrlich) → nicht geleistet → Vertretenmüssen → Verzögerungsschaden',
 ueber: [
  'Schuldnerverzug = Leistung ist möglich, kommt aber zu spät',
  'Verzug allein gibt Verzögerungsschaden und Zinsen. Für SE statt der Leistung und Rücktritt braucht es eine Frist',
  'Gläubigerverzug = Gläubiger nimmt die angebotene Leistung nicht an. Das ist eine Obliegenheitsverletzung, keine Pflichtverletzung'],
 reihen: [
  R('Verzögerungsschaden §§ 280 I, II, 286', ['Schuldverhältnis', 'Fälliger (§ 271) und durchsetzbarer Anspruch (keine Einrede)', 'Nichtleistung trotz Möglichkeit (sonst Unmöglichkeit, VL 4)', 'Mahnung nach Fälligkeit oder entbehrlich: Kalendertermin (§ 286 II Nr. 1), berechenbar ab Ereignis (Nr. 2), ernsthafte Verweigerung (Nr. 3), besondere Gründe (Nr. 4); Entgeltforderung 30 Tage nach Rechnung (§ 286 III, beim Verbraucher nur mit Hinweis)', 'Vertretenmüssen (§ 286 IV, vermutet)', 'Kausaler Verzögerungsschaden, entstanden nach Verzugseintritt']),
  R('Weitere Folgen des Schuldnerverzugs', ['Verzugszinsen: 5 Prozentpunkte über Basiszins; ohne Verbraucherbeteiligung bei Entgeltforderungen 9 (§ 288 I, II)', '40-€-Pauschale, wenn der Schuldner kein Verbraucher ist, angerechnet auf Rechtsverfolgungskosten (§ 288 V)', 'Haftungsverschärfung für Fahrlässigkeit und Zufall (§ 287), außer der Schaden wäre auch bei rechtzeitiger Leistung eingetreten']),
  R('SE statt der Leistung §§ 280 I, III, 281 & Rücktritt § 323', ['Fällige Leistung nicht erbracht', 'Angemessene Frist erfolglos – eine zu kurze Frist setzt die angemessene in Gang; entbehrlich nach § 281 II / § 323 II (ernsthafte Verweigerung, relatives Fixgeschäft § 323 II Nr. 2)', 'SE: Vertretenmüssen + Schaden (Erfüllungsinteresse); ab dem SE-Verlangen kein Leistungsanspruch mehr (§ 281 IV)', 'Rücktritt: kein Verschulden nötig; ausgeschlossen bei unerheblicher Pflichtverletzung (§ 323 V 2) oder Verantwortung des Gläubigers (§ 323 VI); schon vor Fälligkeit nach § 323 IV', 'SE und Rücktritt nebeneinander (§ 325)']),
  R('Gläubigerverzug §§ 293 ff.', ['Erfüllbare Leistung; Schuldner leistungsbereit und leistungsfähig (§ 297)', 'Angebot: tatsächlich (§ 294); wörtlich bei vorheriger Ablehnung oder nötiger Mitwirkung (§ 295); entbehrlich bei kalendermäßig bestimmter Mitwirkung (§ 296)', 'Nichtannahme (§ 293) – kein Verschulden nötig; Ausnahme § 299 (vorübergehende Verhinderung bei unbestimmter Leistungszeit)', 'Folgen: Haftung nur für Vorsatz und grobe Fahrlässigkeit (§ 300 I), Leistungsgefahr bei Gattungsschuld (§ 300 II), Gegenleistung bleibt (§ 326 II 1 Alt. 2), Mehraufwand (§ 304), Hinterlegung (§ 372; Handelskauf § 373 HGB)'])],
 defs: [
  ['Mahnung', 'eindeutige Aufforderung an den Schuldner, die fällige Leistung zu erbringen'],
  ['Fälligkeit (§ 271)', 'Zeitpunkt, ab dem der Gläubiger die Leistung verlangen darf – im Zweifel sofort'],
  ['Relatives Fixgeschäft', 'Termin wesentlich, Leistung aber nachholbar → Rücktritt ohne Frist (§ 323 II Nr. 2)'],
  ['Behebbarer Schaden', 'Würde bei rechtzeitiger (Nach-)Erfüllung entfallen → SE statt der Leistung (§ 281)'],
  ['Nicht behebbarer Schaden', 'Bleibt trotz späterer Leistung bestehen → SE neben der Leistung (§ 280 I, ggf. II)']],
 weiden: [
  'Weiden-Kontrollfrage (Folie 113): Würde der Schaden bei einer hypothetisch rechtzeitig vorgenommenen (Nach-)Erfüllung entfallen? Ja → behebbar → § 281. Nein → nicht behebbar → § 280 I.',
  'Folie 112: § 280 I ist die „Ankernorm“, § 280 III die „Überleitungsnorm“. Bei § 281 kommt als zusätzliche Voraussetzung die fruchtlos abgelaufene angemessene Frist hinzu.',
  'Altklausur: Eine Vertragsstrafe, die der Gläubiger wegen der Verspätung an einen Dritten zahlen muss, ist ein nicht behebbarer Schaden aus §§ 280 I, II, 286. Mietkosten für die Verzugszeit kommen hinzu.',
  'Altklausur: Mehrkosten von 60 € sind zu ersetzen, weil der Käufer im Annahmeverzug ist (§ 304).',
  'Weiden-Übung relatives Fixgeschäft: Weihnachtsschmuck, Liefertermin 1.11., geliefert am 10.12.',
  'Weiden ordnet außerdem ein: Störung der Geschäftsgrundlage (§ 313: zuerst Anpassung, Rücktritt nur nachrangig) und Kündigung aus wichtigem Grund (§ 314).'],
 fallen: [
  'Eine Mahnung vor Fälligkeit ist wirkungslos.',
  'Kosten der ersten, verzugsbegründenden Mahnung sind nicht ersatzfähig.',
  'Mahnung ≠ Fristsetzung: Verzug braucht die Mahnung, §§ 281 und 323 brauchen die Frist.',
  '30-Tage-Regel gegenüber Verbrauchern nur mit Hinweis in der Rechnung.',
  'Die Annahme ist eine Obliegenheit: kein Schadensersatzanspruch gegen den Gläubiger.',
  '§ 287 S. 2 entfällt, wenn der Schaden auch bei rechtzeitiger Leistung eingetreten wäre.']
},
{
 id: 'vl6', vl: 'VL 6', t: 'Mängelhaftung beim Kauf I: Mangel & Nacherfüllung', fb: 'VL 6', ft: 'kauf',
 lp: 'Holztrattner Skript VL 6 (S. 57–68) · Weiden/Wende LP 10 Gewährleistungsrecht (Folien 137–164)',
 klausur: 'sehr oft', klausurD: 'Größter Block der Altklausuren: Mangelbegriff, Nacherfüllung (Ein- und Ausbau, Transportkosten, Vorschuss), Waren mit digitalen Elementen.',
 merk: 'Kaufvertrag → Mangel → bei Gefahrübergang → kein Ausschluss → zuerst Nacherfüllung',
 ueber: [
  'Mängelrechte stehen in § 437: Nacherfüllung (Nr. 1), Rücktritt oder Minderung (Nr. 2), Schadensersatz oder Aufwendungsersatz (Nr. 3)',
  'Vorrang der Nacherfüllung: Der Verkäufer bekommt eine zweite Chance',
  'Beim Verbrauchsgüterkauf (§§ 474 ff.) gelten Schutzvorschriften, die nicht abbedungen werden können (§ 476)'],
 reihen: [
  R('Mängelrechte – Grundprüfung', ['Wirksamer Kaufvertrag (§ 433)', 'Sachmangel (§ 434) oder Rechtsmangel (§ 435)', 'Bei Gefahrübergang (§§ 446, 447; Verbrauchsgüterkauf § 475 II; Vermutung § 477 I für 1 Jahr)', 'Kein Ausschluss: Kenntnis (§ 442), vereinbarter Ausschluss (§ 444; Verbrauchsgüterkauf § 476), § 377 HGB', 'Rechtsfolge § 437: zuerst Nacherfüllung, dann Sekundärrechte']),
  R('Sachmangel § 434 (seit 2022)', ['Subjektive Anforderungen (II): vereinbarte Beschaffenheit (inkl. Art und Menge), vertraglich vorausgesetzte Verwendung, Zubehör und Anleitungen', 'Objektive Anforderungen (III): gewöhnliche Verwendung, übliche Beschaffenheit, Erwartungen nach Werbung und Proben', 'Montageanforderungen (IV)', 'Falschlieferung steht dem Mangel gleich (V)', 'Alle Anforderungen müssen erfüllt sein (I). Negative Abweichung beim Verbrauchsgüterkauf nur nach § 476 I 2 (eigens informiert, ausdrücklich und gesondert vereinbart)']),
  R('Nacherfüllung § 439', ['Käufer wählt: Nachbesserung oder Neulieferung (I)', 'Verkäufer trägt die erforderlichen Kosten, auch Transport (II); Vorschuss kann verlangt werden', 'Ein- und Ausbaukosten (III), auch zwischen Unternehmern', 'Verweigerung bei unverhältnismäßigen Kosten (IV) → Beschränkung auf die andere Art', 'Mangelhafte Sache zurück (V); beim Verbrauchsgüterkauf Nacherfüllung in angemessener Frist ab Unterrichtung (§ 475 V)']),
  R('Sachmangel – Prüfreihenfolge nach Skript', ['1. Subjektiv (§ 434 II): ausdrücklich vereinbarte Beschaffenheit (Nr. 1; nach II 2 auch Art, Menge, Qualität, Funktionalität, Kompatibilität, Interoperabilität – nicht abschließend)', '2. Vertraglich vorausgesetzte Verwendung (Nr. 2): BEIDE Parteien müssen sie bei Vertragsschluss zumindest konkludent zugrunde legen – der Käufer muss sie dem Verkäufer mitteilen, dieser muss zustimmen', '3. Vereinbartes Zubehör und Anleitungen inkl. Montage- und Installationsanleitung (Nr. 3)', '4. Objektiv (§ 434 III): gilt, „soweit nicht wirksam etwas anderes vereinbart“ ist → zuerst nach negativer Beschaffenheitsvereinbarung fragen (Ausstellungssofa, B-Ware); beim Verbrauchsgüterkauf nur nach § 476 I 2, sonst formlos', '5. Gewöhnliche Verwendung + übliche Beschaffenheit (III 1 Nr. 1, 2), Haltbarkeit nur bei Gefahrübergang – keine Haltbarkeitsgarantie', '6. Öffentliche Äußerungen/Werbung (III 1 Nr. 2 b, Grenzen III 3: unverschuldete Unkenntnis, rechtzeitige Berichtigung, kein Einfluss auf die Kaufentscheidung) · Probe/Muster (Nr. 3) · Zubehör (Nr. 4)', '7. Montage (§ 434 IV): unsachgemäße Montage durch Verkäufer oder seinen Erfüllungsgehilfen (§ 278) oder fehlerhafte Montageanleitung']),
  R('Menge und Falschlieferung', ['Zu-wenig-Lieferung: seit 2022 selbst Sachmangel (Menge in § 434 II 2)', 'Zu-viel-Lieferung: umstritten – Skript: wohl Sachmangel; a. A. kein Mangel, Rückforderung über § 812 I 1 Alt. 1', 'Aliud steht dem Sachmangel gleich (§ 434 V) – bewusste, „mutwillige“ Falschlieferung ist dagegen Nichtleistung']),
  R('Digitale Elemente – Abgrenzung nach Skript', ['Ware mit digitalen Elementen (§ 327a III): Sache wäre ohne die digitalen Inhalte eine „leere Hülle“ → §§ 475a ff. (z. B. Computer/Smartphone mit Betriebssystem, E-Bike, Smart-TV, Mähroboter, Navi)', 'Erfüllt die Sache ihre Funktion auch ohne das Digitale (vorinstalliertes Spiel, separat gekaufte App, „Connect“-Dienste im Auto) → für das Digitale §§ 327 ff. (§§ 327a II, 475a II)', 'Datenträger, die nur als Träger digitaler Inhalte dienen (Musik-CD, USB-Stick mit Inhalt) → §§ 327 ff. (§ 327 V); Leermedien → normales Kaufrecht', 'Zusätzliche Pflichten beim Verbrauchsgüterkauf: Installation (§ 475b II, VI Nr. 2) und Aktualisierung – subjektiv wie vereinbart (III Nr. 2) und objektiv für den üblicherweise erwartbaren Zeitraum (IV Nr. 2)', 'Objektive Pflicht umfasst Updates (Funktion, Sicherheit), keine Upgrades; Updates darf auch der Hersteller liefern; Verkürzung/Ausschluss nur nach § 476 I 2', 'Dauerhafte Bereitstellung (§ 475c): Mangel, wenn die Elemente im Bereitstellungszeitraum fehlen, mindestens 2 Jahre ab Ablieferung (Verkehrsdaten im Navi)', 'Installiert der Verbraucher ein bereitgestelltes Update nicht, haftet der Unternehmer unter den Voraussetzungen des § 475b V nicht']),
  R('Rechtsmangel § 435 und § 436', ['Rechtsmangel: dingliche Rechte Dritter (Grundschuld, Hypothek, Dienstbarkeit), schuldrechtliche Rechte (Mieter, § 566 I), öffentlich-rechtliche Beschränkungen (Sozialbindung)', 'Öffentliche Abgaben und Lasten sind weder Rechts- noch Sachmangel: § 436 regelt nur die Verteilung (I: Erschließungsbeiträge für bis Vertragsschluss begonnene Maßnahmen trägt der Verkäufer; II: keine Haftung für Freiheit von nicht eintragungsfähigen Lasten wie Grundsteuer)']),
  R('Gefahrübergang und Verbrauchsgüterkauf', ['Maßgeblich ist der Gefahrübergang (§ 434 I): Übergabe § 446 S. 1 · Annahmeverzug § 446 S. 3 · Versendungskauf § 447 (beim Verbrauchsgüterkauf nur eingeschränkt, § 475 II)', 'Vor Gefahrübergang: allgemeines Leistungsstörungsrecht (§§ 280 ff., 320 ff.) – danach §§ 437 ff.', 'Verbrauchsgüterkauf § 474 I: Verbraucher kauft Ware (bewegliche Sache) vom Unternehmer – nicht bei Verbraucher an Verbraucher, Unternehmer an Unternehmer, Verbraucher als Verkäufer oder Immobilien', 'Beweislastumkehr § 477 I: Zeigt sich der Mangel innerhalb eines Jahres, wird er für den Gefahrübergang vermutet – außer bei Unvereinbarkeit (offensichtliche Außenschäden, leicht Verderbliches); bei lebenden Tieren 6 Monate', 'Dauerhaft bereitgestellte digitale Elemente (§ 477 II): Vermutung während des ganzen Bereitstellungszeitraums, mindestens 2 Jahre']),
  R('Nacherfüllung – Details nach Skript', ['§ 437 ist eine Rechtsgrundverweisung: Voraussetzungen der verwiesenen Normen sind zu prüfen', 'Verschuldensunabhängig; Käufer wählt Nachbesserung oder Nachlieferung, Verkäufer ist gebunden (§ 439 I) – Recht zur zweiten Andienung', 'Aufwendungen trägt der Verkäufer (II), Aus- und Einbaukosten (III), Vorschuss für beides beim Verbrauchsgüterkauf (§ 475 IV)', 'Käufer stellt die Sache zur Verfügung (V); Verkäufer nimmt die ersetzte Sache auf eigene Kosten zurück (VI 2)', 'Keine Selbstvornahme im Kaufrecht (anders §§ 536a II, 637 I)', 'Verbrauchsgüterkauf: Nacherfüllung in angemessener Frist ab Unterrichtung und ohne erhebliche Unannehmlichkeiten (§ 475 V)', 'Befreiung von einer Art: Unmöglichkeit § 275 I (gebrauchte Stücksache → meist nur Reparatur), unverhältnismäßige Kosten § 439 IV (billiger Wecker → Austausch; Waschmaschine mit undichtem Schlauch → Reparatur)', 'Käufer kann bis zur Nacherfüllung den Kaufpreis zurückhalten (§ 320 I); gelingt sie, erlischt die Pflicht (§ 362 I)']),
  R('Schadensersatz neben der Leistung (Skript)', ['a) Schaden, den auch schnelle Nacherfüllung nicht beseitigt (Betriebsausfall) → §§ 437 Nr. 3, 280 I, ohne Verzug', 'b) Schaden durch verzögerte Nacherfüllung → §§ 437 Nr. 3, 280 I, II, 286 (Mahnung liegt meist schon im Nacherfüllungsverlangen)', 'c) Mangelfolgeschaden an Gesundheit, Eigentum, Vermögen → §§ 437 Nr. 3, 280 I', 'd) Minderwert der Sache → erst wenn die Nacherfüllung endgültig scheitert (Schadensersatz statt der Leistung)', 'e) Schutzpflichtverletzung während der Nacherfüllung → direkt §§ 280 I, 241 II, nicht Mängelrecht']),
  R('Digitale Produkte – Weiden-Systematik (Folie 150)', ['Sache ohne digitale Elemente → §§ 433 ff., 474 ff.', 'Sache mit funktionsnotwendigen digitalen Elementen → § 433 i. V. m. §§ 475a ff. (Aktualisierungspflicht des Verkäufers, § 475b)', 'Sache mit nicht funktionsnotwendigem digitalem Produkt → Kaufrecht für die Sache, §§ 327 ff. für das digitale Produkt', 'Reines digitales Produkt (App, Software, Streaming) → §§ 327 ff., auch bei „Zahlung“ mit Daten (§ 327 III)'])],
 defs: [
  ['Sachmangel', 'Abweichung von den subjektiven, objektiven oder Montageanforderungen bei Gefahrübergang'],
  ['Verbrauchsgüterkauf (§ 474)', 'Verbraucher kauft von einem Unternehmer eine Ware'],
  ['Aliud', 'Lieferung einer anderen als der geschuldeten Sache (§ 434 V)'],
  ['Ware mit digitalen Elementen (§ 327a III)', 'Sache, die ihre Funktionen ohne enthaltene oder verbundene digitale Produkte nicht erfüllen kann'],
  ['Kompatibilität', 'Funktioniert mit der Hard- und Software, mit der solche Waren üblicherweise genutzt werden, ohne Veränderung'],
  ['Interoperabilität', 'Funktioniert auch mit anderer Hard- oder Software als der üblichen'],
  ['Negative Beschaffenheitsvereinbarung', 'Vereinbarung einer geringeren als der objektiv geschuldeten Qualität (B-Ware, Vorführgerät)'],
  ['Update vs. Upgrade', 'Update erhält die Vertragsmäßigkeit (objektiv geschuldet), Upgrade verbessert (nur wenn vereinbart)'],
  ['Rechtsgrundverweisung', 'Verweis auf eine Norm samt ihren Voraussetzungen (§ 437 → §§ 323, 280 ff. prüfen)']],
 weiden: [
  'Weiden-Fall Kira Kunterbunt (Werbeagentur kauft Möbel): Prüfung in der Reihenfolge Nacherfüllung → Rücktritt → Minderung.',
  'Altklausuren: Der Verkäufer muss die Transportkosten der Nacherfüllung tragen und auf Verlangen einen Vorschuss zahlen. Öffnen und Verschließen der Wände (Ein- und Ausbau) zahlt der Verkäufer.',
  'Altklausur: Ein Mangel liegt auch vor, wenn sich die Sache nicht für die gewöhnliche Verwendung eignet oder nicht die übliche Beschaffenheit hat.',
  'Altklausur und Weiden-Folien: Erfüllt das Gerät seine Grundfunktion (z. B. Kühlen) auch ohne App, ist es nach wohl h. M. keine Ware mit digitalen Elementen.',
  'Altklausur Diesel-Gate: Der Händler schuldet Nacherfüllung auch ohne Kenntnis der Manipulation, soweit keine Unmöglichkeit eingreift. Gegen den Hersteller gibt es keinen Nacherfüllungsanspruch.',
  'Verschleiß beim Gebrauchtwagen ist kein Mangel, wenn er alters- und laufleistungsüblich ist.'],
 fallen: [
  'Vor Rücktritt oder SE statt der Leistung immer eine Frist zur Nacherfüllung – außer entbehrlich (§§ 281 II, 323 II, 440, 475d).',
  'Im Kaufrecht gibt es kein Selbstvornahmerecht.',
  'Gegen den Hersteller gibt es keine Gewährleistung – nur Garantie, Delikt oder ProdHaftG.',
  'Beweislastumkehr 1 Jahr (§ 477 I) ≠ Verjährung 2 Jahre (§ 438).',
  'Vorausgesetzte Verwendung (§ 434 II 1 Nr. 2) nur, wenn der Verkäufer sie kannte und mittrug – ein stiller Plan des Käufers genügt nicht.',
  'Vorinstalliertes Spiel auf dem Smartphone: Mangel des Spiels → §§ 327 ff., nicht § 434.',
  'Grundsteuer oder Erschließungsbeiträge sind kein Mangel – § 436 verteilt nur die Last.',
  'Beschädigt der Monteur bei der Nacherfüllung die Wand: §§ 280 I, 241 II, nicht § 437.',
  'Zitierstand: wie dein dtv-BGB (vor dem 23.07.2026) – Vorschuss § 475 IV, Frist § 475 V. Neu seit 23.07.2026 (Recht auf Reparatur, nur für Verträge ab 31.07.2026): Information § 475 IV, Vorschuss § 475 V, Frist § 475 VI, Verjährung +12 Monate nach Reparatur § 475e V.']
},
{
 id: 'vl7', vl: 'VL 7', t: 'Mängelhaftung beim Kauf II: Sekundärrechte, Garantie, Verjährung', fb: 'VL 7', ft: 'kauf',
 lp: 'Weiden/Wende LP 10 Gewährleistungsrecht (Folien 145–148 Garantie und Informationspflichten)',
 klausur: 'sehr oft', klausurD: 'Rücktritt, Minderung, Schadensersatz, Garantie gegen Gewährleistung, Haftungsausschluss privat und gewerblich, Verkürzung der Verjährung.',
 merk: 'Mangel → Frist (oder entbehrlich) → Rücktritt | Minderung | SE → Ausschlüsse → Verjährung',
 ueber: [
  'Rücktritt und Minderung brauchen kein Verschulden, Schadensersatz schon',
  'Rücktritt nur bei erheblichem Mangel, Minderung auch bei unerheblichem',
  'Garantie ist eine freiwillige Zusatzleistung neben der Gewährleistung'],
 reihen: [
  R('Rücktritt §§ 437 Nr. 2, 323 (bzw. § 326 V)', ['Mangel bei Gefahrübergang, kein Ausschluss', 'Erfolglose Frist zur Nacherfüllung oder entbehrlich (§§ 323 II, 440, 475d)', 'Nicht unerheblich (§ 323 V 2; BGH: bei behebbaren Mängeln in der Regel ab 5 % des Kaufpreises)', 'Erklärung (§ 349) → Rückgewähr (§§ 346 ff.)']),
  R('Minderung §§ 437 Nr. 2, 441', ['Voraussetzungen wie Rücktritt, aber auch bei unerheblichem Mangel (§ 441 I 2)', 'Erklärung gegenüber dem Verkäufer', 'Berechnung (§ 441 III): geminderter Preis = Kaufpreis × Wert mangelhaft / Wert mangelfrei', 'Zu viel Gezahltes zurück (§ 441 IV)']),
  R('Schadensersatz §§ 437 Nr. 3, 280 ff.', ['Mangelfolgeschaden (an anderen Rechtsgütern): § 280 I, ohne Frist', 'Behebbarer Mangelschaden: §§ 280 I, III, 281, mit Frist', 'Unbehebbarer Mangel: §§ 280 I, III, 283 bzw. § 311a II', 'Vertretenmüssen (vermutet, § 280 I 2) – ein Händler muss originalverpackte Ware nicht untersuchen, der Hersteller ist nicht sein Erfüllungsgehilfe', 'Großer SE nur bei erheblichem Mangel (§ 281 I 3), kleiner SE immer; stattdessen Aufwendungsersatz (§ 284)']),
  R('Ausschlüsse & Verjährung', ['Kenntnis des Käufers (§ 442)', 'Vereinbarter Ausschluss (§ 444): unwirksam bei Arglist oder Garantie; beim Verbrauchsgüterkauf grundsätzlich unwirksam (§ 476 I)', '§ 377 HGB beim beiderseitigen Handelskauf', 'Verjährung § 438: 2 Jahre ab Ablieferung; 5 Jahre bei Bauwerken und Baumaterial; 30 Jahre bei dinglichen Rechten Dritter', 'Verbrauchsgüterkauf: gebrauchte Sachen auf 1 Jahr verkürzbar nur nach § 476 II; Ablaufhemmung 4 Monate nach erstem Auftreten des Mangels (§ 475e III)']),
  R('Garantie vs. Gewährleistung (Weiden-Folie 147)', ['Gewährleistung: gesetzlich, gegen den Verkäufer, Mangel bei Gefahrübergang, 2 Jahre', 'Garantie (§ 443): freiwillig, gegen den Garantiegeber (Verkäufer oder Hersteller), Inhalt und Dauer frei bestimmt, Mangel während der Garantiezeit, auch Verschleiß möglich', 'Haltbarkeitsgarantie: Vermutung, dass ein Mangel während der Laufzeit die Garantie auslöst (§ 443 II)', 'Regress des Händlers gegen den Lieferanten (§§ 445a, 445b, 478)'])],
 defs: [
  ['Erheblichkeit (§ 323 V 2)', 'Interessenabwägung; bei behebbaren Mängeln regelmäßig ab 5 % des Kaufpreises'],
  ['Arglist', 'Verkäufer kennt den Mangel (oder hält ihn für möglich) und weiß, dass der Käufer ihn nicht kennt'],
  ['Garantie (§ 443)', 'freiwillige Zusage zusätzlich zu den gesetzlichen Rechten']],
 weiden: [
  'Weiden-Tabelle: Gewährleistung „2 Jahre Neuware, 1 Jahr Gebrauchtware“. Das eine Jahr gilt nur, wenn die Frist wirksam verkürzt wurde – beim Verbrauchsgüterkauf nur unter den Voraussetzungen des § 476 II.',
  'Altklausur: Verkürzung oder Ausschluss in AGB ist nicht per se verboten, muss aber den gesetzlichen Vorgaben entsprechen – sonst unwirksam (§§ 476, 309 Nr. 7, 8).',
  'Altklausur: Liegen die Rücktrittsvoraussetzungen vor, ist der Kaufpreis nach § 346 I zurückzugewähren.',
  'Altklausur: Vor SE statt der Leistung muss der Käufer dem Verkäufer erfolglos eine Frist zur Nacherfüllung setzen.',
  'Neu: EU-Durchführungsverordnung 2025/1960 – harmonisierte Mitteilung über die Gewährleistung und Kennzeichnung von Haltbarkeitsgarantien (Informationspflichten der Händler).'],
 fallen: [
  'Bei einem Bagatellmangel kein Rücktritt, aber Minderung.',
  'Minderung ist eine Verhältnisrechnung, keine Subtraktion.',
  'Privatverkauf „ohne Gewährleistung“ ist wirksam – außer bei Arglist (§ 444).',
  'Abgelaufene Gewährleistung lässt eine Herstellergarantie unberührt.']
},
{
 id: 'vl8', vl: 'VL 8', t: 'AGB, Widerruf, Delikt I, Schadensumfang', fb: 'VL 8', ft: 'agb',
 lp: 'Weiden/Wende LP 5 Fernabsatzrecht · LP 7 AGB · LP 9 Schadensersatz · LP 13 Deliktsrecht · LP 14 Haftung für das Handeln Dritter',
 klausur: 'oft', klausurD: 'AGB-Einbeziehung (Hinweis erst nach Einigung), § 309 Nr. 7, Widerrufsfrist berechnen, § 823 I und II, Umfang des Schadensersatzes, § 278 gegen § 831.',
 merk: 'AGB: vorn nach hinten (§§ 305, 305b, 305c), dann hinten nach vorn (§§ 309, 308, 307)',
 ueber: [
  'AGB-Recht schützt die Partei, der vorformulierte Bedingungen gestellt werden',
  'Verbraucher können Fernabsatzverträge 14 Tage ohne Begründung widerrufen',
  'Deliktsrecht = gesetzliches Schuldverhältnis, gilt auch ohne Vertrag',
  'Schadensersatz stellt den Geschädigten so, als wäre das schädigende Ereignis nicht passiert'],
 reihen: [
  R('AGB-Prüfung (Weiden-Folie 88)', ['„Von vorn nach hinten“: AGB-Qualität (§ 305 I) und Einbeziehung (§ 305 II; gegenüber Unternehmern § 310 I)', 'Vorrang der Individualabrede (§ 305b)', 'Keine überraschende oder mehrdeutige Klausel (§ 305c I, II)', '„Von hinten nach vorn“: § 309 (ohne Wertungsmöglichkeit) → § 308 (mit Wertungsmöglichkeit) → Generalklausel § 307', 'Rechtsfolge § 306: Vertrag bleibt wirksam, Gesetz gilt, keine geltungserhaltende Reduktion']),
  R('Widerruf im Fernabsatz (Weiden-Folie 68)', ['Verbrauchervertrag, Fernabsatz (§ 312c) oder außerhalb von Geschäftsräumen (§ 312b)', 'Widerrufsrecht (§ 312g I), keine Ausnahme nach § 312g II (Maßanfertigung, Verderbliches, entsiegelte Hygieneartikel …)', 'Eindeutige Erklärung (§ 355 I), ohne Begründung; rechtzeitige Absendung genügt', 'Frist 14 Tage (§ 355 II), Beginn mit Erhalt der Ware (§ 356 II) und ordnungsgemäßer Belehrung; ohne Belehrung spätestens nach 12 Monaten und 14 Tagen (§ 356 III); Fristende nach §§ 187 ff., 193', 'Rückabwicklung (§§ 357, 357a): Erstattung binnen 14 Tagen inkl. Hinsendekosten (Standardversand); Rücksendekosten trägt der Verbraucher bei entsprechender Information; Wertersatz nur bei Umgang über die Prüfung hinaus']),
  R('Deliktshaftung § 823 I (Weiden-Folie 184)', ['Rechtsgut i. S. d. § 823 I (Leben, Körper, Gesundheit, Freiheit, Eigentum, sonstiges absolutes Recht)', 'Verletzungshandlung (Tun oder Unterlassen trotz Verkehrssicherungspflicht)', 'Widerrechtlich (indiziert; Rechtfertigung §§ 227–229)', 'Verschulden (§ 276; Deliktsfähigkeit §§ 827, 828)', 'Schaden', 'Doppelte Kausalität: haftungsbegründend (Handlung → Rechtsgutsverletzung) und haftungsausfüllend (Rechtsgutsverletzung → Schaden)']),
  R('Haftung für Dritte (Weiden-Folie 193)', ['§ 278: Zurechnungsnorm, setzt ein Schuldverhältnis voraus, Weisungsgebundenheit egal, keine Entlastung', '§ 831: eigene Anspruchsgrundlage, kein Schuldverhältnis nötig, weisungsabhängiger Gehilfe, Entlastung möglich (§ 831 I 2)', 'Erfüllungsgehilfe: wird mit Wissen und Wollen des Schuldners bei der Erfüllung seiner Verbindlichkeit tätig']),
  R('Umfang des Schadensersatzes (LP 9, Folie 123)', ['Differenzmethode: wirtschaftliche Lage vor und nach dem Schadensereignis', 'Grundsatz positives Interesse, ausnahmsweise negatives Interesse (z. B. § 122, § 179 II)', 'Kausalität für jede Schadensposition: Äquivalenz (conditio sine qua non) → Adäquanz → Schutzzweck der Norm', 'Naturalrestitution (§ 249 I), Geld statt Herstellung (§ 249 II, Umsatzsteuer nur wenn angefallen), Wertersatz (§ 251)', 'Entgangener Gewinn (§ 252), immateriell nur in gesetzlichen Fällen (§ 253), Mitverschulden (§ 254)'])],
 defs: [
  ['AGB (§ 305 I)', 'für eine Vielzahl von Verträgen vorformulierte Bedingungen, die eine Partei der anderen stellt'],
  ['Fernabsatzvertrag (§ 312c)', 'Vertragsschluss ausschließlich über Fernkommunikationsmittel im Rahmen eines Fernabsatzsystems'],
  ['Schutzgesetz (§ 823 II)', 'Norm, die zumindest auch den Einzelnen schützen soll (z. B. § 229 StGB, § 263 StGB)'],
  ['Verrichtungsgehilfe (§ 831)', 'weisungsabhängig in den Geschäftskreis des Geschäftsherrn eingegliedert']],
 weiden: [
  'Altklausur: AGB, auf die erst nach der mündlichen Einigung hingewiesen wird, werden nicht Vertragsbestandteil.',
  'Altklausur: Ein vollständiger Haftungsausschluss in AGB ist unwirksam (§ 309 Nr. 7) – dann haftet der Verwender auch bei leichter Fahrlässigkeit.',
  'Weiden-Folie 87: § 309 gilt nur für Verbraucherverträge, § 308 überwiegend, § 307 für alle Verträge.',
  'Altklausuren Widerruf: Fehlt eine ordnungsgemäße Belehrung, beginnt die Frist zunächst nicht. Widerruf am 30.12. ist dann noch wirksam. Fristende immer mit § 193 nachrechnen.',
  'Altklausuren Delikt: § 823 II i. V. m. § 229 StGB als Schutzgesetz, Schmerzensgeld, Verdienstausfall als Folgeschaden; c.i.c. (§§ 280 I, 311 II, 241 II) im Kaufhaus.',
  'Weiden-Fall Herbert Hoch: Wertersatz für das zerstörte Bild (§ 251 I), aber kein Ersatz für den ideellen Wert (§ 253 I).',
  'Weiden-Fall Tuningwerkstatt: kein Mangel am Werk (Tuning), aber §§ 280 I, 241 II, 278 für die verschmutzten Sitze.'],
 fallen: [
  'Erst die Einbeziehung prüfen, dann die Inhaltskontrolle.',
  'Eine unwirksame Klausel fällt ganz weg.',
  'Maßanfertigung: kein Widerrufsrecht.',
  'Reiner Vermögensschaden fällt nicht unter § 823 I – aber unter § 823 II oder § 826.',
  '§ 278 kennt keine Entlastung, § 831 schon.',
  'Notwehr gibt es nur gegen Menschen; gegen Tiere und Sachen hilft § 228.']
},
{
 id: 'vl9', vl: 'VL 9', t: 'Delikt II, Sachenrecht, Bereicherung, Abtretung', fb: 'VL 9', ft: 'sach',
 lp: 'Weiden/Wende LP 13 Deliktsrecht & Gefährdungshaftung · LP 15 Sachenrecht · LP 16 Abstraktionsprinzip und Ausgleich · LP 10a Abtretung (nur Moodle)',
 klausur: 'oft', klausurD: 'Eigentumserwerb (Grundstück: Auflassung + Eintragung), gutgläubiger Erwerb, Bereicherung, Tierhalter, Produkthaftung, Abtretung und Factoring.',
 merk: 'Eigentum: Einigung + Übergabe + Berechtigung (sonst §§ 932 ff.) · Rückholung bei nichtigem Vertrag über § 812',
 ueber: [
  'Schuldrechtliche Ansprüche wirken relativ (nur gegen den Schuldner), dingliche absolut (gegen jeden)',
  'Gefährdungshaftung: Haftung ohne Verschulden für eine erlaubte Gefahrenquelle (Tier, Kfz, Produkt)',
  'Bereicherungsrecht gleicht aus, was das Abstraktionsprinzip zurücklässt'],
 reihen: [
  R('Tierhalterhaftung § 833 (Weiden-Folie 189)', ['Tod oder Verletzung eines Menschen oder Sachbeschädigung', 'Verursacht durch ein Tier (typische Tiergefahr)', 'Anspruchsgegner ist der Halter', 'Keine Ausnahme nach § 833 S. 2 (Nutztier + Sorgfalt)', 'Schaden + haftungsausfüllende Kausalität']),
  R('Produkthaftung', ['ProdHaftG: Fehler (Konstruktion, Fabrikation, Instruktion) → Personenschaden oder Schaden an einer anderen, privat genutzten Sache; ohne Verschulden; 500 € Selbstbeteiligung beim Sachschaden (§ 11)', '§ 823 I (Produzentenhaftung): Verschulden wird vermutet, Entlastung bei unvermeidbarem Ausreißer möglich', 'Das fehlerhafte Produkt selbst wird nicht ersetzt']),
  R('Herausgabe § 985', ['Anspruchsteller ist Eigentümer (Erwerbskette prüfen)', 'Anspruchsgegner ist Besitzer (§ 854; mittelbarer Besitz § 868; Besitzdiener § 855 ist kein Besitzer)', 'Kein Recht zum Besitz (§ 986) – z. B. Käufer unter Eigentumsvorbehalt bis zum Rücktritt (§ 449 II)']),
  R('Eigentumserwerb an beweglichen Sachen', ['Einigung + Übergabe (§ 929 S. 1) oder Ersatz: § 929 S. 2, § 930 (Besitzkonstitut), § 931 (Abtretung des Herausgabeanspruchs)', 'Berechtigung (Eigentümer oder Ermächtigung § 185)', 'Sonst gutgläubig (§§ 932–934): weder bekannt noch grob fahrlässig unbekannt (§ 932 II); Gebrauchtwagen ohne Zulassungsbescheinigung Teil II = grob fahrlässig', 'Kein Abhandenkommen (§ 935 I) – Ausnahme Geld, Inhaberpapiere, öffentliche Versteigerung (§ 935 II)']),
  R('Eigentumserwerb an Grundstücken', ['Auflassung vor dem Notar (§§ 873 I, 925 I)', 'Eintragung ins Grundbuch', 'Berechtigung – sonst gutgläubiger Erwerb nach § 892 (nur Kenntnis oder eingetragener Widerspruch schadet)', 'Formmangel des Kaufvertrags (§ 311b I 1) heilt durch Auflassung und Eintragung (§ 311b I 2)']),
  R('Bereicherung § 812 I 1 Alt. 1 (Weiden-Folie 219)', ['Etwas erlangt (z. B. Besitz und Eigentum)', 'Durch Leistung = bewusste und zweckgerichtete Mehrung fremden Vermögens', 'Ohne Rechtsgrund (z. B. Kaufvertrag nichtig)', 'Kein Ausschluss (§ 814 Kenntnis der Nichtschuld, § 817 S. 2)', 'Umfang (§ 818): Herausgabe samt Nutzungen und Ersatz (I), Wertersatz (II), Entreicherung (III), verschärfte Haftung (§§ 818 IV, 819)', 'Daneben: Verfügung eines Nichtberechtigten (§ 816)']),
  R('Abtretung (LP 10a)', ['Abtretungsvertrag zwischen altem Gläubiger (Zedent) und neuem Gläubiger (Zessionar) (§ 398) – formfrei, ohne Zustimmung des Schuldners', 'Bestehende Forderung, kein Abtretungsverbot (§ 399; aber § 354a HGB unter Kaufleuten)', 'Folge: Der neue Gläubiger tritt an die Stelle des alten', 'Schuldnerschutz: Einwendungen bleiben (§ 404), Aufrechnung (§ 406), Zahlung an den alten Gläubiger befreit bei Unkenntnis (§ 407)', 'Factoring = Forderungskauf; beim echten Factoring trägt der Factor das Ausfallrisiko (Delkredere)'])],
 defs: [
  ['Besitz (§ 854)', 'tatsächliche Sachherrschaft'],
  ['Eigentum (§ 903)', 'umfassendes Herrschaftsrecht über eine Sache'],
  ['Abhandenkommen', 'unfreiwilliger Verlust des unmittelbaren Besitzes (Diebstahl, Verlieren)'],
  ['Leistung (Bereicherungsrecht)', 'bewusste und zweckgerichtete Mehrung fremden Vermögens'],
  ['Zession', 'Abtretung einer Forderung (§ 398)']],
 weiden: [
  'Weiden-Folie 200: schuldrechtliche Ansprüche relativ, dingliche Ansprüche absolut.',
  'Altklausur: Grundstückseigentum durch Einigung in notarieller Form (Auflassung) und Eintragung ins Grundbuch.',
  'Altklausur: Ein Kaufvertrag ist auch wirksam, wenn der Verkäufer nicht Eigentümer der Sache ist.',
  'Altklausur Bereicherung: Wer ohne Rechtsgrund eine Sache erlangt, muss auch den Ersatz für die zerstörte Sache herausgeben (§ 818 I).',
  'Altklausur: Die Factoring-Bank wird Inhaberin der Forderung durch die Abtretungsvereinbarung.',
  'Weiden: Die Abtretung wird nicht in der Vorlesung besprochen (Moodle-Material und Podcast), kann aber in der Klausur vorkommen.'],
 fallen: [
  'Nichtiger Kaufvertrag ≠ nichtige Übereignung → Rückholung über § 812, nicht über § 985.',
  'Geld kann trotz Diebstahl gutgläubig erworben werden (§ 935 II).',
  'Der Eigentümer darf sich die Sache nicht eigenmächtig zurückholen (§§ 858, 861).',
  '§ 828 II gilt nicht beim ruhenden Verkehr (parkendes Auto).',
  'Ohne Rücktritt kein Herausgabeanspruch beim Eigentumsvorbehalt (§ 449 II).']
}
];
window.dispatchEvent(new Event('wpr-data'));
})();
