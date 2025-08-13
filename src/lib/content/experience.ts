import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Champion Data',
      companyUrl: 'https://www.championdata.com/home',
      role: 'Full Stack Software Engineer',
      started: 'February 2025',
      upto: 'Present',
      tasks: [
        "Developed full-stack applications for the AI/ML team, integrating with inference engines to deliver real-time in-game insights for analysts and clients.",
        "Collaborated with computer vision engineers to build an edge-based optical tracking system for Australian Rules Football at Marvel Stadium, featuring GCP cloud integration for sub-second ball tracking data feeds.",
        "Delivered a Next.js browser dashboard to visualize ball tracking data and manage venue cameras and inference workers.",
        "Worked with data analysts to create a dashboard for visualizing athlete tracking data (GPS + LPS) and applied machine learning to extract insights on player positions, matchups, using Next.js, Python, and PostgreSQL.",
        "Engaged with clients to gather requirements and delivered product demonstrations at key milestones."
      ],
    },
    {
      company: 'Australian Broadcasting Corporation',
      companyUrl: 'https://www.abc.net.au/digital-product',
      role: 'Software Engineer',
      started: 'June 2022',
      upto: 'February 2025',
      tasks: [
        "Enhanced and maintained ABC's digital API platforms, enabling robust data aggregation and content delivery for digital products.",
        "Ensured reliable external data services for content editors and digital platforms, maintaining high availability during peak traffic.",
        "Optimized systems to reduce compute costs, achieving 99.5% uptime during critical events such as elections and emergencies.",
        "Refactored data feed ingestion services by migrating from Elastic Container Services to AWS Lambda, improving efficiency and reducing costs.",
        "Integrated new API routes to deliver geospatial data in the ABC emergency web app using geohashing, increasing concurrent user capacity by nearly 100x and reducing response latency."
      ],
    },
    {
      company: 'University of Melbourne',
      companyUrl: 'https://eresearch.unimelb.edu.au/',
      role: 'Software Engineer',
      started: 'January 2021',
      upto: 'June 2022',
      tasks: [
        "Developed and supported research-focused IT systems for the University of Melbourne.",
        "Built web applications using full-stack technologies (MERN, LAMP) tailored to research requirements.",
        "Utilized Docker and Kubernetes for development and deployment, hosting applications on NeCTAR cloud.",
        "Contributed to the Australian Digital Observatory project, leveraging big data technologies (CouchDB, Knative, Kubernetes) for machine learning on large datasets (>50GB) and building REST APIs with serverless functions."
      ],
    },
    {
      company: 'Metso (formerly Outotec)',
      companyUrl: 'https://www.metso.com/',
      role: 'AI/Machine Learning Trainee Engineer',
      started: 'November 2019',
      upto: 'March 2020',
      tasks: [
        "Developed machine learning and AI software to interface with advanced process controllers via sockets.",
        "Built AI-based solutions to predict greenhouse gas emissions and provide recommendations through process controllers.",
        "Created an online learner using deep neural networks and weighted ensembles for continuous prediction optimization.",
        "Presented results to senior management and external clients.",
        "Utilized Python libraries such as Pandas, scikit-learn, and TensorFlow for software development and machine learning."
      ],
    },
  ],
};
