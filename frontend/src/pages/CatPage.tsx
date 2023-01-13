import { useState } from 'react';
import '../styles/CatPage.css';
import back from '../assets/back.png';
import { useNavigate } from 'react-router';

const CatPage = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  return (
    <div className="cat-main-container">
      <div className='cat-header'>
        <img src={back} className="images" onClick={() => navigate('/home')} />
      </div>
        <div className="cat-container">
        <img
        src={code ? `https://http.cat/${code}` : 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'}
        alt="cat"
        />
        <label htmlFor="status-code">
          Digite um status code HTTP
          <input 
          type="number" 
          placeholder="Ex. 200, 201, 202..." 
          name="status-code"
          className='form-control'
          id="status-code"
          value={code}
          onChange={(e) => setCode(e.currentTarget.value)}
          />
        </label>
      </div>
    </div>
  )
}

export default CatPage;