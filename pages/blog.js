import Navigation from '../components/navigation';
import Link from 'next/link';
import Logo from '../components/logo';

const Blog = () => {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 py-6">
        <Link href="/">
          <a className="z-50">
            <Logo className="h-8 hover:text-foxfire-600" />
          </a>
        </Link>
        <Navigation />
      </div>
      Hallo von den Blogs.
    </div>
  );
};

export default Blog;
