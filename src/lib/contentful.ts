import { createClient } from 'contentful';
import type { EntryFieldTypes } from 'contentful';

export const contentfulClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.CONTENTFUL_ENVIRONMENT || 'master'
});

// ニュース記事のインターフェース
export interface NewsFields {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  content: EntryFieldTypes.RichText;
  excerpt: EntryFieldTypes.Text;
  publishDate: EntryFieldTypes.Date;
  category: EntryFieldTypes.Text;
  thumbnail?: EntryFieldTypes.AssetLink;
}

// サービスのインターフェース
export interface ServiceFields {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  icon: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  link?: EntryFieldTypes.Text;
}

// スペシャルコンテンツのインターフェース
export interface SpecialContentFields {
  title: EntryFieldTypes.Text;
  description: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  season: EntryFieldTypes.Text;
  link?: EntryFieldTypes.Text;
}

// ニュース記事の取得
export async function getNews(limit = 10) {
  const entries = await contentfulClient.getEntries<NewsFields>({
    content_type: 'news',
    order: ['-fields.publishDate'],
    limit
  });

  return entries.items;
}

// サービス一覧の取得
export async function getServices() {
  const entries = await contentfulClient.getEntries<ServiceFields>({
    content_type: 'service',
    order: ['sys.createdAt']
  });

  return entries.items;
}

// スペシャルコンテンツの取得
export async function getSpecialContents() {
  const entries = await contentfulClient.getEntries<SpecialContentFields>({
    content_type: 'specialContent',
    order: ['sys.createdAt']
  });

  return entries.items;
}

// 特定のニュース記事を取得
export async function getNewsBySlug(slug: string) {
  const entries = await contentfulClient.getEntries<NewsFields>({
    content_type: 'news',
    'fields.slug': slug,
    limit: 1
  });

  return entries.items[0];
}