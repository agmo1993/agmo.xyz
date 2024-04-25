import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'Projects I\'ve worked on',
  projects: [
    {
      id: getId(),
      name: 'Living Instruments App',
      url: 'https://livinginstruments.grainger.unimelb.edu.au/',
      img: '/livinginstruments.webp',
      year: 2021,
      tags: ['React', 'Tonejs', 'Docker'],
    },
    {
      id: getId(),
      name: 'AusCPI',
      url: 'https://aus-cpi.vercel.app/',
      img: '/auscpi.png',
      year: 2023,
      tags: ['Next.js', 'PostgreSQL', 'Python'],
    },
    {
      id: getId(),
      name: 'ADOReD',
      url: 'https://www.ado.eresearch.unimelb.edu.au/dashboard/',
      img: '/adored.png',
      year: 2022,
      tags: ['React.js', 'CouchDB', 'Kubernetes'],
    },
    {
      id: getId(),
      name: 'ABC Emergency Web App',
      url: 'https://www.abc.net.au/emergency',
      img: '/abcemergency.png',
      year: '2024',
      tags: ['Next.js', 'Typescript', 'GraphQL'],
    },
  ],
};
