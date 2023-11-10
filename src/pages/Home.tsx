import ItemCard from "../components/ItemCard";
import data from "../data/data";

const Home = () => {
  return (
    <div className="cards">
      {data.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Home;
