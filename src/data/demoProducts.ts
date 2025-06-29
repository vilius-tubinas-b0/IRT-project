
export interface DemoProduct {
  id: string;
  title: string;
  description: string;
  brand: string;
  category: string;
  longDescription: string;
  features: string[];
  images: string[];
  marketingMaterials: MarketingMaterial[];
}

export interface MarketingMaterial {
  type: string;
  content?: string;
  platform?: string;
  size?: string;
  imageUrl?: string;
  videoUrl?: string;
  items?: string[];
}

export const demoProducts: DemoProduct[] = [
  {
    id: 'stanley-tumbler',
title: 'Stanley IceFlow™ gertuvė su šiaudeliu, 30 oz',
  description: 'Patvari, stilinga gertuvė su integruotu šiaudeliu ir dviguba vakuumine izoliacija',
  brand: 'Stanley',
    category: 'Gertuvės',
    longDescription: `
**Hidratacija, kuri prisitaiko prie jūsų gyvenimo ritmo.**

Nesvarbu, ar keliaujate į darbą, kopiate į kalnus ar aktyviai leidžiate dieną, **Stanley IceFlow™ Flip Straw Tumbler 30oz** užtikrins, kad jūsų gėrimai išliktų maloniai šalti nuo ryto iki vakaro – ir dar ilgiau.

---

### 🧊 Sukurtas išlaikyti gaivą ilgiau

Dėl **Stanley dvigubos vakuuminės izoliacijos** jūsų vanduo nepraras vėsos net ir pačią karščiausią dieną. Be ledukų gėrimas išliks šaltas iki **12 valandų**, o su ledu – net iki **48 valandų**. Dvi paros gaivumo be jokių pastangų – tarsi mažas nešiojamas ledynas.

---

### 💡 Apgalvota kiekviena detalė

Kiekvienas elementas sukurtas tam, kad naudojimas būtų kuo patogesnis:

- **Vienarankis gėrimas** – puikiai tinka vairuojant, sportuojant ar skubant
- **30 oz talpa** – mažiau papildymų per dieną
- **Tinka daugeliui automobilių puodelių laikiklių**
- **Galima plauti indaplovėje**
- **Patvarus nerūdijantis plienas**, atsparus įbrėžimams bei smūgiams

Jokių plastikinių butelių. Jokių drungnų gėrimų. Tik nuolatinė gaiva tada, kai jos labiausiai reikia.

---

### 🌍 Ilgaamžis ir draugiškas aplinkai

**Stanley** – daugiau nei šimto metų patikrinta kokybė, kurią renkasi milijonai. Šis modelis:

- Pagamintas iš **perdirbto 18/8 nerūdijančio plieno**
- **BPA neturintis**, saugus sveikatai
- Galite rinktis iš įvairių modernių matinio dizaino spalvų
- Sukurtas tarnauti ilgus metus, o ne vieną sezoną

Rinkdamiesi Stanley, investuojate į patogumą, mažesnį poveikį aplinkai ir patikrintą patvarumą.

---

### 🧳 Visur kartu su jumis

30 oz talpa leis pasirūpinti pakankamu kiekiu vandens, o kompaktiškas dizainas užtikrins, kad gertuvę patogiai pasiimsite į bet kokią kelionę. Puikiai tinka:

- Sporto salėje ar ilguose žygiuose
- Ilgose darbo pamainose
- Paskaitose ir kelionėse
- Išvykose, stovyklaujant ar keliaujant automobiliu

...**IceFlow** sukurta judėti kartu su jumis – ne stovėti lentynoje.

---

### 🙋‍♀️ Dažniausiai užduodami klausimai

**Ar gertuvė nepraleis maiše?**  
Ne – sandarus dangtelis užtikrina apsaugą nuo išsiliejimo.

**Ar ji tilps į puodelių laikiklį automobilyje?**  
Taip – tinka daugeliui modelių.

**Ar galima pilti karštus gėrimus?**  
Tik šaltus – karštiems gėrimams ši konstrukcija netinka.

**Kiek sveria?**  
Pilnai pripildyta – apie 0,6 kg.

**Kas, jei netyčia numesiu?**  
Tai Stanley – ji sukurta atlaikyti kasdienį naudojimą.

---

**Prisijunkite prie milijonų Stanley gerbėjų.**

IceFlow Flip Straw Tumbler – tai ne vien madinga detalė, o patikimas partneris kiekvieną dieną. Jei ieškote gertuvės, kuri tarnautų taip pat ištvermingai kaip ir jūs, – ją ką tik radote.
`,
features: [
  '30 oz talpa su sandariu dangteliu ir integruotu šiaudeliu',
  'Dviguba vakuuminė izoliacija (gėrimai išlieka šalti 12–48 val.)',
  'Pagaminta iš perdirbto 18/8 nerūdijančio plieno',
  'Integruota rankena ir ergonomiškas dizainas',
  'Tinka daugeliui standartinių automobilio laikiklių',
  'Galima plauti indaplovėje, be BPA',
  'Galimi įvairūs modernūs matiniai atspalviai'
],
    images: [
      'https://img.kavosdraugas.lt/3f229155-2dcf-474a-9414-55d5054f64e1/1000x1000/iceflowlilac4png.jpg',
      'https://new.ksd-images.lt/display?path=aikido/cache/024ef9b07cde4e94ee2197726bd83f6a.jpeg&op=noop',
      'https://i8.amplience.net/i/jpl/jd_755873_a?qlt=92&w=600&h=765&v=1&fmt=auto',
      'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/AB2864s.jpg?im=Resize,width=750'
    ],
marketingMaterials: [
  {
    type: 'El. laiško temos',
    items: [
      '🥤 Nauja prekė: Stanley IceFlow™ gertuvė – tik ribotą laiką -20% nuolaida!',
      '✨ Stilinga hidratacija – Stanley IceFlow™ jau pas mus',
      '🔥 Paskutinė proga: Premium Stanley gertuvė – iki 48 val. šaltis garantuotas',
      'Atraskite tobulą hidrataciją su Stanley IceFlow™',
      'Stanley IceFlow™: gertuvė, kuri viską pakeitė'
    ]
  },
  {
    type: 'Soc. medijos antraštės',
    platform: 'Instagram',
    items: [
      '✨ Pristatome Stanley IceFlow™ gertuvę su šiaudeliu 💧\n\nLaikykite gėrimus ledinius iki 48 valandų. Tobula kiekvienai kelionei.\n\n#Stanley #Hidratacija #LedinisGaivumas',
      '🧊 Pasiruošę naujam hidratacijos lygiui? Stanley IceFlow™ pasirūpins gaivumu visą dieną.\n\n#BūkHidratavęs #Stanley #AukštaKokybė',
      'Nuo rytinių treniruočių iki vėlyvų studijų vakarų – Stanley IceFlow™ užtikrina šaltą gaivą, kai jos labiausiai reikia.\n\n#Stanley #GyvenimoStilius #Hidratacija'
    ]
  },
  {
    type: 'Product Tags',
    content: 'stanley gertuvė, termo gertuvė, gertuvė su šiaudeliu, 30oz gertuvė, vakuuminė izoliacija, sandari gertuvė, galima plauti indaplovėje, be BPA, lediniai gėrimai, hidratacijos butelis'
  },
  {
    type: 'Story',
    platform: 'Instagram',
    imageUrl: 'https://eu.stanley1913.com/cdn/shop/files/Large_JPG-STANLEY_ICEFLOW_FLIPSTRAWTUMBLER0.89L-CITRON_LIFESTYLE_1_1.jpg?v=1749204473&width=600',
    size: '1080x1920',
    content: 'Perbraukite ir atraskite ledinį gaivumą'
  },
  {
    type: 'Post',
    platform: 'Instagram',
    imageUrl: 'https://imageseu.urbndata.com/is/image/UrbanOutfittersEU/0533352910110_066_b?$xlarge$&fit=constrain&qlt=80&wid=640',
    size: '1080x1080',
    content: 'Būkite hidratuoti, būkite gaivūs'
  }
]
  },
 {
  id: 'the-ordinary-niacinamide',
  title: 'Niacinamide 10% + Zinc 1% serumas',
  description: 'Klinikinio stiprumo serumas, padedantis sumažinti spuogus ir subalansuoti riebalų išsiskyrimą',
  brand: 'The Ordinary',
  category: 'Veido priežiūra',
  longDescription: `
**Klinikinė odos priežiūra, kuria pasitiki milijonai visame pasaulyje.**

The Ordinary **Niacinamide 10% + Zinc 1% serumas** – tai intensyvaus poveikio formulė, padedanti kovoti su dažniausiomis odos problemomis: spuogais, riebalų pertekliumi, išsiplėtusiomis poromis ir nelygiu odos atspalviu. Dėl tikslingai parinktų veikliųjų medžiagų šis serumas užtikrina matomus rezultatus be sudėtingų priežiūros ritualų.

Tai sprendimas, jungiantis mokslo pažangą ir paprastumą – visiems, kurie nori pastebimų pokyčių už prieinamą kainą.

---

### 🧪 Veikliųjų medžiagų galia

Šio serumo pagrindą sudaro dvi ypač efektyvios medžiagos:

- **10% niacinamidas (vitaminas B3)** padeda mažinti uždegiminius spuogelius, reguliuoja melanino išsiskyrimą, todėl suvienodina odos toną, šviesina dėmeles ir suteikia odai skaistumo.
- **1% cinko PCA** mažina odos riebalavimąsi, ramina sudirgimus ir padeda palaikyti porų švarą.

Lengvos, vandeningos konsistencijos serumas susigeria per kelias akimirkas ir nepalieka lipnumo ar sunkumo pojūčio. Formulė sukurta taip, kad būtų maksimaliai toleruojama ir jautresnei odai.

Šis derinys yra vienas iš labiausiai dermatologų rekomenduojamų, kai reikia saugaus, kasdienio sprendimo probleminei odai.

---

### ✨ Matomi rezultatai

Reguliariai naudojant šį serumą, daugelis pastebi reikšmingus pokyčius:

- Mažėja nuolatiniai ar atsirandantys spuogai ir uždegiminės dėmelės.
- Sumažėja riebalų perteklius, oda atrodo matiškesnė ir švaresnė.
- Išsiplėtusios poros tampa mažiau matomos, oda įgauna lygesnę tekstūrą.
- Suvienodėja tonas ir sumažėja po spuogų likę pėdsakai.

Pirmieji rezultatai gali būti pastebimi jau po kelių savaičių, tačiau geriausių rezultatų pasiekiama naudojant ilgiau kaip 4–6 savaites.

---

### 💧 Naudojimas

Kiekvieną rytą ir vakarą ant švarios, sausos odos užtepkite kelis lašus serumo. Švelniai paskirstykite per visą veidą, ypač ten, kur pastebite didesnį riebumą ar spuogus. 

Leiskite produktui visiškai įsigerti, tada tęskite įprastą drėkinamųjų priemonių ir apsaugos nuo saulės naudojimą. 

**Svarbu:** jei naudojate vitamino C produktus, tepkite juos kitu paros metu (pavyzdžiui, ryte), o niacinamidą – vakare, nes šios medžiagos gali mažinti viena kitos efektyvumą.

---

### 🌿 Kam tinka?

Šis serumas ypač rekomenduojamas:

- Riebiai ir mišriai odai su polinkiu į spuogus ar inkštirus.
- Oda su išsiplėtusiomis poromis ir nelygia tekstūra.
- Tiems, kurie ieško moksliškai pagrįsto, paprasto ir prieinamo būdo pagerinti odos būklę be sudėtingų procedūrų.

Formulė be kvapiųjų medžiagų, veganiška ir netestuota su gyvūnais, todėl ją renkasi įvairaus amžiaus žmonės, vertinantys skaidrią sudėtį ir veiksmingumą.

---

### 🙋‍♀️ Dažniausiai užduodami klausimai

**Ar šį serumą galima naudoti jautriai odai?**  
Taip, formulė be kvapiųjų medžiagų ir alkoholio, tačiau jei jūsų oda itin jautri, rekomenduojama pirmiausia atlikti mažą tolerancijos testą.

**Ar galima naudoti kartu su kitomis priemonėmis?**  
Galima, tačiau niacinamidą geriausia atskirti nuo stipraus vitamino C (askorbo rūgšties) produktų, kad abu ingredientai neprarastų efektyvumo.

**Kaip greitai matomi rezultatai?**  
Pirmieji pagerėjimo požymiai – lygesnė tekstūra, mažesnis riebumas – dažnai pastebimi po 2–4 savaičių reguliaraus naudojimo.

**Ar serumas tinka paaugliams?**  
Taip, ši formulė saugi ir dažnai rekomenduojama jaunai odai su polinkiu į spuogus.

**Ar jis palieka lipnumo pojūtį?**  
Ne, vandens pagrindo tekstūra greitai susigeria ir nepalieka riebumo.

---

**Atraskite veiksmingą odos priežiūrą be kompromisų – The Ordinary Niacinamide 10% + Zinc 1% serumas padės pasiekti skaistesnę, sveikesnę odą kiekvieną dieną.**

`,
  features: [
    '10% niacinamidas spuogų mažinimui',
    '1% cinko PCA riebalų kontrolei',
    'Vandens pagrindo, greitai įsigerianti formulė',
    'Tinka kasdieniam naudojimui',
    'Veganiška ir netestuota su gyvūnais',
    'Be kvapiųjų medžiagų',
    'Klinikinio stiprumo koncentracija'
  ],
  images: [
    'https://plasmapen.com/wp-content/uploads/2021/10/2-4.png',
    'https://i.ytimg.com/vi/bZ2hyddo6qM/maxresdefault.jpg',
    'https://photos-us.bazaarvoice.com/photo/2/cGhvdG86ZGVjaWVt/cf209c95-276a-5456-b811-6dadb34b44dc',
    'https://static.sweetcare.com/img/prd/488/v-504911232000000000/the-ordinary-017605td-3.webp',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WClz0fq_pIWrUdmTAOjPEKXYI9jhGHJQ6w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHhYSVxSn1TOrov8mruG-IdAiNsjvuompRg&s',
  ],
  marketingMaterials: [
    {
      type: 'El. laiško temos',
      items: [
        '🧪 Klinikinė odos priežiūra: The Ordinary Niacinamide – šiandien -25%',
        '✨ Skaisti oda prasideda čia – Niacinamide 10% + Zinc 1%',
        '🌟 Skaistesnė oda per 4 savaites – moksliškai pagrįsti rezultatai',
        'The Ordinary Niacinamide: jūsų odos naujas geriausias draugas',
        '💧 Riebalų kontrolė ir porų mažinimas – viename serume'
      ]
    },
    {
      type: 'Soc. medijos antraštės',
      platform: 'Instagram',
      items: [
        '🧪 Mokslas susitinka su odos priežiūra ✨\n\nThe Ordinary Niacinamide 10% + Zinc 1% – klinikinis efektyvumas be didelės kainos.\n\n#TheOrdinary #Niacinamide #VeidoPriežiūra',
        '💧 Riebi oda? Padidėjusios poros? Spuogai? Šis serumas padeda viskam.\n\nNiacinamide 10% + Zinc 1% – skaistesnei, subalansuotai odai.\n\n#OdosRutina #ŠvariOda #TheOrdinary',
        'Nuo užsikimšusios iki švarios odos per kelias savaites, o ne mėnesius. 10% niacinamido galia yra tikra.\n\n#OdosRezultatai #TheOrdinary #GlowUp'
      ]
    }
  ]
},




  {
  id: 'baltic-candle',
  title: 'Baltijos jūros kvapioji žvakė – rankų darbo Klaipėdoje',
  description: 'Lietuvoje gaminama sojų vaško žvakė su jūros, pušų ir gintaro aromatu',
  brand: 'Klaipėda Home',
  category: 'Namų kvapai',
  longDescription: `
**Įsileiskite tikrą Baltijos pajūrio atmosferą į savo namus.**

Rankomis liejama istoriniame Klaipėdos uostamiestyje, ši **Baltijos jūros kvapioji žvakė** sukurta taip, kad kiekvienas vakaras būtų ypatingas. Įkvėpta sūrių vėjų, pušynų tylos ir saulėje sušilusio gintaro kvapo, ši žvakė sukuria ramybės, jaukumo ir autentiškumo pojūtį.

Tai daugiau nei kvapas – tai istorija, pasakojama per liepsną. Nuo pirmo uždegimo kambaryje tvyro gaivi pajūrio nuotaika, kuri pamažu pereina į šiltus, medienos kupinus tonus ir pasilieka sodriu gintaro šleifu. Tai subtili, bet įsimintina aromato kompozicija, kurią pamėgs kiekvienas, ieškantis kokybiškos namų atmosferos.

---

### 🌊 Įkvėpta Lietuvos gamtos

Kvapas sukurtas iš kruopščiai suderintų natų, kurios primena pajūrio takus ir miško takelius:

**Viršutinės natos** – šviežio jūros vėjo gaiva, primenanti sūrią bangų alsavimą.  
**Vidurinės natos** – švelnūs Baltijos pušų aromatai, suteikiantys jaukumo ir ramybės.  
**Bazinės natos** – sodrus gintaro dvelksmas, kuris užbaigia kompoziciją elegantišku šilumos akcentu.

Kiekviena iš šių natų atsiskleidžia palaipsniui, sukurdama įspūdį, kad keliaujate Lietuvos pajūrio takais.

---

### 🕯️ Rankų darbo kokybė

Mūsų meistrai gamina žvakes mažais kiekiais, užtikrindami, kad kiekvienas indelis atitiktų aukščiausius kokybės standartus. Naudojame tik natūralų sojų vašką iš tvarių šaltinių ir medvilninę dagtį, kad liepsna būtų lygi ir švari. 

Kiekviena žvakė dega daugiau nei 50 valandų, todėl galėsite ilgai mėgautis išskirtiniu kvapu. Minimalistinio dizaino stiklinis indas lengvai derės bet kokio stiliaus interjere, o išdegtą pakuotę galėsite perdirbti arba pritaikyti antram gyvenimui – kaip vazelę ar smulkių daiktų laikiklį.

---

### 🏠 Kodėl verta išbandyti?

Baltijos jūros žvakė puikiai tinka:

- Ramiai vakarienei dviese ar su draugais
- Jaukiam poilsio kampeliui ar meditacijai
- Skaitymo vakarams, kai norisi ypatingo jaukumo
- Namų SPA ritualams ar pasilepinimui karštoje vonioje

Tai dovana sau ar brangiam žmogui, kuri primena, kaip gera grįžti prie paprastų, bet prasmingų dalykų – natūralios šviesos ir gamtos įkvėpto aromato.

---

### 🙋‍♀️ Dažniausiai užduodami klausimai

**Ar žvakė yra visiškai natūrali?**  
Taip, sudėtyje – 100% sojų vaškas, be parafino ir sintetinių kvapiklių. Aromatas sukurtas iš aukštos kokybės kvapiųjų aliejų.

**Kiek laiko ji dega?**  
Vidutiniškai žvakė dega daugiau nei 50 valandų, jei laikysitės rekomendacijų dėl dagties ilgio ir tinkamo naudojimo.

**Ar kvapas labai stiprus?**  
Kvapas išlaiko balansą – jis jaučiamas, bet nėra aštrus ar įkyrus, todėl tinka ir jautresniems nosiai.

**Kur gaminama žvakė?**  
Kiekviena partija rankomis liejama Klaipėdoje, Lietuvoje.

---

**Įkvėpkite Baltijos pakrantės dvelksmo – ši žvakė taps jūsų namų jaukumo simboliu.**

`,
  features: [
    'Rankomis liejama iš 100% sojų vaško',
    'Unikalus Baltijos jūros įkvėptas aromatas',
    'Medvilninė dagtis švariam degimui',
    'Dega ilgiau nei 50 valandų',
    'Perdirbamas stiklinis indas',
    'Pagaminta Klaipėdoje, Lietuvoje',
    'Mažų partijų rankų darbo gamyba'
  ],
  images: [
    '/images/candle1.png',
    '/images/candle2.png',
    '/images/candle3.png'
  ],
  marketingMaterials: [
    {
      type: 'El. laiško temos',
      items: [
        '🕯️ Baltijos jūros atmosfera – rankų darbo žvakės iš Lietuvos',
        '🌊 Nauja – autentiškas Baltijos pakrantės kvapas, ribotas kiekis',
        '✨ Sukurkite namuose skandinavišką jaukumą – Baltijos jūros žvakės',
        'Rankų darbo Klaipėdoje – Baltijos jūros kvapų kolekcija',
        '🏠 Paverskite namus autentišku Baltijos aromatu'
      ]
    },
    {
      type: 'Soc. medijos antraštės',
      platform: 'Instagram',
      items: [
        '🌊 Užsimerkite ir įkvėpkite Baltijos jūros ✨\n\nRankų darbo Klaipėdoje su meile – jūros vėjo, pušų ir gintaro aromatas.\n\n#BaltijosJūra #RankųDarbo #Lietuva',
        '🕯️ Kiekviena žvakė pasakoja Lietuvos pakrantės istoriją. Kokią istoriją pasakos jūsų žvakė?\n\n#RankųDarboŽvakės #BaltijosNuotaikos #KlaipėdaHome',
        'Nuo istorinio Klaipėdos uosto iki jūsų namų – autentiškas Baltijos aromatas kiekviename liepsnos pliūpsnyje.\n\n#RankųDarbas #Lietuva #NamųKvapai'
      ]
    }
  ]
},

{
  id: 'keyboard-slime',
  title: 'Anti-streso klaviatūros valymo gelis – mėlynių aromato',
  description: 'Linksmas aksesuaras, kuris valo klaviatūrą ir padeda mažinti stresą',
  brand: 'ZenGadget',
  category: 'Aksesuarai',
  longDescription: `
**Išvalykite klaviatūrą. Išvalykite mintis.**

Šis **anti-streso klaviatūros valymo gelis** – tai ne tik praktiškas įrankis dulkėms rinkti. Tai nedidelė atsipalaidavimo akimirka įtemptoje darbo dienoje, padedanti nusiraminti ir vėl susitelkti.

---

### 🧹 Dviguba nauda viename produkte

Skirtingai nei paprastos servetėlės ar teptukai, valymo gelis pasiekia sunkiai prieinamas vietas tarp klavišų ir surenka visas smulkias dulkes bei trupinius. Tuo pat metu jo minkšta, tampri tekstūra padeda atsipalaiduoti, sumažinti nerimą ir pagerinti koncentraciją.

**Valymo savybės:**

- Pasiekia tarpus, kurių negali išvalyti šluostės ar teptukai
- Suriša dulkes, trupinius, plaukus ir kitus nešvarumus
- Tinka visų tipų klaviatūroms (mechaninėms, membraninėms, nešiojamų kompiuterių)
- Naudojamas daug kartų iki pakeitimo

**Streso mažinimo funkcija:**

- Minkštas ir malonus liesti – puikiai tinka fidget žaidimams
- Padeda nuraminti mintis per vaizdo skambučius ar ilgas darbo valandas
- Prisideda prie susikaupimo ir produktyvumo
- Švelnus mėlynių aromatas sukuria jaukią atmosferą

---

### 🫐 Mėlynių aromato malonumas

Subtilus, saldus mėlynių kvapas nėra įkyrus – jis vos juntamas, bet pakankamas, kad valymas taptų malonesnis. Aromatas sukuria trumpą pertraukėlę nuo rutinos ir padeda grįžti prie darbo su nauja energija.

---

### 💼 Būtinas darbo stalo aksesuaras

Šis produktas – puikus pasirinkimas kiekvienam, kas daug laiko praleidžia prie kompiuterio:

- Kasdienei klaviatūros priežiūrai
- Streso mažinimui ir nervingiems rankų judesiams
- Smagiai pertraukai tarp užduočių
- Dovanai kolegoms ar technologijų entuziastams
- Tiems, kurie mėgsta tvarkingą darbo aplinką

**Patarimas:** laikykite valymo gelį pridedamoje talpoje – taip jis išlaikys optimalų minkštumą ir nesudžius. Rekomenduojama keisti kas 2–3 mėnesius reguliariai naudojant.

---

### 🙋‍♀️ Dažniausiai užduodami klausimai

**Ar gelis gali pažeisti klaviatūrą?**  
Ne, produktas yra visiškai saugus ir neturi abrazyvių dalelių. Tiesiog nespauskite per stipriai.

**Kaip dažnai reikia jį keisti?**  
Su įprastu naudojimu – maždaug kas 2–3 mėnesius arba kai pastebite, kad gelis prarado lipnumą.

**Ar kvapas labai stiprus?**  
Kvapas švelnus, daugiau primenantis lengvą aromatą nei stiprų kvapiklį.

**Ar tinka nešiojamo kompiuterio klaviatūrai?**  
Taip, gelis puikiai prisitaiko prie bet kokio klavišų aukščio ir formos.

---

**Padarykite klaviatūros valymą ne tik paprasta prievole, bet ir smagia, raminančia rutina.**
`,
  features: [
    'Dviguba funkcija – valymas ir streso mažinimas',
    'Pasiekia tarpus tarp klavišų',
    'Švelnus mėlynių aromatas',
    'Saugus visų tipų klaviatūroms',
    'Naudojamas daugybę kartų',
    'Komplekte laikymo talpa',
    'Puikus fidget aksesuaras darbo stalui'
  ],
  images: [
    'https://www.computer.cleaning/media/Sticky-Clean-Glue-Gum-Gel-Computers-Keyboards-2.jpg',
    'https://us1.discourse-cdn.com/spiceworks/original/4X/f/4/0/f40efadd1cf90219300699f003fe7c6df0edf88c.jpeg',
    
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiVobV0MFjhAmfkmZBHpWGKgJKxm8rlYCrg&s',
    'https://kejanicleaning.co.ke/wp-content/uploads/2023/09/Dirt-Cleaning-Gel-Keyboard-Cleaning-Gel.jpg'
  ],
  marketingMaterials: [
    {
      type: 'El. laiško temos',
      items: [
        '🫐 Keistas, bet veiksmingas: mėlynių gelis jūsų klaviatūrai',
        '😌 Švari klaviatūra + mažiau streso – viename netikėtame produkte',
        '⌨️ Virusinis klaviatūros valiklis – dabar su mėlynių aromatu',
        'ZenGadget gelis: keisčiausias (ir geriausias) jūsų stalo draugas',
        '🧹 Galiausiai smagus būdas išvalyti nešvarią klaviatūrą'
      ]
    },
    {
      type: 'Soc. medijos antraštės',
      platform: 'Instagram',
      items: [
        '🫐 Kai klaviatūros valymas tampa malonus ✨\n\nMėlynių aromato gelis, kuris valo IR ramina. Keista? Taip. Veiksminga? Irgi taip.\n\n#KlaviatūrosValymas #OddlySatisfying #StaloAksesuarai',
        '⌨️ Jūsų klaviatūra – purvinesnė nei manote. Šis gelis padeda ją išvalyti… ir dar prajuokina.\n\n#TechValymas #StresoMažinimas #ZenGadget',
        'Fidget žaislas ir valymo įrankis viename. Derinys, kurio net nesapnavome.\n\n#ProduktoApžvalga #StressRelief #KlaviatūrosPriežiūra'
      ]
    }
  ]
}
];

export const getProductById = (id: string): DemoProduct | undefined => {
  return demoProducts.find(product => product.id === id);
};

export const getProductMarketingMaterials = (id: string) => {
  const product = getProductById(id);
  return product?.marketingMaterials || [];
};

export const getProductImages = (id: string) => {
  const product = getProductById(id);
  return product?.images || [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'
  ];
};
