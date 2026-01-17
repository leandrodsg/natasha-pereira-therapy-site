import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

export default function ServiceCard({
  title,
  description,
  linkText,
  linkHref,
}: ServiceCardProps) {
  return (
    <article className="service-card bg-white p-10 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
      <div className="service-content flex flex-col h-full">
        <h3 className="service-title font-display text-3xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="service-description text-gray-700 leading-relaxed flex-grow">
          {description}
        </p>
        <div className="mt-6">
          <Link
            href={linkHref}
            className="inline-block bg-secondary text-white px-6 py-3 rounded-full uppercase tracking-widest font-bold hover:opacity-90 transition-opacity duration-200"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </article>
  );
}
