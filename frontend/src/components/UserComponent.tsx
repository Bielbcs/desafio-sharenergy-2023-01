import { IUserProp } from "../interfaces/IUser";
import '../styles/HomePage.css';

const UserComponent = ({data}: IUserProp) => {
  return  (
    <div className="users-container">
      <div style={{marginRight: '20px', marginTop: '20px'}}>
        <img src={data.picture} style={{ borderRadius: '50%' }} alt="image" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontStyle: 'italic', alignContent: 'center', justifyContent: 'center' }}>
        <span><b>{data.name}</b></span>
        <span>Email: <b style={{ fontSize: '10pt' }}>{data.email}</b></span>
        <span>Username: <b>{data.username}</b></span>
        <span>Idade: <b>{data.age}</b></span>
      </div>
    </div>
  )
}

export default UserComponent;