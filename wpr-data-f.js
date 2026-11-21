(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), s = (title, items) => ({ t: 'schema', title, items }),
  b = (title, text) => ({ t: 'bsp', title, text }), f = (title, text) => ({ t: 'falle', title, text }), m = t => ({ t: 'merk', text: t });
const cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), tf = (title, items) => ({ t: 'tf', title, items }), qc = (q, a) => ({ t: 'check', q, a });
const W = window.WPR = window.WPR || {};

W.extra1 = [
  ['Prof. Weiden: Klausurformat', '20 Multiple-Choice-Aufgaben mit je vier Antworten (a–d), genau eine ist richtig. 60 Minuten. 4 oder 5 Punkte pro Aufgabe, kein Abzug für falsche Antworten, bestanden ab der Hälfte. Also jede Aufgabe ankreuzen und die Antworten rechtzeitig auf den Prüfungsbogen übertragen.'],
  ['Hilfsmittel bei Prof. Weiden', 'Nur das BGB (Beck-Texte im dtv). Markieren ist erlaubt, Beschriftungen darüber hinaus führen zu Note 5. Das ProdHaftG steht in der Textausgabe unter Nr. 4. Die zulässigen Markierungen stehen in Moodle.'],
  ['Folien vs. Gesetz: AG-Grenze', 'Die Folie zu Lernpaket 17 nennt noch „bis 5.000 € (künftig 8.000 €)“. Das war ein Entwurfsstand. Beschlossen und seit 01.01.2026 in Kraft sind 10.000 € (§ 23 Nr. 1 GVG, BGBl. 2025 I Nr. 318). Im Zweifel in der Sprechstunde nachfragen.'],
  ['Weidens Buzzwords', 'Markieren Sie im Gesetz „grundsätzlich“, „insbesondere“ und „im Zweifel“. „Im Zweifel“ heißt: Auslegungsregel, eine klare Vereinbarung geht vor (z. B. § 271 II BGB).'],
  ['Grenzen der Vertragsfreiheit', 'Kontrahierungszwang (z. B. § 17 EnWG), AGB-Kontrolle (§§ 307 ff.), Verbraucherschutz, gesetzliche Verbote (§ 134) und Sittenwidrigkeit (§ 138). Moral allein bindet rechtlich nicht. Lügen schadet zivilrechtlich erst als arglistige Täuschung.'],
  ['Beweislastumkehr', 'Wichtige gesetzliche Vermutungen: Geschäftsfähigkeit wird vermutet, Vertretenmüssen nach § 280 I 2 BGB, Mangel bei Gefahrübergang innerhalb eines Jahres beim Verbrauchsgüterkauf (§ 477 BGB). Ihr Praxistipp: Dokumentation, Dokumentation, Dokumentation.']
];

W.extra = {
2: [
  { title: 'Minderjährigenrecht vertieft (§§ 104–113)', blocks: [
    p('In Weidens Altklausuren taucht das Minderjährigenrecht fast jedes Semester auf. Abgefragt wird vor allem der „lediglich rechtliche Vorteil“ und die getrennte Prüfung von Verpflichtungs- und Verfügungsgeschäft.'),
    s('Prüfung einer Willenserklärung eines Minderjährigen', [
      'Alter :: Unter 7 Jahren geschäftsunfähig (§ 104 Nr. 1). Die Erklärung ist nichtig (§ 105 I), auch mit Erlaubnis der Eltern und auch mit Taschengeld.',
      'Lediglich rechtlicher Vorteil? :: Bei 7- bis 17-Jährigen wirksam ohne Zustimmung, wenn das Geschäft keine rechtlichen Nachteile bringt (§ 107). Rechtlich neutrale Geschäfte (Handeln als Vertreter, § 165) stehen gleich.',
      'Einwilligung :: Vorherige Zustimmung der Eltern (§§ 107, 183). Sonderfälle: § 110 (Taschengeld, Leistung vollständig bewirkt), § 112 (Erwerbsgeschäft), § 113 (Arbeitsverhältnis).',
      'Sonst schwebend unwirksam :: § 108 I. Die Eltern können genehmigen (§ 184) oder verweigern. Fordert der Vertragspartner sie auf, gilt Schweigen nach zwei Wochen als Verweigerung (§ 108 II).',
      'Widerruf des Vertragspartners :: Bis zur Genehmigung kann der andere Teil widerrufen (§ 109), außer er kannte die Minderjährigkeit.'
    ]),
    l('Lediglich rechtlich vorteilhaft oder nicht?', [
      'Maßstab :: Nur rechtliche, nicht wirtschaftliche Folgen zählen. Auch das beste Schnäppchen ist nachteilig, weil der Kaufvertrag zur Zahlung verpflichtet.',
      'Schenkungsvertrag an den Minderjährigen :: Vorteilhaft. Er bekommt nur einen Anspruch.',
      'Übereignung an den Minderjährigen :: Vorteilhaft, er wird Eigentümer. Das gilt auch, wenn der Kaufvertrag schwebend unwirksam ist (Abstraktion).',
      'Übereignung durch den Minderjährigen :: Nachteilig, er verliert sein Eigentum. Auch die Übereignung seines Geldes ist schwebend unwirksam.',
      'Vermietetes Grundstück :: Nachteilig. Der Erwerber tritt in die Mietverträge ein (§ 566 BGB) und haftet z. B. für die Rückzahlung der Kaution.',
      'Handeln als Vertreter (§ 165) :: Neutral. Die Folgen treffen den Vertretenen, nicht den Minderjährigen.'
    ]),
    f('Klausurfalle: beide Geschäfte getrennt prüfen', 'Die 16-jährige K kauft ohne Wissen der Eltern ein Handy und zahlt bar. Kaufvertrag: schwebend unwirksam (§ 108). Übereignung des Handys an K: wirksam (§ 107, lediglich vorteilhaft). Übereignung des Geldes durch K: schwebend unwirksam. Verweigern die Eltern, verlangt K ihr Geld nach § 985 zurück, der Händler das Handy nur nach § 812.'),
    b('Taschengeld hilft nicht unter 7', 'Weiden SS 2023: Der 6-jährige Anton kauft mit Erlaubnis der Eltern ein Trikot von seinem Taschengeld. Weder Kaufvertrag noch Übereignungen sind wirksam. § 110 setzt beschränkte Geschäftsfähigkeit voraus, § 105 I gilt ausnahmslos.'),
    l('Weitere Abfragepunkte', [
      'Volljährige :: Seit der Betreuungsrechtsreform (2023) gibt es keine beschränkt geschäftsfähigen Volljährigen. Volljährige Geschäftsunfähige können Geschäfte des täglichen Lebens mit geringwertigen Mitteln wirksam tätigen (§ 105a). Sie brauchen nicht „immer“ einen Betreuer.',
      'Einsichtsfähigkeit :: Spielt nur bei der Deliktsfähigkeit eine Rolle (§ 828 III), nicht bei der Geschäftsfähigkeit.',
      'Kuscheltier-Fall (WS 23/24) :: Ein Kind am Tag vor dem 7. Geburtstag ist geschäftsunfähig, die Einwilligung der Eltern hilft nicht. Einen Tag nach dem 7. Geburtstag ist ein Verkauf an ein anderes Kind schwebend unwirksam.'
    ]),
    tf('Schnelltest Minderjährige', [
      ['Ein 17-Jähriger kann ein Geschenk ohne Zustimmung seiner Eltern annehmen.', true, 'Der Schenkungsvertrag und die Übereignung an ihn sind lediglich rechtlich vorteilhaft (§ 107).'],
      ['Ob ein Geschäft lediglich rechtlich vorteilhaft ist, hängt davon ab, ob es sich wirtschaftlich lohnt.', false, 'Es zählt allein die rechtliche Betrachtung.'],
      ['Ein 15-Jähriger kauft auf Raten mit seinem Taschengeld. Der Vertrag ist nach § 110 sofort wirksam.', false, '§ 110 verlangt, dass die Leistung vollständig bewirkt ist. Bis zur letzten Rate ist der Vertrag schwebend unwirksam.'],
      ['§ 107 gilt auch für das dingliche Verfügungsgeschäft.', true, 'Jedes Rechtsgeschäft wird für sich geprüft. Die Übereignung an den Minderjährigen ist vorteilhaft, die Übereignung durch ihn nachteilig.']
    ])
  ] },
  { title: 'Erbfähigkeit & Testament', blocks: [
    p('Erbe kann nur werden, wer rechtsfähig ist: natürliche Personen, die beim Erbfall leben (§ 1923 I, das bereits gezeugte Kind gilt als vor dem Erbfall geboren, § 1923 II), und juristische Personen. Tiere sind keine Sachen (§ 90a), aber auch keine Rechtssubjekte. Sie können nicht erben.'),
    cmp('Testament: was Sie wissen müssen', ['Frage', 'Antwort', 'Norm'], [
      ['Form', 'Eigenhändig geschrieben und unterschrieben oder zur Niederschrift eines Notars. Notariell muss es nicht sein.', '§§ 2247, 2232'],
      ['Testierfähigkeit', 'Ab 16 Jahren, Minderjährige aber nur zur Niederschrift beim Notar', '§§ 2229 I, 2233 I, 2247 IV'],
      ['Krankheit', 'Eine schwere Krankheit macht nicht testierunfähig. Nur eine krankhafte Störung der Geistestätigkeit schließt die Testierfähigkeit aus.', '§ 2229 IV'],
      ['Vertretung', 'Ausgeschlossen, das Testament ist höchstpersönlich', '§ 2064'],
      ['Haustier versorgen', 'Über eine Auflage an den Erben oder eine Person, die das Tier übernimmt', '§ 1940']]),
    b('Hund Hanno (Weiden SS 2023)', 'Rentner R setzt seinen Hund in einem handschriftlichen Testament als Alleinerben ein. Das Testament ist formwirksam (§ 2247), die Erbeinsetzung scheitert aber: Hanno ist kein Rechtssubjekt. Falsch sind die Antworten „nicht notariell, daher unwirksam“, „gesetzlichen Vertreter für den Hund benennen“ und „schwere Krankheit führt immer zur Geschäftsunfähigkeit“.'),
    qc('Kann das ungeborene Enkelkind schon ein Konto bekommen, auf das der Großvater einzahlt?', 'Die Rechtsfähigkeit beginnt mit der Geburt (§ 1). Vor der Geburt ist das Kind nur in Sonderfällen geschützt, etwa beim Erbrecht (§ 1923 II). In Weidens Klausur (WS 18/19) war daher „Juristische Personen sind rechtsfähig, aber nicht handlungsfähig“ die richtige Aussage: Sie brauchen Organe als Vertreter.')
  ] }
],
3: [
  { title: 'Weiden-Klausurfallen zur Abstraktion', blocks: [
    l('So fragt Prof. Weiden', [
      'Begriffe :: Das Abstraktionsprinzip trennt schuldrechtliches Geschäft (Verpflichtung, Kausalgeschäft) und dingliches Geschäft (Verfügung, Erfüllungsgeschäft). „Kausal- und Verpflichtungsgeschäft“ ist dasselbe, also falsch.',
      'Fremde Sache :: Ein Kaufvertrag über eine Sache, die dem Verkäufer nicht gehört, ist wirksam. Er verpflichtet nur.',
      'Gebundenes Angebot :: V bietet K eine Sache mit Überlegungsfrist an, verkauft und übereignet sie aber an I. I ist Eigentümer geworden. Das Angebot an K bindet V schuldrechtlich, verhindert aber keine Verfügung. K hat nur Ansprüche gegen V.',
      'Anfechtung :: Ist nur der Kaufvertrag nichtig, bleibt der Käufer Eigentümer. Ergreift die Anfechtung (Fehleridentität, z. B. § 123) auch die Übereignung, ist der Verkäufer Eigentümer und hat § 985 und § 812.',
      'Grundstück :: Notarieller Kaufvertrag macht nicht zum Eigentümer. Erst Auflassung und Eintragung (§§ 873, 925). Haus und Grundstück werden nicht getrennt übertragen (§§ 94, 946).'
    ])
  ] }
],
4: [
  { title: 'Weidens Vokabular', blocks: [
    s('Aufbau einer Anspruchsprüfung (Folie LP 3)', [
      'Wer will was von wem woraus? :: Jeder Fall beginnt mit dieser Frage und einer konkreten Anspruchsgrundlage.',
      'I. Anspruch entstanden? :: Vertrag zustande gekommen und wirksam?',
      'II. Anspruch erloschen? :: z. B. Erfüllung (§ 362), Rücktritt (§ 346), Anfechtung (§ 142), Kündigung.',
      'III. Anspruch durchsetzbar? :: Keine Einreden, z. B. Verjährung (§ 214 I) oder Zurückbehaltungsrecht (§ 273).'
    ]),
    l('Begriffe aus den Folien', [
      'Ankernorm :: § 280 I BGB. Sie enthält den Grundtatbestand jedes vertraglichen Schadensersatzes: Schuldverhältnis, Pflichtverletzung, kausaler Schaden, Vertretenmüssen (vermutet).',
      'Überleitungsnorm :: § 280 II (zum Verzug, § 286) und § 280 III (zu §§ 281–283) stellen zusätzliche Voraussetzungen auf. § 278 nennt Weiden ebenfalls Überleitungsnorm: Sie rechnet zu, begründet aber keinen eigenen Anspruch.',
      'Tatbestand und Rechtsfolge :: Die Folien üben das in drei Levels an §§ 823, 433, 985, 119 und 280. „Dies gilt nicht, wenn …“ in § 280 I 2 ist eine gesetzliche Vermutung, also eine Beweislastumkehr.',
      'Klammerprinzip :: Allgemeine Regeln stehen vor der Klammer (BGB AT, Allgemeines Schuldrecht) und gelten für die späteren Bücher.'
    ])
  ] }
],
5: [
  { title: 'Stellvertretung & Prokura', blocks: [
    p('In den Altklausuren wird die Stellvertretung immer wieder mit Minderjährigen, mit dem Innenverhältnis und mit der Prokura kombiniert. Grundregel: Wer im Namen eines anderen mit Vertretungsmacht handelt, verpflichtet den anderen, nicht sich selbst (§ 164 I).'),
    s('Prüfungsschema Stellvertretung', [
      'Zulässigkeit :: Keine höchstpersönlichen Geschäfte. Eheschließung (§ 1311 S. 1), Testament (§ 2064) und Erbvertrag (§ 2274) gehen nur persönlich.',
      'Eigene Willenserklärung :: Der Vertreter entscheidet selbst. Der Bote überbringt nur eine fremde Erklärung.',
      'Im fremden Namen :: Offenkundigkeit (§ 164 I 2), auch aus den Umständen („die Rechnung geht an I“). Ausnahme: Geschäft für den, den es angeht (Bargeschäfte des Alltags).',
      'Mit Vertretungsmacht :: Gesetzlich (Eltern, § 1629), organschaftlich (Geschäftsführer, Vorstand) oder durch Vollmacht (§ 167), im Handelsrecht Prokura (§ 49 HGB) und Handlungsvollmacht (§ 54 HGB).',
      'Keine Schranke :: Kein Insichgeschäft (§ 181), kein evidenter Missbrauch der Vertretungsmacht.',
      'Rechtsfolge :: Das Geschäft wirkt für und gegen den Vertretenen. Ohne Vertretungsmacht ist es schwebend unwirksam (§ 177), der Vertreter haftet sonst nach § 179.'
    ]),
    l('Was Prof. Weiden abfragt', [
      'Minderjähriger als Vertreter (§ 165) :: Der Vertreter muss nur beschränkt geschäftsfähig sein. Der 17-jährige Azubi kauft für seinen Chef mit „die Rechnung geht an I“. Der Vertrag kommt zwischen Chef und Händler zustande, ohne Genehmigung der Eltern und ohne Genehmigung des Chefs (WS 18/19).',
      'Innen- und Außenverhältnis :: Die Vollmacht regelt, was der Vertreter kann (außen). Der Auftrag regelt, was er darf (innen). Die Tante beschränkt den Neffen intern auf 500 €, die Kontovollmacht ist unbeschränkt. Er hebt wirksam 1.000 € ab, muss aber alles herausgeben (§ 667) und haftet intern.',
      'Vertreter ohne Vertretungsmacht :: § 177 schwebend unwirksam, Genehmigung durch den Vertretenen möglich. Ein Minderjähriger haftet dabei nicht nach § 179 (§ 179 III 2).',
      'Missbrauch :: Nur wenn der Dritte die interne Pflichtwidrigkeit kennt oder sie sich ihm aufdrängen muss (Evidenz) oder beide kollusiv zusammenwirken (§ 138), muss sich der Vertretene das Geschäft nicht zurechnen lassen.'
    ]),
    cmp('Prokura, Handlungsvollmacht, Vollmacht', ['', 'Prokura (§§ 48 ff. HGB)', 'Handlungsvollmacht (§ 54 HGB)', 'Vollmacht (§ 167 BGB)'], [
      ['Erteilung', 'Nur durch den Kaufmann, ausdrücklich. Eintragung ins Handelsregister (§ 53), aber nur deklaratorisch', 'Formlos, auch konkludent', 'Formlos (§ 167 II), gegenüber Vertreter oder Drittem'],
      ['Umfang', 'Alle Geschäfte, die der Betrieb irgendeines Handelsgewerbes mit sich bringt (§ 49 I). Nicht: Grundstücke veräußern oder belasten ohne besondere Befugnis (§ 49 II)', 'Geschäfte, die ein derartiges Handelsgewerbe gewöhnlich mit sich bringt', 'Wie erteilt'],
      ['Beschränkung', 'Dritten gegenüber unwirksam (§ 50 I). Zulässig nur Gesamtprokura (§ 48 II) und Filialprokura (§ 50 III)', 'Wirkt gegen Dritte nur, wenn sie sie kannten oder kennen mussten (§ 54 III)', 'Wirkt, wie sie erteilt ist']]),
    f('Klausurfalle Prokura (Weiden SS 2023)', 'Prokuristin P darf laut interner Absprache Rosen bis 225 € kaufen. Sie kauft im Namen der U beim Laden ihres Bruders 300 Rosen für 250 €. Der Vertrag ist wirksam: Die interne Grenze wirkt nach außen nicht (§ 50 I HGB). Ein Insichgeschäft liegt auch nicht vor, denn der Bruder ist eine andere Person (und P war von § 181 befreit). Richtig war deshalb „Alle Antworten sind falsch“.'),
    tf('Schnelltest Stellvertretung', [
      ['Ein Freund kann mit notarieller Vollmacht an Stelle des Bräutigams die Ehe schließen.', false, 'Die Eheschließung ist höchstpersönlich (§ 1311 S. 1). Eine Vertretung ist überhaupt nicht möglich.'],
      ['Ein 16-Jähriger kann wirksam als Vertreter eines Erwachsenen einen Kaufvertrag schließen.', true, '§ 165 BGB. Das Geschäft ist für ihn rechtlich neutral.'],
      ['Eine Prokura kann im Außenverhältnis auf Geschäfte bis 1.000 € beschränkt werden.', false, '§ 50 I HGB. Möglich sind nur Gesamt- und Filialprokura.'],
      ['Überschreitet ein Vertreter nur interne Weisungen, ist das Geschäft unwirksam.', false, 'Maßgeblich ist die Vertretungsmacht im Außenverhältnis. Die Weisung betrifft das Innenverhältnis.']
    ])
  ] },
  { title: 'Insichgeschäft § 181 & höchstpersönliche Geschäfte', blocks: [
    p('§ 181 verbietet dem Vertreter, im Namen des Vertretenen mit sich selbst (Selbstkontrahieren) oder als Vertreter beider Seiten (Mehrvertretung) ein Geschäft zu schließen. Der Grund ist der Interessenkonflikt. Rechtsfolge ist nicht Nichtigkeit, sondern schwebende Unwirksamkeit analog § 177: Der Vertretene oder ein Pfleger kann genehmigen.'),
    l('Ausnahmen', [
      'Gestattung :: Der Vertretene befreit vom Verbot. Typisch beim GmbH-Geschäftsführer, eingetragen im Handelsregister.',
      'Erfüllung einer Verbindlichkeit :: Der Vertreter erfüllt nur eine bestehende Pflicht, z. B. zahlt er sich als Geschäftsführer sein fälliges Gehalt.',
      'Lediglich rechtlicher Vorteil :: Bringt das Geschäft dem Vertretenen nur Vorteile, besteht kein Interessenkonflikt. § 181 wird teleologisch reduziert.'
    ]),
    b('Eltern schenken der Tochter ein vermietetes Haus (Weiden WS 23/24)', 'T ist 17. Der Schenkungsvertrag ist lediglich rechtlich vorteilhaft, T kann ihn selbst schließen (§ 107). Die Auflassung des vermieteten Hauses ist dagegen nachteilig, weil T in die Mietverträge eintritt (§ 566). Die Eltern können T dabei nicht vertreten (§§ 1629 II, 1824, 181). Es braucht einen Ergänzungspfleger (§ 1809). Falsch ist: „Die Schenkung ist als Insichgeschäft nichtig“ und „Schenkung ist ein einseitiges Rechtsgeschäft“. Abwandlung T ist 18: Einigung vor dem Notar (Auflassung, § 925) und Eintragung (§ 873). Grundstück und Haus gehen in einem Akt über.'),
    cmp('Höchstpersönliche Geschäfte (keine Vertretung)', ['Geschäft', 'Norm'], [
      ['Eheschließung: persönlich und bei gleichzeitiger Anwesenheit', '§ 1311 S. 1 BGB'],
      ['Testament', '§ 2064 BGB'],
      ['Erbvertrag', '§ 2274 BGB']]),
    qc('Rudolf bittet seinen Freund Dieter, ihn wegen einer Geschäftsreise bei der standesamtlichen Trauung zu vertreten. Mit welcher Vollmacht geht das?', 'Mit keiner. Die Ehe kann nur persönlich geschlossen werden (§ 1311 S. 1 BGB). Weder notarielle Vollmacht noch Einwilligung der Braut oder des Standesbeamten helfen.')
  ] }
],
6: [
  { title: 'Form bei Prof. Weiden & Änderungen 2025', blocks: [
    l('Formarten nach Strenge (Folie LP 4)', [
      'Notarielle Beurkundung (§ 128) :: Höchste Warn- und Beweisfunktion. Grundstückskauf (§ 311b I), Auflassung vor dem Notar (§ 925), Schenkungsversprechen (§ 518).',
      'Öffentliche Beglaubigung (§ 129) :: Der Notar beglaubigt nur die Unterschrift.',
      'Schriftform (§ 126) :: Nur die Unterschrift muss handschriftlich sein und den Text räumlich abschließen. Der übrige Text darf gedruckt sein. Datum ist nicht nötig.',
      'Elektronische Form (§ 126a) :: Qualifizierte elektronische Signatur. Eine eingescannte Unterschrift in der E-Mail reicht nicht. Sie ersetzt die Schriftform nur, wenn das Gesetz das nicht ausschließt (§ 126 III).',
      'Textform (§ 126b) :: Lesbare Erklärung auf dauerhaftem Datenträger, Aussteller erkennbar. Auch Papier, E-Mail, SMS.'
    ]),
    cmp('Formvorschriften aus den Altklausuren', ['Geschäft', 'Form', 'Klausurpunkt'], [
      ['Bürgschaft', 'Schriftform, keine elektronische Form (§ 766)', 'Telefonische Bürgschaft des Vaters ist unwirksam (§ 125). Ausnahme: Kaufmann (§ 350 HGB). Heilung durch Zahlung des Bürgen.'],
      ['Kündigung Arbeitsverhältnis', 'Schriftform, keine elektronische Form (§ 623)', '„Schriftform kann ausnahmslos durch elektronische Form ersetzt werden“ ist falsch.'],
      ['Grundstück', 'Kaufvertrag und Auflassung notariell', 'Formmangel heilt durch Auflassung und Eintragung (§ 311b I 2).'],
      ['Schwarzkauf', 'Beurkundeter (zu niedriger) Preis ist Scheingeschäft (§ 117 I), gewollter Preis formnichtig (§ 125)', 'Nach Eintragung ist der gewollte Vertrag geheilt. Ein Zweitkäufer, der zuerst eingetragen wird, wird Eigentümer.'],
      ['Testament', 'Eigenhändig oder notariell', '„Muss immer notariell beurkundet werden“ ist falsch.']]),
    cmp('Änderungen zum 01.01.2025 (Folien LP 4)', ['Bereich', 'Bis 2024', 'Ab 2025'], [
      ['Gewerbliche Mietverträge über Grundstücke/Räume', 'Schriftform nötig, sonst nach einem Jahr ordentlich kündbar (§ 550)', 'Textform genügt, auch E-Mail oder Messenger'],
      ['Nachweis der Arbeitsbedingungen (§ 2 NachwG)', 'Schriftlich und unterschrieben', 'Textform genügt, der Arbeitnehmer kann die Schriftform verlangen'],
      ['Arbeitsvertrag selbst', 'Formfrei', 'Formfrei (unverändert)']])
  ] }
],
7: [
  { title: 'Weiden-Klausurfallen zur Anfechtung', blocks: [
    l('Immer wieder abgefragt', [
      'Widerruf = Anfechtung? :: „Ich habe mich vertippt und widerrufe“ ist als Anfechtung auszulegen (§§ 133, 143). Das Wort „anfechten“ muss nicht fallen. Ein Widerruf nach § 130 I 2 ist nach Zugang nicht mehr möglich.',
      'Rechtsfolgenirrtum :: Wer sich nur über die rechtliche Tragweite seines Handelns irrt, kann nicht anfechten.',
      'Anfechtung vor Kenntnis :: Die Frist läuft erst ab Kenntnis vom Anfechtungsgrund (§ 121 I) bzw. Entdeckung der Täuschung (§ 124 II). Arglistanfechtung 6 Monate nach Entdeckung ist wirksam (1 Jahr, § 124 I).',
      'Wirkung :: Der ganze Vertrag ist von Anfang an nichtig (§ 142 I, ex tunc).',
      '§ 122 :: Kein Verschulden nötig. Ersatz des negativen Interesses, begrenzt durch das positive. Gilt nicht bei §§ 123.',
      'Eigenschaftsirrtum über eine Person :: Verkehrswesentliche Eigenschaften einer Person sind beachtlich (§ 119 II), kein bloßer Motivirrtum.',
      'Anfechtungserklärung :: Einseitig, aber empfangsbedürftig (§ 143 I). Sie wird erst mit Zugang wirksam.'
    ]),
    b('Klavier-Rechnung (WS 23/24)', 'V kauft ein Klavier für 3.000 € und verkauft es K für 5.000 €. Ein Angebot des B über 6.000 € lehnt er ab. K ficht später wirksam an. Negatives Interesse: Ohne Vertrauen auf K hätte V an B für 6.000 € verkauft, jetzt hat er nur das Klavier im Wert von 3.000 €, also 3.000 €. Obergrenze ist das positive Interesse: 5.000 € − 3.000 € = 2.000 €. V bekommt 2.000 € (§ 122 I).'),
    b('Auktion (SS 2018)', 'K hebt die Hand und meint 110 €, nach den bekannten Regeln gilt das als 120 €. Sie kann wegen Inhaltsirrtums anfechten. Bietet die Verkäuferin ihr die Uhr aber zu 110 € an, also zum Gewollten, muss K sich daran festhalten lassen (§ 242). Wer anficht, soll nicht besser stehen, als er es wollte.')
  ] }
],
8: [
  { title: 'Weiden-Klausurfallen zur c.i.c.', blocks: [
    l('Abgrenzung', [
      'Kein geschäftlicher Kontakt :: Wer sich nur vor dem Regen in einen Laden flüchtet, hat keine Kaufabsicht. Es entsteht kein Schuldverhältnis nach § 311 II, die c.i.c. scheidet aus. Bleibt § 823 I (Verkehrssicherungspflicht).',
      'Kunde als Schädiger :: Auch der Kunde schuldet Rücksicht. Öffnet die Kundin im Kaufhaus Kosmetik, die keine Tester sind, kann das Kaufhaus Schadensersatz aus §§ 280 I, 311 II, 241 II verlangen. Ein Kaufvertrag kommt durch das Öffnen nicht zustande.',
      'Abbruch von Verhandlungen :: Grundsätzlich frei. Haftung nur, wenn der Abbrechende einen Vertrauenstatbestand geschaffen hat und ohne triftigen Grund abbricht. Ersatz des negativen Interesses (z. B. Kreditzinsen), kein Anspruch auf Vertragsschluss.',
      'Verschulden :: Die c.i.c. ist keine verschuldensunabhängige Haftung. Das Verschulden wird nur vermutet (§ 280 I 2).'
    ])
  ] }
],
9: [
  { title: 'Weiden-Klausurfallen zu Unmöglichkeit & Gefahr', blocks: [
    l('Was in den Altklausuren immer wieder kommt', [
      '§ 275 :: Erfasst anfängliche und nachträgliche, objektive und subjektive Unmöglichkeit. Befreit kraft Gesetzes, ohne dass es auf das Vertretenmüssen ankommt. Bei anfänglicher Unmöglichkeit ist der Vertrag trotzdem wirksam (§ 311a I).',
      'Absolutes Fixgeschäft :: Hochzeitstorte am 2. statt am 1. Mai, Buffet zum Geburtstag: Mit Zeitablauf wird die Leistung unmöglich. Der Anspruch auf die Gegenleistung entfällt (§ 326 I), bereits Gezahltes gibt es zurück (§ 326 IV).',
      'Aufwendungsersatz § 284 :: Nutzlos gewordene Aufwendungen (Festzelt) gibt es statt Schadensersatz, aber nur bei Vertretenmüssen.',
      'Holschuld + Annahmeverzug :: Ist der Abholtermin vereinbart und erscheint der Käufer nicht, braucht es kein tatsächliches Angebot (§ 296). Geht die Sache danach ohne Verschulden des Verkäufers unter, muss der Käufer zahlen (§ 326 II 1 Alt. 2).',
      'Konkretisierung :: Schützt nur vor der Haftung für zufälligen Untergang, nicht vor der Gewährleistung.',
      'Gefahrübergang (Folie LP 10) :: Sachkauf mit Übergabe (§ 446), Versendungskauf mit Übergabe an die Transportperson (§ 447), beim Verbrauchsgüterkauf erst mit Erhalt (§ 475 II), beim Rechtskauf mit Abtretung, bei Immobilien mit Besitzübergabe (Schlüssel).'
    ])
  ] }
],
10: [
  { title: 'Leistungszeit & Darlehen (§§ 271, 488 ff.)', blocks: [
    p('§ 271 ist eine „Im Zweifel“-Regel: Ohne Vereinbarung ist sofort fällig (I), und der Schuldner darf im Zweifel vorher leisten (II). Eine klare Absprache geht vor. Liefert der Züchter das Pferd einen Tag zu früh, obwohl der Käufer erst seinen Stall fertigbauen wollte, gerät der Käufer nicht in Annahmeverzug.'),
    cmp('Darlehensvertrag § 488 BGB', ['Frage', 'Antwort', 'Norm'], [
      ['Pflichten', 'Darlehensgeber: Geld zur Verfügung stellen. Darlehensnehmer: vereinbarte Zinsen zahlen und bei Fälligkeit zurückzahlen', '§ 488 I'],
      ['Fälligkeit ohne feste Laufzeit', 'Kündigung, Frist 3 Monate', '§ 488 III 1, 2'],
      ['Vorzeitige Rückzahlung ohne Kündigung', 'Nur beim zinslosen Darlehen', '§ 488 III 3'],
      ['Verzinsliches Darlehen mit Laufzeit', 'Vorzeitige Rückzahlung nicht folgenlos: Die Bank verdient an den Zinsen. Kündigung nur nach §§ 489, 490, dann Vorfälligkeitsentschädigung', '§§ 489, 490 II'],
      ['Verbraucherdarlehen', 'Jederzeit vorzeitige Rückzahlung möglich, aber Vorfälligkeitsentschädigung', '§§ 500 II, 502']]),
    b('Weiden WS 18/19', 'Frage: Darf der Kunde ein verzinsliches Darlehen wie einen Kaufpreis vorzeitig zahlen? Richtig: „§ 271 BGB ist grundsätzlich auf alle Vertragsverhältnisse anwendbar.“ Falsch: „folgenlos frühzeitig zurückzahlen“, „Die Bank hat nur Vorteile“ und „keine Anspruchsgrundlage für die Bank“.')
  ] },
  { title: 'Schadensersatz neben oder statt der Leistung: Weidens Kontrollfrage', blocks: [
    m('Würde der geltend gemachte Schaden bei einer hypothetisch rechtzeitigen (Nach-)Erfüllung entfallen? Nein: nicht behebbar, Schadensersatz neben der Leistung (§ 280 I, beim Verzug mit §§ 280 II, 286). Ja: behebbar, Schadensersatz statt der Leistung (§§ 280 I, III, 281) mit Fristsetzung.'),
    cmp('Beispiele aus den Altklausuren', ['Schaden', 'Einordnung', 'Grundlage'], [
      ['Vertragsstrafe, die der Käufer wegen der Verspätung an seinen Kunden zahlt', 'nicht behebbar', '§§ 280 I, II, 286'],
      ['Lehrlingsgehalt für die Wartezeit', 'nicht behebbar', '§§ 280 I, II, 286, gekürzt über § 254'],
      ['Miete für eine Ersatz-Werkbank bis zur verspäteten Lieferung', 'nicht behebbar', '§§ 280 I, II, 286'],
      ['Anwaltskosten einer Mahnung, wenn der Schuldner schon in Verzug war', 'Verzugsschaden', '§§ 280 I, II, 286'],
      ['Mehrkosten eines Deckungskaufs nach Fristablauf', 'behebbar', '§§ 280 I, III, 281'],
      ['Mehrpreis beim Ersatzkauf nach Unmöglichkeit', 'statt der Leistung', '§§ 280 I, III, 283']]),
    f('§ 281 II ist nicht § 323 II Nr. 2', 'Für den Schadensersatz statt der Leistung ist die Frist nicht schon deshalb entbehrlich, weil ein Termin nach dem Kalender vereinbart war. Das relative Fixgeschäft ist ausdrücklich nur für den Rücktritt geregelt (§ 323 II Nr. 2). Bei § 281 II braucht es besondere Umstände. Und: Der Schadensersatz nach § 280 ist nicht verschuldensunabhängig, das Verschulden wird nur vermutet.')
  ] }
],
11: [
  { title: 'Kosten der Nacherfüllung, Vorschuss & Verjährung', blocks: [
    l('Was der Verkäufer trägt', [
      '§ 439 II :: Transport-, Wege-, Arbeits- und Materialkosten der Nacherfüllung. Der Käufer muss die Sache nicht auf eigene Kosten hinschicken.',
      '§ 439 III :: Aus- und Einbaukosten, wenn der Käufer die Sache gutgläubig eingebaut hat. Falsche Kabel in der Villa: Der Verkäufer zahlt auch das Öffnen und Verschließen der Wände.',
      '§ 475 IV (Verbraucher) :: Der Verbraucher kann für diese Kosten Vorschuss verlangen. Er muss nicht in Vorleistung gehen.',
      'Wahlrecht :: Reparatur oder Neulieferung wählt der Käufer (§ 439 I), nicht der Verkäufer. Der Verkäufer kann nur bei unverhältnismäßigen Kosten verweigern (§ 439 IV).',
      'Verschulden :: Gewährleistung ist verschuldensunabhängig. Nur der Schadensersatz (§ 437 Nr. 3) verlangt Vertretenmüssen.'
    ]),
    b('e-Bike (Weiden WS 22/23)', 'Die Software des e-Bikes zeigt die Kilometer falsch an, Fahren geht. Händler H kann die Software nicht ändern. Richtig: K kann das Rad an H schicken, H muss die Transportkosten tragen und einen Vorschuss zahlen (§§ 439 II, 475 IV). Falsch: „Vertrag über ein digitales Produkt“ (es ist eine Ware mit digitalen Elementen), „K muss sich an den Softwarehersteller wenden“ (Vertragspartner ist H).'),
    cmp('Verjährung beim Verbrauchsgüterkauf', ['Regel', 'Inhalt', 'Norm'], [
      ['Grundsatz', '2 Jahre ab Ablieferung, nicht ab Jahresende', '§ 438 I Nr. 3, II'],
      ['Ablaufhemmung 4 Monate', 'Zeigt sich der Mangel innerhalb der Frist, tritt Verjährung frühestens 4 Monate nach dem ersten Zeigen ein', '§ 475e III'],
      ['Nach Nacherfüllung', 'Frühestens 2 Monate nach Rückgabe der reparierten oder neuen Sache', '§ 475e IV'],
      ['Beweislastumkehr', '1 Jahr ab Gefahrübergang', '§ 477 I']]),
    b('Laptop (Weiden WS 24/25)', 'Kauf und Übergabe am 10.03.2023, der Mangel zeigt sich am 09.01.2025. Die 2-Jahres-Frist liefe am 10.03.2025 ab. Weil sich der Mangel innerhalb der Frist gezeigt hat, verjährt der Anspruch erst am 09.05.2025 (§ 475e III). Achtung: Die Antwort „10.03.2025“ war mit der Begründung „Gefahrübergang ist der Eigentumsübergang“ verknüpft, also falsch.')
  ] },
  { title: 'Digitales Produkt oder Ware mit digitalen Elementen?', blocks: [
    p('Diese Abgrenzung kommt in jeder neueren Weiden-Klausur. Die §§ 327 ff. gelten nur für Verbraucherverträge (B2C) und nur für digitale Produkte. Für Waren mit digitalen Elementen gilt Kaufrecht, ergänzt durch §§ 475b–475e.'),
    s('Entscheidungsweg (Folie LP 10)', [
      'Verbrauchervertrag? :: Nur dann kommen §§ 327 ff. und §§ 475b ff. in Betracht (§§ 310 III, 474).',
      'Nur ein digitales Produkt? :: Digitale Inhalte (App, E-Book, Software, Video, Spiel, § 327 II 1) oder digitale Dienstleistungen (Cloud, SaaS, soziale Netzwerke, § 327 II 2). Auch „Bezahlen“ mit Daten genügt (§ 327 III). Dann gelten §§ 327 ff.',
      'Sache mit digitalem Produkt: funktionsnotwendig? :: Ja (Roboter-Rasenmäher nur per App steuerbar, Notebook mit Betriebssystem): Ware mit digitalen Elementen (§ 327a III). Es gilt §§ 433 ff., 475b ff., die §§ 327 ff. gelten nicht.',
      'Nicht funktionsnotwendig :: Paketvertrag (§ 327a I). Kaufrecht für die Sache, §§ 327 ff. nur für den digitalen Teil. Smarter Kühlschrank mit App-Zusatzfunktion: nach h. M. kühlt er auch ohne App, also kein Ware-mit-digitalen-Elementen-Vertrag. Entscheidend bleibt die Auslegung, etwa wenn die Funktion ausdrücklich beworben wurde.'
    ]),
    cmp('Rechte im Vergleich', ['Situation', 'Digitales Produkt (§§ 327 ff.)', 'Ware mit digitalen Elementen'], [
      ['Nicht bereitgestellt', '§ 327c: Aufforderung zur Bereitstellung, bleibt sie aus, Vertragsbeendigung. Aufforderung entbehrlich, wenn der Unternehmer verweigert oder ein Fixtermin vereinbart war (§ 327c III)', 'Sachmangel (§ 475b): Nacherfüllung durch Bereitstellung, Rücktritt erst nach Frist'],
      ['Mangelhaft', 'Nacherfüllung (§ 327l), Vertragsbeendigung (§ 327m), Minderung (§ 327n), Schadensersatz (§ 327m III)', 'Rechte aus § 437'],
      ['Updates', 'Aktualisierungspflicht (§ 327f)', 'Aktualisierungspflicht (§ 475b IV). Installiert der Verbraucher ein bereitgestelltes Update trotz Hinweis nicht, haftet der Unternehmer für den dadurch entstehenden Mangel nicht (§ 475b V)'],
      ['Begriff', '„Vertragsbeendigung“ statt Rücktritt', '„Rücktritt“']]),
    f('Klausurfalle Rasenmäher-App (Weiden SS 2023)', 'Die Steuerungs-App des Roboter-Rasenmähers lässt sich nicht installieren. Die Antwort „H kann den Vertrag nach § 327c II beenden“ ist falsch: Der Rasenmäher ist eine Ware mit digitalen Elementen, die §§ 327 ff. gelten nicht (§ 327a III). Richtig ist der Anspruch auf Nacherfüllung durch Bereitstellung der App. § 327c brauchen Sie dagegen bei reiner Software: Bleibt die gekaufte Bildbearbeitungssoftware aus oder verweigert der Händler die Fehlerbehebung, kann die Verbraucherin den Vertrag beenden und den Preis zurückverlangen (§§ 327c, 327m, 327o).'),
    qc('Hakan ignoriert die Update-Hinweise seiner Rasenmäher-App. Der Mäher kann deshalb nicht gestoppt werden und zerstört einen Rosenbusch. Hat er Schadensersatzansprüche gegen den Baumarkt?', 'Nein. Der Unternehmer haftet nicht für einen Mangel, der allein darauf beruht, dass der Verbraucher ein bereitgestelltes Update trotz Information über die Folgen nicht installiert hat (§ 475b V BGB).')
  ] },
  { title: 'Gebrauchtwagen, Haftungsausschluss & Garantie', blocks: [
    l('Gebrauchtwagen in den Altklausuren', [
      'Verschleiß ist kein Mangel :: Maßstab ist die übliche Beschaffenheit bei Sachen gleicher Art und gleichen Alters (§ 434 III Nr. 2). Ein durchgerosteter Auspuff bei 12 Jahren und 102.000 km ist normaler Verschleiß.',
      'Privat an privat :: Ein Haftungsausschluss ist wirksam, außer bei Arglist oder Garantie (§ 444). „Immer wirksam“ ist deshalb falsch. In AGB zusätzlich § 309 Nr. 7.',
      'Händler an Verbraucher :: Mängelrechte können vor Mitteilung des Mangels nicht ausgeschlossen werden (§ 476 I). Ausnahme: Schadensersatz (§ 476 III, Grenzen §§ 307–309). Ein vollumfänglicher Ausschluss in AGB ist unwirksam.',
      'Verjährung gebraucht :: Verkürzung auf 1 Jahr nur, wenn der Verbraucher eigens informiert und es ausdrücklich und gesondert vereinbart wird (§ 476 II).',
      'Angaben ins Blaue :: Wer ohne tatsächliche Grundlage behauptet („unfallfrei“, ohne geprüft zu haben), handelt mit bedingtem Vorsatz. Das ist Arglist (§§ 123, 444). „Angaben ins Blaue sind keine arglistige Täuschung“ ist falsch.',
      '„Laut Vorbesitzer unfallfrei“ :: Das ist eine Wissenserklärung, keine Garantie und keine Beschaffenheitsvereinbarung „unfallfrei“.',
      'Unfallwagen als unfallfrei verkauft :: Nacherfüllung ist unmöglich, Unfallfreiheit lässt sich nicht herstellen (§ 275 I). Rücktritt ohne Frist (§§ 437 Nr. 2, 326 V), verschuldensunabhängig. Kaufpreis zurück nach § 346 I.'
    ]),
    f('Negative Beschaffenheitsvereinbarung (§ 476 I 2)', 'Will der Händler gegenüber einem Verbraucher von den objektiven Anforderungen abweichen, muss er ihn vor Vertragsschluss eigens darüber informieren, und die Abweichung muss ausdrücklich und gesondert vereinbart werden. Eine pauschale Klausel im schriftlichen Vertrag („entspricht auf Grund Alters und Material nicht den gängigen Standards“) reicht nicht. Ein defekter Verschluss der Kette bleibt ein Mangel (WS 23/24).'),
    cmp('Gewährleistung und Garantie (Folie LP 10)', ['', 'Gewährleistung (§§ 437 ff.)', 'Garantie (§ 443)'], [
      ['Grundlage', 'Gesetz', 'Freiwillige Zusage'],
      ['Gegner', 'Immer der Verkäufer', 'Der Garantiegeber (Verkäufer oder Hersteller)'],
      ['Dauer', '2 Jahre neu, 1 Jahr gebraucht (wenn wirksam vereinbart)', 'Frei bestimmt'],
      ['Voraussetzung', 'Mangel bei Gefahrübergang, normaler Verschleiß nicht erfasst', 'Vom Garantiegeber definierter Fall in der Garantiezeit, auch Verschleiß möglich'],
      ['Verhältnis', 'Bleibt immer bestehen', 'Gilt zusätzlich. Sie ersetzt die Gewährleistung nicht, verlängert sie nicht automatisch und muss nicht „Garantie“ heißen']]),
    p('Neu: Die Durchführungsverordnung (EU) 2025/1960 legt eine einheitliche Mitteilung über das gesetzliche Gewährleistungsrecht und eine Kennzeichnung für gewerbliche Haltbarkeitsgarantien fest. Prof. Weiden nennt sie als neue Informationspflicht der Händler.')
  ] }
],
12: [
  { title: 'AGB bei Prof. Weiden: von vorn nach hinten, von hinten nach vorn', blocks: [
    s('Prüfreihenfolge (Folie LP 7)', [
      '1. Von vorn nach hinten :: AGB-Qualität (§ 305 I), Einbeziehung (§ 305 II), Vorrang der Individualabrede (§ 305b), keine überraschende oder mehrdeutige Klausel (§ 305c).',
      '2. Von hinten nach vorn :: Klauselverbote ohne Wertung (§ 309), mit Wertung (§ 308), Generalklausel (§ 307 I).',
      'Rechtsfolge :: Unwirksame Klausel fällt weg, es gilt das Gesetz, der Vertrag bleibt (§ 306).'
    ]),
    l('Klausurpunkte', [
      'Erste Kundin :: AGB liegen schon beim ersten Vertrag vor, wenn eine mehrfache Verwendung beabsichtigt ist. Beim Verbrauchervertrag reicht sogar einmalige Verwendungsabsicht (§ 310 III Nr. 2).',
      'Verbraucher als Verwender :: Auch ein Verbraucher kann AGB stellen.',
      'B2B :: § 305 II gilt nicht (§ 310 I). Es genügt eine, auch stillschweigende, Einigung. Ein Hinweis erst nach dem mündlichen Vertragsschluss bezieht die AGB aber nicht mehr ein.',
      'Haftung :: Ausschluss für leichte Fahrlässigkeit bei Körperverletzung ist unwirksam (§ 309 Nr. 7a). Fitnessstudio: F haftet auch für leicht fahrlässige Platzwunde.',
      'Waschanlage :: Haftungsausschluss für Außenteile auch bei leichter Fahrlässigkeit verstößt gegen § 307 I (BGH). Die Prävention liegt in der Sphäre des Unternehmers.',
      'Preisanpassung :: Höherer Listenpreis bei Lieferung nach mehr als 3 Monaten verstößt gegen § 309 Nr. 1 (Frist 4 Monate).',
      'Vertragsstrafe B2B :: § 309 Nr. 6 gilt nicht (§ 310 I). Ist sie mehr als dreimal so hoch wie branchenüblich, ist sie nach § 307 I unwirksam.'
    ])
  ] },
  { title: 'Widerruf bei Prof. Weiden', blocks: [
    l('Was sie abfragt', [
      'Kein Umtausch :: Das Widerrufsrecht gibt keinen Anspruch auf Umtausch in eine andere Größe.',
      'Nur Verbraucher :: Im stationären Handel gibt es grundsätzlich kein Widerrufsrecht.',
      'Fristbeginn :: Beim Warenkauf mit Erhalt der Ware (§ 356 II Nr. 1a), nicht mit Vertragsschluss. Ohne ordnungsgemäße Belehrung beginnt die Frist nicht (§ 356 III).',
      'Fristende :: § 193 verschiebt nur das Ende, nicht den Beginn. Auf den Tag des Auspackens kommt es nicht an, auch ein Mangel verlängert nichts.',
      '„Rücktritt“ :: Erklärt die Verbraucherin „Rücktritt“, ist das als Widerruf auszulegen. Die rechtzeitige Absendung wahrt die Frist (§ 355 I 5). Sie bekommt Kaufpreis und Standard-Hinsendekosten zurück, muss sich aber Wertersatz für Flecken anrechnen lassen (§ 357a I).',
      'Widerruf oder Gewährleistung :: Ist die Ware mangelhaft, hat die Verbraucherin die Wahl zwischen Widerruf und Mängelrechten.'
    ]),
    cmp('Fristrechnung (Weiden WS 24/25 und WS 23/24)', ['Sachverhalt', 'Ergebnis'], [
      ['Lieferung Dienstag 21.5., 14 Tage', 'Fristbeginn 22.5., Ende Dienstag 4.6., 24 Uhr'],
      ['Lieferung 14.12., Widerruf am 30.12.', 'Frist endete am 28.12. Widerruf am 30.12. nur möglich, wenn nicht ordnungsgemäß belehrt wurde'],
      ['Bestellung Freitag 7.7., 10 Uhr, Lieferung binnen 7 Tagen', 'Ende Freitag 14.7. (§§ 187 I, 188 II)'],
      ['Rücktrittsrecht 10 Tage ab Einbau am 19.2.', 'Fristbeginn 20.2., 0 Uhr (§ 187 I)']])
  ] }
],
13: [
  { title: 'Schadensersatzrecht §§ 249–254 (Lernpaket 9)', blocks: [
    s('Umfang des Schadensersatzes', [
      'Differenzmethode :: Vermögenslage mit und ohne schädigendes Ereignis vergleichen. Grundsatz: positives Interesse. Ausnahme negatives Interesse, z. B. §§ 122, 179 II, c.i.c.',
      'Naturalrestitution § 249 I :: Herstellung des Zustands ohne Schädigung.',
      '§ 249 II :: Bei Personen- und Sachschäden kann der Geschädigte stattdessen Geld verlangen. Er muss nicht in der Werkstatt des Schädigers reparieren lassen. Er darf auch fiktiv abrechnen, dann ohne Umsatzsteuer (§ 249 II 2).',
      'Wertersatz § 251 I :: Ist die Herstellung unmöglich (zerstörtes Bild, Wintergarten), gibt es den Wert, ohne Fristsetzung.',
      'Entgangener Gewinn § 252 :: Ist ersatzfähig, wenn er wahrscheinlich war (z. B. bereits gebuchte bezahlte Videos).',
      'Immaterieller Schaden § 253 :: Nur in gesetzlich bestimmten Fällen. Schmerzensgeld bei Körper, Gesundheit, Freiheit, sexueller Selbstbestimmung (§ 253 II), auch vertraglich. Der ideelle Wert eines Bildes wird nicht ersetzt.',
      'Kausalität :: Äquivalenz (conditio sine qua non), Adäquanz, Schutzzweck der Norm.'
    ]),
    cmp('Mitverschulden § 254 (Folie LP 9)', ['', '§ 254 I', '§ 254 II'], [
      ['Inhalt', 'Mitverursachung des schädigenden Ereignisses', 'Verstoß gegen die Schadensminderungspflicht: nicht vor ungewöhnlich hohem Schaden gewarnt, Schaden nicht abgewendet oder gemindert'],
      ['Voraussetzung', 'Verursachungsbeitrag + eigenes Verschulden (§ 276)', 'Obliegenheitsverstoß + Verschulden'],
      ['Folge', 'Quotelung bis auf null', 'Quotelung bis auf null'],
      ['Beispiel', 'Fußgänger läuft bei Rot', 'Schreiner lässt den Lehrling 7 Monate auf Holz warten, bevor er dem Lieferanten eine Frist setzt']]),
    b('Falschparker vor der Garage (Weiden SS 2023)', 'P parkt 6 Stunden vor der Garagenausfahrt des F (Nötigung, § 240 StGB). F muss zum Feuerwehreinsatz und nimmt ein Taxi für 50 €. F kann die Taxikosten verlangen: aus § 823 I (Eigentum, der Gebrauch des Autos wird entzogen) und § 823 II i. V. m. § 240 StGB. Eine Schadensminderungspflicht besteht (§ 254 II), F hat sie aber nicht verletzt: Erst über die Polizei den Halter zu suchen, ist im Einsatzfall nicht zumutbar. Ein Fenster einschlagen darf F nicht „jederzeit“ (Selbsthilfe § 229 nur, wenn obrigkeitliche Hilfe nicht rechtzeitig zu erlangen ist, und nur verhältnismäßig).'),
    l('Weitere Weiden-Klassiker', [
      'Schutzgesetz im Hinweis :: Zitiert der Sachverhalt eine StGB-Norm (§ 229 Fahrlässige Körperverletzung, § 240 Nötigung), will die Aufgabe § 823 II hören.',
      'Faustschlag im Bierzelt :: Behandlungskosten, Brille und Schmerzensgeld. Wer sich auf einen Streit einlässt, willigt nicht in eine Körperverletzung ein.',
      'Gefährdungshaftung :: Tierhalter (§ 833 S. 1, beim Nutztier Entlastung nach S. 2), Kfz-Halter (§ 7 StVG), ProdHaftG. Kein Verschulden nötig. „Schadensersatz ist ohne Vertretenmüssen generell ausgeschlossen“ ist deshalb falsch.',
      'Verkehrssicherungspflichten :: Wer eine Gefahrenquelle eröffnet, muss sichern: Streupflicht, Spiel- und Sportanlagen (Skate-Park), Gaststätten, Plattformen, Hersteller.',
      'ProdHaftG und gewerbliche Sachen :: Sachschäden ersetzt das ProdHaftG nur an privat genutzten anderen Sachen (§ 1 I 2), nicht am Produkt selbst. Die GmbH bekommt den explodierten Reiniger nicht nach ProdHaftG, wohl aber aus dem Kaufvertrag (§ 437 Nr. 3). Personenschäden des Mitarbeiters: § 823 I und ProdHaftG.',
      'Endhersteller :: Haftet nach ProdHaftG auch für ein fehlerhaftes Zuliefer-Teil (§ 4 I).'
    ])
  ] },
  { title: 'Erfüllungs- und Verrichtungsgehilfe (Lernpaket 14)', blocks: [
    cmp('Zurechnung fremden Verschuldens (Folie LP 14)', ['', 'Erfüllungsgehilfe § 278', 'Verrichtungsgehilfe § 831'], [
      ['Funktion', 'Zurechnungsnorm, kein eigener Anspruch', 'Eigene Anspruchsgrundlage'],
      ['Voraussetzung', 'Bestehendes Schuldverhältnis', 'Kein Schuldverhältnis nötig'],
      ['Weisungen', 'Unabhängig von Weisungsgebundenheit (auch ein selbstständiger Freund)', 'Weisungsabhängigkeit erforderlich'],
      ['Entlastung', 'Keine, der Schuldner haftet für fremdes Verschulden', 'Exkulpation möglich (Auswahl, Überwachung), er haftet für eigenes vermutetes Verschulden'],
      ['Verschulden des Gehilfen', 'Erforderlich', 'Nicht erforderlich, nur widerrechtliche Schädigung']]),
    l('Klausurfälle', [
      'Praktikant wechselt Reifen :: Er ist Erfüllungs- und Verrichtungsgehilfe zugleich. Der Meister haftet über §§ 280 I, 278. Exkulpation nach § 831 scheitert, weil er wusste, dass der Praktikant noch nie Reifen gewechselt hatte. Der Praktikant haftet selbst aus § 823 I.',
      'Gärtner verlegt Boden :: Auch ein fachfremder Helfer ist Erfüllungsgehilfe. Die Kundin hat Ansprüche gegen den Handwerker.',
      'Angestellte stiehlt um 22 Uhr :: Bei Gelegenheit, nicht in Erfüllung. Der Anwalt haftet nicht. Eine Haftung „immer“ für vorsätzliche Taten gibt es nicht.'
    ])
  ] }
],
14: [
  { title: 'Verbindung mit einem Grundstück (§ 946) & Grundprinzipien', blocks: [
    p('Wird eine bewegliche Sache mit einem Grundstück so verbunden, dass sie wesentlicher Bestandteil wird (§§ 93, 94: fest verbunden, Gebäude, zur Herstellung eingefügte Sachen), erstreckt sich das Eigentum am Grundstück auf sie (§ 946). Der bisherige Eigentümer verliert sein Eigentum kraft Gesetzes, auch ein Lieferant unter Eigentumsvorbehalt. Ausgleich: Wertersatz nach §§ 951, 812.'),
    m('Haus und Grundstück werden nie getrennt übertragen. In Weidens Klausuren ist die Antwort „müssen jeweils getrennt übertragen werden“ jedes Mal falsch.'),
    cmp('Erwerb kraft Gesetzes', ['Vorgang', 'Folge', 'Norm'], [
      ['Bewegliche Sache wird wesentlicher Bestandteil eines Grundstücks', 'Grundstückseigentümer wird Eigentümer', '§ 946'],
      ['Bewegliche Sachen werden zu einer einheitlichen Sache verbunden', 'Miteigentum, oder Eigentum der Hauptsache', '§ 947'],
      ['Vermischung/Vermengung', 'wie § 947', '§ 948'],
      ['Verarbeitung zu einer neuen Sache', 'Hersteller wird Eigentümer, wenn der Wert der Verarbeitung nicht erheblich geringer ist', '§ 950'],
      ['Ausgleich in allen Fällen', 'Vergütung in Geld nach Bereicherungsrecht', '§ 951']]),
    cmp('Grundprinzipien des Sachenrechts (Folie LP 15)', ['Prinzip', 'Bedeutung'], [
      ['Absolutheit', 'Dingliche Rechte wirken gegenüber jedermann'],
      ['Typenzwang', 'Nur die gesetzlich geregelten dinglichen Rechte'],
      ['Publizität', 'Erkennbar durch Besitz oder Grundbuch (§ 892: Der Eingetragene gilt als Eigentümer)'],
      ['Spezialität', 'Nur an bestimmten einzelnen Sachen'],
      ['Abstraktion', 'Trennung von Verpflichtung und Verfügung']]),
    l('Weitere Klausurpunkte', [
      'Eigentumsvorbehalt :: Zahlt der Käufer Raten nicht, kann der Verkäufer den Tisch erst nach Rücktritt herausverlangen (§ 449 II). Bis dahin hat der Käufer aus dem Kaufvertrag ein Recht zum Besitz (§ 986).',
      'Forderungen :: Werden durch Abtretungsvertrag übertragen (§ 398). Nicht durch Kaufvertrag, nicht durch Übergabe einer Liste, nicht durch Zahlung. Der Schuldner muss nicht zustimmen.',
      'Factoring :: Forderungskauf plus Abtretung. Der Factor trägt das Ausfallrisiko (Delkredere) und kann bei Nichtzahlung nicht auf den Verkäufer zurückgreifen.',
      'Überweisung :: Wer überweist, überträgt kein Eigentum an Geldscheinen, sondern seinen Auszahlungsanspruch. Rückforderung über § 812, nicht § 985.',
      'Miete :: Der Mieter hat ein Recht zum Besitz. Der Vermieter kann während der Mietzeit nicht nach § 985 herausverlangen. Nach Ende: § 546 I und § 985.'
    ])
  ] },
  { title: 'Mietverhältnis: Kaution, Aufrechnung, Nebenpflicht', blocks: [
    s('Schadensersatz wegen Beschädigung der Mietsache', [
      'Anspruchsgrundlage :: §§ 280 I, 241 II BGB, Verletzung der Obhuts- und Rücksichtnahmepflicht des Mieters.',
      'Pflichtverletzung :: Veränderungen über den vertragsgemäßen Gebrauch hinaus (§ 538). Auch ohne Zweckbestimmung ist nur die übliche Nutzung erlaubt, Autoreparaturen mit Öl in einer Lagerhalle nicht.',
      'Keine Fristsetzung :: Es ist Schadensersatz neben der Leistung. Der Vermieter muss dem Mieter keine Frist zur Reinigung setzen (BGH, VIII ZR 157/17).',
      'Verjährung :: Nur 6 Monate ab Rückgabe der Mietsache (§ 548 I).'
    ]),
    l('Kaution und Aufrechnung', [
      'Kaution :: Bei Wohnraum höchstens drei Monatsmieten, getrennt vom Vermögen anzulegen (§ 551). Bei Gewerbe frei vereinbar. Nach Mietende hat der Mieter einen Rückzahlungsanspruch, der Vermieter eine angemessene Prüfzeit.',
      'Aufrechnung :: Kautionsrückzahlung und Schadensersatz sind beide Geldforderungen, also gleichartig (§ 387). Weitere Voraussetzungen: Gegenseitigkeit, Gegenforderung fällig und durchsetzbar, Erklärung (§ 388).',
      '§ 215 :: Auch eine schon verjährte Schadensersatzforderung kann der Vermieter noch aufrechnen, wenn sich beide Forderungen vor der Verjährung aufrechenbar gegenüberstanden. Wichtig wegen der kurzen Frist des § 548.'
    ]),
    b('Lagerhalle (Weiden SS 2023)', 'Mieter M hat in der Halle Autos repariert, der Boden ist ölverseucht. V wendet 6.000 € auf und rechnet gegen die Kaution auf. Richtig: V hat einen Schadensersatzanspruch wegen Nebenpflichtverletzung. Falsch: „keine gleichartigen Forderungen“, „Frist zur Reinigung nötig“, „kein Anspruch, weil der Gebrauch unbestimmt war“.'),
    tf('Schnelltest', [
      ['Ein Bauunternehmer, der Fenster unter Eigentumsvorbehalt einbaut, bleibt Eigentümer der Fenster.', false, '§ 946: Die Fenster werden wesentlicher Bestandteil (§ 94 II), das Eigentum geht auf den Grundstückseigentümer über. Ausgleich nach § 951.'],
      ['Der Vermieter muss vor Schadensersatz wegen Beschädigung der Mietsache eine Frist zur Beseitigung setzen.', false, 'Es ist Schadensersatz neben der Leistung aus §§ 280 I, 241 II, eine Fristsetzung ist nicht nötig.'],
      ['Mit einem Schadensersatzanspruch kann der Vermieter gegen den Kautionsrückzahlungsanspruch aufrechnen.', true, 'Beide Forderungen sind auf Geld gerichtet, also gleichartig (§ 387).']
    ])
  ] }
]
};
window.dispatchEvent(new Event('wpr-data'));
})();
