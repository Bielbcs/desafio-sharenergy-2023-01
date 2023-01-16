import axios from 'axios';
import { useState } from 'react';
import '../styles/DogPage.css';
import back from '../assets/back.png';
import { useNavigate } from 'react-router';

const DogPage = () => {
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const makeRequest = () => {
    axios.get('https://random.dog/woof.json').then(res => setImage(res.data.url));
  }

  return (
    <div className='cat-main-container'>
        <div className='cat-header'>
          <img src={back} className="images" onClick={() => navigate('/home')} />
        </div>
      <div className="cat-container" style={{ rowGap: '10px' }}>
        <img src={image} onError={(e) => e.currentTarget.src = 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'} alt="doggo" />
        <button className="btn btn-primary" onClick={makeRequest}>Refresh</button>
      </div>
    </div>
  )
}

export default DogPage;