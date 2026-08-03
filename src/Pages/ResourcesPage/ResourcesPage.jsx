import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Resources from "../../components/Resources/Resources";
import Footer from "../../components/Footer/Footer";

const ResourcesPage = () => {
  const history = useHistory();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App" style={{ position: "relative" }}>
      {/* Top-Left Corner Back to Home Button (hidden on mobile, overlaps navbar) */}
      <button
        className="back-to-home-btn"
        onClick={() => history.push("/")}
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
          zIndex: 100,
          background: "rgba(255, 255, 255, 0.06)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          color: "#e5e7eb",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "14px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.2s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(232, 160, 69, 0.15)";
          e.currentTarget.style.borderColor = "#E8A045";
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
          e.currentTarget.style.color = "#e5e7eb";
        }}
      >
        ← Back to Home
      </button>

      <div className="content" style={{ paddingTop: "80px" }}>
        <Resources />
        <Footer />
      </div>
    </div>
  );
};

export default ResourcesPage;
