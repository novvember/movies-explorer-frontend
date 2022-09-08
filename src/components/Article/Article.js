import classNames from 'classnames';
import './Article.css';

function Article({ title, navId, isThemed = false, children }) {
  return (
    <section
      className={classNames('article', 'section', { article_themed: isThemed })}
      {...(navId ? { id: navId } : {})}
    >
      <h2 className="article__title">{title}</h2>
      {children}
    </section>
  );
}

export default Article;
