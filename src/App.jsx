import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { getCatsFetch } from "./catState";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  const [visibleCats, setVisibleCats] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCats(cats.slice(0, 10));
  }, [cats]);

  const handleViewMore = () => {
    setShowAll(true);
    setVisibleCats(cats);
  };

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum iusto
        qui id eum reprehenderit.
      </p>
      <hr />
      <div className="Gallery">
        {visibleCats.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                alt={cat.name}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>Temperament: {cat.temperament}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
      {!showAll && <button onClick={handleViewMore}>VIEW MORE CATS</button>}
    </div>
  );
}

export default App;
