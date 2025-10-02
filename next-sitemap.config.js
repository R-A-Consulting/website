/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://steeplogic.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/node_modules/'],
      },
    ],
    additionalSitemaps: [
      'https://steeplogic.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on page
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/#services') || path.startsWith('/#about')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/#process') || path.startsWith('/#clients')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/#cta')) {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
