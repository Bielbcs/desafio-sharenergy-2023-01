import { useState } from "react";
import { IClient, IClientProp } from "../interfaces/IUser";
import FormModal from "./FormModal";
import { putRequest } from "../services/api";
import '../styles/ClientComponent.css';
import trash from '../assets/trash.png';
import pen from '../assets/pen.png';
import more from '../assets/more.png';

const ClientComponent = ({data, deleteClient, getClients}: IClientProp) => {
  const [details, setDetails] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleEditBtn = async (inputs: IClient) => {
    const obj: Record<string, any> = {...inputs};

    for (const key in obj) {
      if (!obj[key]) delete obj[key];
    }

    await putRequest(`/clients/${data._id}`, obj);
    getClients();
    closeModal();
  }

  return  (
    <div className="client-component-main-container">
      <div className="name-trash-container">
        <span>Nome: <b>{data.name}</b></span>
        <img src={trash}  onClick={() => deleteClient(data._id as string)} 
        className="images" />
      </div>
        {details && 
        <div>
          <i>
            <p>Email: {data.email}</p>
            <p>Endereço: {data.address}</p>
            <p>CPF: {data.cpf}</p>
            <p>Telefone: {data.phone}</p>
          </i>
        </div>}
      <div className="pen-details-container">
        <img src={pen} onClick={() => openModal()} className="images" />
        <img src={more} onClick={() => setDetails(details === false ?? true)} className="images"/>
      </div>
      {modalIsOpen && 
        <FormModal modalIsOpen={modalIsOpen} handleEditBtn={handleEditBtn} closeModal={closeModal}/>
      }
    </div>
  )
}

export default ClientComponent;