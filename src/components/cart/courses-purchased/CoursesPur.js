import React, { useEffect, useState } from "react";
import { formatPrice } from "../../utils/utils";
// import { useCurrency } from "../../../contexts/CurrencyContext";

const CoursesPur = ({ cartProducts }) => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    setCountry(savedCountry || "Nigeria");
  }, []);

  const getPriceLabel = (price) => {
    return country === "Nigeria"
      ? `NGN${formatPrice(price)}`
      : `USD${formatPrice(price)}`;
  };

  return (
    <div>
      <label className="font-bold text-cyan-900 py-2">Courses Purchased</label>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-3 py-2">Course</th>
            <th className="border border-gray-300 px-3 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-3 py-2">{item.title}</td>
              <td className="border border-gray-300 px-3 py-2">
                {getPriceLabel(item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPur;
