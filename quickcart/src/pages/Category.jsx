import { useParams } from "react-router-dom";

const Category = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Category: {name}</h2>
    </div>
  );
};

export default Category;