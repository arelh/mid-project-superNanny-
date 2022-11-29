import React from 'react'

function fetchData() {
  return (
    <div>fetchData</div>
  )
}

export default fetchData

const [nanny, setNanny] = useState([]);

const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://6374c35a08104a9c5f8866ff.mockapi.io/superNanny`
      );
      setNanny(data);
    } catch (e) {
      console.log(e.message);
    }

  };