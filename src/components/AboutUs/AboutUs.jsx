const AboutUs = () => {
  return (
    <div className="bg-yellow-50 min-h-screen px-32 py-8">
      {/* Hero Section */}
      <div className="bg-customBgCreamcolor  py-8 px-6 rounded-lg mb-8 shadow-md">
        <h1 className="text-4xl font-bold text-black ">About Us</h1>
      </div>

      {/* Introduction Section */}
      <p className="text-xl font-medium text-black mt-6 leading-relaxed text-left">
        IndusBig is your go-to online B2B marketplace, simplifying the procurement of industrial supplies. 
        Our mission is straightforward: to provide a one-stop-shop solution for our clients with an extensive 
        inventory catering to every need, from nuts to substantial engine parts. We excel in connecting with 
        diverse suppliers, fostering their growth, and expanding their market reach.
        <br />
        <br />
        Our primary focus is on businesses, addressing their procurement needs efficiently. At IndusBig, 
        we believe in straightforward solutions and aim to make industrial procurement hassle-free for our valued clients.
      </p>

      {/* Our Partners Section */}
      <h2 className="text-3xl font-bold text-black text-center mt-12">
        <span
          className="bg-yellow-400 py-2 px-4 relative z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
            display: "inline-block",
          }}
        >
          Our Partners
        </span>
      </h2>

      {/* Our Mission Heading */}
      <h3 className="text-4xl ml-3 font-semibold text-black text-start mt-12">
  Our <span className="text-yellow-400">Mission</span>
  <div className="border-b-2 border-gray-300 mt-2"></div> {/* Light gray underline */}
</h3>


      {/* Our Mission Section */}
      <div className="mt-6">
        <table className="min-w-full table-auto">
          <thead>
            
          </thead>
          <tbody>
            <tr>
              <td className="py-2 font-bold px-4 border-b">Simplifying Maritime Procurement</td>
              <td className="py-2 px-4 border-b">
                A seamless marketplace connecting maritime professionals with trusted suppliers for essential ship materials and parts.
              </td>
            </tr>
            <tr>
              <td className="py-2 font-bold px-4 border-b">Ensuring Quality and Reliability</td>
              <td className="py-2 px-4 border-b">
                Partnering with reputable suppliers to provide durable, high-quality ship parts for maritime operations.
              </td>
            </tr>
            <tr>
              <td className="py-2 font-bold px-4 border-b">Fostering Global Connectivity</td>
              <td className="py-2 px-4 border-b">
                Bridging buyers and suppliers worldwide with international shipping and communication tools.
              </td>
            </tr>
            <tr>
              <td className="py-2 font-bold px-4 border-b">Driving Efficiency and Innovation</td>
              <td className="py-2 px-4 border-b">
                Streamlining procurement through advanced tools, real-time tracking, and digital payments.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutUs;
