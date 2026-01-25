const SKIP_LINK_STYLES =
  'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#662B2D] text-white px-4 py-2 rounded-md shadow-lg z-50 font-semibold text-sm transition-opacity focus:outline-2 focus:outline-offset-2 focus:outline-[#662B2D]';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className={SKIP_LINK_STYLES}
      aria-label="Pular para o conteúdo principal da página"
    >
      Pular para conteúdo principal
    </a>
  );
}
