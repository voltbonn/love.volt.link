import React, { useState, useEffect } from 'react';

import '../fonts/ubuntu-v20-latin/index.css'

import Colcade from '../../node_modules/colcade/colcade.js'

// import { Localized, useLocalization } from '../fluent/Localized.js'

async function lazyLoadImage (imageName) {
  try {
    const src = await import(`../images/greetings/${imageName}`)
    return src.default
  } catch (error) {
    console.error('lazyLoadImage-error', error);
  }
};


let greetings_data = [
  {
    key: 'Potsdam',
    title: 'Liebe Grüße aus Potsdam',
    text: `Frohen Valentinstag! Du liebst den Gedanken eines vereinten Europas so sehr wie wir? Dann schließ' dich uns an 😍`,
    images: [
      'IMG_1202.jpg',
    ],
  },
  {
    key: 'Bonn',
    title: 'Liebe Grüße euch und euren Lieben aus Bonn!',
    text: `Ebenso wie Zeus in der griechischen Mythologie haben wir uns in Europa verliebt. Daher ist der Valentinstag nicht nur ein wichtiger Tag für uns, um unsere Liebe gegenüber unseren Nächsten auszudrücken, sondern auch um unsere Liebe für Europa immer wieder neu entfachen zu lassen. Wenn es Dir genauso geht, schließ Dich uns gerne an!

    Just like Zeus in Greek mythology, we have fallen in love with Europe. Therefore, Valentine's Day is not only an important day for us to express our love to our loved ones, but also to reignite our love for Europe. If you feel the same way, feel free to join us!`,
    images: [
      'Volt Frauen auf der Kennedy Brücke.jpg',
    ],
  },
  {
    key: 'Paris',
    title: 'Des bisous de Paris !',
    text: 'Belle fête de l’amour à tous et à toutes ! Chez Volt, on célèbre l’amour et la fraternité entre les peuples européens. Et on fait de la politique autrement, ensemble ! Dans la bienveillance et la coopération citoyenne. Rejoignez-nous ! Et soutenez notre équipe candidate et le programme que VOUS nous avez inspiré pour les élections municipales dans le 9eme arrondissement !',
    images: [
      'image.jpg',
      'image-1.jpg',
    ],
  },
  {
    key: 'Marburg',
    title: 'Liebesgrüße aus Marburg!',
    text: 'Hey Du! Wir sind das Marburger Team - ein offener, bunter Haufen, der Lust hat, etwas in der Gesellschaft zu bewirken. Egal, ob du politisch erfahren bist oder nicht - wir möchten wissen, was Du denkst und welche Ideen du hast! Uns interessiert auch nicht, woher Du kommst, wie alt Du bist oder welches Gender Du hast. Wir möchten gemeinsam mit Dir Visionen leben und Herzensthemen umsetzen. Hast du Ideen für Marburg, Deutschland und Europa? Dann melde dich bei uns - JOIN VOLT! Viele Valentinsgrüße, Dein Marburger Team <3',
    images: [
      'image.jpg',
    ],
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
      'image.jpg',
    ],
  },
  {
    key: 'Basel',
    title: 'Liebi Grüessli us Basel!',
    text: 'Liebe Grüsse aus dem Dreiländereck, wo sich Deutschland Frankreich und die Schweiz die Hand geben und sich deren Bürger*innen täglich über nationale Grenzen hinweg treffen und manche sich sogar verlieben. Schöne Valentinstag ah alli! Liebi Grüessli us Basel! ',
    images: [
      'image.png',
    ],
  },
  {
    key: 'Lisbon',
    title: 'From Lisbon with Love!',
    text: 'A equipa de Lisboa do Volt Portugal tem vindo crescer e apresenta com o passar do tempo cada vez mais um maior dinamismo, o que se traduz no crescimento de interessados no Volt que acabam por entrar nesta equipa, assim como num crescimento das atividades realizadas e que têm sido um sucesso. O crescimento da equipa de Lisboa demonstra que o Volt é um projeto necessário, e que mexe com cada vez mais pessoas, não só em Lisboa, mas por toda a Europa!  ',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Würzburg',
    title: 'Liebesgrüße aus Würzburg!',
    text: 'Europe is Love. Stay peaceful and live happy!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Dublin',
    title: 'From Dublin with Love!',
    text: `Happy Valentine’s Day! From the capital of Ireland, we’d like to wish you a day full of love and joy. 

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
    title: 'Liebesgrüße aus Karlsruhe!',
    text: 'Volt Karlsruhe wünscht allen Liebenden einen frohen Valentinstag!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'București',
    title: 'From București with Love!',
    text: 'Echipa Volt România vă dorește o zi excelentă! Să iubiți și să fiți iubiți!',
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
    title: 'Liebesgrüße aus Friedrichshafen!',
    text: 'Zum Valentinstag alles Liebe!',
    images: [],
  },
  {
    key: 'Messina',
    title: 'Da Messina con amore!',
    text: 'Ogni famiglia è Amore',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Gießen',
    title: 'Liebesgrüße aus Gießen!',
    text: 'Mit Herzen und Grüßen wünscht euch das Team aus Gießen einen schönen Valentinstag! ',
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
    title: 'Liebesgrüße aus Dortmund!',
    text: 'Aus Liebe zur EU und auch für dich, schicken wir Grüße aus Dortmund 💜lich',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Tübingen',
    title: 'From Tübingen with Love!',
    text: `Wir wünschen euch allen einen schönen Valentinstag 💜

    #WeLoveEurope`,
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'Ain',
    title: 'Des bisous de Volt Ain !',
    text: 'Un gros câlin de la Saint-Valentin de Volt France (01 Ain) pour un avenir radieux!',
    images: [
      '',
    ],
    comment: 'The old website linked to the following video: https://www.youtube.com/watch?v=in8-2MaKV5A'
  },
  {
    key: 'Zürich',
    title: 'From Zürich with Love!',
    text: `From the heart of Europe we whish you all a happy Valentines' day! Vom Herzen Europas wünschen wir euch allen einen schönen Valentinstag! Liebi Grüess us Züri! `,
    images: [
      'image.png',
    ],
  },
  {
    key: 'Nice',
    title: 'Des bisous de Nice!',
    text: 'Volt aime l\'Europe et souhaite une belle Saint-Valentin à tous les amoureux!',
    images: [
      'image.jpg',
    ],
  },
  {
    key: 'München',
    title: 'Liebesgrüße aus München!',
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
    key: 'Strasbourg_Kehl',
    title: 'Bons baisers de Strasbourg/Kehl!',
    text: '',
    images: [
      'image.jpg',
    ],
  }
]

greetings_data = [
  ...greetings_data,
  ...greetings_data,
]
  .map(async greeting => {
    const key = greeting.key
    greeting.images = await Promise.all(
      greeting.images
      .filter(Boolean)
      .map(async imageName => await lazyLoadImage(`${key}/${imageName}`))
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
        <h2>{greeting.title}</h2>
        {greeting.text.split('\n').filter(Boolean).map((t,i) => <p key={i}>{t}</p>)}
      </div>
      {
      greeting.images
        .filter(Boolean)
        .map((image, index) => {
          return <img key={index} src={image} alt={greeting.title} />
        })
      }
    </div>
  })}
  </div>
}
