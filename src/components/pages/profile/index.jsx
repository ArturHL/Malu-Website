import './index.css';

const ProfilePage = () => {
  return (
    <>
      <div className="profile-card">
        <img src="profile-picture.jpg" alt="Profile Picture" />
        <h2>Nombre de Usuario</h2>
      </div>

      <div className="section">
        <h3>Correo Electrónico</h3>
        <p>correo@example.com</p>
      </div>

      <div className="section">
        <h3>Contraseña</h3>
        <p>********</p>
      </div>

      <div className="section">
        <h3>Métodos de Pago</h3>
        <div className="payment-methods">
          <div className="payment-method">
            <img src="credit-card-icon.png" alt="Credit Card" />
            <p>**** **** **** 1234</p>
            <button>Eliminar</button>
          </div>
          <div className="payment-method">
            <img src="credit-card-icon.png" alt="Credit Card" />
            <p>**** **** **** 5678</p>
            <button>Eliminar</button>
          </div>
          <button>Agregar Método de Pago</button>
        </div>
        <div className="payment-preview">
          <img src="credit-card-icon.png" alt="Credit Card" />
          <p>**** **** **** 1234</p>
        </div>
      </div>

      <div className="section">
        <button>Ver Historial de Pedidos</button>
        <button>Realizar Nuevo Pedido</button>
      </div>

      <div className="section">
        <button>Cambiar Contraseña</button>
        <button>Cambiar Correo Electrónico</button>
        <button>Cambiar Nombre</button>
      </div>

      <div className="section">
        <button>Cerrar Sesión</button>
        <button>Pedir Ayuda</button>
      </div>
    </>
  );
};

export default ProfilePage;
