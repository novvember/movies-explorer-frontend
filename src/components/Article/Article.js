import './Article.css';

function Article({ title, navId, isThemed = false, children }) {
  return (
    <section
      className={`article section${isThemed ? ' article_themed' : ''}`}
      {...(navId ? { id: navId } : {})}
    >
      <h2 className="article__title">{title}</h2>
      {children}
    </section>
  );
}

export default Article;
