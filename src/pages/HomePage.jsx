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
      paddingTop: '6rem !important', // Add this line to fix navbar overlap
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