import { posts } from '../data/posts';
import BlogPost from '../components/BlogPost';

function HomePage() {
  return (
    <div style={{ 
      width: '100% !important',
      display: 'flex !important',
      flexDirection: 'column !important',
      alignItems: 'center !important',
      padding: '2rem !important',
      minHeight: '100vh'
    }}>

      <main>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}

export default HomePage;