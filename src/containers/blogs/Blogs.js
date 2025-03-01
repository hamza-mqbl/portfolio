import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split(/<\/p>/i)
          .map(part => part.split(/<p[^>]*>/i).pop())
          .filter(el => el.trim().length > 0)
          .map(el => el.replace(/<\/?[^>]+(>|$)/g, "").trim())
          .join(" ")
      : NaN;
  }

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);

  if (!blogSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>

        {/* Add a line and button */}
        <div style={{ marginTop: "2rem" }}>
          {/* <p style={{ 
            fontSize: "1.2rem", 
            color: isDark ? "#fff" : "#333", 
            marginBottom: "1.5rem" 
          }}>
            Check out my blogs on my external website!
          </p> */}
          <button
            style={{
              padding: "0.8rem 1.5rem",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#fff",
              backgroundColor: isDark ? "#55198b" : "#55198b",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              boxShadow: isDark ? "0 4px 6px rgba(108, 99, 255, 0.2)" : "0 4px 6px rgba(0, 123, 255, 0.2)",
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = isDark ? "#8c43ce" : "#8c43ce"}
            onMouseOut={(e) => e.target.style.backgroundColor = isDark ? "#55198b" : "#55198b"}
            onClick={() => window.open("https://mern-blog-3vqj.onrender.com", "_blank")}
          >
            Visit My Blog
          </button>
        </div>
      </div>
    </Fade>
  );
}