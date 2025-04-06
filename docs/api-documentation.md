# API仕様書

## 1. お問い合わせフォーム API

### エンドポイント
```
POST https://docs.google.com/forms/d/e/[FORM_ID]/formResponse
```

### リクエストパラメータ
| パラメータ | 説明 | 必須 | 型 |
|------------|------|------|-----|
| entry.377367744 | お問い合わせ種別 | ○ | string |
| entry.920564048 | お名前 | ○ | string |
| entry.214829368 | 電話番号 | ○ | string |
| entry.634896786 | お問い合わせ内容 | ○ | string |

### レスポンス
- 成功時: 200 OK
- エラー時: 適切なHTTPステータスコード

## 2. 画像最適化 API

### エンドポイント
```
GET https://kaori.aof-aroma.com/images/[IMAGE_PATH]
```

### クエリパラメータ
| パラメータ | 説明 | デフォルト値 | 型 |
|------------|------|--------------|-----|
| w | 幅 | 原寸 | number |
| q | 品質 | 80 | number |
| fm | フォーマット | webp | string |

### レスポンス
- 成功時: 200 OK + 画像データ
- エラー時: 404 Not Found

## 3. アーティスト情報 API

### エンドポイント
```typescript
// アーティスト一覧
GET /api/artists

// アーティスト詳細
GET /api/artists/[id]
```

### レスポンス形式
```typescript
// アーティスト一覧
interface ArtistListResponse {
  artists: {
    id: number;
    name: string;
    image: string;
    description: string;
  }[];
}

// アーティスト詳細
interface ArtistDetailResponse {
  id: number;
  name: string;
  title: string;
  image: string;
  profile: string;
  specialties?: string[];
  works?: string[];
  publications?: string[];
  services?: string[];
  courses?: string[];
  achievements?: string[];
  otherActivities?: string[];
}
```