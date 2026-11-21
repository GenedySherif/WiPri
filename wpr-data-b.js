(function () {
const p = t => ({ t: 'p', text: t }), l = (title, items) => ({ t: 'list', title, items }), s = (title, items) => ({ t: 'schema', title, items }),
  b = (title, text) => ({ t: 'bsp', title, text }), f = (title, text) => ({ t: 'falle', title, text }), m = t => ({ t: 'merk', text: t }), v = (title, text) => ({ t: 'vert', title, text });
const fl = (title, items) => ({ t: 'flow', title, items }), cmp = (title, cols, rows) => ({ t: 'cmp', title, cols, rows }), rel = (title, items) => ({ t: 'rel', title, items }),
  tf = (title, items) => ({ t: 'tf', title, items }), st = (title, items) => ({ t: 'steps', title, items }), qc = (q, a) => ({ t: 'check', q, a });
const W = window.WPR = window.WPR || {};

const SV3 = `Vitus (V) bietet seinem Kommilitonen Konstantin (K) sein gebrauchtes Notebook zum Kauf an. V hinterlässt K einen Klebezettel an dessen Arbeitsplatz in der Bibliothek, während K in der Mensa zu Mittag isst. Als K zurückkehrt, liest er dort „Du kannst den Rechner für 350 € haben.“ K schickt V gleich eine WhatsApp und schreibt „Für 300 € nehme ich das Notebook.“ Was K nicht weiß, ist dass V sein Mobiltelefon bei seinen Eltern hat liegenlassen. Er kann zurzeit keine WhatsApp Nachrichten empfangen. Am nächsten Tag überreicht V dem K in der Bibliothek das Gerät und sagt: „Ich wusste, dass Du es nehmen würdest.“ K nimmt es entgegen und verspricht, am nächsten Tag „den vereinbarten Betrag“ mitzubringen, wenn sich die beiden Kommilitonen im Seminar treffen. Als K dem V am Folgetag 300 € übergeben will, bemerken die beiden das Problem.`;

W[5] = {
  src: 'Skript S. 4 („Vertragsschluss“) · §§ 104–157 BGB', title: 'Vertragsschluss & Willenserklärung',
  intro: `Der Vertrag ist das zentrale Instrument des Privatrechts (Modul 1). Er kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot und Annahme. Klingt einfach, aber in der Klausur hängt alles an Details. Wann ist eine Erklärung zugegangen? Ist ein Schaufenster schon ein Angebot? Was bedeutet Schweigen? Was passiert, wenn man sich über den Preis gar nicht einig ist?`,
  ziel: 'Willenserklärungen in ihre Bestandteile zerlegen, Zugang sicher prüfen, Angebot von invitatio ad offerendum abgrenzen, Dissens und unbestellte Leistungen lösen.',
  relevanz: 'Sehr hoch. Vertragsschluss ist der erste Prüfungspunkt jedes vertraglichen Anspruchs.',
  faelle: 'Fälle 3, 4, 5 und 6',
  sections: [
    { title: 'Die Willenserklärung', blocks: [
      m(`Willenserklärung (WE) = Äußerung eines Willens, die unmittelbar auf die Herbeiführung einer Rechtsfolge gerichtet ist.`),
      cmp('Schaubild: Bestandteile der Willenserklärung', ['', 'Objektiver Tatbestand', 'Subjektiver Tatbestand'], [
        ['Frage', 'Wie sieht die Erklärung für einen objektiven Dritten aus?', 'Was wollte der Erklärende innerlich?'],
        ['Inhalt', 'Äußeres Verhalten, das auf Rechtsbindungswillen schließen lässt (ausdrücklich oder konkludent)', '1. Handlungswille  2. Erklärungsbewusstsein  3. Geschäftswille'],
        ['Fehlt es?', 'Keine WE (z. B. bloße Gefälligkeit, Scherz)', 'Handlungswille fehlt: keine WE. EB oder GW fehlt: WE wirksam, aber evtl. anfechtbar'],
        ['Beispiel', 'Hand heben bei einer Versteigerung', 'Wollte grüßen (kein EB) oder dachte, es geht um ein anderes Los (kein GW)']
      ]),
      l('Der subjektive Tatbestand im Detail', [
        'Handlungswille :: Bewusstes Handeln überhaupt. Fehlt bei Reflexbewegungen, im Schlaf und bei vis absoluta (jemand führt Ihre Hand). Dann liegt KEINE WE vor.',
        'Erklärungsbewusstsein :: Bewusstsein, irgendetwas rechtlich Erhebliches zu erklären. Klassiker „Trierer Weinversteigerung“: Jemand winkt einem Freund und steigert damit unbewusst. Herrschende Meinung: Die WE ist wirksam, wenn der Erklärende bei verkehrsüblicher Sorgfalt hätte erkennen können, dass sein Verhalten als WE verstanden wird (potenzielles Erklärungsbewusstsein). Er kann aber analog § 119 I anfechten.',
        'Geschäftswille :: Wille, ein ganz bestimmtes Geschäft abzuschließen. Fehlt er (Verschreiben, Vertippen), ist die WE wirksam, aber nach § 119 I anfechtbar (Modul 7).'
      ]),
      p(`Willenserklärungen werden nach §§ 133, 157 ausgelegt, und zwar nach dem objektiven Empfängerhorizont: Wie durfte ein verständiger Empfänger die Erklärung nach Treu und Glauben und mit Rücksicht auf die Verkehrssitte verstehen? Nicht maßgeblich ist, was der Erklärende insgeheim wollte.`),
      tf('Schnelltest: Willenserklärung oder nicht?', [
        ['„Ich nehme dich morgen im Auto mit zur Uni.“', false, 'Eine bloße Gefälligkeit im Alltag ohne Rechtsbindungswillen.'],
        ['Einwurf einer Münze in einen Getränkeautomaten', true, 'Konkludente Annahme des Angebots des Automatenaufstellers.'],
        ['Unterschrift im Schlaf, weil jemand die Hand führt', false, 'Kein Handlungswille (vis absoluta), also keine WE.'],
        ['Anklicken von „Jetzt kaufen“ im Webshop', true, 'Ausdrückliche WE, regelmäßig das Angebot des Kunden.']
      ])
    ] },
    { title: 'Abgabe und Zugang, § 130', blocks: [
      p(`Eine empfangsbedürftige WE wird unter Abwesenden in dem Zeitpunkt wirksam, in dem sie dem Empfänger zugeht (§ 130 I 1). Unter Anwesenden wird sie mit Vernehmung wirksam (bei mündlichen Erklärungen nach der eingeschränkten Vernehmungstheorie).`),
      m(`Zugang = die Erklärung ist so in den Machtbereich des Empfängers gelangt, dass er unter normalen Umständen die Möglichkeit der Kenntnisnahme hat und diese nach der Verkehrsanschauung zu erwarten ist.`),
      fl('Schaubild: Vom Absender zum Empfänger', ['Abgabe :: willentlich in Richtung Empfänger auf den Weg gebracht', 'Machtbereich :: Briefkasten, Postfach, Handy, Arbeitsplatz', 'Kenntnisnahme möglich :: unter normalen Umständen', 'ZUGANG :: WE wirksam (§ 130 I 1)']),
      l('Typische Zugangsfälle', [
        'Briefkasten :: Zugang, wenn mit der Leerung zu rechnen ist. Ein Einwurf um 23 Uhr geht am nächsten Morgen zu.',
        'E-Mail, WhatsApp :: Eingang im Postfach oder auf dem Gerät. Bei Geschäftsleuten gilt das während der Geschäftszeiten, bei Privatleuten in der Regel am selben Tag bzw. am nächsten Morgen.',
        'Persönliche Ablage :: Ein Zettel am Arbeitsplatz geht zu, sobald mit der Rückkehr zu rechnen ist (Fall 3: V hinterlässt den Klebezettel).',
        'Empfangsbote :: Eine Person, die nach der Verkehrsanschauung als ermächtigt gilt, z. B. ein Ehegatte oder Mitbewohner. Zugang tritt ein, wenn mit der Weitergabe zu rechnen ist.',
        'Widerruf, § 130 I 2 :: Die WE wird nicht wirksam, wenn dem Empfänger vorher oder gleichzeitig ein Widerruf zugeht.',
        'Tod oder Geschäftsunfähigkeit nach Abgabe, § 130 II :: Das ist unschädlich.'
      ]),
      f('Klausurfalle', `Tatsächliche Kenntnis ist für den Zugang nicht nötig. Liest der Empfänger die E-Mail nie, ist sie trotzdem zugegangen. Umgekehrt gilt: Kann der Empfänger aus Gründen in seiner Sphäre nicht empfangen (Handy bei den Eltern), ist das sein Risiko, wenn die Nachricht in seinen Machtbereich gelangt ist. Fall 3 kommt aber zum selben Ergebnis, unabhängig davon, wie man den Zugang beurteilt.`)
    ] },
    { title: 'Das Angebot, § 145', blocks: [
      s('Voraussetzungen eines Angebots', [
        'Empfangsbedürftige WE :: muss zugehen',
        'Inhaltlich bestimmt :: Die wesentlichen Vertragsbestandteile (essentialia negotii) müssen enthalten sein, beim Kauf Vertragsparteien, Kaufsache und Preis. Ein bloßes „Ja“ muss genügen.',
        'Rechtsbindungswille :: Der Anbietende will sich bei Annahme binden.'
      ]),
      cmp('Schaubild: Angebot oder invitatio ad offerendum?', ['Situation', 'Einordnung', 'Warum?'], [
        ['Schaufenster, Prospekt, Katalog', 'invitatio', 'Der Händler will nicht an unbegrenzt viele gebunden sein (Vorrat), Bonität offen'],
        ['Webshop-Angebot', 'invitatio', 'Das Angebot kommt vom Kunden mit der Bestellung, die Annahme vom Händler (oft per Versandbestätigung)'],
        ['Ware im Supermarktregal', 'h. M.: Angebot an der Kasse', 'Das Angebot wird an der Kasse durch Vorlegen gemacht oder dort angenommen'],
        ['Warenautomat', 'Angebot (Realofferte)', 'An jedermann, solange Vorrat reicht und Funktion gegeben'],
        ['Minibar im Hotel', 'Angebot (Fall 5)', 'An den jeweiligen Zimmergast, Vorrat und Bonität unproblematisch'],
        ['eBay-Auktion', 'Angebot des Verkäufers', 'An den Höchstbietenden bei Auktionsende']
      ]),
      p(`Das Angebot bindet den Anbietenden (§ 145), es sei denn, er hat die Gebundenheit ausgeschlossen („freibleibend“, „solange Vorrat reicht“). Es erlischt, wenn es abgelehnt oder nicht rechtzeitig angenommen wird (§ 146).`)
    ] },
    { title: 'Die Annahme, §§ 146–152', blocks: [
      s('Annahmefristen', [
        'Unter Anwesenden, § 147 I :: sofort. Das gilt auch am Telefon.',
        'Unter Abwesenden, § 147 II :: bis zu dem Zeitpunkt, in dem der Antragende den Eingang der Antwort unter regelmäßigen Umständen erwarten darf (Hinweg + Überlegungszeit + Rückweg).',
        'Gesetzte Frist, § 148 :: nur innerhalb der Frist.'
      ]),
      cmp('Schaubild: Was ist die „Annahme“ wirklich?', ['Erklärung', 'Rechtsfolge', 'Norm'], [
        ['„Ja, einverstanden.“ (rechtzeitig)', 'Vertrag kommt zustande', '§§ 145 ff.'],
        ['„Ja“, aber zu spät', 'gilt als neues Angebot', '§ 150 I'],
        ['„Ja, aber für 300 € statt 350 €“', 'Ablehnung + neues Angebot', '§ 150 II (Fall 3)'],
        ['Schweigen', 'grundsätzlich KEINE Erklärung', 'Ausnahmen: § 362 HGB, kaufm. Bestätigungsschreiben'],
        ['Annahme durch Verhalten ohne Erklärung an den Anbietenden', 'wirksam, wenn Zugang verzichtet oder unüblich', '§ 151 S. 1 (Fall 5)']
      ]),
      v('§ 151 S. 1: Annahme ohne Zugang', `Die Annahme selbst ist auch hier nötig, also eine nach außen erkennbare Betätigung des Annahmewillens wie Trinken, Benutzen oder Absenden der Ware. Entbehrlich ist nur der Zugang dieser Annahme beim Anbietenden, wenn er darauf verzichtet hat oder eine solche Erklärung nach der Verkehrssitte nicht zu erwarten ist. Das klassische Beispiel ist die Minibar (Fall 5).`),
      f('Unbestellte Leistungen, § 241a', `Schickt ein Unternehmer einem Verbraucher unbestellt Ware, wird kein Anspruch gegen den Verbraucher begründet (§ 241a I). Das gilt auch für Herausgabe-, Nutzungs- und Schadensersatzansprüche. Der Verbraucher darf die Ware behalten, benutzen, verschenken oder wegwerfen. Ein Satz wie „Wenn Sie nicht binnen 14 Tagen zurücksenden, gilt der Vertrag als geschlossen“ ist rechtlich bedeutungslos (Fall 6), denn Schweigen ist keine Annahme.`)
    ] },
    { title: 'Dissens, §§ 154, 155', blocks: [
      p(`Ein Vertrag setzt voraus, dass sich die Erklärungen inhaltlich decken. Fehlt diese Übereinstimmung, spricht man von Dissens (Einigungsmangel).`),
      cmp('Schaubild: Offener vs. versteckter Dissens', ['', 'Offener Dissens, § 154', 'Versteckter Dissens, § 155'], [
        ['Merkmal', 'Die Parteien wissen, dass ein Punkt noch offen ist', 'Die Parteien glauben, sich geeinigt zu haben, tun es aber nicht'],
        ['Rechtsfolge', 'Im Zweifel kein Vertrag', 'Vertrag gilt, wenn er auch ohne den Punkt geschlossen worden wäre, sonst keiner'],
        ['Bei essentialia negotii (z. B. Preis)', 'kein Vertrag', 'kein Vertrag (Fall 3)']
      ]),
      st('Fall 3 Schritt für Schritt', [
        'Klebezettel :: Angebot des V über 350 €. Es ist durch das Ablegen am Arbeitsplatz zugegangen (§ 130 I 1).',
        'WhatsApp „300 €“ :: Keine Annahme, sondern Ablehnung verbunden mit einem neuen Angebot (§ 150 II). Damit ist das 350-€-Angebot erloschen (§ 146).',
        'Übergabe mit „Ich wusste, dass Du es nehmen würdest“ :: V meint, K habe 350 € akzeptiert. V kennt das 300-€-Angebot nicht und kann es deshalb nicht annehmen.',
        'K: „den vereinbarten Betrag“ :: K meint 300 €. Ein versteckter Dissens über den Preis (§ 155), also ein essentiale negotii: KEIN Kaufvertrag.',
        'Aber: Übereignung :: Beide wollten, dass K Eigentümer wird. Einigung und Übergabe liegen vor (§ 929 S. 1). Über den Preis muss sich die dingliche Einigung nicht verhalten. K ist Eigentümer (Abstraktionsprinzip, Modul 3).',
        'Ausgleich (Fall 4) :: K hat das Eigentum ohne Rechtsgrund erlangt, also besteht ein Anspruch des V auf Rückübereignung aus § 812 I 1 Alt. 1.'
      ])
    ] },
    { title: 'Geschäftsfähigkeit und Stellvertretung (Kurzüberblick)', blocks: [
      cmp('Schaubild: Altersstufen der Geschäftsfähigkeit', ['Alter', 'Status', 'Folge'], [
        ['0–6', 'geschäftsunfähig, § 104 Nr. 1', 'WE nichtig, § 105 I'],
        ['7–17', 'beschränkt geschäftsfähig, § 106', 'lediglich rechtlich vorteilhaft: wirksam (§ 107); sonst schwebend unwirksam, Genehmigung der Eltern (§ 108); Taschengeld (§ 110)'],
        ['ab 18', 'voll geschäftsfähig, § 2', 'wirksam']
      ]),
      s('Stellvertretung, § 164 I', [
        'Eigene WE des Vertreters :: Abgrenzung zum Boten, der nur eine fremde WE übermittelt',
        'Im Namen des Vertretenen :: Offenkundigkeit',
        'Mit Vertretungsmacht :: Vollmacht (§ 167) oder gesetzlich (Eltern, Organe)',
        'Rechtsfolge :: Die WE wirkt unmittelbar für und gegen den Vertretenen. Ohne Vertretungsmacht gelten §§ 177, 179.'
      ])
    ] }
  ],
  cases: [
    { n: 3, sv: SV3, q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 0, o: [
      ['K ist Eigentümer des Rechners geworden.', 'Richtig. Für § 929 S. 1 braucht es Einigung über den Eigentumsübergang und Übergabe. V überreicht das Gerät, damit K es zu eigen hat, und K nimmt es entgegen: Beide sind sich einig, dass K Eigentümer wird. V ist Eigentümer und damit berechtigt. Dass der Kaufvertrag am Preis scheitert, ist wegen des Abstraktionsprinzips unerheblich.'],
      ['V und K haben einen Kaufvertrag mit einem Kaufpreis von 350 € geschlossen.', 'Falsch. K hat das 350-€-Angebot nicht angenommen, sondern mit „300 €“ abgeändert. Das ist nach § 150 II eine Ablehnung verbunden mit einem neuen Angebot. Das ursprüngliche Angebot ist erloschen (§ 146).'],
      ['V und K haben sich auf einen Kaufpreis von 300 € geeinigt.', 'Falsch. V hat das 300-€-Angebot nie angenommen, er wusste nichts davon. Seine Erklärung bei der Übergabe bezog sich erkennbar auf seine eigenen 350 €. Es liegt ein versteckter Dissens über den Preis vor (§ 155), und weil der Preis ein essentiale negotii ist, kommt kein Kaufvertrag zustande.'],
      ['K ist noch nicht Eigentümer des Rechners geworden, weil eine Einigung noch aussteht.', 'Falsch. Es fehlt nur die schuldrechtliche Einigung (Kaufvertrag). Die dingliche Einigung, dass das Eigentum übergehen soll, liegt vor.']],
      lsg: ['1. Kaufvertrag? Das Angebot des V über 350 € ist durch den Zettel am Arbeitsplatz zugegangen (§ 130 I 1).', '2. Die WhatsApp „300 €“ ist eine modifizierte Annahme, also Ablehnung und neues Angebot (§ 150 II). Ob sie V zugegangen ist, kann offenbleiben, denn V hat sie jedenfalls nicht angenommen.', '3. Übergabe und „vereinbarter Betrag“: Jeder meint einen anderen Preis, also versteckter Dissens (§ 155) über ein essentiale negotii. Es gibt keinen Kaufvertrag.', '4. Übereignung (§ 929 S. 1): Einigung über den Eigentumsübergang liegt vor (die Übergabe hat genau diesen Sinn), die Übergabe auch, V ist berechtigt. K ist Eigentümer.', 'Ergebnis: a. Das ist das Abstraktionsprinzip in Reinform.'] },
    { n: 4, sv: 'Sachverhalt wie Fall 3.', q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 0, o: [
      ['K muss den Rechner an V herausgeben, wenn V das verlangt.', 'Richtig. K hat Eigentum und Besitz am Rechner durch Leistung des V erlangt, ohne rechtlichen Grund, weil kein Kaufvertrag besteht. Nach § 812 I 1 Alt. 1 muss er das Erlangte herausgeben, also den Rechner zurückübereignen und zurückgeben.'],
      ['K muss nichts an V herausgeben.', 'Falsch. Ohne Rechtsgrund darf K die Bereicherung nicht behalten.'],
      ['K muss den Rechner herausgeben und einen etwaigen Aufwendungsersatz leisten.', 'Falsch. Einen Aufwendungsersatz schuldet K nicht. Herauszugeben sind nur das Erlangte und gezogene Nutzungen (§ 818 I). Eher kann K umgekehrt eigene Verwendungen gegenrechnen.'],
      ['K muss dem V 350 € bezahlen.', 'Falsch. Ein Kaufpreisanspruch aus § 433 II setzt einen wirksamen Kaufvertrag voraus. Der fehlt (Dissens).']],
      lsg: ['Anspruchsgrundlagen der Reihe nach prüfen: § 433 II (Vertrag) scheitert am fehlenden Kaufvertrag.', '§ 985 (Herausgabe vom Besitzer an den Eigentümer) scheitert, weil V nicht mehr Eigentümer ist (Fall 3).', '§ 812 I 1 Alt. 1: (1) „etwas erlangt“, nämlich Eigentum und Besitz am Notebook. (2) „durch Leistung“, also durch bewusste und zweckgerichtete Mehrung fremden Vermögens durch V. (3) „ohne rechtlichen Grund“, denn es gibt keinen Kaufvertrag.', 'Rechtsfolge: Herausgabe des Erlangten, also Rückübereignung und Rückgabe. Ergebnis: a.'] },
    { n: 5, sv: 'Katarina (K) übernachtet in einem von Vincent (V) betriebenen Münchner Luxushotel. In ihrem Zimmer befindet sich eine Minibar. Auf einer Ablage über dieser Minibar klebt eine Preisliste, nach der u.a. eine 0,5-Literflasche Mineralwasser 4,50 EUR kosten soll. Nachts hat K Durst und trinkt kurzentschlossen ein Glas Wasser aus dieser Flasche. Dabei wird sie weder von V noch von sonst jemandem beobachtet. Bei der Abreise verlangt V, der von der leeren Flasche durch das Servicepersonal erfahren hat, von K Zahlung von 4,50 EUR.', q: 'Welche der nachfolgenden Aussagen ist richtig?', c: 1, o: [
      ['Das Bereitstellen des Mineralwassers in der Minibar ist eine invitatio ad offerendum des V.', 'Falsch. Eine invitatio liegt vor, wenn der Anbieter sich wegen begrenzten Vorrats oder unklarer Bonität nicht binden will. Bei der Minibar weiß V genau, wer im Zimmer ist und dass der Vorrat für diesen Gast bestimmt ist. Es liegt ein verbindliches Angebot vor.'],
      ['Der Zugang der Annahmeerklärung der K ist entbehrlich.', 'Richtig. K nimmt durch Trinken an, also durch Betätigung des Annahmewillens. Nach § 151 S. 1 ist der Zugang dieser Annahme entbehrlich, weil V als Hotelier nach der Verkehrssitte keine Erklärung des Gastes um Mitternacht erwartet.'],
      ['Das Bereitstellen des Mineralwassers in der Minibar ist eine Annahme des V auf den von K angebotenen Abschluss eines Kaufvertrages.', 'Falsch. Die Reihenfolge ist vertauscht. Das Bereitstellen kommt zeitlich vor jeder Erklärung der K und ist deshalb das Angebot.'],
      ['Die Annahmeerklärung der K ist nicht wirksam, da sie dem V nicht zugegangen ist.', 'Falsch. Das ist genau der Fall des § 151 S. 1, der Zugang ist entbehrlich.']],
      lsg: ['V könnte gegen K einen Anspruch auf 4,50 € aus § 433 II haben.', 'Angebot: Das Bereitstellen der Getränke mit Preisliste ist ein Angebot ad incertam personam an den jeweiligen Zimmergast. Es ist bestimmt (Ware, Preis) und mit Rechtsbindungswillen abgegeben.', 'Annahme: Das Trinken (Öffnen, Verbrauch) ist eine konkludente Annahme.', 'Zugang der Annahme: entbehrlich nach § 151 S. 1 (Verkehrssitte).', 'Ergebnis: Ein Kaufvertrag liegt vor, V kann 4,50 € verlangen. Richtig ist b.'] },
    { n: 6, sv: 'F erhält von dem ihm unbekannten Verlag V unbestellt das Buch „Als Deutschland noch eine Fußballmacht war“ zugesandt. Der Preis hierfür beträgt 50 Euro. In einem als Anlage beigefügten Schreiben heißt es, dass der Kaufpreis fällig ist, sofern F das Buch nicht innerhalb von 14 Tagen zurücksendet. Der Kaufvertrag gelte dann als geschlossen. F schaut kurz in das Buch rein, schwelgt in Erinnerungen, will aber das Buch nicht behalten. Er vergisst jedoch, das Buch innerhalb der 14 Tage zurückzusenden.', q: 'Kann der Verlag von F den Kaufpreis verlangen?', c: 1, o: [
      ['Ja, weil das Buch nicht rechtzeitig zurückgesandt wurde.', 'Falsch. Der Verlag kann einseitig nicht bestimmen, dass Untätigkeit als Annahme gilt. Schweigen ist keine Willenserklärung. Außerdem greift § 241a I.'],
      ['Nein, selbst dann nicht, wenn F das Buch seinem Opa zu Weihnachten geschenkt hat.', 'Richtig. Nach § 241a I wird durch die Lieferung unbestellter Waren durch einen Unternehmer an einen Verbraucher kein Anspruch gegen den Verbraucher begründet. Das gilt nach herrschender Meinung auch dann, wenn er die Sache nutzt oder weiterverschenkt. Selbst ein Verschenken ist hier nicht als konkludente Annahme zu werten, denn § 241a soll gerade verhindern, dass der Verbraucher durch Umgang mit der Ware in einen Vertrag gerät.'],
      ['Ja, weil F seine Ablehnung dem Verlag nicht mitgeteilt hat.', 'Falsch. Es gibt keine Pflicht, unbestellte Angebote abzulehnen.'],
      ['Nein, da F den Kaufvertrag anfechten kann.', 'Falsch. Das Ergebnis „Nein“ stimmt, die Begründung nicht: Es gibt gar keinen Vertrag, den man anfechten könnte.']],
      lsg: ['Anspruch aus § 433 II? Das Zusenden ist ein Angebot (Realofferte) des V.', 'Annahme: F schweigt. Schweigen ist grundsätzlich keine Annahme, und der Verlag kann das auch nicht einseitig fingieren.', 'Ergänzend: § 241a I, denn V ist Unternehmer und F Verbraucher. Ansprüche jeder Art sind ausgeschlossen, auch aus §§ 985, 812, 823.', 'Ergebnis: b. Merke: Antwort d hat das richtige Ergebnis, aber die falsche Begründung, und ist deshalb falsch.'] }
  ],
  pq: [
    { q: 'Definieren Sie den Zugang einer Willenserklärung unter Abwesenden.', a: 'Eine WE ist zugegangen (§ 130 I 1), wenn sie so in den Machtbereich des Empfängers gelangt ist, dass er unter normalen Umständen die Möglichkeit der Kenntnisnahme hat und mit dieser nach der Verkehrsanschauung zu rechnen ist. Tatsächliche Kenntnisnahme ist nicht erforderlich. Machtbereich sind z. B. Briefkasten, E-Mail-Postfach und Smartphone.' },
    { q: 'Ist die Auslage im Schaufenster ein Angebot? Begründen Sie.', a: 'Nein, sie ist nur eine invitatio ad offerendum, also eine Aufforderung an Kunden, ihrerseits Angebote abzugeben. Dem Händler fehlt der Rechtsbindungswille: Er will sich nicht gegenüber einer unbestimmten Vielzahl von Kunden binden, weil sein Vorrat begrenzt ist und er die Bonität der Käufer nicht kennt. Wäre die Auslage ein Angebot, müsste er sich bei jedem Kunden schadensersatzpflichtig machen, sobald die Ware ausverkauft ist.' },
    { q: 'Was ist eine modifizierte Annahme, und welche Rechtsfolge hat sie?', a: 'Eine Annahme unter Erweiterungen, Einschränkungen oder sonstigen Änderungen, z. B. „für 300 € statt 350 €“. Nach § 150 II gilt sie als Ablehnung des ursprünglichen Angebots, verbunden mit einem neuen Angebot. Das alte Angebot erlischt (§ 146). Ein Vertrag kommt nur zustande, wenn der ursprüngliche Anbietende das neue Angebot annimmt.' }
  ],
  cards: [
    ['Willenserklärung?', 'Eine Willensäußerung, die unmittelbar auf eine Rechtsfolge gerichtet ist. Objektiv: äußerer Tatbestand. Subjektiv: Handlungswille, Erklärungsbewusstsein, Geschäftswille.'],
    ['Fehlendes Erklärungsbewusstsein?', 'Die WE ist wirksam, wenn der Erklärende es bei verkehrsüblicher Sorgfalt hätte erkennen können. Er kann analog § 119 I anfechten.'],
    ['Zugang?', 'Machtbereich des Empfängers und Möglichkeit der Kenntnisnahme unter normalen Umständen.'],
    ['essentialia negotii beim Kauf?', 'Parteien, Kaufsache, Preis.'],
    ['invitatio ad offerendum?', 'Eine Aufforderung zur Abgabe von Angeboten, z. B. Schaufenster, Katalog oder Webshop.'],
    ['§ 150 II?', 'Annahme mit Änderungen ist Ablehnung und neues Angebot.'],
    ['§ 151 S. 1?', 'Die Annahme ist nötig, ihr Zugang aber entbehrlich (Verkehrssitte oder Verzicht), z. B. die Minibar.'],
    ['Schweigen?', 'Grundsätzlich keine WE. Ausnahmen: § 362 HGB, kaufmännisches Bestätigungsschreiben.'],
    ['§ 241a?', 'Unbestellte Ware vom Unternehmer an einen Verbraucher begründet keinerlei Ansprüche gegen den Verbraucher.'],
    ['Versteckter Dissens?', '§ 155: Die Parteien glauben, sich einig zu sein, sind es aber nicht. Betrifft es ein essentiale negotii, gibt es keinen Vertrag.']
  ]
};

W[6] = {
  src: 'Skript S. 4 („Vertragsschluss“, „Inhalt von Verträgen“) · §§ 125–129, 516 ff.', title: 'Form & Schenkung',
  intro: `Im deutschen Recht gilt der Grundsatz der Formfreiheit: Verträge können mündlich, per Handschlag oder durch schlüssiges Verhalten geschlossen werden. Nur wo das Gesetz es ausdrücklich verlangt, ist eine Form nötig. Die Schenkung ist das Lieblingsbeispiel der Prüfer, weil sich an ihr Formzweck, Nichtigkeit und Heilung perfekt zeigen lassen.`,
  ziel: 'Die gesetzlichen Formarten und ihre Zwecke kennen, Formnichtigkeit und Heilung prüfen, Handschenkung und Schenkungsversprechen unterscheiden.',
  relevanz: 'Hoch. Die Formfragen kommen auch bei Grundstück (§ 311b), Bürgschaft (§ 766) und Kündigung (§ 623) vor.',
  faelle: 'Fälle 7 und 8',
  sections: [
    { title: 'Formfreiheit und gesetzliche Formen', blocks: [
      p(`Formfreiheit ist Teil der Privatautonomie (Art. 2 I GG). Eine Form ist nur nötig, wenn das Gesetz sie vorschreibt (gesetzliche Form) oder die Parteien sie vereinbaren (gewillkürte Form, § 127).`),
      cmp('Schaubild: Die Formarten von leicht nach streng', ['Form', 'Norm', 'Anforderungen', 'Beispiel'], [
        ['Textform', '§ 126b', 'lesbare Erklärung auf dauerhaftem Datenträger, Person des Erklärenden genannt, keine Unterschrift', 'E-Mail, Widerrufsbelehrung'],
        ['Schriftform', '§ 126', 'Urkunde mit eigenhändiger Unterschrift', 'Bürgschaft § 766, Kündigung Arbeitsverhältnis § 623'],
        ['Elektronische Form', '§ 126a', 'qualifizierte elektronische Signatur, ersetzt die Schriftform (nicht immer: § 766 S. 2, § 623)', 'selten'],
        ['Öffentliche Beglaubigung', '§ 129', 'Notar bestätigt die Echtheit der Unterschrift, nicht den Inhalt', 'Handelsregisteranmeldung'],
        ['Notarielle Beurkundung', '§ 128', 'Notar liest vor, belehrt, beurkundet', 'Grundstück § 311b I, Schenkungsversprechen § 518 I, GmbH-Anteile § 15 GmbHG']
      ]),
      l('Die Zwecke der Form', [
        'Warnfunktion :: schützt vor übereilten, riskanten Geschäften (Bürgschaft, Schenkungsversprechen)',
        'Beweisfunktion :: Klarheit darüber, was vereinbart wurde (Mietvertrag über mehr als 1 Jahr, § 550)',
        'Beratungsfunktion :: Der Notar belehrt neutral (§ 17 BeurkG), z. B. beim Grundstückskauf',
        'Kontrollfunktion :: Behörden können prüfen (Grunderwerbsteuer)'
      ]),
      fl('Schaubild: Prüfung eines Formmangels', ['Formvorschrift? :: Gesetz oder Vereinbarung', 'Eingehalten? :: Form vollständig erfüllt', 'Wenn nein: § 125 S. 1 :: Rechtsgeschäft NICHTIG', 'Heilung? :: z. B. §§ 311b I 2, 518 II, 766 S. 3'])
    ] },
    { title: 'Heilung von Formmängeln', blocks: [
      p(`Bei manchen Formvorschriften lässt das Gesetz den Formmangel durch Erfüllung heilen. Die Logik dahinter ist teleologisch: Wenn der Zweck der Form, etwa die Warnung vor einem übereilten Versprechen, sich erledigt hat, weil tatsächlich geleistet wurde, ist kein Schutz mehr nötig.`),
      cmp('Schaubild: Heilungstatbestände', ['Geschäft', 'Form', 'Heilung durch'], [
        ['Grundstückskauf', '§ 311b I 1: notariell', 'Auflassung + Eintragung, § 311b I 2'],
        ['Schenkungsversprechen', '§ 518 I: notariell', 'Bewirkung der Leistung, § 518 II'],
        ['Bürgschaft', '§ 766 S. 1: schriftlich', 'Erfüllung der Hauptverbindlichkeit durch den Bürgen, § 766 S. 3'],
        ['Verbraucherdarlehen', '§ 492: schriftlich', 'Empfang des Darlehens, § 494 II (mit Zinsfolgen)']
      ]),
      f('Klausurfalle', `Die Heilung wirkt nicht rückwirkend, sie macht das Geschäft für die Zukunft wirksam. Für Rückforderungsfragen ist entscheidend: Nach der Heilung liegt ein Rechtsgrund vor. § 812 scheidet also aus (Fall 8).`)
    ] },
    { title: 'Die Schenkung, §§ 516 ff.', blocks: [
      m(`Schenkung, § 516 I = eine Zuwendung, durch die jemand aus seinem Vermögen einen anderen bereichert, wenn beide Teile darüber einig sind, dass die Zuwendung unentgeltlich erfolgt.`),
      p(`Die Schenkung ist ein Vertrag, also ein zweiseitiges Rechtsgeschäft (zwei Willenserklärungen). Sie ist aber nur einseitig verpflichtend, denn nur der Schenker muss leisten. Diese Unterscheidung ist eine beliebte Falle (Fall 7 a, Fall 8 d).`),
      cmp('Schaubild: Handschenkung vs. Schenkungsversprechen', ['', 'Handschenkung', 'Schenkungsversprechen'], [
        ['Ablauf', 'Einigung und sofortige Leistung fallen zusammen', 'Versprechen jetzt, Leistung später'],
        ['Form', 'formfrei', 'notarielle Beurkundung, § 518 I'],
        ['Fehlt die Form?', '-', 'nichtig, § 125 S. 1, aber Heilung durch Bewirkung, § 518 II'],
        ['Beispiel', 'Oma gibt 500 € bar in die Hand (Fall 8)', 'Oma verspricht 500 € für die bestandene Klausur (Fall 7)']
      ]),
      l('Weitere Schenkungsregeln', [
        'Haftungsprivileg, § 521 :: Der Schenker haftet nur für Vorsatz und grobe Fahrlässigkeit.',
        'Mängel, §§ 523, 524 :: Gehaftet wird nur bei Arglist.',
        'Rückforderung wegen Verarmung, § 528 :: Kann der Schenker seinen eigenen Unterhalt nicht mehr bestreiten.',
        'Widerruf wegen groben Undanks, § 530 :: Nur bei einer schweren Verfehlung gegen den Schenker, die eine tadelnswerte Gesinnung offenbart (z. B. Bedrohung, schwere Beleidigung). Dass jemand das Geld anders ausgibt, als der Schenker es sich wünscht, ist kein grober Undank (Fall 8).',
        'Abgrenzung :: Eine Gefälligkeit (Mitnahme im Auto) ist mangels Rechtsbindungswillen keine Schenkung. Ein Belohnungsversprechen unter Bedingung („wenn du bestehst“) bleibt Schenkung, denn das Bestehen ist keine Gegenleistung für die Großmutter.'
      ]),
      st('Fall 7 und Fall 8 im Vergleich', [
        'Fall 7: Versprechen :: Die Großmutter verspricht mündlich 500 €, aufschiebend bedingt durch das Bestehen der Klausur (§ 158 I). Das ist ein Schenkungsversprechen.',
        'Fall 7: Form :: Notarielle Beurkundung fehlt, also ist das Versprechen nichtig (§§ 518 I, 125 S. 1). Die Enkelin kann NICHT zahlen verlangen.',
        'Fall 8: Leistung :: Die Großmutter übergibt die 500 € sofort. Damit ist die Leistung bewirkt, und der Formmangel ist geheilt (§ 518 II).',
        'Fall 8: Rückforderung? :: Nach § 812 I 1 Alt. 1 nicht möglich, weil der Rechtsgrund (geheilte Schenkung) besteht. Nach § 530 nicht möglich, weil die Einladung des Freundes kein grober Undank ist.'
      ])
    ] }
  ],
  cases: [
    { n: 7, sv: 'Die Großmutter verspricht ihrer 21-jährigen Enkelin 500 Euro, wenn sie die Klausur im Wirtschaftsprivatrecht endlich besteht. Tatsächlich schafft die Enkelin die Klausur. Als die Enkelin die Großmutter an ihr Versprechen erinnert, verweigert diese die Zahlung. Sie wollte die Enkelin nur motivieren.', q: 'Kann die Enkelin die 500 Euro von der Großmutter verlangen?', c: 2, o: [
      ['Nein, da die Schenkung kein zweiseitiges Rechtsgeschäft ist.', 'Falsch. Das Ergebnis stimmt, die Begründung nicht. Die Schenkung ist ein Vertrag, also ein zweiseitiges Rechtsgeschäft. Sie ist nur einseitig verpflichtend.'],
      ['Ja, da ein wirksamer Schenkungsvertrag geschlossen wurde.', 'Falsch. Das Schenkungsversprechen ist formnichtig (§§ 518 I, 125 S. 1).'],
      ['Nein, da das Schenkungsversprechen notariell beurkundet hätte werden müssen.', 'Richtig. § 518 I 1 verlangt die notarielle Beurkundung des Versprechens. Ohne sie ist es nichtig (§ 125 S. 1). Eine Heilung nach § 518 II ist nicht eingetreten, weil noch nicht geleistet wurde.'],
      ['Ja, da das Schenkungsversprechen eine sittliche Pflicht darstellt.', 'Falsch. Eine sittliche Pflicht ersetzt nicht die Form. § 534 betrifft nur Ausnahmen bei Rückforderung und Widerruf von Pflicht- und Anstandsschenkungen.']],
      lsg: ['Anspruchsgrundlage: § 516 I in Verbindung mit dem Schenkungsversprechen.', 'Einigung: Großmutter und Enkelin einigen sich über eine unentgeltliche Zuwendung, aufschiebend bedingt durch das Bestehen (§ 158 I). Eine Gegenleistung zugunsten der Großmutter liegt nicht vor, deshalb bleibt es eine Schenkung. Die Motivationsabsicht der Großmutter ist ein bloßer Vorbehalt und unbeachtlich (§ 116 S. 1).', 'Form: § 518 I verlangt notarielle Beurkundung, die nicht vorliegt. Das Versprechen ist nichtig (§ 125 S. 1).', 'Heilung (§ 518 II): Es wurde noch nicht geleistet.', 'Ergebnis: c.'] },
    { n: 8, sv: 'Wie Fall 7, nur hat sich die Großmutter über die bestandene Klausur so gefreut, dass sie der Enkelin nach der erfreulichen Mitteilung sofort die 500 Euro übergibt mit den Worten, sie solle sich was Schönes leisten. Als die Großmutter jedoch erfuhr, dass die Enkelin ihren ungeliebten Freund zu einem Spa-Wochenende einlud, verlangt sie die 500 Euro wieder zurück.', q: 'Zu Recht?', c: 1, o: [
      ['Ja, da das Schenkungsversprechen formunwirksam ist und die 500 Euro daher ohne rechtlichen Grund geleistet wurden und nach § 812 I zurückgefordert werden können.', 'Falsch. Der Formmangel ist durch die Bewirkung der Leistung geheilt (§ 518 II). Damit besteht ein Rechtsgrund.'],
      ['Nein, da der Formmangel geheilt wurde und die 500 Euro daher mit rechtlichem Grund geleistet wurden und somit nicht nach § 812 I zurückgefordert werden können.', 'Richtig. Mit der Übergabe des Geldes ist die versprochene Leistung bewirkt, und der Mangel der Form wird geheilt (§ 518 II). Die Schenkung ist der Rechtsgrund für die Zahlung, also scheidet § 812 aus. Auch ein Widerruf nach § 530 scheitert, weil die Einladung des Freundes kein grober Undank gegenüber der Großmutter ist. Ebenso tragbar ist die Lösung als Handschenkung: Sie ist ohnehin formfrei.'],
      ['Ja, da das fehlende Formerfordernis aufgrund seiner Warnfunktion nicht geheilt werden kann.', 'Falsch. Gerade weil die Warnfunktion mit der tatsächlichen Leistung erfüllt ist (die Großmutter spürt das Opfer), lässt § 518 II die Heilung zu.'],
      ['Ja, da die Großmutter ja nur eine einseitige Verpflichtung eingegangen ist, die sie jederzeit und ohne Grund widerrufen kann.', 'Falsch. „Einseitig verpflichtend“ heißt nicht „frei widerruflich“. Ein Widerruf ist nur unter den engen Voraussetzungen der §§ 530 ff. möglich.']],
      lsg: ['Anspruchsgrundlage: § 812 I 1 Alt. 1 (Leistungskondiktion) oder §§ 530, 531 II, 812 (Widerruf).', 'Rechtsgrund: Das Schenkungsversprechen war formnichtig, ist aber durch die Übergabe geheilt (§ 518 II). Damit besteht ein Rechtsgrund.', 'Widerruf § 530: Eine schwere Verfehlung gegen die Schenkerin fehlt. Wie die Enkelin das Geld verwendet, steht ihr frei („etwas Schönes leisten“).', 'Ergebnis: b.'] }
  ],
  pq: [
    { q: 'Welche Formarten kennt das BGB? Ordnen Sie Beispiele zu.', a: 'Textform (§ 126b), z. B. die Widerrufsbelehrung. Schriftform (§ 126, eigenhändige Unterschrift), z. B. Bürgschaft (§ 766) und Kündigung des Arbeitsverhältnisses (§ 623). Elektronische Form (§ 126a, qualifizierte Signatur). Öffentliche Beglaubigung (§ 129), z. B. Handelsregisteranmeldungen. Notarielle Beurkundung (§ 128), z. B. Grundstücksverträge (§ 311b I) und Schenkungsversprechen (§ 518 I). Ein Verstoß führt nach § 125 S. 1 zur Nichtigkeit.' },
    { q: 'Erläutern Sie die Heilung nach § 518 II und ihren Grund.', a: 'Ein formnichtiges Schenkungsversprechen wird durch die Bewirkung der versprochenen Leistung wirksam. Der Zweck des § 518 I ist vor allem, den Schenker vor übereilten Versprechen zu warnen. Wenn er die Leistung tatsächlich erbringt, hat sich dieses Schutzbedürfnis erledigt. Die Heilung schafft einen Rechtsgrund, sodass eine Rückforderung nach § 812 ausscheidet.' }
  ],
  cards: [
    ['Grundsatz der Form?', 'Formfreiheit. Eine Form ist nur nötig, wenn das Gesetz oder die Parteien sie verlangen.'],
    ['Folge eines Formverstoßes?', '§ 125 S. 1: Nichtigkeit.'],
    ['Textform?', '§ 126b: dauerhafter Datenträger, Name genannt, keine Unterschrift.'],
    ['Schriftform?', '§ 126: eigenhändige Unterschrift.'],
    ['Notarielle Beurkundung: Beispiele?', '§ 311b I Grundstück, § 518 I Schenkungsversprechen, § 15 GmbHG.'],
    ['Schenkung?', '§ 516: unentgeltliche Zuwendung. Ein Vertrag (zweiseitig), aber einseitig verpflichtend.'],
    ['§ 518 II?', 'Heilung des formnichtigen Schenkungsversprechens durch Bewirkung der Leistung.'],
    ['§ 530?', 'Widerruf der Schenkung nur bei grobem Undank, also einer schweren Verfehlung gegen den Schenker.']
  ]
};

W[7] = {
  src: 'Skript S. 11 (§§ 142 I, 119 II) · §§ 119–124, 142–144', title: 'Anfechtung & Widerruf',
  intro: `Die Anfechtung erlaubt es, sich von einer Willenserklärung zu lösen, die auf einem beachtlichen Willensmangel beruht. Sie ist das Ventil zwischen Vertragstreue („pacta sunt servanda“) und Selbstbestimmung. Weil das Gesetz den Vertragspartner schützen will, sind die Gründe eng und die Fristen streng. Dazu klären wir, wie sich Anfechtung, Widerruf, Rücktritt und Kündigung unterscheiden.`,
  ziel: 'Die Anfechtung in fünf Schritten prüfen, Inhalts-, Erklärungs-, Eigenschafts- und Motivirrtum unterscheiden, die richtigen Fristen anwenden und § 122 einordnen.',
  relevanz: 'Sehr hoch. Fristen und Motivirrtum sind Klassiker in MC-Klausuren.',
  faelle: 'Fälle 9, 10, 11 und 12',
  sections: [
    { title: 'Das Prüfungsschema', blocks: [
      fl('Schaubild: Anfechtung in fünf Schritten', ['1. Anfechtbare WE', '2. Anfechtungsgrund :: §§ 119, 120, 123', '3. Erklärung :: § 143, gegenüber dem Gegner', '4. Frist :: § 121 oder § 124', '5. Kein Ausschluss :: z. B. § 144 Bestätigung']),
      s('Erläuterung', [
        'Anfechtbare Willenserklärung :: Es muss eine wirksame WE vorliegen. Eine nichtige WE (z. B. § 105) kann man nicht anfechten, nach herrschender Lehre der „Doppelwirkung“ aber doch, wenn nützlich.',
        'Anfechtungsgrund :: Irrtum (§ 119 I, II), falsche Übermittlung (§ 120), arglistige Täuschung oder widerrechtliche Drohung (§ 123).',
        'Anfechtungserklärung, § 143 :: Eine einseitige, empfangsbedürftige WE gegenüber dem Anfechtungsgegner, also dem Vertragspartner. Das Wort „anfechten“ ist nicht nötig, der Wille, das Geschäft wegen eines Willensmangels nicht gelten zu lassen, muss aber erkennbar sein. Zugang nach § 130 ist nötig (Fall 11 d).',
        'Anfechtungsfrist :: § 121 (Irrtum, Übermittlung): unverzüglich, also ohne schuldhaftes Zögern, nach Kenntnis. § 124 (Täuschung, Drohung): innerhalb eines Jahres ab Entdeckung bzw. Ende der Zwangslage. Jeweils absolute Grenze 10 Jahre.',
        'Kein Ausschluss :: z. B. Bestätigung (§ 144) oder Vorrang der Gewährleistung nach Gefahrübergang (bei § 119 II wegen Sachmangel).'
      ]),
      m(`Rechtsfolge, § 142 I: Das angefochtene Rechtsgeschäft ist als von Anfang an nichtig anzusehen (ex tunc). Ausgleich erfolgt über §§ 812 ff. Bei Anfechtung nach §§ 119, 120 kommt Schadensersatz nach § 122 hinzu.`)
    ] },
    { title: 'Die Anfechtungsgründe', blocks: [
      cmp('Schaubild: Irrtumsarten', ['Irrtum', 'Norm', 'Was passiert?', 'Beispiel'], [
        ['Erklärungsirrtum', '§ 119 I Alt. 2', 'Man erklärt etwas, was man so nicht erklären wollte (Versprechen, Verschreiben, Vertippen)', 'Tippt 1.000 statt 100 €'],
        ['Inhaltsirrtum', '§ 119 I Alt. 1', 'Man erklärt, was man will, irrt aber über die Bedeutung', 'Bestellt „25 Gros Rollen“ im Glauben, Gros heiße „groß“ (es heißt 144 Stück)'],
        ['Eigenschaftsirrtum', '§ 119 II', 'Irrtum über verkehrswesentliche Eigenschaften einer Person oder Sache', 'Bild für Original gehalten; Buchhalter wegen Unterschlagung vorbestraft'],
        ['Übermittlungsirrtum', '§ 120', 'Der Bote übermittelt falsch', 'Bote sagt „Kauf“ statt „Miete“'],
        ['Arglistige Täuschung', '§ 123 I Alt. 1', 'Bewusste Täuschung, die zur WE führt', 'Unfallwagen als unfallfrei verkauft (Fall 12)'],
        ['Widerrechtliche Drohung', '§ 123 I Alt. 2', 'Inaussichtstellen eines Übels', '„Unterschreib, sonst …“']
      ]),
      f('Der unbeachtliche Motivirrtum', `Ein Irrtum über die Beweggründe (Motive) für eine Erklärung berechtigt NICHT zur Anfechtung. Wer ein Geschenk kauft, weil er glaubt, der Beschenkte möge es, kann nicht anfechten, wenn das nicht stimmt (Fall 10). Das Risiko, dass die eigenen Erwartungen falsch sind, trägt jeder selbst. Einzige gesetzliche Ausnahme ist § 119 II, der ein besonders wichtiger Motivirrtum ist.`),
      l('Verkehrswesentliche Eigenschaften, § 119 II', [
        'Was zählt? :: Alle wertbildenden Faktoren, die der Sache unmittelbar anhaften und dauerhaft sind: Echtheit, Alter, Material, Bebaubarkeit eines Grundstücks. Bei Personen: Vertrauenswürdigkeit, Sachkunde, Vorstrafen, sofern für das Geschäft relevant.',
        'Was zählt NICHT? :: Der Wert oder Preis selbst. Wer zu teuer kauft, hat Pech.',
        'Auch die Person :: § 119 II nennt ausdrücklich die Eigenschaft „der Person“. Die Option „Irrtum über eine verkehrswesentliche Eigenschaft einer Person ist ein unbeachtlicher Motivirrtum“ ist deshalb falsch (Fall 11 c).'
      ]),
      tf('Schnelltest: Anfechtbar?', [
        ['K kauft ein Bild für 5.000 € und merkt später, dass es nur 2.000 € wert ist.', false, 'Irrtum über den Wert ist unbeachtlich (kein Eigenschaftsirrtum).'],
        ['K kauft ein Bild als Original, es ist eine Kopie.', true, 'Echtheit ist eine verkehrswesentliche Eigenschaft (§ 119 II).'],
        ['K bestellt online 10 Stück, wollte aber 1 Stück.', true, 'Erklärungsirrtum (Vertippen), § 119 I Alt. 2.'],
        ['M kauft ein Spielzeug für den Sohn, der kein Interesse mehr hat.', false, 'Motivirrtum, unbeachtlich (Fall 10).']
      ])
    ] },
    { title: 'Fristen und Schadensersatz', blocks: [
      cmp('Schaubild: Anfechtungsfristen', ['', '§ 121', '§ 124'], [
        ['Für', 'Irrtum § 119, Übermittlung § 120', 'Täuschung, Drohung § 123'],
        ['Frist', 'unverzüglich = ohne schuldhaftes Zögern (§ 121 I 1), i. d. R. max. ca. 2 Wochen', '1 Jahr'],
        ['Beginn', 'Kenntnis vom Anfechtungsgrund', 'Entdeckung der Täuschung bzw. Ende der Zwangslage'],
        ['Absolute Grenze', '10 Jahre (§ 121 II)', '10 Jahre (§ 124 III)'],
        ['Schadensersatz § 122?', 'ja', 'nein (der Täuschende verdient keinen Schutz)']
      ]),
      s('Schadensersatz, § 122', [
        'Voraussetzung :: Anfechtung nach §§ 119 oder 120 (nicht § 123!)',
        'Kein Verschulden nötig :: Es ist eine Veranlassungshaftung: Wer sich irrt, hat den Schein gesetzt und muss dafür einstehen (Fall 11 a).',
        'Umfang :: Vertrauensschaden (negatives Interesse): Der Gegner wird so gestellt, als hätte er nie von dem Geschäft gehört, z. B. Transportkosten oder ein ausgeschlagenes Alternativangebot. Begrenzt durch das Erfüllungsinteresse.',
        'Ausschluss, § 122 II :: Der Geschädigte kannte den Grund der Nichtigkeit oder kannte ihn infolge Fahrlässigkeit nicht.'
      ]),
      qc('Kurz-Check: K entdeckt am 02.02., dass V ihn über die Unfallfreiheit arglistig getäuscht hat. Bis wann kann er anfechten?', 'Bis zum 02.02. des Folgejahres (§ 124 I, II). Eine Anfechtung am 03.08. desselben Jahres ist also rechtzeitig (Fall 12). § 121 („unverzüglich“) gilt NICHT für § 123.')
    ] },
    { title: 'Anfechtung, Widerruf, Rücktritt, Kündigung', blocks: [
      cmp('Schaubild: Vier Wege aus dem Vertrag', ['', 'Anfechtung', 'Widerruf', 'Rücktritt', 'Kündigung'], [
        ['Grund', 'Willensmangel bei Vertragsschluss', 'Verbraucherschutz (Fernabsatz, Haustür), kein Grund nötig', 'Pflichtverletzung (z. B. Mangel) oder vertraglich vereinbart', 'Ende eines Dauerschuldverhältnisses'],
        ['Norm', '§§ 119 ff., 142', '§§ 312g, 355', '§§ 323, 326 V, 437 Nr. 2', 'z. B. §§ 543, 573, 620 ff.'],
        ['Wirkung', 'ex tunc nichtig', 'Rückabwicklung (§ 357)', 'Rückabwicklung (§ 346)', 'ex nunc (für die Zukunft)'],
        ['Fristsetzung?', 'nein', 'nein', 'ja, grundsätzlich', 'teilweise'],
        ['Stationärer Kauf, Ware gefällt nicht', 'nein (Motivirrtum)', 'nein (kein Fernabsatz)', 'nein (kein Mangel)', 'nein']
      ]),
      f('„Umtausch“ ist Kulanz', `Ein Recht zum Umtausch nicht mangelhafter Ware, die im Laden gekauft wurde, gibt es NICHT. Viele Händler gewähren es freiwillig (Kulanz) oder vertraglich. Ohne eine solche Abrede hat M in Fall 10 keine Rechte.`)
    ] }
  ],
  cases: [
    { n: 9, q: 'Eine fristgerecht erklärte Anfechtung einer Willenserklärung (WE) führt in der Regel dazu (ein Anfechtungsgrund ist zu unterstellen), dass:', c: 2, o: [
      ['Die WE ab dem Zeitpunkt der Anfechtungserklärung nichtig ist.', 'Falsch. Das wäre eine Wirkung ex nunc (wie bei der Kündigung). § 142 I ordnet die Nichtigkeit von Anfang an an.'],
      ['Die WE nur dann nichtig wird, wenn der Anfechtende den Irrtum nicht verschuldet hat.', 'Falsch. Verschulden spielt keine Rolle. Auch wer sich fahrlässig irrt, kann anfechten. Er haftet dann aber verschuldensunabhängig nach § 122.'],
      ['Die WE rückwirkend, d. h. von Anfang an nichtig ist.', 'Richtig. § 142 I: „ist als von Anfang an nichtig anzusehen“ (ex tunc).'],
      ['Auch der Vertragspartner seine WE anfechten kann.', 'Falsch. Das Anfechtungsrecht steht nur dem zu, der sich geirrt hat oder getäuscht wurde. Mit der Nichtigkeit der einen WE fällt der Vertrag ohnehin, eine Anfechtung des Gegners ist überflüssig.']],
      lsg: ['Norm: § 142 I.', 'Wortlaut lesen: „von Anfang an nichtig“, also ex tunc.', 'Ergebnis: c.'] },
    { n: 10, sv: 'Mia M, Mutter des Maik, kauft für ihn zu Weihnachten bei Golo G im Einkaufszentrum der Stadt diverse Star Wars Figuren, mit denen er früher einmal sehr gern gespielt hat. Jetzt ist Maik 16 Jahre alt und sein Interesse an Star Wars Figuren nahe Null. M will daher die Figuren an G zurückgeben.', q: 'Welche der nachfolgenden Antworten ist richtig?', c: 3, o: [
      ['M kann den Kaufvertrag anfechten, weil sie sich über Maiks Vorlieben getäuscht hat.', 'Falsch. Das ist ein reiner Motivirrtum: M wusste genau, was sie kaufte, sie irrte nur über ihre Beweggründe. Er ist unbeachtlich. Eine Täuschung durch G liegt nicht vor.'],
      ['M kann vom Vertrag mit G zurücktreten, muss vorher dem G aber eine Frist setzen.', 'Falsch. Ein Rücktritt nach §§ 437 Nr. 2, 323 setzt einen Mangel voraus. Die Figuren sind mangelfrei, sie gefallen nur nicht.'],
      ['M kann binnen 14 Tagen ab Vertragsschluss den Vertrag widerrufen.', 'Falsch. Ein Widerrufsrecht besteht nur bei Fernabsatz- oder Außergeschäftsraumverträgen (§ 312g I). M hat im Einkaufszentrum, also im Geschäftslokal des G, gekauft.'],
      ['M hat G gegenüber insoweit keine Rechte.', 'Richtig. Weder Anfechtung noch Rücktritt noch Widerruf greifen. M bleibt nur die Bitte um Kulanz.']],
      lsg: ['Anfechtung: Möglich wäre § 119 II, aber die Vorlieben des Sohnes sind keine Eigenschaft der Kaufsache. Es bleibt ein unbeachtlicher Motivirrtum.', 'Rücktritt: Es fehlt ein Mangel (§ 434).', 'Widerruf: Kein Fernabsatzvertrag (§ 312c) und kein Außergeschäftsraumvertrag (§ 312b), sondern ein stationärer Handel. Kein Widerrufsrecht.', 'Ergebnis: d.'] },
    { n: 11, q: 'Welche der folgenden Aussagen ist richtig?', c: 0, o: [
      ['Die Schadensersatzpflicht des Anfechtenden nach § 122 BGB setzt kein Verschulden des Erklärenden voraus.', 'Richtig. § 122 ist eine verschuldensunabhängige Vertrauenshaftung (Veranlassungsprinzip). Der Erklärende hat den Rechtsschein gesetzt und muss den Vertrauensschaden ersetzen, auch wenn ihn kein Vorwurf trifft.'],
      ['Auch im Falle der Anfechtung wegen Täuschung oder Drohung besteht ein Schadensersatzanspruch aus § 122 BGB.', 'Falsch. § 122 I nennt ausdrücklich nur die Anfechtung nach §§ 119, 120. Es wäre absurd, wenn der Getäuschte dem Täuschenden Schadensersatz schulden würde.'],
      ['Der Irrtum über eine verkehrswesentliche Eigenschaft einer Person ist ein unbeachtlicher Motivirrtum, der nicht zur Anfechtung führen kann.', 'Falsch. § 119 II nennt ausdrücklich Eigenschaften „der Person oder der Sache“. Das ist der gesetzlich anerkannte, ausnahmsweise beachtliche Motivirrtum.'],
      ['Die Anfechtungserklärung ist eine einseitige, nicht empfangsbedürftige Willenserklärung, so dass es eines Zugangs nach § 130 Abs. 1 BGB nicht bedarf.', 'Falsch. Sie ist einseitig, aber empfangsbedürftig, denn sie erfolgt „gegenüber dem Anfechtungsgegner“ (§ 143 I). Sie muss zugehen.']],
      lsg: ['a) Wortlaut des § 122 I: Er enthält kein Verschuldenselement. Richtig.', 'b) § 122 I verweist nur auf §§ 119, 120. Falsch.', 'c) § 119 II: „der Person oder der Sache“. Falsch.', 'd) § 143 I („gegenüber dem Anfechtungsgegner“) und § 130. Falsch.'] },
    { n: 12, sv: 'K hat am 02.01.2022 bei V einen gebrauchten Golf gekauft. Dabei hat K den V ausdrücklich gefragt, ob der Golf unfallfrei sei, was V wahrheitswidrig bejahte, obwohl er positiv wusste, dass der Golf einen schweren Verkehrsunfall hatte. Anlässlich einer TÜV-Abnahme am 02.02.2022 wird entdeckt, und K daraufhin vom TÜV-Mitarbeiter erstmals erklärt, dass der Golf ein Unfallfahrzeug ist. Erst am 03.08.2022 erklärt K die Anfechtung des Kaufvertrages gegenüber V wegen arglistiger Täuschung.', q: 'Diese Anfechtung ist', c: 0, o: [
      ['wirksam.', 'Richtig. Anfechtungsgrund ist eine arglistige Täuschung (§ 123 I Alt. 1): V hat auf eine ausdrückliche Frage bewusst gelogen, und K hat deshalb gekauft. Die Frist beträgt nach § 124 I ein Jahr ab Entdeckung (§ 124 II), also vom 02.02.2022 bis zum 02.02.2023. Die Anfechtung am 03.08.2022 ist fristgerecht.'],
      ['unwirksam, weil kein Anfechtungsgrund vorliegt.', 'Falsch. Eine bewusste Lüge über die Unfallfreiheit auf ausdrückliche Nachfrage ist der Paradefall der arglistigen Täuschung.'],
      ['unwirksam, da K erst nach über 6 Monaten nach Entdeckung der Täuschung durch V, also nicht unverzüglich im Sinne von § 121 Abs. 1 BGB, die Anfechtung erklärt hat.', 'Falsch. § 121 gilt nur für §§ 119, 120. Für § 123 gilt die Jahresfrist des § 124. Das ist die eigentliche Falle der Aufgabe.'],
      ['schwebend unwirksam.', 'Falsch. Schwebende Unwirksamkeit ist eine Kategorie z. B. für Verträge Minderjähriger (§ 108). Eine Anfechtung ist entweder wirksam oder nicht.']],
      lsg: ['Anfechtbare WE: die Kaufvertragserklärung des K.', 'Grund: § 123 I Alt. 1. Täuschung über Tatsachen (Unfallfreiheit), Irrtum des K, Kausalität für den Kaufentschluss, Arglist (V wusste es positiv).', 'Erklärung: gegenüber V (§ 143 I, II).', 'Frist: § 124 I, II, ein Jahr ab Entdeckung am 02.02.2022, eingehalten.', 'Ergebnis: Die Anfechtung ist wirksam, der Kaufvertrag nichtig ab Anfang (§ 142 I), Rückabwicklung über § 812. Daneben bestehen Gewährleistungsrechte, weil § 123 nicht durch §§ 434 ff. verdrängt wird. Richtig ist a.'] }
  ],
  pq: [
    { q: 'Grenzen Sie den Inhaltsirrtum vom Erklärungsirrtum ab.', a: 'Beim Erklärungsirrtum (§ 119 I Alt. 2) verwendet der Erklärende ein Erklärungszeichen, das er so nicht verwenden wollte, z. B. durch Versprechen, Verschreiben oder Vertippen: Erklärtes und Gewolltes fallen auseinander, weil die Erklärung falsch „herauskommt“. Beim Inhaltsirrtum (§ 119 I Alt. 1) sagt er genau das, was er sagen will, irrt aber über dessen Bedeutung, z. B. über den Begriff „Gros“ oder über eine Währung. In beiden Fällen ist nach § 121 unverzüglich anzufechten, Folge ist § 122.' },
    { q: 'Warum ist der Motivirrtum grundsätzlich unbeachtlich, und welche Ausnahme gibt es?', a: 'Die Gründe, aus denen jemand ein Geschäft abschließt, sind für den Vertragspartner nicht erkennbar und liegen in der Risikosphäre des Erklärenden. Könnte jeder anfechten, dessen Erwartungen sich nicht erfüllen, wäre die Vertragsbindung wertlos. Die gesetzliche Ausnahme ist § 119 II: Der Irrtum über verkehrswesentliche Eigenschaften einer Person oder Sache berechtigt zur Anfechtung. Daneben ist die Täuschung (§ 123) ein Sonderfall, weil hier der Gegner den Irrtum verursacht hat.' },
    { q: 'Welche Rechtsfolgen hat eine wirksame Anfechtung?', a: 'Das Rechtsgeschäft ist von Anfang an nichtig (§ 142 I). Bereits ausgetauschte Leistungen sind nach § 812 I 1 Alt. 1 zurückzugewähren. Das Verfügungsgeschäft bleibt nach dem Abstraktionsprinzip grundsätzlich wirksam, außer der Anfechtungsgrund erfasst es mit (häufig bei § 123). Wer nach §§ 119, 120 anficht, muss dem Gegner verschuldensunabhängig den Vertrauensschaden ersetzen (§ 122), höchstens bis zum Erfüllungsinteresse.' }
  ],
  cards: [
    ['Prüfschema Anfechtung?', 'Anfechtbare WE, Grund, Erklärung (§ 143), Frist (§§ 121/124), kein Ausschluss.'],
    ['Rechtsfolge § 142 I?', 'Nichtig von Anfang an (ex tunc).'],
    ['Erklärungsirrtum?', '§ 119 I Alt. 2: Versprechen, Verschreiben, Vertippen.'],
    ['Inhaltsirrtum?', '§ 119 I Alt. 1: Irrtum über die Bedeutung der Erklärung.'],
    ['Eigenschaftsirrtum?', '§ 119 II: verkehrswesentliche Eigenschaft einer Person oder Sache, nicht der Wert.'],
    ['Motivirrtum?', 'Unbeachtlich, außer § 119 II.'],
    ['Frist §§ 119, 120?', '§ 121: unverzüglich, ohne schuldhaftes Zögern, max. 10 Jahre.'],
    ['Frist § 123?', '§ 124: 1 Jahr ab Entdeckung bzw. Ende der Zwangslage, max. 10 Jahre.'],
    ['§ 122?', 'Vertrauensschaden ohne Verschulden, nur bei §§ 119, 120.'],
    ['Widerruf im Laden?', 'Nein. Widerrufsrecht nur bei Fernabsatz oder Außergeschäftsraum (§ 312g).']
  ]
};

W[8] = {
  src: 'Skript S. 4 · §§ 311 II, III, 241 II, 280 I', title: 'culpa in contrahendo',
  intro: `„Verschulden bei Vertragsverhandlungen“: Schon bevor ein Vertrag geschlossen ist, schulden sich die Beteiligten Rücksicht. Wer einen Laden betritt, darf erwarten, dass der Boden nicht spiegelglatt ist. Wer wochenlang über einen Unternehmenskauf verhandelt, darf darauf vertrauen, dass der andere nicht grundlos abspringt. Die c.i.c. ist ein vertragsähnliches Schuldverhältnis, und das hat für den Geschädigten große Vorteile gegenüber dem Deliktsrecht.`,
  ziel: 'Das Schema der c.i.c. beherrschen, die Fallgruppen kennen und begründen, warum die c.i.c. für den Geschädigten günstiger ist als § 823 I.',
  relevanz: 'Hoch. Die c.i.c. wird gerne mit § 831 und § 278 kombiniert.',
  faelle: 'Fälle 13 und 14',
  sections: [
    { title: 'Grundlage und Prüfungsschema', blocks: [
      p(`Seit der Schuldrechtsreform 2002 ist die c.i.c. gesetzlich geregelt. § 311 II begründet ein Schuldverhältnis mit Pflichten nach § 241 II (Rücksicht auf Rechte, Rechtsgüter und Interessen des anderen) schon durch die Aufnahme von Vertragsverhandlungen, die Anbahnung eines Vertrags oder ähnliche geschäftliche Kontakte. Die Anspruchsgrundlage ist § 280 I.`),
      fl('Schaubild: Anspruchskette', ['§ 311 II :: Schuldverhältnis ohne Vertrag', '§ 241 II :: Rücksichtspflichten', '§ 280 I :: Anspruchsgrundlage', '§§ 249 ff. :: Schadensumfang']),
      s('Prüfung: §§ 280 I, 311 II, 241 II', [
        'Schuldverhältnis, § 311 II :: Nr. 1 Aufnahme von Vertragsverhandlungen. Nr. 2 Anbahnung eines Vertrags, bei der einer dem anderen die Möglichkeit zur Einwirkung auf seine Rechtsgüter gewährt (z. B. Betreten eines Ladens oder Restaurants mit Kaufabsicht). Nr. 3 ähnliche geschäftliche Kontakte.',
        'Pflichtverletzung, § 241 II :: Schutzpflichten (Verkehrssicherung), Aufklärungspflichten, Pflicht, Verhandlungen nicht grundlos abzubrechen, wenn ein Vertrauenstatbestand geschaffen wurde.',
        'Vertretenmüssen, §§ 276, 278 :: Es wird vermutet (§ 280 I 2), der Schuldner muss sich entlasten. Das Verschulden von Erfüllungsgehilfen wird nach § 278 zugerechnet, ohne Exkulpationsmöglichkeit.',
        'Schaden, §§ 249 ff. :: In der Regel das negative Interesse (Vertrauensschaden): Der Geschädigte wird so gestellt, wie er ohne das schädigende Verhalten stünde. Bei Körperverletzung zusätzlich Schmerzensgeld (§ 253 II).'
      ])
    ] },
    { title: 'Warum c.i.c. statt Delikt?', blocks: [
      cmp('Schaubild: c.i.c. vs. § 823 I', ['', 'c.i.c. (§§ 280 I, 311 II, 241 II)', 'Delikt (§ 823 I)'], [
        ['Gehilfen', '§ 278: Verschulden wird zugerechnet, KEINE Entlastung', '§ 831: eigene Haftung für vermutetes Auswahl- und Überwachungsverschulden, Exkulpation möglich'],
        ['Beweislast Verschulden', 'vermutet, § 280 I 2', 'der Geschädigte muss beweisen'],
        ['Reine Vermögensschäden', 'ersatzfähig (Zinsen, Kosten)', 'nicht ersatzfähig (Vermögen ist kein „sonstiges Recht“)'],
        ['Schmerzensgeld', 'ja, § 253 II', 'ja, § 253 II'],
        ['Selbstständige Unternehmer als Helfer', '§ 278 erfasst auch sie, wenn sie im Pflichtenkreis tätig werden', '§ 831 nur bei weisungsabhängigen Verrichtungsgehilfen']
      ]),
      b('Klassiker der Rechtsprechung', `Linoleumrolle (RG 1911): Eine Kundin wird im Kaufhaus von umfallenden Linoleumrollen verletzt, die ein Angestellter ungeschickt bewegt. Über § 831 hätte sich der Inhaber exkulpieren können. Das RG half über die c.i.c. mit § 278. Gemüseblatt (BGH 1976): Ein Kind rutscht im Supermarkt auf einem Gemüseblatt aus. Der Schutzbereich umfasst auch begleitende Dritte (Vertrag mit Schutzwirkung zugunsten Dritter).`)
    ] },
    { title: 'Fallgruppen', blocks: [
      st('Die vier Fallgruppen der c.i.c.', [
        'Verletzung von Schutzpflichten :: Körper und Eigentum des Verhandlungspartners werden beschädigt: Nagel im Restaurantstuhl (Fall 13), Bananenschale, umfallende Waren.',
        'Abbruch von Vertragsverhandlungen :: Grundsätzlich ist jeder frei, nicht abzuschließen (Vertragsfreiheit). Ausnahme: Ein Teil hat beim anderen in zurechenbarer Weise das Vertrauen geweckt, der Vertrag werde sicher zustande kommen, und bricht dann ohne triftigen Grund ab (Fall 14). Ein besseres Konkurrenzangebot, das man verschweigt, ist kein triftiger Grund. Bei formbedürftigen Verträgen (z. B. Grundstück) ist eine Haftung nur bei vorsätzlicher Treuepflichtverletzung denkbar, sonst würde der Formzweck umgangen.',
        'Verletzung von Aufklärungspflichten :: Ein Teil verschweigt Umstände, die für den Entschluss des anderen erkennbar wesentlich sind und über die er redlicherweise aufklären müsste.',
        'Haftung Dritter, § 311 III :: Ausnahmsweise haftet ein Dritter (z. B. Sachwalter oder Gutachter), der besonderes persönliches Vertrauen in Anspruch nimmt.'
      ]),
      f('Klausurfalle', `Die c.i.c. gewährt keinen Anspruch auf Vertragsschluss (Fall 14 a), denn es gibt keinen Kontrahierungszwang. Ersetzt wird nur der Vertrauensschaden: Der Geschädigte wird so gestellt, als hätte er nie auf den Abschluss vertraut. Kreditzinsen, die nur wegen des erwarteten Kaufs angefallen sind, sind ein solcher Schaden.`),
      qc('Kurz-Check: Ist F in Fall 13 schon in einem Schuldverhältnis mit R, obwohl sie noch nicht bestellt hat?', 'Ja. Das Betreten des Restaurants mit Bestellabsicht und das Hinsetzen ist eine Vertragsanbahnung, bei der F dem R die Einwirkung auf ihre Rechtsgüter ermöglicht (§ 311 II Nr. 2). Einen Bewirtungsvertrag gibt es noch nicht, also keine „vertraglichen“ Ansprüche im engen Sinn.')
    ] }
  ],
  cases: [
    { n: 13, sv: 'Friederike F will mit ihrem Freund in einem Restaurant des Richard R zu Abend essen. Noch bevor sie die Bestellung aufgeben kann, verletzt sie sich beim Hinsetzen an einem Nagel, der aus dem Stuhl ragt. Sie erleidet eine Wunde, die mehrere Tage schmerzhaft ist. Der Stuhl war kurz davor bei der Schreinerei des Stefan S gewesen, der alle Stühle auf ihre Funktionalität und Sicherheit überprüfen sollte. Dabei hat er diesen Stuhl übersehen.', q: 'Welche der nachfolgenden Antworten ist richtig?', c: 3, o: [
      ['F hat vertragliche Ansprüche gegen R.', 'Falsch. Ein Bewirtungsvertrag ist noch nicht geschlossen, F hat noch nicht bestellt. Es besteht nur ein vorvertragliches Schuldverhältnis nach § 311 II Nr. 2, das „vertragsähnlich“ ist, aber nicht vertraglich.'],
      ['F hat keine deliktischen Ansprüche gegen R, da er sich wegen der Unachtsamkeit des S exkulpieren kann.', 'Falsch. Die Begründung passt nicht: S ist als selbstständiger Schreiner nicht weisungsgebunden, also kein Verrichtungsgehilfe. § 831 ist schon gar nicht anwendbar, sodass es keine „Exkulpation“ gibt. Eine Haftung des R aus § 823 I wegen eigener Verkehrspflichtverletzung scheitert eher daran, dass R die Prüfung sorgfältig an einen Fachbetrieb delegiert hat.'],
      ['F hat Ansprüche aus culpa in contrahendo gegen S.', 'Falsch. Zwischen F und S gibt es keine Vertragsanbahnung. S wollte keinen Vertrag mit F schließen. In Betracht kommt nur § 823 I gegen S.'],
      ['F kann von R Schmerzensgeld verlangen.', 'Richtig. Anspruch aus §§ 280 I, 311 II Nr. 2, 241 II: R schuldete F Schutz ihrer Rechtsgüter. Die Pflichtverletzung, ein unsicherer Stuhl, ist verwirklicht. Das Verschulden des S, der die Sicherheitsprüfung übersah, wird R nach § 278 zugerechnet, weil S im Pflichtenkreis des R gegenüber den Gästen tätig wurde. Schmerzensgeld folgt aus § 253 II, das bei jeder Körperverletzung gilt, auch vertraglich.']],
      lsg: ['Anspruch F gegen R aus §§ 280 I, 311 II Nr. 2, 241 II.', 'Schuldverhältnis: Restaurantbesuch zum Essen = Anbahnung eines Vertrags, F gewährt Einwirkungsmöglichkeit auf ihren Körper.', 'Pflichtverletzung: Verletzung der Schutzpflicht (verkehrssicherer Stuhl).', 'Vertretenmüssen: Das Verschulden des S (Übersehen bei der Prüfung) wird R nach § 278 zugerechnet. Erfüllungsgehilfe ist, wer mit Wissen und Wollen des Schuldners in dessen Pflichtenkreis tätig wird, auch ein selbstständiger Unternehmer. Ohnehin wird das Vertretenmüssen nach § 280 I 2 vermutet.', 'Schaden: Körperverletzung und Schmerzen, also Schmerzensgeld nach § 253 II.', 'Ergebnis: d.'] },
    { n: 14, sv: 'Unternehmer U steht mit einem erfolgreichen Start Up S in Verhandlungen, um dieses zu übernehmen. Man verhandelt bereits seit mehreren Wochen um konkrete Vertragspunkte, eine Einigung steht unmittelbar bevor. Nur wenige Nebenpunkte bedürfen noch einer Einigung. Um den Unternehmenskauf zügig perfekt zu machen und den bereits feststehenden Kaufpreis in Höhe von 500.000 EUR zahlen zu können, nimmt U in Rücksprache mit S bei seiner Hausbank B am 30.05. einen Kredit über 500.000 EUR zu einem Zinssatz von 6,5 % p.a. auf. Drei Tage vor der geplanten Vertragsunterzeichnung am 01.07. erklärt S die Vertragsverhandlungen aus Sicht von U völlig überraschend für gescheitert; es kommt nicht zum Vertragsschluss. Hintergrund ist ein höheres Kaufangebot, von dem U keine Kenntnis hat.', q: 'Welche der nachfolgenden Antworten ist richtig?', c: 2, o: [
      ['Nachdem die Einigung nahezu vollständig war, hat U gegen S einen Anspruch auf Vertragsschluss.', 'Falsch. Bis zur Unterschrift herrscht Abschlussfreiheit. Einen Kontrahierungszwang gibt es nicht, die c.i.c. gibt nur einen Anspruch auf das negative Interesse.'],
      ['U hat gegen S einen Anspruch wegen deliktischen Handelns aus § 823 I.', 'Falsch. U hat einen reinen Vermögensschaden (Zinsen). Das Vermögen ist kein von § 823 I geschütztes Rechtsgut, auch kein „sonstiges Recht“. Eine vorsätzliche sittenwidrige Schädigung (§ 826) ist nicht ersichtlich.'],
      ['U hat gegen S einen Anspruch aus culpa in contrahendo auf Erstattung der an die Bank zu zahlenden Zinsen.', 'Richtig. §§ 280 I, 311 II Nr. 1, 241 II: Es gab Vertragsverhandlungen. S hat in zurechenbarer Weise das Vertrauen auf den sicheren Vertragsschluss erweckt (Einigung bevorstehend, Kredit „in Rücksprache mit S“) und die Verhandlungen ohne triftigen Grund abgebrochen. Ein verschwiegenes Konkurrenzangebot ist kein triftiger Grund. Zu ersetzen ist das negative Interesse, also die Zinsen.'],
      ['U hat keinen Anspruch gegen S, weil kein Schaden entstanden ist.', 'Falsch. Die Zinsen für einen Kredit, den U nur wegen des erwarteten Kaufs aufgenommen hat, sind ein Vermögensschaden.']],
      lsg: ['Anspruch U gegen S aus §§ 280 I, 311 II Nr. 1, 241 II.', 'Schuldverhältnis: wochenlange Vertragsverhandlungen.', 'Pflichtverletzung: Abbruch ohne triftigen Grund nach einem zurechenbar geschaffenen Vertrauenstatbestand. Indizien: Einigung bevorstehend, Preis feststehend, Kreditaufnahme in Rücksprache mit S, Termin festgelegt.', 'Vertretenmüssen: vermutet (§ 280 I 2), S handelte sogar vorsätzlich.', 'Schaden: negatives Interesse. U ist so zu stellen, als hätte er nicht auf den Abschluss vertraut. Dann hätte er den Kredit nicht aufgenommen, also sind die Zinsen (und ggf. die Vorfälligkeitsentschädigung) zu ersetzen.', 'Hinweis: Wäre der Unternehmenskauf als Verkauf von GmbH-Anteilen formbedürftig (§ 15 IV GmbHG), verlangt die Rechtsprechung für eine c.i.c. bei Abbruch eine besonders schwere, regelmäßig vorsätzliche Treuepflichtverletzung. Auch die läge hier wegen des verschwiegenen Konkurrenzangebots nahe.', 'Ergebnis: c.'] }
  ],
  pq: [
    { q: 'Nennen Sie die Voraussetzungen eines Anspruchs aus culpa in contrahendo.', a: 'Anspruchsgrundlage ist § 280 I in Verbindung mit §§ 311 II, 241 II. Erforderlich sind: (1) ein vorvertragliches Schuldverhältnis nach § 311 II (Vertragsverhandlungen, Vertragsanbahnung, ähnliche geschäftliche Kontakte); (2) eine Verletzung einer Rücksichtspflicht nach § 241 II; (3) Vertretenmüssen, das nach § 280 I 2 vermutet wird, mit Zurechnung von Gehilfen über § 278; (4) ein kausaler Schaden, in der Regel das negative Interesse.' },
    { q: 'Warum ist die c.i.c. für den Geschädigten oft günstiger als ein Anspruch aus § 823 I?', a: 'Erstens wird das Verschulden von Erfüllungsgehilfen nach § 278 ohne Entlastungsmöglichkeit zugerechnet, während sich der Geschäftsherr bei § 831 exkulpieren kann. Zweitens wird das Vertretenmüssen nach § 280 I 2 vermutet. Drittens sind auch reine Vermögensschäden ersatzfähig, die § 823 I nicht erfasst.' }
  ],
  cards: [
    ['c.i.c.: Anspruchsgrundlage?', '§ 280 I in Verbindung mit §§ 311 II, 241 II.'],
    ['§ 311 II Nr. 1–3?', 'Vertragsverhandlungen, Vertragsanbahnung mit Einwirkungsmöglichkeit, ähnliche geschäftliche Kontakte.'],
    ['Fallgruppen?', 'Schutzpflichtverletzung, Abbruch der Verhandlungen, Aufklärungspflichtverletzung, Dritthaftung (§ 311 III).'],
    ['Schadensumfang?', 'In der Regel das negative Interesse (Vertrauensschaden).'],
    ['Vorteile gegenüber Delikt?', '§ 278 ohne Exkulpation, Verschulden vermutet, Vermögensschäden ersatzfähig.'],
    ['Anspruch auf Vertragsschluss?', 'Nein. Abschlussfreiheit, kein Kontrahierungszwang.']
  ]
};
window.dispatchEvent(new Event('wpr-data'));
})();
