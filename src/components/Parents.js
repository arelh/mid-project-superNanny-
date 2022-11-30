import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import EditBox from "./EditBox";

// import Card from "./Card";


function Parents() {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMes, setErrorMes] = useState(null);
  const [query, setQuery] = useState("");
  const [Edit, setEdit] = useState(false);
  const [currentId, setCurrentId] = useState("");
  // const [sorted, setSorted] = useState("");

  console.log(query);
  // console.log(sorted);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny `
        );

        setInfo(data);
        setQuery(data);
        // setSorted(data);


        setIsLoading(false);
        console.log(data);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [Edit]);
  // console.log(sorted);

  const handle = () => {
    if (query) {
      setInfo(search(query));
    }
  };
  //!search
  const search = (query) => {
    return info.filter((item) => item.name.includes(query));
  };

  //!Delete;
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny/${id}`
      );
      setInfo((prevState) =>
        prevState.filter((nanny) => {
          return nanny.id !== data.id;
        })
      );
    } catch (e) {
      setErrorMes(e.message);
      setTimeout(() => {
        setErrorMes(null);
      }, 500);
    }
  };

  //!edit
  const editInfo = (e) => {
    setEdit(true);
    setCurrentId(e.target.id);
  };

  //!Add

  const insertNanny = () => {
    return info.map((s) => {
      return (
        <div className="card" key={s.id}>
          {errorMes && <h2>{errorMes}</h2>}
          <h1 className="infoCard1"> {s.name}</h1>
          <h2 className="infoCard">age: {s.age} </h2>
          <h2 className="infoCard">city: {s.city}</h2>
          <h2 className="infoCard">price (per hour): {s.price} </h2>
          <h2 className="infoCard">phoneNumber: {s.phoneNumber}</h2>
          <h2 className="infoCard">gender: {s.gender}</h2>
          <img src={s.avatar} alt={"Img"} className="imgCard"></img>
          <button
            className="btn-Del-Pr"
            onClick={() => {
              handleDelete(s.id);
            }}
          >
            delete
          </button>
          <button className="btn-Edit-Pr" onClick={editInfo} id={s.id}>
            edit
          </button>

          {Edit && s.id === currentId && (
            <div className="float">
              <EditBox s={s} id={s.id} setEdit={setEdit} setInfo={setInfo} />
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="Parents">
      {isLoading && <Spinner />}
      <div className="search">
        <input
          placeholder="search.."
          className="inputPr"
          onChange={(e) => {
            setQuery(e.target.value);
            handle();
          }}
        />
        <div className="custom-select">
          <select className="select">
            <option value="0">Sort by:</option>
            <option value="1">name</option>
            <option value="2">age</option>
            <option value="3">price(per hour)</option>
          </select>
        </div>
      </div>

      <div className="cards">{insertNanny()}</div>
    </div>
  );
}

export default Parents;
