import { Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#004d40] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">会社情報</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>有限会社桜ファーイースト</p>
                  <p>〒192-0353</p>
                  <p>東京都八王子市鹿島４－１－１０８</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:042-670-7077" className="hover:text-[#80cbc4]">042-670-7077</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@aof-aroma.com" className="hover:text-[#80cbc4]">info@aof-aroma.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="hover:text-[#80cbc4]">プライバシーポリシー</a></li>
              <li><a href="/terms" className="hover:text-[#80cbc4]">利用規約</a></li>
              <li><a href="/sitemap" className="hover:text-[#80cbc4]">サイトマップ</a></li>
              <li><a href="https://aof-aroma.com" className="hover:text-[#80cbc4]">ショップサイト</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">フォローする</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="hover:text-[#80cbc4] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-[#80cbc4] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#80cbc4]/30 text-center">
          <p>&copy; {new Date().getFullYear()} Air Of Fragrance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}