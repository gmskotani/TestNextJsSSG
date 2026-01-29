
import React from 'react';
import { MOCK_POSTS } from '../constants';
import PostCard from '../components/PostCard';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Latest Updates</h1>
        <p className="text-lg text-gray-600">
          静的サイト生成と最新技術に関する知見をお届けします。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_POSTS.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
