import { ImpactStats, ImpactStory, VolunteerProfile, BlogPost, FAQItem, NavigationItem } from '@/types';

export const impactStats: ImpactStats = {
  livesImpacted: 15000,
  volunteersActive: 250,
  projectsCompleted: 45,
  fundsRaised: 850000,
};

export const impactStories: ImpactStory[] = [
  {
    id: 'clean-water-initiative',
    title: 'Bringing Clean Water to Rural Communities',
    excerpt: 'How our well-building project transformed five villages and provided access to clean drinking water for over 3,000 people.',
    content: `In 2023, the Mbua Nene Initiative launched an ambitious clean water project targeting rural communities that had been without reliable access to clean drinking water for decades. Working with local partners and international organizations, we successfully drilled and installed five deep-water wells across the region.

    The impact was immediate and transformational. Families who previously spent hours each day walking to distant water sources could now access clean water within minutes of their homes. Children, particularly girls who had been responsible for water collection, were able to return to school regularly.

    Maria Kimani, a local mother of four, shared: "Before the well, my daughters would miss school three days a week to help fetch water. Now they attend every day, and my youngest has become one of the top students in her class."

    The project also created local employment opportunities, with community members trained in well maintenance and water quality testing. This ensures the sustainability of the project for years to come.

    Beyond the immediate health benefits, the wells have enabled small-scale agriculture, with families now able to grow vegetables and herbs for both consumption and sale at local markets.`,
    image: '/images/stories/clean-water.jpg',
    imageAlt: 'Children accessing clean water from a new community well',
    date: '2023-09-15',
    author: 'Sarah Ochieng',
    category: 'environment',
    readTime: 4,
  },
  {
    id: 'education-scholarship-program',
    title: 'Empowering Dreams Through Education',
    excerpt: 'Meet Grace, a scholarship recipient who went from rural village life to becoming a registered nurse, now giving back to her community.',
    content: `Grace Mwangi\'s journey from a small rural village to becoming a registered nurse exemplifies the transformational power of education. As one of the first recipients of the Mbua Nene Initiative scholarship program in 2019, Grace has not only achieved her dreams but is now actively giving back to her community.

    Growing up in a family of subsistence farmers, Grace showed exceptional academic promise but faced the harsh reality that her family couldn\'t afford secondary school fees. The scholarship program covered not just tuition but also accommodation, books, and other essential needs.

    "I remember the day I received the call about the scholarship," Grace recalls. "I was helping my mother in the fields, and when she saw me crying with joy, she thought something terrible had happened. When I told her I could continue my education, we both cried tears of happiness."

    During her nursing studies, Grace volunteered at local health clinics during school breaks, gaining practical experience while serving her community. After graduation, she chose to work at the regional hospital rather than seeking opportunities in urban centers.

    Today, Grace runs monthly health education workshops in her home village and three neighboring communities. She has trained over 200 community health volunteers and established a maternal health program that has reduced infant mortality rates in the area by 40%.

    "Education didn\'t just change my life," Grace explains. "It gave me the tools to lift up my entire community. Every month, I see the impact of what we\'re doing together."

    The scholarship program has since supported 85 students, with a 92% graduation rate and 78% returning to serve their home communities in various capacities.`,
    image: '/images/stories/education-scholarship.jpg',
    imageAlt: 'Grace Mwangi providing health education to community members',
    date: '2023-11-22',
    author: 'John Mutiso',
    category: 'education',
    readTime: 5,
  },
  {
    id: 'community-garden-project',
    title: 'Growing Food Security Together',
    excerpt: 'How community gardens in urban areas are providing fresh food, reducing malnutrition, and bringing neighbors together.',
    content: `In the urban slums of Nairobi, fresh vegetables were once a luxury few could afford. The Mbua Nene Initiative\'s community garden project has transformed empty lots into thriving green spaces that feed families and build community connections.

    The project began in 2022 when community leaders approached us about food insecurity in their neighborhoods. Working together, we identified unused spaces and began converting them into productive gardens using innovative vertical farming techniques suitable for small urban spaces.

    The first garden, established in Kibera, now feeds 150 families and has become a model for similar projects across the city. Using recycled containers and organic composting methods, the garden produces vegetables year-round while teaching sustainable agriculture practices.

    Peter Otieno, a project coordinator and former street vendor, explains: "This garden has changed everything for our community. Children who used to go to bed hungry now have nutritious meals. Mothers have learned new skills and some have started their own small businesses selling surplus vegetables."

    The project has created unexpected benefits beyond food security. The gardens have become community gathering spaces where neighbors share knowledge, children play safely, and elderly residents find purpose in mentoring young gardeners.

    Mental health improvements have been notable, with participants reporting reduced stress and increased social connections. The physical activity involved in gardening has also contributed to better overall health outcomes.

    Today, the initiative operates 12 community gardens across Nairobi, with plans to expand to other urban centers. Each garden is managed by local volunteers who have completed our agricultural training program.

    "We\'re not just growing vegetables," says community leader Margaret Wanjiku. "We\'re growing hope, friendship, and a stronger community."`,
    image: '/images/stories/community-garden.jpg',
    imageAlt: 'Community members working together in an urban garden',
    date: '2023-10-08',
    author: 'Rebecca Nyong\'o',
    category: 'community',
    readTime: 6,
  },
];

export const volunteerProfiles: VolunteerProfile[] = [
  {
    id: 'dr-james-kamau',
    name: 'Dr. James Kamau',
    role: 'Medical Volunteer & Health Program Coordinator',
    bio: 'A practicing physician with 15 years of experience, Dr. Kamau leads our health initiatives and mobile clinic programs.',
    image: '/images/volunteers/dr-kamau.jpg',
    imageAlt: 'Dr. James Kamau examining a patient at a mobile clinic',
    joinDate: '2021-03-15',
    hoursVolunteered: 720,
    skills: ['Medical Care', 'Program Management', 'Community Health', 'Training & Education'],
    testimonial: 'Being part of Mbua Nene Initiative has allowed me to make a direct impact on healthcare access in underserved communities. Every day brings new challenges and opportunities to save lives.',
  },
  {
    id: 'engineer-mary-wanjiru',
    name: 'Mary Wanjiru',
    role: 'Water & Sanitation Engineer',
    bio: 'Environmental engineer specializing in sustainable water systems and rural infrastructure development.',
    image: '/images/volunteers/mary-wanjiru.jpg',
    imageAlt: 'Mary Wanjiru inspecting a newly installed water well',
    joinDate: '2020-07-22',
    hoursVolunteered: 1200,
    skills: ['Water Systems Engineering', 'Project Planning', 'Community Training', 'Sustainability Assessment'],
    testimonial: 'There\'s nothing more fulfilling than seeing a community celebrate their first access to clean water. Engineering for social good is my passion, and Mbua Nene gives me the platform to make it happen.',
  },
  {
    id: 'teacher-samuel-kiprotich',
    name: 'Samuel Kiprotich',
    role: 'Education Program Director',
    bio: 'Former headteacher with 20 years in education, now developing curriculum and training programs for rural schools.',
    image: '/images/volunteers/samuel-kiprotich.jpg',
    imageAlt: 'Samuel Kiprotich teaching in a rural classroom',
    joinDate: '2019-01-10',
    hoursVolunteered: 1500,
    skills: ['Curriculum Development', 'Teacher Training', 'Educational Leadership', 'Literacy Programs'],
    testimonial: 'Education is the foundation of all development. Through Mbua Nene, I\'ve been able to reach children in the most remote areas and give them the tools to build better futures.',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'sustainable-development-goals-2024',
    title: '2024 Progress Report: Our Journey Toward Sustainable Development Goals',
    excerpt: 'A comprehensive look at how our initiatives align with the UN SDGs and the measurable impact we\'ve achieved this year.',
    content: 'Blog post content about SDG progress...',
    image: '/images/blog/sdg-progress-2024.jpg',
    imageAlt: 'Infographic showing progress toward various SDG goals',
    publishedAt: '2024-01-15',
    author: 'Executive Team',
    category: 'Impact Report',
    tags: ['SDGs', 'Annual Report', 'Impact', 'Development'],
    readTime: 8,
    featured: true,
  },
  {
    id: 'volunteer-spotlight-december',
    title: 'Volunteer Spotlight: The Unsung Heroes of December',
    excerpt: 'Celebrating the incredible volunteers who made our year-end activities possible and touched countless lives.',
    content: 'Blog post content about volunteer spotlight...',
    image: '/images/blog/volunteer-spotlight-december.jpg',
    imageAlt: 'Collage of volunteers working in various community projects',
    publishedAt: '2023-12-20',
    author: 'Community Relations Team',
    category: 'Volunteer Stories',
    tags: ['Volunteers', 'Community', 'Recognition', 'December'],
    readTime: 5,
    featured: false,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'how-to-volunteer',
    question: 'How can I become a volunteer with Mbua Nene Initiative?',
    answer: 'Becoming a volunteer is easy! Fill out our volunteer application form on our website, and our team will contact you within 48 hours to discuss opportunities that match your skills and interests. We welcome volunteers for both short-term projects and long-term commitments.',
    category: 'Volunteering',
  },
  {
    id: 'donation-usage',
    question: 'How are donations used and can I track my impact?',
    answer: 'We maintain complete transparency in our financial operations. 85% of donations go directly to program implementation, 10% to operational costs, and 5% to administrative expenses. All donors receive detailed impact reports showing exactly how their contributions have been used, and major donors can request site visits to see projects firsthand.',
    category: 'Donations',
  },
  {
    id: 'project-locations',
    question: 'Where do you operate and how do you choose project locations?',
    answer: 'We currently operate in Kenya, Uganda, and Tanzania, with plans to expand to additional East African countries. Project locations are selected based on community needs assessments, local partnerships, sustainability potential, and our capacity to make a lasting impact. Communities often approach us directly, or we work through local partner organizations.',
    category: 'Programs',
  },
  {
    id: 'partnership-opportunities',
    question: 'Can my organization partner with Mbua Nene Initiative?',
    answer: 'Yes! We actively seek partnerships with corporations, other NGOs, government agencies, and international organizations. Partnership opportunities include funding collaborations, skill-sharing initiatives, joint projects, and employee volunteer programs. Contact our partnership team to discuss how we can work together.',
    category: 'Partnerships',
  },
  {
    id: 'volunteer-requirements',
    question: 'What are the requirements to volunteer?',
    answer: 'Requirements vary by program, but generally include being 18+ years old (16+ with parental consent), completing our orientation program, and committing to a minimum time period based on the project. Some specialized roles require specific qualifications or experience. We provide all necessary training and support.',
    category: 'Volunteering',
  },
  {
    id: 'impact-measurement',
    question: 'How do you measure and report impact?',
    answer: 'We use a comprehensive monitoring and evaluation system that tracks both quantitative metrics (people served, projects completed, funds utilized) and qualitative outcomes (community feedback, behavioral changes, long-term sustainability). We publish detailed annual reports and conduct independent third-party evaluations every two years.',
    category: 'Transparency',
  },
];

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Our Work', 
    href: '/impact',
    children: [
      { name: 'Impact Stories', href: '/impact' },
      { name: 'Our Projects', href: '/impact/projects' },
      { name: 'Annual Reports', href: '/impact/reports' },
    ]
  },
  { name: 'Get Involved', href: '/volunteer' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const organizationInfo = {
  name: 'Mbua Nene Initiative',
  tagline: 'Empowering Communities, Transforming Lives',
  mission: 'To create sustainable positive change in East African communities through education, healthcare, environmental stewardship, and economic empowerment programs that are designed and implemented in partnership with local communities.',
  vision: 'A future where every person has access to the basic necessities of life and the opportunity to reach their full potential, regardless of their background or circumstances.',
  values: [
    'Community-Centered Approach',
    'Transparency and Accountability',
    'Sustainable Development',
    'Cultural Respect and Inclusion',
    'Innovation and Adaptation',
  ],
  contact: {
    email: 'info@mbuanene.org',
    phone: '+254 700 123 456',
    address: 'P.O. Box 12345, Nairobi, Kenya',
    socialMedia: {
      facebook: 'https://facebook.com/mbuaneneinitiative',
      twitter: 'https://twitter.com/mbuanene',
      instagram: 'https://instagram.com/mbuaneneinitiative',
      linkedin: 'https://linkedin.com/company/mbua-nene-initiative',
    },
  },
  registration: {
    number: 'NGO/12345/2018',
    country: 'Kenya',
    year: 2018,
  },
};