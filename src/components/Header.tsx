import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isDetailPage?: boolean;
}

export function Header({ isDetailPage = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  if (!isMounted) {
    return null;
  }

  const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
  const shouldUseWhiteText = !isScrolled && !isDetailPage && isHomePage;

  return (
    <header className={`relative ${isDetailPage ? 'h-20 bg-white shadow-lg' : 'min-h-screen'}`}>
      {isHomePage && !isDetailPage && (
        <div className="absolute inset-0">
          <img
            src="https://kaori.aof-aroma.com/images/PS166428.webp"
            alt="Hero background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        </div>
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isDetailPage || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <a 
              href="/" 
              className={`text-2xl font-semibold transition-colors ${
                isScrolled || isDetailPage || !isHomePage ? 'text-[#00796b]' : 'text-white'
              }`}
            >
              AOF
            </a>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden z-[60]"
              aria-label="メニュー"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className={`w-6 h-6 ${
                  isScrolled || isDetailPage || !isHomePage ? 'text-[#00796b]' : 'text-white'
                }`} />
              )}
            </button>

            <div className={`
              fixed lg:static inset-0 bg-[#00796b] lg:bg-transparent
              ${isMenuOpen ? 'flex' : 'hidden lg:flex'}
              items-center justify-center lg:justify-end
              transition-all duration-300 z-[55]
            `}>
              <ul className="flex flex-col lg:flex-row gap-8 text-center lg:text-left">
                {[
                  { href: '/#about', text: 'About' },
                  { href: '/artists', text: 'Artists' },
                  { href: '/school', text: 'School' },
                  { href: '/csr', text: 'CSR' },
                  { href: '/#contact', text: 'Contact' }
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`
                        text-lg font-medium block py-2 transition-colors
                        ${isMenuOpen ? 'text-white' : 
                          isScrolled || isDetailPage || !isHomePage ? 
                            'text-[#00796b] hover:text-[#004d40]' : 
                            'text-white hover:text-gray-200'
                        }
                      `}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {isHomePage && !isDetailPage && (
        <div className="relative container mx-auto px-6 pt-32 min-h-screen flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Air Of Fragrance<sup className="text-2xl">®</sup>
          </h1>
          <h1 className="text-6xl font-bold mb-8 animate-fade-in-delay">× kyara workshop</h1>
          <p className="text-2xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Joy in Fragrance Begins<br />
            かおりの楽しみはここからはじまる
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-3">
            <a 
              href="https://aof-aroma.com" 
              className="bg-white text-[#00796b] px-8 py-3 rounded-full hover:bg-[#00796b] hover:text-white transition-colors flex items-center gap-2 justify-center"
            >
              ショップサイト
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#00796b] transition-colors text-center"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}