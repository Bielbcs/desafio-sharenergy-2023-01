import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import '../styles/Login.css';

export default function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const redirectPage = ({ email, password }: typeof inputs) => {
    if (email === 'desafiosharenergy' && password === 'sh@r3n3rgy')
      return navigate('/home')
    return setErrorMessage(true);
  }

  useEffect(() => {
    const saved = localStorage.getItem('inputs');
    if (saved) {
      const test = JSON.parse(saved);
      redirectPage(test);
    }
  }, []);

  const handleCheckbox = ({ currentTarget: { checked } }: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (checked)
      return localStorage.setItem('inputs', JSON.stringify(inputs));
    if (localStorage.getItem('inputs'))
      return localStorage.removeItem('inputs');
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirectPage(inputs);
  }

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
  }

  return (
    <div className="login-form-container">
      <h1>Projeto Sharenergy</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="row g-3 login-form" autoComplete="off">
        {errorMessage && <span className="alert alert-danger">Usuário ou senha inválidos</span>}
        <label htmlFor="login">
          <input type="text" name="email" className="form-control" 
          id="login" value={inputs.email} onChange={handleInputs} placeholder="E-mail" />
        </label>
        <label htmlFor="password">
          <input type="password" name="password" className="form-control" 
          value={inputs.password} onChange={handleInputs} placeholder="Senha" />
        </label>
        <label htmlFor="checkbox" className="form-check-label">
          <input
          className="form-check-input"
          type="checkbox" 
          name="remember"
          style={{ marginRight:'5px' }}
          id="checkbox"
          onClick={handleCheckbox} />
          Lembrar
        </label>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  )
}
