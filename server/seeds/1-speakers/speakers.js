const { getObjectId } = require("mongo-seeding");

const speakers = [
  {
    title: "Simon Sinek",
    jobTitle: "Autor bestseller y optimista.",
    highlighted: true,
    avatar: "files/simon-sinek.jpg"
  },
  {
    title: "Pau Gasol",
    jobTitle:
      "Jugador de baloncesto dos veces campeón de la NBA y Presidente de la Gasol Foundation.",
    highlighted: true,
    avatar: "files/pau-gasol.jpg"
  },
  {
    title: "Lety Sahagún - Ashley Frangie",
    jobTitle:
      "Creadoras de Se Regalan Dudas, el podcast más escuchado de Latinoamérica.",
    highlighted: true,
    avatar: "files/se-regalan-dudas.jpg"
  },
  {
    title: "Sergio Peinado",
    jobTitle: "CEO y fundador de Fuertafit.",
    highlighted: true,
    avatar: "files/sergio-peinado.jpg"
  },
  {
    title: "Marta Silva",
    jobTitle:
      "Jugadora de fútbol mundialmente conocida y Embajadora de Buena Voluntad de la ONU Mujeres",
    highlighted: true,
    avatar: "files/marta-silva.jpg"
  },
  {
    title: "Roberto Gamboa",
    jobTitle: "Director del Instituto de Tráfico Online [ITO]​.",
    highlighted: true,
    avatar: "files/roberto-gamboa.jpg"
  },
  {
    title: "Euge Oller",
    jobTitle:
      "Fundador de Emprende Aprendiendo, Flash Libros y socio del grupo Helix",
    highlighted: true,
    avatar: "files/euge-oller.jpg"
  },
  {
    title: "Juliana Algañaraz",
    jobTitle: "CEO de Endemol Shine Brasil.",
    highlighted: true,
    avatar: "files/juliana-alganaraz.jpg"
  },
  {
    title: "Peter Mokaya Tabichi",
    jobTitle: "Profesor, vencedor del Premio Global a la Enseñanza 2019.",
    highlighted: true,
    avatar: "files/peter-mokaya.jpg"
  },
  {
    title: "Marco Antonio Regil",
    jobTitle: "Creador del método “Alcanza tus sueños”.",
    highlighted: true,
    avatar: "files/marco-regli.jpg"
  },
  {
    title: "Ryan Deiss",
    jobTitle: "Autor y CEO de Scalable Company y Digital Marketer.",
    highlighted: true,
    avatar: "files/ryan-deiss.jpg"
  },
  {
    title: "Emicida",
    jobTitle:
      "Músico de rap, empresario al frente de Laboratório Fantasma y escritor.",
    highlighted: false,
    avatar: "files/emicida.jpg"
  },
  {
    title: "Chris Ducker",
    jobTitle: "Emprendedor en serie y autor de bestsellers.",
    highlighted: false,
    avatar: "files/chris-ducker.jpg"
  },
  {
    title: "Mario Sergio Cortella",
    jobTitle: "Filósofo, Escritor y Doctor en Educación.",
    highlighted: false,
    avatar: "files/mario-sergio-cortella.jpg"
  },
  {
    title: "Laís Souza",
    jobTitle:
      "Ex-atleta olímpica brasileña de gimnasia artística y esquí aéreo, y estudiante de historia.",
    highlighted: false,
    avatar: "files/lais-souza.jpg"
  },
  {
    title: "João Pedro Resende",
    jobTitle: "CEO y cofundador de Hotmart",
    highlighted: false,
    avatar: "files/joao-pedro.jpg"
  },
  {
    title: "Débora Garofalo",
    jobTitle: "Top 10 del Premio Global a la Enseñanza.",
    highlighted: false,
    avatar: "files/debora-garofalo.jpg"
  },
  {
    title: "Erico Rocha",
    jobTitle:
      "Especialista en marketing digital y cofundador de Ignição Digital.",
    highlighted: false,
    avatar: "files/erico-rocha.jpg"
  },
  {
    title: "Jovem Nerd - Alexandre Ottoni / Deive Pazos",
    jobTitle: "Fundadores de Jovem Nerd",
    highlighted: false,
    avatar: "files/jovem-nerd.jpg"
  },
  {
    title: "Vanessa Brandão",
    jobTitle:
      "Directora de Marketing de las marcas prémium del grupo Heineken® Brasil.",
    highlighted: false,
    avatar: "files/vanessa-brandao.jpg"
  },
  {
    title: "Pedro Sobral",
    jobTitle:
      "Referencia en tráfico pago en Brasil y fundador de Sobral Mídias.",
    highlighted: false,
    avatar: "files/pedro-sobral.jpg"
  },
  {
    title: "Vinícius Vaz",
    jobTitle: "CEO de Eugência Hipodérmica.",
    highlighted: false,
    avatar: "files/vinicius-vaz.jpg"
  },
  {
    title: "Ellen Salomão",
    jobTitle: "CEO de la Agência Vê.",
    highlighted: false,
    avatar: "files/ellen-salomao.jpg"
  },
  {
    title: "Lina Volpini",
    jobTitle: "Gerente de Innovación y Competitividad Sebrae Minas.",
    highlighted: false,
    avatar: "files/lina-volpini.jpg"
  },
  {
    title: "Felipe Godoy",
    jobTitle: "Growth Marketing Manager en Pinterest.",
    highlighted: false,
    avatar: "files/felipe-godoy.jpg"
  },
  {
    title: 'Sandro Dias "Mineirinho"',
    jobTitle:
      "Atleta de Red Bull, emprendedor y hexacampeón mundial de skateboarding.",
    highlighted: false,
    avatar: "files/sandro-dias.jpg"
  },
  {
    title: "Luiz Felipe Pondé",
    jobTitle: "Escritor, profesor y columnista en Folha de São Paulo.",
    highlighted: false,
    avatar: "files/luiz-felipe-ponde.jpg"
  },
  {
    title: "Leila Ferreira",
    jobTitle: "Periodista y escritora.",
    highlighted: false,
    avatar: "files/leila-ferreira.jpg"
  },
  {
    title: "Padre Fábio de Melo",
    jobTitle:
      "Sacerdote católico, cantante, compositor, poeta, escritor, presentador y profesor.",
    highlighted: false,
    avatar: "files/padre-fabio.jpg"
  },
  {
    title: "Rocío Baselga",
    jobTitle: "Spain Customer Success Manager en Hotmart.",
    highlighted: false,
    avatar: "files/rocio-baselga.jpg"
  },
  {
    title: "Ícaro de Carvalho",
    jobTitle:
      "Copywriter, Estratega Digital, CEO y fundador de la escuela de negocios digitales O Novo Mercado.",
    highlighted: false,
    avatar: "files/icaro-de-carvalho.jpg"
  },
  {
    title: "Carolina Picoli",
    jobTitle: "Coordinadora de Marketing en Hotmart.",
    highlighted: false,
    avatar: "files/carolina-picoli.jpg"
  },
  {
    title: "Bruno Capanema",
    jobTitle: "CEO de Grupo Dádiva.",
    highlighted: false,
    avatar: "files/bruno-capanema.jpg"
  },
  {
    title: "Carla Salinas",
    jobTitle: "Analista de Marketing de Hotmart.",
    highlighted: false,
    avatar: "files/carla-salinas.jpg"
  },
  {
    title: "José Vinagre",
    jobTitle:
      "Growth Hacker Estratega Digital para Infoproductos y Lanzamientos.",
    highlighted: false,
    avatar: "files/jose-vinagre.jpg"
  },
  {
    title: "Carlúcio Vieira",
    jobTitle: "Copywriter y Analista de Comunidad de Hotmart.",
    highlighted: false,
    avatar: "files/carlucio-vieira.jpg"
  },
  {
    title: "Ramón Fuentes",
    jobTitle:
      "Presentador y Editor de Deportes del programa Fin de Semana en el canal  Telemadrid.",
    highlighted: false,
    avatar: "files/ramon-fuentes.jpg"
  },
  {
    title: "Pedro Ascar",
    jobTitle: "Analista de Marketing para Latinoamérica.",
    highlighted: false,
    avatar: "files/pedro-ascar.jpg"
  }
].map(s => ({ ...s, id: getObjectId(s.title) }));

module.exports = speakers;
