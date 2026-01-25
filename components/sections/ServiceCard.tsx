import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkText?: string;
  linkHref?: string;
}

const CARD_STYLES =
  'service-card bg-[#F6E8D9] rounded-2xl p-5 h-full flex flex-col overflow-hidden border border-[#662B2D]/10 hover:-translate-y-2 hover:shadow-xl focus-within:shadow-xl focus-within:-translate-y-2 transition-all duration-300';
const HEADER_STYLES = 'flex items-center gap-3 mb-3';
const ICON_CONTAINER_STYLES =
  'w-9 h-9 bg-[#662B2D]/10 rounded-lg flex items-center justify-center flex-shrink-0';
const ICON_STYLES = 'text-[#662B2D] w-5 h-5';
const TITLE_STYLES = 'font-display text-xl text-[#662B2D] font-medium';
const DESCRIPTION_STYLES =
  'text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-3 mb-4';
const LINK_STYLES =
  'mt-auto rounded-full bg-secondary px-6 py-2 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary';

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  linkText,
  linkHref,
}: ServiceCardProps) {
  return (
    <article className={CARD_STYLES}>
      <div className={HEADER_STYLES}>
        <div className={ICON_CONTAINER_STYLES} aria-hidden="true">
          <Icon className={ICON_STYLES} />
        </div>
        <h3 className={TITLE_STYLES}>{title}</h3>
      </div>
      <p className={DESCRIPTION_STYLES}>{description}</p>
      {linkText && linkHref && (
        <a href={linkHref} className={LINK_STYLES}>
          {linkText}
        </a>
      )}
    </article>
  );
}
