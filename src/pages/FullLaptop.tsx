import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';

const FullLaptop: React.FC = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = React.useState<{
    name: string;
    imageurl: string;
  }>();
  const navigate = useNavigate();

  React.useEffect(() => {
    (async function fetchLaptop() {
      try {
        const { data } = await axios.get(`https://62b8167df4cb8d63df586b74.mockapi.io/items/` + id);
        setLaptop(data);
      } catch (error) {
        alert('Ошибка, нет такого ноутбука');
        navigate('/');
      }
    })();
  }, []);

  if (!laptop) {
    return <>Loading...</>;
  }
  return (
    <div className="container">
      {' '}
      <div className="laptop__name">{laptop.name}</div>
      <img className="laptop__image" src={laptop.imageurl} alt="Laptop" />
      <div className="laptop__info"></div>
    </div>
  );
};

export default FullLaptop;
