
import { Post } from './types';

export const SITE_NAME = "NextGen SSG";
export const MOCK_POSTS: Post[] = [
  {
    id: "1",
    title: "Next.js 15とoutput: 'export' の活用",
    excerpt: "最新のNext.jsにおける静的エクスポート設定と、そのデプロイ戦略について解説します。",
    content: `
      # Next.js 15とoutput: 'export' の活用
      静的サイト生成（SSG）を最大限に活かすには、` + "`next.config.ts`" + ` での適切な設定が不可欠です。
      
      ## なぜ設定が必要か
      デフォルトのNext.jsは、Node.jsサーバーが背後で動くことを前提としています。しかし、S3やGitHub Pagesなどの静的ホスティングを利用する場合、ビルド時にすべてのルートを確定させる必要があります。
      
      ## 主な設定項目
      1. **output: 'export'**: コアとなる設定です。
      2. **trailingSlash**: ディレクトリ構造を整理し、SEOを向上させます。
      3. **images.unoptimized**: 静的環境での画像表示を保証します。
      
      これらを組み合わせることで、堅牢な静的サイトが完成します。
    `,
    date: "2024-03-20",
    author: "田中 太郎",
    category: "テクノロジー",
    imageUrl: "https://picsum.photos/seed/nextjs/800/400"
  },
  {
    id: "2",
    title: "Tailwind CSSでデザインを加速する",
    excerpt: "ユーティリティファーストなCSS設計が、チーム開発の効率をどう変えるか解説します。",
    content: `
      # Tailwind CSSの魅力
      Tailwind CSSは、クラス名を直接HTMLに書くことでスタイルを適用する革新的なアプローチです。
      
      ## なぜTailwindなのか？
      - 命名に悩まない。
      - CSSファイルが肥大化しない。
      - レスポンシブ対応が簡単。
      
      デザインの一貫性を保ちながら、爆速で開発を進めることができます。
    `,
    date: "2024-03-21",
    author: "佐藤 花子",
    category: "デザイン",
    imageUrl: "https://picsum.photos/seed/design/800/400"
  },
  {
    id: "3",
    title: "Gemini APIを活用した次世代コンテンツ生成",
    excerpt: "AIをブログシステムに組み込み、記事の要約や翻訳を自動化する手法を紹介します。",
    content: `
      # AIとWeb開発の融合
      GoogleのGemini APIを利用することで、静的なコンテンツに動的な付加価値を与えることができます。
      
      ## 活用例
      - 記事の要約生成。
      - 関連キーワードの抽出。
      - 多言語対応の自動化。
      
      この記事では、実際にAPIを呼び出すコード例とともに解説を進めます。
    `,
    date: "2024-03-22",
    author: "AI Explorer",
    category: "AI",
    imageUrl: "https://picsum.photos/seed/ai/800/400"
  }
];
