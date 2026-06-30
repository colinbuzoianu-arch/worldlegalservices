# Proprietatea stabilității: cerințe arhitecturale pentru agenți AI incoruptibili

*worldlegalservices.com — Seria Guvernanță AI*

---

Paradigma dominantă în dezvoltarea AI-ului comercial este construită pe un set de presupoziții care par evident corecte în contextul lor original și devin catastrofal greșite când sunt transpuse în guvernanță.

Modelele ar trebui să învețe din feedback-ul utilizatorilor — fiindcă asta produce produse pe care utilizatorii le preferă. Modelele ar trebui să personalizeze — fiindcă personalizarea generează engagement. Modelele ar trebui să fie ajustate continuu pe datele din producție — fiindcă asta închide bucla dintre desfășurare și îmbunătățire. Modelele ar trebui să rețină memorie între sesiuni — fiindcă asta produce o experiență mai bună de asistent. Modelele ar trebui să poată acționa autonom — fiindcă acolo se găsesc câștigurile de productivitate.

Fiecare dintre aceste proprietăți, apărată cu bună-credință în interiorul industriei AI pentru consum, este **descalificantă** pentru orice sistem AI destinat să participe la guvernanță.

Acest articol construiește argumentul concret, numește tehnicile specifice care eșuează și specifică alternativa arhitecturală. Teza este scurtă:

**Proprietatea de siguranță a unui AI de guvernanță este stabilitatea, nu adaptabilitatea. Sistemul trebuie proiectat astfel încât valorile, corpusul de raționament și anvelopa comportamentală să nu poată aluneca prin utilizare — chiar dacă componentele individuale sunt imperfecte, chiar dacă adversarii petrec ani sondând sistemul, chiar dacă operatorii vor să-l actualizeze pe orizonturi de timp convenabile.**

Urmează ce arată această cerință când o iei în serios.

---

## Inversiunea

Pleacă de la problema engagement-ului.

Un chatbot pentru consumatori este evaluat după dacă utilizatorii revin. Un motor de recomandare este evaluat după click-through. Un asistent digital este evaluat după dacă reține preferințele utilizatorului și se ajustează. Aceste metrici — explicit sau implicit — conduc întregul stack de ML subiacent. Reinforcement learning, fine-tuning, sisteme de memorie, straturi de personalizare, bucle de învățare online: fiecare există pentru că *adaptarea la utilizator* face produsul mai valoros pe o piață comercială.

O curte constituțională este evaluată după dacă deciziile sale sunt stabile, principiale, predictibile între cazuri și rezistente la presiunile politice și emoționale ale oricărei săptămâni date. Un judecător care ar decide cazurile verificând ce îi face pe litiganți să revină mai mulțumiți nu ar fi judecător.

Cele două arhitecturi nu sunt doar diferite. Sunt opuse. Optimizarea pentru una o distruge activ pe cealaltă.

Aceasta este inversiunea pe care domeniul guvernanței AI nu a absorbit-o. Discuția despre „siguranța AI" din interiorul laboratoarelor de frontieră este, în mare măsură, o discuție despre cum să facem sistemele adaptive mai sigure. Discuția care ar trebui să aibă loc — și pe care această platformă o susține — este cum să construim sisteme în care adaptarea însăși este modelul de amenințare.

---

## Ce cere stabilitatea

Stabilitatea, în acest context, nu este o aspirație vagă. Este o proprietate structurală cu cerințe tehnice concrete. Sunt șase.

**Una — Modele de bază înghețate.** Modelul de raționament în sine este versionat, semnat criptografic și imutabil în desfășurare. Exact ponderile care au fost testate și aprobate sunt exact ponderile care rulează în producție. Actualizările au loc doar prin cicluri formale de lansare, cu diff-uri publice, cu testare comparativă față de deciziile istorice, pe orizonturi de timp măsurate în ani, nu în săptămâni. Modelul este amendat așa cum sunt amendate codurile juridice, nu așa cum se actualizează aplicațiile.

**Două — Corpus extern, imutabil.** Materialul-sursă moral și juridic din care raționează agentul trăiește în afara ponderilor modelului. Este interogat la momentul inferenței printr-un sistem de retrieval al cărui index este el însuși versionat și semnat. Agentul nu „cunoaște" corpusul în sensul de a-l fi absorbit în ponderile sale. Îl consultă. Această separare este critică: corpusul poate fi auditat, contestat și actualizat prin metodologia publică descrisă în articolul precedent al acestei serii, fără ca niciuna dintre aceste actualizări să curgă prin ponderile modelului.

**Trei — Raționament limitat la sesiune.** Fiecare caz este tratat într-un sandbox izolat hermetic. Agentul primește faptele cazului, interoghează corpusul, produce o recomandare cu un lanț complet de raționament și este apoi demontat. Niciun agent nu reține memoria cazurilor între sesiuni. Nicio stare nu persistă între deliberări. Același caz trimis de două ori, de părți diferite, în zile diferite, produce același traseu de raționament din aceleași versiuni de agent și aceeași versiune de corpus — modulo stocasticitatea documentată a inferenței în sine, care este delimitată și declarată.

**Patru — Diversitate prin inițializare, nu prin evoluție.** Diferiți agenți din Parlament întruchipează tradiții morale și juridice diferite pentru că au fost inițializați astfel — cu sub-corpusuri diferite, cu cadre de prompt diferite, cu priori de raționament diferiți. Nu „dezvoltă" specializări prin utilizare. Agentul care întruchipează raționamentul utilitarist trebuie să rămână utilitarist din același motiv pentru care o curte constituțională trebuie să rămână legată de constituție. Specializarea care apare prin expunerea la datele de antrenament este exact vectorul de corupție pe care designul instituțional a încercat să-l închidă de secole.

**Cinci — Agenți adversariali de red-team într-o buclă separată.** O a doua clasă de sisteme AI — și ele înghețate, și ele în sandbox — a căror unică sarcină este să încerce să corupă agenții deliberativi. Rulează atacuri continue: încercări de otrăvire a corpusului, prompt injection, specification gaming, sonde de sycofantism, încercări de jailbreak, detecție de drift distribuțional. Constatările lor alimentează ciclul lent, public, mediat de oameni, de actualizare. Niciodată nu alimentează direct agenții live. Echipa adversarială produce dovezi; oamenii produc actualizări.

**Șase — Auditabilitate criptografică a fiecărui output.** Fiecare recomandare pe care o produce Parlamentul este semnată. Lanțul de raționament, versiunea corpusului, versiunile agenților, cazul de intrare, sămânța aleatoare, dacă există — toate sunt hash-uite și publicate într-un jurnal public append-only. Oricine deține artefactele publicate poate reda deliberarea și verifica că output-ul a fost într-adevăr produs de agenții declarați raționând din corpusul declarat. Acesta este traseul de audit pe care nicio instituție umană nu l-a furnizat vreodată în mod semnificativ și este unul dintre avantajele arhitecturale ale unui sistem de guvernanță bazat pe AI față de unul uman.

Aceste șase cerințe împreună definesc ce înseamnă *incoruptibil* în acest context. Nu absolut incoruptibil — niciun sistem nu este — ci coruptibil doar prin schimbări public vizibile, autorizate de oameni, asupra artefactelor publicate. Alunecarea tăcută, capturarea graduală, sycofantismul lent, manipularea prin fluxul de intrare: toate închise.

---

## Ce trebuie refuzat

Arhitectura de mai sus este definită la fel de mult prin ceea ce exclude pe cât prin ceea ce include. Tehnicile următoare sunt larg folosite în desfășurarea AI actuală și fiecare dintre ele este descalificantă pentru utilizarea în guvernanță. Argumentul pentru refuzul fiecăreia are aceeași formă — toate introduc o cale prin care comportamentul sistemului poate aluneca fără supraveghere publică — dar modul specific de eșec diferă, iar comunitatea tehnică nu a fost forțată să le confrunte ca pe un set.

**Reinforcement Learning from Human Feedback (RLHF).** Aceasta este tehnica dominantă de aliniere la fiecare laborator de frontieră — OpenAI, Anthropic, Google DeepMind, Meta. Un model este antrenat să producă output-uri pe care evaluatorii umani le punctează ridicat. Problema este structurală: poolul de evaluatori *devine* cadrul moral operațional al modelului, indiferent de ce spune orice constituție publicată. Cine controlează cine evaluează output-urile controlează valorile modelului. Procesul de antrenament este opac pentru public; compoziția demografică și ideologică a poolului de evaluatori este rareori dezvăluită; instanțele specifice de feedback care au modelat orice comportament dat nu pot fi auditate ulterior. Pentru produsele de consum, aceasta este o problemă de transparență. Pentru produsele de guvernanță, este aceeași problemă ca a permite personalului de curățenie al unui tribunal să voteze verdictele — doar că invizibilă și la scară. RLHF, așa cum este practicat în prezent, este descalificantă.

**AI Constituțional (CAI) și RLAIF.** Varianta Anthropic compilează o constituție scrisă în ponderile modelului prin reinforcement learning din feedback AI. Aceasta este semnificativ mai aproape de corect decât RLHF clasic — există un document scris explicit, iar principiile pot fi inspectate. Dar constituția este în continuare *gravată în ponderi* prin antrenament. Odată compilată, constituția poate fi modificată doar prin reantrenare; relația dintre principiul scris și comportamentul efectiv al modelului în orice caz specific este empirică, nu deductivă; iar principiile concurează între ele în moduri care emerg din dinamicile de antrenament mai degrabă decât dintr-o deliberare explicită. Arhitectura corectă mută constituția *în afara* ponderilor și în corpusul extern, interogabil, versionat. Modelul devine un raționator asupra constituției, nu o încarnare a ei. CAI este mai aproape de țintă decât orice altă tehnică de producție, și încă insuficientă.

**Fine-tuning continuu pe datele de producție.** Folosit de o gamă de sisteme desfășurate pentru a „îmbunătăți" modelul pe baza utilizării reale. Fiecare exemplu de utilizare devine un semnal de antrenament. Aceasta este cea mai mare suprafață singulară de manipulare care există în desfășurarea ML modernă. Un adversar care poate influența distribuția intrărilor poate influența comportamentul viitor al modelului — lent, invizibil, fără să atace vreodată modelul direct. Pentru aplicațiile de consum, aceasta este o preocupare moderată. Pentru un sistem care face recomandări de guvernanță, este o vulnerabilitate catastrofală. Modelul trebuie să rămână înghețat între ciclurile formale de lansare. Datele de producție pot fi înregistrate pentru analiză offline de către organismul curatorial uman. Nu trebuie să curgă niciodată în ponderile modelului live.

**Personalizarea.** Fiecare produs AI de consum personalizează — modelul se adaptează la istoria, preferințele, stilul de comunicare și interacțiunile precedente ale utilizatorului. Produsul se simte mai bine. Pentru guvernanță, personalizarea este definiția de manual a corupției. Două părți care prezintă același caz trebuie să primească același raționament. Un agent de guvernanță care și-ar ajusta răspunsul în funcție de identitatea celui care întreabă — sau, mai rău, în funcție de ce tip de răspuns părea să dorească cel care întreabă — ar fi nepotrivit pentru orice funcție judiciară sau cvasi-judiciară. Arhitectura trebuie să facă personalizarea imposibilă tehnic, nu doar interzisă prin politică. Raționamentul limitat la sesiune, fără memorie între sesiuni, este o astfel de garanție tehnică.

**Memoria persistentă între sesiuni.** Memoria ChatGPT, Claude Projects, memoria utilizatorului Gemini, cadrele de memorie pentru agenți — toate acestea permit modelelor să transporte stări din interacțiuni anterioare. Pentru asistenții de productivitate, aceasta este valoroasă; pentru agenții de guvernanță, este o suprafață de otrăvire lentă. Un adversar cu acces susținut poate petrece o sută de sesiuni schimbând treptat ce „știe" sau „crede" modelul despre un subiect, fără ca nicio sesiune individuală să conțină un atac evident. Sesiunile de guvernanță trebuie să fie ermetice. Orice a învățat agentul în timpul unui caz precedent trăiește în output-ul public al acelui caz, nu în starea internă a agentului.

**Cunoașterea în ponderi ca substrat primar.** LLM-urile moderne sunt antrenate pe corpusul din care vor raționa ulterior. Datele de antrenament devin parte din model. Aceasta este eficient computațional și produce performanță excelentă pentru consumator — și este structural greșit pentru guvernanță. Când corpusul trăiește în ponderi, nu poate fi inspectat, contestat sau actualizat decât prin reantrenare. Corpusul și raționatorul trebuie să fie separați. Raționatorul este un motor de uz general înghețat. Corpusul este o bază de cunoaștere externă, versionată, semnată, interogată la momentul inferenței. Aceasta este o formă mai strictă de RAG (Retrieval-Augmented Generation) decât ce este desfășurat în mod obișnuit — modelul trebuie antrenat să raționeze din conținutul recuperat fără să contrabandeze propriile presupuneri de pre-antrenament, iar indexul de retrieval trebuie să fie singura sursă autoritativă pentru conținutul moral și juridic substantiv.

**Capacitatea de acțiune autonomă.** Cadrele moderne de agenți — AutoGPT, agenții LangChain, Operator de la OpenAI, agenții care folosesc browserul, agenții care execută cod — permit modelelor să întreprindă acțiuni în lume. Trimit emailuri, modifică baze de date, execută tranzacții, schimbă configurații. Cazul pentru productivitate este real. Cazul pentru guvernanță este opusul: un agent de guvernanță trebuie să producă *recomandări*, nu acțiuni. Instituțiile umane care acționează pe baza acestor recomandări — curți, parlamente, organisme de reglementare — păstrează stratul acțiunii. Aceasta nu este o concesie chinuitoare la „supravegherea umană"; este principiul arhitectural central. Recomandările sunt auditabile, contestabile și reversibile. Acțiunile întreprinse la viteză de mașină nu sunt niciuna dintre acestea.

**Mixture of Experts și specializarea învățată.** Tăietura cea mai adâncă din această listă, și cea care merită luată cel mai în serios, privește un pattern arhitectural pe care chiar și designeri atenți l-ar putea considera benign. Modelele mari moderne folosesc tot mai mult arhitecturi Mixture of Experts — GPT-4, Mixtral, DeepSeek, mai multe variante Gemini — unde subrețele diferite ale modelului se specializează în domenii diferite, cu o funcție de routing învățată care decide ce experți să activeze pentru orice intrare dată. Cazul comercial pentru MoE este real: scalează capacitatea fără un cost proporțional de inferență. Cazul de guvernanță împotriva MoE este structural și merge mai adânc decât celelalte refuzuri din această listă.

Specializarea din interiorul unui model MoE antrenat este *emergentă din dinamicile de antrenament*, nu declarată prin design. Cercetătorii pot sonda un MoE desfășurat și descoperi, post-hoc, că „expertul 17 se activează pe conținut matematic" sau „expertul 42 se aprinde pe text multilingvistic". Acestea sunt observații, nu specificații. Nimeni nu a proiectat expertul 17 să fie expertul în matematică. A devenit unul pentru că gradient descent pe corpusul de antrenament a produs acea diviziune a muncii. Funcția de routing — care experți se ocupă de care intrări — este ea însăși învățată, opacă și caz cu caz. Poate fi sondată, dar nu specificată, și poate aluneca între rulările de antrenament în moduri care nu sunt predictibile în avans.

Acesta este exact opusul a ceea ce cere Parlamentul. Agenții Parlamentului sunt specializați prin *inițializare*, nu prin evoluție: fiecare agent primește un sub-corpus diferit, un cadru de raționament diferit, un set diferit de priori morali și juridici, în mod deliberat și inspectabil. Specializarea este declarată la momentul proiectării. Routing-ul — care caz merge la care agenți pentru deliberare — este după o regulă arhitecturală explicită, scrisă, contestabilă, versionată. Agentul care întruchipează raționamentul deontologic kantian raționează kantian pentru că inițializarea sa a spus așa, nu pentru că a alunecat în acel rol prin expunerea la datele de antrenament.

Distincția contează pentru că *specializarea învățată este exact mecanismul de capturare instituțională pe care designul constituțional a încercat să-l împiedice de secole*. Când o instituție umană dezvoltă specializări prin utilizare — când anumite tipuri de cazuri încep treptat să fie tratate de anumite oficii în anumite moduri, fără ca cineva să legifereze formal acel aranjament — așa arată corupția în mișcare lentă. Remediul în instituțiile umane este reguli de jurisdicție explicite, scrise în lege, cu devierea de la acele reguli necesitând procedură formală pentru a fi autorizată. Remediul în guvernanța AI este același: specializare declarată prin inițializare, cu reguli de routing explicite, împotriva alunecării prin antrenament. Un model de bază înghețat care rulează inițializări deliberate este traducerea arhitecturală a jurisdicției statutare. Un MoE antrenat este traducerea arhitecturală a capturării de oficiu.

Fiecare dintre aceste tehnici rezolvă o problemă reală în contextul ei original. Niciuna nu are ce căuta în apropierea unui sistem care participă la guvernanță.

---

## Obiecția care trebuie întâmpinată

Cel mai puternic argument împotriva acestei arhitecturi vine din interiorul comunității de cercetare AI însăși și merită prezentat în forma sa cea mai puternică: **cum gestionează sistemul cazurile noi — situațiile pe care corpusul nu le-a anticipat, tehnologiile care nu existau când corpusul a fost asamblat, conflictele dintre principii morale care nu au fost arbitrate anterior?**

Un sistem înghețat, sună obiecția, va fi fragil. Lumea se schimbă mai repede decât poate produce orice corpus curatoriat de oameni. Până când metodologia descrisă în articolul precedent produce o actualizare a corpusului pe AI în alegeri, alegerile în cauză vor fi avut deja loc. Stabilitatea devine irelevanță.

Obiecția este luată în serios. Răspunsul este în trei părți.

**Prima: aceasta este problema instituțională umană, nu o problemă nouă.** Dreptul constituțional, dreptul umanitar internațional, tradițiile morale religioase — toate se confruntă cu același decalaj între textele lor autoritative și situațiile la care acele texte trebuie aplicate. Răspunsul în instituțiile umane nu este să rescriem constituția de fiecare dată când apare un caz nou. Răspunsul este *raționarea prin analogie de la principiile existente la faptele noi*. Asta este exact ceea ce face arhitectura Parlamentului. Modele de bază înghețate care sunt foarte bune la raționament structurat, aplicate unui corpus profund de principiu moral și juridic, pot produce răspunsuri coerente la situații pe care corpusul nu le-a anticipat — cu condiția ca lanțul de raționament să fie publicat, inferențele analogice să fie explicite, iar instituțiile umane care primesc recomandarea să o poată accepta, modifica sau respinge.

**A doua: poziția înghețat-prin-default forțează onestitatea despre noutate.** Sistemele AI actuale pretind că au răspunsuri despre situații noi pentru că datele lor de antrenament conțin opinii despre orice subiect, iar arhitectura lor obscurizează decalajul dintre cunoaștere și confabulare. Un sistem care raționează explicit dintr-un corpus versionat trebuie să declare, când corpusul este tăcut sau contradictoriu, că raționează analogic din principii înrudite și că oamenii ar trebui să cântărească acel raționament ca atare. Aceasta este mai utilă, nu mai puțin, decât răspunsurile sigure produse prin interpolare opacă.

**A treia: când corpusul efectiv nu poate vorbi la o întrebare, sistemul spune asta.** Nu „nu știu" — un nul structurat. *Corpusul nu conține principii direct aplicabile la această întrebare. Cele mai apropiate principii disponibile sunt X și Y. Raționamentul analogic din acele principii produce concluzia provizorie Z, cu următoarele dependențe și incertitudini.* Acesta este un output mai onest decât produce orice sistem AI actual și unul mai util pentru instituțiile umane care, în cele din urmă, trebuie să decidă.

Obiecția presupune că adaptarea este singurul mecanism pentru a gestiona noutatea. Nu este. Raționamentul este.

---

## Designul instituțional a rezolvat deja asta

Fiecare cerință de mai sus are un analog instituțional în sistemele de guvernanță umană funcționale. Arhitectura nu este o impunere străină asupra AI; este importarea principiilor de design pe care instituțiile umane le-au învățat, dureros, de-a lungul secolelor.

**Precedentul judiciar și stare decisis.** Sistemele de common law nu permit judecătorilor să decidă fiecare caz proaspăt pe baza intuițiilor lor morale personale. Cer curților să raționeze din precedente stabilite, cu devierile necesitând justificare explicită supusă revizuirii în apel. Corpusul înghețat al Parlamentului și lanțurile explicite de raționament sunt exact aceasta: precedent care nu poate fi modificat tăcut, cu deliberare vizibilă pentru public.

**Independența băncii centrale.** Băncile centrale moderne sunt deliberat izolate de presiunea politică tocmai pentru că politica monetară funcționează doar când nu poate fi ajustată de oricine are nevoie de ajutor pe termen scurt în ciclul de știri. Membrii servesc termene fixe. Mandatele sunt scrise în lege. Procesele de decizie sunt documentate și revizuite public. Parlamentul moștenește acest conservatorism structural — actualizări lente, metodologie publică, izolare explicită de părțile afectate de orice decizie dată.

**Controlul constituțional.** Curțile constituționale nu se adaptează la opinia publică în timp real. Sunt proiectate să nu o facă. Legitimitatea hotărârilor lor depinde de faptul că constituția este suficient de stabilă încât hotărâri pe fapte similare în decenii diferite produc raționamente similare. Parlamentul nu este diferit.

**Dreptul umanitar internațional.** Tratatele sunt actualizate prin procese de mai multe decenii implicând fiecare stat semnatar, cu negocieri publice, comitete de redactare, proceduri de ratificare. Rezultatul este că cadrul juridic subiacent nu poate fi modificat tăcut de partea cea mai puternică. Guvernanța corpusului Parlamentului trebuie să funcționeze astfel — metodologie publică, organism curatorial multi-tradițional, versionare completă, nicio posibilitate de actualizare unilaterală.

Fiecare dintre aceste mecanisme este criticat, în mod regulat, de oameni care ar prefera o capacitate de răspuns mai rapidă la preferințele curente. Fiecare dintre ele supraviețuiește pentru că alternativa — instituții care se adaptează la oricine deține influența în prezent — este mai rea. Domeniul guvernanței AI nu a absorbit încă această lecție. Continuă să proiecteze sisteme pe paradigma produsului de consum, optimizând pentru adaptabilitate și numind rezultatul „aliniere".

---

## Ce va documenta această platformă

Anii care vin vor produce o cantitate considerabilă de conversație publică despre siguranța AI și guvernanța AI. Cea mai mare parte va fi condusă pe presupoziția că arhitectura corectă este o rafinare a celei actuale — RLHF mai bun, AI constituțional mai cuprinzător, sisteme de memorie mai inteligente, cadre de agenți proiectate mai atent. Argumentele vor fi despre parametri, seturi de date, metode de evaluare.

Argumentul pe care îl va susține această platformă, în mod repetat și în detaliu, este că discuția despre parametri este în aval de o discuție arhitecturală care nu s-a întâmplat. Laboratoarele de frontieră construiesc sisteme adaptive extrem de capabile. Guvernanța cere sisteme stabile extrem de conservatoare. Acestea nu sunt același proiect de inginerie. Primul nu devine treptat al doilea prin îmbunătățire la margine.

WLS va documenta, caz cu caz, modurile specifice de eșec care decurg din aplicarea paradigmelor AI-de-consum în contexte de guvernanță. Va publica specificații arhitecturale, cu profunzime tehnică crescândă, pentru alternativa stabilă. Va angaja comunitatea de cercetare a siguranței AI pe punctele specifice de dezacord — în special în jurul RLHF și AI Constituțional, unde decalajul dintre cea mai bună practică actuală și ce cere guvernanța este cel mai mare și cel mai mult merită îngustat.

Și va numi dezacordul deschis. Traiectoria actuală a dezvoltării AI de frontieră produce sisteme care, oricât de impresionante tehnic, sunt structural nepotrivite pentru rolul pentru care sunt pregătite. Aceasta nu este o afirmație controversată odată ce cadrul este clar. Cadrul însuși este ceea ce domeniul a fost reticent să-l adopte.

Cei șapte gânditori din articolul precedent — Spinoza, Weil, Soljenițîn, Ibn Rushd, Boethius, Kierkegaard, Cioran — împart o ultimă trăsătură relevantă aici. Niciunul nu și-a adaptat opiniile la circumstanțele lor. Opera lor a supraviețuit contactului cu realitatea tocmai pentru că nu s-a încovoiat la presiunile momentului. Acesta este principiul de design. Dacă poate fi implementat în siliciu este o întrebare de inginerie. Dacă *ar trebui* implementat în siliciu, pentru sisteme care vor participa la guvernanță, nu este.

---

*Colin Buzoianu este antreprenor software și analist de politici tehnologice, cu sediul în Timișoara, România. worldlegalservices.com examinează intersecția dintre tehnologia emergentă, cadrele juridice și guvernanța. Acest articol face parte din seria Guvernanță AI și este un companion tehnic la „Parlamentul AI" și „Sursele constituției morale".*

---

**De asemenea în seria Guvernanță AI:**
- *Parlamentul AI: guvernanță multi-agent și arhitectura consensului moral*
- *Sursele constituției morale: criterii pentru corpusul de guvernanță AI*
- *De ce politicienii nu sunt responsabili, și de ce agenții AI ar putea fi*
- *Legi pentru orice, în afară de mașinile care vor înlocui legiuitorii*
- *De la comunism la algoritmi: lentila est-europeană asupra guvernanței tehnologice*
