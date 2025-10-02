"use client";
import { useEffect } from 'react';
import Head from 'next/head';

export default function Analytics() {
  useEffect(() => {
    // Google Analytics (replace GA_MEASUREMENT_ID with your actual ID)
    const GA_MEASUREMENT_ID = 'G-GCX9HMPJLT'; // Replace with your Google Analytics ID

    // Microsoft Clarity (optional)
    const CLARITY_ID = 'tk400p534r'; // Replace with your Clarity ID

    // Load Google Analytics
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href,
        });
      `;
      document.head.appendChild(script2);
    }

    // Load Microsoft Clarity
    if (CLARITY_ID && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `;
      document.head.appendChild(script);
    }

    // Track page views and interactions
    const trackPageView = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', GA_MEASUREMENT_ID, {
          page_path: window.location.pathname,
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Track CTA button clicks
    const trackCTAClick = (ctaName) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'CTA',
          event_label: ctaName,
        });
      }
    };

    // Track service card clicks
    const trackServiceClick = (serviceName) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'Service',
          event_label: serviceName,
        });
      }
    };

    // Add event listeners for tracking
    document.addEventListener('DOMContentLoaded', () => {
      // Track CTA buttons
      document.querySelectorAll('a[href*="calendly"]').forEach(button => {
        button.addEventListener('click', () => trackCTAClick('Schedule Call'));
      });

      // Track service interactions
      document.querySelectorAll('[data-service]').forEach(card => {
        card.addEventListener('click', () => trackServiceClick(card.dataset.service));
      });
    });

  }, []);

  return (
    <Head>
      {/* Preconnect to analytics services for faster loading */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.clarity.ms" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.clarity.ms" />
    </Head>
  );
}
