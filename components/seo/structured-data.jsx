import Head from 'next/head';

export default function StructuredData({ type = 'website', data = {} }) {
  const baseUrl = 'https://steeplogic.com';

  const defaultData = {
    website: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Steep Logic',
      alternateName: 'SteepLogic',
      url: baseUrl,
      logo: `${baseUrl}/steeplogic.ico`,
      // Updated tagline and expanded AI focus
      description:
        'We empower businesses with AI agents and modern software, driving smarter, faster growth. From AI automation and analytics to robust web, mobile, and cloud platforms, we design and ship the tools that streamline operations, accelerate growth, and help your business win.',
      foundingDate: '2025',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: `${baseUrl}/#cta`,
      },
      sameAs: [
        'https://linkedin.com/company/steeplogic',
        'https://twitter.com/steeplogic',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'Global',
        addressLocality: 'Multiple Locations',
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
        {
          '@type': 'Continent',
          name: 'North America',
        },
        {
          '@type': 'Continent',
          name: 'Asia',
        },
      ],
      serviceType: [
        'AI Agents & Automation',
        'AI-powered Chatbots',
        'AI Analytics & Insights',
        'GenAI Solutions',
        'Custom LLM Integrations',
        'AI for Business Process Automation',
        'AI for Customer Support',
        'AI for Sales & Marketing',
        'Product Design & UX',
        'Web Application Development',
        'Mobile App Development',
        'Cloud & DevOps',
        'Custom IT Solutions',
        'Process Automation',
        'Data Engineering & ML Ops',
        'AI Integration for Local US Businesses',
        'AI Integration for Local India Businesses',
        'Global AI Solutions'
      ],
      offers: {
        '@type': 'Offer',
        description: 'Free 30-minute consultation call for software development projects',
      },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom Software Development',
      description: 'Professional software development services including AI solutions, web applications, mobile apps, and cloud solutions.',
      provider: {
        '@type': 'Organization',
        name: 'Steep Logic',
        url: baseUrl,
      },
      serviceType: [
        'AI Agents & Automation',
        'AI Analytics',
        'Custom LLM Integration',
        'Web & Mobile Development',
        'Cloud Solutions',
        'Process Automation',
        'AI for Local US',
        'AI for Local India',
        'Global AI Solutions'
      ],
      areaServed: [
        {
          '@type': 'Country',
          name: 'United States',
        },
        {
          '@type': 'Country',
          name: 'India',
        },
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceRange: '$$',
      },
    },
    faq: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to build a custom software solution?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on complexity, but most projects are completed within 2-6 months. We provide detailed timelines during our initial consultation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with startups and small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely! We specialize in helping businesses of all sizes, from startups to enterprises. Our flexible approach ensures we deliver value regardless of your company size.',
          },
        },
        {
          '@type': 'Question',
          name: 'What technologies do you specialize in?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work with modern technologies including React, Next.js, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and mobile development (iOS/Android).',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide ongoing support after project completion?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we offer comprehensive post-launch support including maintenance, updates, and technical assistance to ensure your solution continues to perform optimally.',
          },
        },
      ],
    },
  };

  const structuredData = { ...defaultData[type], ...data };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}
