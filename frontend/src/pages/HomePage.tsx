import axios from 'axios';
import { useEffect, useState } from 'react';
import UserComponent from '../components/UserComponent';
import { useNavigate } from 'react-router';
import { IUser } from '../interfaces/IUser';
import '../styles/HomePage.css';
import cat from '../assets/cat.png';
import dog from '../assets/dog.png';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const navigate = useNavigate();

  const makeRequest = () => {
    axios.get(`https://randomuser.me/api/?page=${pageNumber}
      &results=12
      &seed=abc&inc=name,email,registered,picture,login`).then(({ data: { results } }) => {

      const newArr = results.map((user: any) => {
        return {
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.medium,
          email: user.email,
          username: user.login.username,
          age: user.registered.age
        }
      });
      setUsers(newArr);
      setFiltered([]);
      setPageNumber((prevState) => prevState += 1);
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filtered = users.filter((user: IUser) => {
      if (user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        || user.username.toLowerCase().includes(value)) return true;
    });
    setFiltered(filtered);
  }

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <div className="home-header">
          <img src={cat} className="images" onClick={() => navigate('/cat')} />
          <input type="text" name="search" autoComplete='off'
          placeholder='Nome, Email ou Username'
          style={{ width: '350px' }}
          className='form-control' onChange={handleChange} />
          <img src={dog} className="images" onClick={() => navigate('/dog')}/>
        </div>
      <div className="home-page-container">
        <div className="home-page-container">
          {!filtered.length ? users.map((user: IUser, index) => <UserComponent key={index} data={user} />)
            : filtered.map((user: IUser, index) => <UserComponent key={index} data={user} />)}
        </div>
      </div>
      <button onClick={makeRequest} className="btn btn-primary">{'Proxima página >'}</button>
    </div>
  )
}

export default HomePage;