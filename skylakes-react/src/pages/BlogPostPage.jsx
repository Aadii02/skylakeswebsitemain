import React from 'react';
import { Link, useParams } from 'react-router-dom';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import posts from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <StarsBackground />
        <main style={{ paddingTop: '120px', minHeight: '60vh' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
            <h2 style={{ color: 'var(--white)' }}>404 — Post not found</h2>
            <p style={{ color: 'var(--muted2)' }}>We couldn't find the blog post you're looking for.</p>
            <Link to="/blog" className="btn-outline">Back to Blog</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <StarsBackground />
      <main id="blog-post" style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px' }}>
          <div style={{ marginBottom: '18px' }}>
            <div className="section-label" style={{ marginBottom: '8px' }}>{post.tag}</div>
            <h1 className="section-title" style={{ marginBottom: '8px' }}>{post.title}</h1>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '16px' }}>{post.date} · {post.meta}</div>
            <div style={{ marginBottom: '20px' }}>
              <Link to="/blog" className="btn-outline">Back</Link>
            </div>
          </div>

          <article style={{ color: 'var(--muted2)', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </main>
      <Footer />
    </>
  );
}
