import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-green-600 text-white font-semibold py-3 text-center text-5xl">
      User: {userid ? userid : "Enter a string after the '/' in the URL"}
    </div>
  );
};

export default User;
