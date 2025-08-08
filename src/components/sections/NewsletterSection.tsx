'use client';

import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { validateEmail } from '@/lib/utils';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const interestOptions = [
    'Education Programs',
    'Healthcare Initiatives',
    'Environmental Projects',
    'Community Development',
    'Volunteer Opportunities',
    'Fundraising Events',
  ];

  const handleInterestChange = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate API call - in a real app, this would call your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track newsletter signup event
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', 'newsletter_signup', {
          email_provided: true,
          interests_selected: interests.length,
        });
      }

      setSubmitStatus('success');
      setEmail('');
      setFirstName('');
      setInterests([]);
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-primary-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Mail className="w-8 h-8 text-primary-600" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the latest updates on our impact, upcoming events, and opportunities to make a difference. Join our community of changemakers.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-heading font-bold text-primary-800 mb-2">
                  Welcome to our community!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for subscribing. You'll receive your first newsletter soon with updates on our latest initiatives and impact stories.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-primary"
                >
                  Subscribe Another Email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="newsletter-email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                      aria-describedby={submitStatus === 'error' ? 'newsletter-error' : undefined}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="newsletter-firstName" className="form-label">
                      First Name (Optional)
                    </label>
                    <input
                      id="newsletter-firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="form-input"
                      placeholder="Your first name"
                    />
                  </div>
                </div>

                <div>
                  <fieldset>
                    <legend className="form-label">
                      What interests you most? (Optional)
                    </legend>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                      {interestOptions.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                        >
                          <input
                            type="checkbox"
                            checked={interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {submitStatus === 'error' && (
                  <div 
                    id="newsletter-error"
                    className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                    role="alert"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                  </button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  By subscribing, you agree to receive emails from Mbua Nene Initiative. 
                  You can unsubscribe at any time. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}