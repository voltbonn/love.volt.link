import React, { useState, useEffect } from 'react';

import '../fonts/ubuntu-v20-latin/index.css'

import Colcade from 'colcade'

// import { Localized, useLocalization } from '../fluent/Localized.js'

async function lazyLoadImage (imageName) {
  try {
    const src = await import(`../images/${imageName}`)
    return src.default
  } catch (error) {
    console.error('lazyLoadImage-error', error);
  }
};

const fisherYatesShuffel = (toShuffle = []) => {
  for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
  }
  return toShuffle;
}

let decorations_tmp = [
  '1f3f3-fe0f-200d-1f308.svg', // pride flag
  // '1f31f.svg', // start with sparks
  '1f48b.svg', // kiss
  '1f48c.svg', // love letter
  // '1f48d.svg', // ring with diamond
  '1f48e.svg', // diamond
  '1f49a.svg', // green heart
  // '1f49b.svg', // yellow heart
  '1f49c.svg', // purple heart
  // '1f49d.svg', // red heart with gift ribbon
  '1f49e.svg', // two hearts revolving
  // '1f308.svg', // rainbow (it does not look so good)
  // '1f381.svg', // present
  '1f490.svg', // flowers
  '1f495.svg', // two hearts
  '1f496.svg', // heart with sparkles
  // '1f497.svg', // beating heart
  '1f498.svg', // heart with arrow
  '1f499.svg', // blue heart
  '1f525.svg', // fire
  '2b50.svg', // star
  '26a1.svg', // lightning
  '2728.svg', // sparkles
  '2764.svg', // red heart
]
  .map(async decoration => await lazyLoadImage(`decorations/volt/${decoration}`))

function Decoration() {
  const [decorationSrc, setDecorationSrc] = useState([])
  const [pos_class, setPosClass] = useState('pos_1')
  const [animation_delay, setAnimationDelay] = useState('0s')
  const [animation_duration, setAnimationDuration] = useState('1s')

  useEffect(() => {
    Promise.all(decorations_tmp).then(decorations => {
      const random_decoration = fisherYatesShuffel([...decorations])[0]
      setDecorationSrc(random_decoration)

      const pos_classes = [
        'pos_top_left',
        'pos_top_right',
        'pos_middle_right',
        'pos_middle_left',
      ]
      const random_pos_class = fisherYatesShuffel(pos_classes)[0]
      setPosClass(random_pos_class)

      const random_animation_delay = Math.round(Math.random() * 10)*0.1
      setAnimationDelay(random_animation_delay)

      // radom duration between 0.5 and 1.5
      const random_animation_duration = 2 + ((Math.round(Math.random() * 10)*0.1) * 2)
      setAnimationDuration(random_animation_duration)
    })
  }, [])

  return <div
    alt=""
    className={`decoration ${pos_class}`}
    style={{
      '--image-src': `url(${decorationSrc})`,
      '--animation-delay': `${animation_delay}s`,
      '--animation-duration': `${animation_duration}s`,
    }}
  ></div>
}


let greetings_data = [
  {
    key: 'Potsdam',
    title: 'Liebe Gr????e aus Potsdam',
    text: `Frohen Valentinstag! Du liebst den Gedanken eines vereinten Europas so sehr wie wir? Dann schlie??' dich uns an ????`,
    images: [
      'IMG_1202.jpg',
    ],
    links: [
      {
        title: '@VoltPotsdam',
        url: 'https://www.instagram.com/voltpotsdam/',
        color: 'red',
      },
      {
        title: '@VoltBrandenburg',
        url: 'https://www.instagram.com/voltbrandenburg/',
        color: 'red',
      },
    ]
  },
  {
    key: 'Bonn',
    title: 'Liebe Gr????e euch und euren Lieben aus Bonn!',
    text: `Ebenso wie Zeus in der griechischen Mythologie haben wir uns in Europa verliebt. Daher ist der Valentinstag nicht nur ein wichtiger Tag f??r uns, um unsere Liebe gegen??ber unseren N??chsten auszudr??cken, sondern auch um unsere Liebe f??r Europa immer wieder neu entfachen zu lassen. Wenn es Dir genauso geht, schlie?? Dich uns gerne an!

    Just like Zeus in Greek mythology, we have fallen in love with Europe. Therefore, Valentine's Day is not only an important day for us to express our love to our loved ones, but also to reignite our love for Europe. If you feel the same way, feel free to join us!`,
    images: [
      'Volt Frauen auf der Kennedy Br??cke.jpg',
    ],
    links: [
      {
        title: '@VoltBonn',
        url: 'https://www.instagram.com/voltbonn/',
        color: 'red',
      },
      // {
      //   title: '@VoltBonn',
      //   url: 'https://twitter.com/voltbonn',
      //   color: 'blue',
      // },
      {
        title: '@VoltDeutschland',
        url: 'https://www.instagram.com/voltdeutschland/',
        color: 'red',
      },
    ]
  },
  {
    key: 'Paris',
    title: 'Des bisous de Paris !',
    text: 'Belle f??te de l???amour ?? tous et ?? toutes ! Chez Volt, on c??l??bre l???amour et la fraternit?? entre les peuples europ??ens. Et on fait de la politique autrement, ensemble ! Dans la bienveillance et la coop??ration citoyenne. Rejoignez-nous ! Et soutenez notre ??quipe candidate et le programme que VOUS nous avez inspir?? pour les ??lections municipales dans le 9eme arrondissement !',
    images: [
      'image.jpg',
      'image-1.jpg',
    ],
    links: [
      {
        title: '@volt_paris_idf',
        url: 'https://www.instagram.com/volt_paris_idf/',
        color: 'red',
      },
    ]
  },
  {
    key: 'Berlin',
    title: 'Liebe ist f??r alle da! ????',
    text: `Wir als Berliner Team w??nschen allen Menschen eine gro??e Portion Liebe!`,
    images: [
      'berlin_bpt_2023_01.jpg',
      'signal-2023-02-11-17-30-22-440.jpg',
      'signal-2023-02-11-15-18-29-133.jpg',
    ],
    links: [
      {
        title: '@volt_berlin',
        url: 'https://www.instagram.com/volt_berlin/',
        color: 'red',
      },
    ]
  },
  {
    key: 'Noord-Holland',
    title: 'Veel liefde uit Noord-Holland',
    text: `Lief Europa, we vanuit het mooie Noord-Holland wensen jullie allemaal een fijne Valentijnsdag. Laten we met z???n allen de komende jaren zoveel mogelijk liefde de wereld in te sturen. We zullen ons de komende jaren gaan inzetten voor een mooiere Noord-Holland, Nederland en bovenal een mooier Europa. Dit door met elkaar in gesprek te gaan, respect te hebben voor elkaars mening, altijd uitgaan van positieve energie, maar bovenal met heel veel liefde
Veel liefs en een fijne Valentijnsdag,
Volt Noord-Holland`,
    images: [
      '326215667_868655994428086_6432185707996084039_n.jpg',
    ],
    links: []
  },
  {
    key: 'Marburg',
    title: 'Liebesgr????e aus Marburg!',
    text: 'Hey Du! Wir sind das Marburger Team - ein offener, bunter Haufen, der Lust hat, etwas in der Gesellschaft zu bewirken. Egal, ob du politisch erfahren bist oder nicht - wir m??chten wissen, was Du denkst und welche Ideen du hast! Uns interessiert auch nicht, woher Du kommst, wie alt Du bist oder welches Gender Du hast. Wir m??chten gemeinsam mit Dir Visionen leben und Herzensthemen umsetzen. Hast du Ideen f??r Marburg, Deutschland und Europa? Dann melde dich bei uns - JOIN VOLT! Viele Valentinsgr????e, Dein Marburger Team <3',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Ruhrgebiet',
    title: 'From Ruhrpott with Love',
    text: `Ein bisken Pottliebe von hier an alle ????!`,
    images: [
      '328841918_851089932646202_4040560770857888644_n.jpg',
    ],
    links: []
  },
  {
    key: 'Brescia',
    title: 'Da Brescia con amore!',
    text: `Tanti auguri di Buon San Valentino da Brescia a tutti gli innamorati dell'Europa! 
Happy Valentine's day from Brescia to all Europe lovers!`,
    images: [
      'image.jpg',
      'image-1.jpg',
    ],
  },
  {
    key: 'Groningen',
    title: 'Veel liefs uit Groningen!',
    text: 'Wij wensen iedereen happy valentijn!',
    images: [
      'original_f3b061f9-9dee-4ab5-b6e2-2b2593705ef4_20230125_221906.jpg',
      'image.jpg',
    ],
  },
  {
    key: 'Basel',
    title: 'Liebi Gr??essli us Basel!',
    text: 'Liebe Gr??sse aus dem Dreil??ndereck, wo sich Deutschland Frankreich und die Schweiz die Hand geben und sich deren B??rger*innen t??glich ??ber nationale Grenzen hinweg treffen und manche sich sogar verlieben. Sch??ne Valentinstag ah alli! Liebi Gr??essli us Basel! ',
    images: [
      'image.png',
    ],
  },
  {
    key: 'Lisbon',
    title: 'From Lisbon with Love!',
    text: 'A equipa de Lisboa do Volt Portugal tem vindo crescer e apresenta com o passar do tempo cada vez mais um maior dinamismo, o que se traduz no crescimento de interessados no Volt que acabam por entrar nesta equipa, assim como num crescimento das atividades realizadas e que t??m sido um sucesso. O crescimento da equipa de Lisboa demonstra que o Volt ?? um projeto necess??rio, e que mexe com cada vez mais pessoas, n??o s?? em Lisboa, mas por toda a Europa!  ',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'W??rzburg',
    title: 'Liebesgr????e aus W??rzburg!',
    text: 'Europe is Love. Stay peaceful and live happy!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Dublin',
    title: 'From Dublin with Love!',
    text: `Happy Valentine???s Day! From the capital of Ireland, we???d like to wish you a day full of love and joy. 

In Volt Ireland we do believe in European fraternity and solidarity, and we strive to practice it on a daily basis. Show love to you dear ones, for those ones in need, love nature and the animals around you! 

Today is known as the lovers' day, but we like to think of it as a reminder to show kindness to the world.`,
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Lille',
    title: 'Des bisous de Lille!',
    text: 'Europe, mon amour!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Vienna',
    title: 'From Vienna with Love!',
    text: 'Happy Valentine\'s day to everyone in Europe!',
    images: [],
  },
  {
    key: 'Karlsruhe',
    title: 'Liebesgr????e aus Karlsruhe!',
    text: 'Volt Karlsruhe w??nscht allen Liebenden einen frohen Valentinstag!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Bucure??ti',
    title: 'From Bucure??ti with Love!',
    text: 'Echipa Volt Rom??nia v?? dore??te o zi excelent??! S?? iubi??i ??i s?? fi??i iubi??i!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Lugano',
    title: 'From Lugano with Love!',
    text: 'Auguriamo un buon San Valentino a tutti! Cari saluti dalla Svizzera italiana.',
    images: [
      'image.png',
    ],
  },
  {
    key: 'Friedrichshafen',
    title: 'Liebesgr????e aus Friedrichshafen!',
    text: 'Zum Valentinstag alles Liebe!',
    images: [],
  },
  {
    key: 'Messina',
    title: 'Da Messina con amore!',
    text: 'Ogni famiglia ?? Amore',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Gie??en',
    title: 'Liebesgr????e aus Gie??en!',
    text: 'Mit Herzen und Gr????en w??nscht euch das Team aus Gie??en einen sch??nen Valentinstag! ',
    images: [
      'image.png',
    ],
  },
  {
    key: 'Den_Haag',
    title: 'Veel liefs uit Den Haag !',
    text: `Volt Den Haag wenst alle Hagenezen een liefdevolle Valentijnsdag!

Gelijkheid is een pijler van onze Europese beweging. Als Volt Den Haag wensen wij jou dan ook een gelukkige Valentijnsdag toe met je partner, wie dat ook mag zijn <3`,
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Dortmund',
    title: 'Liebesgr????e aus Dortmund!',
    text: 'Aus Liebe zur EU und auch f??r dich, schicken wir Gr????e aus Dortmund ????lich',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'T??bingen',
    title: 'From T??bingen with Love!',
    text: `Wir w??nschen euch allen einen sch??nen Valentinstag ????

    #WeLoveEurope`,
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Ain',
    title: 'Des bisous de Volt Ain !',
    text: 'Un gros c??lin de la Saint-Valentin de Volt France (01 Ain) pour un avenir radieux!',
    images: [
      '',
    ],
    comment: 'The old website linked to the following video: https://www.youtube.com/watch?v=in8-2MaKV5A'
  },
  {
    key: 'Z??rich',
    title: 'From Z??rich with Love!',
    text: `From the heart of Europe we whish you all a happy Valentines' day! Vom Herzen Europas w??nschen wir euch allen einen sch??nen Valentinstag! Liebi Gr??ess us Z??ri! `,
    images: [
      'image.png',
    ],
  },
  {
    key: 'Nice',
    title: 'Des bisous de Nice!',
    text: 'Volt aime l\'Europe et souhaite une belle Saint-Valentin ?? tous les amoureux!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'M??nchen',
    title: 'Liebesgr????e aus M??nchen!',
    text: 'Spread the love!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Firenze',
    title: 'Da Firenze con amore!',
    text: '',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Salzburg',
    title: 'Frohen Valentinstag aus Salzburg!',
    text: `Du bist in Salzburg zuhause aber dein Herz schl??gt f??r Europa?
    Dann #JointheChange`,
    images: [
      '325054502_1816029828770764_457064908353054901_n.jpg',
    ],
  },
  {
    key: 'Strasbourg_Kehl',
    title: 'Bons baisers de Strasbourg/Kehl!',
    text: 'Herzliche Valentinsgr????e von unserem Europa Abgeordnetten aus Strasbourg und Kehl ????????????',
    images: [
      'image.jpg', // Damian
    ],
    links: [
      {
        title: '@damian.boeselager',
        url: 'https://www.instagram.com/damian.boeselager/',
        color: 'red',
      },
    ]
  }
]

greetings_data = greetings_data
  .map(async greeting => {
    const key = greeting.key

    greeting.links = greeting.links || []

    greeting.images = await Promise.all(
      greeting.images
      .filter(Boolean)
      .map(async imageName => await lazyLoadImage(`greetings/${key}/${imageName}`))
    )
    return greeting
  })

function re_calc_mansonary() {
  new Colcade('.masonry-grid', {
    columns: '.masonry-grid-col',
    items: '.masonry-grid-item'
  })
}

let doit_re_calc_mansonary;
function window_resize () {
  clearTimeout(doit_re_calc_mansonary);
  doit_re_calc_mansonary = setTimeout(re_calc_mansonary, 100);
}


export default function Wishes() {

  // const { getString } = useLocalization()

  const [greetings, setGreetings] = useState([])

  useEffect(() => {
    async function get_greetings() {
      const resolved_greetings_data = await Promise.all(greetings_data)
      setGreetings(resolved_greetings_data)
      setTimeout(() => {
        re_calc_mansonary()
      })
    }
    get_greetings()

    window.addEventListener('resize', window_resize)

    return () => {
      // cleanup
      window.removeEventListener('resize', window_resize)
    }
  }, [])


  return <div className="masonry-grid greetings">
    {/* <!-- columns --> */}
    <div className="masonry-grid-col masonry-grid-col--1"></div>
    <div className="masonry-grid-col masonry-grid-col--2"></div>
    <div className="masonry-grid-col masonry-grid-col--3"></div>

    {greetings.map((greeting, index) => {
      return <div key={`${greeting.key}_${index}`} className="masonry-grid-item greeting">
        <div className="text">
          <Decoration />
          <h2>{greeting.title}</h2>
          {greeting.text.split('\n').filter(Boolean).map((t,i) => <p key={i}>{t}</p>)}
          {
            greeting.links.length > 0
              ? <div className="links">
                {
                  greeting.links.map((link_data, index) => {
                    return <a
                      key={link_data.url}
                      href={link_data.url}
                      target="_blank" rel="noreferrer"
                    >
                      <button className={`text_${link_data.color}`}>
                        {link_data.title}
                      </button>
                    </a>
                  })
                }
              </div>
              : null
          }
        </div>
        {
        greeting.images
          .filter(Boolean)
          .map((image, index) => {
            return <img key={index} className="photo" src={image} alt={greeting.title} />
          })
        }
      </div>
    })}
  </div>
}
