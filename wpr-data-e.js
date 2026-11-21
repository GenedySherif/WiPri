(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), s = (title, items) => ({ t: 'schema', title, items }),
  b = (title, text) => ({ t: 'bsp', title, text }), f = (title, text) => ({ t: 'falle', title, text }), m = t => ({ t: 'merk', text: t }), v = (title, text) => ({ t: 'vert', title, text });
const cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), tf = (title, items) => ({ t: 'tf', title, items }), st = (title, items) => ({ t: 'steps', title, items }), qc = (q, a) => ({ t: 'check', q, a });
const W = window.WPR = window.WPR || {};

W.tipps1 = [
  ['Rechtsweg zuerst', 'Bevor Sie über AG oder LG nachdenken: Welches Rechtsgebiet? Schadensersatz unter Bürgern gehört vor die ordentlichen Gerichte (§ 13 GVG), auch wenn derselbe Unfall zusätzlich ein Bußgeld- oder Strafverfahren auslöst.'],
  ['Aktuelle Streitwertgrenze', 'Seit 01.01.2026 ist das AG bis einschließlich 10.000 € zuständig (§ 23 Nr. 1 GVG). Ältere Lehrbücher und Fragensammlungen nennen noch 5.000 €. Schreiben Sie in der Klausur die aktuelle Grenze und erwähnen Sie ggf. die Änderung.'],
  ['Örtliche Zuständigkeit', 'Allgemeiner Gerichtsstand ist der Wohnsitz des Beklagten (§§ 12, 13 ZPO), bei juristischen Personen der Sitz (§ 17 ZPO). Wer klagt, muss also zum Gegner.'],
  ['Ohne Titel keine Vollstreckung', 'Zwangsvollstreckung setzt einen Titel voraus (§§ 704, 794 ZPO): Endurteil, gerichtlicher Vergleich, Vollstreckungsbescheid. Ein Urteil allein zwingt niemanden zum Zahlen, erst die Vollstreckung.'],
  ['Mahnverfahren in 4 Schritten', 'Antrag → Mahnbescheid → 2 Wochen Widerspruchsfrist → Vollstreckungsbescheid → 2 Wochen Einspruchsfrist. Bei Widerspruch oder Einspruch geht es ins streitige Verfahren.'],
  ['EU-Verordnung vs. Richtlinie', 'Verordnung gilt unmittelbar (z. B. DSGVO). Richtlinie bindet nur im Ziel und muss umgesetzt werden (z. B. Warenkaufrichtlinie → §§ 434 ff., 474 ff. BGB). Rechtsgrundlage: Art. 288 AEUV.'],
  ['Zwingend vs. dispositiv', 'Schuldrecht ist überwiegend dispositiv (Vertragsfreiheit, § 311 I BGB). Sachenrecht ist zwingend (Typenzwang). Verbraucherschutzrecht ist zugunsten des Verbrauchers zwingend (z. B. § 476 BGB).'],
  ['HGB vor BGB', 'Das HGB ist Sonderprivatrecht der Kaufleute und geht als lex specialis vor. Typische Abweichungen: § 350 HGB (Bürgschaft formfrei), § 377 HGB (Rügeobliegenheit), § 366 HGB (guter Glaube an Verfügungsbefugnis).']
];

W.tipps = {
2: [
  cmp('Altersgrenzen, die in jeder Klausur auftauchen', ['Alter', 'Rechtsfolge', 'Norm'], [
    ['Geburt', 'Rechtsfähigkeit', '§ 1 BGB'], ['unter 7', 'geschäftsunfähig, deliktsunfähig', '§§ 104 Nr. 1, 828 I BGB'],
    ['7 bis 17', 'beschränkt geschäftsfähig, bedingt deliktsfähig (Einsichtsfähigkeit)', '§§ 106, 828 III BGB'],
    ['7 bis 9', 'im Straßenverkehr keine Haftung für Fahrlässigkeit', '§ 828 II BGB'],
    ['14', 'strafmündig', '§ 19 StGB'], ['16', 'testierfähig', '§ 2229 I BGB'], ['18', 'volljährig, voll geschäftsfähig', '§ 2 BGB']]),
  l('Klausurtipps', [
    'Drei Fähigkeiten trennen :: Rechtsfähigkeit (Träger von Rechten), Geschäftsfähigkeit (wirksame Willenserklärungen), Deliktsfähigkeit (Verantwortung für Schäden). Ein Säugling kann Eigentümer und Erbe sein, aber keinen Vertrag schließen.',
    'Aufsichtspflicht :: Haftet das Kind nicht (§ 828 BGB), prüfen Sie die Eltern aus § 832 BGB. Die Aufsichtspflichtverletzung wird vermutet, die Eltern können sich entlasten.',
    'Juristische Person :: Handelt durch Organe. Für Schäden durch den Vorstand haftet der Verein über § 31 BGB, daneben haftet das Organmitglied selbst aus § 823 BGB.',
    'GbR nach MoPeG :: Seit 01.01.2024 ist die GbR rechtsfähig, wenn sie am Rechtsverkehr teilnimmt (§ 705 II BGB). Die Gesellschafter haften persönlich und unbeschränkt (§ 721 BGB). Ältere Quellen sprechen noch von „Teilrechtsfähigkeit“.',
    'Sachen :: § 90 BGB verlangt Körperlichkeit, nicht Festigkeit. Flüssigkeiten und Gase in Behältern sind Sachen. Elektrizität, Rechte und freies Grundwasser nicht. Tiere sind keine Sachen, werden aber wie Sachen behandelt (§ 90a BGB).',
    'Bestandteil vs. Zubehör :: Wesentliche Bestandteile (§§ 93, 94 BGB) können kein eigenes Eigentum haben (Heizung, Elektrik im Haus). Zubehör (§ 97 BGB) bleibt selbstständig, wird beim Kauf aber im Zweifel mitverkauft (§ 311c BGB).',
    'Kaufmann :: Istkaufmann nach § 1 HGB (Handelsgewerbe), Kannkaufmann nach § 2 HGB (Eintragung konstitutiv), Formkaufmann nach § 6 HGB (GmbH, AG kraft Rechtsform).',
    'Handelsregister § 15 I HGB :: Was eintragungspflichtig, aber nicht eingetragen und bekanntgemacht ist (z. B. Widerruf einer Prokura), kann einem gutgläubigen Dritten nicht entgegengehalten werden.'
  ]),
  f('Klausurfalle Verbraucher', 'Maßgeblich ist der objektive Zweck des konkreten Geschäfts, nicht der Beruf. Ein Rechtsanwalt, der privat einen Fernseher kauft, ist Verbraucher. Bei gemischter Nutzung entscheidet, welcher Zweck überwiegt (§ 13 BGB). Bei einer natürlichen Person ist im Zweifel von Verbraucherhandeln auszugehen.'),
  tf('Schnelltest', [
    ['Ein 5-jähriges Kind kann Eigentümer eines Grundstücks werden.', true, 'Rechtsfähigkeit reicht für die Eigentümerstellung (§ 1 BGB). Den Erwerb muss der gesetzliche Vertreter vornehmen.'],
    ['Ein Pferd ist eine Sache im Sinne des § 90 BGB.', false, '§ 90a BGB: Tiere sind keine Sachen. Die Sachvorschriften gelten aber entsprechend.'],
    ['Eine Einbauküche ist immer wesentlicher Bestandteil des Hauses.', false, 'Sie lässt sich regelmäßig ohne Zerstörung ausbauen. Die Einordnung ist regional unterschiedlich, im Zweifel ist sie kein wesentlicher Bestandteil.'],
    ['Eine GmbH ist Kaufmann, auch wenn sie nur einen Kiosk betreibt.', true, 'Formkaufmann nach § 6 HGB i. V. m. § 13 III GmbHG.']
  ])
],
3: [
  l('Klausurtipps', [
    'Drei Geschäfte beim Barkauf :: Kaufvertrag (§ 433 BGB), Übereignung der Ware (§ 929 S. 1 BGB) und Übereignung des Geldes (§ 929 S. 1 BGB). Prüfen und benennen Sie alle drei getrennt.',
    'Folge der Abstraktion :: Ist der Kaufvertrag nichtig, bleibt die Übereignung grundsätzlich wirksam. Rückabwicklung läuft dann über § 812 I 1 Alt. 1 BGB (Leistungskondiktion), nicht über § 985 BGB.',
    'Fehleridentität :: Ausnahme vom Abstraktionsprinzip, wenn derselbe Mangel beide Geschäfte erfasst: Geschäftsunfähigkeit, arglistige Täuschung (§ 123 BGB), Wucher (§ 138 II BGB). Dann scheitert auch die Übereignung, und § 985 BGB greift.',
    'Eigentumsvorbehalt :: Der Kaufvertrag ist unbedingt, nur die Übereignung ist aufschiebend bedingt durch vollständige Zahlung (§§ 449, 158 I BGB). Bis dahin hat der Käufer ein Anwartschaftsrecht.'
  ]),
  f('Klausurfalle', '„Mit dem Kaufvertrag ist K Eigentümer geworden“ ist ein grober Fehler. § 433 I 1 BGB verpflichtet nur zur Übereignung. Eigentum geht erst mit Einigung und Übergabe über (§ 929 S. 1 BGB), bei Grundstücken erst mit Auflassung und Eintragung (§§ 873, 925 BGB).'),
  qc('V verkauft und übergibt K ein Fahrrad. Später ficht V den Kaufvertrag wegen Inhaltsirrtums an. Wer ist Eigentümer?', 'K. Die Anfechtung nach § 119 I BGB betrifft nur den Kaufvertrag. Die Übereignung leidet nicht am selben Irrtum und bleibt wirksam. V kann das Rad nur über § 812 I 1 Alt. 1 BGB zurückverlangen (Rechtsgrund ist rückwirkend entfallen, § 142 I BGB).')
],
4: [
  s('Prüfungsreihenfolge der Anspruchsgrundlagen', [
    'Vertrag :: Primäransprüche (§ 433 BGB) und Sekundäransprüche (§§ 280 ff., 437 BGB).',
    'Vertragsähnlich :: culpa in contrahendo (§§ 280 I, 311 II, 241 II BGB), GoA (§§ 677 ff. BGB).',
    'Dinglich :: Herausgabe aus Eigentum (§ 985 BGB), Eigentümer-Besitzer-Verhältnis (§§ 987 ff. BGB).',
    'Delikt :: §§ 823 I, 823 II, 826, 831, 832 BGB, ProdHaftG, StVG.',
    'Bereicherung :: §§ 812 ff. BGB als Auffangtatbestand zuletzt.'
  ]),
  m('Merksatz: „Viele Quälen Dich Doch Bloß“ — Vertrag, Quasivertrag, Dinglich, Delikt, Bereicherung. Grund: Vertragliche Wertungen (z. B. Haftungsmilderungen) können spätere Ansprüche beeinflussen.'),
  l('Klausurtipps', [
    'Gutachtenstil :: Obersatz im Konjunktiv („K könnte gegen V einen Anspruch auf … aus § … haben“) → Definition → Subsumtion → Ergebnis („Also …“). Urteilsstil („K ist Verbraucher, da …“) nur für Unproblematisches.',
    'Dreischritt im Anspruch :: Entstanden? Erloschen (Erfüllung § 362, Aufrechnung § 389, Rücktritt)? Durchsetzbar (Einreden wie Verjährung § 214, Zurückbehaltung § 320)?',
    'Einwendung vs. Einrede :: Einwendungen beachtet das Gericht von Amts wegen (Nichtigkeit, Erfüllung). Einreden wirken nur, wenn der Schuldner sich darauf beruft (Verjährung).',
    'Zitiertechnik :: § 433 I 1 BGB = Absatz 1 Satz 1. Bei mehreren Varianten „Alt.“ bzw. „Var.“, bei Aufzählungen „Nr.“. Immer das Gesetz nennen.',
    'Skizze zuerst :: Personen, Beziehungen (Pfeile mit Anspruchsrichtung) und einen Zeitstrahl mit Daten zeichnen. Das spart Zeit und verhindert Fristfehler.',
    'Schwerpunkte setzen :: Unproblematisches kurz, Probleme des Sachverhalts ausführlich. Jede Information im Sachverhalt hat meistens einen Zweck.'
  ]),
  f('Klausurfalle', 'Den Sachverhalt nicht „verbessern“ oder ergänzen. Steht dort nichts zum Verschulden, wird es bei § 280 I 2 BGB vermutet. Unterstellungen („wahrscheinlich wusste V …“) kosten Punkte.')
],
5: [
  l('Klausurtipps', [
    'Angebot oder invitatio? :: Schaufenster, Kataloge, Speisekarten und Webshops sind in der Regel nur Aufforderungen zur Abgabe eines Angebots. Das Angebot macht der Kunde, der Verkäufer nimmt an.',
    'Zugang § 130 I BGB :: Die Erklärung muss in den Machtbereich des Empfängers gelangen, und unter gewöhnlichen Umständen ist Kenntnisnahme zu erwarten. Briefkasten nach der Leerung oder E-Mail nach Geschäftsschluss geht erst am nächsten Werktag zu.',
    'Annahmefrist :: Unter Anwesenden sofort (§ 147 I), unter Abwesenden in der regelmäßig zu erwartenden Zeit (§ 147 II). Verspätete Annahme oder Annahme mit Änderungen gilt als neues Angebot (§ 150 I, II BGB).',
    'Schweigen :: Grundsätzlich keine Willenserklärung. Ausnahmen: kaufmännisches Bestätigungsschreiben und § 362 HGB (Geschäftsbesorgung für Kaufleute).',
    'Auslegung :: Empfangsbedürftige Erklärungen nach dem objektiven Empfängerhorizont (§§ 133, 157 BGB). Gemeinsam Gewolltes geht dem Wortlaut vor (falsa demonstratio non nocet).',
    'Online-Bestellung :: Die automatische Eingangsbestätigung (§ 312i I 1 Nr. 3 BGB) ist meist keine Annahme. Fehlt der Button „zahlungspflichtig bestellen“, kommt gegenüber Verbrauchern kein Vertrag zustande (§ 312j III, IV BGB).'
  ]),
  s('Kaufmännisches Bestätigungsschreiben: Voraussetzungen', [
    'Kaufleute :: oder Personen, die wie Kaufleute am Geschäftsverkehr teilnehmen (Absender und Empfänger).',
    'Vorverhandlungen :: Es muss tatsächlich verhandelt worden sein, das Schreiben bestätigt einen angeblichen Vertragsschluss.',
    'Zeitnah :: Das Schreiben folgt unmittelbar auf die Verhandlungen.',
    'Redlichkeit :: Der Absender darf nicht bewusst Abweichendes festhalten, und die Abweichung darf nicht so erheblich sein, dass er nicht mit Zustimmung rechnen konnte.',
    'Kein unverzüglicher Widerspruch :: Dann gilt der Vertrag mit dem Inhalt des Schreibens.'
  ]),
  f('Klausurfalle', 'Auftragsbestätigung ≠ Bestätigungsschreiben. Die Auftragsbestätigung ist die Annahme eines Angebots. Weicht sie ab, ist sie ein neues Angebot nach § 150 II BGB, und Schweigen darauf bedeutet keine Zustimmung.')
],
6: [
  cmp('Formvorschriften, die Sie kennen müssen', ['Geschäft', 'Form', 'Folge bei Verstoß / Heilung'], [
    ['Grundstückskauf', 'notarielle Beurkundung, § 311b I 1', 'nichtig, Heilung durch Auflassung + Eintragung (§ 311b I 2)'],
    ['Schenkungsversprechen', 'notarielle Beurkundung, § 518 I', 'Heilung durch Bewirkung der Leistung (§ 518 II)'],
    ['Bürgschaft', 'Schriftform, § 766 S. 1 (nicht elektronisch)', 'Heilung durch Zahlung (§ 766 S. 3), für Kaufleute formfrei (§ 350 HGB)'],
    ['Verbraucherdarlehen', 'Schriftform, § 492 I', 'Heilung durch Auszahlung mit gesetzlichem Zins (§ 494 II)'],
    ['Kündigung Arbeitsvertrag', 'Schriftform, § 623 (nicht elektronisch)', 'nichtig'],
    ['Mietvertrag über 1 Jahr', 'Schriftform, § 550', 'nicht nichtig, sondern auf unbestimmte Zeit geschlossen']]),
  l('Klausurtipps', [
    'Grundsatz :: Formfreiheit. Eine Form gilt nur, wenn Gesetz oder Vereinbarung sie verlangen. Verstoß gegen gesetzliche Form: Nichtigkeit nach § 125 S. 1 BGB.',
    'Formarten unterscheiden :: Textform (§ 126b, z. B. E-Mail), Schriftform (§ 126, eigenhändige Unterschrift), elektronische Form (§ 126a, qualifizierte Signatur), Beglaubigung (§ 129, nur Unterschrift), Beurkundung (§ 128, gesamter Inhalt).',
    'Handschenkung :: Wird sofort übergeben, braucht es keine Form. § 518 BGB betrifft nur das Versprechen einer künftigen Schenkung.',
    'Funktionen der Form :: Warnfunktion (Bürgschaft, Schenkung), Beweisfunktion, Beratungsfunktion (Notar beim Grundstückskauf). Diese Funktion in der Klausur kurz nennen wertet die Argumentation auf.'
  ])
],
7: [
  s('Anfechtung: Prüfungsschema', [
    'Anfechtbare Willenserklärung :: Ist überhaupt eine Erklärung abgegeben worden?',
    'Anfechtungsgrund :: Inhalts- oder Erklärungsirrtum (§ 119 I), Eigenschaftsirrtum (§ 119 II), Übermittlungsfehler (§ 120), Täuschung oder Drohung (§ 123).',
    'Anfechtungserklärung :: gegenüber dem Anfechtungsgegner (§ 143 BGB). Das Wort „Anfechtung“ ist nicht nötig, der Wille zur Lösung muss erkennbar sein.',
    'Frist :: §§ 119, 120: unverzüglich nach Kenntnis (§ 121 I). § 123: ein Jahr ab Entdeckung bzw. Ende der Zwangslage (§ 124).',
    'Kein Ausschluss :: z. B. Bestätigung (§ 144) oder Vorrang der Gewährleistung.',
    'Rechtsfolge :: Nichtigkeit von Anfang an (§ 142 I). Bei §§ 119, 120 schuldet der Anfechtende den Vertrauensschaden (§ 122).'
  ]),
  l('Klausurtipps', [
    'Motivirrtum :: Ein Irrtum im Beweggrund („Ich dachte, ich brauche das“) ist unbeachtlich. Ausnahme ist nur der Eigenschaftsirrtum (§ 119 II).',
    'Wert ist keine Eigenschaft :: Der Marktwert selbst ist keine verkehrswesentliche Eigenschaft. Wertbildende Faktoren (Echtheit, Alter, Baujahr) dagegen schon.',
    'Kalkulationsirrtum :: Ein interner Rechenfehler ist unbeachtlich. Ein offengelegter Rechenweg ist über Auslegung zu lösen.',
    'Gewährleistung verdrängt § 119 II :: Ab Gefahrübergang kann der Käufer nicht wegen eines Irrtums über eine Eigenschaft anfechten, die einen Mangel begründet. Sonst würde § 438 BGB umgangen. § 123 bleibt immer möglich.',
    'Täuschung durch Dritte :: Nur anfechtbar, wenn der Erklärungsempfänger die Täuschung kannte oder kennen musste (§ 123 II). Der eigene Verhandlungsgehilfe ist kein Dritter.',
    'Widerruf ≠ Anfechtung :: Widerruf (§ 355 BGB) ist ein Verbraucherrecht ohne Begründung, innerhalb von 14 Tagen. Anfechtung setzt einen Grund voraus und steht jedem zu.'
  ]),
  f('Klausurfalle', 'Wer wegen § 119 BGB anficht, muss dem Gegner das negative Interesse ersetzen (§ 122 BGB), auch ohne Verschulden, aber nur bis zur Höhe des Erfüllungsinteresses. Bei § 123 BGB gibt es keinen solchen Ersatzanspruch.')
],
8: [
  l('Klausurtipps', [
    'Anspruchsgrundlage komplett zitieren :: §§ 280 I, 311 II, 241 II BGB. Die cic ist seit 2002 kodifiziert, der lateinische Begriff darf aber verwendet werden.',
    'Wann entsteht das Schuldverhältnis? :: Aufnahme von Vertragsverhandlungen (§ 311 II Nr. 1), Anbahnung eines Vertrags (Nr. 2, z. B. Betreten des Ladens) oder ähnliche geschäftliche Kontakte (Nr. 3).',
    'Fallgruppen :: Verletzung von Schutzpflichten (Sturz im Laden), Verletzung von Aufklärungspflichten, grundloser Abbruch von Verhandlungen nach geschaffenem Vertrauen, Verursachung eines nachteiligen Vertrags.',
    'Rechtsfolge :: Grundsätzlich das negative Interesse. Der Geschädigte ist so zu stellen, als hätte er nie verhandelt (§ 249 I BGB).',
    'Dritte :: § 311 III BGB, insbesondere Sachwalterhaftung bei besonderem Vertrauen. Begleitende Kinder sind über den Vertrag mit Schutzwirkung zugunsten Dritter geschützt.'
  ]),
  f('Klausurfalle § 278 vs. § 831', 'Besteht ein Schuldverhältnis (auch das vorvertragliche nach § 311 II), haftet der Geschäftsherr für Gehilfen über § 278 BGB, ohne Entlastungsmöglichkeit. § 831 BGB gilt nur im Delikt und erlaubt die Exkulpation (sorgfältige Auswahl und Überwachung). Deshalb ist die cic für Geschädigte oft günstiger.')
],
9: [
  l('Klausurtipps', [
    'Automatische Befreiung :: Bei Unmöglichkeit (§ 275 I BGB) entfällt die Leistungspflicht kraft Gesetzes. §§ 275 II, III sind Einreden.',
    'Gegenleistung :: Entfällt nach § 326 I BGB automatisch, kein Rücktritt nötig. Ausnahmen: Gläubiger ist verantwortlich oder im Annahmeverzug (§ 326 II BGB).',
    'Schadensersatz :: Nachträgliche Unmöglichkeit: §§ 280 I, III, 283 BGB. Anfängliche Unmöglichkeit: § 311a II BGB (Vertrag bleibt wirksam, § 311a I).',
    'Stück- vs. Gattungsschuld :: Bei der Gattungsschuld wird erst durch Konkretisierung (§ 243 II BGB) eine Stückschuld. Vorher muss der Schuldner aus der Gattung erneut leisten.',
    'Hol-, Bring-, Schickschuld :: Im Zweifel Holschuld (§ 269 BGB). Konkretisiert ist bei der Holschuld mit Aussonderung und Benachrichtigung, bei der Schickschuld mit Übergabe an die Transportperson, bei der Bringschuld erst beim Gläubiger.'
  ]),
  cmp('Wer trägt die Preisgefahr beim Kauf?', ['Situation', 'Regel', 'Norm'], [
    ['Normalfall', 'Mit Übergabe geht die Gefahr auf den Käufer über', '§ 446 BGB'],
    ['Versendungskauf B2B / privat', 'Mit Übergabe an den Transporteur', '§ 447 BGB'],
    ['Versendungskauf an Verbraucher', 'Erst bei Übergabe an den Verbraucher, § 447 gilt nicht', '§ 475 II BGB'],
    ['Käufer im Annahmeverzug', 'Gefahr geht mit Annahmeverzug über', '§ 446 S. 3 BGB']]),
  f('Klausurfalle', 'Beim Online-Kauf einer Privatperson bei einem Händler (Verbrauchsgüterkauf) geht die Ware „auf dem Weg“ auf Risiko des Händlers verloren (§ 475 II BGB). Wer hier § 447 BGB anwendet, kommt zum falschen Ergebnis.')
],
10: [
  s('Schuldnerverzug § 286 BGB', [
    'Fälliger, durchsetzbarer Anspruch :: Fälligkeit im Zweifel sofort (§ 271 BGB). Keine Einrede (z. B. § 320 BGB).',
    'Mahnung :: oder Entbehrlichkeit (§ 286 II): Termin nach dem Kalender bestimmt, berechenbar nach einem Ereignis, ernsthafte Verweigerung, besondere Gründe.',
    '30-Tage-Regel :: Bei Entgeltforderungen spätestens 30 Tage nach Fälligkeit und Rechnung (§ 286 III). Gegenüber Verbrauchern nur, wenn die Rechnung darauf hinweist.',
    'Vertretenmüssen :: wird vermutet (§ 286 IV BGB).',
    'Rechtsfolgen :: Verzögerungsschaden (§§ 280 I, II, 286), Verzugszinsen (§ 288), Haftungsverschärfung (§ 287).'
  ]),
  cmp('Verzugszinsen § 288 BGB', ['Beteiligte', 'Zinssatz', 'Extra'], [
    ['Verbraucher beteiligt', '5 Prozentpunkte über Basiszinssatz', '—'],
    ['Kein Verbraucher (B2B)', '9 Prozentpunkte über Basiszinssatz', '40 € Pauschale (§ 288 V)']]),
  l('Klausurtipps', [
    'Die Mahnung selbst :: Kosten der ersten Mahnung sind kein Verzugsschaden, denn sie begründet den Verzug erst.',
    'Schadensersatz statt der Leistung :: Nicht § 286, sondern §§ 280 I, III, 281 BGB mit Fristsetzung. Verzug ist dafür nicht Voraussetzung.',
    'Annahmeverzug :: Der Gläubiger nimmt die ordnungsgemäß angebotene Leistung nicht an (§§ 293 ff.). Verschulden ist nicht nötig. Folge: Der Schuldner haftet nur noch für Vorsatz und grobe Fahrlässigkeit (§ 300 I BGB).'
  ]),
  f('Klausurfalle', '„Lieferung in KW 23“ oder „bis 15.03.“ ist kalendermäßig bestimmt (§ 286 II Nr. 1), eine Mahnung ist entbehrlich. „Lieferung 2 Wochen nach Abruf“ fällt unter § 286 II Nr. 2. „Lieferung baldmöglichst“ ist nicht bestimmt, hier muss gemahnt werden.')
],
11: [
  s('Gewährleistung: Prüfungsreihenfolge', [
    'Wirksamer Kaufvertrag :: § 433 BGB.',
    'Sachmangel bei Gefahrübergang :: subjektive Anforderungen, objektive Anforderungen und Montageanforderungen (§ 434 BGB seit 2022, alle kumulativ). Rechtsmangel § 435 BGB.',
    'Kein Ausschluss :: Kenntnis des Käufers (§ 442), vertraglicher Ausschluss (§ 444, beim Verbrauchsgüterkauf § 476), § 377 HGB.',
    'Rechte aus § 437 BGB :: Nacherfüllung vorrangig (§ 439), dann Rücktritt (§§ 440, 323) oder Minderung (§ 441) und Schadensersatz (§§ 280 ff.).',
    'Verjährung :: § 438 BGB: 2 Jahre bei beweglichen Sachen ab Ablieferung, 5 Jahre bei Bauwerken und Baustoffen.'
  ]),
  l('Klausurtipps', [
    'Nacherfüllung zuerst :: Der Käufer wählt zwischen Nachbesserung und Neulieferung (§ 439 I). Der Verkäufer kann die gewählte Art nur bei unverhältnismäßigen Kosten verweigern (§ 439 IV).',
    'Fristsetzung :: Für Rücktritt und Schadensersatz statt der Leistung grundsätzlich nötig. Beim Verbrauchsgüterkauf genügt die Mitteilung des Mangels, die Frist beginnt dann automatisch (§ 475d BGB).',
    'Unerheblicher Mangel :: Rücktritt ausgeschlossen (§ 323 V 2), Minderung bleibt möglich. Faustregel der Rechtsprechung: unter 5 % der Kaufpreis-Mangelbeseitigungskosten.',
    'Beweislastumkehr :: Zeigt sich der Mangel beim Verbrauchsgüterkauf innerhalb eines Jahres, wird vermutet, dass er schon bei Gefahrübergang vorlag (§ 477 I BGB). Bei lebenden Tieren 6 Monate.',
    'Digitale Elemente :: Aktualisierungspflicht des Verkäufers (§ 475b BGB). Rein digitale Produkte richten sich nach §§ 327 ff. BGB.',
    'Garantie ≠ Gewährleistung :: Garantie ist eine freiwillige Zusatzzusage (§ 443 BGB). Die gesetzlichen Rechte bestehen daneben weiter.'
  ]),
  f('Klausurfalle § 377 HGB', 'Beim beiderseitigen Handelskauf muss der Käufer die Ware unverzüglich untersuchen und Mängel unverzüglich rügen. Versäumt er das, gilt die Ware als genehmigt, und alle Gewährleistungsrechte sind verloren. Prüfen Sie diese Norm immer, wenn beide Parteien Kaufleute sind.'),
  tf('Schnelltest', [
    ['Ein Verbraucher kann beim Neuwagenkauf sofort zurücktreten, wenn der Wagen einen erheblichen Mangel hat.', false, 'Vorrang der Nacherfüllung. Der Rücktritt setzt grundsätzlich den erfolglosen Ablauf einer angemessenen Frist voraus.'],
    ['Händler und Verbraucher können beim Kauf neuer Ware die Gewährleistung ausschließen.', false, '§ 476 I BGB: Abweichungen zum Nachteil des Verbrauchers sind unwirksam.'],
    ['Der Gewährleistungsanspruch für ein gekauftes Fahrrad verjährt nach 2 Jahren ab Übergabe.', true, '§ 438 I Nr. 3, II BGB.']
  ])
],
12: [
  s('AGB-Prüfung in fünf Schritten', [
    'AGB? :: Vorformuliert, für eine Vielzahl (ab 3) Verträge, von einer Partei gestellt (§ 305 I BGB). Beim Verbrauchervertrag reicht einmalige Verwendung (§ 310 III Nr. 2).',
    'Einbeziehung :: Ausdrücklicher Hinweis, zumutbare Kenntnisnahme, Einverständnis (§ 305 II). Gegenüber Unternehmern gilt § 305 II nicht (§ 310 I).',
    'Kein Vorrang/keine Überraschung :: Individualabrede geht vor (§ 305b), überraschende Klauseln werden nicht Vertragsinhalt (§ 305c I).',
    'Inhaltskontrolle :: Zuerst § 309 (ohne Wertungsmöglichkeit), dann § 308 (mit Wertungsmöglichkeit), dann § 307 (Generalklausel). Gegenüber Unternehmern nur § 307, wobei §§ 308, 309 Indizwirkung haben.',
    'Rechtsfolge :: Vertrag bleibt wirksam, an die Stelle der Klausel tritt das Gesetz (§ 306 I, II). Keine geltungserhaltende Reduktion.'
  ]),
  l('Klausurtipps', [
    'Unklarheitenregel :: Mehrdeutige Klauseln gehen zulasten des Verwenders (§ 305c II BGB).',
    'Kollidierende AGB :: Verweisen beide Unternehmer auf ihre AGB, gelten die übereinstimmenden Teile. Im Übrigen gilt das dispositive Gesetz.',
    'Widerrufsfrist :: 14 Tage (§ 355 II). Beim Warenkauf beginnt sie mit Erhalt der Ware (§ 356 II Nr. 1), aber nicht vor ordnungsgemäßer Belehrung (§ 356 III). Ohne Belehrung erlischt das Recht spätestens nach 12 Monaten und 14 Tagen.',
    'Kein Widerruf :: z. B. bei Maßanfertigungen, schnell verderblicher Ware, entsiegelter Hygieneware (§ 312g II BGB).',
    'Fristberechnung :: Ereignisfrist beginnt am Folgetag (§ 187 I), endet mit Ablauf des entsprechenden Tages (§ 188 II). Fällt das Ende auf Samstag, Sonntag oder Feiertag, endet sie am nächsten Werktag (§ 193).',
    'Regelverjährung :: 3 Jahre (§ 195), Beginn mit Schluss des Jahres der Entstehung und Kenntnis (§ 199 I). Ein Anspruch aus Juni 2026 verjährt mit Ablauf des 31.12.2029.',
    'Hemmung vs. Neubeginn :: Hemmung stoppt die Uhr (Klage, Mahnbescheid § 204, Verhandlungen § 203). Neubeginn setzt sie zurück (Anerkenntnis, Abschlagszahlung § 212).'
  ]),
  f('Klausurfalle', 'Verjährung ist eine Einrede (§ 214 I BGB). Der Anspruch besteht weiter, der Schuldner muss sich darauf berufen. Wer trotz Verjährung zahlt, kann das Geld nicht zurückverlangen (§ 214 II BGB).')
],
13: [
  s('§ 823 I BGB: Schema', [
    'Rechtsgutsverletzung :: Leben, Körper, Gesundheit, Freiheit, Eigentum oder „sonstiges Recht“ (absolute Rechte, z. B. allgemeines Persönlichkeitsrecht, eingerichteter Gewerbebetrieb).',
    'Verletzungshandlung :: Tun oder Unterlassen trotz Verkehrssicherungspflicht.',
    'Haftungsbegründende Kausalität :: Handlung verursacht Rechtsgutsverletzung (Äquivalenz, Adäquanz, Schutzzweck).',
    'Rechtswidrigkeit :: wird durch die Verletzung indiziert. Ausnahme: Rechtfertigung (Notwehr § 227, Einwilligung).',
    'Verschulden :: Vorsatz oder Fahrlässigkeit (§ 276), Deliktsfähigkeit (§§ 827, 828).',
    'Schaden und haftungsausfüllende Kausalität :: §§ 249 ff. BGB, Schmerzensgeld § 253 II, Mitverschulden § 254.'
  ]),
  l('Klausurtipps', [
    'Reines Vermögen :: ist von § 823 I BGB nicht geschützt. Prüfen Sie dann § 823 II BGB mit Schutzgesetz (z. B. § 263 StGB Betrug) oder § 826 BGB.',
    '§ 831 BGB :: Eigene Haftung des Geschäftsherrn für vermutetes Auswahl- oder Überwachungsverschulden. Er kann sich entlasten, deshalb ist § 831 schwächer als § 278.',
    'Produzentenhaftung :: Aus § 823 I BGB, mit Beweislastumkehr beim Verschulden. Erfasst auch gewerblich genutzte Sachen und den Schaden am Produkt selbst in Grenzen („weiterfressender Mangel“).',
    'ProdHaftG :: Verschuldensunabhängig. Sachschäden nur an privat genutzten anderen Sachen, Selbstbeteiligung 500 € (§ 11). Verjährung 3 Jahre (§ 12), Erlöschen 10 Jahre nach Inverkehrbringen (§ 13).',
    'Neue EU-Produkthaftungsrichtlinie :: (EU) 2024/2853 muss bis 09.12.2026 umgesetzt werden. Software wird ausdrücklich Produkt, die Selbstbeteiligung entfällt. Fragen Sie nach, welcher Rechtsstand in der Klausur gilt.'
  ]),
  f('Klausurfalle', 'Wer mehrere Haftungsgrundlagen hat, prüft alle: ProdHaftG und § 823 I BGB stehen nebeneinander (§ 15 II ProdHaftG). Der Hersteller haftet oft aus beiden, der Händler meist aus keinem, gegen ihn helfen Vertragsansprüche.')
],
14: [
  cmp('Eigentumserwerb an beweglichen Sachen', ['Tatbestand', 'Voraussetzung', 'Gutgläubig möglich?'], [
    ['§ 929 S. 1', 'Einigung + Übergabe', '§ 932 I 1'],
    ['§ 929 S. 2', 'Erwerber hat schon Besitz, nur Einigung', '§ 932 I 2'],
    ['§ 930', 'Einigung + Besitzkonstitut (Veräußerer bleibt Besitzer, z. B. Sicherungsübereignung)', '§ 933 nur bei späterer Übergabe'],
    ['§ 931', 'Einigung + Abtretung des Herausgabeanspruchs', '§ 934']]),
  l('Klausurtipps', [
    'Guter Glaube :: Bösgläubig ist, wer weiß oder grob fahrlässig nicht weiß, dass der Veräußerer nicht Eigentümer ist (§ 932 II). Beim Gebrauchtwagen ohne Prüfung des Fahrzeugbriefs liegt regelmäßig grobe Fahrlässigkeit vor.',
    'Abhandengekommen § 935 :: Gestohlene, verlorene oder sonst unfreiwillig verlorene Sachen können nicht gutgläubig erworben werden. Ausnahmen: Geld und öffentliche Versteigerung (§ 935 II). Unterschlagung durch den Mieter ist kein Abhandenkommen.',
    '§ 366 HGB :: Beim Kaufmann wird auch der gute Glaube an die Verfügungsbefugnis geschützt.',
    'Grundstücke :: Auflassung + Eintragung (§§ 873, 925). Der öffentliche Glaube des Grundbuchs schützt den Erwerber (§ 892 BGB).',
    '§ 985 BGB :: Eigentümer gegen Besitzer ohne Recht zum Besitz (§ 986). Merken: „Eigentümer – Besitzer – kein Recht zum Besitz“.',
    'Abtretung :: § 398, keine Zustimmung des Schuldners nötig. Ein vertragliches Abtretungsverbot (§ 399) ist unter Kaufleuten bei Geldforderungen unwirksam (§ 354a HGB). Der Schuldner behält seine Einwendungen (§ 404) und wird durch Zahlung an den Altgläubiger in Unkenntnis frei (§ 407).',
    'Aufrechnung :: Gegenseitigkeit, Gleichartigkeit, Gegenforderung fällig und durchsetzbar, Hauptforderung erfüllbar, Erklärung (§§ 387, 388). Wirkung zurück auf den Zeitpunkt der Aufrechnungslage (§ 389). Eine verjährte Forderung kann noch aufgerechnet werden, wenn die Aufrechnungslage vor der Verjährung bestand (§ 215).',
    'Bereicherung :: Bei Leistung § 812 I 1 Alt. 1. Ausschlüsse: Leistung in Kenntnis der Nichtschuld (§ 814), Gesetzes- oder Sittenverstoß (§ 817 S. 2). Entreicherung (§ 818 III) gilt nicht für Bösgläubige (§ 819).'
  ]),
  f('Klausurfalle § 816 I 1 BGB', 'Verkauft ein Nichtberechtigter eine fremde Sache wirksam an einen Gutgläubigen, verliert der Eigentümer sein Eigentum. Er muss sich dann an den Veräußerer halten: Herausgabe des Erlöses nach § 816 I 1 BGB, daneben ggf. § 823 I BGB.')
]
};

W[15] = {
  src: 'Wiederholung aller Module', title: 'Klausur-Crashkurs',
  intro: 'Das Wichtigste aus allen Modulen auf einen Blick: die Prüfungsreihenfolge, alle Zahlen und Fristen, die häufigsten Fehler und ein gemischter Abschlusstest. Arbeiten Sie dieses Modul in den letzten Tagen vor der Klausur mehrmals durch.',
  ziel: 'Jeden Klausurfall strukturiert angehen, Fristen und Zahlen sicher abrufen und typische Fehler vermeiden.',
  relevanz: 'Maximal. Hier steht, was in fast jeder Klausur Punkte bringt oder kostet.',
  faelle: 'Gemischter Abschlusstest K1–K12',
  sections: [
    { title: 'Der Fahrplan für jeden Fall', blocks: [
      st('So gehen Sie in der Klausur vor', [
        'Fallfrage lesen :: Zuerst die Frage am Ende. Was genau ist gefragt: Anspruch, Rechtslage, Wirksamkeit?',
        'Sachverhalt zweimal lesen :: Beim zweiten Mal Daten, Beträge, Alter, Kaufmannseigenschaft und Wörter wie „sofort“, „privat“, „online“ markieren.',
        'Skizze und Zeitstrahl :: Personen, Pfeile für Ansprüche, Daten für Fristen.',
        'Anspruchsgrundlagen sammeln :: Wer will was von wem woraus? Reihenfolge Vertrag → vertragsähnlich → dinglich → Delikt → Bereicherung.',
        'Gliederung :: Für jeden Anspruch: entstanden, erloschen, durchsetzbar. Probleme markieren und Schwerpunkte festlegen.',
        'Schreiben im Gutachtenstil :: Obersatz, Definition, Subsumtion, Ergebnis. Probleme ausführlich, Unstreitiges knapp.',
        'Gesamtergebnis :: Die Fallfrage ausdrücklich beantworten. Am Ende 5 Minuten Kontrolle der Paragrafen.'
      ]),
      m('Obersatz-Muster: „K könnte gegen V einen Anspruch auf Zahlung von 500 € aus § 433 II BGB haben. Dazu müsste zwischen K und V ein wirksamer Kaufvertrag zustande gekommen sein.“')
    ] },
    { title: 'Alle Zahlen und Fristen', blocks: [
      cmp('Fristen, die Sie auswendig wissen müssen', ['Was', 'Frist', 'Norm'], [
        ['Regelverjährung', '3 Jahre ab Jahresende', '§§ 195, 199 BGB'],
        ['Gewährleistung bewegliche Sache', '2 Jahre ab Ablieferung', '§ 438 I Nr. 3 BGB'],
        ['Gewährleistung Bauwerk/Baustoffe', '5 Jahre', '§ 438 I Nr. 2 BGB'],
        ['Rechte an Grundstücken', '10 Jahre', '§ 196 BGB'],
        ['Titulierte Ansprüche', '30 Jahre', '§ 197 I Nr. 3 BGB'],
        ['Beweislastumkehr Verbrauchsgüterkauf', '1 Jahr (Tiere 6 Monate)', '§ 477 BGB'],
        ['Widerruf Verbrauchervertrag', '14 Tage, max. 12 Monate + 14 Tage', '§§ 355 II, 356 III BGB'],
        ['Anfechtung Irrtum', 'unverzüglich', '§ 121 BGB'],
        ['Anfechtung Täuschung/Drohung', '1 Jahr', '§ 124 BGB'],
        ['Verzug bei Entgeltforderung', '30 Tage nach Rechnung', '§ 286 III BGB'],
        ['Widerspruch / Einspruch Mahnverfahren', 'je 2 Wochen', '§§ 692, 700 ZPO'],
        ['ProdHaftG', '3 Jahre Verjährung, 10 Jahre Erlöschen', '§§ 12, 13 ProdHaftG']]),
      cmp('Beträge', ['Was', 'Wert', 'Norm'], [
        ['Zuständigkeit Amtsgericht', 'bis 10.000 € (seit 01.01.2026)', '§ 23 Nr. 1 GVG'],
        ['Verzugszins mit Verbraucher', '5 Prozentpunkte über Basiszins', '§ 288 I BGB'],
        ['Verzugszins B2B', '9 Prozentpunkte über Basiszins + 40 €', '§ 288 II, V BGB'],
        ['Selbstbeteiligung ProdHaftG', '500 € bei Sachschäden', '§ 11 ProdHaftG'],
        ['Vereinsgründung', 'mindestens 7 Mitglieder (Soll)', '§ 56 BGB']])
    ] },
    { title: 'Die 10 häufigsten Klausurfehler', blocks: [
      l('Vermeiden Sie diese Fehler', [
        'Eigentum durch Kaufvertrag :: Kaufvertrag verpflichtet nur. Eigentum erst nach § 929 BGB.',
        '§ 447 beim Verbraucher :: Beim Verbrauchsgüterkauf gilt § 447 nicht (§ 475 II BGB).',
        'Sofort Rücktritt :: Ohne Fristsetzung zur Nacherfüllung kein Rücktritt (Ausnahmen §§ 440, 323 II, 475d BGB).',
        '§ 377 HGB vergessen :: Bei zwei Kaufleuten immer die Rügeobliegenheit prüfen.',
        'Schweigen als Annahme :: Nur ausnahmsweise (kaufmännisches Bestätigungsschreiben, § 362 HGB).',
        'Vermögensschaden über § 823 I :: Reines Vermögen ist kein geschütztes Rechtsgut.',
        '§ 831 statt § 278 :: Bei bestehendem Schuldverhältnis gilt § 278 BGB ohne Entlastung.',
        'Gutgläubiger Erwerb gestohlener Sachen :: Scheitert an § 935 BGB (außer Geld).',
        'Urteilsstil bei Problemen :: Problematische Punkte immer im Gutachtenstil.',
        'Veraltete Zahlen :: AG-Grenze 10.000 €, § 434 BGB n. F. seit 2022, Beweislastumkehr 1 Jahr.'
      ])
    ] },
    { title: 'Lernplan für die letzten 7 Tage', blocks: [
      st('Tag für Tag', [
        'Tag 7 :: Module 1–4: Grundlagen, Rechtssubjekte, Abstraktion, Methodik. Karteikarten durchgehen.',
        'Tag 6 :: Module 5–8: Vertragsschluss, Form, Anfechtung, cic. Alle Fälle lösen.',
        'Tag 5 :: Module 9–10: Unmöglichkeit, Gefahrtragung, Verzug. Gefahrtragungstabelle auswendig.',
        'Tag 4 :: Modul 11: Gewährleistung komplett. Schema ohne Vorlage aufschreiben.',
        'Tag 3 :: Module 12–14: AGB, Widerruf, Fristen, Delikt, Sachenrecht.',
        'Tag 2 :: Falsch gelöste Fälle wiederholen (Status „✗“). Crashkurs-Test.',
        'Tag 1 :: Nur noch Fristen- und Zahlentabelle und die 10 Fehler. Früh schlafen.'
      ])
    ] }
  ],
  cases: [
    { n: 'K1', q: 'Die 17-jährige S kauft von ihrem Taschengeld ein Handy für 300 € auf Raten (10 × 30 €). Die Eltern wissen nichts. Ist der Vertrag wirksam?', c: 2, o: [
      ['Ja, nach § 110 BGB (Taschengeldparagraf).', 'Falsch. § 110 BGB verlangt, dass die Leistung vollständig mit überlassenen Mitteln bewirkt ist. Ratenkäufe fallen nicht darunter.'],
      ['Ja, weil S fast volljährig ist.', 'Falsch. Bis zum 18. Geburtstag gilt § 106 BGB uneingeschränkt.'],
      ['Schwebend unwirksam, abhängig von der Genehmigung der Eltern (§ 108 BGB).', 'Richtig. Der Vertrag ist nicht lediglich rechtlich vorteilhaft, § 110 greift nicht, also braucht es die Genehmigung.'],
      ['Nichtig nach § 105 BGB.', 'Falsch. § 105 betrifft Geschäftsunfähige.']], lsg: ['S ist beschränkt geschäftsfähig (§§ 2, 106 BGB).', 'Kaufvertrag begründet Zahlungspflicht, also nicht lediglich rechtlich vorteilhaft (§ 107 BGB).', '§ 110 BGB scheitert, weil noch nicht vollständig geleistet ist.', 'Folge: schwebende Unwirksamkeit, Genehmigung durch Eltern möglich (§ 108 I BGB).'] },
    { n: 'K2', q: 'Händler H verschickt einen Fernseher an Verbraucher V. Auf dem Transport wird er ohne Verschulden des Paketdienstes zerstört. Muss V zahlen?', c: 1, o: [
      ['Ja, die Gefahr ging mit Übergabe an den Paketdienst über (§ 447 BGB).', 'Falsch. § 447 BGB ist beim Verbrauchsgüterkauf nicht anwendbar.'],
      ['Nein, beim Verbrauchsgüterkauf trägt H die Gefahr bis zur Übergabe an V (§ 475 II BGB).', 'Richtig. Die Preisgefahr ist nicht übergegangen, der Kaufpreisanspruch entfällt (§ 326 I BGB), sofern H nicht erneut liefern muss.'],
      ['Ja, aber nur die Hälfte.', 'Falsch. Eine Teilung der Gefahr kennt das Gesetz nicht.'],
      ['Nein, weil H den Fernseher versichern musste.', 'Falsch. Die Lösung folgt aus der Gefahrtragung, nicht aus einer Versicherungspflicht.']], lsg: ['Kaufvertrag H–V, H Unternehmer, V Verbraucher, Ware: Verbrauchsgüterkauf (§ 474 I BGB).', '§ 475 II BGB schließt § 447 BGB aus.', 'Gefahrübergang erst mit Übergabe an V (§ 446 BGB).', 'Bei Gattungsschuld ohne Konkretisierung muss H erneut liefern. V zahlt erst bei Lieferung.'] },
    { n: 'K3', q: 'Kaufmann A schickt Kaufmann B nach einem Telefonat ein Bestätigungsschreiben mit Lieferung „frei Haus“. Am Telefon war darüber nicht gesprochen worden. B schweigt. Was gilt?', c: 0, o: [
      ['Der Vertrag gilt mit „frei Haus“, weil B nicht unverzüglich widersprochen hat.', 'Richtig. Kaufmännisches Bestätigungsschreiben: Schweigen gilt als Zustimmung, wenn die Ergänzung nicht unredlich oder völlig überraschend ist.'],
      ['Schweigen ist nie eine Willenserklärung, der Vertrag gilt ohne die Klausel.', 'Falsch. Unter Kaufleuten gilt die gewohnheitsrechtliche Ausnahme.'],
      ['Kein Vertrag, weil Dissens besteht.', 'Falsch. Der Vertrag kam am Telefon zustande, das Schreiben bestimmt den Inhalt.'],
      ['B kann jederzeit widersprechen.', 'Falsch. Der Widerspruch muss unverzüglich erfolgen.']], lsg: ['Beide Kaufleute, Vorverhandlung, zeitnahes Schreiben.', 'Ergänzung „frei Haus“ ist keine so erhebliche Abweichung, dass A nicht mit Zustimmung rechnen durfte.', 'Kein unverzüglicher Widerspruch: Vertrag mit Inhalt des Schreibens.'] },
    { n: 'K4', q: 'Unternehmer U kauft bei Großhändler G 500 Gläser. Nach drei Wochen bemerkt U beim ersten Auspacken, dass 100 Gläser gesprungen sind, und rügt sofort. Rechte?', c: 3, o: [
      ['Volle Gewährleistungsrechte, da er sofort nach Entdeckung gerügt hat.', 'Falsch. Entscheidend ist, wann der Mangel bei unverzüglicher Untersuchung erkennbar war.'],
      ['Rücktritt vom ganzen Vertrag.', 'Falsch. Schon die Rechte an sich sind gefährdet.'],
      ['Nur Minderung.', 'Falsch. § 377 HGB lässt entweder alle Rechte bestehen oder keine.'],
      ['Wahrscheinlich keine, weil er nicht unverzüglich untersucht hat (§ 377 II HGB).', 'Richtig. Gesprungene Gläser sind ein offener Mangel. Nach drei Wochen ist die Untersuchung verspätet, die Ware gilt als genehmigt.']], lsg: ['Beiderseitiger Handelskauf (§ 343 HGB): § 377 HGB anwendbar.', 'Untersuchungs- und Rügeobliegenheit unverzüglich nach Ablieferung.', 'Offener Mangel bei Stichprobe erkennbar, drei Wochen zu spät.', 'Genehmigungsfiktion § 377 II HGB.'] },
    { n: 'K5', q: 'Dieb D stiehlt das Fahrrad des E und verkauft es an den gutgläubigen K. Kann E das Rad von K herausverlangen?', c: 0, o: [
      ['Ja, aus § 985 BGB, weil K wegen § 935 I BGB kein Eigentum erwerben konnte.', 'Richtig. Gestohlene Sachen sind abhandengekommen, guter Glaube hilft nicht.'],
      ['Nein, K ist gutgläubig (§ 932 BGB).', 'Falsch. § 935 BGB sperrt den gutgläubigen Erwerb.'],
      ['Nur gegen Erstattung des Kaufpreises.', 'Falsch. Einen Lösungsanspruch kennt das deutsche Recht nicht.'],
      ['Nein, E muss sich an D halten.', 'Falsch. E ist noch Eigentümer.']], lsg: ['E war Eigentümer.', 'Kein Verlust durch § 929, 932 BGB, weil das Rad abhandengekommen ist (§ 935 I 1 BGB).', 'K ist Besitzer ohne Recht zum Besitz (§ 986 BGB).', 'Herausgabeanspruch § 985 BGB. K kann sich bei D schadlos halten.'] },
    { n: 'K6', q: 'Wann verjährt ein Kaufpreisanspruch, der am 15.06.2026 fällig wurde (Gläubiger kennt den Schuldner)?', c: 2, o: [
      ['15.06.2029', 'Falsch. Die Regelverjährung beginnt erst mit Jahresende (§ 199 I BGB).'],
      ['31.12.2028', 'Falsch. Drei volle Jahre ab 31.12.2026.'],
      ['Mit Ablauf des 31.12.2029', 'Richtig. Beginn mit Ablauf 31.12.2026, Dauer 3 Jahre (§§ 195, 199 I BGB).'],
      ['15.06.2028', 'Falsch. Zwei Jahre gelten nur für die Gewährleistung (§ 438 BGB).']], lsg: ['Regelverjährung 3 Jahre (§ 195 BGB).', 'Beginn: Schluss des Jahres der Entstehung und Kenntnis (§ 199 I BGB) = 31.12.2026.', 'Ende mit Ablauf des 31.12.2029.'] },
    { n: 'K7', q: 'Der Angestellte A eines Möbelhauses lässt beim Kundengespräch fahrlässig einen Spiegel auf den Fuß der Kundin K fallen. Auf welcher Grundlage haftet das Möbelhaus am sichersten?', c: 1, o: [
      ['§ 831 BGB', 'Möglich, aber das Möbelhaus kann sich entlasten (sorgfältige Auswahl).'],
      ['§§ 280 I, 311 II, 241 II BGB i. V. m. § 278 BGB', 'Richtig. Vorvertragliches Schuldverhältnis, das Verschulden des A wird ohne Entlastung zugerechnet.'],
      ['§ 823 I BGB direkt', 'Falsch. Das Möbelhaus hat nicht selbst gehandelt.'],
      ['ProdHaftG', 'Falsch. Kein Produktfehler.']], lsg: ['Geschäftlicher Kontakt: Schuldverhältnis nach § 311 II Nr. 2 BGB.', 'Verletzung der Schutzpflicht (§ 241 II BGB).', 'Verschulden des A über § 278 BGB zugerechnet.', 'Schadensersatz und Schmerzensgeld (§ 253 II BGB).'] },
    { n: 'K8', q: 'V verspricht seinem Neffen N per E-Mail, ihm in einem Monat 5.000 € zu schenken. N verlangt das Geld. Zu Recht?', c: 3, o: [
      ['Ja, die E-Mail erfüllt die Textform.', 'Falsch. § 518 I BGB verlangt notarielle Beurkundung.'],
      ['Ja, Schenkungen sind formfrei.', 'Falsch. Nur die Handschenkung ist formfrei.'],
      ['Nein, weil Schenkungen unter Verwandten unwirksam sind.', 'Falsch. Solch eine Regel gibt es nicht.'],
      ['Nein, das Versprechen ist formnichtig (§§ 518 I, 125 S. 1 BGB).', 'Richtig. Heilung erst durch Bewirkung (§ 518 II BGB).']], lsg: ['Schenkungsversprechen über eine künftige Leistung.', 'Form: notarielle Beurkundung (§ 518 I 1 BGB) fehlt.', 'Nichtigkeit nach § 125 S. 1 BGB, keine Heilung, weil noch nicht gezahlt.'] },
    { n: 'K9', q: 'Verbraucherin K kauft online Schuhe. Die Widerrufsbelehrung fehlt. Nach 4 Monaten will sie widerrufen. Geht das?', c: 0, o: [
      ['Ja, die Frist hat ohne Belehrung nicht begonnen, das Recht erlischt erst nach 12 Monaten und 14 Tagen.', 'Richtig. § 356 III BGB.'],
      ['Nein, die 14 Tage sind abgelaufen.', 'Falsch. Die Frist beginnt nicht ohne ordnungsgemäße Belehrung.'],
      ['Nein, Schuhe sind vom Widerruf ausgeschlossen.', 'Falsch. Schuhe sind keine Hygieneware im Sinne des § 312g II BGB.'],
      ['Ja, unbegrenzt.', 'Falsch. Die absolute Grenze beträgt 12 Monate und 14 Tage.']], lsg: ['Fernabsatzvertrag (§ 312c BGB), Widerrufsrecht (§ 312g I BGB).', 'Frist 14 Tage (§ 355 II), Beginn erst mit Belehrung (§ 356 III 1).', 'Höchstfrist 12 Monate und 14 Tage ab Fristbeginn ohne Belehrung (§ 356 III 2).'] },
    { n: 'K10', q: 'Lieferant L sollte „bis spätestens 10.03.“ liefern und liefert erst am 25.03. Käufer K hatte deshalb Produktionsausfall. Braucht K für den Schadensersatz eine Mahnung?', c: 2, o: [
      ['Ja, ohne Mahnung kein Verzug.', 'Falsch. Bei kalendermäßiger Bestimmung ist die Mahnung entbehrlich.'],
      ['Ja, mit Fristsetzung.', 'Falsch. Fristsetzung braucht es für § 281, nicht für den Verzögerungsschaden.'],
      ['Nein, § 286 II Nr. 1 BGB: Die Leistungszeit ist nach dem Kalender bestimmt.', 'Richtig. Verzug ab 11.03., Schaden aus §§ 280 I, II, 286 BGB.'],
      ['Nein, weil Kaufleute nie mahnen müssen.', 'Falsch. Eine solche Regel gibt es nicht.']], lsg: ['Fälliger, durchsetzbarer Anspruch.', 'Mahnung entbehrlich nach § 286 II Nr. 1 BGB.', 'Vertretenmüssen vermutet (§ 286 IV BGB).', 'Verzögerungsschaden nach §§ 280 I, II, 286 BGB.'] },
    { n: 'K11', q: 'In den AGB eines Online-Shops gegenüber Verbrauchern steht: „Gewährleistungsansprüche verjähren nach 6 Monaten.“ Folge?', c: 1, o: [
      ['Die Klausel gilt, weil Verbraucher die AGB akzeptiert haben.', 'Falsch. Verbraucherschutz ist zwingend.'],
      ['Die Klausel ist unwirksam, es gilt die gesetzliche Frist von 2 Jahren (§§ 476, 306 II BGB).', 'Richtig. Bei neuer Ware ist keine Verkürzung möglich, bei gebrauchter nur auf 1 Jahr mit gesonderter Vereinbarung.'],
      ['Die Klausel wird auf 1 Jahr reduziert.', 'Falsch. Keine geltungserhaltende Reduktion.'],
      ['Der ganze Kaufvertrag ist nichtig.', 'Falsch. § 306 I BGB: Der Vertrag bleibt wirksam.']], lsg: ['Verbrauchsgüterkauf: § 476 II BGB lässt Verkürzung nicht zu (neue Ware) bzw. nur auf 1 Jahr mit gesonderter Vereinbarung (gebrauchte Ware).', 'Zusätzlich § 309 Nr. 8 b ff BGB.', 'Rechtsfolge § 306 I, II BGB: Vertrag wirksam, gesetzliche 2 Jahre.'] },
    { n: 'K12', q: 'A irrt sich beim Tippen und bestellt 100 statt 10 Druckerpatronen. Er ficht sofort an. Was schuldet er dem Verkäufer?', c: 3, o: [
      ['Nichts, die Anfechtung beseitigt den Vertrag vollständig.', 'Unvollständig. Der Vertrag ist nichtig, aber § 122 BGB gibt einen Anspruch.'],
      ['Den vollen Kaufpreis für 100 Patronen.', 'Falsch. Der Vertrag ist nach § 142 I BGB nichtig.'],
      ['Den entgangenen Gewinn des Verkäufers.', 'Falsch. Das wäre das positive Interesse.'],
      ['Ersatz des Vertrauensschadens, z. B. Versandkosten (§ 122 I BGB).', 'Richtig. Erklärungsirrtum § 119 I Alt. 2, unverzügliche Anfechtung, Vertrauensschaden ohne Verschulden.']], lsg: ['Erklärungsirrtum (Vertippen): § 119 I Alt. 2 BGB.', 'Unverzügliche Anfechtung (§§ 121, 143 BGB).', 'Nichtigkeit ex tunc (§ 142 I BGB).', 'Vertrauensschaden nach § 122 I BGB, begrenzt auf das Erfüllungsinteresse.'] }
  ],
  pq: [
    { q: 'Erklären Sie die Prüfungsreihenfolge der Anspruchsgrundlagen und begründen Sie sie.', a: 'Vertrag, vertragsähnliche Ansprüche (cic, GoA), dingliche Ansprüche (§ 985 BGB), Delikt, Bereicherung. Vertragliche Regelungen können spätere Ansprüche beeinflussen, etwa ein Recht zum Besitz (§ 986 BGB) oder Haftungsmilderungen. Die Bereicherung ist Auffangtatbestand und kommt zuletzt.' },
    { q: 'Worin unterscheiden sich § 278 und § 831 BGB?', a: '§ 278 BGB rechnet fremdes Verschulden innerhalb eines bestehenden Schuldverhältnisses zu, ohne Entlastungsmöglichkeit. § 831 BGB ist eine eigene deliktische Haftung des Geschäftsherrn für vermutetes Auswahl- und Überwachungsverschulden, von der er sich entlasten kann.' },
    { q: 'Was bedeutet § 377 HGB für Gewährleistungsrechte?', a: 'Beim beiderseitigen Handelskauf muss der Käufer die Ware unverzüglich untersuchen und Mängel unverzüglich anzeigen. Unterlässt er das, gilt die Ware als genehmigt, und er verliert alle Mängelrechte, außer bei Arglist des Verkäufers (§ 377 V HGB).' },
    { q: 'Wann ist eine Mahnung nach § 286 BGB entbehrlich?', a: 'Bei kalendermäßig bestimmter Leistungszeit, bei Leistungszeit nach einem Ereignis berechenbar, bei ernsthafter und endgültiger Verweigerung und aus besonderen Gründen (§ 286 II BGB). Außerdem tritt bei Entgeltforderungen Verzug 30 Tage nach Fälligkeit und Rechnung ein (§ 286 III BGB).' },
    { q: 'Wann scheitert der gutgläubige Erwerb einer beweglichen Sache?', a: 'Wenn der Erwerber bösgläubig ist, also weiß oder grob fahrlässig nicht weiß, dass der Veräußerer nicht Eigentümer ist (§ 932 II BGB), und wenn die Sache abhandengekommen ist (§ 935 I BGB), außer bei Geld und öffentlicher Versteigerung.' }
  ],
  cards: [
    ['AG-Zuständigkeit?', 'Bis 10.000 € (§ 23 Nr. 1 GVG, seit 01.01.2026).'],
    ['Regelverjährung?', '3 Jahre ab Jahresende (§§ 195, 199 BGB).'],
    ['Gewährleistung bewegliche Sache?', '2 Jahre ab Ablieferung (§ 438 I Nr. 3 BGB).'],
    ['Beweislastumkehr Verbrauchsgüterkauf?', '1 Jahr (§ 477 BGB).'],
    ['Widerrufsfrist?', '14 Tage (§ 355 II BGB).'],
    ['Anfechtungsfrist § 119?', 'Unverzüglich (§ 121 BGB).'],
    ['Anfechtungsfrist § 123?', '1 Jahr (§ 124 BGB).'],
    ['Rechtsfolge Anfechtung?', 'Nichtig von Anfang an (§ 142 I BGB).'],
    ['Verzugszins B2B?', '9 Prozentpunkte über Basiszins + 40 € (§ 288 II, V BGB).'],
    ['Gefahrübergang Versendungskauf Verbraucher?', 'Erst bei Übergabe an Verbraucher (§ 475 II BGB).'],
    ['AGB-Prüfreihenfolge Inhaltskontrolle?', '§ 309 → § 308 → § 307 BGB.'],
    ['Folge unwirksamer AGB-Klausel?', 'Vertrag bleibt, Gesetz gilt (§ 306 BGB).'],
    ['Abhandengekommene Sache?', 'Kein gutgläubiger Erwerb (§ 935 BGB), außer Geld.'],
    ['§ 823 I schützt Vermögen?', 'Nein. Dafür § 823 II oder § 826 BGB.'],
    ['Kaufmännisches Bestätigungsschreiben?', 'Schweigen gilt als Zustimmung, wenn nicht unverzüglich widersprochen wird.']
  ]
};
window.dispatchEvent(new Event('wpr-data'));
})();
