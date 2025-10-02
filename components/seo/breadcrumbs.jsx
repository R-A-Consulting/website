"use client";
import Link from 'next/link';

export default function Breadcrumbs({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-red-600 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
