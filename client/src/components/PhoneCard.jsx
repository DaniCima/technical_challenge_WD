import { Link } from "react-router-dom";

function PhoneCard({ name, description, id }) {
  return (
    <div>
      <Link to={`/phones/${id}`}>
        <h3>{name}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}

export default PhoneCard;
