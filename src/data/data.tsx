import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header.jpg'

import VideshGuru from '../images/portfolio/VideshGuru.png'
import UrbanBazaar from '../images/portfolio/UrbanBazaar.png'
import JobApplicationTracker from '../images/portfolio/JobApplicationTracker.png'
import DictionaryWebApp from '../images/portfolio/DictionaryWebApp.png'
import TechImpactSurvery from '../images/portfolio/TechImpactSurveyr.png'

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Udit Portfolio',
  description: "Udit portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Udit Sahani.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bangkok based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        on <strong className="text-stone-100">Logistics Management System</strong> helping build a modern, one stop, email conversation free freight and logistics booking platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me playing <strong className="text-stone-100">Badminton</strong> or exploring beautiful{' '}
        <strong className="text-stone-100">Beautiful Mountains of Thailand</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `💻 Full Stack Developer | MERN | Python | SQL | Data Analytics 📊 | B.sc IT 🎓 | Based in Bangkok 🇹🇭 | Passionate about clean code, AI, and building impactful web apps 🌍`,
  aboutItems: [
    {label: 'Location', text: 'Bangkok, Thailand', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Badminton, Overland', Icon: SparklesIcon},
    {label: 'Study', text: 'Siam University (มหาวิทยาลัยสยาม)', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Full Stack Engineer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Thai',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'JavaScript, Typescript, React, Nextjs',
        level: 9,
      },
      {
        name: 'HTML, CSS, Bootstrap, TailwindCSS',
        level: 10,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend & Databases',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'SQL, SQL Server',
        level: 7,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
    ],
  },
  {
    name: 'Others',
    skills: [
      {
        name: 'Git, Jira, IIS Server, CI/CD, AWS, Docker, Nginx',
        level: 8,
      },
      {
        name: 'Communication, Presentation',
        level: 10,
      },
      {
        name: 'Marketing & SEO',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Urban Bazaar',
    description: 'Full Fledge E-commerce website using React, Nodejs, Express and MongoDB.',
    url: 'https://fullstack-e-commerce-website-reactjs-firebase.vercel.app/',
    image: UrbanBazaar,
  },
  {
    title: 'Videsh Guru',
    description: 'Study Abroad consultant website with a course searching system.',
    url: 'https://videshguru.com/',
    image: VideshGuru,
  },
  {
    title: 'Job Application Tracker',
    description: 'Job Application Tracker Web App for job & internship applicants.',
    url: 'https://job-application-tracker-rouge.vercel.app/',
    image: JobApplicationTracker,
  },
  {
    title: 'Dictionary Web App',
    description: 'Dictionary website to learn English with pronunciation and definition.',
    url: 'https://dictionary-api-theta.vercel.app/',
    image: DictionaryWebApp,
  },
  {
    title: 'Thai Tech Impact Survery',
    description: 'Thailand Tech Impact Survery website using PHP and SQL.',
    url: 'https://thailand-impact-survey.vercel.app/',
    image: TechImpactSurvery,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Jan 2021 - Dec 2024',
    location: 'Siam University',
    title: 'Bachelor in Information Technology',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2024 - Present',
    location: 'Multinational Logistics Company (Name Withheld)',
    title: 'Full Stack Engineer',
    content: (
      <p>
        Working as a Full Stack Engineer and Building Logisitics bookings and management web applications.
      </p>
    ),
  },
  {
    date: 'July 2024 - December 2024',
    location: 'Arcelik Hitachi, Bangkok',
    title: 'Web Developer Intern',
    content: (
      <p>Worked as a Web Developer Intern at this multinational, multimillion-dollar company. Fixed bugs on websites for various Arçelik Hitachi country branches and contributed to upcoming global website projects.</p>
    ),
  },
  {
    date: 'April 2022 - November 2022',
    location: 'Siam University, Bangkok',
    title: 'Web Developer Intern',
    content: (
      <p>Worked as a Web Developer Intern at this University in Bangkok. Built a new website and admission application system for the university.</p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'uditrsahani@gmail.com',
      href: 'mailto:uditrsahani@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bangkok, Thailand',
      href: '#',
    },
    {
      type: ContactType.Instagram,
      text: '@uditsahani',
      href: 'https://www.instagram.com/uditsahani/',
    },
    {
      type: ContactType.Github,
      text: 'uditrsahani',
      href: 'https://github.com/uditrsahani',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/uditsahani'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/30435059/udit-sahani'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/uditsahani/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/uditsahani/'},
  {label: 'Twitter', Icon: TwitterIcon, href: '#'},
];
