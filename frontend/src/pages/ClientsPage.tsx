import { useEffect, useState } from 'react';
import ClientComponent from '../components/ClientComponent';
import FormModal from '../components/FormModal';
import { IClient } from '../interfaces/IUser';
import { deleteRequest, getRequest, postRequest } from '../services/api';
import '../styles/ClientPage.css';

const ClientPage = () => {
  const [clients, setClients] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleEditBtn = async (inputs: IClient) => {
    await postRequest(`/clients`, inputs);
    getClients();
    closeModal();
  }


  const getClients = () => {
    getRequest('/clients').then(res => setClients(res));
  }

  const deleteClient = async (id: string) => {
    await deleteRequest(`/clients/${id}`);
    getClients();
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="client-page-main-container">
      <div className="clients-container">
        <div>
          <button onClick={openModal} className="btn btn-primary">Inserir novo cliente</button>     
        </div>
        <div className="only-clients">
          {clients.length ? clients.map((client: IClient) => <div key={client._id}>
            <ClientComponent data={client} deleteClient={deleteClient} getClients={getClients} />
          </div>) : <span>Nenhum usuário cadastrado</span>}
        </div>
        {modalIsOpen &&
          <FormModal modalIsOpen={modalIsOpen} handleEditBtn={handleEditBtn} closeModal={closeModal}/>
        }
      </div>
    </div>
  )
}

export default ClientPage;