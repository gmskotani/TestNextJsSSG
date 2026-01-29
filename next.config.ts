
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* 
   * 静的エクスポートを有効化します。
   * これにより 'next build' 時に 'out' フォルダへ静的ファイルが出力されます。
   */
  output: 'export',

  /* 
   * URLの末尾にスラッシュを追加します（例: /about -> /about/index.html）。
   * 多くの静的ホスティングサービスで推奨される設定です。
   */
  trailingSlash: true,

  /* 
   * 静的エクスポートでは Next.js 標準の画像最適化サーバーが利用できないため、
   * 画像最適化を無効化するか、外部の最適化サービスを利用する必要があります。
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
