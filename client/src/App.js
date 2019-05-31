import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MeteoriteList from './components/MeteoriteList';
import Loading from './components/Loading';
import axios from 'axios';

function App() {
  const [meteorites, setMeteorites] = useState([]);
  const [loading, setLoading] = useState(true);

  function sortByName(data) {
    return data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  useEffect(() => {
    if (!meteorites.length) {
      // const callApi = async () => {
      //   await axios
      //     .get('/api')
      //     .then((response) => {
      //       console.log(response.data);
      //       !meteorites.length && setMeteorites(sortByName(response.data));
      //       setLoading(false);
      //     })
      //     .catch((error) => {
      //       alert(error);
      //     });
      // };
      callApi()
        .then((res) => {
          console.log(res);
          setMeteorites(sortByName(res));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  });

  const callApi = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  return (
    <div className="Container text-center">
      <h1>Meteorite Explorer</h1>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <MeteoriteList meteorites={meteorites} />
        </div>
      )}
    </div>
  );
}

export default App;
