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
        "Dystopický román odehrávající se v totalitním byrokratickém světě, kde si vládnoucí Strana udržuje moc pomocí dezinformací, manipulací a terroru. Hlavní hrdina, ničím výjimečný Winston pracující na Ministerstvu pravdy, se rozhodne spáchat ideozločin -  začne si psát deník. Místy až děsivě reálná vize budoucnosti.",
      awards: [
        "Cena Retro Hugo za nejlepší novelu",
        "Prometheus Award (síň slávy)",
      ],
      likes: [
        "mrazivá nadčasovost",
        "silná kniha, o které budete dlouho přemýšlet",
      ],
      dislikes: [
        "pro někoho příliš dlouhé monology, úvahy a popisy a málo děje",
        "není to lehké čtení (což může být i plus)",
      ],
      more:
        "Nově (2021) vychází také v podobě grafického románu (ilustrace Matyáš Namai)",
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
        "propracovaná politika plná intrik, ekologie, filosofie, náboženské odkazy",
      ],
      dislikes: [
        "může chvíli trvat se začíst, pro někoho příliš rozvleklé až nudné",
        "další díly jsou slabší",
        "scifi na pomezí scifi a fantasy (nemusí být mínus, ale někomu nesedne)",
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
        "První díl pentalogie označované jako trilogie v pěti dílech. Humorně pojatá scifi série, kdy Země zavazí v cestě intergalaktické dálnici a musí tedy být zničena. Naživu zůstává jeden úplně obyčejný Angličan, který se ocitá ve vesmíru plném náhodností a absurdit.",
      likes: [
        "pěkně namluvená audiokniha Voujtou Dykem",
        "specifický absurdní humor (v Monty Python stylu)",
        "neuvěřitelná fantazie autora",
        "kultovní hlášky (nepropadej panice!)",
        "odpověď na otázku vesmíru, života a tak vůbec",
      ],
      dislikes: ["humor nemusí sednout každému", "místy chotické"],
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
        "„Bible kyberpunku“, kniha která dala zrod novému žánru. Odehrává se v nedaleké budoucnosti, kde vládnou technologie, kybernetické implantáty a kriminalita. Bývalý kyberprostorový hacker Case se snaží obnovit svůj nervový systém, aby byl opět schopen připojit se do kyberprostoru zvaného „Matrix“. Potlouká se špinavými ulicemi města Chiba a postupně se propadá níž a níž. Až dostane pracovní nabídku, která se neodmítá. Pro Neuromancera je specifická i forma vyprávění, jazyk plný slangu a futuristických termínů. Pro někoho geniální, pro někoho těžce stravitelný.",
      awards: [
        "Cena Nebula za nejlepší román (1985)",
        "Cena Hugo za nejlepší román (1985)",
        "Cena Philip K. Dicka (1984)",
      ],
      likes: [
        "velmi inovavivní a originální",
        "nadčasová, poměrně přesná vize budoucnosti",
        "pokud máte rádi Matrix a DeusEx, je to nutnost",
      ],
      dislikes: [
        "chaotické, těžce stravitelné",
        "příliš abstraktní",
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
        "Dystopická vize „dokonalé“ společnosti, kde je potlačena indiviualita jedince a kde jsou lidé geneticky šlechtěni k předem určenému postavení. Civilizace nezná bolest a utrpení, ale ani svobodu a lásku. Filozofické pojednání o štěstí.",
      likes: [
        "děsivě brilantní vize budoucnosti vedoucí k zamyšlení",
        "velké, akruální, filosoficky podané myšlenky",
      ],
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
        "Součást knižní série Nadace odehrávající se v daleké budoucnosti, kdy lidé osídlí celou galaxii. Budoucnost společnosti je předpovídáná matematickou metodou.",
      likes: [
        "nadčasovost, aktuálnost",
        "pro fanoušky filozofické, politicko-společenské scifi",
      ],
      dislikes: [
        "pro někoho příliš agresivní střídání časových rovin",
        "více politologicko filosofické než scifi",
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
      description: "",
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
        "Úvodní díl rozsáhlé Cardovy knižní série Enderova hra. Scifi odehrávající se v blíže neurčené budoucnosti Země, kdy lidstvo ohrožuje mimozemský insektoidní druh. Děti, včetně hlavního protagonisty Endera jsou od útlého věku cvičeni prostřednictvím stále obtížnějších her, v kterých se prokáže Enderova vojenská genialita.",
      awards: [
        "Cena Nebula za nejlepší novelu (1985)",
        "Cena Hugo za nejlepší román (1986)",
      ],
    },

    {
      name: "Jatka č.5",
      englishName: "Slaughterhouse-Five",
      author: "Kurt Junior Vonnegut",
      year: 2014,
      img: (
        <StaticImage
          src="../images/scienceFiction/jatkac5.jpg"
          alt="Jatka č.5"
          placeholder="blurred"
          objectFit="contain"
        />
      ),
      description: "",
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
