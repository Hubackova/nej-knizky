import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Book from "./Book";

const ScienceFiction = () => {
  const data = [
    {
      name: "1984",
      englishName: "Nineteen Eighty-Four",
      author: "George Orwell",
      year: 1949,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-1984.jpg"
          alt="1984"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Dystopický román odehrávající se v totalitním byrokratickém světě, kde si vládnoucí Strana udržuje moc pomocí dezinformací, manipulací a terroru. Hlavní hrdina, ničím výjimečný Winston, pracující na Ministerstvu pravdy, se rozhodne spáchat ideozločin -  začne si psát deník.",
      awards: [
        "Cena Retro Hugo za nejlepší novelu",
        "Prometheus Award (síň slávy)",
        "100 nejdůležitějších knih 20. století podle Le Monde (1999)",
        "100 nejlepších novel dle Times (2005)",
      ],
      likes: [
        "nadčasovost",
        "mrazivé a depresivní (v tom dobrém slova smyslu)",
      ],
      dislikes: [
        "pro někoho příliš dlouhé monology, úvahy a popisy a málo děje",
        "není to lehké čtení (což nemusí být nutně mínus)",
      ],
      more:
        "Nově (2021) vychází také v podobě grafického románu (ilustrace Matyáš Namai)",
      quotes: [
        "Válka je mír. Svoboda je otroctví. Nevědomost je síla.",
        "Minulost byla vymazána, vymazání bylo zapomenuto, lež se stala pravdou.",
        "Jestliže svoboda slova vůbec něco znamená, potom je to právo říkat lidem to, co nechtějí slyšet.",
      ],
    },

    {
      name: "Duna",
      englishName: "Dune",
      author: "Frank Herbert",
      year: 1965,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-duna.jpg"
          alt="Duna"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Vypráví o pouštní planetě Arrakis, na níž se nachází jediný zdroj koření prodlužujícího lidský život a propůjčujícího člověku mimořádné psychické schopnosti. Příběh plný politických, náboženských, ekonomických a společenských intrik. Po úvodním románu Duna následuje dalších 5 pokračování.",
      awards: [
        "Cena Nebula za nejlepší novelu (1965)",
        "Cena Hugo za nejlepší román (1966)",
        "Světově nejlépe prodávaná scifi novela v roce 2003",
      ],
      likes: [
        "promyšlený svět",
        "psychologie postav",
        "politika plná intrik, ekologie, filosofie, náboženské odkazy",
      ],
      dislikes: [
        "může chvíli trvat se začíst, pro někoho příliš rozvleklé až nudné",
        "další díly jsou slabší",
        "scifi na pomezí scifi a fantasy (nemusí být mínus, ale někomu nesedne)",
      ],
      quotes: [
        "Je těžké žít v současnosti, nesmyslné žít v budoucnosti a nemožné žít v minulosti.",
        "Nesmím se bát. Strach zabíjí myšlení. Strach je malá smrt přinášející naprosté vyhlazení. Budu svému strachu čelit. Dovolím mu, aby prošel kolem mne a skrze mne. A až projde a zmizí, otočím se a podívám se, kudy šel. Tam, kam odešel, nic nezůstane. Zůstanu jen já.",
        "",
      ],
      buybookCz: "",
      buyebookCz: "",
      buyaudiobookCz: "",
      buybookEn: "",
      buyebookEn: "",
      buyaudiobookEn: "",
    },

    {
      name: "Stopařův průvodce po Galaxii",
      englishName: "The Hitchhiker's Guide to the Galaxy",
      author: "Douglas Adams",
      year: 1979,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-stoparuv-pruvdoce.jpg"
          alt="Stopařův průvodce po Galaxii"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "První díl pentalogie označované jako trilogie v pěti dílech. Humorně pojatá scifi série, kdy Země zavazí v cestě intergalaktické dálnici a musí být tedy zničena. Naživu zůstává jeden úplně obyčejný Angličan, který se ocitá ve vesmíru plném náhodností a absurdit.",
      awards: [
        "1. místo v žebříčku best-sellerů Sunday Times (1979)",
        "Golden Pan - přes milion prodaných kopií (1984)",
        "24. místo v žebříčku '100 největších knih století' (Waterstone's Books/Channel Four, 1996)",
        "4. místo v žebříčku BBC 'Big Read' - nejmilovanější britské knihy",
      ],
      likes: [
        "pěkně namluvená audiokniha Voujtou Dykem",
        "specifický absurdní humor (v Monty Python stylu)",
        "neuvěřitelná fantazie autora",
        "kultovní hlášky (Nepropadej panice!)",
        "odpověď na otázku vesmíru, života a tak vůbec",
      ],
      dislikes: ["humor nemusí sednout každému", "místy chotické"],
      quotes: [
        "Ručník je skutečně kolosálně užitečná součást výbavy hvězdného stopaře. Především má značnou praktickou cenu.",
        "Vogonové mají asi tolik sexepílu jako dopravní nehoda.",
      ],
      more:
        "V roce 2018 raketa Falcon Heavy vynesla do vesmíru automobil Tesla, ručník a Stopařův průvodce galaxií.",
    },

    {
      name: "Neuromancer",
      englishName: "Neuromancer",
      author: "William Gibson",
      year: 1984,
      img: (
        <StaticImage
          src="../images/scienceFiction/neuromancer.jpg"
          alt="Neuromancer"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "„Bible kyberpunku“, kniha která dala zrod novému žánru. Odehrává se v nedaleké budoucnosti, kde vládnou technologie, kybernetické implantáty a kriminalita. Bývalý kyberprostorový hacker Case se snaží obnovit svůj nervový systém, aby byl opět schopen připojit se do kyberprostoru zvaného „Matrix“. Potlouká se špinavými ulicemi města Chiba a postupně se propadá níž a níž. Až dostane pracovní nabídku, která se neodmítá. Pro Neuromancera je značn specifická i forma vyprávění, jazyk plný slangu a futuristických termínů. Pro někoho geniální, pro někoho těžce stravitelné dílo.",
      awards: [
        "Cena Nebula za nejlepší román (1985)",
        "Cena Hugo za nejlepší román (1985)",
        "Cena Philip K. Dicka (1984)",
        "100 nejlepších novel dle Times (2005)",
      ],
      quotes: [
        "Kyberprostor. Sdílená halucinace každý den pociťovaná miliardami oprávněných operátorů všech národů, dětmi, které se učí základům matematiky… Grafická reprezentace dat abstrahovaných z bank všech počítačů lidského systému.Nedomyslitelná komplexnost. Linie světla seřazené v neprostoru mysli, shluky a souhvězdí dat. Jako světla města, ustupující …",
      ],
      likes: [
        "velmi inovavivní a originální",
        "nadčasová, poměrně přesná vize budoucnosti",
      ],
      dislikes: [
        "chaotické, těžce stravitelné, příliš abstraktní",
        "nevyrovnané dávkování děje",
        "specifický jazyk, někomu nesedí ani jeden z českých překladů (lépe hodnocený je Rauvolf)",
      ],
    },

    {
      name: "451 stupňů Fahrenheita",
      englishName: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: 1953,
      img: (
        <StaticImage
          src="../images/scienceFiction/fahrenhait.jpg"
          alt="451 stupňů Fahrenheita"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Antiutopická vize přetechnizované společnosti, kde vládne kultura masových médií. Zájem o literaturu postupně upadá a knihy jsou posléze oficiálně zakázány a ničeny hasiči vybavenými plamenomety...",
      awards: ["Cena Hugo za nejlepší román (1954)", "Prometheus Award (1984)"],
      quotes: [
        "Skoč, křídla roztáhneš cestou.",
        "Každý po sobě musí něco zanechat, když zemře, říkával dědeček. Dítě nebo knihu nebo obraz nebo dům, musí vystavit zeď nebo vyrobit pár bot. Nebo založit zahradu. Něco, čeho se nějak dotkla jeho ruka, takže když člověk zemře, má jeho duše kam jít, a když se lidé podívají na strom nebo na květinu, kterou zasadil, on je v ní.",
      ],
      likes: [
        "Bradbury až děsivě přesně předpověděl závislost společnosti na multimédiích",
        "odkazy na jiná díla (Platónovo podobenství o jeskyni)",
      ],
      dislikes: [
        "příliš krátké, ovšem s natahovaným koncem, který se nelíbí každému",
      ],
    },

    {
      name: "Konec civilizace",
      englishName: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-konec-civilizace.png"
          alt="Konec civilizace"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Dystopická vize „dokonalé“ společnosti, kde je potlačena indiviualita jedince a lidé jsou geneticky šlechtěni k předem určenému postavení. Civilizace nezná bolest a utrpení, ale ani svobodu a lásku. Filozofické pojednání o štěstí.",
      awards: ["100 nejdůležitějších knih 20. století podle Le Monde (1999)"],
      quotes: [
        "„Ale já nechci pohodlí. Chci Boha, chci poezii, chci skutečné nebezpečí, chci svobodu, chci to, co je dobré, a chci hřích.“ „Zkrátka,“ pravil Mustafa Mond, „požadujete právo být nešťastný.“ „Tak tedy ano,“ pravil divoch vzdorně, „požaduji právo být nešťastný.“",
      ],
      likes: ["reálná vize budoucnosti", "velké, filosoficky podané myšlenky"],
      dislikes: [
        "děj méně dynamický, může se zdát spíše jako soubor jednotlivých epizod",
        "plošší postavy",
      ],
    },

    {
      name: "Nadace",
      englishName: "Foundation",
      author: "Isaac Asimov",
      year: 1951,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-nadace.jpg"
          alt="Nadace"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Součást knižní série Nadace odehrávající se v daleké budoucnosti, kdy lidé osídlí celou galaxii. Matematickou metodou je předpovězno, že Galakticou říši čeká 30 tisíc let úpadku. Hari Seldon, autor oné metody tak zakladá Nadaci, jejimž cílem má být vytvoření encyklopedie, díky které bude doba úpadku zkrácena. Kniha je rozdělena do pěti částí, kdy každá pojednává o úseku historie nově založeného světa.",
      quotes: [
        "Nikdy nedopusťte, aby vám smysl pro morálku zabránil udělat to, co je správné!",
      ],
      likes: [
        "nadčasovost, aktuálnost",
        "pro fanoušky filozofické, politicko-společenské scifi",
      ],
      dislikes: [
        "pro někoho příliš agresivní střídání časových rovin",
        "málo akční, pro někoho nudné",
      ],
      awards: ["speciální cena Hugo - Best All-Time Series (1966)"],
    },

    {
      name: "Marťan",
      englishName: "The Martian",
      author: "Andy Weir",
      year: 2014,
      img: (
        <StaticImage
          src="../images/scienceFiction/martan.jpg"
          alt="Marťan"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Hlavní hrdina Mark se ocitá sám na Marsu a snaží se přežít. Spojení se Zemí se nedaří a tak je odkázán sám na sebe, na svou vynalézavost a důvtip.",
      awards: [
        "cena Ignotus za nejlepší zahraniční román (2015)",
        "Hugo Awards - Andy Weir získal za Marťana cenu John W. Campbella - Nejlepší začínající spisovatel (2016) ",
      ],
      quotes: [
        "Den jsem zahájil nicotným čajem. Nicotný čaj se vaří snadno. Nejdřív ohřejete vodu a pak do ní nepřidáte nic.",
        "Jako většinu životních problémů lze i tenhle vyřešit s pomocí krabice čisté radiace.",
      ],
      likes: [
        "technické, chemické a fyzikální detaily jsou popsány tak, že jim rozumí každý",
        "sarkastický humor a optimismus v bezvýchodné situaci",
      ],
      dislikes: [
        "pomalejší začátek",
        "pro ne přilíš vědecky zaměřené čtenáře mohou být technické detaily nudné",
      ],
    },

    {
      name: "Enderova hra",
      englishName: "Ender's Game",
      author: "Orson Scott Card",
      year: 1985,
      img: (
        <StaticImage
          src="../images/scienceFiction/ender.webp"
          alt="Enderova hra"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Úvodní díl rozsáhlé Cardovy knižní série Enderova hra. Scifi odehrávající se v blíže neurčené budoucnosti planety Země, kdy lidstvo ohrožuje mimozemský insektoidní druh. Děti, včetně hlavního protagonisty Endera jsou od útlého věku cvičeni prostřednictvím stále obtížnějších her. Ender je po všech stránkách výjimečně nadané dítě do kterého jsou vloženy naděje, že bude nejlepším vojevůdcem a stratégem v lidské historii",
      awards: [
        "Cena Nebula za nejlepší novelu (1985)",
        "Cena Hugo za nejlepší román (1986)",
      ],
      likes: ["filosofický přesah", "vypointovaný závěr "],
      dislikes: [
        "místy dlouhé nezáživné pasáže popisující výcvik",
        "děti se až nepřirozeně chovají příliš dospěle",
      ],
    },

    {
      name: "Jatka č.5",
      englishName: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      year: 2014,
      img: (
        <StaticImage
          src="../images/scienceFiction/jatkac5.jpg"
          alt="Jatka č.5"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description:
        "Avantgardní, částečně autobiografický vědeckofantastický protiválečný román. Hlavním hrdinou je Americký voják Billy, který je zajat Němci, spolu s pornoherečkou vystavován mimozemšťany v jejich zoo, vězněn v Drážďanech... děj nechronologicky skáče v prostoru a čase.",
      likes: [
        "velmi originální zachycení absurdity války",
        "vážné i humorné, absurdní i děsivé",
      ],
      dislikes: [
        "pro někoho příliš zmatené",
        "zbytečně dlouhý úvod vysvětlující proč autor knihu napsal",
      ],
      quotes: ["Tak už to chodí"],
      awards: [
        "Nominace na nejlepší novelu v cenách Hugo i Nebula (1970), ovšem poražen knihou 'Levá ruka tmy'",
        "100 nejlepších novel dle Times (2005)",
      ],
    },
    /*     {
      name: "Frankenstein",
      englishName: "Frankenstein",
      author: "Mary Wollstonecraft Shelley",
      year: 1818,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-frankenstein.jpg"
          alt="Frankenstein"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description: "",
    }, */
    /*     {
      name: "Já, robot",
      englishName: "I, Robot",
      author: "Isaac Asimov",
      year: 1949,
      img: (
        <StaticImage
          src="../images/scienceFiction/scifi-ja-robot.jpg"
          alt="Já, robot"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description: "",
    }, */
  ];

  return (
    <>
      {/* <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum
        quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit
        amet, consectetuer adipiscing elit. Maecenas lorem. Donec vitae arcu.
        Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Integer in
        sapien. Fusce wisi. Integer tempor. Fusce dui leo, imperdiet in, aliquam
        sit amet, feugiat eu, orci. Duis bibendum, lectus ut viverra rhoncus,
        dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Sed elit
        dui, pellentesque a, faucibus vel, interdum nec, diam. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus.
      </Description> */}
      <div>
        <div>
          {data.map((book) => (
            <Book key={book.name} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ScienceFiction;
