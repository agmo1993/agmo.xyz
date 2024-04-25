import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Australian Broadcasting Corporation',
      companyUrl: 'https://www.abc.net.au/digital-product',
      role: 'Software Engineer',
      started: 'june 2022',
      upto: 'present',
      tasks: [
        "Enhanced and maintained the ABC's digital API platforms to successfully deliver data aggregation and content delivery services for ABC digital products.",
        'Ensured reliable provision of external data as a service to content editors and digital platforms, even during periods of high traffic and spikes in traffic.',
        'Significantly optimized systems to minimize compute costs, resulting in an exceptional 99.5% uptime during critical events such as state and federal elections and emergencies.',
        'Developed and implemented a successful refactoring of the data feed ingestion services by migrating from Elastic Container Services to AWS Lambdas, resulting in enhanced efficiency and cost reduction.',
        "Integrated additional API routes to enhance the delivery of geospatial data in the ABC emergency web application, using geohashing. The goal was to accommodate a higher number of concurrent users and minimize response latency. Successfully increased the application's capacity to handle concurrent users by nearly 100 times, resulting in improved performance.",
      ],
    },
    {
      company: 'University of Melbourne',
      companyUrl: 'https://eresearch.unimelb.edu.au/',
      role: 'Software Engineer',
      started: 'january 2021',
      upto: 'june 2022',
      tasks: [
        'Supported the development, support, and delivery of research-oriented IT systems at the University of Melbourne.',
        'Developed web applications using full-stack technologies (MERN and LAMP) to meet specific research requirements which required bespoke development.',
        'Utilized container orchestration tools (Docker, Kubernetes) for development and deployment, hosting applications on the NeCTAR cloud service.',
        'Contributed to the Australian Digital Observatory project, employing big data technologies (CouchDB, Knative functions, Kubernetes) for machine learning on large datasets (>50GB) and building a REST API with serverless functions.',
      ],
    },
    {
      company: 'Metso (formerly Outotec)',
      companyUrl: 'https://www.metso.com/',
      role: 'AI/Machine Learning Trainee Engineer',
      started: 'november 2019',
      upto: 'march 2020',
      tasks: [
        'Tasked with writing machine learning and artificial intelligence software for communication with an advanced process controller via inter-process communication (sockets).',
        'Developed AI-based software for predicting greenhouse gas emissions using known input variables and providing recommendations through the advanced process controller.',
        "Created an 'online' learner utilizing deep neural networks and weighted ensembles to generate the most accurate models, ensuring continuous optimization of predictions.",
        'Communicated results to internal stakeholders (senior management) and external clients.',
        'Utilized key programming libraries including Pandas, scikit-learn, and TensorFlow (Python) for software development and machine learning tasks.',
      ],
    },
  ],
};
