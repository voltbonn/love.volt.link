import React, { useState, useEffect } from 'react';

import '../fonts/ubuntu-v20-latin/index.css'

// import { Localized, useLocalization } from '../fluent/Localized.js'

async function get_greetings () {
  const greetings = [
  {
    title: 'Liebe Grüße euch und euren Lieben aus Bonn!',
    text: `Ebenso wie Zeus in der griechischen Mythologie haben wir uns in Europa verliebt. Daher ist der Valentinstag nicht nur ein wichtiger Tag für uns, um unsere Liebe gegenüber unseren Nächsten auszudrücken, sondern auch um unsere Liebe für Europa immer wieder neu entfachen zu lassen. Wenn es Dir genauso geht, schließ Dich uns gerne an! 

    Just like Zeus in Greek mythology, we have fallen in love with Europe. Therefore, Valentine's Day is not only an important day for us to express our love to our loved ones, but also to reignite our love for Europe. If you feel the same way, feel free to join us!`,
    images: [
      require('../images/greetings/Volt Frauen auf der Kennedy Brücke.jpg').default,
    ],
  },
  {
    title: 'Des bisous de Paris !',
    text: 'Belle fête de l’amour à tous et à toutes ! Chez Volt, on célèbre l’amour et la fraternité entre les peuples européens. Et on fait de la politique autrement, ensemble ! Dans la bienveillance et la coopération citoyenne. Rejoignez-nous ! Et soutenez notre équipe candidate et le programme que VOUS nous avez inspiré pour les élections municipales dans le 9eme arrondissement !',
    images: [
      require('../images/greetings/image.jpg').default,
      require('../images/greetings/image-1.jpg').default,
    ],
  }
]
  return greetings
}

export default function Wishes() {

  const [greetings, setGreetings] = useState([])

  useEffect(() => {
    get_greetings()
      .then(new_greetings => {
        setGreetings(new_greetings)
        console.log(new_greetings)
      })
  }, [])


  // const { getString } = useLocalization()

  return <>
    {greetings.map((greeting, index) => {
    return <div key={index}>
      <h2>{greeting.title}</h2>
      <p>{greeting.text}</p>
      {greeting.images.map((image, index) => {
        return <img key={index} src={image} alt={greeting.title} />
      })}
    </div>
  })}
  </>
}
