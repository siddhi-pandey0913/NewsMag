import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `/api/news?category=${category}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold fs-2">
          Latest <span className="badge bg-danger fs-6 px-3 py-2">📰 News</span>
        </h2>
        <p className="text-muted">Stay updated with the latest headlines</p>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Fetching latest news...</p>
        </div>
      ) : (
        <div className="row g-4">
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <NewsItem
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-5">No articles found. Try another category!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;