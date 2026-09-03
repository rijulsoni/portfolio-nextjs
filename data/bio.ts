// Single source of truth for every piece of portfolio content.
// Components read from here — nothing below should contain markup or styling.

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Skill = { name: string; image: string; mono?: boolean }

type SkillGroup = { title: string; skills: Skill[] }

type Experience = {
  id: number
  img: string
  role: string
  company: string
  /** Free-form tenure string, e.g. "June 2025 – Present". */
  date: string
  location?: string
  desc: string
  achievements: string[]
  skills: string[]
}

type Education = {
  id: number
  img: string
  school: string
  degree: string
  date: string
  grade: string
  desc: string
}

type Project = {
  id: number
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  category: string
  github: string
  webapp: string
}

/* -------------------------------------------------------------------------- */
/*                                    Bio                                     */
/* -------------------------------------------------------------------------- */

export const Bio = {
  name: 'Rijul Soni',
  profile: '/profile.png',
  headline: 'Software Engineer @ Jungleworks',
  roles: [
    'Full Stack Developer',
    'Backend Engineer',
    'Frontend Developer',
    'Programmer',
  ],
  description:
    'Full-stack engineer building quick-commerce and hyperlocal delivery systems \u2014 React and Next.js on top, Node, Rails, and MySQL underneath. On Yelo, a multi-tenant marketplace behind 120+ merchant storefronts, I cut delivery-assignment latency 35%, gave merchants one catalogue across every store, and put three payment processors behind a single tokenized interface.',
  github: 'https://github.com/rijulsoni',
  email: 'sonirijul1@gmail.com',
  resume:
    'https://drive.google.com/file/d/1iRY9rpegQ8KkN3NMdu_3u4OzA0YOwKmE/view?usp=drive_link',
  linkedin: 'https://www.linkedin.com/in/rijulsoni31/',
  insta: 'https://www.instagram.com/rijulsonii/',
}

/* -------------------------------------------------------------------------- */
/*                                   Skills                                   */
/* -------------------------------------------------------------------------- */

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Next.js', image: '/icons/nextjs.svg', mono: true },
      { name: 'React', image: '/icons/react.svg' },
      { name: 'Redux', image: '/icons/redux.svg' },
      { name: 'TypeScript', image: '/icons/typescript.svg' },
      { name: 'JavaScript', image: '/icons/javascript.svg' },
      { name: 'Tailwind', image: '/icons/tailwindcss.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', image: '/icons/nodejs.svg' },
      { name: 'Express.js', image: '/icons/express.svg', mono: true },
      { name: 'Ruby on Rails', image: '/icons/rails.svg' },
      { name: 'REST APIs', image: '' },
      { name: 'JWT Auth', image: '/icons/jwt.svg', mono: true },
    ],
  },
  {
    title: 'Data',
    skills: [
      { name: 'MySQL', image: '/icons/mysql.svg' },
      { name: 'PostgreSQL', image: '/icons/postgresql.svg' },
      { name: 'MongoDB', image: '/icons/mongodb.svg' },
      { name: 'Redis', image: '/icons/redis.svg' },
      { name: 'Elasticsearch', image: '/icons/elasticsearch.svg' },
    ],
  },
  {
    title: 'Payments',
    skills: [
      { name: 'Razorpay', image: '/icons/razorpay.svg' },
      { name: 'Stripe', image: '/icons/stripe.svg' },
      { name: 'Worldpay', image: '/icons/worldpay.png' },
      { name: 'Tookan', image: '' },
      { name: 'Tokenized Cards', image: '' },
      { name: 'Webhooks', image: '' },
    ],
  },
  {
    title: 'Infra & Testing',
    skills: [
      { name: 'Docker', image: '/icons/docker.svg' },
      { name: 'AWS', image: '/icons/aws.svg' },
      { name: 'Linux', image: '/icons/linux.svg', mono: true },
      { name: 'Git', image: '/icons/git.svg' },
      { name: 'Jest', image: '/icons/jest.svg' },
      { name: 'RSpec', image: '/icons/rspec.png' },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                                 Experience                                 */
/* -------------------------------------------------------------------------- */

// Oldest first — the timeline renders in array order.
export const experiences: Experience[] = [
  {
    id: 1,
    img: '/1649138301449.jpeg',
    role: 'Node.js & Express.js Intern',
    company: 'Oceana Tech',
    date: 'Aug 2022 – Sept 2022',
    desc: 'Developed and maintained server-side applications using Node.js and Express.js, with MongoDB as the database and EJS as the templating engine.',
    achievements: [
      'Designed and shipped RESTful APIs with Node.js/Express and MongoDB, serving dynamic content via EJS server-side rendering',
      'Implemented authentication and CRUD flows across multiple modules of the product',
      'Improved API response times by rewriting slow MongoDB queries against the right indexes',
    ],
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
  },
  {
    id: 2,
    img: '/download.png',
    role: 'MERN Stack Intern',
    company: 'Excellence Technology',
    date: 'March 2023 – July 2023',
    desc: 'Built full-stack web applications on the MERN stack (MongoDB, Express.js, React.js, Node.js), working across both front-end and back-end — implementing features, debugging, and optimizing applications.',
    achievements: [
      'Built end-to-end features across the MERN stack — from React UI down to Express/MongoDB APIs',
      'Integrated third-party services and improved application responsiveness',
      'Reduced defect turnaround by systematically debugging and optimizing shared code paths',
    ],
    skills: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
  },
  {
    id: 3,
    img: '/wm.png',
    role: 'Associate Software Engineer',
    company: 'Watermark Insights',
    date: 'July 2023 – Dec 2024',
    desc: 'Built and maintained an enterprise education SaaS platform across two backend stacks — Ruby on Rails and Node.js/Express.js — with PostgreSQL and MongoDB behind them and React + Redux on the front end. Owned backend and frontend work, database changes, and Docker containerization, with RSpec and Jest for tests and Jbuilder for JSON responses.',
    achievements: [
      'Shipped full-stack features on a SaaS platform (Ruby on Rails + PostgreSQL/MongoDB, React + Redux) serving enterprise education customers',
      'Built and maintained Node.js/Express.js services alongside the Rails application, writing REST endpoints in both stacks against shared data',
      'Containerized services with Docker, enabling consistent local-to-production deployment and faster onboarding',
      'Maintained robust test suites with RSpec and Jest, keeping regressions out of production releases',
      'Serialized efficient JSON APIs with Jbuilder and collaborated in code reviews to uphold engineering standards',
    ],
    skills: [
      'Ruby',
      'Ruby on Rails',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'React.js',
      'Redux',
      'Docker',
      'Git',
      'Jest',
      'RSpec',
      'Jbuilder',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
  {
    id: 4,
    img: '/icons/jungleworks.png',
    role: 'Software Engineer',
    company: 'Jungleworks',
    location: 'Mohali, Punjab',
    date: 'June 2025 – Present',
    desc: 'Engineering core modules for Yelo, a SaaS multi-vendor marketplace platform powering e-commerce, food, and hyperlocal delivery businesses.',
    achievements: [
      'Optimized quick-commerce workflows, reducing delivery-assignment latency by 35% through Node.js API improvements and MySQL query optimization',
      'Built Master Brand, a centralized catalogue layer where a merchant defines a product once and propagates it across every store — replacing per-store duplicate entry with one source of truth',
      'Implemented geofencing, location-based filtering, and real-time inventory synchronization for hyperlocal serviceability',
      'Integrated Elasticsearch for product search across the merchant catalogue',
      'Built storefront merchandising \u2014 top-selling product shelves, category browsing with live in-stock counts, and frequently-bought-together recommendations computed from order co-occurrence',
      'Integrated multiple payment gateways (Razorpay, Stripe, Worldpay) and Tookan for automated delivery tracking',
      'Shipped loyalty-point redemption on products and customer subscriptions with autopay, plus webhooks for real-time notifications',
      'Deployed and maintained applications on AWS, managing MySQL, Elasticsearch, and Redis for high availability',
      'Implemented and maintained RESTful APIs, ensuring secure and efficient data exchange between frontend and backend systems',
    ],
    skills: [
      'Node.js',
      'MySQL',
      'Elasticsearch',
      'Redis',
      'AWS',
      'Razorpay',
      'Stripe',
      'Worldpay',
      'JavaScript',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                                 Education                                  */
/* -------------------------------------------------------------------------- */

// Inlined so the college crest never 404s; it is a 32×32 PNG, ~1.3 KB.
const ABVGIET_CREST = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABm1BMVEVHcEzweSXzdB3yeSTwdyHydx/odSPvcxftdyXtdBv1dx7vdRzvdBrpchnobg/sdB7xeSPvdR7snm7spXvuvZzrjVPwcxLvZRXqfzrshUTtlWHtuJX0eiXtrofybxa4t8TV4ut5g6ftdBzvdRvnPQkAT7nU4ez1/fve5ejZ5O3vyK3m7vC2vMypsMLx+Pj4//7V3+rBx9SWnLPK0NqDiaW5wdRud51CSXnU2+Kmq7ZZZZUAAE9zepyTnLmJkKxnbIpNVIOutMQPQVbFz95XXYtpcpggKmonLm4IEF3W3+je5u3Y4eoAE2IlL2waJmkWGWVoaoEFFWA3PGd2eYzFyclkNkhMK01QMlVYQGGBRUAkL22ATFa7YjuQUU0kL25rS2P10rwKXRUlXCUTUkYJVzoAWi4ZUk4GVxL2eCWCawAvcBMxgToAbwsEchcmfTE8hkRPjlWRuJYWdiNwcBbmdyVlWxpnnW6oyay607yCrYYbYBsAVBYATRR5qH5ypXgJUxUMVBUAdRkAcxUAdRcDeBoLTxQJYxgKUhP///9Y9ODzAAAAiXRSTlMA8BFuqCr/mf/LPbXV//75iOL/////ehr/////XP9OXNdQ68AIC8v//8n//P///v+D/////pl5//z+Mv7/meX//v8Ub///62F1rNurvP//lKX////+/v7+/v6v/v7+Rf7+NYX//v72S/////////////7//v96/v7+/mvJ/////yTkzLem4f89B4IuR+gAAAKdSURBVHgBhJHDokVVGIC/f2F7X9s3uybZTXPDZvUYme+QNYvzHiHb1rUPts5eK1vf6Df5P+RvqgeU+4cALQOsQNsSikifnzG/RWrS8gePR9WtJ/lbwEgPlVgRHFkpZfBbYQCmexib6gh75BMsaSxmoqP8rzNYHWMims64CNL32XaQHFSotvm5grJOJapOwiFrjTFJ8JnRblYKP330c4BoPzzQ/ts8Nsa0gZFkp2wZVOkWPwd4ImXbrbOIjNYq6CfJwlrbZFlT/hwAqSX/9hxjeiqqqrDO2mZprYWoHq+dYikaTmfqzy44bKNEN1UY0VSqczFVrf1BgMI6V2/GmKAwFC5KjHSakbR7cTPVG6adVnwOM72tK+yo6hULE8TWRBTjYy2N2JA9DXFWFO0JEqwHi+Zb54rhyaQNw2ThTT97lB8ZSBTTX0vI6aXWiwC2mViLRsFsk28qOCyp4HBvLbK9JI530k92NH2Bss2/QS1JgM/xu0dzR3rk/Y29+sOTB5JZ/w067vhUd41N/bd+fGVoa2drz3ZXi/52u7WcVK9gMl1oM7vlVaHdy1cztSRekMUl1RrfTIABZsza0FgncJB3c/HiFQDmAAPTVd98pn05XoXVgB8+5QLVEycDF9ZN9QLTA9MtECAbdm6TG7u+BLxAMcroU4QpdRcNC5Vz/YZ3lm2hOoH4gSJSz6AmJg8qcQKRi2548fC8ZREEAY/XUn/18lDZVDNfCyxchcjP3taIuIE2NB5cLI/uI3CTjPcyEQ+IOPF1KN5TY4t8lwcVPD4b6krZoFsVnV5Z96Xul93Q52BnZhGAO/fwMCkiAOC93wHxYxsPIsD9dVgR3MqfuHkxpELuMnCX+hpO+Jg/s7QOsIKB79eAnuM7wORMCAUAKuwpunvqeC8AAAAASUVORK5CYII='

export const education: Education[] = [
  {
    id: 0,
    img: ABVGIET_CREST,
    school:
      'Atal Bihari Vajpayee Govt Institute of Engineering & Technology, Shimla',
    degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
    date: 'Aug 2019 – July 2023',
    grade: '7.6 CGPA',
    desc: 'B.Tech in Computer Science and Engineering. Coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.',
  },
  {
    id: 1,
    img: '/lmps.webp',
    school: 'Laxmi Memorial Public School, Bhoti',
    degree: 'Class 12th - Non-Medical',
    date: 'April 2018 – March 2019',
    grade: '81.4 %',
    desc: 'Non-Medical stream — Physics, Chemistry, Mathematics, and Computer Science.',
  },
  {
    id: 2,
    img: '/lmps.webp',
    school: 'Laxmi Memorial Public School, Bhoti',
    degree: 'Class 10th',
    date: 'April 2016 – March 2017',
    grade: '90 %',
    desc: 'Foundation coursework in Mathematics, Science, English, and Social Studies.',
  },
]

/* -------------------------------------------------------------------------- */
/*                              Personal projects                             */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: 0,
    title: 'Store4you',
    date: 'April 2023 – July 2023',
    description:
      'An electronics ecommerce platform — speakers, earbuds, power banks and more — with Stripe checkout behind a React front end and a Node/Express + MongoDB API. Hosted on Render.',
    image: '/ecom store.png',
    tags: ['Stripe', 'React JS', 'MongoDB', 'Node JS', 'Express JS'],
    category: 'Web App',
    github: 'https://github.com/rijulsoni/majorproject/',
    webapp: 'https://rijul-store.onrender.com/',
  },
  {
    id: 1,
    title: 'UI Components Library in Storybook',
    date: 'November 2023 – Present',
    description:
      'A reusable React component library — buttons, form elements, modals — styled with CSS Modules and documented live in Storybook, so components can be tested and customized in isolation before landing in an app.',
    image: '/uilib.png',
    tags: [
      'React JS',
      'Storybook',
      'CSS Modules',
      'UI Components',
      'Design Systems',
    ],
    category: 'UI Library',
    github: 'https://github.com/rijulsoni/rijul-ui',
    webapp: 'https://rijul-ui-lib.netlify.app/',
  },
  {
    id: 2,
    title: 'Node Express EJS App',
    date: 'March 2022 – April 2022',
    description:
      'A server-rendered news application: Express handles routing and HTTP, EJS renders dynamic content on the server. Built to work through server-side rendering end to end without a client-side framework.',
    image: '/nodejs.png',
    tags: ['Node JS', 'Express JS', 'EJS', 'JavaScript', 'HTML', 'CSS'],
    category: 'Web App',
    github: 'https://github.com/rijulsoni/newsnodejs',
    webapp: 'https://newsnodejs.onrender.com/',
  },
  {
    id: 3,
    title: 'Blog App',
    date: 'April 2025 – Present',
    description:
      'A blogging app on Next.js with a rich-text editor for authoring posts, using server-side rendering, static generation, and dynamic routing for fast loads and clean SEO.',
    image: '/blogapp.png',
    tags: [
      'Next.js',
      'React',
      'JavaScript',
      'CSS',
      'Web App',
      'Rich Text Editor',
    ],
    category: 'Web App',
    github: 'https://github.com/rijulsoni/blog-app',
    webapp: 'https://blogbyrijul.vercel.app/',
  },
]
