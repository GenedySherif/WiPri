(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), s = (title, items) => ({ t: 'schema', title, items }),
  b = (title, text) => ({ t: 'bsp', title, text }), f = (title, text) => ({ t: 'falle', title, text }), m = t => ({ t: 'merk', text: t }), v = (title, text) => ({ t: 'vert', title, text });
const fl = (title, items) => ({ t: 'flow', title, items }), cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), rel = (title, items) => ({ t: 'rel', title, items }),
  tf = (title, items) => ({ t: 'tf', title, items }), st = (title, items) => ({ t: 'steps', title, items }), qc = (q, a) => ({ t: 'check', q, a });
const W = window.WPR = window.WPR || {};

W[2] = {
  src: 'Skript S. 8–10 · Abschnitt III', title: 'Rechtssubjekte & Rechtsobjekte',
  intro: `Wer kann Rechte und Pflichten haben, und worauf beziehen sich diese Rechte? Dieses Modul klärt, wer im Recht „mitspielt“ (Rechtssubjekte) und worum gespielt wird (Rechtsobjekte). Außerdem behandelt es die Begriffe, die in der Klausur über die Anwendbarkeit ganzer Normgruppen entscheiden: Verbraucher, Unternehmer, Verbrauchsgüterkauf und Kaufmann.`,
  ziel: 'Rechtsfähigkeit bestimmen, Verbraucher und Unternehmer sicher abgrenzen, einen Verbrauchsgüterkauf erkennen und Sachen von Rechten unterscheiden.',
  relevanz: 'Sehr hoch. Fast jede Gewährleistungs- oder Widerrufsfrage beginnt mit der Prüfung „Verbrauchsgüterkauf?“.',
  faelle: 'Fall 1. Die Begriffe werden außerdem in den Fällen 17, 20, 29, 30, 33 und 34 gebraucht.',
  sections: [
    { title: 'Rechtsfähigkeit: Wer ist Rechtssubjekt?', blocks: [
      p(`Rechtssubjekt ist, wer Träger von Rechten und Pflichten sein kann. Diese Eigenschaft heißt Rechtsfähigkeit. Sie ist von zwei anderen Fähigkeiten zu unterscheiden, die oft verwechselt werden:`),
      l('Drei Fähigkeiten, die Sie auseinanderhalten müssen', [
        'Rechtsfähigkeit :: Träger von Rechten und Pflichten sein, z. B. Eigentümer werden oder eine Forderung haben. Ein Säugling ist rechtsfähig und kann Erbe sein.',
        'Geschäftsfähigkeit (§§ 104 ff.) :: Rechtsgeschäfte wirksam selbst vornehmen. Kinder unter 7 sind geschäftsunfähig (§ 104 Nr. 1), ihre Willenserklärungen sind nichtig (§ 105 I). Minderjährige von 7 bis 17 sind beschränkt geschäftsfähig (§§ 106 ff.).',
        'Deliktsfähigkeit (§§ 827, 828) :: Für unerlaubte Handlungen verantwortlich sein. Unter 7 Jahren haftet man nicht, im Straßenverkehr nicht unter 10 Jahren.'
      ]),
      s('Die drei Gruppen von Rechtssubjekten (Skript S. 8)', [
        'Natürliche Person (§ 1) :: Jeder Mensch. Die Rechtsfähigkeit beginnt mit der Vollendung der Geburt und endet mit dem Tod. Ausnahmsweise wird der bereits Gezeugte geschützt (nasciturus), z. B. im Erbrecht (§ 1923 II).',
        'Juristische Person :: Eine rechtlich verselbstständigte Organisation mit eigener Rechtspersönlichkeit, z. B. der eingetragene Verein (§§ 21 ff. BGB), die AG (§§ 1 ff. AktG) und die GmbH (§§ 1 ff. GmbHG). Sie handelt durch ihre Organe: bei der GmbH Geschäftsführer und Gesellschafterversammlung, bei der AG Vorstand, Aufsichtsrat und Hauptversammlung. Sie entsteht durch Eintragung in das Vereins- oder Handelsregister (konstitutiv) und endet mit der Löschung.',
        'Rechtsfähige Personengesellschaft :: GbR (§§ 705 ff. BGB), OHG (§§ 105 ff. HGB), KG (§§ 161 ff. HGB). Es gilt die Selbstorganschaft: Die Gesellschafter selbst führen die Geschäfte und vertreten die Gesellschaft, nicht angestellte Dritte.'
      ]),
      cmp('Schaubild: Die drei Rechtssubjekte im Vergleich', ['', 'Natürliche Person', 'Juristische Person', 'Personengesellschaft'], [
        ['Beispiele', 'Jeder Mensch', 'e. V., GmbH, AG', 'GbR, OHG, KG'],
        ['Rechtsgrundlage', '§ 1 BGB', '§§ 21 ff. BGB, AktG, GmbHG', '§§ 705 ff. BGB, §§ 105 ff., 161 ff. HGB'],
        ['Beginn', 'Vollendung der Geburt', 'Eintragung (konstitutiv)', 'Teilnahme am Rechtsverkehr bzw. Eintragung'],
        ['Ende', 'Tod', 'Löschung im Register', 'Auflösung und Liquidation'],
        ['Handelt durch', 'sich selbst', 'Organe (Fremdorganschaft möglich)', 'Gesellschafter (Selbstorganschaft)'],
        ['Haftung', 'persönlich', 'nur Gesellschaftsvermögen', 'Gesellschafter persönlich (Ausnahme Kommanditist)']
      ]),
      v('Ergänzung: Personengesellschaften nach dem MoPeG (seit 01.01.2024)', `Seit der Reform durch das Personengesellschaftsrechtsmodernisierungsgesetz ist die GbR, die am Rechtsverkehr teilnimmt, kraft Gesetzes rechtsfähig (§ 705 II BGB). Sie kann sich freiwillig in das neue Gesellschaftsregister eintragen lassen (§ 707 BGB). Für Grundstückserwerb ist das faktisch nötig. Für die Schulden der GbR haften die Gesellschafter persönlich und unbeschränkt (§ 721 BGB), bei der OHG gilt das Gleiche (§ 126 HGB). Bei der KG haftet der Kommanditist nur bis zur Höhe seiner Einlage (§ 171 HGB). Der Gegensatz zur GmbH: Dort haftet den Gläubigern nur das Gesellschaftsvermögen (§ 13 II GmbHG).`),
      b('Konstitutiv oder deklaratorisch?', `Eine konstitutive (rechtsbegründende) Eintragung erzeugt die Rechtsfolge erst, z. B. entsteht die GmbH als solche erst mit der Eintragung (§ 11 I GmbHG). Eine deklaratorische (rechtsbekundende) Eintragung verlautbart nur, was ohnehin schon gilt, z. B. ist ein Istkaufmann nach § 1 HGB auch ohne Eintragung Kaufmann.`),
      f('Klausurfalle', `Die Verwechslung von Rechtsfähigkeit und Geschäftsfähigkeit. Ein 5-Jähriger kann ein Grundstück erben (rechtsfähig), aber kein Eis kaufen (geschäftsunfähig, § 105 I). Ein solcher „Kauf“ ist sowohl als Verpflichtungs- als auch als Verfügungsgeschäft nichtig. Das ist die Ausnahme zum Abstraktionsprinzip in Modul 3.`)
    ] },
    { title: 'Namensrecht, § 12', blocks: [
      p(`§ 12 schützt den Namen als Persönlichkeitsrecht. Bestreitet jemand das Recht zum Gebrauch des Namens oder gebraucht er ihn unbefugt, kann der Berechtigte Beseitigung und bei Wiederholungsgefahr Unterlassung verlangen. Geschützt sind auch Firmen, Vereinsnamen, Pseudonyme und nach der Rechtsprechung Domainnamen.`),
      b('Beispiel', `Ein Dritter registriert die Domain „muenchen.de“ und betreibt darunter eine private Seite. Die Stadt kann nach § 12 Löschung verlangen (vgl. BGH „shell.de“).`)
    ] },
    { title: 'Verbraucher (§ 13) und Unternehmer (§ 14)', blocks: [
      p(`Diese beiden Begriffe sind die Schalter des modernen Schuldrechts. Ob ein Widerrufsrecht besteht (§ 312g), ob ein Gewährleistungsausschluss wirksam ist (§ 476), ob die Gefahr beim Versand übergeht (§ 475 II): Das alles hängt davon ab, wer auf welcher Seite steht. Das Skript betont: Die Unterscheidung spielt in vielen Vorschriften eine Rolle.`),
      s('Verbraucher, § 13: Tatbestandsmerkmale', [
        'Natürliche Person :: Juristische Personen (GmbH, AG) sind nie Verbraucher.',
        'Abschluss eines Rechtsgeschäfts :: z. B. Kauf, Miete, Darlehen.',
        'Zweck überwiegend weder gewerblich noch selbstständig beruflich :: Es kommt auf den objektiven Zweck des konkreten Geschäfts an, nicht auf die Person im Allgemeinen. Bei gemischter Nutzung („dual use“) entscheidet, was überwiegt.'
      ]),
      s('Unternehmer, § 14: Tatbestandsmerkmale', [
        'Natürliche oder juristische Person oder rechtsfähige Personengesellschaft',
        'Bei Abschluss eines Rechtsgeschäfts',
        'In Ausübung ihrer gewerblichen oder selbstständigen beruflichen Tätigkeit :: Gewerbe heißt planmäßig, auf Dauer und entgeltlich am Markt tätig sein. Gewinnerzielungsabsicht ist nicht nötig. Auch Freiberufler wie Ärzte, Anwälte und Architekten sind Unternehmer, aber keine Kaufleute.'
      ]),
      b('Der Unternehmer als Verbraucher (Skript)', `Der Schreinermeister U kauft beim Elektrohändler einen Fernseher für sein Wohnzimmer. U ist eine natürliche Person und handelt zu privaten Zwecken, also ist er in diesem Geschäft Verbraucher (§ 13). Die Rolle wird pro Geschäft bestimmt, nicht pro Person.`),
      l('Abgrenzungsfälle', [
        'Arbeitnehmer :: Arbeitnehmer sind beim Abschluss des Arbeitsvertrags Verbraucher (BAG), denn abhängige Arbeit ist keine selbstständige Tätigkeit.',
        'Existenzgründer :: Wer Geschäfte zur Vorbereitung einer Selbstständigkeit abschließt, z. B. Ladenmiete oder Kassensystem, handelt nach dem BGH bereits als Unternehmer.',
        'Student mit Nebengewerbe :: Für den Laptop zum Studieren ist der Student Verbraucher. Für die Ware, die er auf eBay planmäßig weiterverkauft, ist er Unternehmer („Powerseller“ in Fall 17).',
        'Kunde ohne Angaben :: Ist nichts gesagt, gilt im Zweifel § 13 („überwiegend“). Natürliche Personen sind im Zweifel Verbraucher.'
      ]),
      tf('Schnelltest: Verbraucher oder nicht?', [
        ['Die Ein-Personen-GmbH, die Kaffee für das Büro kauft, ist Verbraucherin.', false, 'Eine juristische Person ist nie Verbraucher, § 13 verlangt eine natürliche Person.'],
        ['Ein Rechtsanwalt, der privat ein Fahrrad kauft, ist Verbraucher.', true, 'Maßgeblich ist der Zweck des konkreten Geschäfts. Privat heißt Verbraucher.'],
        ['Eine Ärztin, die ein Ultraschallgerät für ihre Praxis kauft, ist Unternehmerin, obwohl sie keine Kauffrau ist.', true, 'Sie übt eine selbstständige berufliche Tätigkeit aus (§ 14). Unternehmer ist der weitere Begriff, Kaufmann der engere.'],
        ['Eine Arbeitnehmerin, die einen Arbeitsvertrag schließt, ist Unternehmerin.', false, 'Abhängige Arbeit ist keine selbstständige Tätigkeit, deshalb ist sie Verbraucherin.'],
        ['Ein Student, der über eBay planmäßig hunderte Artikel verkauft, kann Unternehmer sein.', true, 'Planmäßiges, dauerhaftes Tätigwerden am Markt ist gewerblich („Powerseller“, Fall 17).']
      ]),
      f('Klausurfalle', `„Privatmann“ an „Privatmann“ (Fall 20) ist kein Verbrauchsgüterkauf. Dann gilt § 447 BGB uneingeschränkt, und das Ergebnis dreht sich komplett.`)
    ] },
    { title: 'Verbrauchsgüterkauf, § 474', blocks: [
      m(`Verbrauchsgüterkauf heißt: Unternehmer (Verkäufer) an Verbraucher (Käufer), Kaufvertrag über eine Ware, also insbesondere eine bewegliche Sache (§ 474 I). Kurzformel des Skripts: „b (VK) an c (K) über bewegliche Sache“.`),
      rel('Schaubild: Rollenverteilung beim Verbrauchsgüterkauf', [
        ['Unternehmer (§ 14)', 'verkauft Ware, § 433', 'Verbraucher (§ 13)'],
        ['Verbraucher (§ 13)', 'verkauft Ware: KEIN § 474', 'Unternehmer (§ 14)'],
        ['Verbraucher', 'verkauft Ware: KEIN § 474 (Privatkauf)', 'Verbraucher']
      ]),
      p(`Das Skript macht daraus eine Arbeitsanweisung für die Klausur: Prüfen Sie immer zuerst, ob ein Verbrauchsgüterkauf vorliegt, bevor Sie die verbraucherfreundlichen Sondervorschriften der §§ 474 ff. anwenden. Diese Reihenfolge ist zwingend, weil die Sonderregeln die allgemeinen Regeln teilweise verdrängen.`),
      s('Prüfung', [
        'Kaufvertrag (§ 433) :: auch Werklieferungsverträge nach § 650 und Kauf mit Montage, § 474 I 2',
        'Verkäufer ist Unternehmer (§ 14)',
        'Käufer ist Verbraucher (§ 13)',
        'Ware :: bewegliche Sache, keine Grundstücke. Ausnahme: gebrauchte Sachen in einer öffentlichen Versteigerung, an der der Verbraucher persönlich teilnehmen kann (§ 474 II 2)'
      ]),
      qc('Kurz-Check: Autohändler A verkauft der Privatperson P ein Grundstück. Verbrauchsgüterkauf?', 'Nein. Ein Grundstück ist keine Ware (bewegliche Sache). § 474 ist nicht anwendbar, auch wenn ein Unternehmer an einen Verbraucher verkauft.'),
      l('Rechtsfolgen: die wichtigsten Sonderregeln', [
        '§ 475 II :: Beim Versendungskauf geht die Gefahr erst mit Übergabe an den Verbraucher über, § 447 ist grundsätzlich unanwendbar (Fall 17).',
        '§ 476 I :: Abweichungen zum Nachteil des Verbrauchers vor Mitteilung des Mangels sind unwirksam. Ein pauschaler Gewährleistungsausschluss („wie besichtigt“, „so wie es ist“) ist unwirksam (Fall 30). Eine negative Beschaffenheitsvereinbarung ist nur unter strengen Voraussetzungen möglich (§ 476 I 2: eigens informiert und ausdrücklich, gesondert vereinbart).',
        '§ 476 II :: Die Verjährung darf bei gebrauchten Sachen auf minimal 1 Jahr verkürzt werden, bei neuen Sachen gar nicht.',
        '§ 477 :: Beweislastumkehr. Zeigt sich ein Mangel innerhalb eines Jahres nach Gefahrübergang, wird vermutet, dass er schon bei Gefahrübergang vorlag.',
        '§ 475b :: Waren mit digitalen Elementen, Aktualisierungspflicht (Fall 29).',
        '§ 475d :: Rücktritt und Schadensersatz ohne Fristsetzung, wenn der Unternehmer nach einer angemessenen Frist ab Unterrichtung nicht nacherfüllt (Fall 33).',
        '§ 478 :: Rückgriff des Unternehmers in der Lieferkette.'
      ])
    ] },
    { title: 'Kaufmann (§§ 1 ff. HGB) und Firma (§§ 17 ff. HGB)', blocks: [
      p(`Das HGB ist das Sonderprivatrecht der Kaufleute. Es setzt voraus, dass ein Beteiligter Kaufmann ist. Kaufleute gelten als geschäftserfahren und weniger schutzbedürftig, deshalb sind die Regeln strenger und schneller. Das Skript verweist auf Kallwass, Privatrecht, § 84.`),
      s('Kaufmannsarten', [
        'Istkaufmann, § 1 HGB :: Wer ein Handelsgewerbe betreibt. Handelsgewerbe ist jedes Gewerbe, es sei denn, das Unternehmen erfordert nach Art oder Umfang keinen in kaufmännischer Weise eingerichteten Geschäftsbetrieb (Kleingewerbe). Die Eintragung ist deklaratorisch.',
        'Kannkaufmann, § 2 HGB :: Ein Kleingewerbetreibender, der sich freiwillig eintragen lässt. Die Eintragung ist konstitutiv. Dasselbe gilt für Land- und Forstwirte nach § 3 HGB.',
        'Fiktivkaufmann, § 5 HGB :: Wer eingetragen ist, kann sich nicht darauf berufen, kein Handelsgewerbe zu betreiben.',
        'Formkaufmann, § 6 HGB :: Handelsgesellschaften (OHG, KG) und Kapitalgesellschaften (GmbH, AG) sind kraft Rechtsform Kaufleute, egal was sie tun.',
        'Scheinkaufmann (Gewohnheitsrecht) :: Wer im Rechtsverkehr zurechenbar den Schein setzt, Kaufmann zu sein, muss sich gegenüber Gutgläubigen so behandeln lassen.'
      ]),
      l('Warum es darauf ankommt: wichtige Sonderregeln für Kaufleute', [
        '§ 377 HGB :: Rügeobliegenheit beim beiderseitigen Handelskauf. Mängel sind unverzüglich zu untersuchen und zu rügen, sonst gilt die Ware als genehmigt und alle Gewährleistungsrechte sind verloren.',
        '§ 350 HGB :: Die Bürgschaft eines Kaufmanns ist formfrei, abweichend von § 766 BGB.',
        '§ 362 HGB und kaufmännisches Bestätigungsschreiben :: Schweigen kann ausnahmsweise als Zustimmung gelten.',
        '§ 38 I ZPO :: Gerichtsstandsvereinbarungen sind nur unter Kaufleuten wirksam (Modul 1).',
        '§ 376 HGB :: Fixhandelskauf.'
      ]),
      s('Firma, §§ 17 ff. HGB', [
        'Begriff, § 17 I :: Die Firma ist der Name, unter dem der Kaufmann seine Geschäfte betreibt und die Unterschrift abgibt. Achtung: Umgangssprachlich meint „Firma“ das Unternehmen, juristisch nur den Namen.',
        'Unterscheidungskraft und Kennzeichnungseignung, § 18 I :: Die Firma muss den Kaufmann individualisieren.',
        'Irreführungsverbot, § 18 II (Firmenwahrheit) :: z. B. darf sich ein Einzelhändler nicht „Europa-Zentrale“ nennen, wenn das täuscht.',
        'Rechtsformzusatz, § 19 :: z. B. „e. K.“, „OHG“, „KG“, „GmbH“ (§ 4 GmbHG).',
        'Firmenbeständigkeit, §§ 21, 22 :: Die Firma darf bei Namensänderung oder Erwerb fortgeführt werden.',
        'Firmenausschließlichkeit, § 30 :: Die Firma muss sich von allen am selben Ort eingetragenen Firmen deutlich unterscheiden.',
        'Haftung bei Firmenfortführung, § 25 :: Wer ein Handelsgeschäft mit Firma fortführt, haftet für die alten Geschäftsschulden.'
      ])
    ] },
    { title: 'Rechtsobjekte, §§ 90 ff.', blocks: [
      s('Die Arten von Rechtsobjekten (Skript S. 9–10)', [
        'Sachen, § 90 :: Körperliche Gegenstände. Zu unterscheiden sind bewegliche Sachen und unbewegliche Sachen (Grundstücke, Immobilien).',
        'Vertretbare Sachen, § 91 :: Laut Skript Sachen, die der Verkäufer ohne größere Mühe am Markt absetzen kann (Massenware). Gesetzlich: bewegliche Sachen, die im Verkehr nach Zahl, Maß oder Gewicht bestimmt werden. Spezialanfertigungen für den Käufer sind regelmäßig nicht vertretbar.',
        'Sachgesamtheiten :: Zum Beispiel eine Bibliothek oder ein Warenlager. Eine Sachgesamtheit ist keine eigene Sache, das Recht bezieht sich auf jede Einzelsache (Spezialitätsgrundsatz, Modul 14).',
        'Immaterialgüter :: Geistige Schöpfungen wie Literatur, Kunst und Patente. Geschützt werden sie durch Sondergesetze (UrhG, PatG, MarkenG).',
        'Rechte :: Dingliche Rechte wie das Eigentum sind absolute Rechte und gelten gegenüber jedermann. Forderungen wie eine Geldforderung sind relative Rechte und wirken nur zwischen Gläubiger und Schuldner. Daneben gibt es Mitgliedschaftsrechte, z. B. den GmbH-Anteil.',
        'Vermögen :: Die Summe aller geldwerten Sachen und Rechte einer Person. Es ist gesetzlich nicht definiert.'
      ]),
      cmp('Schaubild: Absolute vs. relative Rechte', ['', 'Absolutes Recht', 'Relatives Recht'], [
        ['Beispiel', 'Eigentum, Patent, Persönlichkeitsrecht', 'Kaufpreisforderung, Lieferanspruch'],
        ['Wirkt gegen', 'jedermann', 'nur den Schuldner'],
        ['Geregelt in', 'Sachenrecht, Sondergesetze', 'Schuldrecht'],
        ['Schutz durch § 823 I', 'ja', 'nein (kein „sonstiges Recht“)'],
        ['Übertragung', '§ 929 / §§ 873, 925', '§ 398 (Abtretung)']
      ]),
      l('Keine Sachen (Skript), aber regelmäßig analoge Anwendung', [
        'Computerdaten und Programme :: Für Verträge über digitale Inhalte gelten heute die §§ 327 ff. (Modul 11).',
        'Der Körper des lebenden Menschen',
        'Tiere, § 90a :: Tiere sind keine Sachen, die Sachvorschriften gelten aber entsprechend. Ein Hundekauf ist deshalb ein Kaufvertrag, auf den Kaufrecht angewendet wird.'
      ]),
      p(`Die Unterscheidung ist nach dem Skript auch deshalb wichtig, weil Sachen und Forderungen unterschiedlich übertragen werden. Bewegliche Sachen werden durch Einigung und Übergabe übertragen (§ 929). Immobilien werden durch Einigung (Auflassung) und Eintragung ins Grundbuch übertragen (§§ 873, 925). Forderungen werden durch Abtretung übertragen (§ 398). Das vertiefen wir in den Modulen 3 und 14.`),
      fl('Schaubild: Wie wird was übertragen?', ['Bewegliche Sache :: § 929 S. 1: Einigung und Übergabe', 'Grundstück :: §§ 873, 925: Auflassung und Eintragung', 'Forderung :: § 398: Abtretungsvertrag']),
      v('Vertiefung: Bestandteile, Zubehör, Nutzungen', `Wesentliche Bestandteile (§§ 93, 94) können nicht Gegenstand besonderer Rechte sein. Das Haus ist wesentlicher Bestandteil des Grundstücks und wird automatisch mit übereignet (Fall 47 d). Zubehör (§ 97), z. B. die Maschinen einer Fabrik, ist eine selbstständige Sache, die im Zweifel mitverkauft wird (§ 311c). Nutzungen (§ 100) sind Früchte und Gebrauchsvorteile. Sie spielen im Bereicherungsrecht eine Rolle (§ 818 I, Fall 52).`),
      f('Klausurfalle', `Das Vermögen als solches ist kein „sonstiges Recht“ im Sinne des § 823 I. Reine Vermögensschäden, etwa Zinsen für einen umsonst aufgenommenen Kredit, sind deliktisch grundsätzlich nicht ersatzfähig (Fall 14 b). Der Grund: Das Vermögen ist kein absolutes Recht, das gegenüber jedermann abgegrenzt ist.`)
    ] }
  ],
  cases: [
    { n: 1, q: 'Ein Verbrauchsgüterkauf liegt vor, wenn:', c: 2, o: [
      ['Zwei Unternehmer einen Kaufvertrag schließen.', 'Falsch. Das ist ein B2B-Kauf, unter Kaufleuten ein Handelskauf (§§ 343, 377 HGB). Es fehlt der Verbraucher als Käufer.'],
      ['Zwei Verbraucher einen Kaufvertrag schließen.', 'Falsch. Das ist ein Privatkauf (C2C). Es fehlt der Unternehmer als Verkäufer, deshalb gelten nur die §§ 433 ff. ohne die §§ 474 ff.'],
      ['Wenn ein Unternehmer als Verkäufer mit einem Verbraucher als Käufer einen Kaufvertrag über eine bewegliche Sache schließt.', 'Richtig. Das ist exakt die Definition des § 474 I 1: Unternehmer (§ 14) verkauft an Verbraucher (§ 13) eine Ware. Kurz: „b (VK) an c (K)“.'],
      ['Wenn ein Verbraucher als Verkäufer mit einem Unternehmer als Käufer einen Kaufvertrag über eine bewegliche Sache schließt.', 'Falsch. Das ist die umgekehrte Rollenverteilung, z. B. beim Verkauf des Gebrauchtwagens an einen Händler. § 474 schützt nur den Verbraucher als Käufer.']],
      lsg: ['Normsuche: Die Legaldefinition steht in § 474 I 1 BGB.', 'Voraussetzungen: Kaufvertrag, Verkäufer ist Unternehmer im Sinne des § 14, Käufer ist Verbraucher im Sinne des § 13, Gegenstand ist eine Ware, insbesondere eine bewegliche Sache.', 'Nur Option c erfüllt alle Merkmale in der richtigen Rollenverteilung.', 'Klausurtipp: Lesen Sie bei solchen Fragen genau, wer Verkäufer und wer Käufer ist. Die Vertauschung in Option d ist der klassische Distraktor.'] }
  ],
  pq: [
    { q: 'Grenzen Sie Rechtsfähigkeit und Geschäftsfähigkeit voneinander ab.', a: 'Rechtsfähigkeit ist die Fähigkeit, Träger von Rechten und Pflichten zu sein. Bei natürlichen Personen beginnt sie mit der Vollendung der Geburt (§ 1). Geschäftsfähigkeit ist die Fähigkeit, durch eigene Willenserklärungen Rechtsgeschäfte wirksam vorzunehmen (§§ 104 ff.). Ein Kind ist rechtsfähig und kann z. B. Eigentümer sein. Unter 7 Jahren ist es aber geschäftsunfähig (§ 104 Nr. 1), seine Willenserklärungen sind nichtig (§ 105 I).' },
    { q: 'Ein selbstständiger Steuerberater kauft beim Händler einen Laptop, den er zu 70 % für die Kanzlei und zu 30 % privat nutzt. Liegt ein Verbrauchsgüterkauf vor?', a: 'Nein. Ein Verbrauchsgüterkauf setzt voraus, dass der Käufer Verbraucher ist (§ 474 I). Verbraucher ist nach § 13 nur, wer zu Zwecken handelt, die überwiegend weder gewerblich noch selbstständig beruflich sind. Hier überwiegt die berufliche Nutzung (70 %), also handelt der Steuerberater als Unternehmer (§ 14). Freiberufler sind zwar keine Kaufleute, wohl aber Unternehmer. Die §§ 474 ff. sind nicht anwendbar.' },
    { q: 'Warum ist die Unterscheidung von Sachen und Forderungen praktisch wichtig?', a: 'Weil beide unterschiedlich übertragen werden und unterschiedlich geschützt sind. Bewegliche Sachen werden durch Einigung und Übergabe übertragen (§ 929), Grundstücke durch Auflassung und Eintragung (§§ 873, 925), Forderungen durch bloßen Abtretungsvertrag (§ 398). Außerdem ist das Eigentum ein absolutes Recht und gegenüber jedermann geschützt (§§ 823 I, 985). Die Forderung ist ein relatives Recht und wirkt nur zwischen Gläubiger und Schuldner.' },
    { q: 'Ist eine GmbH, die einen Kaffeevollautomaten für die Teeküche kauft, Verbraucher?', a: 'Nein. Verbraucher kann nach § 13 nur eine natürliche Person sein. Die GmbH ist eine juristische Person und handelt stets als Unternehmer (§ 14). Als Handelsgesellschaft ist sie zudem Formkaufmann (§ 6 HGB, § 13 III GmbHG), sodass der Kauf ein Handelsgeschäft ist (§ 343 HGB).' }
  ],
  cards: [
    ['Rechtsfähigkeit?', 'Die Fähigkeit, Träger von Rechten und Pflichten zu sein. Für natürliche Personen gilt § 1: ab Vollendung der Geburt bis zum Tod.'],
    ['Juristische Person: Beispiele, Beginn, Ende?', 'Verein, GmbH, AG. Sie beginnt mit der Eintragung (konstitutiv) und endet mit der Löschung. Sie handelt durch Organe.'],
    ['Selbstorganschaft?', 'Bei Personengesellschaften führen die Gesellschafter selbst die Geschäfte und vertreten die Gesellschaft.'],
    ['Verbraucher, § 13?', 'Eine natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder gewerblich noch selbstständig beruflich sind.'],
    ['Unternehmer, § 14?', 'Eine natürliche oder juristische Person oder rechtsfähige Personengesellschaft, die in Ausübung ihrer gewerblichen oder selbstständigen beruflichen Tätigkeit handelt.'],
    ['Verbrauchsgüterkauf, § 474?', 'Ein Unternehmer verkauft einem Verbraucher eine Ware (bewegliche Sache). Prüfen Sie das immer zuerst!'],
    ['Istkaufmann?', '§ 1 HGB: Wer ein Handelsgewerbe betreibt, also kein Kleingewerbe. Die Eintragung ist deklaratorisch.'],
    ['Formkaufmann?', '§ 6 HGB: OHG, KG, GmbH und AG sind Kaufleute kraft Rechtsform.'],
    ['Firma?', '§ 17 HGB: der Name, unter dem der Kaufmann Geschäfte betreibt und unterschreibt.'],
    ['Sache?', '§ 90: ein körperlicher Gegenstand. Tiere sind keine Sachen (§ 90a), Software ebenfalls nicht.'],
    ['Vertretbare Sache?', '§ 91: nach Zahl, Maß oder Gewicht bestimmt, Massenware. Gegenbeispiel: die Spezialanfertigung.'],
    ['Absolutes vs. relatives Recht?', 'Ein absolutes Recht (Eigentum) wirkt gegenüber jedermann. Ein relatives Recht (Forderung) wirkt nur zwischen Gläubiger und Schuldner.']
  ]
};

W[3] = {
  src: 'Skript S. 10–12 · Abschnitt IV', title: 'Trennungs- & Abstraktionsprinzip',
  intro: `Das Skript nennt es „WICHTIG“, und es ist das Herzstück des deutschen Zivilrechts. Fast kein anderes Land trennt so streng zwischen der Verpflichtung, etwas zu tun, und dem Tun selbst. Wer dieses Prinzip verstanden hat, versteht den Aufbau des BGB, das Bereicherungsrecht und den gutgläubigen Erwerb.`,
  ziel: 'Die drei Verträge beim Kauf benennen, Verpflichtungs- und Verfügungsgeschäft trennen, ihre unabhängige Wirksamkeit begründen und den Ausgleich über § 812 erklären.',
  relevanz: 'Extrem hoch. Es ist direkt Gegenstand der Fälle 2, 3, 4, 47 bis 52 und indirekt fast jeder Sachenrechtsfrage.',
  faelle: 'Fälle 2 und 47. Fall 47 betrifft Grundstücke, die Folgefälle 48 bis 50 stehen in Modul 14.',
  sections: [
    { title: 'Das Trennungsprinzip', blocks: [
      m(`Trennungsprinzip: Das Verpflichtungsgeschäft (schuldrechtlicher Vertrag, z. B. Kaufvertrag nach § 433 oder Schenkung nach § 516) und das Verfügungsgeschäft (dinglicher Vertrag, z. B. Übereignung nach § 929 S. 1) sind rechtlich strikt getrennte Rechtsgeschäfte.`),
      p(`Der Kaufvertrag erzeugt nur Pflichten: Der Verkäufer muss übereignen, der Käufer muss zahlen. An der Eigentumslage ändert er nichts. Das Skript: „An der Eigentümerstellung selbst ändert der Kaufvertrag nichts!“ Damit das Eigentum übergeht, braucht es zusätzlich ein eigenes, selbstständiges Rechtsgeschäft, die Übereignung.`),
      s('Bei einem normalen Barkauf werden DREI Verträge geschlossen', [
        'Kaufvertrag, § 433 I, II :: Verpflichtungsgeschäft. Der Verkäufer muss übergeben und übereignen (I), der Käufer muss zahlen und abnehmen (II).',
        'Übereignung der Kaufsache, § 929 S. 1 :: Verfügungsgeschäft. Verkäufer und Käufer einigen sich über den Eigentumsübergang an der Ware, und die Ware wird übergeben.',
        'Übereignung des Geldes, § 929 S. 1 :: Verfügungsgeschäft. Käufer und Verkäufer einigen sich über den Eigentumsübergang an den Geldscheinen und Münzen, und das Geld wird übergeben.'
      ]),
      rel('Schaubild: Die drei Verträge beim Barkauf', [
        ['Verkäufer', 'Kaufvertrag, § 433 (Verpflichtung, nur Pflichten)', 'Käufer'],
        ['Verkäufer', 'Übereignung der Ware, § 929 S. 1 (Verfügung)', 'Käufer'],
        ['Käufer', 'Übereignung des Geldes, § 929 S. 1 (Verfügung)', 'Verkäufer']
      ]),
      b('Brötchenkauf beim Bäcker', `Sie sagen: „Zwei Brezen, bitte.“ Die Verkäuferin gibt sie Ihnen, und Sie legen 2 € auf den Tresen. Im Bruchteil einer Sekunde sind drei Verträge zustande gekommen: der Kaufvertrag (§ 433), die Übereignung der Brezen (§ 929 S. 1) und die Übereignung der Münzen (§ 929 S. 1). Alle drei geschehen konkludent, also durch schlüssiges Verhalten.`)
    ] },
    { title: 'Das Abstraktionsprinzip', blocks: [
      m(`Abstraktionsprinzip: Verpflichtungs- und Verfügungsgeschäft sind in ihrer Wirksamkeit voneinander unabhängig. Ist der Kaufvertrag unwirksam, bleibt die Übereignung grundsätzlich wirksam, und umgekehrt.`),
      p(`Das Trennungsprinzip sagt also, dass es zwei Geschäfte gibt. Das Abstraktionsprinzip sagt, dass das Schicksal des einen das andere nicht berührt. Die dingliche Einigung ist „abstrakt“, das heißt losgelöst vom Zweck. Sie enthält nur die Einigung, dass das Eigentum übergehen soll, und „sonst über Nichts!!“ (Skript).`),
      s('Verpflichtungsgeschäft (Skript S. 11, I.)', [
        'Verpflichtung des Verkäufers, § 433 I :: (Nur!) die Pflicht zur Eigentumsübertragung, nicht die Übertragung selbst',
        'Verpflichtung des Käufers, § 433 II :: Kaufpreiszahlung',
        'Andere Bezeichnungen :: schuldrechtlicher Vertrag, Grund- oder Kausalgeschäft'
      ]),
      s('Verfügungsgeschäft = Erfüllung (Skript S. 11, II.)', [
        'Einigung über den Eigentumsübergang :: der dingliche Vertrag, bei Immobilien „Auflassung“ genannt (§ 925)',
        'Übergabe (bewegliche Sachen, § 929) oder Eintragung ins Grundbuch (Immobilien, §§ 873, 925) :: jeweils ein Realakt',
        'Einigung und Übergabe beim Geld, § 929 :: separat',
        'Berechtigung des Verfügenden :: Er muss Eigentümer oder verfügungsbefugt sein (§ 185). Sonst kommt nur ein gutgläubiger Erwerb in Betracht (§§ 932 ff., 892).'
      ]),
      cmp('Schaubild: Verpflichtungs- vs. Verfügungsgeschäft', ['', 'Verpflichtungsgeschäft', 'Verfügungsgeschäft'], [
        ['Auch genannt', 'schuldrechtlicher Vertrag, Kausalgeschäft', 'dinglicher Vertrag, Erfüllung'],
        ['Wirkung', 'erzeugt Pflichten (Forderungen)', 'überträgt, belastet, ändert oder hebt ein Recht auf'],
        ['Beispiele', 'Kauf § 433, Schenkung § 516, Forderungskauf § 453', 'Übereignung § 929, Auflassung § 925, Abtretung § 398'],
        ['Geregelt in', 'Buch 2 (Schuldrecht)', 'Buch 3 (Sachenrecht), § 398 im Schuldrecht'],
        ['Berechtigung nötig?', 'nein (Fall 2 b)', 'ja, sonst nur gutgläubiger Erwerb'],
        ['Realakt nötig?', 'nein', 'Übergabe bzw. Eintragung (nicht bei § 398)']
      ]),
      tf('Schnelltest: Abstraktion', [
        ['Wer einen Kaufvertrag über ein Fahrrad schließt, wird damit Eigentümer.', false, 'Der Kaufvertrag begründet nur die Pflicht zur Übereignung (§ 433 I). Eigentum entsteht erst mit § 929.'],
        ['Ein Kaufvertrag über eine fremde Sache ist wirksam.', true, 'Die Berechtigung ist nur beim Verfügungsgeschäft relevant (Fall 2 b).'],
        ['Ist der Kaufvertrag angefochten, fällt das Eigentum automatisch an den Verkäufer zurück.', false, 'Die Übereignung bleibt wirksam. Der Verkäufer muss nach § 812 die Rückübereignung verlangen.'],
        ['Die dingliche Einigung enthält auch den Kaufpreis.', false, 'Sie enthält nur die Einigung über den Eigentumsübergang, „sonst über Nichts!!“.']
      ]),
      v('Warum macht das BGB das so kompliziert?', `Wegen des Verkehrsschutzes und der Rechtssicherheit. Wer eine Sache erwirbt, soll nicht prüfen müssen, ob irgendein Kaufvertrag in der Erwerbskette fehlerhaft war. Die Eigentumslage soll klar und für jedermann erkennbar sein (Publizität durch Besitz oder Grundbuch). Fehler im Grundgeschäft werden nur zwischen den Parteien schuldrechtlich korrigiert, über § 812.`)
    ] },
    { title: 'Ausgleich über das Bereicherungsrecht, § 812 I 1', blocks: [
      p(`Wenn der Kaufvertrag unwirksam ist, z. B. wegen Anfechtung nach §§ 142 I, 119 II, ist der Käufer trotzdem Eigentümer geworden. Er hat das Eigentum aber „ohne rechtlichen Grund“ erlangt, denn der Rechtsgrund (Kaufvertrag) fehlt. Diese Lücke schließt das Bereicherungsrecht: Der Verkäufer kann die Rückübereignung verlangen (§ 812 I 1 Alt. 1, Leistungskondiktion).`),
      st('Durchgespielt: Was passiert bei einer Anfechtung?', [
        'Tag 1: Vertrag :: V und K schließen einen Kaufvertrag über ein Bild (§ 433).',
        'Tag 1: Übereignung :: V übereignet das Bild an K, K übereignet 1.000 € an V (je § 929 S. 1). K ist Eigentümer des Bildes, V Eigentümer des Geldes.',
        'Tag 10: Irrtum entdeckt :: Das Bild ist eine Kopie. K ficht unverzüglich nach §§ 119 II, 121, 143 an.',
        'Rechtsfolge Kaufvertrag :: Er ist nichtig von Anfang an (§ 142 I).',
        'Rechtsfolge Übereignungen :: Sie bleiben wirksam (Abstraktionsprinzip). Die Eigentumslage ändert sich NICHT.',
        'Ausgleich :: V verlangt Rückübereignung des Bildes, K verlangt Rückübereignung des Geldes, jeweils nach § 812 I 1 Alt. 1.'
      ]),
      b('Anfechtung des Kaufvertrags', `V verkauft K ein Bild, das beide für ein Original halten, und übereignet es. Später stellt sich heraus, dass es eine Kopie ist. K ficht nach § 119 II (Irrtum über eine verkehrswesentliche Eigenschaft) an. Der Kaufvertrag ist rückwirkend nichtig (§ 142 I). Die Übereignungen bleiben wirksam: K ist Eigentümer des Bildes, V Eigentümer des Geldes. Beide müssen nach § 812 I 1 Alt. 1 zurückübereignen.`),
      f('Klausurfalle', `Die Aussage „Der Eigentumserwerb nach § 929 S. 1 scheidet immer aus, wenn der Kaufvertrag unwirksam ist“ ist falsch (Fall 2 d). Wegen des Abstraktionsprinzips kann der Erwerb trotzdem wirksam sein.`)
    ] },
    { title: 'Ausnahmen: Fehleridentität', blocks: [
      p(`Nur in Ausnahmefällen ist das Verfügungsgeschäft aus dem gleichen Grund unwirksam wie das Verpflichtungsgeschäft. Man spricht dann von Fehleridentität. Ob der Fehler beide Geschäfte erfasst, prüfen Sie für jedes Geschäft getrennt.`),
      l('Wichtige Fälle der Fehleridentität', [
        'Geschäftsunfähigkeit, § 105 I (Skript) :: Die Willenserklärung eines Geschäftsunfähigen ist nichtig. Das betrifft sowohl die schuldrechtliche Einigung beim Kauf als auch die dingliche Einigung bei § 929 S. 1.',
        'Arglistige Täuschung und Drohung, § 123 :: Die Täuschung wirkt in der Regel bis in die Übereignung fort, deshalb sind beide Geschäfte anfechtbar.',
        'Wucher, § 138 II :: Das Gesetz erfasst ausdrücklich auch das Gewähren („sich gewähren lässt“), also die Verfügung.',
        'Beschränkte Geschäftsfähigkeit :: Erhält ein Minderjähriger Eigentum, ist das für ihn lediglich rechtlich vorteilhaft. Die Übereignung an ihn ist wirksam (§ 107), auch wenn der Kauf schwebend unwirksam ist (§ 108). Hier zeigt sich die Unabhängigkeit sehr deutlich.'
      ]),
      v('Ergänzung: Eigentumsvorbehalt (§§ 449, 158 I)', `Die Parteien können die Übereignung bewusst an den Kaufvertrag koppeln, durch eine aufschiebende Bedingung. Das Eigentum geht erst mit vollständiger Zahlung über. Bis dahin hat der Käufer ein Anwartschaftsrecht. Das ist der Standard im Handel.`)
    ] },
    { title: 'Immobilien und Forderungen', blocks: [
      s('Grundstückskauf: zwei verschiedene Geschäfte', [
        'Kaufvertrag (Verpflichtung), § 433 :: braucht die notarielle Beurkundung (§ 311b I 1). Ohne sie ist er nichtig (§ 125 S. 1). Er wird geheilt durch Auflassung und Eintragung (§ 311b I 2).',
        'Auflassung, §§ 873, 925 :: die dingliche Einigung, erklärt bei gleichzeitiger Anwesenheit beider Teile vor dem Notar. Sie ist bedingungsfeindlich (§ 925 II).',
        'Eintragung in das Grundbuch, § 873 I :: Erst mit der Eintragung wird der Käufer Eigentümer.'
      ]),
      fl('Schaubild: Ablauf beim Grundstückskauf', ['Notarieller Kaufvertrag :: § 311b I. Pflichten, KEIN Eigentum', 'Auflassung :: § 925 vor dem Notar', 'Eintragungsantrag :: über den Notar beim Grundbuchamt', 'Eintragung :: § 873 I: JETZT Eigentümer']),
      f('Klausurfalle', `Mit dem notariellen Kaufvertrag ist der Käufer noch nicht Eigentümer (Fall 2 c, Fall 47 a). Der Notartermin für den Kaufvertrag erzeugt nur Pflichten. In der Praxis wird die Auflassung zwar oft in derselben Urkunde erklärt, rechtlich bleibt sie aber ein separates Geschäft, und Eigentum entsteht erst mit Eintragung.`),
      p(`Auch bei der Abtretung unterscheidet man zwei Geschäfte (Skript S. 11). Das Verpflichtungsgeschäft ist z. B. der Forderungskauf (§ 453), etwa beim Factoring. Das Verfügungsgeschäft ist die Abtretung (§ 398). Für die Abtretung ist kein Realakt wie Übergabe oder Eintragung nötig, der bloße Vertrag genügt. Mit dem Kauf der Forderung wird man noch nicht Inhaber der Forderung, erst mit der Abtretung (Fall 51 b).`)
    ] },
    { title: 'Der Aufbau des BGB beruht auf dem Abstraktionsprinzip', blocks: [
      s('Die fünf Bücher des BGB (Skript S. 12)', [
        'Buch 1: Allgemeiner Teil, §§ 1–240 :: „vor die Klammer gezogen“. Grundsätze für alle Bücher: Definitionen und allgemeine Regeln über Personen, Sachen, Willenserklärungen, Verträge, Fristen und Verjährung.',
        'Buch 2: Schuldrecht, §§ 241–853 :: regelt die Verpflichtungsgeschäfte, also die Beziehung Person zu Person. Allgemeiner Teil §§ 241–432 (für alle Schuldverhältnisse, z. B. Leistungsstörungen), Besonderer Teil §§ 433–853 (einzelne Verträge wie Kauf, Miete und Werkvertrag sowie gesetzliche Schuldverhältnisse wie Bereicherung und Delikt).',
        'Buch 3: Sachenrecht, §§ 854–1296 :: regelt abstrakt die Verfügungsgeschäfte, also die Beziehung Person zu Sache (Besitz, Eigentum, Pfandrechte, Grundpfandrechte).',
        'Buch 4: Familienrecht, §§ 1297–1921',
        'Buch 5: Erbrecht, §§ 1922–2385'
      ]),
      fl('Schaubild: Das BGB als Klammer', ['Buch 1: AT :: §§ 1–240 gelten für alles', 'Buch 2: Schuldrecht :: Person zu Person', 'Buch 3: Sachenrecht :: Person zu Sache', 'Buch 4 / 5 :: Familie und Erbe']),
      p(`„Vor die Klammer ziehen“ ist eine mathematische Metapher: Was für alle gilt, steht einmal vorne. Die Regeln über Willenserklärungen (§§ 116 ff.) gelten deshalb für den Kaufvertrag genauso wie für die Auflassung, die Schenkung oder den Ehevertrag. Arbeitstechnik: Suchen Sie eine Antwort zuerst im besonderen Teil, also dort, wo der Vertragstyp geregelt ist. Steht dort nichts, gehen Sie zum allgemeinen Teil des Schuldrechts und dann zum Allgemeinen Teil des BGB.`),
      b('Die Klammertechnik in der Praxis', `Frage: Wann ist die Annahme eines Kaufangebots wirksam? Im Kaufrecht (§§ 433 ff.) steht dazu nichts. Im allgemeinen Schuldrecht (§§ 241 ff.) auch nicht. Im Allgemeinen Teil finden Sie die Antwort: § 130 (Zugang) und §§ 145 ff. (Vertragsschluss).`)
    ] }
  ],
  cases: [
    { n: 2, q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 1, o: [
      ['Das Trennungs- und Abstraktionsprinzip bedeutet die strikte rechtliche Trennung von dem sogenannten Verpflichtungsgeschäft und dem schuldrechtlichen Vertrag.', 'Falsch. Das ist ein Wortspiel: Verpflichtungsgeschäft und schuldrechtlicher Vertrag sind dasselbe. Getrennt werden Verpflichtungsgeschäft und Verfügungsgeschäft (dinglicher Vertrag).'],
      ['Ein Kaufvertrag nach § 433 BGB ist, alle übrigen Wirksamkeitsvoraussetzungen unterstellt, auch dann wirksam, wenn der Verkäufer nicht Eigentümer der Sache ist.', 'Richtig. Der Kaufvertrag begründet nur die Pflicht, Eigentum zu verschaffen. Ob der Verkäufer das kann, ist eine Frage der Erfüllung und nicht der Wirksamkeit des Kaufvertrags. Schafft er es nicht, haftet er wegen Rechtsmangels (§§ 435, 437) oder wegen Unmöglichkeit (§§ 275, 311a).'],
      ['Mit dem Abschluss eines notariellen Kaufvertrages über eine Immobilie ist der Käufer Eigentümer der Immobilie geworden.', 'Falsch. Der notarielle Kaufvertrag ist nur das Verpflichtungsgeschäft (§ 311b I). Eigentum entsteht erst durch Auflassung und Eintragung (§§ 873, 925).'],
      ['Ein Eigentumserwerb einer beweglichen Sache nach § 929 Satz 1 BGB scheidet immer aus, wenn der zugrundeliegende Kaufvertrag unwirksam ist.', 'Falsch. Nach dem Abstraktionsprinzip ist die Übereignung unabhängig vom Kaufvertrag wirksam. Das Wort „immer“ ist das Warnsignal, es gibt allenfalls Ausnahmen bei Fehleridentität. Der Ausgleich erfolgt über § 812.']],
      lsg: ['Prüfen Sie jede Aussage an der Grundunterscheidung: Verpflichtung (Schuldrecht) oder Verfügung (Sachenrecht)?', 'a) Hier werden zwei Begriffe für dieselbe Sache gegeneinandergestellt, also ist die Aussage falsch.', 'b) Die Wirksamkeit des Kaufvertrags setzt keine Berechtigung voraus. Die Berechtigung ist erst beim Verfügungsgeschäft zu prüfen, deshalb ist die Aussage richtig.', 'c) Verwechslung von Verpflichtung und Verfügung, also falsch.', 'd) Verstoß gegen das Abstraktionsprinzip, also falsch.'] },
    { n: 47, q: 'Welche der folgenden Aussagen ist richtig?', c: 2, o: [
      ['Wenn ein wirksamer und notariell beurkundeter Kaufvertrag über ein Grundstück vorliegt, wird der Käufer mit Abschluss des notariellen Kaufvertrages Eigentümer des Grundstücks.', 'Falsch. Der Kaufvertrag ist das Verpflichtungsgeschäft und überträgt kein Eigentum. Dafür sind Auflassung und Eintragung nötig (§§ 873 I, 925).'],
      ['Wenn ein Kaufvertrag über ein Grundstück, egal aus welchem Grunde, unwirksam ist, kann der Käufer unter keinen Umständen Eigentümer des Grundstücks werden.', 'Falsch. Das Abstraktionsprinzip gilt auch bei Grundstücken. Bei Formnichtigkeit des Kaufvertrags tritt sogar Heilung durch Auflassung und Eintragung ein (§ 311b I 2). „Unter keinen Umständen“ ist das Warnsignal.'],
      ['Der Käufer wird mit Auflassung und Eintragung in das Grundbuch Eigentümer des Grundstücks, unabhängig von der Wirksamkeit des zugrundeliegenden Kaufvertrages über das Grundstück.', 'Richtig. Das sind die Voraussetzungen des § 873 I in Verbindung mit § 925: dingliche Einigung (Auflassung) und Eintragung, außerdem die Berechtigung des Veräußerers. Wegen des Abstraktionsprinzips kommt es auf den Kaufvertrag nicht an. Fehlt dieser, besteht ein Anspruch auf Rückübertragung aus § 812 I 1 Alt. 1.'],
      ['Bei einem Hausgrundstück muss sowohl das Haus als auch das Grundstück in gesonderten dinglichen Verträgen übereignet werden.', 'Falsch. Das Haus ist wesentlicher Bestandteil des Grundstücks (§§ 93, 94 I) und kann nicht Gegenstand besonderer Rechte sein. Es geht automatisch mit dem Grundstück über.']],
      lsg: ['Eigentumserwerb an Grundstücken: §§ 873 I, 925 BGB.', 'Voraussetzungen: (1) Einigung über den Eigentumsübergang, also die Auflassung vor einem Notar bei gleichzeitiger Anwesenheit (§ 925 I). (2) Eintragung des Erwerbers im Grundbuch. (3) Einigsein bei Eintragung. (4) Berechtigung des Veräußerers.', 'Der Kaufvertrag ist nicht Teil dieser Voraussetzungen. Er ist nur der Rechtsgrund, also gilt das Abstraktionsprinzip.', 'Ergebnis: c ist richtig.'] }
  ],
  pq: [
    { q: 'Erklären Sie Trennungs- und Abstraktionsprinzip am Beispiel eines Fahrradkaufs gegen Barzahlung.', a: 'Nach dem Trennungsprinzip sind das Verpflichtungsgeschäft (Kaufvertrag, § 433) und die Verfügungsgeschäfte (Übereignung des Fahrrads und des Geldes, jeweils § 929 S. 1) rechtlich getrennte Geschäfte. Beim Barkauf entstehen also drei Verträge. Nach dem Abstraktionsprinzip sind sie in ihrer Wirksamkeit voneinander unabhängig. Ist z. B. der Kaufvertrag wegen Anfechtung nichtig (§ 142 I), bleibt der Käufer Eigentümer des Fahrrads, sofern Einigung, Übergabe und Berechtigung vorlagen. Der Verkäufer kann das Fahrrad dann nach § 812 I 1 Alt. 1 zurückverlangen.' },
    { q: 'Nennen Sie eine Ausnahme vom Abstraktionsprinzip und begründen Sie sie.', a: 'Die Geschäftsunfähigkeit (§ 105 I). Ein Geschäftsunfähiger kann keine wirksame Willenserklärung abgeben. Weil sowohl der Kaufvertrag als auch die dingliche Einigung Willenserklärungen voraussetzen, sind beide nichtig. Man spricht von Fehleridentität: Derselbe Mangel erfasst beide Geschäfte. Ähnlich kann es bei § 123 und bei § 138 II liegen.' },
    { q: 'Wie ist das BGB aufgebaut, und was bedeutet „vor die Klammer gezogen“?', a: 'Das BGB hat fünf Bücher: Allgemeiner Teil (§§ 1–240), Schuldrecht (§§ 241–853), Sachenrecht (§§ 854–1296), Familienrecht und Erbrecht. Das Schuldrecht regelt die Verpflichtungsgeschäfte (Person zu Person), das Sachenrecht die Verfügungsgeschäfte (Person zu Sache). Damit spiegelt der Aufbau das Trennungsprinzip. „Vor die Klammer gezogen“ heißt, dass allgemeine Regeln, die für alle Bücher gelten, nur einmal am Anfang stehen, z. B. die Regeln über Willenserklärungen und Verträge.' }
  ],
  cards: [
    ['Trennungsprinzip?', 'Verpflichtungsgeschäft und Verfügungsgeschäft sind getrennte Rechtsgeschäfte.'],
    ['Abstraktionsprinzip?', 'Verpflichtungs- und Verfügungsgeschäft sind in ihrer Wirksamkeit voneinander unabhängig.'],
    ['Wie viele Verträge beim Barkauf?', 'Drei: den Kaufvertrag (§ 433) und zwei Übereignungen (Ware und Geld, jeweils § 929 S. 1).'],
    ['Übereignung beweglicher Sachen?', '§ 929 S. 1: Einigung, Übergabe und Berechtigung des Veräußerers.'],
    ['Übereignung von Grundstücken?', '§§ 873, 925: Auflassung vor dem Notar und Eintragung im Grundbuch.'],
    ['Folge eines unwirksamen Kaufvertrags bei wirksamer Übereignung?', 'Der Erwerber ist Eigentümer, aber ohne Rechtsgrund. Er muss zurückübereignen nach § 812 I 1 Alt. 1.'],
    ['Fehleridentität?', 'Derselbe Fehler macht beide Geschäfte unwirksam, z. B. § 105 I, oft auch § 123 und § 138 II.'],
    ['Forderung übertragen?', '§ 398: Abtretungsvertrag ohne Realakt. Der Forderungskauf (§ 453) allein genügt nicht.'],
    ['Die fünf Bücher des BGB?', 'AT (1–240), Schuldrecht (241–853), Sachenrecht (854–1296), Familienrecht, Erbrecht.']
  ]
};

W[4] = {
  src: 'Skript S. 4 („Juristische Methodenlehre“) · über das Skript hinaus', title: 'Methodenlehre & Gutachtenstil',
  intro: `In der Klausur prüft der Professor nicht, ob Sie Paragraphen aufsagen können, sondern ob Sie einen Fall strukturiert lösen. Das Skript nennt als Lernziel die „rechtliche Fallbearbeitung“. Dieses Modul gibt Ihnen das Werkzeug dafür: Anspruchsaufbau, Gutachtenstil und Auslegung. Hinweis: Das Skript enthält dazu nur die Überschrift. Der Inhalt hier entspricht dem juristischen Standard.`,
  ziel: 'Jeden Fall mit „Wer will was von wem woraus?“ öffnen, Ansprüche in der richtigen Reihenfolge prüfen und im Gutachtenstil schreiben.',
  relevanz: 'Methodisch für jede offene Aufgabe. In MC-Klausuren hilft die Struktur, Distraktoren schnell zu entlarven.',
  faelle: 'Keine eigenen Übungsfälle. Unten finden Sie fünf Methodenfragen im Klausurformat (Ü1 bis Ü5).',
  sections: [
    { title: 'Die Grundfrage: Wer will was von wem woraus?', blocks: [
      p(`Jeder zivilrechtliche Fall ist ein Streit darum, ob jemand etwas von einem anderen verlangen kann. Das Gesetz nennt das einen Anspruch: das Recht, von einem anderen ein Tun oder Unterlassen zu verlangen (§ 194 I). Ihre Aufgabe ist es, eine Norm zu finden, die genau diese Rechtsfolge anordnet. Diese Norm heißt Anspruchsgrundlage.`),
      s('Die vier W-Fragen', [
        'Wer :: der Anspruchsteller, z. B. K',
        'will was :: das Anspruchsziel, z. B. 500 € Schadensersatz, Herausgabe des Rechners oder Lieferung',
        'von wem :: der Anspruchsgegner, z. B. V',
        'woraus :: die Anspruchsgrundlage, z. B. § 433 I 1, § 280 I oder § 812 I 1 Alt. 1'
      ]),
      fl('Schaubild: Vom Sachverhalt zum Ergebnis', ['Sachverhalt lesen :: Personen und Beziehungen skizzieren', 'Fallfrage :: Wer will was von wem?', 'Anspruchsgrundlage suchen :: woraus?', 'Tatbestand prüfen :: Merkmal für Merkmal', 'Ergebnis :: Antwort auf die Fallfrage']),
      b('Fall 4 übersetzt', `„Muss K den Rechner herausgeben?“ wird zu: V (wer) will Herausgabe und Rückübereignung des Notebooks (was) von K (von wem). Woraus? Ein Vertrag scheidet aus, weil keiner geschlossen wurde. § 985 scheidet aus, weil V nicht mehr Eigentümer ist. Es bleibt § 812 I 1 Alt. 1.`)
    ] },
    { title: 'Die Prüfungsreihenfolge der Anspruchsgrundlagen', blocks: [
      p(`Prüfen Sie die Anspruchsgrundlagen in fester Reihenfolge. Das ist keine Formalie: Spätere Anspruchsgruppen hängen von früheren ab. Ob ein Besitzer zur Herausgabe verpflichtet ist (§ 985), hängt z. B. davon ab, ob ihm ein vertragliches Besitzrecht zusteht (§ 986).`),
      s('Merkwort: „Vertrag, Quasi-Vertrag, GoA, Sache, Delikt, Bereicherung“', [
        'Vertragliche Ansprüche :: Erfüllung (§ 433), Schadensersatz (§§ 280 ff.), Gewährleistung (§ 437)',
        'Vertragsähnliche Ansprüche :: culpa in contrahendo (§§ 311 II, 241 II, 280 I), § 122',
        'Geschäftsführung ohne Auftrag :: §§ 677 ff.',
        'Dingliche Ansprüche :: § 985 (Herausgabe), § 1004 (Beseitigung und Unterlassung), Eigentümer-Besitzer-Verhältnis',
        'Deliktische Ansprüche :: §§ 823 ff., ProdHaftG',
        'Bereicherungsrechtliche Ansprüche :: §§ 812 ff.'
      ]),
      fl('Schaubild: Der Dreischritt', ['Entstanden? :: Tatbestand, rechtshindernde Einwendungen', 'Untergegangen? :: rechtsvernichtende Einwendungen', 'Durchsetzbar? :: rechtshemmende Einreden']),
      s('Innerhalb jeder Anspruchsgrundlage: der Dreischritt', [
        'Anspruch entstanden? :: Liegen alle Tatbestandsmerkmale vor? Gibt es rechtshindernde Einwendungen, die den Anspruch gar nicht erst entstehen lassen (§§ 105, 125, 134, 138, 142 I)?',
        'Anspruch untergegangen? :: Rechtsvernichtende Einwendungen, z. B. Erfüllung (§ 362), Unmöglichkeit (§ 275 I), Rücktritt (§ 346), Aufrechnung (§ 389) oder Widerruf (§ 355).',
        'Anspruch durchsetzbar? :: Rechtshemmende Einreden, z. B. Verjährung (§ 214), Zurückbehaltungsrecht (§ 273) oder nicht erfüllter Vertrag (§ 320).'
      ]),
      f('Einwendung oder Einrede?', `Eine Einwendung berücksichtigt das Gericht von Amts wegen. Eine Einrede muss der Schuldner selbst erheben. Ein verjährter Anspruch besteht noch, er ist nur nicht durchsetzbar, wenn sich der Schuldner auf die Verjährung beruft. Zahlt er trotzdem, kann er das Geld nicht zurückfordern (§ 214 II).`)
    ] },
    { title: 'Der Gutachtenstil', blocks: [
      p(`Im Gutachten denken Sie „laut“ und offen. Sie stellen eine Frage auf und arbeiten sich zur Antwort vor. Das Ergebnis steht am Ende, nicht am Anfang. Das Gegenstück ist der Urteilsstil („K hat einen Anspruch, denn …“). Ihn benutzen Sie nur für völlig unproblematische Punkte.`),
      s('Vier Schritte', [
        'Obersatz (Hypothese) :: „K könnte gegen V einen Anspruch auf Zahlung von 4,50 € aus § 433 II BGB haben.“ Das Signalwort ist „könnte“.',
        'Definition :: „Dazu müsste ein wirksamer Kaufvertrag vorliegen. Ein Vertrag kommt durch zwei übereinstimmende Willenserklärungen zustande, Angebot und Annahme (§§ 145 ff.).“',
        'Subsumtion :: „Indem V die Flasche zu einem ausgewiesenen Preis in die Minibar stellte, brachte er seinen Rechtsbindungswillen zum Ausdruck …“ Hier ordnen Sie den Sachverhalt unter die Definition. Das ist der wichtigste und meistbepunktete Teil.',
        'Ergebnis :: „Somit liegt ein Angebot vor.“ Am Ende des Anspruchs: „V hat gegen K einen Anspruch auf Zahlung von 4,50 € aus § 433 II.“'
      ]),
      cmp('Schaubild: Gutachtenstil vs. Urteilsstil', ['', 'Gutachtenstil', 'Urteilsstil'], [
        ['Reihenfolge', 'Frage, Definition, Subsumtion, Ergebnis', 'Ergebnis, dann Begründung'],
        ['Signalwörter', '„könnte“, „müsste“, „somit“, „also“', '„denn“, „weil“, „da“'],
        ['Einsatz', 'problematische Punkte', 'unproblematische Punkte'],
        ['Beispiel', 'V könnte … haben. Dazu müsste …', 'V hat einen Anspruch, denn …']
      ]),
      b('Musterlösung im Gutachtenstil (Kurzform, Fall 5)', `V könnte gegen K einen Anspruch auf Zahlung von 4,50 € aus § 433 II haben. Dafür müsste ein Kaufvertrag zustande gekommen sein. Das setzt Angebot und Annahme voraus. Ein Angebot ist eine empfangsbedürftige Willenserklärung, die so bestimmt ist, dass der Empfänger sie mit einem bloßen „Ja“ annehmen kann. Indem V das Wasser mit Preisliste in der Minibar bereitstellte, hat er ein Angebot an den jeweiligen Zimmergast abgegeben. Eine bloße invitatio ad offerendum liegt nicht vor, weil kein Vorrat erschöpft sein kann und keine Bonitätsprüfung nötig ist. K hat das Angebot durch Trinken angenommen. Der Zugang der Annahme war nach § 151 S. 1 entbehrlich, weil eine solche Erklärung nach der Verkehrssitte nicht zu erwarten ist. Ein Kaufvertrag liegt vor. V hat gegen K einen Anspruch auf 4,50 € aus § 433 II.`),
      f('Typische Fehler', `Ergebnis vorwegnehmen („V hat einen Anspruch, weil …“) bei problematischen Punkten. Unproblematisches breit ausführen. Normen nennen, ohne zu subsumieren. Den Sachverhalt nacherzählen statt ihn unter Merkmale zu ordnen. Faustregel: Wo der Fall „knirscht“, ausführlich im Gutachtenstil schreiben. Alles andere kurz im Urteilsstil.`)
    ] },
    { title: 'Normstruktur und Normarten', blocks: [
      p(`Jede vollständige Rechtsnorm hat einen Tatbestand (Wenn) und eine Rechtsfolge (Dann). § 823 I: Wer vorsätzlich oder fahrlässig das Leben, den Körper, … eines anderen widerrechtlich verletzt (Tatbestand), ist dem anderen zum Ersatz des daraus entstehenden Schadens verpflichtet (Rechtsfolge).`),
      tf('Schnelltest: Anspruchsgrundlage oder nicht?', [
        ['§ 433 II BGB', true, 'Der Käufer „ist verpflichtet“, den Kaufpreis zu zahlen. Das ist ein Anspruch des Verkäufers.'],
        ['§ 278 BGB', false, 'Zurechnungsnorm, nur in Verbindung mit einer Anspruchsgrundlage wie § 280 I.'],
        ['§ 985 BGB', true, 'Der Eigentümer „kann“ vom Besitzer Herausgabe verlangen.'],
        ['§ 90 BGB', false, 'Definitionsnorm (Sache).'],
        ['§ 823 I BGB', true, 'Er „ist zum Ersatz des Schadens verpflichtet“.']
      ]),
      l('Normarten', [
        'Anspruchsgrundlage :: gewährt einen Anspruch, z. B. §§ 433 II, 280 I, 812 I, 823 I, 985',
        'Hilfsnorm, Definitionsnorm :: definiert oder ergänzt, z. B. § 13 (Verbraucher), § 90 (Sache), § 276 (Vertretenmüssen), § 278 (Zurechnung von Gehilfen) und § 130 (Zugang). Achtung: § 278 ist keine Anspruchsgrundlage (Fall 42 b).',
        'Gegennorm :: Einwendungen und Einreden, z. B. §§ 142 I, 275 I, 214',
        'Verweisungsnorm :: z. B. § 437, der auf §§ 439, 440, 323, 441, 280 verweist, oder § 453 („Vorschriften über den Kauf von Sachen finden entsprechende Anwendung“)'
      ])
    ] },
    { title: 'Auslegung von Gesetzen', blocks: [
      p(`Gesetze sind abstrakt formuliert und müssen auf den konkreten Fall „heruntergebrochen“ werden. Dazu gibt es vier klassische Auslegungsmethoden (Savigny):`),
      s('Die vier Auslegungsmethoden', [
        'Grammatikalisch :: Wortlaut, also der mögliche Wortsinn. Er ist Ausgangspunkt und Grenze der Auslegung.',
        'Systematisch :: Stellung im Gesetz und Zusammenhang mit anderen Normen. Beispiel: § 13 steht im AT und gilt deshalb für das ganze BGB.',
        'Historisch :: Wille des Gesetzgebers, ablesbar an den Gesetzesmaterialien',
        'Teleologisch :: Sinn und Zweck der Norm. Beispiel: § 518 I schützt vor übereilten Schenkungen (Warnfunktion). Wenn tatsächlich geleistet wurde, ist dieser Schutz nicht mehr nötig, also gibt es Heilung nach § 518 II.'
      ]),
      l('Weitere Werkzeuge', [
        'Analogie :: Eine Norm wird auf einen nicht geregelten Fall entsprechend angewendet. Voraussetzungen sind eine planwidrige Regelungslücke und eine vergleichbare Interessenlage. Beispiel: Sachregeln werden analog auf Software angewendet (Skript S. 9).',
        'Umkehrschluss (argumentum e contrario) :: Wenn das Gesetz eine Rechtsfolge nur für A anordnet, gilt sie für B nicht.',
        'Teleologische Reduktion :: Eine zu weit geratene Norm wird nach ihrem Zweck auf weniger Fälle angewendet, als ihr Wortlaut erfasst.',
        'Richtlinienkonforme Auslegung :: Normen, die EU-Richtlinien umsetzen, z. B. §§ 474 ff. und 312 ff., werden im Licht der Richtlinie ausgelegt (Modul 1, Rangordnung).'
      ])
    ] },
    { title: 'Strategie für die MC-Klausur', blocks: [
      l('So entlarven Sie Distraktoren', [
        'Absolute Wörter :: „immer“, „nie“, „unter keinen Umständen“, „ausnahmslos“ sind im Recht fast immer falsch (Fälle 2 d, 16 d, 47 b).',
        'Begriffsvertauschung :: Verpflichtung und Verfügung, Mahnung und Fristsetzung, Rücktritt und Widerruf, positives und negatives Interesse',
        'Rollenvertauschung :: Verbraucher und Unternehmer vertauscht (Fall 1 d)',
        'Falsche Norm für die richtige Idee :: z. B. § 121 statt § 124 (Fall 12 c)',
        'Richtiges Ergebnis, falsche Begründung :: Eine Antwortoption mit falscher Begründung ist falsch, auch wenn das Ergebnis stimmt.',
        'Arbeitstechnik :: Lösen Sie den Fall erst selbst in drei Zeilen, dann lesen Sie die Optionen. Schlagen Sie jede genannte Norm im BGB nach, denn das ist erlaubt.'
      ])
    ] }
  ],
  cases: [
    { n: 'Ü1', q: 'Welche der folgenden Normen ist eine Anspruchsgrundlage?', c: 2, o: [
      ['§ 278 BGB', 'Falsch. § 278 ist eine Zurechnungsnorm: Das Verschulden des Erfüllungsgehilfen wird dem Schuldner zugerechnet. Einen eigenen Anspruch gewährt die Norm nicht.'],
      ['§ 13 BGB', 'Falsch. § 13 ist eine Definitionsnorm (Verbraucher).'],
      ['§ 812 I 1 BGB', 'Richtig. Die Rechtsfolge ist „zur Herausgabe verpflichtet“, damit gewährt die Norm einen Anspruch.'],
      ['§ 276 BGB', 'Falsch. § 276 ist eine Hilfsnorm, die den Maßstab des Vertretenmüssens festlegt.']], lsg: ['Fragen Sie: Ordnet die Norm an, dass jemand von einem anderen etwas verlangen kann? Nur dann ist sie eine Anspruchsgrundlage.'] },
    { n: 'Ü2', q: 'In welcher Reihenfolge prüfen Sie Anspruchsgrundlagen?', c: 0, o: [
      ['Vertrag, vertragsähnlich, GoA, dinglich, Delikt, Bereicherung', 'Richtig. Das ist die Standardreihenfolge, weil die späteren Anspruchsgruppen von den früheren abhängen.'],
      ['Delikt, Vertrag, Bereicherung, dinglich', 'Falsch. Der Vertrag geht vor, weil er z. B. ein Recht zum Besitz (§ 986) oder einen Rechtsgrund (§ 812) begründen kann.'],
      ['Bereicherung, Vertrag, Delikt', 'Falsch. Das Bereicherungsrecht ist subsidiär und kommt zuletzt.'],
      ['Die Reihenfolge ist beliebig.', 'Falsch. Wer zuerst Bereicherung prüft, muss die Wirksamkeit des Vertrags inzident prüfen, was unnötig kompliziert ist und Fehler erzeugt.']], lsg: ['Die Reihenfolge folgt der logischen Abhängigkeit, nicht der Wichtigkeit.'] },
    { n: 'Ü3', q: 'Welcher Satz ist im Gutachtenstil formuliert?', c: 3, o: [
      ['K hat einen Anspruch aus § 433 II, denn ein Kaufvertrag liegt vor.', 'Falsch. Das ist Urteilsstil: Das Ergebnis steht am Anfang.'],
      ['Ein Kaufvertrag liegt vor.', 'Falsch. Das ist eine bloße Feststellung ohne Herleitung.'],
      ['Weil V und K sich geeinigt haben, kann V zahlen verlangen.', 'Falsch. Auch hier steht das Ergebnis vorn, Definition und Subsumtion fehlen.'],
      ['V könnte gegen K einen Anspruch auf Zahlung aus § 433 II haben. Dazu müsste ein wirksamer Kaufvertrag vorliegen.', 'Richtig. Obersatz mit „könnte“, dann die Voraussetzung („müsste“).']], lsg: ['Gutachtenstil: Obersatz, Definition, Subsumtion, Ergebnis.'] },
    { n: 'Ü4', q: 'Welche Gegenrechte muss der Schuldner im Prozess selbst geltend machen?', c: 1, o: [
      ['Rechtshindernde Einwendungen wie § 105', 'Falsch. Einwendungen werden von Amts wegen berücksichtigt.'],
      ['Einreden wie die Verjährung (§ 214)', 'Richtig. Einreden wirken nur, wenn der Schuldner sich auf sie beruft.'],
      ['Rechtsvernichtende Einwendungen wie die Erfüllung (§ 362)', 'Falsch. Auch das ist eine Einwendung, die von Amts wegen berücksichtigt wird.'],
      ['Alle Gegenrechte werden von Amts wegen berücksichtigt.', 'Falsch, siehe die Einreden.']], lsg: ['Einwendungen lassen den Anspruch nicht entstehen oder erlöschen. Einreden hemmen nur die Durchsetzung.'] },
    { n: 'Ü5', q: 'Was sind die Voraussetzungen einer Analogie?', c: 2, o: [
      ['Ein eindeutiger Wortlaut', 'Falsch. Bei eindeutigem Wortlaut wird ausgelegt, nicht analog angewendet.'],
      ['Ein Richterspruch des BGH', 'Falsch. Jedes Gericht kann analog anwenden.'],
      ['Eine planwidrige Regelungslücke und eine vergleichbare Interessenlage', 'Richtig. Das sind beide Voraussetzungen.'],
      ['Die Zustimmung beider Parteien', 'Falsch. Die Analogie ist Rechtsanwendung und keine Parteivereinbarung.']], lsg: ['Beispiel: Die Sachregeln werden analog auf Software angewendet (Skript S. 9).'] }
  ],
  pq: [
    { q: 'Beschreiben Sie den Gutachtenstil und grenzen Sie ihn vom Urteilsstil ab.', a: 'Der Gutachtenstil arbeitet vom Ergebnis offen zur Lösung hin: Obersatz („A könnte gegen B einen Anspruch aus … haben“), Definition der Tatbestandsmerkmale, Subsumtion des Sachverhalts, Ergebnis. Der Urteilsstil stellt das Ergebnis an den Anfang und begründet es dann („A hat einen Anspruch, denn …“). In der Klausur ist der Gutachtenstil Pflicht, bei unproblematischen Punkten darf man in den Urteilsstil wechseln.' },
    { q: 'Was bedeutet der Dreischritt „entstanden, untergegangen, durchsetzbar“?', a: 'Zuerst prüft man, ob alle Voraussetzungen der Anspruchsgrundlage vorliegen und keine rechtshindernden Einwendungen eingreifen, z. B. §§ 105, 125, 142 I. Dann prüft man, ob der Anspruch durch rechtsvernichtende Einwendungen erloschen ist, z. B. Erfüllung, Unmöglichkeit, Rücktritt. Zuletzt prüft man, ob der Schuldner eine rechtshemmende Einrede erhoben hat, z. B. Verjährung oder § 320.' }
  ],
  cards: [
    ['Anspruch?', '§ 194 I: das Recht, von einem anderen ein Tun oder Unterlassen zu verlangen.'],
    ['Die vier W-Fragen?', 'Wer will was von wem woraus?'],
    ['Prüfungsreihenfolge?', 'Vertrag, vertragsähnlich, GoA, dinglich, Delikt, Bereicherung.'],
    ['Gutachtenstil?', 'Obersatz („könnte“), Definition, Subsumtion, Ergebnis.'],
    ['Einwendung vs. Einrede?', 'Einwendungen wirken von Amts wegen. Einreden muss der Schuldner erheben (z. B. Verjährung).'],
    ['Auslegungsmethoden?', 'Wortlaut, Systematik, Historie, Telos.'],
    ['Analogie?', 'Planwidrige Regelungslücke und vergleichbare Interessenlage.']
  ]
};
window.dispatchEvent(new Event('wpr-data'));
})();
