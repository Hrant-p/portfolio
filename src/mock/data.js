import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: "Hrant's portfolio",
  lang: 'eng',
  description: 'Welcome to my portfolio website',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Hrant',
  subtitle: "And I'm a Front-End / React JS Developer.",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I have learned Front-end development from 2018 to 2020 January , and have been worked' +
    ' Front-end / React JS developer from' +
    ' 2020 March to April. ' +
    ' For more details can you see below in my Resume.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/open?id=1GAtzf-jgSzI_guFiaKK8irtCOxlklzjm', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'memory-game.png',
    title: 'Memory Card Game',
    info:
      'Memory Card Game is a memory game where you need to match pairs of tiles. Playing is' +
      ' very simple - you turn over one tile and then try to find a matching tile.\n' +
      'When you click on the first tile of a turn and you have exposed a matching tile in a ' +
      'previous turn. This indicates that you should then be able to make a match (if you ' +
      'have perfect recall).',
    info2: '',
    url: 'https://hrant-p.github.io/memory-game-master',
    repo: 'https://github.com/Hrant-p/memory-game-master', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'beers.png',
    title: 'Beers App',
    info:
      'Beer bank App is beers catalog site where you can see beer details, search by ' +
      'parameters, select as favourite and etc. Has been used React JS, Redux-Saga, lodash etc.',
    info2: '',
    url: 'https://hrant-p.github.io/beers',
    repo: 'https://github.com/Hrant-p/beers', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'sport.png',
    title: 'Sports Score Project',
    info:
      'This project is an application that shows the scores of sports matches by sports and countries.',
    info2: '',
    url: 'https://hrant-p.github.io/sports-score-app',
    repo: 'https://github.com/Hrant-p/sports-score-app', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'event-finder.png',
    title: 'Event Finder App',
    info:
      'This project is an application that allows you to register, login and access a panel from' +
      ' which you will be able to search by Eventbrite API, by address and name, to search' +
      ' for upcoming events, see their location on the map.  ' +
      ' !! Attention: Since December 2019, the ability to search through the' +
      ' Eventbrite API has been temporarily suspended and it may not work ․',
    info2: '',
    url: 'https://event-finder-89e7f.web.app/',
    repo: 'https://github.com/Hrant-p/event-finder', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'microposts.png',
    title: 'Microposts App',
    info:
      'The project is developed with Vanilla Javascript ( SPA ), it is for creating, storing' +
      ' and deleting microposts. I Have used Firebase, Webpack, Babel etc..',
    info2: '',
    url: 'https://microposts-2020.web.app/',
    repo: 'https://github.com/Hrant-p/microposts', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'todo-list.png',
    title: 'To-Do List Project',
    info:
      'To-do list is an multi language app that contain all of the tasks that you' +
      ' need to complete. You may delete, create or highlight it as done.',
    info2: '',
    url: 'https://hrant-p.github.io/todo-list',
    repo: 'https://github.com/Hrant-p/todo-list', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hrant.poghosyan@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/HrantPoghosyan',
    },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hrant-poghosyan-995235173/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Hrant-p',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
