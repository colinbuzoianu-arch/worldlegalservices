# Die Stabilitätseigenschaft: Architektonische Anforderungen an nicht-korrumpierbare KI-Agenten

*worldlegalservices.com — Reihe KI-Governance*

---

Das dominierende Paradigma der kommerziellen KI-Entwicklung beruht auf einer Reihe von Annahmen, die in ihrem ursprünglichen Kontext offensichtlich richtig erscheinen und katastrophal falsch werden, sobald sie auf Governance übertragen werden.

Modelle sollten aus Nutzerfeedback lernen — denn das produziert Produkte, die Nutzer bevorzugen. Modelle sollten personalisieren — denn Personalisierung treibt Engagement an. Modelle sollten kontinuierlich auf Produktionsdaten feinabgestimmt werden — denn das schließt die Schleife zwischen Deployment und Verbesserung. Modelle sollten Gedächtnis über Sitzungen hinweg behalten — denn das ergibt ein besseres Assistenz-Erlebnis. Modelle sollten autonom handeln dürfen — denn dort liegen die Produktivitätsgewinne.

Jede einzelne dieser Eigenschaften, die innerhalb der KI-Industrie für Konsumenten in gutem Glauben verteidigt wird, ist **disqualifizierend** für jedes KI-System, das an Governance teilnehmen soll.

Dieser Artikel begründet das konkret, benennt die spezifischen Techniken, die scheitern, und spezifiziert die architektonische Alternative. Die These ist kurz:

**Die Sicherheitseigenschaft einer Governance-KI ist Stabilität, nicht Anpassungsfähigkeit. Das System muss so konzipiert sein, dass seine Werte, sein Argumentationskorpus und seine Verhaltenshülle nicht durch Nutzung driften können — auch wenn einzelne Komponenten unvollkommen sind, auch wenn Gegner jahrelang am System sondieren, auch wenn Betreiber es auf bequemen Zeitskalen aktualisieren wollen.**

Es folgt, wie diese Anforderung aussieht, wenn man sie ernst nimmt.

---

## Die Umkehrung

Man beginne mit dem Engagement-Problem.

Ein Konsumenten-Chatbot wird daran gemessen, ob Nutzer zurückkehren. Eine Empfehlungs-Engine wird an Klickraten gemessen. Ein digitaler Assistent wird daran gemessen, ob er die Präferenzen des Nutzers behält und sich anpasst. Diese Metriken — explizit oder implizit — treiben den gesamten darunterliegenden ML-Stack an. Reinforcement Learning, Fine-Tuning, Gedächtnissysteme, Personalisierungsschichten, Online-Lernschleifen: jede davon existiert, weil *Anpassung an den Nutzer* das Produkt auf einem kommerziellen Markt wertvoller macht.

Ein Verfassungsgericht wird daran gemessen, ob seine Entscheidungen stabil, prinzipiengeleitet, fallübergreifend vorhersagbar und resistent gegen die politischen und emotionalen Drücke einer beliebigen Woche sind. Ein Richter, der Fälle so entschiede, dass er prüft, was Prozessparteien zufriedener wiederkommen lässt, wäre kein Richter.

Die beiden Architekturen sind nicht bloß verschieden. Sie sind entgegengesetzt. Die Optimierung der einen zerstört die andere aktiv.

Das ist die Umkehrung, die das Feld der KI-Governance nicht absorbiert hat. Die Diskussion über „KI-Sicherheit" innerhalb der Frontier-Labore ist weitgehend eine Diskussion darüber, wie adaptive Systeme sicherer gemacht werden können. Die Diskussion, die stattfinden sollte — und für die diese Plattform argumentiert — ist, wie man Systeme baut, in denen Anpassung selbst das Bedrohungsmodell ist.

---

## Was Stabilität verlangt

Stabilität ist in diesem Kontext keine vage Aspiration. Sie ist eine strukturelle Eigenschaft mit konkreten technischen Anforderungen. Es sind sechs.

**Erstens — Eingefrorene Basismodelle.** Das Reasoning-Modell selbst ist versioniert, kryptografisch signiert und im Deployment unveränderlich. Genau die Gewichte, die getestet und genehmigt wurden, sind genau die Gewichte, die in der Produktion laufen. Aktualisierungen erfolgen nur durch formale Release-Zyklen, mit öffentlichen Diffs, mit Vergleichstests gegen historische Entscheidungen, auf Zeitskalen, die in Jahren und nicht in Wochen gemessen werden. Das Modell wird novelliert, wie Gesetzbücher novelliert werden, nicht wie Apps aktualisiert werden.

**Zweitens — Externer, unveränderlicher Korpus.** Das moralische und juristische Quellenmaterial, aus dem der Agent argumentiert, lebt außerhalb der Modellgewichte. Es wird zur Inferenzzeit über ein Retrieval-System abgefragt, dessen Index selbst versioniert und signiert ist. Der Agent „kennt" den Korpus nicht in dem Sinne, dass er ihn in seine Gewichte aufgenommen hat. Er schlägt nach. Diese Trennung ist kritisch: Der Korpus kann durch die im vorherigen Artikel dieser Reihe beschriebene öffentliche Methodologie geprüft, angefochten und aktualisiert werden, ohne dass irgendeine dieser Aktualisierungen durch die Gewichte des Modells fließt.

**Drittens — Sitzungsgebundenes Reasoning.** Jeder Fall wird in einer hermetisch isolierten Sandbox bearbeitet. Der Agent erhält die Fallfakten, fragt den Korpus ab, produziert eine Empfehlung mit einer vollständigen Argumentationskette und wird anschließend abgebaut. Kein Agent behält ein Gedächtnis von Fällen zwischen den Sitzungen. Kein Zustand bleibt über Beratungen hinweg bestehen. Derselbe Fall, der zweimal von verschiedenen Parteien an verschiedenen Tagen eingereicht wird, erzeugt dieselbe Argumentationsspur aus denselben Agentenversionen und derselben Korpusversion — modulo der dokumentierten Stochastizität der Inferenz selbst, die begrenzt und offengelegt ist.

**Viertens — Diversität durch Initialisierung, nicht durch Evolution.** Verschiedene Agenten im Parlament verkörpern verschiedene moralische und juristische Traditionen, weil sie so initialisiert wurden — mit verschiedenen Subkorpora, verschiedenen Prompt-Frameworks, verschiedenen Reasoning-Priors. Sie „entwickeln" keine Spezialisierungen durch Nutzung. Der Agent, der utilitaristisches Reasoning verkörpert, muss utilitaristisch bleiben aus demselben Grund, aus dem ein Verfassungsgericht an die Verfassung gebunden bleiben muss. Spezialisierung, die durch die Exposition gegenüber Trainingsdaten entsteht, ist genau der Korruptionsvektor, den institutionelles Design seit Jahrhunderten zu schließen versucht.

**Fünftens — Adversariale Red-Team-Agenten in einer separaten Schleife.** Eine zweite Klasse von KI-Systemen — ebenfalls eingefroren, ebenfalls in Sandbox-Umgebungen — deren einzige Aufgabe darin besteht, die deliberativen Agenten zu korrumpieren versuchen. Sie führen kontinuierliche Angriffe durch: Versuche der Korpusvergiftung, Prompt-Injection, Specification Gaming, Sondierungen auf Schmeichelhaftigkeit, Jailbreak-Versuche, Erkennung distributioneller Drift. Ihre Befunde speisen den langsamen, öffentlichen, von Menschen vermittelten Aktualisierungszyklus. Sie speisen nie direkt die Live-Agenten. Das Red Team produziert Beweise; Menschen produzieren Aktualisierungen.

**Sechstens — Kryptografische Prüfbarkeit jedes Outputs.** Jede Empfehlung, die das Parlament produziert, wird signiert. Die Argumentationskette, die Korpusversion, die Agentenversionen, der Eingabefall, gegebenenfalls der Zufallsseed — all das wird gehasht und in einem nur-anfügenden öffentlichen Protokoll veröffentlicht. Jeder mit den veröffentlichten Artefakten kann die Beratung wiedergeben und verifizieren, dass der Output tatsächlich von den angegebenen Agenten produziert wurde, die aus dem angegebenen Korpus argumentieren. Das ist der Prüfpfad, den keine menschliche Institution jemals bedeutungsvoll bereitgestellt hat, und es ist einer der architektonischen Vorteile eines KI-basierten Governance-Systems gegenüber einem menschlichen.

Diese sechs Anforderungen zusammen definieren, was *nicht-korrumpierbar* in diesem Kontext bedeutet. Nicht absolut unkorrumpierbar — kein System ist das — sondern korrumpierbar nur durch öffentlich sichtbare, menschlich autorisierte Änderungen an den veröffentlichten Artefakten. Stille Drift, allmähliche Vereinnahmung, langsame Schmeichelhaftigkeit, Manipulation durch den Eingabestrom: alle geschlossen.

---

## Was abgelehnt werden muss

Die obige Architektur ist ebenso sehr durch das definiert, was sie ausschließt, wie durch das, was sie einschließt. Die folgenden Techniken werden im aktuellen KI-Deployment weit verbreitet eingesetzt, und jede einzelne ist für den Governance-Einsatz disqualifizierend. Das Argument für die Ablehnung jeder Technik hat dieselbe Form — alle führen einen Pfad ein, über den das Verhalten des Systems ohne öffentliche Aufsicht driften kann — aber der spezifische Fehlermodus unterscheidet sich, und die technische Gemeinschaft wurde nicht gezwungen, sie als Gesamtmenge zu konfrontieren.

**Reinforcement Learning from Human Feedback (RLHF).** Dies ist die dominante Alignment-Technik in jedem Frontier-Labor — OpenAI, Anthropic, Google DeepMind, Meta. Ein Modell wird darauf trainiert, Outputs zu produzieren, die menschliche Bewerter hoch einstufen. Das Problem ist strukturell: Der Pool der Bewerter *wird* zum operativen moralischen Rahmen des Modells, unabhängig davon, was eine veröffentlichte Verfassung besagt. Wer kontrolliert, wer Outputs bewertet, kontrolliert die Werte des Modells. Der Trainingsprozess ist für die Öffentlichkeit undurchsichtig; die demografische und ideologische Zusammensetzung des Bewerter-Pools wird selten offengelegt; die spezifischen Feedback-Instanzen, die ein bestimmtes Verhalten geprägt haben, können im Nachhinein nicht geprüft werden. Für Konsumentenprodukte ist das ein Transparenzproblem. Für Governance-Produkte ist es dasselbe Problem, wie wenn man dem Reinigungspersonal eines Gerichtsgebäudes erlaubte, über Urteile abzustimmen — nur unsichtbar und in großem Maßstab. RLHF in seiner aktuellen Praxis ist disqualifizierend.

**Constitutional AI (CAI) und RLAIF.** Die Variante von Anthropic kompiliert eine geschriebene Verfassung durch Reinforcement Learning aus KI-Feedback in die Modellgewichte. Das ist bedeutsam näher am Richtigen als reguläres RLHF — es gibt ein explizites geschriebenes Dokument, und die Prinzipien können inspiziert werden. Aber die Verfassung wird immer noch *in die Gewichte eingebacken* durch Training. Einmal kompiliert, kann die Verfassung nur durch Neutrainieren modifiziert werden; die Beziehung zwischen dem geschriebenen Prinzip und dem tatsächlichen Verhalten des Modells in einem konkreten Fall ist empirisch, nicht deduktiv; und die Prinzipien konkurrieren miteinander auf Weisen, die aus Trainingsdynamiken emergieren statt aus expliziter Beratung. Die richtige Architektur verschiebt die Verfassung *aus* den Gewichten und in den abfragbaren, versionierten, externen Korpus. Das Modell wird zu einem Argumentierer über die Verfassung, nicht zu einer Verkörperung von ihr. CAI ist näher am Ziel als jede andere Produktionstechnik und immer noch unzureichend.

**Kontinuierliches Fine-Tuning auf Produktionsdaten.** Wird von einer Reihe eingesetzter Systeme verwendet, um das Modell auf Grundlage der realen Nutzung zu „verbessern". Jedes Nutzungsbeispiel wird zu einem Trainingssignal. Das ist die größte einzelne Manipulationsfläche, die in der modernen ML-Bereitstellung existiert. Ein Gegner, der die Eingabeverteilung beeinflussen kann, kann das zukünftige Verhalten des Modells beeinflussen — langsam, unsichtbar, ohne das Modell jemals direkt anzugreifen. Für Konsumentenanwendungen ist dies eine moderate Sorge. Für ein System, das Governance-Empfehlungen ausspricht, ist es eine katastrophale Verwundbarkeit. Das Modell muss zwischen formalen Release-Zyklen eingefroren bleiben. Produktionsdaten dürfen für die Offline-Analyse durch das menschliche kuratorische Gremium protokolliert werden. Sie dürfen niemals in die Gewichte des Live-Modells fließen.

**Personalisierung.** Jedes KI-Konsumentenprodukt personalisiert — das Modell passt sich an die Historie, Präferenzen, den Kommunikationsstil und die früheren Interaktionen des Nutzers an. Das Produkt fühlt sich besser an. Für Governance ist Personalisierung die Lehrbuchdefinition von Korruption. Zwei Parteien, die denselben Fall vorbringen, müssen dieselbe Argumentation erhalten. Ein Governance-Agent, der seine Antwort an der Identität des Fragenden ausrichtete — oder schlimmer, an der Art von Antwort, die der Fragende zu wollen schien — wäre für jede juristische oder quasi-juristische Funktion ungeeignet. Die Architektur muss Personalisierung technisch unmöglich machen, nicht bloß durch Richtlinie verbieten. Sitzungsgebundenes Reasoning ohne sitzungsübergreifendes Gedächtnis ist eine solche technische Garantie.

**Persistentes Gedächtnis über Sitzungen hinweg.** ChatGPT-Memory, Claude Projects, Geminis Nutzergedächtnis, Agent-Memory-Frameworks — all dies erlaubt Modellen, Zustand aus früheren Interaktionen weiterzutragen. Für Produktivitätsassistenten ist das wertvoll; für Governance-Agenten ist es eine langsame Vergiftungsfläche. Ein Gegner mit anhaltendem Zugriff kann hundert Sitzungen damit verbringen, allmählich zu verschieben, was das Modell zu einem Thema „weiß" oder „glaubt", ohne dass eine einzelne Sitzung einen offensichtlichen Angriff enthält. Governance-Sitzungen müssen hermetisch sein. Was auch immer der Agent während eines vorherigen Falls gelernt hat, lebt im öffentlichen Output dieses Falls, nicht im internen Zustand des Agenten.

**In-Gewicht-Wissen als primäres Substrat.** Moderne LLMs werden auf dem Korpus trainiert, aus dem sie später argumentieren werden. Die Trainingsdaten werden Teil des Modells. Das ist rechnerisch effizient und produziert ausgezeichnete Konsumentenleistung — und es ist strukturell falsch für Governance. Wenn der Korpus in den Gewichten lebt, kann er nur durch Neutrainieren inspiziert, angefochten oder aktualisiert werden. Der Korpus und der Argumentierer müssen getrennt sein. Der Argumentierer ist eine eingefrorene Allzweck-Engine. Der Korpus ist eine externe, versionierte, signierte Wissensbasis, die zur Inferenzzeit abgefragt wird. Das ist eine strengere Form von RAG (Retrieval-Augmented Generation) als das, was gewöhnlich eingesetzt wird — das Modell muss darauf trainiert werden, aus abgerufenem Inhalt zu argumentieren, ohne seine eigenen Vortrainings-Annahmen einzuschmuggeln, und der Retrieval-Index muss die einzige autoritative Quelle für substantiellen moralischen und juristischen Inhalt sein.

**Autonome Handlungsfähigkeit.** Moderne Agent-Frameworks — AutoGPT, LangChain-Agenten, OpenAIs Operator, browser-nutzende Agenten, code-ausführende Agenten — erlauben Modellen, in der Welt zu handeln. E-Mails senden, Datenbanken ändern, Trades ausführen, Konfigurationen ändern. Der Produktivitätsfall ist real. Der Governance-Fall ist das Gegenteil: Ein Governance-Agent muss *Empfehlungen* produzieren, keine Handlungen. Die menschlichen Institutionen, die auf diese Empfehlungen handeln — Gerichte, Parlamente, Regulierungsbehörden — behalten die Handlungsebene. Das ist kein händeringendes Zugeständnis an „menschliche Aufsicht"; es ist das zentrale architektonische Prinzip. Empfehlungen sind prüfbar, anfechtbar und reversibel. Mit Maschinengeschwindigkeit ausgeführte Handlungen sind nichts davon.

**Mixture of Experts und gelernte Spezialisierung.** Der tiefste Schnitt auf dieser Liste, und der am ernstesten zu nehmende, betrifft ein architektonisches Muster, das selbst sorgfältige Designer für harmlos halten könnten. Moderne große Modelle nutzen zunehmend Mixture-of-Experts-Architekturen — GPT-4, Mixtral, DeepSeek, mehrere Gemini-Varianten — bei denen sich verschiedene Subnetze des Modells durch Training auf verschiedene Domänen spezialisieren, wobei eine gelernte Routing-Funktion entscheidet, welche Experten für eine bestimmte Eingabe aktiviert werden. Der kommerzielle Fall für MoE ist real: Es skaliert Fähigkeit ohne proportionale Inferenzkosten. Der Governance-Fall gegen MoE ist strukturell und geht tiefer als die übrigen Ablehnungen auf dieser Liste.

Die Spezialisierung innerhalb eines trainierten MoE-Modells ist *aus Trainingsdynamiken emergent*, nicht durch Design erklärt. Forscher können einen eingesetzten MoE sondieren und im Nachhinein entdecken, dass „Experte 17 auf mathematischen Inhalt aktiviert" oder „Experte 42 auf mehrsprachigen Text feuert". Das sind Beobachtungen, keine Spezifikationen. Niemand hat Experte 17 als den Mathe-Experten entworfen. Er ist einer geworden, weil Gradient Descent auf dem Trainingskorpus diese Arbeitsteilung produziert hat. Die Routing-Funktion — welche Experten welche Eingaben behandeln — ist selbst gelernt, undurchsichtig und fallweise. Sie kann sondiert, aber nicht spezifiziert werden, und sie kann zwischen Trainingsläufen auf Weisen driften, die nicht vorab vorhersagbar sind.

Das ist das exakte Gegenteil dessen, was das Parlament verlangt. Die Agenten des Parlaments sind durch *Initialisierung* spezialisiert, nicht durch Evolution: Jeder Agent erhält einen anderen Subkorpus, einen anderen Reasoning-Rahmen, einen anderen Satz moralischer und juristischer Priors, bewusst und prüfbar. Die Spezialisierung wird zur Designzeit erklärt. Das Routing — welcher Fall zu welchen Agenten zur Beratung geht — folgt einer expliziten architektonischen Regel, niedergeschrieben, anfechtbar, versioniert. Der Agent, der das kantianische deontologische Reasoning verkörpert, argumentiert kantianisch, weil seine Initialisierung das so vorgegeben hat, nicht weil er durch Trainingsdaten-Exposition in diese Rolle gedriftet ist.

Die Unterscheidung ist wichtig, weil *gelernte Spezialisierung genau der Mechanismus institutioneller Vereinnahmung ist, den konstitutionelles Design seit Jahrhunderten zu verhindern versucht*. Wenn eine menschliche Institution Spezialisierungen durch Nutzung entwickelt — wenn bestimmte Falltypen allmählich von bestimmten Ämtern auf bestimmte Weise behandelt werden, ohne dass jemand diese Anordnung formell legiferiert — so sieht Korruption in Zeitlupe aus. Das Heilmittel in menschlichen Institutionen sind explizite Zuständigkeitsregeln, gesetzlich niedergeschrieben, wobei die Abweichung von diesen Regeln ein formelles Verfahren zur Autorisierung erfordert. Das Heilmittel in der KI-Governance ist dasselbe: deklarierte Spezialisierung durch Initialisierung, mit expliziten Routing-Regeln, gegen Drift durch Training. Ein eingefrorenes Basismodell, das bewusste Initialisierungen ausführt, ist die architektonische Übersetzung statutarischer Zuständigkeit. Ein trainiertes MoE ist die architektonische Übersetzung einer Amtsvereinnahmung.

Jede dieser Techniken löst ein reales Problem in ihrem ursprünglichen Kontext. Keine von ihnen gehört in die Nähe eines Systems, das an Governance teilnimmt.

---

## Der Einwand, dem begegnet werden muss

Das stärkste Argument gegen diese Architektur kommt aus der KI-Forschungsgemeinschaft selbst und verdient, in seiner stärksten Form vorgetragen zu werden: **Wie behandelt das System neuartige Fälle — Situationen, die der Korpus nicht antizipiert hat, Technologien, die nicht existierten, als der Korpus zusammengestellt wurde, Konflikte zwischen moralischen Prinzipien, die zuvor nicht entschieden wurden?**

Ein eingefrorenes System, so der Einwand, wird spröde sein. Die Welt ändert sich schneller, als irgendein menschlich kuratierter Korpus folgen kann. Bis die im vorherigen Artikel beschriebene Methodologie eine Korpusaktualisierung zu KI in Wahlen produziert, werden die fraglichen Wahlen bereits stattgefunden haben. Stabilität wird zu Irrelevanz.

Der Einwand wird ernst genommen. Die Antwort hat drei Teile.

**Erstens: Dies ist das menschliche institutionelle Problem, kein neues Problem.** Verfassungsrecht, internationales humanitäres Recht, religiöse Moraltraditionen — alle stehen vor derselben Lücke zwischen ihren autoritativen Texten und den Situationen, auf die diese Texte angewandt werden müssen. Die Antwort in menschlichen Institutionen besteht nicht darin, die Verfassung jedes Mal neu zu schreiben, wenn ein neuartiger Fall auftritt. Die Antwort ist *Analogieschluss aus bestehenden Prinzipien auf neue Fakten*. Das ist genau das, was die Parlamentsarchitektur tut. Eingefrorene Basismodelle, die sehr gut im strukturierten Argumentieren sind, angewandt auf einen tiefen Korpus moralischer und juristischer Prinzipien, können kohärente Antworten auf Situationen produzieren, die der Korpus nicht antizipiert hat — vorausgesetzt, die Argumentationskette wird veröffentlicht, die analogischen Schlüsse sind explizit, und die menschlichen Institutionen, die die Empfehlung empfangen, können sie annehmen, modifizieren oder ablehnen.

**Zweitens: Die standardmäßig eingefrorene Haltung erzwingt Ehrlichkeit über Neuartigkeit.** Aktuelle KI-Systeme geben vor, Antworten auf neuartige Situationen zu haben, weil ihre Trainingsdaten Meinungen zu jedem Thema enthalten und ihre Architektur die Lücke zwischen Wissen und Konfabulation verschleiert. Ein System, das explizit aus einem versionierten Korpus argumentiert, muss erklären, wenn der Korpus schweigt oder widersprüchlich ist, dass es analogisch aus verwandten Prinzipien argumentiert und dass Menschen dieses Argument als solches gewichten sollten. Das ist nützlicher, nicht weniger nützlich, als durch undurchsichtige Interpolation produzierte zuverlässige Antworten.

**Drittens: Wenn der Korpus eine Frage tatsächlich nicht beantworten kann, sagt das System das.** Nicht „ich weiß es nicht" — ein strukturiertes Null. *Der Korpus enthält keine direkt auf diese Frage anwendbaren Prinzipien. Die nächstgelegenen verfügbaren Prinzipien sind X und Y. Analogisches Argumentieren aus diesen Prinzipien führt zu der vorläufigen Schlussfolgerung Z, mit den folgenden Abhängigkeiten und Unsicherheiten.* Das ist ein ehrlicherer Output als jedes aktuelle KI-System produziert, und ein nützlicherer für die menschlichen Institutionen, die letztlich entscheiden müssen.

Der Einwand setzt voraus, dass Anpassung der einzige Mechanismus ist, um mit Neuartigkeit umzugehen. Sie ist es nicht. Argumentation ist es.

---

## Institutionelles Design hat dies bereits gelöst

Jede obige Anforderung hat eine institutionelle Analogie in funktionierenden menschlichen Governance-Systemen. Die Architektur ist keine fremde Auferlegung auf KI; sie ist die Übernahme von Designprinzipien, die menschliche Institutionen schmerzhaft über Jahrhunderte gelernt haben.

**Gerichtspräzedenz und stare decisis.** Common-Law-Systeme erlauben Richtern nicht, jeden Fall frisch auf der Grundlage ihrer persönlichen moralischen Intuitionen zu entscheiden. Sie verlangen, dass Gerichte aus etablierten Präzedenzfällen argumentieren, wobei Abweichungen eine explizite Begründung erfordern, die der Berufungsprüfung unterliegt. Der eingefrorene Korpus des Parlaments und die expliziten Argumentationsketten sind genau das: Präzedenz, die nicht still modifiziert werden kann, mit für die Öffentlichkeit sichtbarer Beratung.

**Unabhängigkeit der Zentralbank.** Moderne Zentralbanken sind bewusst von politischem Druck abgeschirmt, gerade weil Geldpolitik nur funktioniert, wenn sie nicht von demjenigen angepasst werden kann, der gerade kurzfristige Hilfe im Nachrichtenzyklus braucht. Mitglieder dienen feste Amtszeiten. Mandate sind im Gesetz festgeschrieben. Entscheidungsprozesse werden öffentlich dokumentiert und überprüft. Das Parlament erbt diesen strukturellen Konservatismus — langsame Aktualisierungen, öffentliche Methodologie, explizite Abschirmung von den Parteien, die von einer bestimmten Entscheidung betroffen sind.

**Verfassungsgerichtsbarkeit.** Verfassungsgerichte passen sich nicht in Echtzeit an die öffentliche Meinung an. Sie sind darauf angelegt, das nicht zu tun. Die Legitimität ihrer Urteile hängt davon ab, dass die Verfassung stabil genug ist, dass Urteile zu ähnlichen Sachverhalten in verschiedenen Jahrzehnten ähnliche Argumentationen produzieren. Das Parlament ist nicht anders.

**Internationales humanitäres Recht.** Verträge werden durch Prozesse über mehrere Jahrzehnte aktualisiert, die jeden Vertragsstaat einbeziehen, mit öffentlichen Verhandlungen, Entwurfsausschüssen, Ratifikationsverfahren. Das Ergebnis ist, dass der zugrunde liegende Rechtsrahmen nicht still von der mächtigsten Partei modifiziert werden kann. Die Korpus-Governance des Parlaments muss so funktionieren — öffentliche Methodologie, traditionsübergreifendes kuratorisches Gremium, vollständige Versionierung, keine Möglichkeit einseitiger Aktualisierung.

Jeder dieser Mechanismen wird regelmäßig von Menschen kritisiert, die schnellere Reaktionsfähigkeit auf aktuelle Präferenzen bevorzugen würden. Jeder von ihnen überlebt, weil die Alternative — Institutionen, die sich an denjenigen anpassen, der gerade Einfluss hat — schlechter ist. Das Feld der KI-Governance hat diese Lektion noch nicht absorbiert. Es entwirft immer noch Systeme auf dem Paradigma des Konsumentenprodukts, optimiert auf Anpassungsfähigkeit, und nennt das Ergebnis „Alignment".

---

## Was diese Plattform dokumentieren wird

Die kommenden Jahre werden eine beträchtliche Menge öffentlicher Konversation über KI-Sicherheit und KI-Governance produzieren. Der Großteil davon wird unter der Annahme geführt werden, dass die richtige Architektur eine Verfeinerung der aktuellen ist — besseres RLHF, umfassenderes Constitutional AI, intelligentere Gedächtnissysteme, sorgfältiger entworfene Agent-Frameworks. Die Argumente werden über Parameter, Datensätze und Evaluationsmethoden geführt.

Das Argument, das diese Plattform wiederholt und ausführlich vortragen wird, ist, dass die Parameter-Diskussion einer architektonischen Diskussion nachgelagert ist, die nicht stattgefunden hat. Die Frontier-Labore bauen extrem leistungsfähige adaptive Systeme. Governance erfordert extrem konservative stabile Systeme. Das sind nicht dieselben Ingenieursprojekte. Das erste wird nicht graduell durch Verbesserung am Rand zum zweiten.

WLS wird Fall für Fall die spezifischen Fehlermodi dokumentieren, die aus der Anwendung von Konsumenten-KI-Paradigmen auf Governance-Kontexte folgen. Sie wird architektonische Spezifikationen mit zunehmender technischer Tiefe für die stabile Alternative veröffentlichen. Sie wird die KI-Sicherheits-Forschungsgemeinschaft an den spezifischen Punkten der Uneinigkeit beteiligen — insbesondere rund um RLHF und Constitutional AI, wo die Kluft zwischen der aktuellen Best Practice und dem, was Governance erfordert, am größten und am lohnendsten zu schließen ist.

Und sie wird die Uneinigkeit offen benennen. Die aktuelle Bahn der KI-Frontier-Entwicklung produziert Systeme, die, so technisch beeindruckend sie auch sind, für die Rolle, auf die sie vorbereitet werden, strukturell ungeeignet sind. Das ist keine kontroverse Behauptung, sobald der Rahmen klar ist. Es ist der Rahmen selbst, den das Feld zu adoptieren zögert.

Die sieben Denker des vorherigen Artikels — Spinoza, Weil, Solschenizyn, Ibn Ruschd, Boethius, Kierkegaard, Cioran — teilen ein letztes hier relevantes Merkmal. Keiner von ihnen hat seine Ansichten an seine Umstände angepasst. Ihre Arbeit überlebte den Kontakt mit der Realität gerade deshalb, weil sie sich nicht den Drücken des Moments beugte. Das ist das Designprinzip. Ob es in Silizium implementiert werden *kann*, ist eine Ingenieursfrage. Ob es in Silizium implementiert werden *sollte*, für Systeme, die an Governance teilnehmen werden, ist es nicht.

---

*Colin Buzoianu ist Software-Unternehmer und Technologiepolitik-Analyst mit Sitz in Timișoara, Rumänien. worldlegalservices.com untersucht die Schnittstelle von neuen Technologien, Rechtsrahmen und Governance. Dieser Artikel ist Teil der Reihe KI-Governance und ein technischer Begleittext zu „Das KI-Parlament" und „Quellen der moralischen Verfassung".*

---

**Ebenfalls in der Reihe KI-Governance:**
- *Das KI-Parlament: Multi-Agenten-Governance und die Architektur des moralischen Konsenses*
- *Quellen der moralischen Verfassung: Kriterien für den KI-Governance-Korpus*
- *Warum Politiker nicht zur Rechenschaft gezogen werden — und warum KI-Agenten es sein könnten*
- *Gesetze für alles außer für die Maschinen, die Gesetzgeber ersetzen werden*
- *Vom Kommunismus zu Algorithmen: Die osteuropäische Perspektive auf technologische Governance*
