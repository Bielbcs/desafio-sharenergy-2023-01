import { useState } from 'react';
import Modal from 'react-modal';
import React from 'react';
import { IModalProps } from '../interfaces/IUser';
import close from '../assets/close.png';
import '../styles/FormModal.css';

const FormModal = ({ modalIsOpen, handleEditBtn, closeModal }: IModalProps) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    address: '',
    cpf: '',
    phone: '',
  });


  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.currentTarget.name]: e.currentTarget.value })
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="modal-header">
        <span>Insira os dados</span>
        <img src={close} onClick={closeModal} className="images" />
      </div>
      <form autoComplete='off' className="model-form">
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" className="form-control"
            value={inputs.name} id="name" onChange={handleInputsChange} />
        </label>
        <label htmlFor="email">
          E-mail:
          <input className="form-control" type="email" name="email"
            value={inputs.email} id="email" onChange={handleInputsChange} />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input className="form-control" type="number"
            name="phone" value={inputs.phone} id="phone" onChange={handleInputsChange} />
        </label>
        <label htmlFor="address">
          Endereço:
          <input className="form-control" type="text"
            name="address" value={inputs.address} id="address" onChange={handleInputsChange} />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input className="form-control" type="number"
            name="cpf" id="cpf" value={inputs.cpf} onChange={handleInputsChange} />
        </label>
        <button type="button" className="btn btn-primary" onClick={() => handleEditBtn(inputs)}>Enviar</button>
      </form>
    </Modal>
  )
}

export default FormModal;