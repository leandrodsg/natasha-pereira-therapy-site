import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  linkText,
  linkHref,
}: ServiceCardProps) {
  return (
    <article className="service-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="service-image relative h-48 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="service-content p-6">
        <h3 className="service-title text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="service-description text-gray-700 mb-4 leading-relaxed">
          {description}
        </p>
        <Link
          href={linkHref}
          className="service-link inline-block text-primary hover:text-primary/80 font-medium hover:underline transition-colors duration-200"
        >
          {linkText}
        </Link>
      </div>
    </article>
  );
}
