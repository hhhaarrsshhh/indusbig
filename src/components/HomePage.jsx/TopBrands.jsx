import ansellLogo from "../../assets/ansellLogo.png"; 
import perkinsLogo from "../../assets/perkinsLogo.png";
import cumminsLogo from "../../assets/cumminsLogo.png";
import mitsubishiLogo from "../../assets/mitsubishiLogo.png";
import makitaLogo from "../../assets/makitaLogo.png";

const TopBrands = () => {
  const brands = [
    { id: 1, name: "Ansell", logo: ansellLogo },
    { id: 2, name: "Perkins", logo: perkinsLogo },
    { id: 3, name: "Cummins", logo: cumminsLogo },
    { id: 4, name: "Mitsubishi", logo: mitsubishiLogo },
    { id: 5, name: "Makita", logo: makitaLogo },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">TOP BRANDS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-32 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
