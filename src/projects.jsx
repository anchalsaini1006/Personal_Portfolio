import React from 'react'
import Card from './Card';
import mobile from"./images/Mobile.jpg"
import job from"./images/Job.jpg"
import todo from "./images/Todo.jpg"
import portfolio from"./images/Portfolio.jpg"
import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: mobile,
          altText: 'Mobile Store',
          title: 'Mobile Store',
          description: 'A dynamic and responsive mobile website showcasing cart, price, customer reviews, and contact information.',
          explore:"https://github.com/anchalsaini1006/e-commerce-website.git"
        },
        {
          imageUrl:job,
          altText: 'Jobs',
          title: 'Job Platform',
          description: '"A robust job platform built with the MERN stack, enabling seamless job postings, applications, and user management. Features include real-time updates, search filters, and secure authentication for employers and job seekers.."',
          explore:"https://github.com/anchalsaini1006/JOB_PORTAL.git"

        },
        {
          imageUrl: todo,
          altText: 'Canyons',
          title: 'Todo App',
          description: "User create a todo , update, edit and delete with authtication. and user can watch job application response",
          explore:"https://github.com/anchalsaini1006/Nested-Todo.git"
        },
        {
            imageUrl: portfolio,
            altText: 'wise_way',
            title: 'Animated Portfolio',
            description: "An interactive and visually appealing animated portfolio built with React, showcasing skills, projects, and experiences through dynamic transitions and engaging animations. Designed to deliver a memorable and immersive user experience.",
            explore:"https://github.com/anchalsaini1006/Animated-Portfolio-Project.git"
          }
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
