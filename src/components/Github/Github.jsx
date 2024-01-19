import { useLoaderData } from "react-router-dom";
const Github = () => {
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/roughbot")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="text-center bg-gray-600 m-4 p-4 text-3xl text-white">
      User Name: {data.name}
      <img src={data.avatar_url} alt={data.name} width={200} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/roughbot");
  return response.json();
};
