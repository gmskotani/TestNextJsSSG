
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
              The Web Framework for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Performance & SEO
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              静的サイト生成(SSG)とAIの融合。NextGen SSGは、最速のレスポンスタイムと
              Gemini AIによるインテリジェントなコンテンツ管理を提供します。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/blog" className="px-8 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                Start Reading
              </Link>
              <a href="#" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                Documentation
              </a>
            </div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="text-gray-600">SSGにより、すべてのページは事前にビルドされ、世界中のエッジサーバーから瞬時に配信されます。</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21a8.966 8.966 0 01-5.917-2.24L6 18c.247-1.42 1.486-2.5 3-2.5h6c1.514 0 2.753 1.08 3 2.5l-.083.48A8.967 8.967 0 0112 21z"/></svg>
              </div>
              <h3 className="text-2xl font-bold">Secure by Default</h3>
              <p className="text-gray-600">動的なサーバーサイド処理を排除することで、アタックサーフェスを最小限に抑えます。</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
              </div>
              <h3 className="text-2xl font-bold">AI Optimized</h3>
              <p className="text-gray-600">Gemini 3を組み込み、コンテンツの文脈を理解した検索や自動要約を実現します。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
