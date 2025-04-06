# ページ遷移図

```mermaid
graph TD
    Home[トップページ /] --> Artists[アーティスト一覧 /artists]
    Home --> School[スクール情報 /school]
    Home --> CSR[CSR活動 /csr]
    Home --> Contact[お問い合わせ /#contact]
    
    Artists --> ArtistDetail[アーティスト詳細 /artists/[id]]
    
    CSR --> Satoyama[里山プロジェクト /satoyama-project]
    CSR --> TeamMuet[チームムエット /team-muet]
    
    School --> SchoolContact[スクールお問い合わせ /school#contact]
    
    subgraph "トップページセクション"
        HomeAbout[About]
        HomeServices[Services]
        HomeWorks[Works]
        HomeArtists[Artists]
        HomeContact[Contact]
    end
    
    subgraph "アーティストページ"
        ArtistProfile[プロフィール]
        ArtistWorks[実績]
        ArtistPublications[著書]
    end
    
    subgraph "スクールページ"
        SchoolCourses[コース一覧]
        SchoolFeatures[特徴]
        SchoolAccess[アクセス]
    end
    
    subgraph "CSRページ"
        CSROverview[活動概要]
        CSRProjects[プロジェクト]
        CSRSupport[支援活動]
    end
```

# 状態遷移図

```mermaid
stateDiagram-v2
    [*] --> Home
    
    state Home {
        [*] --> ScrollTop
        ScrollTop --> ScrollDown
        ScrollDown --> ShowHeader
        ScrollTop --> HideHeader
    }
    
    state Navigation {
        [*] --> Closed
        Closed --> Open : Click hamburger
        Open --> Closed : Click close
    }
    
    state Contact {
        [*] --> FormEmpty
        FormEmpty --> FormFilled : Input
        FormFilled --> Submitting : Submit
        Submitting --> Success : Success
        Submitting --> Error : Error
    }
    
    state Gallery {
        [*] --> First
        First --> Next : Click next
        Next --> Previous : Click previous
        Previous --> First : Click previous
    }