import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:6005";

function OnePhone() {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();

  const getPhoneById = () => {
    axios
      .get(`${API_URL}/phones/${phoneId}`)
      .then((response) => setPhone(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPhoneById();
    // eslint-disable-next-line
  }, [phoneId]);

  return <div>OnePhone</div>;
}

export default OnePhone;
