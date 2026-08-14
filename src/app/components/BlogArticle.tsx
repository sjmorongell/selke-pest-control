import { ArrowRight } from 'lucide-react';

interface BlogArticleProps {
  title: string;
  excerpt: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function BlogArticle({ title, excerpt, icon, href, onClick }: BlogArticleProps) {
  const inner = (
    <div className="p-6">
      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
      <span className="text-cyan-600 hover:text-cyan-700 flex items-center gap-2 transition-colors">
        Read Article <ArrowRight className="w-4 h-4" />
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        {inner}
      </a>
    );
  }

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {inner}
    </div>
  );
}
