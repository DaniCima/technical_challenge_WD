import { useState, useEffect } from "react";
import axios from "axios";
import PhoneCard from "../components/PhoneCard";

const API_URL = "http://localhost:6005";

function Phones() {
  const [phones, setPhones] = useState([]);
  const getAllPhones = () => {
    axios
      .get(`${API_URL}/phones`)
      .then((response) => setPhones(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllPhones();
  }, []);
  return (
    <div>
      {phones.map((phone) => {
        return <PhoneCard key={phone.id} {...phone} />;
      })}
    </div>
  );
}

export default Phones;
