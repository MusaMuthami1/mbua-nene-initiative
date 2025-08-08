'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { validateEmail, validatePhone } from '@/lib/utils';

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  location: string;
  interests: string[];
  availability: string;
  experience: string;
  motivation: string;
  skills: string;
  preferredContact: string;
  canTravel: boolean;
  hasTransport: boolean;
  emergencyContact: string;
  emergencyPhone: string;
}

export default function VolunteerForm() {
  const [formData, setFormData] = useState<VolunteerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: '',
    skills: '',
    preferredContact: 'email',
    canTravel: false,
    hasTransport: false,
    emergencyContact: '',
    emergencyPhone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const volunteerAreas = [
    'Education & Training',
    'Healthcare & Wellness',
    'Environmental Conservation',
    'Community Development',
    'Economic Empowerment',
    'Administrative Support',
    'Marketing & Communications',
    'Fundraising & Events',
    'Research & Documentation',
    'Technology & Digital Skills',
  ];

  const availabilityOptions = [
    'Weekday mornings',
    'Weekday afternoons',
    'Weekday evenings',
    'Weekend mornings',
    'Weekend afternoons',
    'Weekend evenings',
    'Flexible/Any time',
  ];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one area of interest';
    }

    if (!formData.availability) {
      newErrors.availability = 'Please select your availability';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please tell us why you want to volunteer';
    }

    if (!formData.emergencyContact.trim()) {
      newErrors.emergencyContact = 'Emergency contact name is required';
    }

    if (!formData.emergencyPhone.trim()) {
      newErrors.emergencyPhone = 'Emergency contact phone is required';
    } else if (!validatePhone(formData.emergencyPhone)) {
      newErrors.emergencyPhone = 'Please enter a valid emergency contact phone';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Track volunteer application event
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', 'volunteer_application_submitted', {
          interests_count: formData.interests.length,
          has_experience: formData.experience.length > 0,
          can_travel: formData.canTravel,
        });
      }

      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" aria-hidden="true" />
        <h3 className="text-2xl font-heading font-bold text-primary-800 mb-4">
          Application Submitted Successfully!
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for your interest in volunteering with Mbua Nene Initiative. 
          We've received your application and will review it carefully. Our volunteer 
          coordinator will contact you within 48 hours to discuss next steps.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          In the meantime, feel free to follow us on social media to stay updated 
          on our latest projects and volunteer opportunities.
        </p>
        <button
          onClick={() => {
            setSubmitStatus('idle');
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              age: '',
              location: '',
              interests: [],
              availability: '',
              experience: '',
              motivation: '',
              skills: '',
              preferredContact: 'email',
              canTravel: false,
              hasTransport: false,
              emergencyContact: '',
              emergencyPhone: '',
            });
          }}
          className="btn-primary"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary-800 mb-6">
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="form-label">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`form-input ${errors.firstName ? 'border-red-500' : ''}`}
                placeholder="Your first name"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="form-label">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`form-input ${errors.lastName ? 'border-red-500' : ''}`}
                placeholder="Your last name"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="form-label">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="+254 700 123 456"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="age" className="form-label">
                Age *
              </label>
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className={`form-input ${errors.age ? 'border-red-500' : ''}`}
              >
                <option value="">Select your age range</option>
                <option value="16-17">16-17</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65+">65+</option>
              </select>
              {errors.age && (
                <p className="mt-1 text-sm text-red-600">{errors.age}</p>
              )}
            </div>

            <div>
              <label htmlFor="location" className="form-label">
                Location (City, Country) *
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleInputChange}
                className={`form-input ${errors.location ? 'border-red-500' : ''}`}
                placeholder="Nairobi, Kenya"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location}</p>
              )}
            </div>
          </div>
        </div>

        {/* Volunteer Interests */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary-800 mb-6">
            Areas of Interest *
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {volunteerAreas.map((area) => (
              <label
                key={area}
                className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
              >
                <input
                  type="checkbox"
                  checked={formData.interests.includes(area)}
                  onChange={() => handleInterestChange(area)}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-gray-700">{area}</span>
              </label>
            ))}
          </div>
          
          {errors.interests && (
            <p className="mt-2 text-sm text-red-600">{errors.interests}</p>
          )}
        </div>

        {/* Availability */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary-800 mb-6">
            Availability & Logistics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="availability" className="form-label">
                When are you available? *
              </label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                className={`form-input ${errors.availability ? 'border-red-500' : ''}`}
              >
                <option value="">Select your availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.availability && (
                <p className="mt-1 text-sm text-red-600">{errors.availability}</p>
              )}
            </div>

            <div>
              <label htmlFor="preferredContact" className="form-label">
                Preferred Contact Method
              </label>
              <select
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="canTravel"
                    checked={formData.canTravel}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-gray-700">I can travel to project sites when needed</span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="hasTransport"
                    checked={formData.hasTransport}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-gray-700">I have reliable transportation</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Skills */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary-800 mb-6">
            Experience & Skills
          </h3>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="experience" className="form-label">
                Previous Volunteer Experience (Optional)
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                className="form-input"
                placeholder="Describe any previous volunteer work, community involvement, or relevant experience..."
              />
            </div>

            <div>
              <label htmlFor="skills" className="form-label">
                Special Skills or Qualifications (Optional)
              </label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                rows={3}
                className="form-input"
                placeholder="Languages, professional skills, certifications, hobbies, or other relevant abilities..."
              />
            </div>

            <div>
              <label htmlFor="motivation" className="form-label">
                Why do you want to volunteer with us? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                rows={4}
                className={`form-input ${errors.motivation ? 'border-red-500' : ''}`}
                placeholder="Tell us what motivates you to volunteer and what you hope to achieve..."
              />
              {errors.motivation && (
                <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>
              )}
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="text-xl font-heading font-semibold text-primary-800 mb-6">
            Emergency Contact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="emergencyContact" className="form-label">
                Emergency Contact Name *
              </label>
              <input
                id="emergencyContact"
                name="emergencyContact"
                type="text"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                className={`form-input ${errors.emergencyContact ? 'border-red-500' : ''}`}
                placeholder="Full name"
              />
              {errors.emergencyContact && (
                <p className="mt-1 text-sm text-red-600">{errors.emergencyContact}</p>
              )}
            </div>

            <div>
              <label htmlFor="emergencyPhone" className="form-label">
                Emergency Contact Phone *
              </label>
              <input
                id="emergencyPhone"
                name="emergencyPhone"
                type="tel"
                value={formData.emergencyPhone}
                onChange={handleInputChange}
                className={`form-input ${errors.emergencyPhone ? 'border-red-500' : ''}`}
                placeholder="+254 700 123 456"
              />
              {errors.emergencyPhone && (
                <p className="mt-1 text-sm text-red-600">{errors.emergencyPhone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="border-t border-gray-200 pt-8">
          {submitStatus === 'error' && (
            <div className="mb-6 flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <span>Something went wrong. Please try again later.</span>
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our volunteer policies and 
              consent to us contacting you about volunteer opportunities.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}