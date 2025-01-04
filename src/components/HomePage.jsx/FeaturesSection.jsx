import pay from '../../assets/pay.png'
import truck from '../../assets/truck.png'
import chat from '../../assets/chat.png'
import box from '../../assets/box.png'
import card from '../../assets/card.png'

const FeaturesSection = () => {
  const features = [
    {
      icon: card, // Image path for 'Quality Products'
      title: "Quality Products",
      description: "Quality Products for Industrial Excellence",
    },
    {
      icon: pay, // Image path for 'Secure Payments'
      title: "Secure Payments",
      description: "Shop securely with our trusted payment solutions.",
    },
    {
      icon: box, // Image path for 'Easy Returns'
      title: "Easy Returns",
      description: "Hassle-free returns for your shopping convenience.",
    },
    {
      icon: truck, // Image path for 'Free Delivery'
      title: "Free Delivery",
      description: "Enjoy free shipping on all orders.",
    },
    {
      icon: chat, // Image path for '24×7 Support'
      title: "24×7 Support",
      description: "24/7 support always here for you.",
    },
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.icon} alt={feature.title} className="w-36 h-36 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default FeaturesSection;
