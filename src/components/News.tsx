import { useState } from 'react';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { NEWS_CATEGORIES, type NewsItem } from '../types/contentful';

// モックデータ（後でContentfulから取得）
const mockNews: NewsItem[] = [
  {
    id: '1',
    title: '2024年春の新作フレグランス発売',
    slug: 'spring-fragrance-2024',
    category: 'new-product',
    publishDate: '2024-02-01',
    thumbnail: 'https://kaori.aof-aroma.com/images/new-fragrance.jpg',
    content: {},
    excerpt: '桜をイメージした新作フレグランスが登場。3月1日より販売開始。'
  },
  {
    id: '2',
    title: '調香体験イベント開催のお知らせ',
    slug: 'perfume-workshop-2024',
    category: 'event',
    publishDate: '2024-01-25',
    content: {},
    excerpt: '2024年3月の調香体験イベントの参加者を募集します。'
  },
  {
    id: '3',
    title: '人気のローズシリーズが再入荷',
    slug: 'rose-series-restock',
    category: 'restock',
    publishDate: '2024-01-20',
    thumbnail: 'https://kaori.aof-aroma.com/images/rose-series.jpg',
    content: {},
    excerpt: '長らく品切れしていたローズシリーズが再入荷しました。'
  }
];

export function News() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredNews = selectedCategory 
    ? mockNews.filter(news => news.category === selectedCategory)
    : mockNews;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-4 text-center">最新情報</h2>
        <p className="text-gray-600 text-center mb-12">
          新製品やイベント、キャンペーン情報をお届けします
        </p>

        {/* カテゴリーフィルター */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
              ${!selectedCategory 
                ? 'bg-[#00796b] text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            すべて
          </button>
          {NEWS_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.id
                  ? `${category.color} text-white`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* ニュース一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(news => {
            const category = NEWS_CATEGORIES.find(c => c.id === news.category);
            return (
              <a
                key={news.id}
                href={`/news/${news.slug}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {news.thumbnail && (
                  <div className="relative h-48">
                    <img
                      src={news.thumbnail}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${category?.color} px-3 py-1 rounded-full text-white text-sm`}>
                        {category?.label}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {format(new Date(news.publishDate), 'yyyy年MM月dd日', { locale: ja })}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-[#00796b] transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* もっと見るボタン */}
        <div className="text-center mt-12">
          <a
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#00796b] text-white rounded-full hover:bg-[#004d40] transition-colors"
          >
            すべてのニュースを見る →
          </a>
        </div>
      </div>
    </section>
  );
}