import { useEffect, useState } from "react";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yamuna11198"
        );
        const data = await res.json();
        setPosts(data.items.slice(0, 6)); // Show latest 3 blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
const extractImage = (content) => {
    console.log("Extracting image from content:", content);
  const match = content.match(/<img[^>]+src="([^">]+)"/);
  console.log("Extracted image URL:", match ? match[1] : "No image found");
  return match ? match[1] : null;
};

  return (
    <section className="relative py-32 bg-[#0B0F19] text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#7B61FF]/10 blur-[150px] -top-40 right-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="mb-20">
          <h2 className="text-5xl font-bold tracking-tight">
            Latest <span className="text-[#7B61FF]">Blogs</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl">
            Writing about  React/Angular architecture, scalable UI systems, modern frontend engineering,
            AI tools, productivity and the real-life dev journey. 
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#7B61FF]/40 transition duration-500 hover:-translate-y-2"
            >
              
              {/* Thumbnail */}
              {extractImage(post.content) && (
  <img
    src={extractImage(post.content)}
    alt={post.title}
    className="w-full h-48 object-cover group-hover:scale-105 transition duration-700"
  />
)}


              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#7B61FF] transition">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-3">
                  {post.description.replace(/<[^>]+>/g, "")}
                </p>

                <span className="inline-block mt-6 text-sm text-[#00F5D4]">
                  Read Article →
                </span>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blogs;
