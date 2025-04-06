import { ArrowRight } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image?: string;
  excerpt: string;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '2024年春の新作フレグランス発売',
    slug: 'spring-fragrance-2024',
    category: 'new-product',
    date: '2024-02-01',
    image: 'https://kaori.aof-aroma.com/images/new-fragrance.jpg',
    excerpt: '桜をイメージした新作フレグランスが登場。3月1日より販売開始。'
  },
  {
    id: '2',
    title: '調香体験イベント開催のお知らせ',
    slug: 'perfume-workshop-2024',
    category: 'event',
    date: '2024-01-25',
    excerpt: '2024年3月の調香体験イベントの参加者を募集します。'
  },
  {
    id: '3',
    title: '人気のローズシリーズが再入荷',
    slug: 'rose-series-restock',
    category: 'restock',
    date: '2024-01-20',
    image: 'https://kaori.aof-aroma.com/images/rose-series.jpg',
    excerpt: '長らく品切れしていたローズシリーズが再入荷しました。'
  }
];

const categories = [
  { id: 'all', label: 'すべて' },
  { id: 'new-product', label: '新製品', color: 'bg-emerald-500' },
  { id: 'event', label: 'イベント', color: 'bg-purple-500' },
  { id: 'restock', label: '入荷情報', color: 'bg-blue-500' }
];

export function News() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-4 text-center">最新情報</h2>
        <p className="text-gray-600 text-center mb-12">
          新製品やイベント、キャンペーン情報をお届けします
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${category.id === 'all' 
                  ? 'bg-[#00796b] text-white' 
                  : `${category.color} text-white hover:opacity-90`}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mockNews.map(news => (
            <a
              key={news.id}
              href={`/news/${news.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {news.image && (
                <div className="relative h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <time className="text-sm text-gray-500">{news.date}</time>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-[#00796b] transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {news.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#00796b] text-white rounded-full hover:bg-[#004d40] transition-colors"
          >
            すべてのニュースを見る
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}