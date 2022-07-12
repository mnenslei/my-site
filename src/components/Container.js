import React from "react";
import img1 from '../Images/Logos.png'
import img2 from '../Images/potluck-font.svg'
import img3 from '../Images/genie.svg'
import img4 from '../Images/bitcoin.svg'

const projectData = [
    {
        id: 1,
        title: 'CoderHeroes',
        img: img1,
        alt: 'CoderHeroes Logo',
        description: 'For this project I collaborated with backend developers and built APIs ensuring user information was accurately stored. I worked in teams and created pages on the front end, tested endpoints, modified registration components and forms. Additionally, I assumed the Technical Project Manager role, organized and conducted meetings, assigned tasks to complete, and assisted with registration flow for users.',
        link: 'https://github.com/BloomTech-Labs/coder-heroes-fe'
    },
    {
        id: 2,
        title: 'Potluck Planner',
        img: img2,
        alt: 'Potluck Logo',
        description: 'Collaborating with teammates, we designed a signup and login page using React to allow users to create accounts to plan potlucks. Additionally, I conducted code reviews (JS, React) to fix bugs and provide feedback to maintain clean and concise code. Also, I validated sign-up and login pages using YUP, decreased duplicate account errors by ensuring users accurately created accounts and logins.',
        link: 'https://github.com/Potluck-planner-4-build-week/Front-end'
    },
    {
        id: 3,
        title: 'AI Genie',
        img: img3,
        alt: 'Genie Logo',
        description: `For this project I utilized NextJS to create a site that allows users to enter a prompt or question. Once entered, using OpenSea's AI API, the AI will return an answer to the given prompt. Head to the site to give it a try!`,
        link: 'https://shopify-gpt3.vercel.app/'
    },
    {
        id: 4,
        title: 'Crypto Custom Hooks',
        img: img4,
        alt: 'Bitcoin Logo',
        description: 'For this project I utilized Coin Gecko’s API using Axios, to ensure users track real-time pricing updates on Bitcoin. I styled global components via React components and CSS to provide a clean and simple design for users. Additionally, I created a custom hook that allowed users to toggle different views on the app and transition from light to dark mode.',
        link: 'https://github.com/mnenslei/web-module-project-custom-hook'
    }
]

const Container = () => {
    return (
      <div className='container'>
          <h2>Projects</h2>
          <div className='card-container'>
          {projectData.map((project) => (
                <div className='card' key={project.id}>
                    <div className='card-side front'>
                    <h3>{project.title.toLocaleUpperCase()}</h3>
                        <div className='item'>  
                        <img src={project.img} alt={project.alt}></img>
                        </div>
                    </div>
                    <div className='card-side back'>
                        <h3>{project.title}</h3>
                        <h4>My Role:</h4>
                        <p>{project.description}</p>
                        <a target='_blank' rel="noopener noreferrer" href={project.link}>Project Site Link</a>
                    </div>
              </div>
          ))}
          </div>
        </div>
    );
  };

  export default Container;