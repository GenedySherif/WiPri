(function () {
// Fallbuch Teil 1: VL 1–3 (Holztrattner, WiSe 2026/27) – Fließtext-Fälle mit Lösungsweg
const FB = (window.WPRK_FB = window.WPRK_FB || []);
const F = (id, vl, b, t, sv, q, hint, erg, weg, falle) => { if (!FB.some(x => x.id === id)) FB.push({ id, vl, b, t, sv, q, hint, erg, weg, falle }); };

// ───────── VL 1 ─────────
F('1-ger', 'VL 1', 'Gerichte & Instanzenzug', 'Knapp unter der Grenze',
 'Händlerin H verkauft dem Privatmann P im Februar 2026 einen E-Bike-Bausatz für 9.800 €. P zahlt nicht. H verklagt P auf 9.800 € Kaufpreis, außerdem auf 600 € Verzugszinsen und 300 € vorgerichtliche Anwaltskosten, zusammen also 10.700 €. Nach dem Urteil will der unterlegene P in die nächste Instanz.',
 'Welches Gericht ist in erster Instanz zuständig, braucht H dort einen Anwalt, und wohin geht die Berufung?',
 'Zählen Zinsen und Kosten beim Streitwert mit?',
 'Amtsgericht (Streitwert 9.800 €), kein Anwaltszwang. Die Berufung geht an das Landgericht, nicht an das Oberlandesgericht.',
 ['Sachliche Zuständigkeit nach Streitwert: Amtsgericht bis 10.000 € (§ 23 Nr. 1 GVG, seit 01.01.2026), darüber Landgericht (§ 71 I GVG).',
  'Für den Streitwert zählt nur die Hauptforderung. Zinsen und Kosten, die neben ihr verlangt werden, sind Nebenforderungen und bleiben außer Betracht (§ 4 I ZPO). Streitwert also 9.800 €.',
  'Anwaltszwang besteht erst vor dem Landgericht (§ 78 I ZPO). Vor dem Amtsgericht kann H selbst klagen.',
  'Berufung gegen Urteile des Amtsgerichts: Landgericht (§ 72 I GVG). Revision danach zum BGH.'],
 'Wer 10.700 € zusammenrechnet, landet fälschlich beim Landgericht. Und „Berufung immer zum OLG“ stimmt nur bei Urteilen des Landgerichts.');

F('1-oer', 'VL 1', 'Öffentliches Recht & Privatrecht', 'Die Stadtwerke als Gläubiger',
 'Die Stadtwerke S-GmbH gehört zu 100 % der Stadt. Sie beliefert den Mieter M aufgrund eines Stromliefervertrags. M zahlt drei Monatsabschläge nicht. Der Geschäftsführer will M einen „Zahlungsbescheid“ schicken und notfalls selbst vollstrecken lassen, weil „der Staat ja Gläubiger“ sei.',
 'Ist das Rechtsverhältnis öffentlich-rechtlich oder privatrechtlich, und wie muss S vorgehen?',
 'Kommt es darauf an, wem die GmbH gehört, oder darauf, wie sie handelt?',
 'Privatrecht. S muss wie jeder Gläubiger zivilrechtlich vorgehen (Mahnung, Mahnbescheid oder Klage vor dem Zivilgericht). Ein Bescheid ist nicht möglich.',
 ['Abgrenzung: Öffentliches Recht liegt vor, wenn ein Träger hoheitlicher Gewalt gerade als solcher berechtigt oder verpflichtet ist (Über-/Unterordnung). Privatrecht regelt Beziehungen gleichgeordneter Rechtssubjekte.',
  'S handelt als GmbH durch einen Vertrag, also auf gleicher Ebene mit M. Der Stromliefervertrag ist ein Kaufvertrag über einen sonstigen Gegenstand (§§ 433, 453 I).',
  'Dass die Stadt Gesellschafterin ist, ändert die Rechtsform des Handelns nicht.',
  'Folge: Rechtsweg zu den ordentlichen Gerichten. Einen vollstreckbaren Titel bekommt S erst durch Vollstreckungsbescheid oder Urteil.'],
 'Staatlicher Eigentümer bedeutet nicht öffentliches Recht. Entscheidend ist die Form, in der gehandelt wird.');

F('1-ver', 'VL 1', 'Verbraucher & Unternehmer', 'Die Ärztin und der Laptop',
 'Zahnärztin Z kauft im Elektronikmarkt E einen Laptop. Sie nutzt ihn zu etwa 70 % privat und zu 30 % für die Terminplanung ihrer Praxis. Nach 10 Monaten zeigt sich ein Defekt am Mainboard. E meint, Z sei als Freiberuflerin Unternehmerin, für sie gelte die Beweislastumkehr nicht.',
 'Ist Z Verbraucherin?',
 'Lies § 13 BGB genau: Was heißt „überwiegend“?',
 'Ja. Z ist Verbraucherin, weil der Kauf überwiegend ihrem privaten Bereich zuzurechnen ist. Es liegt ein Verbrauchsgüterkauf vor, die Beweislastumkehr des § 477 I gilt.',
 ['§ 13: Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.',
  'Maßgeblich ist der Zweck des konkreten Geschäfts, nicht der Beruf der Person. Bei gemischter Nutzung entscheidet der überwiegende Zweck.',
  '70 % privat → überwiegend privat → Verbraucherin. E ist Unternehmer (§ 14), Laptop bewegliche Sache → Verbrauchsgüterkauf (§ 474 I).',
  'Mangel innerhalb eines Jahres → Vermutung, dass er schon bei Gefahrübergang vorlag (§ 477 I).'],
 'Der Beruf macht noch niemanden zum Unternehmer. Es zählt allein, wofür das konkrete Geschäft überwiegend dient.');

F('1-kfm', 'VL 1', 'Kaufmann', 'Der kleine Onlineshop',
 'Student S verkauft nebenbei allein über einen eigenen Onlineshop Handyhüllen, Jahresumsatz rund 15.000 €. Er ist nicht im Handelsregister eingetragen. Beim Großhändler G (eingetragene GmbH) bestellt er 2.000 Hüllen. Er öffnet die Kartons erst nach vier Wochen und rügt dann, dass 500 Hüllen für das falsche Modell sind. G beruft sich auf § 377 HGB: Die Ware gelte als genehmigt.',
 'Hat S seine Mängelrechte verloren? Und kann er sich auf Verbraucherschutzrecht berufen?',
 'Wann ist jemand Kaufmann, und für welches Geschäft gilt § 377 HGB?',
 'Nein. S ist kein Kaufmann, § 377 HGB greift nicht, die Mängelrechte bleiben. Verbraucher ist S aber auch nicht, sondern Unternehmer. Verbrauchsgüterkaufrecht gilt nicht.',
 ['§ 377 HGB setzt einen beiderseitigen Handelskauf voraus: Beide Parteien müssen Kaufleute sein.',
  'Kaufmann ist, wer ein Handelsgewerbe betreibt (§ 1 I HGB). Kein Handelsgewerbe ist ein Unternehmen, das nach Art und Umfang keinen kaufmännisch eingerichteten Geschäftsbetrieb erfordert (§ 1 II HGB). Ein Ein-Personen-Shop mit 15.000 € Umsatz ist Kleingewerbe.',
  'Als Kleingewerbetreibender wird S erst durch Eintragung Kaufmann (§ 2 HGB). Er ist nicht eingetragen → kein Kaufmann → keine Rügeobliegenheit.',
  'Aber: S handelt in Ausübung seiner gewerblichen Tätigkeit → Unternehmer (§ 14). Kein Verbrauchsgüterkauf, also keine Beweislastumkehr nach § 477.'],
 'Gewerbe ist nicht gleich Kaufmann, und Nicht-Kaufmann ist nicht gleich Verbraucher. Die Begriffe stehen auf verschiedenen Ebenen.');

F('1-tier', 'VL 1', 'Rechtsobjekte: Sachen, Tiere, Rechte', 'Teure Rettung für den Mischling',
 'Radfahrer R fährt fahrlässig den Hund der H an. Der Mischling hat einen Marktwert von etwa 300 €. Die tierärztliche Operation kostet 3.000 €. R will höchstens 300 € zahlen: Ein Tier sei eine Sache, und mehr als den Wert einer Sache müsse man nicht ersetzen.',
 'Muss R die 3.000 € ersetzen?',
 'Tiere sind keine Sachen, werden aber wie Sachen behandelt. Gibt es beim Schadensersatz eine Sonderregel?',
 'Ja, grundsätzlich die vollen 3.000 €. Heilbehandlungskosten für ein Tier sind nicht schon deshalb unverhältnismäßig, weil sie den Wert des Tieres erheblich übersteigen (§ 251 II 2).',
 ['Anspruchsgrundlage § 823 I: Eigentum der H am Hund verletzt. Tiere sind keine Sachen, auf sie sind die Vorschriften über Sachen aber entsprechend anzuwenden (§ 90a).',
  'Grundsatz der Naturalrestitution (§ 249): H darf den Zustand wiederherstellen lassen und die Kosten verlangen (§ 249 II 1).',
  'Sonst gilt: Bei unverhältnismäßigen Kosten nur Wertersatz (§ 251 II 1). Für Tiere ordnet § 251 II 2 aber ausdrücklich an, dass Heilbehandlungskosten nicht schon unverhältnismäßig sind, wenn sie den Tierwert erheblich übersteigen.',
  'Ergebnis: Ersatz der 3.000 €, soweit ein verständiger Tierhalter die Behandlung veranlasst hätte.'],
 'Die Gleichung „Tier = Sache, also nur Marktwert“ übersieht § 251 II 2.');

F('1-recht', 'VL 1', 'Rechtsobjekte: Sachen, Tiere, Rechte', 'Kauf einer Domain',
 'A verkauft B seine Internetdomain „fahrrad-muenchen.de“ für 2.000 €. B zahlt. A überträgt die Domain aber nicht auf B. B fragt, ob er nach § 929 BGB schon Eigentümer der Domain geworden ist und sie nach § 985 herausverlangen kann.',
 'Ist B Eigentümer? Was kann er verlangen?',
 'Ist eine Domain eine Sache im Sinne des § 90?',
 'Nein. Eine Domain ist keine körperliche Sache, an ihr gibt es kein Eigentum und keinen Anspruch aus § 985. B kann aus dem Kaufvertrag (§§ 453 I, 433 I) die Übertragung verlangen.',
 ['Sachen sind nur körperliche Gegenstände (§ 90). Eine Domain ist ein vertragliches Nutzungsrecht gegenüber der Vergabestelle, also ein sonstiger Gegenstand bzw. ein Recht.',
  'Kauf von Rechten und sonstigen Gegenständen: Die Vorschriften über den Sachkauf gelten entsprechend (§ 453 I). Der Vertrag ist wirksam.',
  'Übereignung nach § 929 und Herausgabe nach § 985 setzen eine Sache voraus → passen nicht. Übertragen wird ein Recht durch Abtretung bzw. Vertragsübernahme (§§ 413, 398).',
  'B hat daher den Erfüllungsanspruch aus §§ 453 I, 433 I 1 auf Übertragung, bei Nichtleistung die allgemeinen Rechte (z. B. §§ 280, 281, 323).'],
 'Der Kaufvertrag ist unproblematisch. Nur die sachenrechtlichen Normen (§§ 929, 985) passen für Rechte nicht.');

F('1-abs1', 'VL 1', 'Trennungs- & Abstraktionsprinzip', 'Der Eigenschaftsirrtum und das Eigentum',
 'K kauft von V eine Armbanduhr für 1.200 € in dem Glauben, sie sei aus Gold. Tatsächlich ist sie vergoldet. V hat nichts falsch dargestellt. Die Uhr wurde übergeben und bezahlt. K ficht den Kaufvertrag wirksam wegen Eigenschaftsirrtums an und verlangt das Geld nach § 985 zurück.',
 'Kann K das Geld nach § 985 herausverlangen?',
 'Erfasst der Irrtum auch die Einigung über den Eigentumsübergang am Geld?',
 'Nein. Die Anfechtung beseitigt nur den Kaufvertrag. Die Übereignung des Geldes an V bleibt wirksam, V ist Eigentümer. K muss nach § 812 I 1 Alt. 1 kondizieren.',
 ['Trennungsprinzip: Kaufvertrag (§ 433) und Übereignungen (§ 929) sind getrennte Rechtsgeschäfte.',
  'Abstraktionsprinzip: Die Wirksamkeit der Übereignung hängt nicht von der Wirksamkeit des Kaufvertrags ab.',
  'Der Eigenschaftsirrtum (§ 119 II) betrifft nur die Vorstellung über die Uhr beim Kaufvertrag. Bei der Übereignung des Geldes wollte K ohne jeden Irrtum, dass V Eigentümer wird → keine Fehleridentität.',
  'Kaufvertrag nach § 142 I nichtig → Rechtsgrund entfallen → Rückforderung über § 812 I 1 Alt. 1 (bzw. Alt. 2), nicht über § 985.'],
 'Anfechtung des Kaufvertrags heißt nicht automatisch „alles rückgängig“. Ein Herausgabeanspruch aus § 985 bräuchte unwirksames Eigentum.');

F('1-abs2', 'VL 1', 'Trennungs- & Abstraktionsprinzip', 'Wucher durchbricht die Abstraktion',
 'Der Antiquitätenhändler W nutzt aus, dass die Rentnerin R dringend Geld für eine Operation braucht. Er kauft ihr eine Biedermeier-Kommode im Wert von 9.000 € für 900 € ab. R übergibt und übereignet die Kommode sofort. Später verlangt R die Kommode nach § 985 heraus.',
 'Ist R noch Eigentümerin?',
 'Lies § 138 II genau: Wer lässt sich was „gewähren“?',
 'Ja. Bei Wucher ist nach § 138 II auch das Erfüllungsgeschäft des Bewucherten nichtig. Die Übereignung durch R ist unwirksam, R bleibt Eigentümerin und kann nach § 985 herausverlangen.',
 ['Kaufvertrag: auffälliges Missverhältnis (900 € zu 9.000 €) unter Ausbeutung einer Zwangslage → nichtig nach § 138 II.',
  'Grundsätzlich bliebe die Übereignung wegen des Abstraktionsprinzips wirksam.',
  'Aber § 138 II erklärt nichtig, wodurch sich jemand Vermögensvorteile „versprechen oder gewähren lässt“. „Gewähren“ meint gerade das Erfüllungsgeschäft des Bewucherten → auch die Übereignung an W ist nichtig.',
  'R ist Eigentümerin geblieben, W hat kein Recht zum Besitz → § 985. (Die 900 € muss R nach § 812 zurückgeben.)'],
 'Das Abstraktionsprinzip gilt nicht ausnahmslos. Wucher ist der klassische Fall, in dem der Fehler auch die Verfügung erfasst.');

// ───────── VL 2 ─────────
F('2-we1', 'VL 2', 'Willenserklärung', 'Der Gruß bei der Weinversteigerung',
 'Bei einer Weinversteigerung gilt laut Aushang „Handheben = Gebot von 50 € mehr“. G kennt die Regel nicht. Er sieht einen Freund im Saal und winkt ihm zu. Der Auktionator erteilt G den Zuschlag für ein Fass zu 2.050 €.',
 'Ist G an den Kauf gebunden?',
 'Welches subjektive Merkmal fehlt bei G, und ist das Fehlen beachtlich?',
 'Es liegt eine wirksame Willenserklärung vor, G kann sie aber unverzüglich anfechten (§ 119 I analog). Dann schuldet er nur den Vertrauensschaden (§ 122).',
 ['Objektiv: Aus Sicht eines verständigen Empfängers ist das Handheben im Saal ein Gebot.',
  'Subjektiv: G hatte Handlungswillen (er bewegt die Hand bewusst), aber kein Erklärungsbewusstsein (er wusste nicht, dass er etwas rechtlich Erhebliches erklärt).',
  'Fehlendes Erklärungsbewusstsein ist unschädlich, wenn der Erklärende bei Anwendung der verkehrsüblichen Sorgfalt hätte erkennen können, dass sein Verhalten als Willenserklärung verstanden wird. Bei einer Versteigerung ist das der Fall → WE wirksam, Zuschlag = Vertrag (§ 156).',
  'Schutz des G: Anfechtung entsprechend § 119 I, unverzüglich (§ 121). Folge: Nichtigkeit (§ 142 I), Ersatz des Vertrauensschadens (§ 122).'],
 'Ohne Erklärungsbewusstsein gibt es nicht automatisch keine WE. Nur der fehlende Handlungswille verhindert sie ganz.');

F('2-we2', 'VL 2', 'Willenserklärung', 'Nachbarschaftshilfe mit Folgen',
 'N verspricht seiner Nachbarin B, während ihres zweiwöchigen Urlaubs „mal nach dem Briefkasten zu schauen“. Dass B auf ein wichtiges Fristschreiben wartet, weiß N nicht. N vergisst es. B verpasst eine Frist und verliert 2.000 €. Sie verlangt Schadensersatz aus Auftrag (§§ 662, 280 I).',
 'Hat B einen Anspruch gegen N?',
 'Wollte N sich rechtlich binden?',
 'Nein. Es liegt eine reine Gefälligkeit ohne Rechtsbindungswillen vor, also kein Vertrag. Deliktisch scheidet § 823 I aus, weil ein reiner Vermögensschaden kein geschütztes Rechtsgut ist.',
 ['Ein Auftrag (§ 662) ist ein Vertrag und setzt zwei Willenserklärungen mit Rechtsbindungswillen voraus.',
  'Ob Rechtsbindungswille vorliegt, wird nach dem objektiven Empfängerhorizont beurteilt (§§ 133, 157). Indizien: Unentgeltlichkeit, alltägliche Gefälligkeit, erkennbare wirtschaftliche Bedeutung, Haftungsrisiko.',
  'Briefkasten-Schauen unter Nachbarn, unentgeltlich, die besondere Bedeutung war für N nicht erkennbar → kein Rechtsbindungswille → kein Vertrag, kein § 280.',
  '§ 823 I schützt nur absolute Rechtsgüter (Eigentum, Körper usw.). Ein Fristversäumnis ist ein reiner Vermögensschaden → nicht erfasst.'],
 'Ein Versprechen ist nicht automatisch ein Vertrag. Hätte N gewusst, dass es um eine Frist geht, und Geld dafür bekommen, sähe es anders aus.');

F('2-zug1', 'VL 2', 'Abgabe & Zugang', 'Der Brief am Samstagabend',
 'Druckerei D macht dem Verlag V ein schriftliches Angebot, „gültig bis Samstag, 24 Uhr“. V wirft seine Annahme am Samstag um 19 Uhr persönlich in den Briefkasten der Druckerei ein. Die Druckerei hat samstags geschlossen. Am Montag lehnt D ab: Die Annahme sei zu spät gekommen.',
 'Ist ein Vertrag zustande gekommen?',
 'Wann ist unter gewöhnlichen Umständen mit der Kenntnisnahme in einem Geschäftsbetrieb zu rechnen?',
 'Nein. Die Annahme ist erst am Montag zugegangen, also nach Fristablauf. Sie gilt als neues Angebot (§ 150 I), das D ablehnen darf.',
 ['Die Annahme muss innerhalb der Frist zugehen (§ 148). Eine Willenserklärung unter Abwesenden wird mit Zugang wirksam (§ 130 I 1).',
  'Zugang: Die Erklärung ist so in den Machtbereich des Empfängers gelangt, dass unter gewöhnlichen Umständen mit Kenntnisnahme zu rechnen ist.',
  'Machtbereich: Briefkasten am Samstag um 19 Uhr. Kenntnisnahme ist bei einem samstags geschlossenen Geschäftsbetrieb aber erst bei der nächsten üblichen Leerung zu erwarten, also am Montagmorgen.',
  'Zugang am Montag → nach Fristende → Angebot erloschen (§ 146). Die verspätete Annahme ist ein neues Angebot (§ 150 I).'],
 'Im Machtbereich ist nicht gleich zugegangen. Es zählt der Zeitpunkt, zu dem normalerweise jemand nachsieht.');

F('2-zug2', 'VL 2', 'Abgabe & Zugang', 'Zu spät widerrufen',
 'A schickt B per Brief ein bindendes Angebot, sein Motorrad für 4.000 € zu kaufen. Der Brief wird am Dienstag um 10 Uhr in B’s privaten Briefkasten eingeworfen. A bereut den Kauf und ruft B am Dienstag um 18 Uhr an: „Vergiss meinen Brief, ich widerrufe.“ B hatte den Briefkasten noch nicht geleert. Am Mittwoch nimmt B das Angebot an.',
 'War der Widerruf rechtzeitig?',
 'Vergleiche den Zugang des Briefs mit dem Zugang des Widerrufs. Auf wessen tatsächliche Kenntnis kommt es an?',
 'Nein. Der Brief ging am Dienstagvormittag zu, weil mit einer Leerung im Laufe des Tages zu rechnen war. Der Widerruf um 18 Uhr kam später. Das Angebot band A, der Vertrag ist zustande gekommen.',
 ['Ein Widerruf hindert das Wirksamwerden nur, wenn er vorher oder gleichzeitig zugeht (§ 130 I 2).',
  'Zugang des Briefs: Einwurf um 10 Uhr in einen privaten Briefkasten. Nach der Verkehrsanschauung wird er im Laufe des Tages geleert → Zugang am Dienstag tagsüber, jedenfalls vor 18 Uhr.',
  'Dass B den Brief noch nicht gelesen hatte, ist unerheblich. Es zählt die Möglichkeit der Kenntnisnahme unter gewöhnlichen Umständen.',
  'Widerruf (18 Uhr) nach Zugang → wirkungslos. Angebot bindend (§ 145), Annahme am Mittwoch → Vertrag.'],
 'Viele stellen auf die tatsächliche Lektüre ab. Beim Zugang zählt aber die gewöhnliche Möglichkeit der Kenntnisnahme.');

F('2-vs1', 'VL 2', 'Vertragsschluss', 'Der Preisfehler im Onlineshop',
 'Im Onlineshop des U wird ein Fernseher wegen eines Tippfehlers für 49 € statt 499 € angezeigt. K bestellt drei Stück und erhält sofort eine automatische E-Mail: „Vielen Dank, wir haben Ihre Bestellung erhalten und prüfen sie.“ Am nächsten Tag schreibt U, er liefere nicht. K besteht auf Lieferung zu 49 €.',
 'Ist ein Kaufvertrag zustande gekommen?',
 'Wer macht im Onlineshop das Angebot, und was erklärt die automatische E-Mail?',
 'Nein. Die Shop-Seite war nur eine invitatio ad offerendum, die Bestellung des K das Angebot. Die Eingangsbestätigung ist keine Annahme. Eine Anfechtung braucht U deshalb gar nicht.',
 ['Die Warenpräsentation im Shop ist keine Willenserklärung, sondern eine Aufforderung zur Abgabe von Angeboten. Der Händler will Lieferfähigkeit und Bonität noch prüfen und sich nicht gegenüber unbegrenzt vielen Kunden binden.',
  'Angebot (§ 145) = Bestellung des K.',
  'Annahme? Die automatische Mail bestätigt nur den Eingang (Pflicht aus § 312i I 1 Nr. 3) und kündigt eine Prüfung an. Aus objektiver Empfängersicht (§§ 133, 157) fehlt ein Rechtsbindungswille → keine Annahme.',
  'Die Ablehnung am nächsten Tag → kein Vertrag. (Hätte U „Ihre Bestellung wird versandt“ geschrieben, läge eine Annahme vor, und U müsste wegen Erklärungsirrtums anfechten.)'],
 'Der Tippfehler lenkt auf die Anfechtung. Davor kommt aber die Frage, ob überhaupt ein Vertrag besteht.');

F('2-vs2', 'VL 2', 'Vertragsschluss', 'Das Buch, das keiner bestellt hat',
 'Der Verlag L schickt der Rentnerin R ungefragt einen Bildband mit Rechnung über 39 € und dem Hinweis: „Wenn Sie das Buch nicht binnen 14 Tagen zurücksenden, gilt der Kauf als angenommen.“ R legt das Buch ins Regal und reagiert nicht. Nach vier Wochen verlangt L Zahlung, hilfsweise Rücksendung auf R’s Kosten.',
 'Muss R zahlen oder das Buch zurückschicken?',
 'Kann Schweigen eine Annahme sein? Und welche Sondernorm schützt Verbraucher bei unbestellter Ware?',
 'Weder noch. Schweigen ist keine Annahme, also kein Kaufvertrag. Wegen § 241a I hat L auch keinen Anspruch auf Herausgabe oder Rücksendung.',
 ['Vertrag braucht Angebot und Annahme. Schweigen ist grundsätzlich keine Willenserklärung. Eine einseitige Ankündigung („gilt als angenommen“) kann daran nichts ändern.',
  'Ausnahmen (z. B. kaufmännisches Bestätigungsschreiben) liegen nicht vor: R ist Verbraucherin.',
  '§ 241a I: Liefert ein Unternehmer einem Verbraucher unbestellte Ware, werden dadurch keine Ansprüche gegen den Verbraucher begründet. Das schließt auch Herausgabe (§ 985) und Bereicherungsansprüche aus.',
  'R darf das Buch behalten und muss nichts tun.'],
 'Viele meinen, man müsse unbestellte Ware wenigstens zurückschicken. § 241a schließt gerade das aus.');

F('2-vs3', 'VL 2', 'Vertragsschluss', 'Bestätigungsschreiben unter Kaufleuten',
 'Die Schreinerei S-GmbH und der Holzhändler H e. K. einigen sich am Telefon über 40 m³ Eichenholz zu 900 €/m³. Über die Lieferung wird nicht gesprochen. Am nächsten Tag schickt H ein Schreiben: „Wir bestätigen unser Telefonat: 40 m³ Eiche à 900 €, Abholung ab unserem Lager.“ S reagiert nicht. Später verlangt S die Lieferung in ihre Werkstatt.',
 'Muss H liefern, oder muss S abholen?',
 'Welche Wirkung hat Schweigen unter Kaufleuten auf ein Bestätigungsschreiben?',
 'S muss abholen. Durch das Schweigen auf das kaufmännische Bestätigungsschreiben gilt der Vertrag mit dem bestätigten Inhalt, also mit Holschuld.',
 ['Kaufmännisches Bestätigungsschreiben: Beide Seiten sind Kaufleute (GmbH nach § 6 HGB, e. K.), es gab Vertragsverhandlungen, das Schreiben folgt unmittelbar und gibt das Ergebnis als abgeschlossen wieder.',
  'Schweigt der Empfänger, gilt der Vertrag mit dem Inhalt des Schreibens (Gewohnheitsrecht, § 346 HGB), soweit der Absender redlich ist und das Schreiben nicht so stark abweicht, dass er mit Billigung nicht rechnen konnte.',
  'Die Ergänzung „Abholung ab Lager“ betrifft einen offenen Nebenpunkt und ist keine unzumutbare Abweichung → wird Vertragsinhalt.',
  'Leistungsort beim Verkäufer → Holschuld. Das ergibt sich hier aus dem Vertrag und entspricht im Übrigen auch der Grundregel des § 269 I.'],
 'Im allgemeinen Zivilrecht ist Schweigen keine Zustimmung. Das kaufmännische Bestätigungsschreiben ist die wichtigste Ausnahme.');

F('2-rg1', 'VL 2', 'Arten von Rechtsgeschäften', 'Finderlohn ohne Kenntnis',
 'E hängt Zettel auf: „Kater Moritz entlaufen – 200 € Belohnung für den, der ihn zurückbringt.“ Die Schülerin S hat die Zettel nie gesehen. Sie findet den Kater mit Namensmarke am Halsband und bringt ihn zurück. Als sie später von der Belohnung erfährt, verlangt sie die 200 €. E meint, es sei kein Vertrag zustande gekommen, weil S sein Angebot nicht gekannt habe.',
 'Hat S Anspruch auf die 200 €?',
 'Ist die Auslobung ein Vertrag?',
 'Ja. Die Auslobung ist ein einseitiges Rechtsgeschäft. Der Anspruch entsteht mit der Vornahme der Handlung, auch wenn der Handelnde die Auslobung nicht kannte (§ 657).',
 ['Einseitige Rechtsgeschäfte brauchen nur eine Willenserklärung (Beispiele: Kündigung, Testament, Auslobung).',
  'Auslobung (§ 657): Wer durch öffentliche Bekanntmachung eine Belohnung für die Vornahme einer Handlung aussetzt, ist zur Leistung verpflichtet, „auch wenn der Handelnde nicht mit Rücksicht auf die Auslobung gehandelt hat“.',
  'Öffentliche Bekanntmachung durch Aushänge (+), Handlung (Rückbringen) vorgenommen (+).',
  'S hat den Anspruch aus § 657. Daneben bestünde der gesetzliche Finderlohn (§ 971), der hier aber geringer wäre.'],
 'Wer „Angebot und Annahme“ prüft, verneint den Anspruch. Die Auslobung ist gerade kein Vertrag.');

F('2-typ', 'VL 2', 'Vertragstypen', 'Der Programmierer nach Stunden',
 'Start-up S beauftragt den freien Entwickler E, „nach besten Kräften an der Entwicklung unserer App mitzuarbeiten“, Vergütung 80 €/Stunde, Abrechnung monatlich. E arbeitet ordentlich 100 Stunden. Die App funktioniert am Ende trotzdem nicht, weil das Konzept von S untauglich war. S verweigert die Zahlung und verlangt „Nachbesserung“.',
 'Muss S zahlen? Hat S Mängelrechte?',
 'Schuldet E einen Erfolg oder nur eine Tätigkeit?',
 'S muss die 8.000 € zahlen. Es liegt ein Dienstvertrag vor. E schuldet nur die Tätigkeit, nicht den Erfolg, Mängelrechte wie beim Werkvertrag gibt es nicht.',
 ['Abgrenzung: Werkvertrag (§ 631) = Erfolg geschuldet (fertige, funktionierende Software). Dienstvertrag (§ 611) = Tätigkeit geschuldet.',
  'Indizien: „nach besten Kräften mitarbeiten“, Stundenvergütung, Konzept und Steuerung bei S → Dienstvertrag.',
  'Vergütung für geleistete Dienste: 100 h × 80 € = 8.000 € (§ 611 I).',
  'Das Dienstvertragsrecht kennt kein Mängelgewährleistungsrecht. Nur bei schlechter Arbeit käme Schadensersatz aus § 280 I in Betracht, hier hat E aber ordentlich gearbeitet.'],
 'Nicht jede Software-Entwicklung ist ein Werkvertrag. Entscheidend ist, was versprochen wurde: Erfolg oder Mühe.');

F('2-form1', 'VL 2', 'Form', 'Die Bürgschaft per E-Mail',
 'G gewährt der Tischlerei T-GmbH einen Kredit. Deren Geschäftsführer B, privat und nicht selbst Kaufmann, schreibt G eine E-Mail: „Hiermit übernehme ich für den Kredit der T-GmbH die Bürgschaft bis 20.000 €.“ Die Mail hat eine qualifizierte elektronische Signatur. Die GmbH wird insolvent, G nimmt B in Anspruch.',
 'Ist die Bürgschaft wirksam?',
 'Lies § 766 vollständig, auch Satz 2.',
 'Nein. Die Bürgschaftserklärung verlangt Schriftform, die elektronische Form ist ausdrücklich ausgeschlossen (§ 766 S. 2). Die Bürgschaft ist nach § 125 S. 1 nichtig.',
 ['Bürgschaft (§ 765): Die Erklärung des Bürgen bedarf der schriftlichen Erteilung (§ 766 S. 1).',
  'Normalerweise kann die Schriftform durch die elektronische Form ersetzt werden (§§ 126 III, 126a). § 766 S. 2 schließt das aber aus.',
  'Die Ausnahme des § 350 HGB (formfreie Bürgschaft) gilt nur, wenn die Bürgschaft für den Bürgen ein Handelsgeschäft ist, er also selbst Kaufmann ist. Der Geschäftsführer einer GmbH ist nicht selbst Kaufmann → § 350 HGB greift nicht.',
  'Formmangel → nichtig (§ 125 S. 1). Heilung nach § 766 S. 3 nur, soweit B die Hauptverbindlichkeit erfüllt hat, was nicht geschehen ist.'],
 'Die qualifizierte Signatur klingt nach „sicher genug“. Bei der Bürgschaft sperrt § 766 S. 2 aber gerade die elektronische Form.');

F('2-form2', 'VL 2', 'Form', 'Das geheilte Geschenk',
 'Onkel O verspricht seiner Nichte N mündlich vor Zeugen, ihr 5.000 € für ein Auslandssemester zu schenken. Zwei Wochen später überweist er das Geld. Nach einem Streit verlangt O die 5.000 € zurück: Das Schenkungsversprechen sei mangels notarieller Form nichtig gewesen, N habe ohne Rechtsgrund erhalten.',
 'Kann O das Geld zurückverlangen?',
 'Gibt es bei der Schenkung eine Möglichkeit, den Formmangel nachträglich zu überwinden?',
 'Nein. Der Formmangel wurde durch die Bewirkung der Leistung geheilt (§ 518 II). Die Schenkung ist wirksamer Rechtsgrund, ein Anspruch aus § 812 besteht nicht.',
 ['Das Schenkungsversprechen bedarf der notariellen Beurkundung (§ 518 I 1). Mündlich → ursprünglich formnichtig (§ 125 S. 1).',
  '§ 518 II: Der Mangel der Form wird durch die Bewirkung der versprochenen Leistung geheilt. Mit der Überweisung hat O geleistet.',
  'Damit besteht ein wirksamer Schenkungsvertrag als Rechtsgrund → kein Anspruch aus § 812 I 1 Alt. 1.',
  'Ein Widerruf wegen groben Undanks (§ 530) setzt eine schwere Verfehlung voraus. Ein bloßer Streit reicht nicht.'],
 'Der Formmangel war echt, aber nicht endgültig. Bei Schenkung, Bürgschaft und Grundstückskauf immer nach der Heilung fragen.');

F('2-wh1', 'VL 2', 'Wirksamkeitshindernisse', 'Der Porsche für einen Euro',
 'Am Stammtisch sagt A laut lachend zu B: „Mein Porsche gehört dir für einen Euro, schlag ein!“ B schlägt ein. Am nächsten Morgen kündigt B seinen Leasingvertrag für seinen eigenen Wagen und zahlt dafür 1.500 € Vorfälligkeitsentschädigung. A weigert sich, den Porsche herauszugeben.',
 'Muss A den Porsche übereignen? Muss er B die 1.500 € ersetzen?',
 'Was regelt § 122 II?',
 'Weder noch. Die Erklärung war eine nichtige Scherzerklärung (§ 118). Den Vertrauensschaden nach § 122 I bekommt B nicht, weil er die fehlende Ernstlichkeit kennen musste (§ 122 II).',
 ['§ 118: Eine nicht ernstlich gemeinte Willenserklärung, die in der Erwartung abgegeben wird, der Mangel der Ernstlichkeit werde nicht verkannt, ist nichtig. A rechnete erkennbar damit, dass B den Scherz versteht → kein Kaufvertrag.',
  'Grundsätzlich muss der Scherzende den Vertrauensschaden ersetzen (§ 122 I).',
  'Ausgeschlossen, wenn der Geschädigte den Grund der Nichtigkeit kannte oder infolge von Fahrlässigkeit nicht kannte (§ 122 II). Ein Porsche für 1 €, laut lachend am Stammtisch: Das musste B erkennen.',
  'Ergebnis: kein Anspruch auf Übereignung, kein Ersatz der 1.500 €.'],
 'Der missglückte Scherz löst zwar grundsätzlich eine Ersatzpflicht aus. § 122 II nimmt sie dem, der den Scherz hätte durchschauen müssen.');

F('2-wh2', 'VL 2', 'Wirksamkeitshindernisse', 'Schwarzarbeit und Mängel',
 'Hauseigentümer H und Fliesenleger F vereinbaren, das Bad „ohne Rechnung“ für 6.000 € bar zu fliesen, damit keine Umsatzsteuer anfällt. F arbeitet mangelhaft, die Fliesen lösen sich. H verlangt Nachbesserung, hilfsweise Rückzahlung der 6.000 €.',
 'Hat H Mängelrechte oder einen Rückzahlungsanspruch?',
 'Wie wirkt sich der Gesetzesverstoß auf den ganzen Vertrag aus, und was sagt § 817 S. 2?',
 'Nein, H hat weder Mängelrechte noch einen Rückzahlungsanspruch. Der Vertrag ist wegen Verstoßes gegen das Schwarzarbeitsgesetz nichtig (§ 134), und die Rückforderung scheitert an § 817 S. 2.',
 ['Die „Ohne-Rechnung-Abrede“ verstößt gegen § 1 II Nr. 2 SchwarzArbG. Beide Parteien wissen es → der gesamte Werkvertrag ist nach § 134 nichtig (BGH, ständige Rechtsprechung seit 2013).',
  'Ohne wirksamen Vertrag gibt es keine Mängelrechte (§ 634) und keinen Werklohnanspruch.',
  'Rückforderung der 6.000 € über § 812 I 1 Alt. 1? Ausgeschlossen nach § 817 S. 2, weil auch H mit der Zahlung gegen ein gesetzliches Verbot verstoßen hat.',
  'Umgekehrt bekäme F auch keinen Wertersatz, hätte er noch nicht kassiert. Beide stehen außerhalb des Rechts.'],
 'Viele nehmen an, nur die Steuerabrede sei unwirksam und der Rest gelte. Der BGH erklärt den ganzen Vertrag für nichtig.');

// ───────── VL 3 ─────────
F('3-anf1', 'VL 3', 'Anfechtung: Auslegung zuerst', 'Grünes oder rotes Rad',
 'V und K besichtigen in V’s Garage zwei Fahrräder und einigen sich mündlich über das grüne Rennrad für 800 €. Im anschließend unterschriebenen Kaufvertrag steht wegen eines Schreibfehlers „rotes Rennrad“. Das rote Rad ist 1.500 € wert. V will den Vertrag anfechten, um das rote Rad nicht hergeben zu müssen.',
 'Muss V anfechten, und welches Rad schuldet er?',
 'Was gilt, wenn beide übereinstimmend dasselbe meinen, aber etwas anderes schreiben?',
 'V muss nicht anfechten. Es gilt das übereinstimmend Gewollte (falsa demonstratio non nocet). Geschuldet ist das grüne Rad für 800 €.',
 ['Vor jeder Anfechtung steht die Auslegung (§§ 133, 157). Gibt es keinen Irrtum, gibt es auch nichts anzufechten.',
  '§ 133: Es ist der wirkliche Wille zu erforschen, nicht am buchstäblichen Ausdruck zu haften.',
  'Beide meinten übereinstimmend das grüne Rad → die Falschbezeichnung schadet nicht. Der Vertrag hat das grüne Rad zum Inhalt.',
  'Keine Diskrepanz zwischen Wille und Erklärungsinhalt → kein Irrtum nach § 119 → keine Anfechtung nötig und auch keine möglich.'],
 'Der Schreibfehler verleitet zur Anfechtung. Vorrang hat aber die Auslegung, und sie löst den Fall.');

F('3-anf2', 'VL 3', 'Anfechtung: Gründe', 'Der verrechnete Kostenvoranschlag',
 'Malermeister M addiert in seiner internen Kalkulation falsch und bietet der Kundin K „Streichen des Treppenhauses, Festpreis 8.000 €“ an. Richtig gerechnet wären es 10.000 € gewesen. Die Kalkulation kennt K nicht. Sie nimmt an. M will wegen Irrtums anfechten.',
 'Kann M anfechten?',
 'Hat M sich bei der Erklärung geirrt, oder nur bei der Vorbereitung?',
 'Nein. Ein verdeckter Kalkulationsirrtum ist ein unbeachtlicher Motivirrtum. M ist an die 8.000 € gebunden.',
 ['Inhalts- oder Erklärungsirrtum (§ 119 I) liegt vor, wenn Erklärtes und Gewolltes auseinanderfallen. M wollte 8.000 € erklären und hat 8.000 € erklärt.',
  'Der Fehler liegt in der Willensbildung (Berechnungsgrundlage), also im Motiv → kein Anfechtungsgrund.',
  'Ein Eigenschaftsirrtum (§ 119 II) scheidet aus: Die Kalkulation ist keine Eigenschaft einer Person oder Sache.',
  'Ausnahme nach Rechtsprechung: Kennt der Vertragspartner den Fehler und nutzt ihn treuwidrig aus, kann das Bestehen auf dem Vertrag unzulässig sein (§ 242). Hier wusste K nichts.'],
 'Der Fehler wirkt wie ein „Rechenirrtum in der Erklärung“. Er steckt aber in der internen Kalkulation, die nicht Inhalt der Erklärung wurde.');

F('3-anf3', 'VL 3', 'Anfechtung: Gründe', 'Das verkannte Original',
 'Privatverkäufer V räumt den Dachboden und verkauft dem Kunstfreund K ein Ölbild für 300 €. Beide halten es für eine wertlose Kopie. Ein Gutachten ergibt später: Es ist ein Original von Gabriele Münter, Wert ca. 60.000 €. V ficht den Kaufvertrag sofort an. K hatte für Rahmen und Transport 150 € ausgegeben.',
 'Ist die Anfechtung wirksam? Was kann K verlangen?',
 'Ist die Urheberschaft eines Bildes eine verkehrswesentliche Eigenschaft, der bloße Wert dagegen nicht?',
 'Ja, wirksame Anfechtung nach § 119 II. Der Vertrag ist nichtig. K muss das Bild zurückgeben, bekommt seine 300 € zurück und nach § 122 die 150 € Vertrauensschaden.',
 ['Eigenschaftsirrtum (§ 119 II): Irrtum über verkehrswesentliche Eigenschaften der Sache. Eigenschaften sind wertbildende Faktoren, die der Sache unmittelbar anhaften, wie die Urheberschaft. Der Marktwert selbst ist keine Eigenschaft.',
  'V irrte über die Urheberschaft → Anfechtungsgrund (+). Anfechtung gegenüber K (§ 143) unverzüglich (§ 121) (+).',
  'Der Ausschluss der Anfechtung durch Mängelrecht betrifft nur den Käufer, der sich so der Gewährleistung entziehen würde. Dem Verkäufer steht § 119 II offen (er darf sich nur nicht seiner Mängelhaftung entziehen, darum geht es hier nicht).',
  'Folge: nichtig von Anfang an (§ 142 I). Rückabwicklung nach § 812. K bekommt den Vertrauensschaden (§ 122 I): Rahmen und Transport 150 €.'],
 'Wer „Irrtum über den Wert ist unbeachtlich“ auswendig gelernt hat, übersieht, dass der Irrtum hier die Urheberschaft betrifft.');

F('3-anf4', 'VL 3', 'Anfechtung: Fristen', 'Drei Monate Bedenkzeit',
 'Gebrauchtwagenhändler G sichert K bei Vertragsschluss am 10. Januar ausdrücklich zu, der Wagen sei unfallfrei. Er weiß, dass das nicht stimmt. K erfährt am 1. März vom Unfallschaden, überlegt drei Monate und erklärt am 1. Juni die Anfechtung. G meint, das sei nicht mehr „unverzüglich“.',
 'Ist die Anfechtung rechtzeitig?',
 'Gilt für jede Anfechtung dieselbe Frist?',
 'Ja. Bei arglistiger Täuschung gilt nicht „unverzüglich“, sondern eine Jahresfrist ab Entdeckung (§ 124 I, II). Die Anfechtung am 1. Juni ist rechtzeitig.',
 ['Anfechtungsgrund: arglistige Täuschung (§ 123 I). G hat bewusst falsch über Unfallfreiheit informiert, K wurde dadurch zum Vertragsschluss bestimmt.',
  'Frist: Für §§ 119, 120 gilt „unverzüglich“ (§ 121 I), also ohne schuldhaftes Zögern, regelmäßig höchstens etwa zwei Wochen. Für § 123 gilt eine Frist von einem Jahr (§ 124 I), beginnend mit Entdeckung der Täuschung (§ 124 II).',
  'Entdeckung am 1. März → Frist bis 1. März des Folgejahres → Anfechtung am 1. Juni rechtzeitig.',
  'Folge: Nichtigkeit ex tunc (§ 142 I). § 122 gilt nicht zugunsten des Täuschenden.'],
 'Drei Monate wären bei einem Irrtum zu spät. Bei der Täuschung gibt das Gesetz bewusst mehr Zeit.');

F('3-anf5', 'VL 3', 'Anfechtung: Folgen', 'Der Tippfehler im Inserat',
 'V will sein Rennrad für 510 € inserieren, vertippt sich und schreibt in sein Angebot an K „150 €“. K nimmt an, fährt mit der Bahn zu V (Fahrkarte 20 €) und lehnt am selben Tag ein anderes Rad für 140 € ab, das danach verkauft ist. V ficht bei Übergabe unverzüglich an. K verlangt das Rad für 150 €, hilfsweise Schadensersatz.',
 'Was kann K verlangen?',
 'Welches Interesse ersetzt § 122, und wo liegt die Obergrenze?',
 'Kein Rad für 150 €. K bekommt den Vertrauensschaden (§ 122 I): mindestens die 20 € Fahrtkosten, dazu den Nachteil aus dem ausgeschlagenen Angebot. Begrenzt ist der Ersatz durch das Erfüllungsinteresse.',
 ['Erklärungsirrtum (§ 119 I Alt. 2): V hat sich verschrieben → Anfechtungsgrund. Unverzüglich (§ 121) → Vertrag nichtig (§ 142 I). Kein Erfüllungsanspruch.',
  '§ 122 I: K ist so zu stellen, wie er stünde, wenn er nie auf die Gültigkeit vertraut hätte (negatives Interesse). Ersatzfähig sind Fahrtkosten und Nachteile aus einem im Vertrauen ausgeschlagenen anderen Geschäft.',
  'Obergrenze: höchstens das, was K bei Gültigkeit des Vertrags gehabt hätte (positives Interesse).',
  'K wusste nichts vom Irrtum und musste ihn nicht erkennen → kein Ausschluss nach § 122 II.'],
 'Anfechtung macht nicht ersatzlos frei. Der Anfechtende haftet verschuldensunabhängig auf den Vertrauensschaden.');

F('3-vj1', 'VL 3', 'Verjährung', 'Mahnungen helfen nicht',
 'D leiht seinem Bekannten S 3.000 €, rückzahlbar am 15. März 2022. S zahlt nicht. D schreibt ihm 2022, 2023 und 2024 je eine Mahnung. Im Februar 2026 reicht D Klage ein. S erhebt die Einrede der Verjährung. Ein Jahr später überweist S doch freiwillig die 3.000 € und fordert sie dann mit dem Hinweis auf die Verjährung zurück.',
 'Ist der Anspruch verjährt? Kann S das gezahlte Geld zurückverlangen?',
 'Hemmen private Mahnschreiben die Verjährung? Was sagt § 214 II?',
 'Ja, verjährt mit Ablauf des 31.12.2025. Die Mahnschreiben hemmen nicht. S kann das Geleistete aber nicht zurückfordern (§ 214 II).',
 ['Regelverjährung 3 Jahre (§ 195), Beginn mit Schluss des Jahres der Entstehung und Kenntnis (§ 199 I): Ende 2022 → Ablauf 31.12.2025.',
  'Hemmung nur durch die in §§ 203 ff. genannten Tatbestände, z. B. Klageerhebung oder Zustellung eines Mahnbescheids (§ 204 I Nr. 1, 3) oder Verhandlungen (§ 203). Ein einfaches Mahnschreiben gehört nicht dazu.',
  'Klage im Februar 2026 → zu spät → S darf die Leistung verweigern (§ 214 I).',
  'Der Anspruch erlischt aber nicht. Was S trotz Verjährung leistet, kann er nicht zurückfordern, auch wenn er die Verjährung nicht kannte (§ 214 II).'],
 'Die „Mahnung“ des Gläubigers und der gerichtliche Mahnbescheid werden oft verwechselt. Nur der Mahnbescheid hemmt.');

F('3-vj2', 'VL 3', 'Verjährung', 'Der kleine Abschlag',
 'Werkunternehmer W hat gegen K eine Restforderung von 4.000 €, fällig im Mai 2022. Im November 2025 schreibt K: „Ich weiß, dass ich noch zahlen muss, hier schon mal 100 €.“ und überweist 100 €. Danach zahlt er nichts mehr. W klagt im März 2027 auf die restlichen 3.900 €.',
 'Ist die Restforderung verjährt?',
 'Was bewirkt eine Abschlagszahlung, und gilt beim Neubeginn wieder die Jahresendregel?',
 'Nein. Die Abschlagszahlung ist ein Anerkenntnis, die Verjährung beginnt neu (§ 212 I Nr. 1). Die neue Frist läuft taggenau ab November 2025 bis November 2028.',
 ['Ursprünglich: Beginn Ende 2022 (§ 199 I), Ablauf 31.12.2025.',
  'Noch vor Ablauf erkennt K den Anspruch durch Abschlagszahlung an → Neubeginn der Verjährung (§ 212 I Nr. 1).',
  'Neubeginn heißt: Die volle Frist läuft ab dem Tag des Anerkenntnisses neu. Die Ultimo-Regel des § 199 I gilt dafür nicht.',
  'Frist also bis November 2028 → Klage im März 2027 rechtzeitig.'],
 'Wer stur „3 Jahre zum Jahresende“ rechnet, verpasst den Neubeginn, und wer ihn erkennt, rechnet oft fälschlich wieder bis Jahresende.');

F('3-obl', 'VL 3', 'Pflichten & Obliegenheiten', 'Zu spät ausgepackt',
 'Elektrogroßhändler E-GmbH liefert dem Elektroinstallateur I-GmbH 300 Steckdosen. I lagert die Kartons ungeprüft. Fünf Wochen später stellt ein Monteur fest, dass alle Steckdosen einen erkennbaren Gehäuseriss haben. I verlangt Neulieferung. E meint, I hätte prüfen müssen, und verlangt außerdem Schadensersatz für den Aufwand der verspäteten Bearbeitung.',
 'Hat I noch Mängelrechte? Schuldet I Schadensersatz?',
 'Ist die Untersuchung der Ware eine Pflicht oder eine Obliegenheit?',
 'Keine Mängelrechte mehr, die Ware gilt als genehmigt (§ 377 II HGB). Schadensersatz schuldet I aber nicht, weil die Rügelast eine Obliegenheit und keine Pflicht ist.',
 ['Beiderseitiger Handelskauf: Beide sind GmbH, also Kaufleute (§ 6 HGB).',
  '§ 377 I HGB: Der Käufer hat die Ware unverzüglich zu untersuchen und Mängel anzuzeigen. Ein erkennbarer Riss hätte bei Stichproben sofort auffallen müssen. Fünf Wochen sind zu lang.',
  'Folge: Die Ware gilt als genehmigt (§ 377 II HGB) → keine Nacherfüllung, kein Rücktritt, keine Minderung.',
  'Obliegenheit = Verhaltensanforderung im eigenen Interesse. Ihre Verletzung führt zu Rechtsverlust, aber nicht zu einem Schadensersatzanspruch des anderen.'],
 'Wer Obliegenheiten als Pflichten behandelt, kommt auf Schadensersatz nach § 280 und liegt falsch.');

F('3-neb', 'VL 3', 'Pflichten & Obliegenheiten', 'Der Kratzer im Parkett',
 'K kauft beim Möbelhaus M einen Kleiderschrank „inklusive Lieferung und Aufbau“. Der Schrank ist einwandfrei. Beim Hineintragen schrammt der von M eingesetzte Monteur aus Unachtsamkeit das Eichenparkett im Flur, Reparatur 700 €. M meint, der Kaufvertrag sei mangelfrei erfüllt, für den Monteur hafte er nicht.',
 'Kann K die 700 € von M verlangen?',
 'Welche Pflicht verletzt M, und wem wird das Verschulden des Monteurs zugerechnet?',
 'Ja, aus §§ 280 I, 241 II, 278. M hat eine Schutzpflicht verletzt und muss sich das Verschulden des Monteurs als seines Erfüllungsgehilfen zurechnen lassen.',
 ['Schuldverhältnis: Kaufvertrag mit Lieferung und Aufbau (§ 433).',
  'Pflichtverletzung: Die Hauptleistung ist mangelfrei. Verletzt ist aber die Nebenpflicht zur Rücksicht auf Rechtsgüter des Vertragspartners (§ 241 II).',
  'Vertretenmüssen: Der Monteur handelte fahrlässig (§ 276 II). Er wurde von M zur Erfüllung seiner Pflichten eingesetzt → Erfüllungsgehilfe, Verschulden wird M zugerechnet (§ 278), ohne Entlastungsmöglichkeit.',
  'Schaden 700 € → einfacher Schadensersatz nach § 280 I, ohne Fristsetzung.'],
 'Die mangelfreie Hauptleistung führt in die Irre. Im Vertrag gibt es auch Nebenpflichten, und § 278 kennt keine Entlastung.');

F('3-cic', 'VL 3', 'Vorvertragliche Pflichten (c.i.c.)', 'Der geplatzte Franchisevertrag',
 'Die Systemgastronomie S-GmbH verhandelt mit der Unternehmerin U über einen Franchisevertrag. S schreibt U: „Der Vertrag ist intern genehmigt, Unterschrift ist nur noch Formsache. Bitte mieten Sie schon das Ladenlokal an.“ U mietet ein Lokal (Kosten bis zur möglichen Kündigung: 9.000 €). Dann bricht S ohne jeden Grund ab, weil ein anderer Interessent auftaucht.',
 'Kann U die 9.000 € verlangen?',
 'Darf man Vertragsverhandlungen eigentlich abbrechen? Wann nicht folgenlos?',
 'Ja. §§ 280 I, 311 II Nr. 1, 241 II: S hat das Vertrauen auf einen sicheren Vertragsschluss erweckt und ohne triftigen Grund abgebrochen. U bekommt den Vertrauensschaden von 9.000 €.',
 ['Grundsatz: Abschlussfreiheit. Wer verhandelt, darf abbrechen, und Aufwendungen trägt jeder selbst.',
  'Durch Aufnahme von Vertragsverhandlungen entsteht ein Schuldverhältnis mit Rücksichtnahmepflichten (§ 311 II Nr. 1, § 241 II).',
  'Pflichtverletzung, wenn eine Partei zurechenbar das Vertrauen erweckt, der Vertrag werde sicher zustande kommen, und dann ohne triftigen Grund abbricht. Hier: „nur noch Formsache“, Aufforderung zur Anmietung, Abbruch wegen eines besseren Angebots.',
  'Vertretenmüssen vermutet (§ 280 I 2). Ersatz des negativen Interesses: 9.000 €. Kein Anspruch auf Abschluss des Vertrags.'],
 'Abschlussfreiheit gilt, aber nicht, wenn man den anderen erst zum Investieren auffordert. Bei Grundstücksgeschäften wäre die Schwelle wegen § 311b höher (nur bei vorsätzlicher Treuepflichtverletzung).');

F('3-erl1', 'VL 3', 'Erlöschen: Aufrechnung', 'Aufrechnen mit einer verjährten Forderung',
 'A hat gegen B seit März 2021 einen Darlehensrückzahlungsanspruch über 300 € (verjährt mit Ablauf des 31.12.2024). Im Juli 2023 kauft A bei B ein gebrauchtes Rad für 500 €, zahlbar sofort. A zahlt nicht. Im Februar 2026 verlangt B die 500 €. A erklärt die Aufrechnung mit seinen 300 €. B: „Deine Forderung ist doch verjährt!“',
 'Wie viel muss A noch zahlen?',
 'Kommt es auf die Verjährung im Zeitpunkt der Aufrechnungserklärung an oder auf einen früheren Zeitpunkt?',
 'Nur 200 €. Die Aufrechnung mit der verjährten Forderung ist zulässig, weil sie im Juli 2023 bei Entstehen der Aufrechnungslage noch nicht verjährt war (§ 215).',
 ['Aufrechnung (§ 387): gegenseitige, gleichartige Forderungen, die Gegenforderung (des A) muss fällig und durchsetzbar, die Hauptforderung (des B) erfüllbar sein.',
  'Grundsätzlich kann mit einer einredebehafteten Forderung nicht aufgerechnet werden (§ 390).',
  'Ausnahme § 215: Die Verjährung schließt die Aufrechnung nicht aus, wenn der Anspruch in dem Zeitpunkt noch nicht verjährt war, in dem erstmals aufgerechnet werden konnte. Aufrechnungslage im Juli 2023, die Darlehensforderung war damals unverjährt.',
  'Folge: Beide Forderungen erlöschen, soweit sie sich decken (§ 389) → A schuldet noch 200 €.'],
 'Die Verjährung im Jahr 2026 wirkt wie ein K.-o.-Argument. § 215 schützt aber, wer sich auf die Verrechnung verlassen durfte.');

F('3-erl2', 'VL 3', 'Erlöschen: Kündigung', 'Umzug und Fitnessstudio',
 'Studentin S schließt einen Fitnessstudio-Vertrag mit 24 Monaten Laufzeit. Nach 8 Monaten zieht sie für ihr Praxissemester nach Hamburg. Dort hat die Kette kein Studio. S erklärt den „Rücktritt“, hilfsweise die fristlose Kündigung, und verlangt die bisher gezahlten Beiträge zurück.',
 'Ist der Vertrag beendet? Bekommt S Beiträge zurück?',
 'Wie beendet man ein Dauerschuldverhältnis vorzeitig, und wessen Risiko ist ein Umzug?',
 'Nein. Ein Rücktritt passt beim Dauerschuldverhältnis nicht, eine fristlose Kündigung (§ 314) scheitert, weil ein Umzug nach der Rechtsprechung des BGH grundsätzlich kein wichtiger Grund ist. Selbst eine wirksame Kündigung wirkte nur für die Zukunft.',
 ['Dauerschuldverhältnis: An die Stelle des Rücktritts tritt die Kündigung (§ 314), die nur ex nunc wirkt. Gezahlte Beiträge für die Vergangenheit sind nie zurückzuzahlen.',
  'Wichtiger Grund (§ 314 I): Dem Kündigenden darf die Fortsetzung nicht zumutbar sein, und der Grund darf grundsätzlich nicht aus seiner eigenen Risikosphäre stammen.',
  'Ein Wohnortwechsel liegt in der Sphäre der Kundin (BGH, XII ZR 62/15) → kein wichtiger Grund.',
  'Hinweis: Für neue Verbraucherverträge ab März 2022 begrenzt § 309 Nr. 9 lange Laufzeiten. Nach der Mindestlaufzeit ist monatlich kündbar.'],
 'Rücktritt und Kündigung werden oft vermischt. Beim Dauerschuldverhältnis gibt es grundsätzlich nur die Kündigung, und die wirkt nie zurück.');

F('3-pv', 'VL 3', 'Pflichtverletzung: Überblick', 'Zwei Fehler, zwei Anspruchsgrundlagen',
 'K bringt sein Auto in die Werkstatt W, Fertigstellung fest zugesagt für Freitag. W wird erst am folgenden Mittwoch fertig, weil sie den Auftrag vergessen hat. K mietet für die fünf Tage einen Ersatzwagen (300 €). Außerdem hat ein Mechaniker beim Rangieren den Lack zerkratzt (Reparatur 400 €). W meint, K hätte erst eine Frist setzen müssen.',
 'Welche Ansprüche hat K, und braucht er eine Frist?',
 'Ordne jeden Schaden der passenden Pflichtverletzung zu.',
 'Mietwagen 300 € aus §§ 280 I, II, 286 (Verzug, Mahnung wegen Kalendertermins entbehrlich). Lackschaden 400 € aus §§ 280 I, 241 II, 278. Für beide braucht K keine Frist.',
 ['Verspätung: Verzögerungsschaden nach §§ 280 I, II, 286. Der Termin „Freitag“ ist nach dem Kalender bestimmt → Mahnung entbehrlich (§ 286 II Nr. 1). Vertretenmüssen: W hat den Auftrag vergessen (§ 286 IV, 276). → 300 €.',
  'Kratzer: Verletzung einer Schutzpflicht (§ 241 II). Der Mechaniker ist Erfüllungsgehilfe (§ 278) → einfacher Schadensersatz neben der Leistung nach § 280 I → 400 €.',
  'Eine Fristsetzung braucht man nur für Schadensersatz statt der Leistung (§ 281) oder für den Rücktritt (§ 323). Beides verlangt K nicht.'],
 'Die Fristsetzung gehört nur zu SE statt der Leistung und zum Rücktritt, nicht zum Schadensersatz neben der Leistung.');

window.dispatchEvent(new Event('wpr-data'));
})();
