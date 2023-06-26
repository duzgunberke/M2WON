import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import React, { useState } from 'react';
import Button from "./Button";

const Billing = () => {
  const [selectedOption, setSelectedOption] = useState('A');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const options = [
    {
      id: 'A',
      title: 'EU-WEST',
      items: ["EU-WEST",
      "HYPERIA",
      "CHIMERA",
      "TIGERGHOST",
      "TEUTONIA",
      "IBERIA",
      "ITALIA",
      "EUROPE",
      "GERMANIA",
      "AZRAEL"],
    },
    {
      id: 'B',
      title: 'EU-EAST',
      items: ["ČESKO",
        "LUNA",
        "KIRIN",
        "POLYPHEMOS",
        "POLSKA",
        "MAGYAR",
        "CARPATIANS",
        "TARA ROMÂNIA",
        "ROMÂNIA"],
    },
  ];

  return (
    <section id="product">
     <div className="text-center my-4">
        <h2 className={styles.heading2}>Satın Almak için Discord üzerinde iletişime geçin</h2>
        <Button className="mx-auto" /> {/* Butonu ortalamak için mx-auto sınıfını ekledik */}
      </div>
  <div className="flex flex-col items-center">
    <div className="mb-4">
      {options.map((option) => (
        <button
          key={option.id}
          className={`px-4 py-2 mr-2 ${
            selectedOption === option.id ? 'bg-secondary text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleOptionClick(option.id)}
        >
          {option.title}
        </button>
      ))}
    </div>
    {selectedOption && (
      <div className="flex flex-wrap justify-center animate-fade-in-long">
        {options.map((option) =>
          option.id === selectedOption ? (
            option.items.map((item, index) => (
              <div
                key={item}
                className="max-w-md bg-white shadow-md rounded p-4 mt-2 mx-2 animate-slide-up-long text-lg w-full md:w-auto"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                <p className="font-bold text-primary">{item}</p>
                <button className="mt-4 px-4 py-2 bg-dimBlue text-primary rounded">
                  Click To Buy It
                </button>
              </div>
            ))
          ) : null
        )}
      </div>
    )}
  </div>
</section>
  );
};


export default Billing;
