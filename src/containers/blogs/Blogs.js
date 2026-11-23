import React, {useContext, useEffect, useState} from "react";
import "./Blog.scss";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Pulls the latest Medium posts via the public rss2json bridge (no key needed for
// low volume), shows up to 3, and falls back to a "Visit my blog" button if the
// feed is empty or the request fails.
const MEDIUM_FEED =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hamzaaliics";

function stripHtml(html = "") {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > 150 ? text.slice(0, 150).trimEnd() + "…" : text;
}

export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [posts, setPosts] = useState([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    fetch(MEDIUM_FEED)
      .then(r => (r.ok ? r.json() : Promise.reject(r)))
      .then(data => {
        if (!active) return;
        if (data && data.status === "ok" && Array.isArray(data.items) && data.items.length) {
          setPosts(data.items.slice(0, 3));
        } else {
          setFailed(true);
        }
      })
      .catch(() => active && setFailed(true));
    return () => {
      active = false;
    };
  }, []);

  if (!blogSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={700} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h2 className="blog-header-text">{blogSection.title}</h2>
          <p className={isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"}>
            {blogSection.subtitle}
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="blog-main-div">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="medium-blog-card"
              >
                <p className="medium-blog-date">
                  {new Date(post.pubDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}
                </p>
                <h3 className="medium-blog-title">{post.title}</h3>
                <p className="medium-blog-excerpt">
                  {stripHtml(post.description || post.content)}
                </p>
                <span className="medium-blog-cta">Read on Medium &rarr;</span>
              </a>
            ))}
          </div>
        ) : (
          <div style={{marginTop: "2rem"}}>
            <a
              href="https://medium.com/@hamzaaliics"
              target="_blank"
              rel="noopener noreferrer"
              className="medium-blog-button"
            >
              {failed ? "Visit my blog" : "Loading posts…"}
            </a>
          </div>
        )}
      </div>
    </Fade>
  );
}
