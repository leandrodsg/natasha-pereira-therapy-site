import { Check } from 'lucide-react';

interface PainPointCardProps {
  text: string;
}

export function PainPointCard({ text }: PainPointCardProps) {
  return (
    <li
      className="flex items-start gap-4 bg-[#868B6C]/35 backdrop-blur-sm rounded-2xl px-6 py-5
                 hover:bg-[#868B6C]/50 transition-all duration-300 border border-white/10"
    >
      <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check
          data-testid="check-icon"
          className="w-4 h-4 text-white"
          strokeWidth={3}
          aria-hidden="true"
        />
      </div>
      <p className="text-[1.125rem] leading-relaxed text-white/95">{text}</p>
    </li>
  );
}
