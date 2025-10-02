"use client";
import Link from 'next/link';

export default function InternalLinks({ links = [] }) {
  if (links.length === 0) return null;

  return (
    <div className="mt-12 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Explore More</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group"
          >
            <h4 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
              {link.title}
            </h4>
            {link.description && (
              <p className="text-sm text-gray-600 mt-1">
                {link.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
