export const Bio = {
  name: "Rijul Soni",
  profile: "/profile.jpg",
  headline: "Software Engineer @ Jungleworks",
  roles: [
    "Full Stack Developer",
    "Backend Engineer",
    "Frontend Developer",
    "Programmer",
  ],
  description:
    "Backend engineer building quick-commerce and delivery systems. At Jungleworks I cut delivery-assignment latency 35% on Yelo, a multi-tenant marketplace serving 120+ merchants, and wired tokenized card payments across two processors. Before that I shipped enterprise SaaS features at Watermark Insights on Rails + React.",
  github: "https://github.com/rijulsoni",
  email: "rijulsoni31@gmail.com",
  resume:
    "https://drive.google.com/file/d/1iRY9rpegQ8KkN3NMdu_3u4OzA0YOwKmE/view?usp=drive_link",
  linkedin: "https://www.linkedin.com/in/rijulsoni31/",
  insta: "https://www.instagram.com/rijulsonii/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", image: "/next.svg" },
      { name: "React", image: "/pngwing.com.png" },
      { name: "Redux", image: "https://redux.js.org/img/redux.svg" },
      { name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "Tailwind", image: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: "https://nodejs.org/static/images/logo.svg" },
      { name: "Express.js", image: "/icons8-express-js-50.png" },
      { name: "Ruby on Rails", image: "/Ruby_on_Rails-Logo.wine.svg" },
      { name: "REST APIs", image: "" },
      { name: "JWT Auth", image: "https://cdn.simpleicons.org/jsonwebtokens/FFD95E" },
    ],
  },
  {
    title: "Data",
    skills: [
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Elasticsearch", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
    ],
  },
  {
    title: "Payments",
    skills: [
      { name: "Razorpay", image: "https://cdn.simpleicons.org/razorpay/0C2451" },
      { name: "Stripe", image: "https://cdn.simpleicons.org/stripe/635BFF" },
      { name: "Worldpay", image: "https://cdn.simpleicons.org/worldpay/FF9933" },
      { name: "Tookan", image: "" },
      { name: "Tokenized Cards", image: "" },
      { name: "Webhooks", image: "" },
    ],
  },
  {
    title: "Infra & Testing",
    skills: [
      { name: "Docker", image: "/docker-logo-blue.png" },
      { name: "AWS", image: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
      { name: "Linux", image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" },
      { name: "Git", image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" },
      { name: "Jest", image: "https://jestjs.io/img/jest.png" },
      { name: "RSpec", image: "https://rspec.info/images/logo.png" },
    ],
  }
];

export const experiences = [
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/C560BAQEThJ7xvHrDzA/company-logo_200_200/company-logo_200_200/0/1649138301449?e=1788393600&v=beta&t=KwWNHs-fFyI9ivz1SLBrft8BnwjQDaGAHq2cSsRcqZY",
    role: "Node.js & Express.js Intern",
    company: "Oceana Tech",
    date: "Aug 2022 - Sept 2022",
    desc: "Worked on developing and maintaining server-side applications using Node.js and Express.js, with MongoDB as the database and EJS as the templating engine.",
    achievements: [
      "Designed and shipped RESTful APIs with Node.js/Express + MongoDB, serving dynamic content via EJS server-side rendering",
      "Implemented authentication and CRUD flows across multiple modules of the product",
      "Improved API response times by writing optimized MongoDB queries",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    doc: "",
  },
  {
    id: 2,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAB1FBMVEVHcEzG1EbttHnW6DTgvVbxu1fzsVrsuWD3uHD8xW/zvmHmxlzPuVZ75pvduWjjs0PxrFP3qDPopET1sVT0wVHdv1vixlbsxlvyyUn1zWmnXCDcklHwp2bfqGDohWq6pImurLT1rULS0Wnaw4X/0Wz8v1vvnzX7skLQsnpzirf/qETtq2Htszj4pyv+vDf5qUn8qB5REVPhsoQYY5X5mTf6lzr2mjj1nU7VnXKPpYvLaEX2lh7+own7vBjdqT2A1JDZmkl0e53vpkT0ui6vq3LxoVHxlzG4jMmkh5T+ghv8ky80Z+0+X6sjV543SaZWVbZvb6hxTJRWUqz4iC/Bint548MXRJsETaQEVaQuTaZ5f3lUSpLRbi9HzOApSaMARp4CY7BAOJUmQZw8b6/OiStLZJ4GN5shPp9XY6AoWbNXjNSsx5b8fBtU5JVVc7EwSaJHiolkfZ8gabRZcLLcoVFojMFjfMCSp9J5ncqCpNCCm801hcsWh84Ic8A2d8Zteo81Y7FDd7saTLIdV6ZojMIeg8cxpLrcBL5hjbAhe81Nv9j1uHhfdtBZg6z1tn5YlKM3aLwyP4j5f1Qya78lNZc1N5UvWKAYLZQ6XKJvacJoYMhKYpQ5bGBHAAAAnHRSTlMAAQUJDyEySHKIYTwpBBx9qbzKu6CowdO+lwotUZSMbDBRnqrp786ylBhHidzElv//A1QJcL7inmpGG+P/+JUkbCrp6TR73RWmDI0cicGtV1WwKeh4D/7//8tTqX0t+P//hP9rtcD/7HXhQ273Oc/mUYT7m8eH0P/+/+W1z/7de//////9/HI0nPN0/ahf5YX1hz6T/eXu+qY8iksoEy9aAAACJElEQVR4AXxQAwLDQBDc2FZt21ac/7+oqd05rAlXIJcfQeA/0BN+2DCcICmaYRiW4wlceDYhAILISbKiarKsG6ZlJZIskUqLV+vJnMnKuXyhQBXpZKlUNsxK1ZJq9bSIn/qCFNXIZppiq611Ot1uvdfr6bpW7Q8GisEBDEFk26OxOJnOavPFsjk+pRyOV5P1ZrPd7WNepBciFKcz5WAP4Q6B6zqOy5968Kgx7gfqQYTLEvZ2eOqM9KO8lEZi9tgHPTRUEIVhAH6/Cbtpn/bZtm1dZdt1bdv+sWmQpp7N8flQiOmZjspB4jKenZufX1gsAGFpeaW5jAAiZnx1bZ1/zixsyOQyhRKoXlBVc8GoZnWzFRza2t7Z3ZVvzKFsb/+AehgAmO44bBU7sn50LJfvnCwyp9tn5+AuXFxegSBcWbk+Pr65nb67332YBFfVYztIOB58elZrtDq9wbhrOgenaLVC+GDdbLFabTt2h/re6HSB19JI4Ln0SvfYlUe2Y9V6fSx4FX7hArdFFNixaD0EEi+w4ryAJbYZQZlF8wRRcahVuMA1i32QWRxhiJjOHnwzG5HdW6L4FCvCV61xmVye2MOn5mkICMCBXSbfSC5BAhEBwZQstZFYqJa8AKzPbd/MXadvlrj1L92ZG9V59iZ9ykhdaM7mHubyPVAcm8sgcaG5rHtpZR142DcXQFJrGQsgGLmVPBf+9F1vAQzhLyVP1fiXxNNX+wFrDJbv/+UAAAAASUVORK5CYII=",
    role: "MERN Stack Intern",
    company: "Excellence Technology",
    date: "March 2023 - July 2023",
    desc: "Worked on developing full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Involved in both front-end and back-end development, implementing features, debugging, and optimizing applications.",
    achievements: [
      "Built end-to-end features across the MERN stack — from React UI to Express/MongoDB APIs",
      "Integrated third-party services and improved application responsiveness",
      "Reduced defect turnaround by systematically debugging and optimizing shared code paths",
    ],
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    doc: "",
  },
  {
    id: 3,
    img: "/wm.png",
    role: "Associate Software Engineer",
    company: "Watermark Insights",
    date: "July 2023 - Dec 2024",
    desc: "Worked as an Associate Software Engineer with a focus on developing and maintaining applications using Ruby on Rails, PostgreSQL, MongoDB, React, Redux, and Docker. Involved in both backend and frontend development, database management, and containerization of applications. Utilized Jest for JavaScript testing, RSpec for Ruby testing, and Jbuilder for JSON responses.",
    achievements: [
      "Ship full-stack features on a SaaS platform (Ruby on Rails + PostgreSQL/MongoDB, React + Redux) serving enterprise education customers",
      "Containerized services with Docker, enabling consistent local-to-production deployment and faster onboarding",
      "Maintain robust test suites with RSpec and Jest, keeping regressions out of production releases",
      "Serialize efficient JSON APIs with Jbuilder and collaborate in code reviews to uphold engineering standards",
    ],
    skills: [
      "Ruby",
      "Ruby on Rails",
      "PostgreSQL",
      "MongoDB",
      "React.js",
      "Redux",
      "Docker",
      "Git",
      "Jest",
      "RSpec",
      "Jbuilder",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    doc: "",
  },
  {
    id: 4,
    img: "https://media.licdn.com/dms/image/v2/C560BAQHKf29jKPqWCA/company-logo_200_200/company-logo_200_200/0/1644905455645/jungleworks_logo?e=1788393600&v=beta&t=mTroWSm6xRGxQ55KTXHFqWM0_v6fjbD7IzpzPqoccis",
    role: "Software Engineer",
    company: "Jungleworks",
    location: "Mohali, Punjab",
    date: "June 2025 – Present",
    desc: "Engineering core modules for Yelo, a SaaS-based multi-vendor marketplace platform powering e-commerce, food, and hyperlocal delivery businesses.",
    achievements: [
      "Optimized quick-commerce workflows reducing delivery assignment latency by 35% through Node.js API improvements and MySQL query optimization",
      "Implemented geofencing, location-based filtering, and real-time inventory synchronization for hyperlocal serviceability",
      "Deployed and maintained applications on AWS servers, managing MySQL, Elasticsearch, and Redis for high availability",
      "Integrated multiple payment gateways (Razorpay, Stripe) and Tookan for automated delivery tracking",
    ],
    skills: [
      "Node.js",
      "MySQL",
      "Elasticsearch",
      "Redis",
      "AWS",
      "Razorpay",
      "Stripe",
      "Tookan",
      "Geofencing",
      "JavaScript",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABm1BMVEVHcEzweSXzdB3yeSTwdyHydx/odSPvcxftdyXtdBv1dx7vdRzvdBrpchnobg/sdB7xeSPvdR7snm7spXvuvZzrjVPwcxLvZRXqfzrshUTtlWHtuJX0eiXtrofybxa4t8TV4ut5g6ftdBzvdRvnPQkAT7nU4ez1/fve5ejZ5O3vyK3m7vC2vMypsMLx+Pj4//7V3+rBx9SWnLPK0NqDiaW5wdRud51CSXnU2+Kmq7ZZZZUAAE9zepyTnLmJkKxnbIpNVIOutMQPQVbFz95XXYtpcpggKmonLm4IEF3W3+je5u3Y4eoAE2IlL2waJmkWGWVoaoEFFWA3PGd2eYzFyclkNkhMK01QMlVYQGGBRUAkL22ATFa7YjuQUU0kL25rS2P10rwKXRUlXCUTUkYJVzoAWi4ZUk4GVxL2eCWCawAvcBMxgToAbwsEchcmfTE8hkRPjlWRuJYWdiNwcBbmdyVlWxpnnW6oyay607yCrYYbYBsAVBYATRR5qH5ypXgJUxUMVBUAdRkAcxUAdRcDeBoLTxQJYxgKUhP///9Y9ODzAAAAiXRSTlMA8BFuqCr/mf/LPbXV//75iOL/////ehr/////XP9OXNdQ68AIC8v//8n//P///v+D/////pl5//z+Mv7/meX//v8Ub///62F1rNurvP//lKX////+/v7+/v6v/v7+Rf7+NYX//v72S/////////////7//v96/v7+/mvJ/////yTkzLem4f89B4IuR+gAAAKdSURBVHgBhJHDokVVGIC/f2F7X9s3uybZTXPDZvUYme+QNYvzHiHb1rUPts5eK1vf6Df5P+RvqgeU+4cALQOsQNsSikifnzG/RWrS8gePR9WtJ/lbwEgPlVgRHFkpZfBbYQCmexib6gh75BMsaSxmoqP8rzNYHWMims64CNL32XaQHFSotvm5grJOJapOwiFrjTFJ8JnRblYKP330c4BoPzzQ/ts8Nsa0gZFkp2wZVOkWPwd4ImXbrbOIjNYq6CfJwlrbZFlT/hwAqSX/9hxjeiqqqrDO2mZprYWoHq+dYikaTmfqzy44bKNEN1UY0VSqczFVrf1BgMI6V2/GmKAwFC5KjHSakbR7cTPVG6adVnwOM72tK+yo6hULE8TWRBTjYy2N2JA9DXFWFO0JEqwHi+Zb54rhyaQNw2ThTT97lB8ZSBTTX0vI6aXWiwC2mViLRsFsk28qOCyp4HBvLbK9JI530k92NH2Bss2/QS1JgM/xu0dzR3rk/Y29+sOTB5JZ/w067vhUd41N/bd+fGVoa2drz3ZXi/52u7WcVK9gMl1oM7vlVaHdy1cztSRekMUl1RrfTIABZsza0FgncJB3c/HiFQDmAAPTVd98pn05XoXVgB8+5QLVEycDF9ZN9QLTA9MtECAbdm6TG7u+BLxAMcroU4QpdRcNC5Vz/YZ3lm2hOoH4gSJSz6AmJg8qcQKRi2548fC8ZREEAY/XUn/18lDZVDNfCyxchcjP3taIuIE2NB5cLI/uI3CTjPcyEQ+IOPF1KN5TY4t8lwcVPD4b6krZoFsVnV5Z96Xul93Q52BnZhGAO/fwMCkiAOC93wHxYxsPIsD9dVgR3MqfuHkxpELuMnCX+hpO+Jg/s7QOsIKB79eAnuM7wORMCAUAKuwpunvqeC8AAAAASUVORK5CYII=",
    school:
      "Atal Bihari Vajpayee Govt Institute of Engineering & Technology, Shimla",
    date: "Aug 2019 - July 2023",
    grade: "7.6 CGPA",
    desc: "I completed my B.Tech in Computer Science and Engineering from Atal Bihari Vajpayee Govt Institute of Engineering & Technology, Shimla. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "/lmps.webp",
    school: "Laxmi memorial public school, Bhoti",
    date: "April 2018 - March 2019",
    grade: "81.4 %",
    desc: "I completed my Class 12th in the Non-Medical stream, focusing on subjects like Physics, Chemistry, Mathematics, and Computer Science.",
    degree: "Class 12th - Non-Medical",
  },
  {
    id: 2,
    img: "/lmps.webp",
    school: "Laxmi memorial public school, Bhoti",
    date: "April 2016 - March 2017",
    grade: "90 %",
    desc: "I completed my Class 10th with a strong foundation in subjects like Mathematics, Science, English, and Social Studies.",
    degree: "Class 10th",
  },
];

export const projects = [
  {
    id: 0,
    title: "Store4you",
    date: "April 2023 - July 2023",
    description:
      "Store4you is an ecommerce platform designed to provide a seamless shopping experience for electronics products. It offers a wide range of items including speakers, earbuds, power banks, and more. The platform features an easy-to-use interface with secure payment processing through Stripe. Built with React, Node.js, and MongoDB, Store4you ensures fast and reliable performance. The application is hosted on Render and can be accessed anywhere for a hassle-free shopping experience.",
    image: "/ecom store.png",
    tags: [
      "Stripe",
      "React JS",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    category: "web app",
    github: "https://github.com/rijulsoni/majorproject/",
    webapp: "https://rijul-store.onrender.com/",
  },
    {
      id: 1,
      title: "UI Components Library in Storybook",
      date: "November 2023 - Present",
      description:
        "This project involves creating a reusable UI components library for building scalable web applications. The components are built using React and styled with CSS modules, ensuring modularity and flexibility. Storybook is used for live documentation, enabling developers to easily test, explore, and customize each component. The library includes buttons, form elements, modals, and more, making it easier to maintain consistent UI across projects.",
      image: "/uilib.png",
      tags: [
        "React JS",
        "Storybook",
        "CSS Modules",
        "UI Components",
        "Design Systems"
      ],
      category: "UI Library",
      github: "https://github.com/rijulsoni/rijul-ui",
      webapp: "https://rijul-ui-lib.netlify.app/"
    },
    {
      id: 2,
      title: "Node Express EJS App",
      date: "March 2022 - April 2022",
      description:
        "This project is a dynamic web application built with Node.js, Express, and EJS (Embedded JavaScript). It leverages Express as the web framework for handling routes and HTTP requests, while EJS is used as the templating engine to render dynamic content on the server side. The project demonstrates how to integrate server-side rendering with modern JavaScript technologies.",
      image: "/nodejs.png",
      tags: [
        "Node JS",
        "Express JS",
        "EJS",
        "JavaScript",
        "HTML",
        "CSS"
      ],
      category: "Web App",
      github: "https://github.com/rijulsoni/newsnodejs",
      webapp: "https://newsnodejs.onrender.com/"
    },
    {
      id: 3,
      title: "Blog App",
      date: "April 2025 - Present",
      description:
        "This is a dynamic blog application built with Next.js. The app provides a seamless experience for posting, managing blog content, and creating rich-text formatted posts using a rich text editor. It leverages Next.js features such as server-side rendering, static site generation, and dynamic routing to ensure optimized performance and SEO friendliness. The project aims to provide a fast and interactive user interface for blog users.",
      image: "/blogapp.png",
      tags: [
        "Next.js",
        "React",
        "JavaScript",
        "CSS",
        "Web App",
        "Rich Text Editor"
      ],
      category: "Web App",
      github: "https://github.com/rijulsoni/blog-app",
      webapp: "https://blogbyrijul.vercel.app/"
    }
  ];



