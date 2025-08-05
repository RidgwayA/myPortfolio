import calorieTrackerImg from '../assets/calorieTracker.png';
import istwImg from '../assets/istw.png';
import sunnySkies from '../assets/sunnySkies.png';
import dumbellImg from '../assets/dumbell.png';
import bakery from '../assets/bakery.png'

export const myProjects = [

    {
    name: 'Island Settlers Trade Wars (Catan Clone)',
    description: 'A clone of the popular game catan that allows my family and friends to join my network and play the game with a new rule set!',
    tags: ['React', 'MongoDB', 'NodeJs'],
    image: istwImg,
    link: '#'
  },
  // {
  //   name: 'RV Park Booking System',
  //   description: 'A full-stack reservation app for RV parks with dynamic pricing and availability management.',
  //   tags: ['React', 'MongoDB', 'Node.js'],
  //   image: 'https://via.placeholder.com/600x300',
  //   link: '#'
  // },
        {
    name: 'Calorie Tracker App',
    description: 'A full stack web app complete with a backend utilizing Express and a front end that uses Rach and Tailwind with Typescript. This was a passion project of mine that I use daily. The project is depoloyed using docker on my home network.',
    tags: ['React', 'Express', 'NodeJs', 'TypeScript', 'SQL', 'TailwindCss', 'Docker'],
    image: calorieTrackerImg,
    link: 'https://github.com/RidgwayA/cal-tracker'
  },
    {
    name: 'Bakery Website',
    description: 'A simple bakery website that shows current pricing sheet and a gallery for customers to view. Future enhancements include an admin dashboard to give the client access to updating the pricing sheet and gallery by utilizing cloud image storage instead saving the images in the codebase.',
    tags: ['React', 'JavaScript', 'TailwindCss'],
    image: bakery,
    link: 'https://github.com/RidgwayA/ac-boutique'
  },

      {
    name: 'Easy Workout Planner',
    description: 'An Android app that allows users to plan, track, and share their workouts.',
    tags: ['Java', 'SpringBoot', 'Gradle'],
    image: dumbellImg,
    link: 'https://github.com/RidgwayA/easy-workout-planner/tree/working_branch'
  },
  {
    name: 'Sunny Skies Vacation Planner',
    description: 'A full stack Android app that allows users to plan their vacation, and activies while on vacation.',
    tags: ['Java', 'SpringBoot', 'Gradle', ],
    image: sunnySkies,
    link: 'https://github.com/RidgwayA/Ridgway-Vacation-Planner-D308'
  }
];