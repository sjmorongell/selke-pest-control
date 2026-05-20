import { ArrowRight } from 'lucide-react';

interface BlogArticleProps {
  title: string;
  excerpt: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export function BlogArticle({ title, excerpt, icon, onClick }: BlogArticleProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <button
          onClick={onClick}
          className="text-cyan-600 hover:text-cyan-700 flex items-center gap-2 transition-colors"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
