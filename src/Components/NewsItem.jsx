import image from '../assets/news.avif'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div 
      className="card bg-dark text-light h-100 shadow-lg rounded-4 overflow-hidden transition"
      style={{
        maxWidth: "345px",
        border: "none",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(220, 53, 69, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
        <img 
          src={src?src:image} 
          style={{
            height: "100%", 
            width: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease"
          }} 
          className="card-img-top" 
          alt={title}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
        <div 
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(220, 53, 69, 0.9)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "bold"
          }}
        >
          BREAKING
        </div>
      </div>
      
      <div className="card-body d-flex flex-column" style={{ gap: "12px" }}>
        <h5 className="card-title fw-bold" style={{ fontSize: "1.1rem", lineHeight: "1.4" }}>
          {title.slice(0, 50)}...
        </h5>
        <p 
          className="card-text flex-grow-1" 
          style={{ fontSize: "0.9rem", color: "#adb5bd", lineHeight: "1.5" }}
        >
          {description ? description.slice(0, 90) : "It is information about something that has just happened"}...
        </p>
        <a 
          href={url} 
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-danger btn-sm fw-bold rounded-pill"
          style={{
            padding: "8px 20px",
            transition: "all 0.3s ease",
            alignSelf: "flex-start"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#a71d2a";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsItem;