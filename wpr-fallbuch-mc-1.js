(function () {
// Antwortmöglichkeiten a–f im Stil der Weiden/Wende-Probeklausur (genau eine richtig) – Fallbuch VL 1–3
const M = (window.WPRK_FB_MC = window.WPRK_FB_MC || {});
const A = 'Welche Aussage ist richtig?', K = 'Welche Kombination ist richtig?';
const S = (id, q, c, o, st) => { M[id] = st ? { q, c, o, st } : { q, c, o }; };
const ALLE = ['Alle anderen Antworten sind falsch.'];

S('1-ger', A, 3, [
 ['Zuständig ist das Landgericht, weil der Gesamtbetrag von 10.700 € die Grenze des § 23 Nr. 1 GVG übersteigt.', 'Falsch. Zinsen und Kosten, die neben der Hauptforderung verlangt werden, zählen nicht mit (§ 4 I ZPO). Streitwert 9.800 €.'],
 ['Zuständig ist das Amtsgericht; über eine Berufung entscheidet das Oberlandesgericht.', 'Falsch. Berufungen gegen Urteile des Amtsgerichts gehen an das Landgericht (§ 72 I GVG).'],
 ['Zuständig ist das Amtsgericht; H braucht dort einen Anwalt, weil der Streitwert über 5.000 € liegt.', 'Falsch. Anwaltszwang gibt es erst vor dem Landgericht (§ 78 I ZPO). 5.000 € war die alte Zuständigkeitsgrenze.'],
 ['Zuständig ist das Amtsgericht; H kann ohne Anwalt klagen, und die Berufung geht an das Landgericht (§ 72 I GVG).', 'Richtig. Streitwert 9.800 € (§ 4 I ZPO) → AG (§ 23 Nr. 1 GVG), kein Anwaltszwang, Berufung zum LG (§ 72 I GVG).'],
 ['Zuständig ist das Landgericht, weil vorgerichtliche Anwaltskosten den Streitwert erhöhen.', 'Falsch. Auch vorgerichtliche Anwaltskosten sind neben der Hauptforderung eine Nebenforderung.'],
 [...ALLE, 'Falsch. Antwort d ist richtig.']]);

S('1-oer', A, 4, [
 ['Öffentliches Recht, weil die Stadt Alleingesellschafterin ist; S darf einen Zahlungsbescheid erlassen.', 'Falsch. Entscheidend ist die Form des Handelns, nicht der Eigentümer. S handelt durch Vertrag.'],
 ['Privatrecht; S muss die Forderung aber vor dem Verwaltungsgericht einklagen, weil die Stadt dahintersteht.', 'Falsch. Privatrechtliche Streitigkeiten gehören vor die ordentlichen Gerichte.'],
 ['Privatrecht; S kann ohne Titel durch einen Gerichtsvollzieher vollstrecken lassen, weil der Vertrag schriftlich ist.', 'Falsch. Vollstreckt wird nur aus einem Titel (Urteil, Vollstreckungsbescheid).'],
 ['Öffentliches Recht, weil Stromversorgung Daseinsvorsorge ist und S für die Stadt hoheitlich tätig wird; S kann per Bescheid fordern.', 'Falsch. Auch Daseinsvorsorge kann privatrechtlich organisiert sein. S schließt Verträge auf Augenhöhe; ein Bescheid setzt eine Ermächtigung im öffentlichen Recht voraus.'],
 ['Privatrecht; S braucht wie jeder Gläubiger einen Titel, etwa einen Vollstreckungsbescheid oder ein Urteil des Zivilgerichts.', 'Richtig. Gleichordnung durch Vertrag (§§ 433, 453) → ordentlicher Rechtsweg → Titel nötig.'],
 ['Privatrecht; S muss vor dem Amtsgericht klagen, weil Stromlieferverträge Dienstverträge (§ 611) sind und das Mahnverfahren ausscheidet.', 'Falsch. Strom wird als sonstiger Gegenstand gekauft (§§ 433, 453 I), und das Mahnverfahren steht jedem Gläubiger einer Geldforderung offen (§ 688 ZPO).']]);

S('1-ver', A, 1, [
 ['Z ist Unternehmerin, weil sie Freiberuflerin ist und den Laptop auch beruflich nutzt.', 'Falsch. Es zählt der Zweck des konkreten Geschäfts, nicht der Beruf.'],
 ['Z ist Verbraucherin, weil der Laptop überwiegend privat genutzt wird; die Vermutung des § 477 I greift.', 'Richtig. § 13 stellt auf den überwiegenden Zweck ab. Mangel nach 10 Monaten → innerhalb eines Jahres (§ 477 I).'],
 ['Z ist Verbraucherin, die Vermutung greift aber nicht, weil sich der Mangel erst nach mehr als sechs Monaten zeigte.', 'Falsch. Seit 2022 gilt die Vermutung ein Jahr (§ 477 I 1).'],
 ['Z ist nur dann Verbraucherin, wenn sie E beim Kauf ausdrücklich auf die private Nutzung hingewiesen hat.', 'Falsch. Ein Hinweis ist keine Voraussetzung. Es kommt auf den objektiv überwiegenden Zweck an.'],
 ['Bei gemischter Nutzung ist Z stets Unternehmerin, sobald ein beruflicher Anteil besteht.', 'Falsch. Das Gesetz sagt „überwiegend“ – ein beruflicher Anteil von 30 % reicht nicht.'],
 ['Z ist Verbraucherin, die Beweislastumkehr gilt aber nur für die ersten 30 Tage nach Übergabe.', 'Falsch. Die 30 Tage gehören zu § 286 III (Verzug), nicht zu § 477.']]);

S('1-kfm', A, 2, [
 ['S hat seine Mängelrechte nach § 377 II HGB verloren, weil jeder Gewerbetreibende Kaufmann ist und unverzüglich rügen muss.', 'Falsch. § 377 HGB setzt voraus, dass beide Parteien Kaufleute sind. Gewerbe allein reicht nicht.'],
 ['S behält seine Mängelrechte und kann sich zusätzlich auf die Beweislastumkehr des § 477 berufen.', 'Falsch. S handelt gewerblich und ist damit Unternehmer, kein Verbraucher. Verbrauchsgüterkaufrecht gilt nicht.'],
 ['S behält seine Mängelrechte, weil er als nicht eingetragener Kleingewerbetreibender kein Kaufmann ist.', 'Richtig. § 1 II HGB (Kleingewerbe), § 2 HGB (Kaufmann erst durch Eintragung) → kein beiderseitiger Handelskauf. Verbraucher ist S aber auch nicht, sondern Unternehmer (§ 14).'],
 ['S hat seine Rechte verloren, weil § 377 HGB schon gilt, wenn nur der Verkäufer Kaufmann ist und der Käufer gewerblich handelt.', 'Falsch. Erforderlich ist ein beiderseitiges Handelsgeschäft.'],
 ['S behält seine Rechte, weil § 377 HGB nur offensichtliche Mängel erfasst, die man bei der Ablieferung sofort erkennt.', 'Falsch. § 377 HGB erfasst auch verdeckte Mängel; sie sind unverzüglich nach Entdeckung zu rügen (§ 377 III). Entscheidend ist hier, dass S kein Kaufmann ist.'],
 ['S ist Kaufmann kraft Gewerbebetriebs (§ 1 I HGB), muss Mängel aber erst binnen sechs Wochen rügen.', 'Falsch. Kleingewerbe ist kein Handelsgewerbe. Und § 377 HGB verlangt eine unverzügliche Rüge.']]);

S('1-tier', A, 1, [
 ['R muss nur 300 € zahlen, weil bei unverhältnismäßigen Herstellungskosten nur Wertersatz geschuldet ist (§ 251 II 1).', 'Falsch. Für Tiere enthält § 251 II 2 eine Sonderregel.'],
 ['R muss die 3.000 € grundsätzlich voll tragen, obwohl sie den Wert des Hundes um das Zehnfache übersteigen (§ 251 II 2).', 'Richtig. Heilbehandlungskosten für ein Tier sind nicht schon deshalb unverhältnismäßig, weil sie den Tierwert erheblich übersteigen (§ 251 II 2).'],
 ['R muss nichts zahlen, weil ein Tier keine Sache ist und § 823 I das Eigentum an Tieren daher nicht schützt (§ 90a S. 1).', 'Falsch. Auf Tiere sind die Sachvorschriften entsprechend anwendbar (§ 90a). Das Eigentum am Hund ist geschützt.'],
 ['R muss die 3.000 € nur zahlen, wenn H die Operation vorher mit ihm abgestimmt und ihm eine Frist zur Herstellung gesetzt hat.', 'Falsch. Bei Sachbeschädigung kann der Geschädigte den Geldbetrag direkt verlangen (§ 249 II 1). Weder eine Abstimmung noch eine Frist (§ 250) ist nötig.'],
 ['R muss die 3.000 € zahlen, aber nur aus Vertrag; § 823 I scheidet aus, weil Tiere nur über § 833 geschützt werden.', 'Falsch. Zwischen R und H besteht kein Vertrag. § 823 I schützt das Eigentum am Hund (§ 90a). § 833 regelt die Haftung des Tierhalters, nicht den Schutz des Tieres.'],
 ['R muss höchstens das Doppelte des Tierwerts zahlen, also 600 €, weil § 251 II 2 nur eine maßvolle Überschreitung erlaubt.', 'Falsch. Eine feste Obergrenze gibt es nicht. Maßstab ist, was ein verständiger Tierhalter veranlasst hätte.']]);

S('1-recht', A, 3, [
 ['B ist Eigentümer der Domain geworden, weil Kaufvertrag und Zahlung vorliegen.', 'Falsch. An Rechten gibt es kein Eigentum, und der Kaufvertrag allein überträgt nichts (Trennungsprinzip).'],
 ['Der Kaufvertrag ist unwirksam, weil Gegenstand eines Kaufs nach § 433 I nur Sachen sein können; B kann die Zahlung kondizieren.', 'Falsch. Auch Rechte und sonstige Gegenstände können gekauft werden (§ 453 I).'],
 ['B kann die Domain nach § 985 herausverlangen, weil er mit der Zahlung des Kaufpreises Inhaber geworden ist.', 'Falsch. § 985 setzt Eigentum an einer Sache voraus. Eine Domain ist keine Sache, und die Zahlung überträgt nichts.'],
 ['B kann aus §§ 453 I, 433 I die Übertragung der Domain verlangen; §§ 929 und 985 passen nicht.', 'Richtig. Rechtskauf ist wirksam. Übertragen wird durch Abtretung bzw. Vertragsübernahme (§§ 413, 398), nicht durch Übereignung.'],
 ['B kann nur Schadensersatz verlangen, weil eine Übertragung von Rechten gesetzlich nicht vorgesehen ist.', 'Falsch. §§ 398, 413 regeln die Übertragung von Forderungen und anderen Rechten.'],
 ['Die Domain wird nach § 929 S. 1 übereignet, sobald A dem B die Zugangsdaten übergibt; bis dahin bleibt A Eigentümer.', 'Falsch. Zugangsdaten sind kein Besitz an einer Sache. § 929 gilt nur für bewegliche Sachen.']]);

S('1-abs1', A, 1, [
 ['K kann das Geld nach § 985 herausverlangen, weil die Anfechtung auch die Übereignung des Geldes beseitigt.', 'Falsch. Der Eigenschaftsirrtum betrifft nur den Kaufvertrag. Bei der Übereignung des Geldes irrte K nicht.'],
 ['K kann das Geld nach § 812 I 1 zurückverlangen; V ist Eigentümer des Geldes geworden.', 'Richtig. Abstraktionsprinzip: Übereignung wirksam, Rechtsgrund durch Anfechtung entfallen (§ 142 I) → § 812.'],
 ['K kann nichts zurückverlangen, weil V gutgläubig war.', 'Falsch. Gutgläubigkeit schließt die Rückabwicklung nach § 812 nicht aus.'],
 ['Kaufvertrag und Übereignung des Geldes sind wegen Fehleridentität nichtig.', 'Falsch. Fehleridentität liegt typisch bei Täuschung (§ 123) vor, nicht bei einem Irrtum über die Kaufsache.'],
 ['Die Übereignung der Uhr an K ist nichtig, V kann die Uhr nach § 985 zurückverlangen.', 'Falsch. Auch die Übereignung der Uhr bleibt wirksam. V muss ebenfalls nach § 812 kondizieren.'],
 [...ALLE, 'Falsch. Antwort b ist richtig.']]);

S('1-abs2', A, 5, [
 ['R kann nur nach § 812 kondizieren, weil die Übereignung wegen des Abstraktionsprinzips wirksam bleibt.', 'Falsch. § 138 II erfasst auch das Erfüllungsgeschäft des Bewucherten.'],
 ['R kann nichts verlangen, weil sie freiwillig verkauft hat und ein bloß ungünstiger Preis den Vertrag nicht berührt.', 'Falsch. Freiwilligkeit schließt Wucher nicht aus – ausgenutzt wird gerade die Zwangslage.'],
 ['Der Kaufvertrag ist nur nach § 123 anfechtbar; R muss binnen eines Jahres anfechten, die Übereignung bleibt bis dahin wirksam.', 'Falsch. Wucher führt zur Nichtigkeit (§ 138 II), ohne dass angefochten werden muss.'],
 ['Kaufvertrag und Übereignung sind nichtig; R kann die Kommode aber erst nach Rückzahlung der 900 € verlangen.', 'Falsch. Der Herausgabeanspruch aus § 985 hängt nicht von einer Vorleistung ab. Die 900 € schuldet R gesondert nach § 812.'],
 ['W ist Eigentümer geworden, weil § 138 II nur das Verpflichtungsgeschäft erfasst; R hat lediglich einen Anspruch aus § 826.', 'Falsch. „Gewähren lässt“ erfasst auch die Übereignung durch den Bewucherten. W ist nicht Eigentümer geworden.'],
 ['R ist Eigentümerin geblieben, weil § 138 II auch ihre Übereignung an W erfasst; sie kann nach § 985 herausverlangen.', 'Richtig. „Gewähren lässt“ meint das Erfüllungsgeschäft des Bewucherten → Übereignung nichtig → § 985.']]);

S('2-we1', A, 2, [
 ['Mangels Handlungswillens liegt keine Willenserklärung vor, weil G nur einem Bekannten zuwinken wollte; er ist nicht gebunden.', 'Falsch. G hob die Hand bewusst. Handlungswille ist vorhanden.'],
 ['Mangels Erklärungsbewusstseins liegt keine Willenserklärung vor; G muss nicht anfechten.', 'Falsch. Fehlendes Erklärungsbewusstsein ist unschädlich, wenn G hätte erkennen können, dass sein Verhalten als Gebot verstanden wird.'],
 ['G ist gebunden, kann aber unverzüglich anfechten und schuldet dann den Vertrauensschaden.', 'Richtig. WE wirksam (Zurechnung), Anfechtung analog § 119 I, unverzüglich (§ 121), Ersatz nach § 122.'],
 ['G ist gebunden und kann nicht anfechten, weil er die Versteigerungsregeln hätte kennen müssen.', 'Falsch. Das fahrlässige Verkennen macht die WE wirksam, nimmt aber nicht das Anfechtungsrecht.'],
 ['Bei einer Versteigerung kommt der Vertrag erst mit Bezahlung und Übergabe zustande; G kann einfach nicht zahlen.', 'Falsch. Bei der Versteigerung kommt der Vertrag durch den Zuschlag zustande (§ 156).'],
 ['G kann anfechten, schuldet dann aber den vollen Kaufpreis als Schadensersatz, weil der Versteigerer auf das Gebot vertraut hat.', 'Falsch. § 122 ersetzt nur das negative Interesse, nicht den Kaufpreis.']]);

S('2-we2', A, 4, [
 ['B hat einen Anspruch aus §§ 662, 280 I, weil N den Auftrag angenommen und versprochen hat, die Briefe einzuwerfen.', 'Falsch. Ein Auftrag setzt Rechtsbindungswillen voraus, der bei dieser Alltagsgefälligkeit fehlt.'],
 ['B hat einen Anspruch aus § 823 I wegen Verletzung ihres Eigentums an den Briefen.', 'Falsch. Die Briefe wurden nicht beschädigt. Es geht um einen reinen Vermögensschaden.'],
 ['B hat einen Anspruch aus § 280 I, gekürzt um ihr Mitverschulden nach § 254, weil sie N nicht an die Frist erinnert hat.', 'Falsch. Es fehlt schon an einem Schuldverhältnis.'],
 ['B hat keinen Anspruch, weil N als Gefälligkeitsschuldner nur für eigenübliche Sorgfalt haftet (§ 277).', 'Falsch. § 277 ist ein Haftungsmaßstab innerhalb eines Schuldverhältnisses. Hier gibt es gar keines.'],
 ['B hat keinen Anspruch: kein Rechtsbindungswille, und § 823 I ersetzt keinen reinen Vermögensschaden.', 'Richtig. Gefälligkeit ohne Rechtsbindung → kein Vertrag. Delikt schützt nur absolute Rechtsgüter.'],
 ['B hat einen Anspruch aus §§ 311 II, 241 II, 280 I (c.i.c.), weil N durch seine Zusage besonderes Vertrauen erweckt hat.', 'Falsch. c.i.c. setzt Vertragsverhandlungen oder einen geschäftlichen Kontakt voraus (§ 311 II).']]);

S('2-zug1', A, 0, [
 ['Kein Vertrag: Die verspätete Annahme ging erst am Montag zu und gilt als neues Angebot, das D ablehnen darf (§ 150 I).', 'Richtig. Zugang erst bei der nächsten üblichen Leerung (Montag) → nach Fristablauf → § 150 I.'],
 ['Vertrag am Samstag, weil der Brief vor 24 Uhr im Briefkasten lag.', 'Falsch. Machtbereich allein genügt nicht. Es kommt auf die gewöhnliche Kenntnisnahme an.'],
 ['Vertrag, weil es für die Rechtzeitigkeit auf die Abgabe der Annahme ankommt.', 'Falsch. Empfangsbedürftige Erklärungen werden mit Zugang wirksam (§ 130 I 1).'],
 ['Kein Vertrag, weil Annahmeerklärungen unter Unternehmern schriftlich bestätigt werden müssen.', 'Falsch. Eine solche Formvorschrift gibt es nicht.'],
 ['Vertrag, weil die verspätete Annahme nach § 149 als rechtzeitig gilt.', 'Falsch. § 149 betrifft nur rechtzeitig abgesandte Erklärungen, die wegen einer Beförderungsstörung verspätet ankommen.'],
 ['Kein Vertrag; D muss V die Verspätung aber unverzüglich anzeigen, sonst gilt die Annahme als rechtzeitig.', 'Falsch. Diese Anzeigepflicht folgt aus § 149 und setzt eine unregelmäßige Beförderung voraus.']]);

S('2-zug2', A, 3, [
 ['Der Widerruf ist wirksam, weil B den Brief erst am Mittwoch gelesen hat und der Anruf vorher bei ihm ankam (§ 130 I 2).', 'Falsch. Auf die tatsächliche Kenntnisnahme kommt es nicht an. Zugegangen war der Brief schon am Dienstagvormittag.'],
 ['Der Widerruf ist wirksam, weil ein Angebot bis zur Annahme frei widerruflich ist.', 'Falsch. Wer ein Angebot macht, ist daran gebunden (§ 145).'],
 ['Der Widerruf ist wirksam, weil Briefe an Privatpersonen erst am nächsten Morgen zugehen.', 'Falsch. Das gilt für Einwürfe am Abend. Beim Einwurf um 10 Uhr ist mit Leerung am selben Tag zu rechnen.'],
 ['Der Vertrag ist zustande gekommen, weil der Brief schon am Dienstagvormittag zuging.', 'Richtig. Zugang vor dem Widerruf → Widerruf wirkungslos (§ 130 I 2) → Annahme am Mittwoch.'],
 ['Kein Vertrag, weil A’s Anruf zugleich eine unverzügliche Anfechtung wegen Inhaltsirrtums ist (§§ 119 I, 121).', 'Falsch. Bloße Reue ist kein Irrtum.'],
 ['Der Vertrag ist zustande gekommen, A kann sich aber durch Widerruf nach § 355 lösen.', 'Falsch. Ein Widerrufsrecht nach § 355 haben nur Verbraucher bei bestimmten Verträgen mit Unternehmern.']]);

S('2-vs1', A, 5, [
 ['Kaufvertrag zu 49 €, weil die Shop-Seite ein Angebot an jedermann ist, das K mit seiner Bestellung angenommen hat.', 'Falsch. Die Warenpräsentation ist eine invitatio ad offerendum.'],
 ['Kaufvertrag zu 49 €; U kann wegen Erklärungsirrtums anfechten und schuldet dann den Vertrauensschaden.', 'Falsch. Es fehlt schon an einer Annahme. Anfechtung ist erst nötig, wenn ein Vertrag besteht.'],
 ['Kaufvertrag zu 499 €, weil der wirkliche Wille des U maßgeblich ist (§ 133).', 'Falsch. Es besteht kein Vertrag, und K hat keinen Kauf zu 499 € erklärt.'],
 ['Kaufvertrag über einen Fernseher, weil die Eingangsbestätigung eine Teilannahme ist; U darf nur die Menge ablehnen.', 'Falsch. U hat keine Annahme erklärt, auch nicht für ein Stück.'],
 ['Kein Vertrag, weil Onlineverträge erst mit der Zahlung zustande kommen; die Bestellung ist bis dahin frei widerruflich.', 'Falsch. Auch online kommt der Vertrag durch Angebot und Annahme zustande.'],
 ['Kein Vertrag, weil die automatische E-Mail nur den Eingang der Bestellung bestätigt und keine Annahme enthält.', 'Richtig. Eingangsbestätigung (§ 312i I 1 Nr. 3) ≠ Annahme. Ohne Vertrag muss U auch nicht anfechten.']]);

S('2-vs2', A, 2, [
 ['Ein Kaufvertrag ist zustande gekommen, weil R nicht binnen 14 Tagen widersprochen hat.', 'Falsch. Schweigen ist keine Annahme, und eine einseitige Ankündigung ändert daran nichts.'],
 ['Kein Kaufvertrag; R muss das Buch aber auf Kosten von L zurückschicken, weil sie sonst ungerechtfertigt bereichert wäre.', 'Falsch. § 241a I schließt jeden Anspruch gegen den Verbraucher aus, auch auf Rücksendung.'],
 ['R muss weder zahlen noch zurückschicken; L hat nicht einmal einen Herausgabeanspruch.', 'Richtig. § 241a I: Unbestellte Leistung begründet keine Ansprüche gegen den Verbraucher, auch nicht aus § 985 oder § 812.'],
 ['Kein Kaufvertrag; L kann das Buch aber nach § 985 herausverlangen, weil § 241a nur vertragliche Ansprüche ausschließt.', 'Falsch. Auch der Herausgabeanspruch ist durch § 241a I ausgeschlossen.'],
 ['Kein Kaufvertrag; R schuldet aber Nutzungsersatz, sobald sie im Buch liest.', 'Falsch. Auch Nutzungsersatz ist ausgeschlossen.'],
 ['R kann binnen 14 Tagen ab Erhalt widerrufen (§ 355); danach gilt ihr Schweigen als Annahme des Angebots.', 'Falsch. Es gibt keinen Vertrag, den man widerrufen müsste.']]);

S('2-vs3', K, 1, [
 ['1 und 3', 'Falsch. Auch Aussage 4 stimmt: Wer bewusst etwas anderes bestätigt als vereinbart, ist nicht schutzwürdig.'],
 ['1, 3 und 4', 'Richtig. KBS mit Inhalt des Schreibens (1), Holschuld (3), kein Schutz des unredlichen Absenders (4).'],
 ['2 und 3', 'Falsch. Aussage 2 ist falsch: Unter Kaufleuten gilt Schweigen auf ein Bestätigungsschreiben als Zustimmung.'],
 ['1, 4 und 5', 'Falsch. Aussage 5 ist falsch: Das KBS setzt kaufmännischen Verkehr voraus.'],
 ['3 und 5', 'Falsch. Aussage 5 ist falsch, und 1 sowie 4 fehlen.'],
 ['nur 1', 'Falsch. Auch 3 und 4 stimmen.']],
 ['Zwischen S und H ist ein Vertrag mit dem Inhalt des Bestätigungsschreibens zustande gekommen.',
  'Das Schweigen der S gilt nicht als Zustimmung, weil Schweigen im Rechtsverkehr nie eine Willenserklärung ist.',
  'S muss das Holz bei H abholen.',
  'Hätte H bewusst etwas anderes bestätigt, als telefonisch vereinbart war, wäre der abweichende Inhalt nicht Vertragsinhalt geworden.',
  'Die Grundsätze des kaufmännischen Bestätigungsschreibens gälten auch, wenn S Verbraucherin wäre.']);

S('2-rg1', A, 3, [
 ['S hat keinen Anspruch, weil sie das Angebot mangels Kenntnis nicht annehmen konnte.', 'Falsch. Die Auslobung ist kein Vertrag, eine Annahme ist nicht nötig.'],
 ['S hat nur den gesetzlichen Finderlohn (§ 971), weil die Auslobung ein Vertragsangebot ist.', 'Falsch. Die Auslobung ist ein einseitiges Rechtsgeschäft.'],
 ['S hat keinen Anspruch, weil sie als Schülerin ohne Zustimmung der Eltern keinen Vertrag schließen kann.', 'Falsch. S muss nichts erklären. Der Anspruch entsteht durch die Handlung.'],
 ['S hat Anspruch auf die 200 €, auch wenn sie von der Auslobung nichts wusste (§ 657).', 'Richtig. § 657 Hs. 2: „auch wenn der Handelnde nicht mit Rücksicht auf die Auslobung gehandelt hat“.'],
 ['S hat Anspruch auf 200 €, aber nur, wenn sie die Zettel vor der Rückgabe gelesen hat.', 'Falsch. Kenntnis ist gerade nicht erforderlich.'],
 ['S hat Anspruch auf 200 € aus §§ 145, 151, weil E auf den Zugang der Annahme verzichtet hat.', 'Falsch. Ergebnis richtig, Begründung falsch: Anspruchsgrundlage ist § 657, kein Vertrag.']]);

S('2-typ', A, 0, [
 ['S muss 8.000 € zahlen; Mängelrechte wie beim Werkvertrag hat S nicht.', 'Richtig. Dienstvertrag (§ 611): Tätigkeit geschuldet, nicht Erfolg. Vergütung 100 × 80 €.'],
 ['S muss nicht zahlen, weil der geschuldete Erfolg – eine funktionierende App – ausgeblieben ist.', 'Falsch. Ein Erfolg war nicht geschuldet („nach besten Kräften mitarbeiten“, Stundenlohn).'],
 ['S kann nach § 634 Nachbesserung verlangen und bis dahin die Vergütung zurückhalten.', 'Falsch. § 634 gilt nur im Werkvertragsrecht.'],
 ['Es liegt ein Kaufvertrag über Software vor; S kann zurücktreten.', 'Falsch. Gekauft wurde keine fertige Software, sondern Arbeitszeit.'],
 ['S muss zahlen, kann aber mindern, weil die Arbeit nutzlos war.', 'Falsch. Das Dienstvertragsrecht kennt keine Minderung.'],
 ['S muss nur die Hälfte zahlen, weil beide zum Misserfolg beigetragen haben (§ 254).', 'Falsch. § 254 kürzt Schadensersatz, nicht die Vergütung.']]);

S('2-form1', A, 4, [
 ['Die Bürgschaft ist wirksam, weil die qualifizierte elektronische Signatur die Schriftform ersetzt (§ 126 III).', 'Falsch. § 766 S. 2 schließt die elektronische Form ausdrücklich aus.'],
 ['Die Bürgschaft ist wirksam, weil B als GmbH-Geschäftsführer Kaufmann ist (§ 350 HGB).', 'Falsch. Kaufmann ist die GmbH, nicht ihr Geschäftsführer.'],
 ['Die Bürgschaft ist wirksam, weil § 766 bei Bürgschaften unter Unternehmern nur Textform verlangt (§ 126b).', 'Falsch. § 766 S. 1 verlangt schriftliche Erteilung.'],
 ['Die Bürgschaft war nichtig, wurde aber durch die Insolvenz der GmbH geheilt, weil B nun als Bürge in Anspruch genommen wird.', 'Falsch. Heilung tritt nur ein, soweit der Bürge die Hauptschuld erfüllt (§ 766 S. 3).'],
 ['Die Bürgschaft ist nichtig; die elektronische Form ist ausgeschlossen, und § 350 HGB hilft B als Nichtkaufmann nicht.', 'Richtig. §§ 766 S. 1, 2, 125 S. 1. § 350 HGB setzt voraus, dass die Bürgschaft für den Bürgen ein Handelsgeschäft ist.'],
 ['Die Bürgschaft ist nichtig, B haftet aber aus c.i.c. auf die vollen 20.000 €, weil er den Formfehler hätte erkennen müssen.', 'Falsch. Über c.i.c. würde die Formvorschrift ausgehebelt. Ersatzfähig wäre allenfalls ein Vertrauensschaden.']]);

S('2-form2', A, 1, [
 ['Ja, aus § 812, weil das Schenkungsversprechen mangels notarieller Form nichtig war.', 'Falsch. Der Formmangel wurde durch die Leistung geheilt (§ 518 II).'],
 ['Nein. Der Formmangel ist durch die Überweisung geheilt; ein Streit ist kein grober Undank.', 'Richtig. Heilung durch Bewirkung der Leistung. Widerruf (§ 530) setzt eine schwere Verfehlung voraus.'],
 ['Ja, weil eine Schenkung bis zu einem Jahr nach der Leistung frei widerruflich ist, solange kein Notar beteiligt war.', 'Falsch. Ein freies Widerrufsrecht gibt es bei der Schenkung nicht.'],
 ['Nein, weil ein mündliches Schenkungsversprechen vor zwei Zeugen der notariellen Beurkundung gleichsteht.', 'Falsch. Ergebnis richtig, Begründung falsch: Zeugen ersetzen die notarielle Beurkundung nicht.'],
 ['Ja, aber nur, wenn O binnen eines Jahres wegen Irrtums über die künftige Beziehung anficht (§ 119 II).', 'Falsch. Es gibt keinen Anfechtungsgrund. Reue ist kein Irrtum.'],
 ['Nein, weil die Rückforderung nach § 817 S. 2 ausgeschlossen ist, wenn der Leistende die Formnichtigkeit kannte.', 'Falsch. § 817 S. 2 betrifft Gesetzes- und Sittenverstöße; für Leistung in Kenntnis der Nichtschuld gälte § 814. Hier besteht aber ohnehin ein Rechtsgrund.']]);

S('2-wh1', A, 5, [
 ['Der Kaufvertrag ist wirksam, weil ein geheimer Vorbehalt unbeachtlich ist (§ 116 S. 1).', 'Falsch. A erwartete, dass B den Scherz erkennt. Das ist § 118, nicht § 116.'],
 ['Der Vertrag ist nach § 118 nichtig, A muss B aber die 1.500 € als Vertrauensschaden ersetzen (§ 122 I).', 'Falsch. Der Ersatz ist ausgeschlossen, weil B die fehlende Ernstlichkeit kennen musste (§ 122 II).'],
 ['Der Vertrag ist als Scheingeschäft nichtig (§ 117 I); B kann aber den Vertrauensschaden verlangen (§ 122 I).', 'Falsch. Ein Scheingeschäft setzt voraus, dass beide den Schein einvernehmlich wollen. B nahm das Angebot ernst.'],
 ['Der Vertrag ist wirksam; A kann wegen Inhaltsirrtums anfechten und schuldet dann 1.500 €.', 'Falsch. A irrte nicht, er scherzte.'],
 ['Der Vertrag ist nichtig, weil ein Preis von 1 € für einen Porsche sittenwidrig ist (§ 138 I); A schuldet nichts.', 'Falsch. Ein auffälliger Preis allein macht ein Geschäft nicht sittenwidrig.'],
 ['A muss weder übereignen noch die 1.500 € ersetzen, weil B den Scherz erkennen musste.', 'Richtig. Nichtig nach § 118. B musste den Scherz erkennen → kein Ersatz.']]);

S('2-wh2', K, 2, [
 ['1 und 3', 'Falsch. Aussage 3 ist falsch: Die Rückforderung scheitert an § 817 S. 2.'],
 ['2 und 4', 'Falsch. Aussage 2 ist falsch: Der ganze Vertrag ist nichtig.'],
 ['1 und 4', 'Richtig. Gesamtnichtigkeit nach § 134 i. V. m. SchwarzArbG, Rückforderung nach § 817 S. 2 ausgeschlossen.'],
 ['1, 4 und 5', 'Falsch. Aussage 5 ist falsch: Auch der Wertersatz des Unternehmers scheitert nach dem BGH an § 817 S. 2.'],
 ['nur 2', 'Falsch. Aussage 2 ist falsch.'],
 ['1 und 5', 'Falsch. Aussage 5 ist falsch.']],
 ['Der Werkvertrag ist insgesamt nach § 134 nichtig.',
  'H hat Mängelrechte aus § 634, weil nur die Ohne-Rechnung-Abrede nichtig ist.',
  'H kann die 6.000 € nach § 812 zurückverlangen.',
  'Die Rückforderung der 6.000 € scheitert an § 817 S. 2.',
  'Hätte F noch nicht kassiert, könnte er Wertersatz nach § 818 II verlangen.']);

S('3-anf1', A, 3, [
 ['Vertrag über das rote Rad; V kann wegen Erklärungsirrtums anfechten, schuldet dann aber den Vertrauensschaden (§ 122).', 'Falsch. Beide meinten das grüne Rad. Das Gewollte geht dem Geschriebenen vor.'],
 ['Vertrag über das rote Rad; V muss liefern, weil die Urkunde maßgeblich ist.', 'Falsch. § 133: wirklicher Wille statt buchstäblicher Ausdruck.'],
 ['Kein Vertrag wegen versteckten Dissenses (§ 155), weil die Urkunde ein anderes Rad nennt als das gemeinte.', 'Falsch. Die Parteien waren sich einig, nur falsch bezeichnet.'],
 ['V muss das grüne Rad für 800 € liefern; eine Anfechtung ist weder nötig noch möglich.', 'Richtig. falsa demonstratio non nocet. Ohne Irrtum gibt es nichts anzufechten.'],
 ['Vertrag über das grüne Rad, aber K kann wegen Eigenschaftsirrtums anfechten.', 'Falsch. K irrte über nichts.'],
 ['Vertrag über das rote Rad zum Preis von 1.500 €, weil der Listenpreis an die Stelle der falschen Angabe tritt.', 'Falsch. Über das rote Rad und diesen Preis gab es keine Einigung.']]);

S('3-anf2', A, 2, [
 ['M kann nach § 119 I anfechten, weil er sich bei der Addition verrechnet hat und 10.000 € erklären wollte.', 'Falsch. Erklärt und gewollt waren 8.000 €. Der Rechenfehler liegt in der Vorbereitung der Erklärung, nicht in ihr selbst.'],
 ['M kann nach § 119 II anfechten, weil der Preis eine verkehrswesentliche Eigenschaft ist.', 'Falsch. Der Preis bzw. die Kalkulation ist keine Eigenschaft einer Sache oder Person.'],
 ['M kann nicht anfechten; der verdeckte Kalkulationsirrtum ist ein bloßer Motivirrtum.', 'Richtig. Die Kalkulation wurde nicht Inhalt der Erklärung. Ausnahme nur bei treuwidriger Ausnutzung (§ 242).'],
 ['M kann nach § 119 I anfechten, muss K aber den Vertrauensschaden ersetzen, weil K auf den Preis vertraut hat.', 'Falsch. Es fehlt bereits ein Anfechtungsgrund.'],
 ['Der Vertrag gilt zu 10.000 €, weil K den Rechenfehler bei sorgfältiger Prüfung hätte erkennen müssen (§§ 133, 157).', 'Falsch. K kannte die Kalkulation nicht. Ein Vertrag zu 10.000 € wurde nie erklärt.'],
 ['M kann wegen Störung der Geschäftsgrundlage (§ 313) 10.000 € verlangen.', 'Falsch. Das Risiko der eigenen Kalkulation trägt der Kalkulierende.']]);

S('3-anf3', A, 0, [
 ['V kann nach § 119 II anfechten; K muss das Bild zurückgeben und bekommt 300 € sowie 150 € Vertrauensschaden.', 'Richtig. Urheberschaft = verkehrswesentliche Eigenschaft (§ 119 II). Folgen §§ 142 I, 812, 122 I.'],
 ['V kann nicht anfechten, weil ein Irrtum über den Marktwert einer Sache stets ein unbeachtlicher Motivirrtum ist.', 'Falsch. V irrte über die Urheberschaft, den wertbildenden Faktor.'],
 ['V kann anfechten, muss K aber das Erfüllungsinteresse von 59.700 € ersetzen, weil K das Original behalten wollte.', 'Falsch. § 122 ersetzt das negative Interesse.'],
 ['V kann nicht anfechten, weil das Gewährleistungsrecht die Anfechtung auch für den Verkäufer verdrängt.', 'Falsch. Der Vorrang des Mängelrechts schützt den Verkäufer vor dem Käufer, nicht umgekehrt.'],
 ['V kann nur nach § 123 anfechten, und auch nur, wenn K das Original erkannt und dazu geschwiegen hat.', 'Falsch. Daneben steht § 119 II.'],
 ['V kann anfechten, K bekommt aber keinen Ersatz, weil V den Irrtum nicht verschuldet hat und § 122 Verschulden voraussetzt.', 'Falsch. § 122 ist verschuldensunabhängig.']]);

S('3-anf4', A, 4, [
 ['Zu spät, weil jede Anfechtung unverzüglich erklärt werden muss (§ 121).', 'Falsch. § 121 gilt nur für §§ 119, 120.'],
 ['Zu spät, weil die Jahresfrist des § 124 schon mit dem Vertragsschluss zu laufen begann und abgelaufen ist.', 'Falsch. Bei arglistiger Täuschung beginnt die Frist mit der Entdeckung (§ 124 II 1).'],
 ['Rechtzeitig; K muss G aber den Vertrauensschaden ersetzen, weil G auf den Bestand des Vertrags vertraut hat (§ 122).', 'Falsch. § 122 gilt nicht bei § 123.'],
 ['Rechtzeitig nur, wenn K zusätzlich Mängelrechte geltend macht, weil das Kaufrecht die Anfechtung sonst verdrängt.', 'Falsch. Die Anfechtung nach § 123 steht selbstständig neben dem Mängelrecht.'],
 ['Rechtzeitig, weil bei arglistiger Täuschung die Jahresfrist ab Entdeckung gilt, nicht „unverzüglich“ (§ 124).', 'Richtig. § 124 I, II: Entdeckung am 1. März, Erklärung am 1. Juni.'],
 ['Eine Anfechtung ist unnötig, weil der Vertrag wegen der Täuschung ohnehin nichtig ist.', 'Falsch. Täuschung macht den Vertrag nur anfechtbar.']]);

S('3-anf5', K, 1, [
 ['1 und 3', 'Falsch. Auch Aussage 5 stimmt (§ 122 I a. E.).'],
 ['1, 3 und 5', 'Richtig. Erklärungsirrtum (1), Fahrtkosten als Vertrauensschaden (3), Begrenzung durch das Erfüllungsinteresse (5).'],
 ['1, 2 und 3', 'Falsch. Aussage 2 ist falsch: Nach der Anfechtung besteht kein Erfüllungsanspruch.'],
 ['3, 4 und 5', 'Falsch. Aussage 4 ist falsch: § 122 ist verschuldensunabhängig.'],
 ['1 und 5', 'Falsch. Auch 3 stimmt.'],
 [...ALLE, 'Falsch. Antwort b ist richtig.']],
 ['V kann wegen Erklärungsirrtums anfechten.',
  'Nach der Anfechtung kann K das Rad für 150 € verlangen.',
  'K kann die 20 € Fahrtkosten ersetzt verlangen.',
  'V haftet nach § 122 nur, wenn er den Tippfehler verschuldet hat.',
  'Der Ersatz nach § 122 ist durch das Erfüllungsinteresse begrenzt.']);

S('3-vj1', A, 1, [
 ['Nicht verjährt, weil die Mahnschreiben die Verjährung jeweils für sechs Monate gehemmt haben (§ 204 I).', 'Falsch. Private Mahnschreiben hemmen nicht. Hemmung z. B. durch Zustellung eines Mahnbescheids (§ 204 I Nr. 3).'],
 ['Verjährt mit Ablauf des 31.12.2025; das später Gezahlte kann S nicht zurückfordern.', 'Richtig. §§ 195, 199 I → Ende 2025. § 214 II: Geleistetes bleibt.'],
 ['Verjährt mit Ablauf des 15.03.2025, weil die Frist taggenau ab Fälligkeit läuft; S kann das Gezahlte zurückfordern.', 'Falsch. Die Frist läuft ab Jahresende, und § 214 II schließt die Rückforderung aus.'],
 ['Nicht verjährt, weil die Verjährung erst mit der letzten Mahnung 2024 neu begann.', 'Falsch. Neubeginn gibt es nur nach § 212 (Anerkenntnis, Vollstreckung).'],
 ['Verjährt; S kann die 3.000 € nach § 812 zurückverlangen, weil er ohne Rechtsgrund zahlte.', 'Falsch. Der Anspruch bestand fort, die Zahlung hatte einen Rechtsgrund (§ 214 II).'],
 ['Verjährt mit Ablauf des 31.12.2025; der Anspruch ist erloschen, die Zahlung erfolgte also ohne Rechtsgrund.', 'Falsch. Verjährung gibt nur eine Einrede, der Anspruch erlischt nicht.']]);

S('3-vj2', A, 5, [
 ['Verjährt mit Ablauf des 31.12.2025, weil Abschlagszahlungen die Verjährung nicht berühren.', 'Falsch. Eine Abschlagszahlung ist ein Anerkenntnis (§ 212 I Nr. 1).'],
 ['Nicht verjährt; die neue Frist beginnt mit dem Schluss des Jahres 2025 und endet mit Ablauf des 31.12.2028.', 'Falsch. Der Neubeginn läuft taggenau, ohne Jahresendregel.'],
 ['Verjährt, weil ein Anerkenntnis schriftlich erklärt werden muss und eine bloße Zahlung dafür nicht genügt.', 'Falsch. Das Anerkenntnis nach § 212 ist formlos, auch durch Zahlung.'],
 ['Nicht verjährt, weil die Zahlung die Verjährung um die Zeit der Verhandlungen gehemmt hat (§ 203).', 'Falsch. Es geht nicht um Hemmung durch Verhandlungen, sondern um Neubeginn durch Anerkenntnis (§ 212 I Nr. 1).'],
 ['Verjährt in Höhe des Restbetrags, weil das Anerkenntnis nur für die gezahlten 100 € wirkt.', 'Falsch. Wer eine Abschlagszahlung leistet, erkennt die ganze Forderung an. Der Rest ist nicht verjährt.'],
 ['Nicht verjährt; die Verjährung beginnt neu und läuft bis November 2028.', 'Richtig. § 212 I Nr. 1, volle drei Jahre ab dem Tag des Anerkenntnisses.']]);

S('3-obl', A, 3, [
 ['I behält die Mängelrechte, weil die Gewährleistung zwei Jahre läuft.', 'Falsch. Beim beiderseitigen Handelskauf geht § 377 HGB vor.'],
 ['I hat die Mängelrechte verloren und schuldet Schadensersatz nach § 280 I wegen Verletzung der Untersuchungspflicht.', 'Falsch. Untersuchung und Rüge sind Obliegenheiten, keine Pflichten.'],
 ['I behält die Mängelrechte, weil § 377 HGB nur für verborgene Mängel gilt.', 'Falsch. Gerade offene Mängel müssen sofort gerügt werden.'],
 ['I hat die Mängelrechte verloren, schuldet E aber keinen Schadensersatz.', 'Richtig. Genehmigungsfiktion (§ 377 II HGB). Obliegenheitsverletzung → nur Rechtsverlust.'],
 ['I kann nur noch mindern, aber keine Neulieferung verlangen.', 'Falsch. Die Ware gilt insgesamt als genehmigt, auch Minderung entfällt.'],
 ['I behält die Rechte, weil fünf Wochen bei 300 Stück noch unverzüglich sind.', 'Falsch. Ein offener Riss wäre bei Stichproben sofort aufgefallen.']]);

S('3-neb', A, 0, [
 ['Ja, aus §§ 280 I, 241 II, 278; eine Frist muss K für diesen Schaden nicht setzen.', 'Richtig. Schutzpflichtverletzung, Verschulden des Monteurs wird zugerechnet, Schaden neben der Leistung.'],
 ['Nein, weil der Schrank mangelfrei geliefert wurde.', 'Falsch. Neben der Hauptleistung gibt es Rücksichtnahmepflichten (§ 241 II).'],
 ['Ja, aber nur aus § 831, sodass M sich entlasten kann.', 'Falsch. Innerhalb des Vertrags gilt § 278, ohne Entlastung.'],
 ['Ja, aus §§ 437 Nr. 3, 281 nach erfolgloser Fristsetzung.', 'Falsch. Der Schrank hat keinen Mangel. Das Parkett ist ein anderes Rechtsgut.'],
 ['Nein, nur der Monteur haftet persönlich aus § 823 I.', 'Falsch. Der Monteur haftet aus § 823 I, M daneben aus Vertrag.'],
 ['Ja, aber nur, wenn M bei der Auswahl des Monteurs fahrlässig war.', 'Falsch. Das wäre die Entlastung des § 831, die § 278 nicht kennt.']]);

S('3-cic', A, 2, [
 ['Kein Anspruch, weil jede Partei bis zur Unterschrift frei abbrechen darf.', 'Falsch. Nicht, wenn sie zurechenbar Vertrauen auf den sicheren Abschluss erweckt hat.'],
 ['U kann den Abschluss des Franchisevertrags zu den verhandelten Bedingungen verlangen (§§ 311 II, 249 I).', 'Falsch. c.i.c. begründet keinen Abschlusszwang.'],
 ['U kann 9.000 € als Vertrauensschaden verlangen, aber weder den Abschluss noch den entgangenen Gewinn.', 'Richtig. §§ 280 I, 311 II Nr. 1, 241 II, negatives Interesse.'],
 ['U kann den entgangenen Gewinn aus dem Franchisesystem verlangen, weil S den Abschluss sicher in Aussicht gestellt hat.', 'Falsch. Das wäre das positive Interesse aus einem nie geschlossenen Vertrag.'],
 ['Ein Anspruch besteht nur, wenn S den Abbruch vorsätzlich herbeigeführt hat, weil sonst die Vertragsfreiheit gilt.', 'Falsch. Vorsatz verlangt der BGH nur bei formbedürftigen Verträgen wie dem Grundstückskauf.'],
 ['U hat einen Anspruch aus § 823 I, weil S durch den grundlosen Abbruch in ihr Vermögen eingegriffen hat.', 'Falsch. Vermögen ist kein Rechtsgut des § 823 I.']]);

S('3-erl1', A, 4, [
 ['500 €, weil mit einer verjährten Forderung nie aufgerechnet werden kann (§ 390).', 'Falsch. § 215 macht eine Ausnahme.'],
 ['200 €, weil die Verjährung von Amts wegen nicht berücksichtigt wird.', 'Falsch. Ergebnis richtig, Begründung falsch: B hat die Einrede ja erhoben.'],
 ['Nichts, weil A mit 300 € die gesamte Forderung tilgt.', 'Falsch. Forderungen erlöschen nur, soweit sie sich decken (§ 389).'],
 ['500 €, weil A erst 2026 aufgerechnet hat.', 'Falsch. Maßgeblich ist der Zeitpunkt der Aufrechnungslage (Juli 2023).'],
 ['200 €; die Aufrechnung ist nach § 215 zulässig.', 'Richtig. Im Juli 2023 war die Darlehensforderung noch nicht verjährt.'],
 ['200 €, aber nur, wenn B der Aufrechnung zustimmt.', 'Falsch. Aufrechnung ist eine einseitige Erklärung (§ 388).']]);

S('3-erl2', A, 1, [
 ['Der Rücktritt ist wirksam, weil der Umzug die Leistung unmöglich macht; alle Beiträge sind nach § 346 zurückzuzahlen.', 'Falsch. Bei Dauerschuldverhältnissen tritt die Kündigung an die Stelle des Rücktritts.'],
 ['Der Vertrag besteht fort, weil ein Umzug grundsätzlich kein wichtiger Grund zur fristlosen Kündigung ist (§ 314).', 'Richtig. § 314: Umzug liegt in der Sphäre der Kundin (BGH XII ZR 62/15). Vergangene Beiträge gibt es ohnehin nicht zurück.'],
 ['Die fristlose Kündigung ist wirksam, und die bisherigen Beiträge sind wegen Wegfalls der Geschäftsgrundlage zurückzuzahlen.', 'Falsch. Selbst eine wirksame Kündigung wirkte nur für die Zukunft.'],
 ['Die fristlose Kündigung ist wirksam, weil ein Umzug in eine Stadt ohne Studio immer ein wichtiger Grund ist.', 'Falsch. Der BGH sieht das anders.'],
 ['Der Vertrag ist nichtig, weil eine Laufzeit von 24 Monaten gegen § 309 Nr. 9 verstößt.', 'Falsch. § 309 Nr. 9 lässt eine Erstlaufzeit von bis zu zwei Jahren zu.'],
 ['S kann nach § 313 eine Vertragsanpassung verlangen und zahlt bis zum Laufzeitende nur noch die Hälfte.', 'Falsch. Der Umzug ist das eigene Risiko der Kundin.']]);

S('3-pv', A, 3, [
 ['Beide Beträge gibt es nur nach §§ 280 I, III, 281 nach erfolgloser Fristsetzung.', 'Falsch. K verlangt Schaden neben der Leistung, nicht statt der Leistung.'],
 ['Die 300 € gibt es erst nach einer Mahnung, weil Verzug immer eine Mahnung verlangt.', 'Falsch. Bei kalendermäßig bestimmter Leistungszeit ist sie entbehrlich (§ 286 II Nr. 1).'],
 ['Die 400 € schuldet W nur aus § 831, und W kann sich durch sorgfältige Auswahl des Mechanikers entlasten.', 'Falsch. Im Vertrag gilt § 278.'],
 ['300 € aus §§ 280 I, II, 286 und 400 € aus §§ 280 I, 241 II, 278, ohne Frist.', 'Richtig. Verzögerungsschaden (Kalendertermin) und Schutzpflichtverletzung durch den Erfüllungsgehilfen.'],
 ['300 € aus § 280 I ohne Verzug, 400 € dagegen nur aus § 823 I gegen den Mechaniker persönlich.', 'Falsch. Verzögerungsschaden gibt es nur unter den Voraussetzungen des § 286 (§ 280 II).'],
 ['Nur die 400 €, weil Mietwagenkosten nicht ersatzfähig sind, solange K ein zweites Auto hätte leihen können.', 'Falsch. Mietwagenkosten sind typischer Verzögerungsschaden.']]);

window.dispatchEvent(new Event('wpr-data'));
})();
