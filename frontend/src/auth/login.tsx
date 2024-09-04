import { useForm } from "react-hook-form";
import { LoginInterface } from "../utils/interfaces";
import '../styles/login.css'

export const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginInterface>();

  const onSubmit = (data: LoginInterface) => console.log(data);

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Bienvenido</h1>
          <p className="login-subtitle">Inicia sesión para continuar</p>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input type="text" id="username" {...register("username", { required: true })} />
              <label htmlFor="username">Usuario</label>
              {errors.username && <span>This field is required</span>}
            </div>
            <div className="input-group">
              <input type="password" id="password" {...register("password", { required: true })}/>
              <label htmlFor="password">Contraseña</label>
              {errors.password && <span>This field is required</span>}
            </div>
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
