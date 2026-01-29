
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_POSTS } from '../constants';
import { summarizePost } from '../services/geminiService';
import { UIStatus } from '../types';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = MOCK_POSTS.find(p => p.id === id);
  
  const [summary, setSummary] = useState<string>('');
  const [status, setStatus] = useState<UIStatus>(UIStatus.IDLE);

  const handleSummarize = async () => {
    if (!post) return;
    setStatus(UIStatus.LOADING);
    try {
      const result = await summarizePost(post.content);
      setSummary(result);
      setStatus(UIStatus.SUCCESS);
    } catch (err) {
      setStatus(UIStatus.ERROR);
    }
  };

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Return to blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        Back to Blog
      </Link>

      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full aspect-video object-cover rounded-3xl shadow-lg mb-10"
      />

      <div className="flex items-center space-x-3 text-sm text-gray-500 mb-6">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">{post.category}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>By {post.author}</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
        {post.title}
      </h1>

      {/* AI Summary Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 mb-12 border border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 opacity-10">
          <svg className="w-20 h-20 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
          <span className="mr-2">✨</span> AI 要約 (powered by Gemini)
        </h3>
        
        {status === UIStatus.IDLE && (
          <button 
            onClick={handleSummarize}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center"
          >
            要約を生成する
          </button>
        )}

        {status === UIStatus.LOADING && (
          <div className="flex items-center space-x-2 text-blue-600">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="font-medium">AIが思考中...</span>
          </div>
        )}

        {status === UIStatus.SUCCESS && (
          <p className="text-blue-800 leading-relaxed italic">
            "{summary}"
          </p>
        )}

        {status === UIStatus.ERROR && (
          <p className="text-red-500">
            エラーが発生しました。時間を置いて再度お試しください。
          </p>
        )}
      </div>

      <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
        {post.content.split('\n').map((line, i) => {
          if (line.trim().startsWith('##')) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-12 mb-4">{line.replace('##', '')}</h2>;
          if (line.trim().startsWith('#')) return null;
          if (line.trim().startsWith('-')) return <li key={i} className="ml-4">{line.replace('-', '')}</li>;
          return <p key={i}>{line}</p>;
        })}
      </div>
    </article>
  );
};

export default PostDetail;
