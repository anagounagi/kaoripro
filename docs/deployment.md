# デプロイメント手順書

## 1. 開発環境のセットアップ

### 1.1 必要な環境
- Node.js v18以上
- npm v9以上
- Git

### 1.2 初期セットアップ
```bash
# リポジトリのクローン
git clone [repository-url]

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

### 1.3 環境変数の設定
`.env`ファイルを作成し、以下の環境変数を設定：
```env
VITE_SUPABASE_ANON_KEY=<your-key>
VITE_SUPABASE_URL=<your-url>
```

## 2. ビルドプロセス

### 2.1 本番ビルド
```bash
# 静的ファイルの生成
npm run build

# ビルド結果の確認
npm run preview
```

### 2.2 ビルド成果物
- 出力ディレクトリ: `dist/`
- 静的アセット: `dist/assets/`
- HTML: `dist/*.html`

## 3. Netlifyへのデプロイ

### 3.1 デプロイ設定
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

### 3.2 環境変数の設定
Netlifyダッシュボードで以下の環境変数を設定：
```
VITE_SUPABASE_ANON_KEY
VITE_SUPABASE_URL
```

### 3.3 デプロイメントブランチ
- メインブランチ: `main`
- プレビューブランチ: すべてのブランチ

## 4. デプロイ後の確認事項

### 4.1 動作確認
- [ ] ページの表示
- [ ] リンクの動作
- [ ] フォームの送信
- [ ] 画像の表示
- [ ] レスポンシブ対応

### 4.2 パフォーマンス確認
- [ ] Lighthouse スコア
- [ ] ページ読み込み速度
- [ ] Core Web Vitals

### 4.3 セキュリティ確認
- [ ] HTTPS接続
- [ ] CSP設定
- [ ] CORS設定

## 5. トラブルシューティング

### 5.1 ビルドエラー
1. `node_modules`の削除
2. パッケージのクリーンインストール
3. キャッシュのクリア

### 5.2 デプロイエラー
1. ログの確認
2. 環境変数の確認
3. ビルドコマンドの確認

### 5.3 表示の問題
1. ブラウザキャッシュのクリア
2. CDNキャッシュの確認
3. ソースマップの確認