const BlogCard = ({ image, date, title, description }) => {
    return (
      <div className="flex flex-col md:flex-row items-start gap-4 p-4 bg-white rounded-lg shadow-md mb-6">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col justify-between">
          <p className="text-gray-500 text-sm">{date}</p>
          <h2 className="text-xl font-semibold text-black mt-2">{title}</h2>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
          <a
            href="#"
            className="text-yellow-500 font-medium mt-4 hover:underline flex items-center"
          >
            Read more
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    );
  };
  
  export default BlogCard;
  