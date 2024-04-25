import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Abdul Rehman Mohammad',
    // tagline: 'A motivated and professional software engineer skilled across the full stack.',
    description:
    "A motivated and professional software engineer skilled across the full stack, with an active interest in developing scalable applications across distributed databases.",
    specialText: 'Currently available for freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};