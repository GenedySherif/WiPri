(function () {
// Antwortmöglichkeiten a–f im Stil der Weiden/Wende-Probeklausur – Fallbuch VL 8–9
const M = (window.WPRK_FB_MC = window.WPRK_FB_MC || {});
const A = 'Welche Aussage ist richtig?', K = 'Welche Kombination ist richtig?';
const S = (id, q, c, o, st) => { M[id] = st ? { q, c, o, st } : { q, c, o }; };
const ALLE = ['Alle anderen Antworten sind falsch.'];

// ───────── VL 8 ─────────
S('8-agb1', A, 2, [
 ['Ja, weil K die Rechnung mit den AGB auf der Rückseite widerspruchslos angenommen und bezahlt hat.', 'Falsch. Nachträglich übersandte AGB werden durch Schweigen nicht Vertragsinhalt.'],
 ['Ja, aber nur für leichte Fahrlässigkeit, weil ein Ausschluss für grobe Fahrlässigkeit unwirksam wäre (§ 309 Nr. 7 b).', 'Falsch. Die AGB gelten überhaupt nicht, weil sie nicht einbezogen wurden.'],
 ['Nein. Die AGB wurden nicht einbezogen, sodass W für die 800 € nach §§ 280 I, 278 haftet.', 'Richtig. Kein Hinweis bei Vertragsschluss (§ 305 II). Haftung aus §§ 280 I, 241 II, 278.'],
 ['Nein, weil die Klausel in einem Werkstattvertrag überraschend ist und deshalb nicht Vertragsinhalt wird (§ 305c I).', 'Falsch. Ergebnis richtig, aber es fehlt schon die Einbeziehung. Eine Haftungsbeschränkung ist auch nicht ungewöhnlich.'],
 ['Ja, weil Werkstätten branchenüblich nach AGB arbeiten und K damit rechnen musste.', 'Falsch. Branchenüblichkeit ersetzt den Hinweis nicht.'],
 ['Nein, weil die Klausel nach § 309 Nr. 7 a unwirksam ist und an ihre Stelle die gesetzliche Haftung tritt.', 'Falsch. Vorrangig fehlt die Einbeziehung. Außerdem ginge es um § 309 Nr. 7 b, nicht um a (kein Körperschaden).']]);

S('8-agb2', A, 5, [
 ['Ja, weil K die AGB vor der Bestellung per Häkchen akzeptiert hat und sie damit wirksam einbezogen sind.', 'Falsch. Trotz Einbeziehung können einzelne Klauseln überraschend sein.'],
 ['Nein, der ganze Vertrag ist nichtig, weil Maschine und Abo nach dem Willen von K nicht getrennt werden können (§ 139).', 'Falsch. Bei AGB verdrängt § 306 I den § 139: Der Vertrag bleibt im Übrigen wirksam.'],
 ['Ja, K kann das Abo aber binnen 14 Tagen ab der ersten Kapsellieferung widerrufen.', 'Falsch. Die Klausel ist gar nicht Vertragsinhalt geworden.'],
 ['Nein, weil Abonnements über 24 Monate nur schriftlich vereinbart werden können (§ 309 Nr. 9).', 'Falsch. § 309 Nr. 9 regelt Laufzeiten, keine Schriftform. Die Klausel wird hier schon gar nicht Vertragsinhalt.'],
 ['Ja, aber nur für 12 statt 24 Monate, weil die Klausel auf das zulässige Maß zurückgeführt wird.', 'Falsch. Eine geltungserhaltende Reduktion gibt es nicht.'],
 ['Nein; die Abo-Klausel ist überraschend, der Maschinenkauf bleibt wirksam.', 'Richtig. § 305c I, § 306 I.']]);

S('8-agb3', A, 1, [
 ['Ja, beim Sachschaden ist ein Ausschluss für leichte Fahrlässigkeit zulässig.', 'Falsch. Die Klausel geht zu weit und fällt ganz weg.'],
 ['Nein, die Klausel ist insgesamt unwirksam; F haftet für beide Schäden.', 'Richtig. § 309 Nr. 7 a, keine geltungserhaltende Reduktion, § 306 II.'],
 ['Nein, aber F haftet nur für den Körperschaden, weil der Ausschluss für Sachschäden bei leichter Fahrlässigkeit zulässig bleibt.', 'Falsch. Auch der Sachschaden ist nach Gesetz zu ersetzen.'],
 ['Ja, weil M den Vertrag freiwillig geschlossen und die AGB bei Vertragsschluss ausdrücklich bestätigt hat.', 'Falsch. Freiwilligkeit heilt keine unwirksame AGB-Klausel.'],
 ['Nein, die Klausel ist nur insoweit unwirksam, als sie auch grobe Fahrlässigkeit erfasst; im Übrigen gilt sie.', 'Falsch. Sie scheitert schon am Körperschaden (§ 309 Nr. 7 a) und fällt insgesamt.'],
 ['Ja, weil für Verträge mit Fitnessstudios die Klauselverbote nach § 310 I nur eingeschränkt gelten.', 'Falsch. § 310 I betrifft AGB gegenüber Unternehmern. Das Mitglied ist Verbraucher.']]);

S('8-wr1', A, 4, [
 ['Nein, die Frist endete am Samstag, 18. Juli, weil § 193 für Widerrufsfristen nicht gilt.', 'Falsch. § 193 gilt auch für die Widerrufsfrist und verschiebt das Ende.'],
 ['Nein, die Frist endete am Freitag, 17. Juli, weil der Zustelltag mitzählt.', 'Falsch. Der Ereignistag zählt nicht (§ 187 I).'],
 ['Ja, weil die Frist 14 Werktage beträgt und Samstage dabei nicht mitgezählt werden.', 'Falsch. Es sind 14 Kalendertage.'],
 ['Ja, weil die Widerrufsfrist bei Online-Käufen einen Monat beträgt (§ 355 II).', 'Falsch. Ein Monat galt nur nach altem Recht bei nachträglicher Belehrung.'],
 ['Ja; das Fristende verschiebt sich auf Montag, 20. Juli (§ 193).', 'Richtig. §§ 187 I, 188 II, 193, 355 I 5.'],
 ['Nein, weil der Widerruf per E-Mail nicht wirksam ist und nur die Rücksendung zählt.', 'Falsch. Der Widerruf ist formfrei, er muss nur eindeutig sein.']]);

S('8-wr2', K, 2, [
 ['1, 3 und 4', 'Falsch. Aussage 4 ist falsch: Ohne Unterrichtung kein Wertersatz.'],
 ['1, 2 und 3', 'Falsch. Aussage 2 ist falsch: Spätestens nach 12 Monaten und 14 Tagen erlischt das Recht.'],
 ['1, 3 und 5', 'Richtig. § 356 III 2, § 357 I, § 357a I Nr. 2.'],
 ['2, 3 und 5', 'Falsch. Aussage 2 ist falsch.'],
 ['1 und 4', 'Falsch. Aussage 4 ist falsch.'],
 ['nur 3', 'Falsch. Auch 1 und 5 stimmen.']],
 ['Der Widerruf im November 2026 ist rechtzeitig.',
  'Ohne Belehrung kann K zeitlich unbegrenzt widerrufen.',
  'U muss die 400 € erstatten.',
  'K schuldet 250 € Wertersatz für die Abnutzung.',
  'Ein Wertersatz scheitert daran, dass U nicht über das Widerrufsrecht unterrichtet hat.']);

S('8-wr3', A, 0, [
 ['Nein. Bei personalisierter Ware gibt es kein Widerrufsrecht, auch nicht online (§ 312g II Nr. 1).', 'Richtig. § 312g II Nr. 1.'],
 ['Ja, binnen 14 Tagen ab Erhalt, weil K online bei einem Unternehmer bestellt hat (§ 312g I).', 'Falsch. Die Ausnahme des § 312g II Nr. 1 greift.'],
 ['Ja, K muss aber Wertersatz für das Besticken zahlen, weil der Hoodie dadurch an Wert verloren hat (§ 357a I).', 'Falsch. Es gibt gar kein Widerrufsrecht.'],
 ['Nein, weil Kleidung aus hygienischen Gründen grundsätzlich vom Widerruf ausgenommen ist.', 'Falsch. Ausgenommen ist nur die personalisierte Ware.'],
 ['Ja, weil das Nicht-Gefallen der Farbe ein Mangel ist und K deshalb zurücktreten kann.', 'Falsch. Geschmack ist kein Mangel.'],
 ['Nein, weil K den Hoodie schon getragen hat und das Widerrufsrecht dadurch erloschen ist.', 'Falsch. Tragen schließt den Widerruf nicht aus, führt allenfalls zu Wertersatz.']]);

S('8-del1', A, 3, [
 ['Beide haben einen Anspruch, weil beide durch dasselbe Ereignis geschädigt wurden.', 'Falsch. P hat nur einen reinen Vermögensschaden.'],
 ['Nur P, weil sein Schaden höher ist.', 'Falsch. Die Höhe ist für § 823 I unerheblich.'],
 ['Keiner, weil das Kabel weder P noch R gehörte.', 'Falsch. Bei R wurden die Eier in ihrer Substanz zerstört.'],
 ['Nur R hat einen Anspruch aus § 823 I, P nicht.', 'Richtig. R: Eigentumsverletzung an den Eiern. P: reiner Vermögensschaden.'],
 ['Beide, über das Recht am eingerichteten und ausgeübten Gewerbebetrieb.', 'Falsch. Es fehlt am betriebsbezogenen Eingriff.'],
 ['Nur R, und X haftet nach § 831 ohne Entlastungsmöglichkeit.', 'Falsch. § 831 I 2 erlaubt die Entlastung.']]);

S('8-del2', A, 5, [
 ['Nein, weil § 823 I das Vermögen nicht schützt.', 'Falsch. § 823 II und § 826 schützen auch das Vermögen.'],
 ['Ja, aus § 823 I, weil Geld Eigentum ist.', 'Falsch. Eine Überweisung betrifft Buchgeld, also eine Forderung, kein Sacheigentum.'],
 ['Nein, weil vertragliche Ansprüche ausscheiden und Delikt nur Rechtsgüter schützt.', 'Falsch. § 823 II und § 826 greifen.'],
 ['Ja, aber nur aus § 812.', 'Falsch. Bereicherung kommt in Betracht, aber nicht „nur“.'],
 ['Ja, aus § 831, weil A Verrichtungsgehilfe der R war.', 'Falsch. A handelte für sich selbst.'],
 ['Ja, aus § 823 II i. V. m. § 263 StGB und aus § 826.', 'Richtig. Betrug als Schutzgesetz, vorsätzliche sittenwidrige Schädigung.']]);

S('8-831', A, 1, [
 ['Ja, aus § 278, weil F bei der Arbeit als Gehilfe des G tätig war und G für ihn einstehen muss.', 'Falsch. § 278 setzt ein Schuldverhältnis zwischen P und G voraus.'],
 ['Nein, G kann sich nach § 831 I 2 entlasten; P muss sich an F halten.', 'Richtig. Sorgfältige Auswahl und Überwachung → Entlastung. F haftet aus § 823 I.'],
 ['Ja, aus § 831, ohne Entlastungsmöglichkeit, weil F bei der Arbeit für G gehandelt hat.', 'Falsch. § 831 I 2 sieht die Entlastung vor.'],
 ['Nein, und auch F haftet nicht, weil er auf Weisung des G handelte.', 'Falsch. F haftet persönlich aus § 823 I.'],
 ['Ja, aus §§ 280 I, 241 II, weil G gegenüber Passanten Schutzpflichten hat.', 'Falsch. Gegenüber Passanten besteht kein Schuldverhältnis.'],
 ['Ja, aber nur zur Hälfte, weil P dem F hätte ausweichen können (§ 254).', 'Falsch. Ein Mitverschulden des P ist nicht ersichtlich.']]);

S('8-833', A, 4, [
 ['Beide haften, weil § 833 eine Gefährdungshaftung ohne jede Ausnahme ist.', 'Falsch. § 833 S. 2 enthält eine Ausnahme für Nutztiere.'],
 ['Keiner haftet, weil beide sorgfältig waren.', 'Falsch. Beim Luxustier kommt es auf Sorgfalt nicht an.'],
 ['S haftet, F nicht, weil Wachhunde gefährlicher sind.', 'Falsch. Genau umgekehrt.'],
 ['Beide können sich entlasten, weil der Zaundefekt unvorhersehbar war.', 'Falsch. Entlasten kann sich nur der Halter eines Nutztiers.'],
 ['F haftet ohne Entlastungsmöglichkeit, S kann sich entlasten.', 'Richtig. § 833 S. 1 (Luxustier) und § 833 S. 2 (Nutztier + Sorgfalt).'],
 ['F haftet nur aus § 823 I, wenn sie die Leine falsch angelegt hat.', 'Falsch. § 833 S. 1 ist eine Gefährdungshaftung.']]);

S('8-sch1', A, 2, [
 ['Nichts, weil K nicht repariert.', 'Falsch. Der Geschädigte darf fiktiv abrechnen.'],
 ['3.570 €, weil der Gutachter den Bruttobetrag ermittelt hat.', 'Falsch. Die Umsatzsteuer gibt es nur, wenn sie angefallen ist (§ 249 II 2).'],
 ['3.000 €; die Umsatzsteuer ist nicht angefallen.', 'Richtig. § 249 II 1, 2.'],
 ['3.000 €, aber nur, wenn K binnen eines Jahres repariert.', 'Falsch. K muss gar nicht reparieren.'],
 ['570 €, weil nur der Wertverlust ersetzt wird.', 'Falsch. 570 € ist die Umsatzsteuer, nicht der Wertverlust.'],
 ['3.570 €, weil K frei über das Geld verfügen darf.', 'Falsch. Die Dispositionsfreiheit stimmt, ändert aber nichts an § 249 II 2.']]);

S('8-sch2', A, 0, [
 ['Ja, aus Vertrag und aus Delikt (§ 253 II).', 'Richtig. Seit 2002 gilt § 253 II für alle Anspruchsgrundlagen.'],
 ['Nein, Schmerzensgeld gibt es nur bei Straftaten.', 'Falsch. Entscheidend ist die Verletzung von Körper oder Gesundheit.'],
 ['Ja, aber nur aus § 823 I, nicht aus Vertrag.', 'Falsch. Das war die Rechtslage vor 2002.'],
 ['Nein, weil K in die Behandlung eingewilligt hat.', 'Falsch. Eingewilligt hat K in eine fachgerechte Behandlung.'],
 ['Ja, aber nur, wenn F vorsätzlich gehandelt hat.', 'Falsch. Fahrlässigkeit genügt.'],
 ['Nein, K bekommt nur die Behandlungskosten.', 'Falsch. Auch der immaterielle Schaden wird ersetzt.']]);

S('8-not', A, 3, [
 ['Ja, weil Notwehr nur gegen Angriffe von Menschen möglich ist und S deshalb rechtswidrig handelte.', 'Falsch. Die Begründung stimmt, das Ergebnis nicht: § 228 rechtfertigt.'],
 ['Nein, weil S in Notwehr gegen einen gegenwärtigen rechtswidrigen Angriff des Hundes handelte (§ 227).', 'Falsch. Ergebnis richtig, Begründung falsch: Ein selbstständig angreifendes Tier ist kein menschlicher Angriff.'],
 ['Ja, aber nur zur Hälfte, weil S den Hund auch hätte verjagen können (§ 254).', 'Falsch. Eine gerechtfertigte Handlung löst keinen Schadensersatz aus.'],
 ['Nein. S handelte im Defensivnotstand (§ 228), nicht in Notwehr.', 'Richtig. Gefahr ging vom Tier aus, Abwehr erforderlich, nicht außer Verhältnis.'],
 ['Ja, weil § 228 nur Sachen erfasst und ein Tier keine Sache ist.', 'Falsch. Auf Tiere werden die Sachvorschriften entsprechend angewandt (§ 90a).'],
 ['Nein, weil N als Tierhalter ohnehin nach § 833 haftet und S deshalb nichts ersetzen muss.', 'Falsch. § 833 betrifft Ansprüche des S gegen N, nicht die Rechtfertigung des S.']]);

// ───────── VL 9 ─────────
S('9-dfk', A, 5, [
 ['Nein. Kinder unter zehn Jahren haften im Straßenverkehr nie (§ 828 II).', 'Falsch. Der BGH macht beim ruhenden Verkehr eine Ausnahme.'],
 ['Nein. Kinder unter zehn Jahren sind deliktsunfähig (§ 828 I), egal wo der Schaden entsteht.', 'Falsch. § 828 I gilt nur bis sieben Jahre.'],
 ['Ja, aber nur, wenn Paul vorsätzlich gehandelt hat, weil § 828 II bei Fahrlässigkeit entlastet.', 'Falsch. Das wäre die Grenze des § 828 II. Der greift hier aber gar nicht.'],
 ['Nein, nur die Eltern haften, weil sie ihre Aufsichtspflicht verletzt haben (§ 832).', 'Falsch. Die Eltern haften allenfalls zusätzlich, bei Verletzung der Aufsichtspflicht.'],
 ['Ja, aus § 833 analog, weil ein Fahrrad im Straßenverkehr eine besondere Gefahrenquelle ist.', 'Falsch. § 833 betrifft Tiere.'],
 ['Ja, nach §§ 823 I, 828 III; § 828 II gilt nicht beim parkenden Auto.', 'Richtig. Teleologische Reduktion (BGH VI ZR 335/03), Einsichtsfähigkeit vorhanden.']]);

S('9-prod', K, 2, [
 ['1 und 3', 'Falsch. Auch Aussage 4 stimmt.'],
 ['1, 2 und 3', 'Falsch. Aussage 2 ist falsch: Selbstbeteiligung 500 € (§ 11 ProdHaftG).'],
 ['1, 3 und 4', 'Richtig. ProdHaftG auch bei Ausreißern (1), Personenschaden voll (3), Entlastung bei § 823 I (4).'],
 ['3, 4 und 5', 'Falsch. Aussage 5 ist falsch: Das fehlerhafte Produkt selbst ist nicht ersatzfähig.'],
 ['1, 3, 4 und 5', 'Falsch. Aussage 5 ist falsch.'],
 ['nur 4', 'Falsch. Auch 1 und 3 stimmen.']],
 ['Nach dem ProdHaftG haftet H trotz des unvermeidbaren Ausreißers.',
  'Den Sachschaden ersetzt das ProdHaftG voll mit 3.000 €.',
  'Den Personenschaden ersetzt das ProdHaftG voll.',
  'Aus § 823 I kann sich H wegen des unvermeidbaren Ausreißers entlasten.',
  'Das ProdHaftG ersetzt auch den Wert des E-Bikes selbst.']);

S('9-bes', A, 1, [
 ['Nein, weil V Eigentümer ist und M mit zwei Monatsmieten im Rückstand war, sodass V sein Eigentum schützen durfte.', 'Falsch. Das Eigentum berechtigt nicht zur Selbstjustiz.'],
 ['Ja, M kann nach § 861 den Besitz zurückverlangen; V kann sich nicht auf sein Eigentum berufen.', 'Richtig. Verbotene Eigenmacht (§ 858 I).'],
 ['Ja, aber nur, wenn M vorher die Rückstände zahlt, weil V ein Zurückbehaltungsrecht hat (§ 273).', 'Falsch. Der Besitzschutz hängt nicht von der Zahlung ab.'],
 ['Nein, weil M im Urlaub keine tatsächliche Sachherrschaft über die Wohnung hatte.', 'Falsch. Eine vorübergehende Abwesenheit beendet den Besitz nicht (§ 856 II).'],
 ['Ja, aus § 985, weil das Mietrecht die Mieterin wie eine Eigentümerin schützt.', 'Falsch. § 985 steht nur dem Eigentümer zu. M ist Mieterin.'],
 ['Nein, weil zwei Monatsmieten Rückstand zur fristlosen Kündigung berechtigen.', 'Falsch. Auch eine wirksame Kündigung erlaubt keine eigenmächtige Räumung.']]);

S('9-930', A, 4, [
 ['K ist Eigentümer, weil er zuerst erworben und bezahlt hat.', 'Falsch. D hat gutgläubig vom Nichtberechtigten erworben.'],
 ['K ist Eigentümer, weil ein gutgläubiger Erwerb nach einem Besitzkonstitut ausgeschlossen ist.', 'Falsch. § 933 betrifft den Erwerber durch Besitzkonstitut. D hat durch Übergabe erworben (§ 932).'],
 ['D ist Eigentümer, muss das Rad aber nach § 816 an K herausgeben.', 'Falsch. § 816 I 1 richtet sich gegen V auf den Erlös.'],
 ['V ist Eigentümer geblieben, weil er das Rad nie übergeben hat.', 'Falsch. Die Übergabe wurde durch das Besitzkonstitut ersetzt (§ 930).'],
 ['D ist Eigentümer geworden; K hat nur Ansprüche gegen V (§ 816 I 1).', 'Richtig. §§ 929 S. 1, 932 I, kein Abhandenkommen. K: § 816 I 1 gegen V.'],
 ['D ist nur dann Eigentümer, wenn er mehr gezahlt hat als K.', 'Falsch. Der Preis spielt keine Rolle.']]);

S('9-932', A, 0, [
 ['Nein. K war grob fahrlässig; L kann nach § 985 herausverlangen.', 'Richtig. Gebrauchtwagen ohne Zulassungsbescheinigung Teil II → § 932 II.'],
 ['Ja, weil der Wagen L nicht abhandengekommen ist (§ 935 I).', 'Falsch. Das stimmt, aber der gute Glaube fehlt.'],
 ['Ja, weil K bar bezahlt hat und der Verkäufer den Wagen vorbehaltlos übergeben hat (§ 932 I).', 'Falsch. Barzahlung macht nicht gutgläubig, eher im Gegenteil.'],
 ['Nein, weil Leasingfahrzeuge nie gutgläubig erworben werden können, da sie der Leasinggesellschaft gehören.', 'Falsch. Mit Fahrzeugbrief und ohne Verdachtsmomente wäre es möglich.'],
 ['Ja, K muss L aber den Kaufpreis als Wertersatz erstatten (§ 816 I 2).', 'Falsch. K hat entgeltlich gekauft und ist gar nicht Eigentümer geworden.'],
 ['Nein, weil gestohlene Sachen nicht gutgläubig erworben werden können.', 'Falsch. Ergebnis richtig, Begründung falsch: Der Wagen war nicht gestohlen.']]);

S('9-892', A, 3, [
 ['Nein, weil B nie Eigentümer war.', 'Falsch. Gerade für den Erwerb vom Nichtberechtigten gibt es § 892.'],
 ['Nein, weil das Grundstück A abhandengekommen ist (§ 935).', 'Falsch. § 935 gilt nur für bewegliche Sachen.'],
 ['Nein, weil C grob fahrlässig nicht weiter nachgeforscht hat.', 'Falsch. Bei § 892 schadet nur positive Kenntnis.'],
 ['Ja. C hat nach § 892 gutgläubig erworben.', 'Richtig. Auflassung, Eintragung, Vertrauen auf das Grundbuch.'],
 ['Ja, aber nur, wenn C das Grundstück in Besitz genommen hat.', 'Falsch. Bei Grundstücken tritt das Grundbuch an die Stelle des Besitzes.'],
 ['Nein, weil Geschäftsunfähige im Grundstücksrecht absolut geschützt sind.', 'Falsch. Einen solchen absoluten Schutz gibt es gegenüber § 892 nicht.']]);

S('9-ev', A, 2, [
 ['G ist Eigentümer geblieben, K muss den Fernseher herausgeben.', 'Falsch. H war zum Weiterverkauf ermächtigt (§ 185 I).'],
 ['K ist Eigentümerin, muss aber noch einmal an G zahlen.', 'Falsch. § 407 I schützt sie.'],
 ['K ist Eigentümerin und muss nicht noch einmal zahlen.', 'Richtig. Ermächtigung (§ 185 I), Zahlung an den bisherigen Gläubiger in Unkenntnis der Abtretung (§ 407 I).'],
 ['K ist Eigentümerin, weil sie gutgläubig war (§ 932).', 'Falsch. Ergebnis richtig, Begründung falsch: K erwirbt vom Berechtigten kraft Ermächtigung.'],
 ['G ist Eigentümer, K hat aber ein Zurückbehaltungsrecht.', 'Falsch. K ist Eigentümerin.'],
 ['K muss noch einmal zahlen, weil eine Abtretung bei Vertragsschluss offengelegt werden muss.', 'Falsch. Eine stille Abtretung ist wirksam, der Schuldner wird über § 407 geschützt.']]);

S('9-abtr', A, 5, [
 ['Die Abtretung ist unwirksam (§ 399), A ist frei.', 'Falsch. § 354a I 1 HGB macht sie wirksam.'],
 ['Die Abtretung ist wirksam, A muss noch einmal an F zahlen.', 'Falsch. § 354a I 2 HGB erlaubt die Zahlung an M.'],
 ['Die Abtretung ist unwirksam, F hat gegen niemanden Ansprüche.', 'Falsch. Die Abtretung ist wirksam, F kann sich an M halten.'],
 ['Die Abtretung ist wirksam, weil Abtretungsverbote in AGB immer unwirksam sind.', 'Falsch. Ergebnis richtig, Begründung falsch: Grundlage ist § 354a HGB.'],
 ['Die Abtretung ist unwirksam, A muss trotzdem an F zahlen.', 'Falsch. Widersprüchlich.'],
 ['Die Abtretung ist wirksam (§ 354a I 1 HGB), A wurde aber durch die Zahlung an M frei.', 'Richtig. § 354a I 1, 2 HGB.']]);

S('9-985', A, 4, [
 ['Ja, weil H Eigentümer geblieben ist und K mit einer Rate im Rückstand ist (§ 985).', 'Falsch. K hat ein Recht zum Besitz (§ 986).'],
 ['Ja, weil K mit einer Rate in Verzug war und der Eigentumsvorbehalt H dann zur Rücknahme berechtigt.', 'Falsch. Verzug allein beendet das Besitzrecht nicht.'],
 ['Nein, weil K schon Eigentümerin geworden ist, da sie den Großteil der Raten bezahlt hat.', 'Falsch. Das Eigentum geht erst mit vollständiger Zahlung über.'],
 ['Ja, aber erst nach einer Mahnung, weil der Verzug erst dann eintritt (§ 286 I).', 'Falsch. Nötig ist der Rücktritt, nicht nur eine Mahnung.'],
 ['Nein, K hat aus dem Kaufvertrag ein Besitzrecht, solange H nicht vom Vertrag zurückgetreten ist (§ 449 II).', 'Richtig. § 986 I 1, § 449 II.'],
 ['Nein, weil der Eigentumsvorbehalt durch den Verzug erloschen ist.', 'Falsch. Der Vorbehalt besteht fort.']]);

S('9-812a', A, 0, [
 ['V muss nichts zurückzahlen; bei der Stromrechnung müsste er dagegen zahlen (§ 818 III).', 'Richtig. Luxusausgabe → entreichert. Bezahlung eigener Schulden → Ersparnis, nicht entreichert.'],
 ['V muss in beiden Fällen zahlen, weil man um Geld nicht entreichert sein kann.', 'Falsch. § 818 III gilt auch für Geld.'],
 ['V muss in keinem Fall zahlen, weil er gutgläubig war und das Geld nicht mehr vorhanden ist.', 'Falsch. Gutgläubigkeit allein genügt nicht, es muss eine Entreicherung vorliegen.'],
 ['V muss nicht zahlen, weil K die Doppelzahlung hätte bemerken müssen (§ 814).', 'Falsch. § 814 verlangt positive Kenntnis der Nichtschuld.'],
 ['V muss im Restaurant-Fall zahlen, im Strom-Fall nicht, weil Luxusausgaben nicht entreichern.', 'Falsch. Genau umgekehrt.'],
 ['V muss nur die Hälfte zahlen, weil K die Doppelzahlung mitverschuldet hat (§ 254).', 'Falsch. § 254 gilt nicht im Bereicherungsrecht.']]);

S('9-812b', A, 3, [
 ['Nein, weil K wusste, dass er nur 800 € schuldet (§ 814).', 'Falsch. § 814 greift bei Zahlung unter Vorbehalt nicht.'],
 ['Nein, weil K freiwillig gezahlt hat, um sein Auto zurückzubekommen.', 'Falsch. K zahlte unter Vorbehalt und unter Druck.'],
 ['Ja, aber nur nach § 823 II i. V. m. § 263 StGB, weil H eine überhöhte Rechnung gestellt hat.', 'Falsch. Für einen Betrug fehlt die Täuschung. Anspruchsgrundlage ist § 812.'],
 ['Ja, aus § 812 I 1 Alt. 1; § 814 greift wegen des Vorbehalts nicht.', 'Richtig.'],
 ['Nein, weil H ein Werkunternehmerpfandrecht am Auto hatte und die Zahlung dieses ablöste (§ 647).', 'Falsch. Ein Werkunternehmerpfandrecht sichert nur die geschuldeten 800 €.'],
 ['Ja, aber erst nach Anfechtung der Zahlung wegen widerrechtlicher Drohung (§ 123).', 'Falsch. Die Zahlung muss nicht angefochten werden, der Anspruch folgt direkt aus § 812.']]);

window.dispatchEvent(new Event('wpr-data'));
})();
