export interface IUser {
  name: string;
  email: string;
  username: string;
  picture: string;
  age: number;
}

export interface IClient {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
}

export interface IClientProp {
  data: IClient;
  deleteClient: (id: string) => void;
  getClients: () => void;
}

export interface IUserProp {
  data: IUser;
}

export interface IModalProps {
  modalIsOpen: boolean; 
  handleEditBtn: (inputs: IClient) => Promise<void>; 
  closeModal: () => void; 
}