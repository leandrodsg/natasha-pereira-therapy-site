import { Circle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
}

export default function ServiceCard({
  title,
  description,
  icon = <Circle />,
  linkText,
  linkHref,
}: ServiceCardProps) {
  return (
    <article className="service-card bg-white rounded-2xl p-5 h-full flex flex-col overflow-hidden border border-[#662B2D]/10 hover:-translate-y-2 hover:shadow-xl transition-transform duration-300">
      {/* Ícone e título na mesma linha */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 bg-[#662B2D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-[#662B2D] [&>svg]:w-5 [&>svg]:h-5">{icon}</span>
        </div>
        <h3 className="service-title font-display text-xl text-[#662B2D] font-medium">
          {title}
        </h3>
      </div>
      <p className="service-description text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
        {description}
      </p>
      {linkText && linkHref && (
        <a
          href={linkHref}
          className="mt-auto rounded-full bg-secondary px-6 py-2 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-secondary/90"
        >
          {linkText}
        </a>
      )}
    </article>
  );
}
