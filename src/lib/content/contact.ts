import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    'I’m currently available to work freelance for short and long term contracts',
    ],
    link: `mailto:${author.email}`,
};