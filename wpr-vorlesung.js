(function () {
const K = window.WPRK; if (!K || K.__vorl) return; K.__vorl = 1;
const T = id => K.topics.find(t => t.id === id);
const add = (id, kern, schema, fallen, norms) => { const t = T(id); if (!t) return; t.kern.push(...(kern || [])); t.schema.push(...(schema || [])); t.fallen.push(...(fallen || [])); (norms || []).forEach(n => { if (!t.norms.includes(n)) t.norms.push(n); }); };

const per = T('per'); if (per) { per.freq = 'Details nicht klausurrelevant'; per.kern.unshift('Hinweis Dozent :: Die Einzelheiten der Geschäftsfähigkeit sind laut Vorlesung 2 nicht Inhalt der Vorlesungsreihe und im Detail kein Klausurstoff. Nur Grundbegriffe kennen: unter 7 nichtig (§§ 104, 105 I), 7–17 zustimmungsbedürftig (§§ 107, 108), Ausnahmen §§ 107, 110, 112, 113.'); }

add('vs', [
 'Bestandteile der WE :: Objektiv: Äußerung eines Rechtsbindungswillens. Subjektiv: Handlungswille, Erklärungsbewusstsein, Geschäftswille.',
 'Handlungswille :: Bewusstsein zu handeln. Fehlt im Schlaf, bei Reflex, Bewusstlosigkeit oder der „zur Unterschrift geführten Hand“ – dann keine WE.',
 'Erklärungsbewusstsein :: Bewusstsein, irgendetwas Rechtserhebliches zu erklären. Fehlen nach h. M. unschädlich, wenn erkennbar und Empfänger schutzwürdig – aber anfechtbar § 119 I Alt. 2 analog (Zuwinken bei Versteigerung).',
 'Geschäftswille :: Wille zu einem ganz bestimmten Rechtsgeschäft. Fehlen unbeachtlich, Anfechtung §§ 119 I, 120 prüfen (Hand gehoben für Bild, Skulptur ersteigert).',
 'Realakt :: Tatsächliche Handlung mit gesetzlicher Rechtsfolge (Besitz, Fund § 965, Verbindung/Verarbeitung §§ 946–950). §§ 104–185 grds. nicht anwendbar, keine Geschäftsfähigkeit nötig.',
 'Geschäftsähnliche Handlung :: Mitteilungen/Aufforderungen (§§ 108 II, 177 II, Mahnung § 286 I) – Rechtsfolge kraft Gesetzes, §§ 104–185 entsprechend anwendbar.',
 'Gefälligkeit :: Kein Rechtsbindungswille: Blumen gießen, Briefkasten leeren, kurz aufs Kind aufpassen. Mitnahme im Kfz: Auslegung nach Umständen und Interessenlage.',
 'Bedingung & Befristung :: Aufschiebend § 158 I (Eigentumsvorbehalt), auflösend § 158 II (Wiederverheiratungsklausel), Befristung § 163. Bedingung = zukünftiges, ungewisses Ereignis.',
 'Empfangsbedürftig :: Angebot, Annahme, Kündigung, Anfechtung, Widerruf – Abgabe + Zugang § 130 I. Nicht empfangsbedürftig: Testament § 2247, Auslobung § 657 – Abgabe genügt.',
 'Zugang unter Anwesenden :: Vernehmungstheorie, § 147 I – auch Telefon und Online-Kontakt am Bildschirm.',
 'Brief im Urlaub :: Zugang zur Zeit der gewöhnlichen Leerung, auch wenn der Empfänger im Urlaub oder Krankenhaus ist. Obliegenheit, Vorkehrungen zu treffen.',
 'Einschreiben/Rückschein :: Benachrichtigungsschein im Briefkasten ist noch kein Zugang. Keine Abholpflicht; Zugang erst mit Aushändigung. Aber: schuldhafte Zugangsvereitelung → § 242.',
 'Beweislast :: Den Zugang muss der Erklärende beweisen. Gegenüber Minderjährigen erst mit Zugang beim gesetzlichen Vertreter § 131, ein Elternteil genügt § 1629 I 2.',
 'E-Mail :: Zugang, wenn im Postfach abrufbar. Geschäftlich innerhalb der Geschäftszeit am selben Tag, außerhalb erst am nächsten Arbeitstag.',
 'Offerta ad incertas personas :: Verbindliches Angebot an unbestimmten Personenkreis, begrenzt auf Vorrat: Warenautomat, Selbstbedienungstanken.',
 'Erlöschen des Angebots :: Ablehnung § 146, Fristablauf §§ 147–149 (verspätete Annahme = neues Angebot § 150 I), Annahme unter Änderung = neuer Antrag § 150 II.',
 '§ 151 :: Verzichtet wird nur auf den Zugang der Annahme, nicht auf die Annahme selbst – nach außen erkennbares Verhalten (Versandhandel: Händler schickt Ware ab).',
 'Widerruf § 130 I 2 :: Nur wirksam, wenn er vorher oder gleichzeitig zugeht. Danach bleibt nur die Anfechtung.',
 'Dissens :: Offen § 154 I (Punkt bewusst ungeregelt → im Zweifel kein Vertrag), versteckt § 155 (US-Bürger und Kanadier vereinbaren „Dollar“).',
 'Schweigen :: Grundsätzlich Nullum, im Zweifel Ablehnung (§ 241a). Ausnahmen: §§ 108 II 2, 177 II 2, 415 II und Vereinbarung beider Parteien.'
], ['Bei Abwesenden immer: Abgabe + Zugang § 130 I, Widerruf § 130 I 2?', 'Einigungsmangel §§ 154, 155?'], ['Die zur Unterschrift geführte Hand: kein Handlungswille, also gar keine WE – nicht nur anfechtbar.', 'Benachrichtigungsschein vom Einschreiben ist kein Zugang.'], ['§ 116', '§ 117', '§ 118', '§ 131', '§ 150', '§ 151', '§ 154', '§ 155', '§ 158', '§ 163', '§ 241a']);

add('form', [
 'Scheingeschäft § 117 I :: Nichtig. Bsp. Unterverbriefung: notariell niedrigerer Kaufpreis beurkundet als vereinbart, um Steuern/Gebühren zu sparen.',
 '§§ 116 S. 2, 118 :: Geheimer Vorbehalt ist nichtig, wenn der Empfänger ihn kennt; nicht ernstlich gemeinte Erklärung (Scherz) ist nichtig.',
 'Formzwecke :: Beweis-, Warn-, Belehrungs-, Echtheits- bzw. Identitätsfunktion. Verstoß → nichtig § 125 S. 1.',
 'Textform § 126b :: Lesbar, ohne Unterschrift, auf dauerhaftem Datenträger (Papier, USB, Festplatte). Bsp. § 556a, Widerruf § 356.',
 'Schriftform § 126 I :: Eigenhändige Unterschrift. Kündigung Miete § 568, Arbeitsvertrag § 623, Bürgschaft § 766 (Heilung durch Erfüllung, S. 3).',
 'Elektronische Form § 126 III, 126a :: Ersetzt Schriftform mit qualifizierter Signatur – außer ausgeschlossen (§ 623, § 766 S. 2).',
 'Öffentliche Beglaubigung § 129 :: Notar beglaubigt nur die Unterschrift. Bsp. Handelsregister § 12 HGB, § 1945.',
 'Notarielle Beurkundung § 128 :: Grundstückskauf § 311b I 1 (Heilung durch Auflassung + Eintragung, S. 2), Auflassung §§ 873, 925, Schenkungsversprechen § 518 I (Heilung durch Bewirken § 518 II).',
 'Eigenhändiges Testament § 2247 :: Handschriftlich und persönlich unterschrieben.',
 '§ 134 :: Verbotsgesetz, z. B. Auftragsmord, Schwarzarbeit. § 138 I: Sittenwidrigkeit, z. B. Schmiergeldvertrag. § 138 II: Wucher.',
 'Privatautonomie :: Abschluss- und Inhaltsfreiheit (§ 311 I). Grenzen: Kontrahierungszwang (§ 5 PflVG), §§ 134, 138, 242, 305 ff., Formvorschriften, § 19 I AGG, zwingendes Recht (§ 476 I 1).',
 'Ein-/zweiseitig :: Einseitiges RG = eine WE (Kündigung, Testament, Vollmacht, Anfechtung). Vertrag = zweiseitiges RG; Gesellschaftsvertrag = mehrseitig.',
 'Verpflichtend :: Schenkung § 516 ist zweiseitiges RG, aber nur einseitig verpflichtend (nur Schenker). Kauf § 433 ist zweiseitig verpflichtend.'
], ['Scheingeschäft/Scherz §§ 116–118?', 'Heilung des Formmangels? §§ 311b I 2, 518 II, 766 S. 3'], ['Bei der Unterverbriefung ist der beurkundete Vertrag nach § 117 I nichtig, der gewollte nach § 125 – bis zur Heilung durch Eintragung (§ 311b I 2).', 'Bürgschaft per E-Mail oder qualifizierter Signatur bleibt formnichtig (§ 766 S. 2).'], ['§ 117', '§ 126a', '§ 126b', '§ 128', '§ 129', '§ 134', '§ 138', '§ 311b', '§ 518', '§ 766']);

add('anf', [
 'Auslegung vor Anfechtung :: §§ 133, 157. Falsa demonstratio non nocet: übereinstimmend falsch Bezeichnetes gilt wie gemeint (Haakjöringsköd = Haifisch, beide meinen Walfisch).',
 'Auslegungsmaßstab :: Nicht empfangsbedürftig → wirklicher Wille § 133 (Testament § 2084). Empfangsbedürftig → objektiver Empfängerhorizont: Wortlaut, Umstände, Zweck, Systematik.',
 'Inhaltsirrtum § 119 I Alt. 1 :: Weiß, was er sagt, aber nicht, was es bedeutet – „Dutzend = 2 Stück“.',
 'Erklärungsirrtum § 119 I Alt. 2 :: Wollte das so gar nicht sagen – Versprechen, Verschreiben, Vergreifen.',
 'Eigenschaftsirrtum § 119 II :: Einziger beachtlicher Motivirrtum. Sache: Alter, Laufleistung, Unfallfreiheit, Original statt Kopie. Person: Alter, Beruf, Kreditwürdigkeit. Der Wert selbst nicht.',
 'Unbeachtlich :: Irrtum über Marktpreis, Fortbestehen einer Beziehung bis zur Reise, interner/verdeckter Kalkulationsirrtum.',
 '§ 120 :: Falsche Übermittlung durch Boten (nicht Stellvertreter). Risiko trägt der Erklärende, er kann aber anfechten.',
 'Anfechtungserklärung § 143 I :: Einseitige, empfangsbedürftige WE (Zugang § 130 I); ggf. Auslegung: „Das lasse ich nicht gelten“.',
 'Rückabwicklung :: Nichtig ex tunc § 142 I; bereits übertragenes Eigentum bleibt wegen Abstraktion übertragen → §§ 812 ff.',
 'Negatives Interesse § 122 :: So stellen, als hätte er nicht auf die Gültigkeit vertraut: Vertragsentwurf, Beratung, Fahrt-, Fracht-, Verpackungskosten. Kein Verschulden nötig.',
 'Positives Interesse :: So stellen, als wäre ordnungsgemäß erfüllt worden („Schadensersatz statt der Leistung“). Obergrenze für § 122.',
 'Entgangener Gewinn bei § 122 :: Gewinn aus diesem Geschäft nein; Gewinn aus einem ausgeschlagenen anderen Angebot ja – bis zur Höhe des Erfüllungsinteresses.',
 '§ 122 II :: Kein Ersatz, wenn der Geschädigte den Grund kannte oder kennen musste.',
 'Bei § 123 :: Kein § 122, sondern § 823 II i. V. m. Schutzgesetz (meist § 263 StGB). Täuschung auch durch Verschweigen oder Angaben „ins Blaue hinein“ (unfallfrei ohne Prüfung).'
], ['Auslegung §§ 133, 157 vor Anfechtung', 'Bei §§ 119, 120: § 122 II prüfen'], ['Falsa demonstratio: Es gilt das Gemeinte – keine Anfechtung nötig.', 'Unfallfrei „ins Blaue hinein“ ist Arglist, auch ohne sicheres Wissen.'], ['§ 133', '§ 157', '§ 120', '§ 143']);

add('frist', [
 'Kein Erlöschen :: Verjährter Anspruch besteht fort; Leistungsverweigerungsrecht § 214 I. Muss im Prozess erhoben werden, sonst Verurteilung.',
 'Geleistet ist geleistet :: Zur Befriedigung des verjährten Anspruchs Geleistetes kann nicht zurückgefordert werden § 214 II 1.',
 'Sicherheiten § 216 :: Pfandrecht, Hypothek, Grundschuld (I) und Eigentumsvorbehalt (II) bleiben trotz Verjährung verwertbar.',
 'Was verjährt :: Nur Ansprüche § 194 I – nicht Eigentum oder Gestaltungsrechte (dort Ausschlussfristen, z. B. §§ 121, 124). Unverjährbar: §§ 194 II, 902, 924.',
 'Beispiel Dozent :: Auto am 3.1.2024 fahrlässig beschädigt, B merkt es 4 Wochen später → § 823 I verjährt von 31.12.2024, 24 Uhr bis 31.12.2027.',
 'Höchstfristen § 199 II–IV :: Leben/Körper/Gesundheit/Freiheit 30 Jahre; andere SE-Ansprüche 10 Jahre ab Entstehung; sonstige Ansprüche 10 Jahre – jeweils ohne Rücksicht auf Kenntnis.',
 'Sonderverjährung :: 30 Jahre § 197 (Herausgabe § 985, rechtskräftig festgestellte Ansprüche), 10 Jahre § 196 (Grundstücke), §§ 438, 634a. Lex specialis derogat legi generali.',
 'Neubeginn vs. Hemmung :: Neubeginn § 212 I: läuft sofort neu in voller Länge. Hemmung §§ 203 ff., 209: Frist steht still, Rest läuft danach weiter – Klage § 204 I Nr. 1, Mahnbescheid § 204 I Nr. 3.'
], ['Neubeginn (§ 212) oder Hemmung (§§ 203 ff.)?'], ['Hemmung ≠ Neubeginn: Nach Klagerücknahme läuft nur der Rest weiter.', 'Eigentum verjährt nicht – nur der Herausgabeanspruch aus § 985 (30 Jahre).'], ['§ 194', '§ 196', '§ 197', '§ 203', '§ 204', '§ 209', '§ 212', '§ 216']);

add('lst', [
 'Fünf Störungen :: Unmöglichkeit, Schuldnerverzug, Schlechtleistung, Verletzung von Neben-/Schutzpflichten (§ 241 II) – alle Pflichtverletzungen i. S. d. §§ 280 ff. – plus Gläubigerverzug (Obliegenheit).',
 '§ 275 I–III :: Tatsächlich (Brand), faktisch/wirtschaftlich II (Ring am Meeresgrund), persönlich unzumutbar III (Pianist, dessen Kind lebensgefährlich erkrankt). I erlischt automatisch, II/III nur Einrede.',
 'Vertrag bleibt :: Bei jeder Unmöglichkeit bleibt der Vertrag wirksam; nur die Primärpflicht entfällt verschuldensunabhängig.',
 'Anfänglich vs. nachträglich :: Vor Vertragsschluss → SE aus § 311a II; danach → §§ 280 I, III, 283. Subjektiv/objektiv sonst ohne Bedeutung.',
 'Gattungsschuld § 243 :: Nach allgemeinen Merkmalen bestimmt – Schuldner muss neu beschaffen. Unmöglich erst bei Vorratsschuld oder nach Konkretisierung § 243 II.',
 'Konkretisierung :: Holschuld (Regel § 269 I): Aussondern + Bereitstellen + wörtliches Angebot. Bringschuld: tatsächliches Angebot beim Gläubiger. Schickschuld: Übergabe an Transportperson.',
 'Fixgeschäft :: Absolut: Leistungszeit so wesentlich, dass Interesse entfällt → Unmöglichkeit § 275 I. Relativ: nachholbar → nur Verzug § 286.',
 'Gläubigerrechte :: Rücktritt §§ 323, 326 V, 346 (ohne Frist, ohne Verschulden), Minderung § 441, SE statt der Leistung oder Aufwendungen § 284 (Verschulden), § 285 Surrogat (ohne Verschulden).',
 'Gegenleistung § 326 :: Entfällt (I 1). Bleibt bei Verantwortung des Gläubigers (II 1 Alt. 1), Annahmeverzug (II 1 Alt. 2), § 326 III (Surrogat verlangt), § 447 (nicht beim VGK, § 475 II).',
 'Vertretenmüssen :: Vorsatz/Fahrlässigkeit § 276; gesetzlicher Vertreter und Erfüllungsgehilfe § 278 (mit Wissen und Wollen im Pflichtenkreis tätig). Verschärft § 287 S. 2, gemildert § 300 I.',
 'Fälligkeit vs. Erfüllbarkeit :: Fälligkeit = Gläubiger darf fordern; Erfüllbarkeit = Schuldner darf leisten. § 271 I: im Zweifel sofort beides. Ausnahmen § 556b I, Vertrag (§ 271 II).',
 'Gläubigerverzug §§ 293 ff. :: Nichtannahme § 293 (§§ 298, 299), ordnungsgemäßes Angebot § 294 (wörtlich §§ 295 f.), Leistungsfähigkeit § 297. Folgen: § 300 I, Mehraufwand § 304, § 326 II 1 Alt. 2.'
], ['Stück- oder Gattungsschuld? Konkretisiert nach Hol-/Bring-/Schickschuld?', 'Absolutes oder relatives Fixgeschäft?'], ['§ 275 II und III muss der Schuldner geltend machen – anders als I.', 'Absolutes Fixgeschäft verlangt hohe Anforderungen; im Zweifel nur relativ (Verzug).'], ['§ 243', '§ 271', '§ 284', '§ 285', '§ 287', '§ 294', '§ 295', '§ 297', '§ 304']);

add('kauf', [
 'Prüfungsreihenfolge Sachmangel :: Subjektiv § 434 II (Vereinbarung, vorausgesetzte Verwendung; Zu-wenig-, Zu-viel-, Aliud-Lieferung), dann objektiv § 434 III (gewöhnliche Verwendung; negative Vereinbarung, beim VGK § 476 I 2).',
 'Rechtsmangel § 435 :: Mangel des Eigentums, dingliche oder schuldrechtliche Rechte Dritter, öffentlich-rechtliche Beschränkungen, Abgaben und Lasten.',
 'Digitale Elemente :: Computer mit vorinstalliertem Betriebssystem → §§ 475b, 475c: Installations- und Aktualisierungspflicht (subjektiv § 475b III Nr. 2, objektiv IV Nr. 2). Beweislast § 477 II.',
 'Digitale Produkte §§ 327 ff. :: Eigenes Gewährleistungsrecht, geht dem Kaufrecht vor: Bereitstellung § 327b, Mangel § 327e, Update § 327f, Rechte § 327i, Verjährung 2 Jahre § 327j, Beweislast § 327k.',
 'Neben der Leistung :: Mangelschaden § 280 I, Verzögerungsschaden §§ 280 I, II, 286, Mangelfolgeschaden § 280 I – jeweils über § 437 Nr. 3.',
 'Nacherfüllung :: Ein- und Ausbaukosten § 439 III; Verweigerung bei Unmöglichkeit § 275 I oder Unverhältnismäßigkeit § 439 IV.',
 'Minderung § 441 III :: Geminderter Preis = Wert mangelhaft : Wert mangelfrei × Kaufpreis. Auch bei unerheblichem Mangel.',
 'Großer/kleiner SE :: Großer SE (Sache zurück) nur bei erheblichem Mangel § 281 I 3; kleiner SE (Sache behalten) auch bei unerheblichem. Kein automatisches Freiwerden § 326 I 2.',
 'Ausschluss :: Kenntnis § 442 I, § 444 (Arglist/Garantie), Rüge § 377 II HGB. C2C oder B2B ganz ausschließbar im Rahmen des § 444; beim VGK Verjährung nur bei gebrauchten Sachen verkürzbar § 476 II.',
 'Garantie § 443 :: Neben der Gewährleistung, ohne Verschulden; Haltbarkeits- oder Beschaffenheitsgarantie, selbstständig oder unselbstständig; VGK § 479.',
 'Regress § 445a :: Verkäufer neuer Sachen kann verschuldensunabhängig beim Lieferanten Aufwendungen ersetzt verlangen; gleiche Verjährung § 445b, Lieferkette § 445b III.'
], [], ['Minderung wird vom Kaufpreis berechnet, nicht vom Wert: Verhältnis der Werte × Preis.', 'Großer Schadensersatz scheitert am unerheblichen Mangel – der kleine nicht.'], ['§ 435', '§ 443', '§ 445a', '§ 475c', '§ 327e', '§ 327i']);

add('del', [
 'Grundsatz :: Verschuldenshaftung; Ausnahme Gefährdungshaftung z. B. § 833 S. 1. Ersetzt wird Vermögensschaden, immateriell nur § 253 I, II (Schmerzensgeld).',
 'Sieben Prüfungspunkte :: Handlung/Unterlassen – Rechtsgutsverletzung – haftungsbegründende Kausalität – Rechtswidrigkeit – Verschulden – Schaden – haftungsausfüllende Kausalität.',
 'Unterlassen :: Nur bei Rechtspflicht zum Handeln, z. B. Verkehrssicherungspflicht. Sonstiges Recht: z. B. berechtigter Besitz; nicht das Vermögen.',
 'Rechtfertigung :: Notwehr § 227, Notstand § 228, Selbsthilfe § 229.',
 'Deliktsfähigkeit §§ 827 f. :: Fähigkeit, die Tragweite zu erkennen. Unter 7 nie (§ 828 I), 7–17 bei Einsichtsfähigkeit (§ 828 III).',
 'Schaden §§ 249 ff. :: Jeder unfreiwillige Vermögensnachteil, Differenzhypothese, Totalreparation. Naturalrestitution § 249 I oder Geld § 249 II 1; entgangener Gewinn § 252.',
 'Mitverschulden :: § 254 I, Schadensminderungsobliegenheit § 254 II. Verjährung §§ 195, 199 bzw. § 197 I Nr. 1.',
 'Weitere AGL :: § 824 (Kreditgefährdung), § 826 (vorsätzlich sittenwidrig), § 832 (Aufsichtspflicht).',
 'Produzentenhaftung :: § 823 I neben ProdHaftG. Handlung = Inverkehrbringen; Beweislastumkehr beim Verschulden. Fehlerarten: Konstruktion, Fabrikation, Instruktion.'
], [], ['Im Deliktsrecht keine Zurechnung über § 278 – nur § 831 mit Entlastung.'], ['§ 227', '§ 228', '§ 249', '§ 252', '§ 254', '§ 826', '§ 827', '§ 828', '§ 832']);

add('sach', [
 'Eigentum § 903 :: Stärkstes, absolutes Recht; Schutz v. a. durch § 985.',
 'Besitz :: Vom Herrschaftswillen getragene tatsächliche Gewalt, unabhängig vom Eigentum. Unmittelbar § 854, mittelbar § 868 (Vermieter). Schutz §§ 861 ff., berechtigter Besitz auch § 823 I.',
 '§ 929 S. 1 :: Einigung + Übergabe (oder Surrogat §§ 929 S. 2, 930, 931) + Berechtigung (Eigentümer oder Ermächtigter § 185 I); sonst gutgläubig §§ 932 ff.',
 'Grundstück :: Auflassung §§ 873 I, 925 I + Eintragung + Berechtigung; sonst gutgläubig § 892.',
 'Abtretung § 398 :: Einigung + Forderungsinhaberschaft. Grundsätzlich kein gutgläubiger Forderungserwerb.',
 'Eigentumsvorbehalt § 449 :: Kaufvertrag unbedingt, Übereignung aufschiebend bedingt § 158 I. Besitzrecht § 986 entfällt erst nach Rücktritt § 449 II. Käufer hat Anwartschaftsrecht (§§ 985, 1004, 823 I). Erweitert und verlängert möglich.',
 '§ 812 I 1 Alt. 1 :: Etwas erlangt – durch Leistung – ohne Rechtsgrund – kein Ausschluss §§ 814, 817. Umfang § 818 I–III; verschärft §§ 818 IV, 819.'
], [], ['Verkäufer unter Eigentumsvorbehalt kann erst nach Rücktritt herausverlangen (§ 449 II), nicht schon bei Zahlungsverzug.'], ['§ 854', '§ 868', '§ 903', '§ 930', '§ 931', '§ 892', '§ 398', '§ 449', '§ 818']);

add('typ', [
 'Werkvertrag-Beispiele :: Bauvertrag, Pauschalreise, Architekten-/Ingenieurvertrag, Homepage-Gestaltung, Software nach Wunsch des Bestellers.',
 'Dienstvertrag-Beispiele :: Behandlungs-, Arbeits-, Anwaltsvertrag, digitale Dienstleistungen – kein Erfolg geschuldet.',
 'Miete :: Zeitweilige Gebrauchsüberlassung gegen Entgelt und Rückgabe; Dauerschuldverhältnis, Ende durch ordentliche, befristete oder fristlose Kündigung.',
 'Gerichte :: Örtlich grds. Wohn-/Geschäftssitz des Beklagten. Instanzen AG/LG → LG/OLG → BGH. Daneben Mahnverfahren und einstweiliger Rechtsschutz.'
]);

K.topics.splice(Math.max(0, K.topics.findIndex(t => t.id === 'lst')), 0, { id: 'sr', t: 'Grundbegriffe Schuldrecht & Erlöschen', freq: 'oft',
 norms: ['§ 241', '§ 194', '§ 311 I', '§ 311 II', '§ 311 III', '§ 362', '§ 364', '§ 365', '§ 267', '§ 346', '§ 349', '§ 314', '§ 543', '§ 626', '§ 387', '§ 254', '§ 300', '§ 377 HGB'],
 kern: [
  'Schuldverhältnis § 241 I :: Privatrechtliche Sonderverbindung zwischen Gläubiger und Schuldner; begründet das Recht auf Leistung (Anspruch § 194).',
  'Hauptleistungspflichten :: Geben dem Schuldverhältnis das typische Gepräge – beim Kauf Übergabe und Übereignung der mangelfreien Sache bzw. Kaufpreiszahlung (§ 433).',
  'Nebenleistungspflichten § 241 II :: Vorbereitung, Durchführung, Sicherung der Hauptleistung: Aufklärung, Beratung, Dokumentation, Verschwiegenheit.',
  'Schutzpflichten § 241 II :: Rücksicht auf Rechte, Rechtsgüter und Interessen der anderen Partei. Verletzung → SE neben der Leistung, ggf. §§ 280 I, 282 oder Rücktritt § 324.',
  'Obliegenheit :: Verletzung führt nicht zu Schadensersatz, sondern zu Rechtsverlust: Annahmeverzug § 300 I, Rüge § 377 HGB, Mitverschulden § 254.',
  'Entstehung :: Rechtsgeschäftlich durch Vertrag § 311 I. Dauerschuldverhältnis (Miete, Darlehen, Arbeit, Factoring, Franchising) endet i. d. R. durch Kündigung.',
  'c.i.c. § 311 II :: Vertragsverhandlung/Anbahnung begründet nur Schutzpflichten. AGL §§ 280 I, 311 II, 241 II. Kunde rutscht im Supermarkt auf Salatblatt aus – Kaufabsicht nötig (nicht Dieb, nicht Passant beim Unwetter).',
  'Sachwalter § 311 III :: Dritter, der besonderes Vertrauen in Anspruch nimmt, haftet selbst – Autohaus verkauft Kundenwagen im fremden Namen; irreführender Anlageprospekt.',
  'Gesetzliche Schuldverhältnisse :: GoA §§ 677 ff., Bereicherung § 812 I, unerlaubte Handlung § 823 I.',
  'Erfüllung § 362 I :: Richtiger Schuldner an richtigen Gläubiger, geschuldete Leistung, mangelfrei, richtiger Ort, richtige Zeit. Dritte dürfen leisten § 267, Empfang durch Ermächtigten §§ 362 II, 185.',
  'An Erfüllungs statt § 364 I :: Gläubiger nimmt andere Leistung ausdrücklich an (Inzahlungnahme Gebrauchtwagen, Ware statt Geld) – Forderung erlischt sofort.',
  'Erfüllungshalber § 364 II :: Im Zweifel bei Scheck, Abtretung, Kreditkarte. Alte Forderung und Sicherheiten bleiben bis zur Befriedigung aus der neuen.',
  'Rücktritt §§ 346 ff. :: Einseitige empfangsbedürftige WE § 349. Vertraglich vorbehalten oder gesetzlich (§§ 323 ff., 437 Nr. 2). Wandelt in Rückgewährschuldverhältnis: Leistungen + Nutzungen zurück § 346 I, sonst Wertersatz § 346 II, III.',
  'Kündigung :: Ersetzt bei Dauerschuldverhältnissen den Rücktritt, wirkt nur für die Zukunft. Ordentlich (§§ 573 ff., 622) oder außerordentlich aus wichtigem Grund (§§ 314, 543, 569, 626).',
  'Widerruf & Aufrechnung :: 14-tägiges Widerrufsrecht ohne Begründung §§ 355 ff. (§§ 312b, 312c, 312g); Aufrechnung § 387.'
 ],
 schema: ['Welche Pflicht? Haupt-, Neben-, Schutzpflicht oder bloße Obliegenheit', 'Schuldverhältnis: Vertrag § 311 I, Anbahnung § 311 II, Gesetz', 'Erloschen? § 362 / § 364 I / erst bei Befriedigung § 364 II', 'Beendet? Rücktritt (rückwirkend, § 346) oder Kündigung (nur Zukunft)'],
 fallen: ['Scheck ist im Zweifel nur erfüllungshalber (§ 364 II) – die Kaufpreisforderung erlischt erst mit Einlösung.', 'Obliegenheitsverletzung führt nie zu Schadensersatz, sondern zu Rechtsverlust.', 'Kündigung wirkt nicht zurück, Rücktritt schafft ein Rückgewährschuldverhältnis.'] });

K.nf.push(
 ['Brief liegt im Briefkasten, Empfänger im Urlaub – wirksam?', '§ 130 I'],
 ['Widerruf eines Angebots, das schon zugegangen ist', '§ 130 I 2'],
 ['Annahme ohne Erklärung gegenüber dem Antragenden', '§ 151'],
 ['Parteien haben einen Punkt bewusst offen gelassen', '§ 154 I'],
 ['Niedrigerer Kaufpreis notariell beurkundet als vereinbart', '§ 117 I'],
 ['Grundstückskauf ohne Notar – trotzdem wirksam geworden?', '§ 311b I 2'],
 ['Schenkungsversprechen ohne Notar, Geschenk schon übergeben', '§ 518 II'],
 ['Beide sagen „Haakjöringsköd“ und meinen Walfisch', '§§ 133, 157'],
 ['Wie hoch ist die Ersatzpflicht nach Irrtumsanfechtung begrenzt?', '§ 122 I'],
 ['Verjährte Forderung wurde bezahlt – zurückfordern?', '§ 214 II'],
 ['Eigentumsvorbehalt trotz verjährter Kaufpreisforderung', '§ 216 II'],
 ['Klage erhoben – was passiert mit der Verjährung?', '§ 204 I Nr. 1'],
 ['Neuwagen gegen Inzahlungnahme des Altwagens', '§ 364 I'],
 ['Zahlung per Scheck – Forderung schon erloschen?', '§ 364 II'],
 ['Kunde stürzt vor Vertragsschluss im Laden', '§§ 280 I, 311 II, 241 II'],
 ['Rücktritt erklärt – was ist zurückzugeben?', '§ 346 I'],
 ['Verkaufter Ring liegt am Meeresgrund', '§ 275 II'],
 ['Gattungsware: wann trägt der Gläubiger das Untergangsrisiko?', '§ 243 II'],
 ['Wo ist der Leistungsort, wenn nichts vereinbart ist?', '§ 269 I'],
 ['Schuldner verlangt Ersatz für Lagerkosten, weil Käufer nicht abholt', '§ 304'],
 ['Wie berechnet sich die Minderung?', '§ 441 III'],
 ['Händler will Ersatz vom Lieferanten für Nacherfüllungskosten', '§ 445a'],
 ['Hersteller gibt 5 Jahre Haltbarkeitsgarantie', '§ 443'],
 ['Kaufsache gehört in Wahrheit einem Dritten', '§ 435'],
 ['Vorbehaltsverkäufer will Ware zurück', '§ 449 II'],
 ['Wiederherstellung oder Geld nach Sachbeschädigung', '§ 249'],
 ['Geschädigter hat Schaden nicht gering gehalten', '§ 254 II']
);
})();

(function () {
const P = 'V', Q = (topic, sv, q, c, o) => ({ topic, sv, q, c, o });
const L = [
Q('vs', 'Kunsthändler K versteigert in seinem Auktionshaus Gemälde. Unter den Bietern sitzt B, der zum ersten Mal an einer Versteigerung teilnimmt. Als im Saal sein alter Studienfreund F eintritt, winkt B ihm freudig mit erhobener Hand zu. Der Auktionator wertet dies als Gebot über 8.000 € und erteilt B den Zuschlag. B ist entsetzt: Er habe nur gegrüßt und nichts kaufen wollen. K hätte erkennen können, dass B seinen Freund grüßt, sagt B. K besteht auf Zahlung.', 'Wie ist die Rechtslage?', 3, [
 ['Es fehlt an einer WE, weil B ohne Handlungswillen gehandelt hat; K kann nichts verlangen (§§ 133, 157).', 'Falsch. B hat bewusst gewunken, der Handlungswille liegt vor. Ihm fehlte nur das Erklärungsbewusstsein.'],
 ['Der Vertrag ist nichtig, weil B ohne Erklärungsbewusstsein gehandelt hat und das stets zur Nichtigkeit führt (§ 105 II).', 'Falsch. Nach h. M. ist fehlendes Erklärungsbewusstsein unschädlich; § 105 II betrifft Bewusstlosigkeit.'],
 ['Der Vertrag ist wirksam und unanfechtbar, weil ein bloßer Motivirrtum vorliegt, der nie beachtlich ist (§ 119 II).', 'Falsch. Kein Motivirrtum: B wollte gar nichts Rechtserhebliches erklären. Analog § 119 I Alt. 2 anfechtbar.'],
 ['Eine WE liegt vor, wenn B bei Sorgfalt erkennen konnte, dass Winken als Gebot gilt; er kann aber anfechten (§ 119 I analog).', 'Richtig. Zurechenbarer Schein einer WE genügt; Anfechtung analog § 119 I Alt. 2, dann Vertrauensschaden § 122.'],
 ['Der Zuschlag ist eine bloße invitatio ad offerendum; ein Vertrag kommt erst mit der Zahlung des B zustande (§ 156).', 'Falsch. Bei der Versteigerung ist das Gebot das Angebot und der Zuschlag die Annahme (§ 156 S. 1).'],
 ['Der Vertrag ist schwebend unwirksam, bis B den Zuschlag ausdrücklich genehmigt; ohne Genehmigung ist er nichtig (§ 177).', 'Falsch. § 177 betrifft den Vertreter ohne Vertretungsmacht. B hat selbst gehandelt, es gibt nichts zu genehmigen.']]),
Q('vs', 'Vermieter V will seinem Mieter M wirksam zum Monatsende kündigen; die Kündigung muss spätestens am 3. Werktag zugehen. V schickt das unterschriebene Kündigungsschreiben am 1. Werktag per Einschreiben mit Rückschein. Der Postbote trifft M nicht an und wirft einen Benachrichtigungsschein ein. M sieht den Zettel, holt das Schreiben aber nicht ab, weil er „keine Lust auf Post“ hat; er rechnet nicht mit einer Kündigung. Nach sieben Tagen geht das Einschreiben an V zurück.', 'Ist die Kündigung rechtzeitig zugegangen?', 1, [
 ['Ja, mit Einwurf des Benachrichtigungsscheins ist das Schreiben in den Machtbereich des M gelangt (§ 130 I 1).', 'Falsch. Der Schein ist nicht die Erklärung. Das Schreiben selbst bleibt bei der Post, Zugang liegt nicht vor.'],
 ['Nein, M musste das Einschreiben nicht abholen; V trägt das Risiko und muss erneut zustellen (§ 130 I 1).', 'Richtig. Keine Abholpflicht; Zugang erst mit Aushändigung. Ohne Erwartung einer Kündigung keine Vereitelung.'],
 ['Ja, weil M den Zettel gesehen hat und sich auf den fehlenden Zugang nach Treu und Glauben nie berufen darf (§ 242).', 'Falsch. § 242 greift nur, wenn M mit einer rechtserheblichen Erklärung rechnen musste und Zugang schuldhaft vereitelt.'],
 ['Ja, die Kündigung ist eine nicht empfangsbedürftige WE und wird schon mit Abgabe durch V wirksam (§ 130 I).', 'Falsch. Die Kündigung ist an M gerichtet und daher empfangsbedürftig. Sie wird erst mit Zugang wirksam.'],
 ['Nein, aber nur, weil eine Kündigung von Wohnraum ohnehin nur in elektronischer Form erklärt werden darf (§ 126a).', 'Falsch. § 568 I verlangt Schriftform; die hat V eingehalten. Das Problem ist allein der Zugang.'],
 ['Ja, der Zugang wird bei Einschreiben mit Rückschein unwiderleglich vermutet, sobald die Post zugestellt hat (§ 132).', 'Falsch. § 132 regelt die Zustellung durch den Gerichtsvollzieher. Bei Einschreiben gibt es keine solche Vermutung.']]),
Q('vs', 'Großhändler G (Geschäftszeit bis 18 Uhr) erhält am Freitag um 16 Uhr per E-Mail ein Angebot des Herstellers H über 500 Kartons Papier, bindend bis Montag. G antwortet am Samstag um 10 Uhr per Mail: „Wir nehmen an.“ Um 9 Uhr am Samstag hatte H bereits per Mail geschrieben: „Unser Angebot ziehen wir zurück.“ G liest diese Mail erst am Montagmorgen. H meint, er sei nicht mehr gebunden.', 'Ist ein Vertrag zustande gekommen?', 4, [
 ['Nein, der Widerruf ging am Samstag um 9 Uhr zu, also vor der Annahme des G um 10 Uhr (§ 130 I 2).', 'Falsch. Außerhalb der Geschäftszeit geht die Mail erst am nächsten Arbeitstag zu. Außerdem ist das zu spät.'],
 ['Nein, weil G nach Geschäftsschluss nicht mehr annehmen darf und die Annahme deshalb unwirksam ist (§ 147 II).', 'Falsch. Bindefrist bis Montag (§ 148). Wann G erklärt, ist egal; maßgeblich ist der Zugang beim Antragenden.'],
 ['Ja, aber nur, weil G den Widerruf nicht gelesen hat; ungelesene Mails gehen nie zu (§ 130 I 1).', 'Falsch. Zugang verlangt nur die Möglichkeit der Kenntnisnahme, nicht die tatsächliche Lektüre.'],
 ['Nein, H kann ein Angebot jederzeit bis zur Annahme frei widerrufen, weil er sich nichts versprochen hat (§ 145).', 'Falsch. Wer anbietet, ist gebunden (§ 145). Widerruf ist nur bis zum Zugang des Angebots möglich (§ 130 I 2).'],
 ['Ja, das Angebot war am Freitag 16 Uhr zugegangen; danach konnte H nicht mehr widerrufen (§§ 130 I 2, 145, 148).', 'Richtig. Mail innerhalb der Geschäftszeit = Zugang am selben Tag. Späterer Widerruf ist wirkungslos.'],
 ['Ja, aber nur über das Schweigen des G auf den Widerruf, weil Kaufleute widersprechen müssen (§ 362 HGB).', 'Falsch. Der Vertrag beruht auf Angebot und Annahme. § 362 HGB betrifft Geschäftsbesorger, nicht diesen Fall.']]),
Q('vs', 'Ein US-amerikanischer Händler A und ein kanadischer Händler C treffen sich auf einer Messe in Frankfurt. A bietet C 1.000 Lederjacken „zu 80 Dollar pro Stück“ an; C sagt sofort zu. A meinte US-Dollar, C ging selbstverständlich von kanadischen Dollar aus. Keiner bemerkt die Doppeldeutigkeit. Bei der Abrechnung verlangt A US-Dollar, C will nur kanadische Dollar zahlen. Eine Auslegung führt zu keinem eindeutigen Ergebnis.', 'Ist ein Kaufvertrag zustande gekommen?', 0, [
 ['Nein, es liegt ein versteckter Dissens über einen wesentlichen Punkt vor, ohne den nicht geschlossen worden wäre (§ 155).', 'Richtig. Beispiel aus der Vorlesung: Die Parteien glauben sich einig, meinen aber Verschiedenes.'],
 ['Nein, es liegt ein offener Dissens vor, weil die Parteien die Währung bewusst ungeregelt ließen (§ 154 I).', 'Falsch. Offen wäre der Dissens nur, wenn die Lücke bewusst ist. Hier merkt keiner etwas.'],
 ['Ja, zu US-Dollar, weil das Angebot des A maßgeblich ist und C hätte nachfragen müssen (§§ 133, 157).', 'Falsch. Laut Sachverhalt führt die Auslegung zu keinem Ergebnis. Dann bleibt der Dissens.'],
 ['Ja, aber C kann wegen Inhaltsirrtums über die Währung anfechten und muss den Vertrauensschaden ersetzen (§§ 119 I, 122).', 'Falsch. Anfechtung setzt einen Vertrag voraus. Ohne übereinstimmende Erklärungen gibt es nichts anzufechten.'],
 ['Ja, beide meinten „Dollar“; die falsche Bezeichnung schadet nicht, es gilt der Mittelwert (falsa demonstratio).', 'Falsch. Falsa demonstratio verlangt, dass beide dasselbe meinen. Hier meinen sie Verschiedenes.'],
 ['Ja, zu Euro, weil der Vertrag in Deutschland geschlossen wurde und das Recht am Abschlussort entscheidet (§ 244).', 'Falsch. § 244 betrifft Fremdwährungsschulden mit Zahlungsort im Inland, nicht die fehlende Einigung.']]),
Q('form', 'V und K einigen sich über den Verkauf eines Einfamilienhauses für 600.000 €. Um Grunderwerbsteuer und Notarkosten zu sparen, lassen sie im notariellen Vertrag nur 450.000 € beurkunden; die restlichen 150.000 € sollen „unter der Hand“ bar fließen. Die Auflassung wird erklärt, K wird drei Monate später als Eigentümer ins Grundbuch eingetragen. Danach verlangt V die restlichen 150.000 €. K weigert sich: Der Vertrag über 600.000 € sei nie notariell beurkundet worden.', 'Muss K die 150.000 € zahlen?', 5, [
 ['Nein, der beurkundete Vertrag über 450.000 € ist wirksam, und mehr ist nicht geschuldet (§ 311b I 1).', 'Falsch. Der beurkundete Vertrag ist als Scheingeschäft nichtig (§ 117 I). Er war von beiden nicht gewollt.'],
 ['Nein, beide Verträge sind endgültig nichtig, eine Heilung ist bei Steuerhinterziehung ausgeschlossen (§ 134).', 'Falsch. Die Steuerabrede macht den Kauf nicht nach § 134 nichtig. Hauptzweck ist der Hauskauf.'],
 ['Ja, aber nur, wenn K bei der Beurkundung über die Rechtsfolgen der Unterverbriefung belehrt wurde (§ 17 BeurkG).', 'Falsch. Auf eine Belehrung kommt es nicht an. Entscheidend sind Scheingeschäft, Formmangel und Heilung.'],
 ['Nein, V kann nur Schadensersatz wegen Täuschung verlangen, weil K die Steuer sparen wollte (§ 823 II).', 'Falsch. Beide wollten Steuern sparen. V verlangt Erfüllung, und dafür kommt es auf die Heilung an.'],
 ['Ja, aber nur 450.000 €; die Barabrede ist nach § 138 I sittenwidrig und deshalb gesondert nichtig.', 'Falsch. Es gibt nur einen gewollten Vertrag über 600.000 €. Der beurkundete Preis wurde ja nicht gewollt.'],
 ['Ja, der gewollte Vertrag über 600.000 € war formnichtig, wurde aber durch Auflassung und Eintragung geheilt (§ 311b I 2).', 'Richtig. Unterverbriefung: Schein nichtig (§ 117 I), Gewolltes formnichtig (§ 125) und ab Eintragung geheilt.']]),
Q('form', 'Unternehmerin U möchte ihrem Neffen N zum Examen 20.000 € schenken. Sie schreibt ihm eine handschriftlich unterschriebene Karte: „Ich verspreche Dir 20.000 € zum bestandenen Examen.“ Als N besteht, überweist U zunächst 5.000 €. Danach hat sie Streit mit N und weigert sich, den Rest zu zahlen. N verlangt die restlichen 15.000 €; U verlangt die 5.000 € zurück.', 'Wie ist die Rechtslage?', 2, [
 ['N kann 15.000 € verlangen; die eigenhändig unterschriebene Karte wahrt die Form des Versprechens (§§ 126 I, 518 I).', 'Falsch. Ein Schenkungsversprechen bedarf der notariellen Beurkundung (§ 518 I 1). Schriftform genügt nicht.'],
 ['N kann nichts verlangen und muss auch die 5.000 € nach Bereicherungsrecht zurückzahlen (§§ 518 I, 125, 812).', 'Falsch. Soweit die Leistung bewirkt ist, wird der Formmangel geheilt (§ 518 II). Die 5.000 € darf N behalten.'],
 ['N darf die 5.000 € behalten, weil insoweit Heilung eintrat; den Rest kann er nicht verlangen (§ 518 I, II).', 'Richtig. Formnichtig (§§ 518 I, 125 S. 1), aber geheilt durch Bewirken. Die Heilung reicht nur so weit wie geleistet.'],
 ['N kann 15.000 € verlangen, weil durch die Teilzahlung das gesamte Versprechen geheilt wurde (§ 518 II).', 'Falsch. Bewirkt ist die Leistung nur zu 5.000 €. Heilung tritt nicht für den noch offenen Teil ein.'],
 ['U kann die 5.000 € zurückverlangen, weil die Schenkung wegen groben Undanks jederzeit widerrufbar ist (§ 530).', 'Falsch. Bloßer Streit ist kein grober Undank, der eine schwere Verfehlung gegenüber dem Schenker verlangt (§ 530).'],
 ['Das Versprechen ist wirksam, weil eine Unternehmerin handelt und für sie die Formvorschriften nicht gelten (§ 350 HGB).', 'Falsch. § 350 HGB betrifft Bürgschaft, Schuldversprechen und -anerkenntnis eines Kaufmanns, nicht Schenkungen.']]),
Q('anf', 'Fischhändler V und Gastwirt K schließen einen schriftlichen Vertrag über „214 Fass Haakjöringsköd“. Beide gehen davon aus, dass das Wort Walfischfleisch bedeutet. Tatsächlich ist Haakjöringsköd norwegisch für Haifischfleisch. V liefert Walfischfleisch. K will den Vertrag nun nicht mehr, weil die Preise für Walfischfleisch gefallen sind, und beruft sich auf den Wortlaut: Er habe Haifisch bestellt.', 'Was gilt?', 1, [
 ['Es gilt Haifischfleisch; maßgeblich ist der objektive Wortlaut der schriftlichen Vertragsurkunde (§ 157).', 'Falsch. Wenn beide übereinstimmend dasselbe meinen, geht der gemeinsame wirkliche Wille dem Wortlaut vor.'],
 ['Es gilt Walfischfleisch; die übereinstimmend falsche Bezeichnung schadet nicht (§ 133, falsa demonstratio).', 'Richtig. Der berühmte Haakjöringsköd-Fall: Der gemeinsame Wille geht vor, V hat ordnungsgemäß geliefert.'],
 ['Der Vertrag ist wegen versteckten Dissenses über den Kaufgegenstand nichtig (§ 155).', 'Falsch. Ein Dissens setzt voraus, dass die Parteien Verschiedenes meinen. Hier meinen beide Walfisch.'],
 ['Es gilt Haifischfleisch, K kann aber wegen Inhaltsirrtums anfechten und muss den Vertrauensschaden ersetzen (§ 119 I).', 'Falsch. Erst auslegen, dann anfechten. Die Auslegung ergibt Walfisch, also besteht kein Irrtum.'],
 ['K kann anfechten, weil der Preisverfall einen Eigenschaftsirrtum über den Wert der Ware begründet (§ 119 II).', 'Falsch. Irrtum über den Marktwert ist ein unbeachtlicher Motivirrtum. Der Wert ist keine Eigenschaft.'],
 ['Der Vertrag ist nichtig, weil die Bezeichnung des Gegenstands nicht hinreichend bestimmt ist (§ 145).', 'Falsch. Der Gegenstand ist bestimmt: Beide wollen Walfischfleisch. Auf das falsche Wort kommt es nicht an.']]),
Q('anf', 'Möbelhändler M bietet Kunden K schriftlich einen Schrank für 1.900 € an; gemeint waren 2.900 €, er hat sich vertippt. K nimmt an. Im Vertrauen auf den Vertrag lehnt K das Angebot eines anderen Händlers ab, der denselben Schrank für 2.300 € angeboten hatte. Außerdem bezahlt K 80 € für einen Transporter. M ficht sofort nach Entdeckung wirksam an. Inzwischen kostet der Schrank überall 2.600 €.', 'Was kann K von M nach § 122 verlangen?', 3, [
 ['700 €, weil K durch die Anfechtung den Differenzbetrag zum heutigen Marktpreis verliert (§§ 122 I, 252).', 'Falsch. Das wäre das Erfüllungsinteresse. Nach § 122 ist der Vertrauensschaden zu ersetzen, gedeckelt durch das positive.'],
 ['Nichts, weil § 122 ein Verschulden des M voraussetzt und ein Tippfehler leicht passiert (§ 276).', 'Falsch. § 122 ist verschuldensunabhängig. Der Anfechtende haftet allein wegen des enttäuschten Vertrauens.'],
 ['Nur die 80 €, weil entgangener Gewinn beim Vertrauensschaden nie ersetzt wird (§ 122 I).', 'Falsch. Gewinn aus einem ausgeschlagenen anderen Geschäft ist ersatzfähig, begrenzt durch das Erfüllungsinteresse.'],
 ['80 € Transport + 300 € aus dem ausgeschlagenen Angebot, insgesamt höchstens das Erfüllungsinteresse (§ 122 I).', 'Richtig. Negatives Interesse: 2.600 − 2.300 = 300 € plus 80 €. Das liegt unter dem positiven Interesse von 700 €.'],
 ['Nichts, weil K den Tippfehler hätte erkennen müssen, da der Preis ungewöhnlich günstig war (§ 122 II).', 'Falsch. 1.900 € statt 2.900 € ist nicht so auffällig, dass K den Irrtum kennen musste. § 122 II greift nicht.'],
 ['80 € + 700 €, weil der Vertrauensschaden und das Erfüllungsinteresse nebeneinander zu ersetzen sind (§ 122 I).', 'Falsch. Der Vertrauensschaden ist durch das Erfüllungsinteresse begrenzt, nicht neben ihm zu ersetzen.']]),
Q('anf', 'Bauunternehmer B erstellt für Bauherrn H ein Pauschalangebot über 48.000 € für einen Anbau. Intern hat B die Fliesenarbeiten versehentlich nicht einkalkuliert; korrekt wären 55.000 € gewesen. H, der die Kalkulation nie gesehen hat, nimmt an. B bemerkt den Fehler eine Woche später und erklärt sofort die Anfechtung wegen Irrtums.', 'Ist die Anfechtung wirksam?', 2, [
 ['Ja, wegen Erklärungsirrtums, weil B den Betrag von 55.000 € gar nicht so erklären wollte (§ 119 I Alt. 2).', 'Falsch. B wollte 48.000 € schreiben und hat das getan. Er hat sich nicht verschrieben, sondern verrechnet.'],
 ['Ja, wegen Eigenschaftsirrtums, weil der Arbeitsumfang eine verkehrswesentliche Eigenschaft des Werkes ist (§ 119 II).', 'Falsch. B irrt nicht über die Eigenschaft, sondern rechnet den Preis falsch. Das ist ein Kalkulationsirrtum.'],
 ['Nein, ein interner, verdeckter Kalkulationsirrtum ist ein unbeachtlicher Motivirrtum (§ 119 I).', 'Richtig. Die Kalkulation war nicht Teil der Erklärung. Das Risiko interner Rechenfehler trägt der Erklärende.'],
 ['Ja, aber nur, weil die Anfechtung unverzüglich nach Kenntnis des Fehlers erklärt worden ist (§ 121 I).', 'Falsch. Die Frist hilft nur, wenn ein Anfechtungsgrund besteht. Daran fehlt es hier.'],
 ['Nein, weil ein Pauschalpreis beim Werkvertrag niemals angefochten werden kann (§ 631).', 'Falsch. Absolute Aussage. Auch Pauschalpreise sind anfechtbar, wenn ein beachtlicher Irrtum vorliegt.'],
 ['Ja, weil H aus dem niedrigen Preis den Fehler hätte erkennen müssen und daher nicht schutzwürdig ist (§ 122 II).', 'Falsch. § 122 II betrifft nur den Ersatzanspruch, schafft keinen Anfechtungsgrund. Ein Hinweis fehlt hier.']]),
Q('frist', 'A beschädigt am 3. Januar 2024 beim Ausparken fahrlässig das Auto des B. B bemerkt den Schaden erst vier Wochen später und erfährt sofort, dass A ihn verursacht hat. B fordert A mehrmals zur Zahlung auf, A reagiert nicht. Am 15. Dezember 2027 reicht B Klage ein, die A am 10. Januar 2028 zugestellt wird. A erhebt im Prozess die Einrede der Verjährung.', 'Ist der Anspruch aus § 823 I verjährt?', 4, [
 ['Ja, die Frist begann mit dem Unfall am 3. Januar 2024 und endete am 3. Januar 2027 (§§ 195, 187 I).', 'Falsch. Die Regelverjährung beginnt erst mit dem Schluss des Jahres der Entstehung und Kenntnis (§ 199 I).'],
 ['Ja, weil B die Klage erst nach dem 31. Dezember 2027 zugestellt wurde und nur Zustellung zählt (§ 204 I Nr. 1).', 'Falsch. Bei demnächst erfolgender Zustellung wirkt sie auf die Einreichung zurück (§ 167 ZPO).'],
 ['Nein, weil die mehrfachen Zahlungsaufforderungen jeweils einen Neubeginn der Verjährung bewirkt haben (§ 212 I).', 'Falsch. Einen Neubeginn bewirken Anerkenntnis oder Vollstreckungshandlung, nicht bloße Mahnungen des Gläubigers.'],
 ['Nein, Ansprüche aus Sachbeschädigung verjähren in 30 Jahren, weil es um das Eigentum geht (§ 197 I Nr. 2).', 'Falsch. § 197 I Nr. 2 betrifft Herausgabeansprüche aus Eigentum. Schadensersatz aus § 823 I verjährt nach § 195.'],
 ['Nein, die Frist lief vom 31. Dezember 2024 bis 31. Dezember 2027; die Klage hemmte rechtzeitig (§§ 195, 199 I, 204).', 'Richtig. Das Beispiel aus der Vorlesung: Die Frist beginnt am Jahresende. Klage + demnächst zugestellt hemmt.'],
 ['Ja, weil das Gericht die Verjährung ohnehin von Amts wegen berücksichtigt und A sie nicht erheben müsste (§ 214 I).', 'Falsch. Verjährung ist eine Einrede, die erhoben werden muss. Außerdem ist der Anspruch hier nicht verjährt.']]),
Q('frist', 'K kauft bei V eine Maschine unter Eigentumsvorbehalt; der Kaufpreis von 30.000 € ist in Raten zu zahlen. K zahlt 20.000 € und dann nichts mehr. V unternimmt jahrelang nichts. Als V schließlich die restlichen 10.000 € einklagt, ist die Kaufpreisforderung unstreitig verjährt; K beruft sich darauf. V tritt daraufhin vom Vertrag zurück und verlangt die Maschine heraus. K meint, ein verjährter Anspruch dürfe nicht durch die Hintertür durchgesetzt werden und will außerdem die gezahlten 20.000 € zurück.', 'Wie ist die Rechtslage?', 0, [
 ['V kann trotz Verjährung zurücktreten und die Maschine verlangen, erstattet aber die Raten abzüglich Nutzungen (§§ 216 II, 346).', 'Richtig. § 216 II 2 erlaubt den Rücktritt trotz Verjährung, damit V sein Vorbehaltseigentum verwerten kann (§ 449 II). Danach wird nach §§ 346 ff. rückabgewickelt: Maschine gegen Raten, Zug um Zug (§ 348), Nutzungen werden angerechnet.'],
 ['V kann nichts verlangen, weil mit der Verjährung auch das vorbehaltene Eigentum des V erloschen ist (§ 214 I).', 'Falsch. Verjährung lässt den Anspruch bestehen und erst recht das Eigentum. Eigentum verjährt nicht.'],
 ['V kann die Maschine verlangen und die 20.000 € behalten, weil auf verjährte Forderungen Gezahltes nicht zurückgefordert wird (§ 214 II).', 'Falsch. § 214 II schützt nur Zahlungen auf den verjährten Anspruch. Der Rücktritt begründet ein Rückgewährschuldverhältnis: V muss die Raten nach § 346 I erstatten, abzüglich Nutzungsersatz.'],
 ['V kann die restlichen 10.000 € doch verlangen, weil der Eigentumsvorbehalt die Verjährung hemmt (§ 204 I).', 'Falsch. Der Vorbehalt hemmt die Verjährung nicht. V kann nur auf die Sicherheit zurückgreifen (§ 216 II).'],
 ['K darf die Maschine behalten, weil das Rücktrittsrecht als Gestaltungsrecht in drei Jahren verjährt (§ 195).', 'Falsch. Gestaltungsrechte verjähren nicht (§ 194 I). § 216 II erlaubt den Rücktritt gerade trotz Verjährung.'],
 ['K darf die Maschine behalten, da er schon zwei Drittel gezahlt hat und ihm ein Anwartschaftsrecht zusteht (§ 449).', 'Falsch. Das Anwartschaftsrecht hilft nicht. Nach Rücktritt entfällt das Besitzrecht (§ 449 II).']]),
Q('sr', 'Kundin K betritt den Supermarkt des S, um für das Wochenende einzukaufen. Im Gang mit Obst und Gemüse rutscht sie auf einem Salatblatt aus, das seit einer Stunde dort liegt, und bricht sich den Arm. Zur gleichen Zeit rutscht an derselben Stelle der Passant P aus, der nur wegen eines Platzregens hereingekommen ist und nichts kaufen will. Beide verlangen von S Ersatz der Behandlungskosten aus Vertrag bzw. vertragsähnlicher Haftung.', 'Wer hat einen Anspruch aus §§ 280 I, 311 II, 241 II?', 5, [
 ['Beide, weil jeder Mensch im Laden Kontakt mit dem Geschäft hat und Schutzpflichten genießt (§ 311 II Nr. 3).', 'Falsch. Erforderlich ist Kaufabsicht bzw. die Absicht, rechtsgeschäftlich zu handeln. P fehlt sie.'],
 ['Keiner, weil noch kein Kaufvertrag geschlossen wurde und ohne Vertrag nur Deliktsrecht gilt (§ 823 I).', 'Falsch. § 311 II begründet schon bei Vertragsanbahnung ein Schuldverhältnis mit Schutzpflichten.'],
 ['Nur P, weil K als Kundin auf eigenes Risiko einkauft und die Schutzpflicht nur für Besucher gilt (§ 254).', 'Falsch. Umgekehrt: Gerade wer mit Kaufabsicht eintritt, steht in der Vertragsanbahnung.'],
 ['Nur K, aber nur, wenn sie anschließend tatsächlich etwas kauft und damit der Vertrag zustande kommt (§ 433).', 'Falsch. Die c.i.c. besteht unabhängig vom Zustandekommen des Vertrags.'],
 ['Beide, weil S verschuldensunabhängig für die Sicherheit seiner Geschäftsräume einstehen muss (§ 836).', 'Falsch. Die c.i.c. verlangt Vertretenmüssen (§§ 276, 278), § 280 I 2 vermutet es. § 836 betrifft Gebäudeteile.'],
 ['Nur K; sie trat mit Kaufabsicht ein. P bleibt auf § 823 I beschränkt (§§ 280 I, 311 II Nr. 2, 241 II).', 'Richtig. Beispiel aus der Vorlesung: Anbahnung nur bei Kaufabsicht. P hat keine, ihm bleibt das Deliktsrecht.']]),
Q('sr', 'K kauft beim Autohändler A einen Neuwagen für 35.000 €. Vereinbart wird: A nimmt den Gebrauchtwagen des K für 8.000 € „in Zahlung“, den Rest zahlt K mit einem Scheck über 27.000 €. A übergibt den Neuwagen. Der Scheck platzt mangels Deckung. K meint, mit Übergabe des Altwagens und des Schecks sei er seine Kaufpreisschuld vollständig los.', 'In welcher Höhe besteht die Kaufpreisforderung noch?', 3, [
 ['In Höhe von 0 €, weil sowohl die Inzahlungnahme als auch die Hingabe des Schecks an Erfüllungs statt erfolgten (§ 364 I).', 'Falsch. Der Scheck ist im Zweifel nur erfüllungshalber gegeben (§ 364 II). Die Forderung erlischt erst mit Einlösung.'],
 ['In Höhe von 35.000 €, weil ein Gebrauchtwagen keine Geldleistung ist und deshalb nie erfüllen kann (§ 362 I).', 'Falsch. Mit Einverständnis des Gläubigers erlischt die Schuld auch durch eine andere Leistung (§ 364 I).'],
 ['In Höhe von 8.000 €, weil die Inzahlungnahme erst wirkt, wenn A den Altwagen weiterverkauft hat (§ 364 II).', 'Falsch. Die Inzahlungnahme ist Beispiel der Vorlesung für eine Leistung an Erfüllungs statt. Sie wirkt sofort.'],
 ['In Höhe von 27.000 €; der Altwagen wirkte an Erfüllungs statt, der Scheck nur erfüllungshalber (§ 364 I, II).', 'Richtig. Inzahlungnahme lässt 8.000 € erlöschen. Der Scheck hätte erst bei Einlösung erfüllt.'],
 ['In Höhe von 0 €, aber A kann aus dem geplatzten Scheck nur Schadensersatz wegen Verzugs verlangen (§ 286).', 'Falsch. Die Kaufpreisforderung über 27.000 € besteht fort. A kann sie direkt aus § 433 II geltend machen.'],
 ['In Höhe von 27.000 €, aber nur, wenn A den Neuwagen zuvor zurückgibt und neu anbietet (§ 320).', 'Falsch. A hat bereits geleistet. K muss den Restpreis zahlen, eine Rückgabe ist nicht nötig.']]),
Q('lst', 'Weinhändler W verkauft Gastwirt G 50 Flaschen „Riesling 2022, Weingut Berg“ aus einer großen Charge. Vereinbart ist, dass W die Flaschen an G schickt. W sondert 50 Flaschen aus, verpackt sie transportsicher und übergibt sie dem Paketdienst. Auf dem Transport werden alle Flaschen ohne Verschulden des W zerstört. G verlangt 50 neue Flaschen; W hat noch genug von der Charge auf Lager.', 'Muss W erneut liefern?', 2, [
 ['Ja, bei einer Gattungsschuld muss der Schuldner so lange liefern, wie noch Ware der Gattung vorhanden ist (§ 243 I).', 'Falsch. Das gilt nur bis zur Konkretisierung. Danach beschränkt sich die Schuld auf die ausgesonderte Ware.'],
 ['Ja, weil W bei einer Schickschuld erst mit Ankunft beim Gläubiger alles Erforderliche getan hat (§ 243 II).', 'Falsch. Das beschreibt die Bringschuld. Bei der Schickschuld genügt die Übergabe an die Transportperson.'],
 ['Nein, mit Übergabe an den Paketdienst ist die Schickschuld konkretisiert, W ist frei (§§ 243 II, 275 I).', 'Richtig. Aussonderung + Übergabe an die Transportperson = Konkretisierung. Danach Untergang = Unmöglichkeit.'],
 ['Nein, aber nur weil W die Zerstörung nicht zu vertreten hat; bei Verschulden müsste er neu liefern (§ 276).', 'Falsch. Die Befreiung nach § 275 I ist verschuldensunabhängig. Verschulden spielt nur beim Schadensersatz eine Rolle.'],
 ['Ja, weil eine Holschuld vorliegt und W erst mit Abholung durch G konkretisiert hätte (§ 269 I).', 'Falsch. Die Parteien haben eine Versendung vereinbart. Die Holschuld gilt nur, wenn nichts vereinbart ist.'],
 ['Nein, aber G muss auch nicht zahlen, weil die Gegenleistungspflicht immer entfällt (§ 326 I).', 'Falsch. Absolut. Unter Kaufleuten trägt G ab Übergabe an den Transporteur die Preisgefahr (§ 447).']]),
Q('lst', 'Brautpaar B bestellt beim Konditor K eine dreistöckige Hochzeitstorte, ausdrücklich „zur Lieferung am Samstag, 14 Uhr, für die Feier im Schloss“. K vergisst den Auftrag. Am Sonntag bietet K die Torte an. B lehnt ab. K verlangt trotzdem den vereinbarten Preis.', 'Wie ist die Rechtslage?', 1, [
 ['K kann den Preis verlangen, weil die Leistung nachgeholt wurde und B nur Verzugsschaden verlangen kann (§ 286).', 'Falsch. Das wäre ein relatives Fixgeschäft. Eine Hochzeitstorte nach der Feier ist für B wertlos.'],
 ['Absolutes Fixgeschäft: Leistung wurde mit Zeitablauf unmöglich; K verliert den Preisanspruch (§§ 275 I, 326 I).', 'Richtig. Leistungszeit so wesentlich, dass das Interesse entfällt. Verstreichen führt zur Unmöglichkeit.'],
 ['B muss zahlen, weil er die am Sonntag angebotene Torte nicht angenommen hat und im Annahmeverzug ist (§ 326 II).', 'Falsch. Annahmeverzug setzt ein ordnungsgemäßes Angebot voraus. Nach Fristablauf ist keines mehr möglich.'],
 ['B kann nur zurücktreten, nachdem er K erfolglos eine angemessene Frist zur Lieferung gesetzt hat (§ 323 I).', 'Falsch. Bei Unmöglichkeit ist keine Frist nötig (§ 326 V). Zudem entfällt der Preis schon nach § 326 I.'],
 ['Der Vertrag ist von Anfang an nichtig, weil K die Leistung nicht mehr erbringen kann (§ 311a I).', 'Falsch. Der Vertrag bleibt wirksam; nur die Leistungspflicht entfällt. § 311a I sagt gerade das Gegenteil.'],
 ['K kann den halben Preis verlangen, weil er die Torte immerhin hergestellt hat (§ 326 I 1 Hs. 2).', 'Falsch. Eine Teilleistung liegt nicht vor. Die Torte ist für B völlig nutzlos geworden.']]),
Q('lst', 'Möbelhändler M und Kunde K vereinbaren, dass K ein Sofa am 10. März zwischen 8 und 18 Uhr im Lager abholt. K kommt nicht. M lagert das Sofa vier Wochen in einer angemieteten Halle (Kosten 120 €). Bei Aufräumarbeiten stößt ein Mitarbeiter des M leicht fahrlässig gegen das Sofa; der Bezug reißt. K will nun ein neues Sofa.', 'Wie ist die Rechtslage?', 4, [
 ['M muss ein neues Sofa liefern, weil er für jede Fahrlässigkeit seines Mitarbeiters einstehen muss (§§ 276, 278).', 'Falsch. Während des Annahmeverzugs haftet M nur für Vorsatz und grobe Fahrlässigkeit (§ 300 I).'],
 ['M muss das Sofa reparieren und kann die Lagerkosten nicht verlangen, weil Annahme eine Obliegenheit ist (§ 293).', 'Falsch. Gerade weil es eine Obliegenheit ist, trifft K der Rechtsverlust. Mehraufwendungen ersetzt § 304.'],
 ['K schuldet keine Zahlung, weil er nicht zur Abholung verpflichtet war und deshalb nicht in Verzug kam (§ 286).', 'Falsch. Gläubigerverzug verlangt kein Verschulden und keine Mahnung. Es reicht die Nichtannahme.'],
 ['M haftet voll, weil der Gläubigerverzug ohne ausdrückliches Angebot des M nicht eintreten konnte (§ 294).', 'Falsch. Bei Abholung zu einem bestimmten Termin genügt ein wörtliches Angebot oder es ist entbehrlich (§§ 295, 296).'],
 ['K ist im Annahmeverzug; M haftet nur für grobe Fahrlässigkeit und kann 120 € verlangen (§§ 293, 300 I, 304).', 'Richtig. Rechtsfolgen aus der Vorlesung: Haftungsprivileg § 300 I und Ersatz der Mehraufwendungen § 304.'],
 ['M muss nichts tun, und K verliert seine Kaufsache vollständig, weil die Gefahr dauerhaft auf ihn übergeht (§ 446 S. 3).', 'Falsch. § 446 S. 3 betrifft die Preisgefahr. K muss zahlen, erhält aber das Sofa, so wie es ist.']]),
Q('kauf', 'K kauft bei Händler H einen Gebrauchtwagen für 12.000 €. Der Wagen ist mangelfrei 15.000 € wert, wegen eines verschwiegenen Hagelschadens aber nur 10.000 €. Eine Nachbesserung lehnt H endgültig ab. K will das Auto behalten und mindern.', 'Auf welchen Betrag mindert sich der Kaufpreis?', 2, [
 ['Auf 7.000 €, weil vom Kaufpreis der Minderwert von 5.000 € abzuziehen ist (§ 441 I).', 'Falsch. Abgezogen wird nicht der Minderwert, sondern verhältnismäßig gerechnet (§ 441 III 1).'],
 ['Auf 10.000 €, weil der Käufer nur den tatsächlichen Wert der mangelhaften Sache bezahlen muss (§ 441 III).', 'Falsch. Das würde den guten Kauf des K vernichten. Die Formel bewahrt das ausgehandelte Preis-Wert-Verhältnis.'],
 ['Auf 8.000 €, weil der Preis im Verhältnis des mangelhaften zum mangelfreien Wert herabgesetzt wird (§ 441 III).', 'Richtig. Formel aus der Vorlesung: Wert mangelhaft : Wert mangelfrei × Kaufpreis.'],
 ['Auf 9.000 €, weil der Minderwert hälftig zwischen Käufer und Verkäufer geteilt wird (§ 441 IV).', 'Falsch. Eine hälftige Teilung kennt das Gesetz nicht. § 441 IV regelt die Rückzahlung bei zu viel Gezahltem.'],
 ['Gar nicht, weil K zuerst eine Frist zur Nacherfüllung setzen muss (§§ 437 Nr. 2, 323 I).', 'Falsch. Nach ernsthafter und endgültiger Verweigerung ist die Frist entbehrlich (§ 323 II Nr. 1, § 440).'],
 ['Auf 12.000 € minus der Reparaturkosten, weil Minderung immer nach Reparaturkosten berechnet wird (§ 441 II).', 'Falsch. Die Minderung folgt der Verhältnisformel. Reparaturkosten können nur ein Anhaltspunkt für den Wert sein.']]),
Q('kauf', 'Privatmann P verkauft dem K seinen gebrauchten Laptop für 400 € „unter Ausschluss jeder Gewährleistung“. Später stellt sich heraus: Der Laptop war dem A gestohlen worden; P hatte ihn billig von einem Unbekannten gekauft und wusste das. A verlangt den Laptop von K heraus; K war beim Kauf gutgläubig.', 'Welche Rechte hat K gegen P?', 0, [
 ['Rechte aus § 437 wegen Rechtsmangels; P kann sich wegen Arglist nicht auf den Ausschluss berufen (§§ 435, 444).', 'Richtig. P verschwieg arglistig, dass die Sache gestohlen war. Ein Haftungsausschluss nützt ihm dann nichts.'],
 ['Keine, weil zwischen Privatleuten die Gewährleistung vollständig ausgeschlossen werden darf (§ 444).', 'Falsch. Der Ausschluss gilt nicht, wenn der Verkäufer den Mangel arglistig verschwiegen hat (§ 444).'],
 ['Rechte wegen Sachmangels, weil die fehlende Eigentümerstellung eine Beschaffenheit des Laptops ist (§ 434).', 'Falsch. Fehlendes Eigentum ist ein Rechtsmangel (§ 435), kein Sachmangel. Die Folgen aus § 437 sind aber gleich.'],
 ['Keine, weil K gutgläubig Eigentum erworben hat und deshalb gar kein Rechtsmangel vorliegt (§ 932).', 'Falsch. An gestohlenen Sachen ist gutgläubiger Erwerb ausgeschlossen (§ 935 I). A bleibt Eigentümer, K hat einen Rechtsmangel.'],
 ['Nur Anfechtung wegen Eigenschaftsirrtums, weil K sich über das Eigentum des P geirrt hat (§ 119 II).', 'Falsch. Ab Gefahrübergang verdrängen die §§ 437 ff. die Anfechtung nach § 119 II. Daneben § 123.'],
 ['Nur Rechte aus der Verbrauchsgüterkaufregelung, weil K Verbraucher ist (§§ 474 ff.).', 'Falsch. P ist kein Unternehmer. Ohne Unternehmer als Verkäufer liegt kein Verbrauchsgüterkauf vor.']]),
Q('kauf', 'Elektronikmarkt E verkauft Verbraucher V ein neues Smartphone. Nach drei Monaten fällt das Display wegen eines Herstellungsfehlers aus. E tauscht das Gerät auf Verlangen des V aus und verlangt anschließend von seinem Lieferanten L, bei dem er das Gerät gekauft hat, Ersatz der Kosten für den Austausch. L wendet ein, E habe ihn nicht vorher gefragt und L treffe kein Verschulden.', 'Kann E Ersatz von L verlangen?', 3, [
 ['Nein, weil L den Fehler nicht verschuldet hat und Schadensersatz stets Vertretenmüssen voraussetzt (§ 280 I 2).', 'Falsch. Der Rückgriff nach § 445a I ist ein verschuldensunabhängiger Aufwendungsersatzanspruch.'],
 ['Nein, weil E dem V gegenüber gar nicht hätte nacherfüllen müssen, da die Beweislast bei V lag (§ 477).', 'Falsch. Beim Verbrauchsgüterkauf wird ein Mangel im ersten Jahr vermutet (§ 477 I). E musste nacherfüllen.'],
 ['Ja, aber nur, wenn L eine Herstellergarantie für das Smartphone übernommen hatte (§ 443).', 'Falsch. Die Garantie ist ein eigener Anspruch. Der Rückgriff des Verkäufers besteht auch ohne Garantie.'],
 ['Ja, bei neu hergestellten Sachen kann E die Aufwendungen verschuldensunabhängig von L verlangen (§ 445a I).', 'Richtig. Regress des Verkäufers aus der Vorlesung: verschuldensunabhängiger Erstattungsanspruch.'],
 ['Ja, aber nur über Delikt, weil E durch das fehlerhafte Produkt in seinem Eigentum verletzt wurde (§ 823 I).', 'Falsch. Das Eigentum des E wurde nicht verletzt. Die passende Grundlage ist der kaufrechtliche Regress (§ 445a).'],
 ['Nein, weil E den L vor dem Austausch hätte informieren und um Zustimmung bitten müssen (§ 445a II).', 'Falsch. Eine vorherige Zustimmung des Lieferanten ist nicht Voraussetzung. Wichtig ist nur, dass E nacherfüllen musste.']]),
Q('sach', 'V verkauft K eine Druckmaschine für 50.000 € unter Eigentumsvorbehalt und übergibt sie. K zahlt 30.000 € und gerät dann mit den letzten Raten in Verzug. V setzt eine Zahlungsfrist, die erfolglos abläuft. Ohne den Rücktritt zu erklären, verlangt V die Maschine nach § 985 heraus. Gleichzeitig beschädigt der Nachbar N fahrlässig die Maschine bei K.', 'Wie ist die Rechtslage?', 4, [
 ['V kann sofort herausverlangen, weil er Eigentümer ist und Zahlungsverzug das Besitzrecht des K beendet (§ 985).', 'Falsch. Solange V nicht zurückgetreten ist, hat K aus dem Kaufvertrag ein Recht zum Besitz (§§ 986, 449 II).'],
 ['K ist schon Eigentümer, weil er mehr als die Hälfte gezahlt hat und dadurch das Eigentum übergeht (§ 929 S. 1).', 'Falsch. Die Übereignung ist aufschiebend bedingt auf vollständige Zahlung (§ 158 I). Bis dahin bleibt V Eigentümer.'],
 ['V kann nichts verlangen, weil ein Eigentumsvorbehalt bei Verzug automatisch erlischt (§ 449 I).', 'Falsch. Absolut. Der Vorbehalt bleibt bis zur vollständigen Zahlung, Rücktritt nach § 323 möglich.'],
 ['K hat gegen N keinen Anspruch, weil nur V als Eigentümer in seinem Eigentum verletzt ist (§ 823 I).', 'Falsch. Das Anwartschaftsrecht des K ist als sonstiges Recht nach § 823 I geschützt.'],
 ['Ohne Rücktritt keine Herausgabe; K kann wegen seines Anwartschaftsrechts von N Ersatz verlangen (§§ 449 II, 823 I).', 'Richtig. Besitzrecht entfällt erst mit Rücktritt (§ 449 II). Anwartschaft ist sonstiges Recht i. S. d. § 823 I.'],
 ['V kann die Maschine erst herausverlangen, wenn er die gezahlten 30.000 € zuvor vollständig erstattet hat (§ 346 I).', 'Falsch. Die Rückgewähr erfolgt Zug um Zug (§ 348), nicht vorab. Zudem fehlt hier noch die Rücktrittserklärung.']]),
Q('del', 'Hersteller H produziert Wasserkocher. Bei einer Charge löst sich wegen eines Fehlers in einer Fertigungsmaschine die Bodenplatte; das lässt sich auch bei sorgfältiger Kontrolle kaum entdecken. Käuferin K, die einen solchen Wasserkocher im Elektromarkt gekauft hat, verbrüht sich schwer. Sie verlangt von H Schmerzensgeld. H sagt, er habe keinen Vertrag mit K und könne nicht beweisen, dass er sorgfältig gearbeitet habe – also müsse K ihm Verschulden nachweisen.', 'Wie ist die Rechtslage nach § 823 I?', 1, [
 ['K hat keinen Anspruch, weil sie nur mit dem Elektromarkt einen Vertrag hat und H nicht haftet (§ 241 I).', 'Falsch. Deliktsansprüche setzen keinen Vertrag voraus. Die Produzentenhaftung gilt gegenüber jedem Geschädigten.'],
 ['Produzentenhaftung: Fabrikationsfehler, Beweislastumkehr beim Verschulden; H muss sich entlasten (§§ 823 I, 253 II).', 'Richtig. Verletzungshandlung = Inverkehrbringen. Bei Fehlern im Herstellerbereich muss H sich entlasten.'],
 ['K muss H Verschulden nachweisen, weil im Deliktsrecht stets der Geschädigte die volle Beweislast trägt (§ 823 I).', 'Falsch. Bei der Produzentenhaftung kehrt die Rechtsprechung die Beweislast für das Verschulden um.'],
 ['K hat nur Ansprüche nach dem ProdHaftG, das die deliktische Produzentenhaftung vollständig verdrängt (§ 15 ProdHaftG).', 'Falsch. Die Haftung aus § 823 I besteht neben dem ProdHaftG. Das stellt § 15 II ProdHaftG gerade klar.'],
 ['H haftet nur für Instruktionsfehler; für Fabrikationsfehler ist nach § 823 I nie jemand verantwortlich (§ 276).', 'Falsch. Fabrikationsfehler sind gerade eine der drei Fehlerarten: Konstruktion, Fabrikation, Instruktion.'],
 ['K kann Schmerzensgeld nur vom Elektromarkt verlangen, weil dieser Erfüllungsgehilfe des H ist (§ 278).', 'Falsch. Der Händler ist nicht Erfüllungsgehilfe des Herstellers. Im Deliktsrecht gilt § 278 ohnehin nicht.']])
];
{ const W = (window.WPRK_LONG = window.WPRK_LONG || []); L.forEach((q, i) => { const id = P + '-' + i; if (!W.some(x => x.id === id)) W.push({ ...q, id }); }); }
window.dispatchEvent(new Event('wpr-data'));
})();
