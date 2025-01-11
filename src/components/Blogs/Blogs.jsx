import BlogCard from "./BlogCard";
import generatorImage from "../../assets/generator.png"; // Replace with your image paths
import factoryImage from "../../assets/generator.png";

const Blogs = () => {
  const blogPosts = [
    {
      image: generatorImage,
      date: "October 12, 2024",
      title: "Diesel Generator Set K19 Series - 600/625 kVA, 480/500 kWe Prime",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ill...",
    },
    {
      image: factoryImage,
      date: "October 12, 2024",
      title: "Blog Post Title",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ill...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16 py-12">
      <h1 className="text-3xl font-bold text-black mb-8">Blogs</h1>
      {blogPosts.map((post, index) => (
        <BlogCard
          key={index}
          image={post.image}
          date={post.date}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default Blogs;
