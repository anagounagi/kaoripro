# Air Of Fragrance プロジェクト仕様書

## 1. プロジェクト概要

### 1.1 プロジェクト名
Air Of Fragrance® × kyara workshop コーポレートサイト

### 1.2 目的
- 企業ブランドの確立と認知度向上
- サービス内容の包括的な紹介
- お問い合わせの効率的な受付
- CSR活動の発信と社会貢献の可視化
- オンラインプレゼンスの強化

### 1.3 対象ユーザー
- 香りに関心のある一般消費者
- 企業のマーケティング担当者
- 香りの専門家を目指す学習者
- CSR活動に興味のある方
- 香り関連のビジネスパートナー

## 2. 技術仕様

### 2.1 開発環境
- フレームワーク: Astro v4.2.1
- UIライブラリ: React v18.2.0
- スタイリング: TailwindCSS v3.4.1
- アイコン: Lucide React v0.312.0
- CMS: Contentful
- 型システム: TypeScript
- パッケージマネージャー: npm

### 2.2 必要な環境変数
```env
VITE_SUPABASE_ANON_KEY=<Supabase Anonymous Key>
VITE_SUPABASE_URL=<Supabase Project URL>
CONTENTFUL_SPACE_ID=<Contentful Space ID>
CONTENTFUL_ACCESS_TOKEN=<Contentful Access Token>
CONTENTFUL_ENVIRONMENT=<Contentful Environment>
```

### 2.3 ブラウザ対応
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari (最新版)
- Android Chrome (最新版)

## 3. サイト構造

### 3.1 ページ構成
```
/ (トップページ)
├── /about (会社概要)
├── /artists (アーティスト一覧)
│   └── /artists/[id] (アーティスト詳細)
├── /news (ニュース一覧)
│   └── /news/[slug] (ニュース詳細)
├── /school (スクール情報)
├── /csr (CSR活動)
├── /satoyama-project (里山プロジェクト)
└── /team-muet (チームムエット)
```

### 3.2 コンポーネント構造
```
src/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Icons.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── News.tsx
│   │   ├── Works.tsx
│   │   └── Contact.tsx
│   ├── artists/
│   │   ├── ArtistCard.tsx
│   │   └── ArtistGrid.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       └── NewsletterForm.tsx
└── layouts/
    └── Layout.astro
```

## 4. 機能仕様

### 4.1 共通機能
- レスポンシブデザイン対応
- ダイナミックナビゲーション
- パンくずリスト
- ページローディング表示
- エラーハンドリング
- SEO最適化
- パフォーマンス最適化

### 4.2 トップページ機能
- ヒーローセクション（背景画像スライド）
- ニュースセクション（Contentful連携）
- サービス一覧表示
- アーティスト一覧表示
- お問い合わせフォーム（Google Forms連携）
- アニメーション効果

### 4.3 ニュース機能
- カテゴリー別フィルタリング
- 記事検索
- ページネーション
- 関連記事表示
- SNSシェアボタン

### 4.4 アーティストページ機能
- アーティスト一覧表示
- アーティスト詳細情報表示
- 実績ギャラリー表示
- 関連作品表示
- コンタクト情報

### 4.5 スクールページ機能
- コース情報表示
- 料金表示
- スケジュール表示
- お申し込みフォーム連携
- FAQ表示

## 5. デザイン仕様

### 5.1 カラーパレット
```css
/* プライマリーカラー */
--color-primary: #1a237e;
--color-primary-light: #534bae;
--color-primary-dark: #000051;

/* セカンダリーカラー */
--color-secondary: #00796b;
--color-secondary-light: #48a999;
--color-secondary-dark: #004c40;

/* アクセントカラー */
--color-accent-1: #f57c00;
--color-accent-2: #7b1fa2;
--color-accent-3: #c2185b;
```

### 5.2 タイポグラフィ
```css
/* フォントファミリー */
--font-primary: "Noto Sans JP", sans-serif;
--font-secondary: "Roboto", sans-serif;

/* フォントサイズ */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

### 5.3 ブレイクポイント
```css
/* Tailwind CSS デフォルト */
sm: 640px  /* スマートフォン横向き */
md: 768px  /* タブレット */
lg: 1024px /* ノートPC */
xl: 1280px /* デスクトップ */
2xl: 1536px /* ワイドスクリーン */
```

### 5.4 アニメーション
```css
/* トランジション */
--transition-fast: 150ms;
--transition-normal: 300ms;
--transition-slow: 500ms;

/* イージング */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

## 6. パフォーマンス要件

### 6.1 読み込み速度
- First Contentful Paint (FCP): 1.2秒以内
- Largest Contentful Paint (LCP): 2.5秒以内
- First Input Delay (FID): 100ms以内
- Cumulative Layout Shift (CLS): 0.1以下
- Time to Interactive (TTI): 3.8秒以内

### 6.2 最適化施策
- 画像の最適化
  - WebP形式の使用
  - 適切なサイズ設定
  - 遅延読み込み
- クリティカルCSSの抽出
- コンポーネントの遅延読み込み
- キャッシュ戦略の実装
- アセット最適化
- プリフェッチの実装

## 7. セキュリティ要件

### 7.1 基本要件
- HTTPS通信の強制
- CSRFトークンの実装
- XSS対策の実装
- 適切なCORSの設定
- コンテンツセキュリティポリシー (CSP)
- セキュリティヘッダーの設定

### 7.2 フォーム対策
- 入力値のバリデーション
- レートリミットの設定
- SPAMフィルターの実装
- ハニーポットの実装
- reCAPTCHAの導入

## 8. コンテンツ管理

### 8.1 Contentful設定
- コンテンツモデル
  - ニュース記事
  - アーティスト情報
  - サービス情報
  - イベント情報
- 画像アセット管理
- 多言語対応
- ワークフロー設定

### 8.2 コンテンツ更新フロー
- 下書き作成
- レビュー
- 承認プロセス
- 公開スケジュール
- バージョン管理

## 9. 分析と計測

### 9.1 アクセス解析
- Google Analytics 4の実装
- コンバージョン計測
- イベントトラッキング
- ユーザー行動分析
- カスタムレポート設定

### 9.2 パフォーマンス計測
- Core Web Vitals監視
- エラー監視
- リアルユーザーモニタリング
- サーバーサイドパフォーマンス

## 10. 保守・運用

### 10.1 定期メンテナンス
- セキュリティアップデート
- パッケージ更新
- バックアップ
- パフォーマンス最適化
- コンテンツ更新

### 10.2 障害対応
- 監視体制
- エスカレーションフロー
- 復旧手順
- 事後分析
- 再発防止策

### 10.3 継続的改善
- ユーザーフィードバック収集
- A/Bテスト実施
- パフォーマンス改善
- UX改善
- アクセシビリティ向上