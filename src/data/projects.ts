export type Project = {
  title: string
  tagline: string
  description: string
  stack: string[]
  liveUrl?: string
  githubUrl: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Seasons of Floripa',
    tagline: '42 Berlin · Transcendence',
    description:
      'Live multiplayer fishing adventure inspired by Florianópolis. Feature Lead for Social & Profiles — auth, friends, chat, and profiles in a TypeScript monorepo.',
    stack: ['TypeScript', 'Real-time', 'Auth'],
    liveUrl: 'https://seasonsoffloripa.com',
    githubUrl: 'https://github.com/s2-AnaPereira-s2/my_transcendence',
    featured: true,
  },
  {
    title: 'DrinkMeUp',
    tagline: 'Django · Deployed',
    description:
      'Cocktail recommender with profiles, preference quiz, and full auth including Google OAuth. Live on PythonAnywhere.',
    stack: ['Python', 'Django', 'SQL'],
    liveUrl: 'https://drinkmeup.pythonanywhere.com/',
    githubUrl: 'https://github.com/s2-AnaPereira-s2/DrinkMeUp',
  },
  {
    title: 'Fuel Calculator',
    tagline: 'Android · Kotlin',
    description:
      'Multi-step trip fuel cost calculator — destination, distance, consumption, and price — with View Binding and validation.',
    stack: ['Kotlin', 'Android'],
    githubUrl: 'https://github.com/s2-AnaPereira-s2/FuelCalculator',
  },
  {
    title: 'Inventory Management',
    tagline: 'Python · SQLite',
    description:
      'CRUD inventory tool for small businesses: add, display, update, and delete products through a simple UI.',
    stack: ['Python', 'SQLite'],
    githubUrl: 'https://github.com/s2-AnaPereira-s2/inventory_management',
  },
]

export const marqueeSkills = [
  'Python',
  'Django',
  'Backend',
  'C',
  'C++',
  '42 Berlin',
  'SQL',
  'Android',
  'Kotlin',
  'TypeScript',
  'Git',
  'DevSpace',
]

export const capabilities = [
  {
    num: '01',
    title: 'Python Backend',
    body: 'One-year Python Backend course covering Django, Flask, SQL, and APIs — including deployed work such as DrinkMeUp.',
  },
  {
    num: '02',
    title: 'Software engineer at 42',
    body: 'In progress at 42 Berlin as a Software engineer — algorithms, systems thinking, C/C++, and collaborative projects including our Transcendence capstone.',
  },
  {
    num: '03',
    title: 'Android in progress',
    body: 'Learning mobile development with Kotlin at DevSpace — building practical apps such as Fuel Calculator while growing toward junior mobile roles too.',
  },
  {
    num: '04',
    title: 'Communication & ownership',
    body: '10+ years in client-facing and operations roles. Clear updates, calm debugging, and ownership when something breaks.',
  },
]
