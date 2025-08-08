import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Users, Globe, BookOpen, Briefcase, Clock } from 'lucide-react';
import { volunteerProfiles } from '@/lib/data';
import VolunteerForm from '@/components/forms/VolunteerForm';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Volunteer With Us - Make a Difference Today',
  description: 'Join our team of dedicated volunteers making a real impact in East African communities. Opportunities in education, healthcare, environment, and community development.',
  keywords: ['volunteer', 'East Africa', 'community development', 'volunteer opportunities', 'make a difference', 'social impact'],
  openGraph: {
    title: 'Volunteer With Mbua Nene Initiative - Make a Difference Today',
    description: 'Join our team of dedicated volunteers and help create sustainable positive change in East African communities.',
    type: 'website',
  },
};

export default function VolunteerPage() {
  const volunteerOpportunities = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Support literacy programs, teacher training, and educational infrastructure development.',
      commitment: '4-6 hours/week',
      skills: ['Teaching', 'Curriculum Development', 'Mentoring', 'Program Management'],
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Assist with mobile clinics, health education, and healthcare system strengthening.',
      commitment: '6-8 hours/week',
      skills: ['Medical Background', 'Health Education', 'Community Outreach', 'Data Collection'],
    },
    {
      icon: Globe,
      title: 'Environment',
      description: 'Work on clean water projects, sustainable agriculture, and environmental conservation.',
      commitment: '3-5 hours/week',
      skills: ['Environmental Science', 'Engineering', 'Project Management', 'Research'],
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Support economic empowerment, community organizing, and social programs.',
      commitment: '5-7 hours/week',
      skills: ['Social Work', 'Business Development', 'Community Organizing', 'Grant Writing'],
    },
    {
      icon: Briefcase,
      title: 'Operations & Admin',
      description: 'Help with marketing, fundraising, finance, and organizational operations.',
      commitment: '2-4 hours/week',
      skills: ['Marketing', 'Finance', 'HR', 'Communications', 'Fundraising'],
    },
    {
      icon: Clock,
      title: 'Short-term Projects',
      description: 'Contribute to specific initiatives on a project basis with flexible time commitment.',
      commitment: 'Flexible',
      skills: ['Any Skill Level', 'Remote Work', 'Event Support', 'Research'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-8">
              Join our community of changemakers and help create sustainable positive change 
              in East African communities. Your skills, passion, and time can transform lives.
            </p>
            <Link href="#apply" className="btn-secondary text-lg px-8 py-4">
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Why Volunteer With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Volunteering with Mbua Nene Initiative means joining a community committed to 
              meaningful, sustainable change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Make Real Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                See the direct results of your work in improved lives, stronger communities, 
                and sustainable development outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-secondary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Join a Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with like-minded individuals who share your passion for social justice 
                and community development.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-accent-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Grow Your Skills
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Develop new competencies in project management, cross-cultural communication, 
                and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect way to contribute your skills and passion to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div key={index} className="card hover:scale-105 transition-transform duration-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                    <IconComponent className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                    {opportunity.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>{opportunity.commitment}</span>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Profiles */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Meet Our Volunteers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from some of our dedicated volunteers about their experience and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {volunteerProfiles.map((volunteer) => (
              <div key={volunteer.id} className="card text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={volunteer.image}
                    alt={volunteer.imageAlt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary-800 mb-1">
                  {volunteer.name}
                </h3>
                
                <p className="text-secondary-600 font-medium mb-3">
                  {volunteer.role}
                </p>
                
                <blockquote className="text-sm text-gray-700 italic mb-4 border-l-4 border-primary-200 pl-4">
                  "{volunteer.testimonial}"
                </blockquote>
                
                <div className="text-sm text-gray-500">
                  <span>Volunteer since {new Date(volunteer.joinDate).getFullYear()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our simple application process helps us match your skills and interests with 
              the right volunteer opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                Apply Online
              </h3>
              <p className="text-gray-600 text-sm">
                Complete our volunteer application form with your information and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                Interview & Match
              </h3>
              <p className="text-gray-600 text-sm">
                We'll schedule a call to learn more about you and match you with opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                Orientation
              </h3>
              <p className="text-gray-600 text-sm">
                Attend our volunteer orientation to learn about our work and get started.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                Start Volunteering
              </h3>
              <p className="text-gray-600 text-sm">
                Begin making a difference with ongoing support from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="apply" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
                Volunteer Application
              </h2>
              <p className="text-lg text-gray-600">
                Ready to make a difference? Fill out the form below and we'll be in touch within 48 hours.
              </p>
            </div>

            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}