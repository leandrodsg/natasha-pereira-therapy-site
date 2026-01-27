import Image from 'next/image';
import { env } from '@/lib/env';
import { InstagramIcon } from '@/components/icons/SocialIcons';

const INSTAGRAM_URL = `https://instagram.com/${env.NEXT_PUBLIC_INSTAGRAM_HANDLE}`;

const SECTION_STYLES = {
  section: 'py-12 bg-[#f4eee5]',
  container: 'max-w-5xl mx-auto px-6 md:px-12',
  // Widget header - estilo LightWidget
  widgetHeader:
    'bg-white rounded-t-md p-4 flex items-center justify-between shadow-sm',
  profileSection: 'flex items-center gap-3',
  profilePicWrapper:
    'w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex-shrink-0',
  profilePic:
    'w-full h-full rounded-full overflow-hidden border-2 border-white',
  handle: 'text-gray-900 font-medium text-lg hover:underline',
  followButton:
    'inline-flex items-center gap-2 bg-[#0077cc] hover:bg-[#0066b3] text-white font-semibold px-4 py-2 rounded-md text-sm transition-colors',
  // Grid
  grid: 'grid grid-cols-2 md:grid-cols-4 gap-0',
  postWrapper: 'aspect-[4/5] relative overflow-hidden group cursor-pointer',
  postOverlay:
    'absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors',
  // Footer button
  footer: 'mt-8 text-center',
  button:
    'inline-flex items-center gap-1.5 bg-[#4F5543] hover:bg-[#4F5543]/90 text-white px-5 py-2 rounded-md text-sm transition-colors',
} as const;

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: '/images/instagram/Prazer-sou-Natasha.jpg',
    url: 'https://www.instagram.com/p/DPCH7GekSXr/',
    alt: 'Prazer, sou Natasha',
  },
  {
    id: 2,
    image: '/images/instagram/roda-conversa.jpg',
    url: 'https://www.instagram.com/p/DOrrjEokTRq/',
    alt: 'Roda de conversa',
  },
  {
    id: 3,
    image: '/images/instagram/cordas.jpg',
    url: 'https://www.instagram.com/p/DFfpMGZOVMW/',
    alt: 'Cordas',
  },
  {
    id: 4,
    image: '/images/instagram/cancer-mama.jpeg',
    url: 'https://www.instagram.com/p/DPT7htmDfj1/',
    alt: 'Câncer de mama',
  },
];

export default function InstagramFeed() {
  const instagramHandle = env.NEXT_PUBLIC_INSTAGRAM_HANDLE;

  return (
    <section
      id="instagram"
      className={SECTION_STYLES.section}
      aria-labelledby="instagram-heading"
    >
      <div className={SECTION_STYLES.container}>
        {/* Widget Header - estilo LightWidget */}
        <div className={SECTION_STYLES.widgetHeader}>
          {/* Foto + Handle - esquerda */}
          <div className={SECTION_STYLES.profileSection}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={SECTION_STYLES.profilePicWrapper}
              aria-label="Ver perfil no Instagram"
            >
              <div className={SECTION_STYLES.profilePic}>
                <Image
                  src="/images/hero_new.png"
                  alt={`Foto de perfil de ${instagramHandle}`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <h2 id="instagram-heading" className={SECTION_STYLES.handle}>
                @{instagramHandle}
              </h2>
            </a>
          </div>

          {/* Botão Seguir azul com ícone branco - direita */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={SECTION_STYLES.followButton}
          >
            <InstagramIcon className="w-4 h-4" />
            Seguir
          </a>
        </div>

        {/* Posts Grid - 4 colunas, quadradas e coladas */}
        <div className={SECTION_STYLES.grid}>
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`instagram-post-${post.id}`}
              className={SECTION_STYLES.postWrapper}
              aria-label={`Ver post ${post.id} no Instagram`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover"
              />
              <div className={SECTION_STYLES.postOverlay} />
            </a>
          ))}
        </div>

        {/* Botão Me siga embaixo */}
        <div className={SECTION_STYLES.footer}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={SECTION_STYLES.button}
          >
            Me siga no
            <Image
              src="/images/instagram-icon.svg"
              alt="Ícone Instagram"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              width={60}
              height={17}
              className="h-4 w-auto brightness-0 invert translate-y-[2px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
