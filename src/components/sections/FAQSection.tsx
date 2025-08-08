'use client';

import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  faqs: FAQItem[];
  showSearch?: boolean;
  categories?: string[];
}

export default function FAQSection({ faqs, showSearch = true, categories }: FAQSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = categories || [...new Set(faqs.map(faq => faq.category))];

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const generateStructuredData = () => {
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": filteredFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    );
  };

  return (
    <section className="space-y-8" aria-labelledby="faq-heading">
      {generateStructuredData()}
      
      <div className="text-center">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our work, volunteering, and how you can make a difference.
        </p>
      </div>

      {showSearch && (
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Search */}
          <div className="relative">
            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
            <input
              id="faq-search"
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input pl-12"
            />
          </div>

          {/* Category Filter */}
          {uniqueCategories.length > 1 && (
            <div>
              <label htmlFor="faq-category" className="sr-only">Filter by category</label>
              <select
                id="faq-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-input"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto">
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No questions found matching your search criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openItems.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors duration-200"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
                        isOpen && "transform rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  
                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-6 pb-4 text-gray-700 leading-relaxed animate-fade-in"
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="text-center bg-primary-50 rounded-xl p-8">
        <h3 className="text-xl font-heading font-semibold text-primary-800 mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-4">
          Our team is here to help you learn more about our work and how you can get involved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="btn-primary"
          >
            Contact Us
          </a>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@mbuanene.org'}`}
            className="btn-outline"
          >
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}