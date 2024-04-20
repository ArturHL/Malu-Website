import './index.css'

import { IoIosArrowUp } from "react-icons/io";
import InputForm from '../../components/inputForm';
import useLoginPage from '../../hooks/Pages_Hooks/useLoginPage';

const Login = () => {
  const { form, setForm, loginUser, registerUser } = useLoginPage();

  return (
    <div className='loginContainer'>
      <img src="/Logo 2017.png" alt="" className='logo' />
      <a className='goBack' href='/'><IoIosArrowUp />Volver</a>
      <h2 className='title'>{form === 'login' ? 'Inicia Sesion' : 'Registrate'}</h2>
      <section className='subSection'> 
        {
          form === 'login' ? (
            <form className='formLogin'>
              <InputForm type='mail'/>
              <InputForm type='password'/>
              <button className='buttonA' onClick={loginUser}>Iniciar Sesion</button>
            </form>
            ) : (
            <form className='formRegister'>
              <div>
              <InputForm type='name'/>
              <InputForm type='mail'/>
              <InputForm type='phone'/>
              <InputForm type='password'/>
              <InputForm type='confirmPassword'/>
              </div>
              <button className='buttonA' onClick={registerUser}>Registrarse</button>
            </form>
          )
        }
      </section>
      {
        form === 'login' ? (
          <p className='redirection'>¿No tienes una cuenta? Registrate <span onClick={() => setForm('register')}>Aqui</span></p>
        ) : (
          <p className='redirection'>¿Ya tienes una cuenta? <span onClick={() => setForm('login')}>Inicia Sesion</span></p>
        )
      }
    </div>
  );
};

export default Login;
