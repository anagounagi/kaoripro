export interface AboutContent {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  category: 'new-product' | 'restock' | 'event' | 'notice' | 'campaign';
  publishDate: string;
  thumbnail?: string;
  content: any; // Contentful Rich Text
  excerpt: string;
}

export type NewsCategory = {
  id: 'new-product' | 'restock' | 'event' | 'notice' | 'campaign';
  label: string;
  color: string;
};

export const NEWS_CATEGORIES: NewsCategory[] = [
  { id: 'new-product', label: '新製品', color: 'bg-emerald-500' },
  { id: 'restock', label: '入荷情報', color: 'bg-blue-500' },
  { id: 'event', label: 'イベント', color: 'bg-purple-500' },
  { id: 'notice', label: 'お知らせ', color: 'bg-gray-500' },
  { id: 'campaign', label: 'キャンペーン', color: 'bg-red-500' }
];