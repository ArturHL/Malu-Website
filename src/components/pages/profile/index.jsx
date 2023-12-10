import './index.css';

const ProfilePage = () => {
  return (
    <section className='profileSection'>
      <div className="section profile-card">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" alt="Profile Picture" />
        <h2>Nombre de Usuario <label className='labelEdit'>Editar</label></h2>
      </div>

      <div className="section dataSection">
        <h3>Datos De la Cuenta</h3>
        <p>Correo: correo@example.com <label className='labelEdit'>Editar</label></p>
        <p>Contraseña: ******** <label className='labelEdit'>Editar</label></p>
      </div>

      <div className="section">
        <button className='buttonB'>Ver Historial de Pedidos</button>
        <button className='buttonA'>Realizar Nuevo Pedido</button>
      </div>

      <div className="section">
        <h3>Métodos de Pago</h3>
        <div className="payment-methods">
          <div className="payment-method">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/visa-5-logo-svg-vector.svg" alt="Credit Card" />
            <p>**** **** **** 1234</p>
            <button className='buttonB'>Eliminar</button>
          </div>
          <div className="payment-method">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA21BMVEX////rABv3nhv/XwDqAADrABr3mAD3mgD/XgD2lgD/YgD3oBz/WwD3nRj2ohzrABXrAA33pC795cv///7+9fbrABHydn3+bAj8dQz7ghH5jxb96NLwXGX+9+74rUv+8OD2q6/+8fP6xov7zZr4rk76ztH706btMD38VAf82LH6ixT84OL4lhj7fQ/+8+n83r35tmP3tLj0k5n96OnzgYf6wYD6TArsJTTzMBP4vcH1nqPuSFLxJhX5xsn5uWz6yZHwYWnzi5DsEyf4PADuQk35uGnzhIr1UUPtKjgV7tJAAAAIF0lEQVR4nO2da3faOBCGA8gSBryGQGi7EO6XZmkbSErZkE1KaLbb//+L1gYngLnZZl5Lbvx+zDnROTxnZjQXWTo7ixUrVqxYsWLFihUrVqxYAdUcdB0NmiXKhYuX9Url3FKlUi8WKVcOX6Xu6GnWT7ANJfrVp0a3edrKl+e91rBg6FznL9JFoTZuX9ejyGzQKM9tNnlT0xJr0jQzb/99Xm4Mgq1caQ8NzoUwDCO5IcMQwmJWa11f0v4WqJqj8hJTYq+WyGYjnxb2pTfUuXBTcjGziBVa55ifRqxm494CdYDTGjEL2H3DM696u6CLg5zWgYlH5Xk9VBm78ETK0QVj1TsPCxevatwjKUeCG+M6/AcHVulG82hTLvsyb45skvUx575IvdhX7Tqcn+5Xt1agMv2ScngxVr7dv3JlqAvfpBxe3Oiptz/aqHwb1Qau2R5clU4Ao1rHJdpq4SqVA/ifC1eelXc4Y/00VA6uq/CR7NX0JKtas64b18LFsX4qqiWugipbY3dOgWqJa95dX/lKBI1VW7j0oRKZajloWN8lk5VfF/5S40SobAku3xe7F4wOlS2Wf1iu3Ds5WLnEO5KN6yulWS1lsq/WwpcdSrNaSnCZWVezT2xWS7F+s0IWrTakj6Wx6rILBCvLuH58+APBynLFmiRXnFJtgm5pHzO591kMLUNIqRfLEBe0ZOYyqVTuXRaDy9AlBK4qitU/qYXSGQNkXHovbFbPMFaZFJzW93BZYbbBdVYWrRSKFm/9bqyQthUmLbwPwmm1w2J1D9sHUy6lM8mIR3lYzqCl3bBS6XcgWMlwMogbFKvExy1WVr71HpTLJ/UQstM7GKtvmR2wUrkPsFweXvncomqcxN87WVm0/kTRqqFhTUC1s3sjXAtbuHQL3IMIM7ivgjwsbEE782EHrCiHrVLoAcuh9QlES3RwsKp5ECvtECpotgWbYshxQqgjJjnKEU3y4YSjvTvhihZqRxSPGFY/YYaVO8YqlcYl8hUEq/DT0Q3TgqWmBQQsXHT3wAqYbCEm1QNp0d0xrb9QpmXQw7pHGZbpiVUqnYFtiOStra5kw4qUacmNWGDTIo5atzDD+uEVVnQ2xK8wWPu7DVumFZXug9Qc69W0UPW0QVpPN0Ltu+81rc+wevoLIaw+qj/qMW94EQqWIBzo4xJS7+F94YewEJ+lg4Wbfh0voTf8EHVqi7KcnsjrzbhogVglBdnsQhUvjIQfTpXYCxeWBfNDTjWfvldkL0SWPILoWI2smc4uKZ+XPkhvOKzBwk0uaL6zUyVxsAUMWjT1oTohyw5aqGKaKGgpFLKAMzFjSMFKnSxrAQuWaQkKWMA5tH9WwAivU8ymVYrv0AhPUR6WpXffN2CpPT/so6roAJuhTQuWw1N8SODrthQ/8ttyWCpH/DHwChbBERGVip0FLFjBQ3AeFzcECwhL5S6N7DMOW7BQg+kkQaKlUhm9gKVyKa1WTqr4iUnlYMGGh/z04eFImZ5yDMu3cGPpGNbbhqW0G76hAP8b7oYqpw7yD5O6YOEy+NOTUrW6yoqXO3Eh7UdvpkVDMZPW3krzj+LUkUozVltKT1lhA4tEsIGF0p8O4E5n/YajMGD3LwAs4JCV4hiNWrmD2pkDMHcIsh0qPQk7U+GDsJWAR45ovjpUKcIrfxJepVJa6TJ6IYUKHlyxQ3KW7UyloAU82k31obQaH9AtYKn/0UBTGT+Mwpe/z8rU0hH44FCVj3eAiQPd1ZKq+GEUvFCV/TACe6EtNeZhuJEhybHuVx162PEk+SmmcTeO/UvJSonD8LgLx0j6fiupcAw3Olfh4u5X8WxYuM8FqC/wxl1i53UwnfsTxApwkR3somCPphUhw5KfmEbJsJA3b3q5FQpoWJDbqOVevan0EYdtyWxrAXMs0OsMsIuhjqfxaaWPg+zSAOaI0i6iNgzYs8lPkmJ8ZG7725Cku6Eid2f3QnIcEXedaxL6drmM6TTunSLibsOWYG9A7p1dROlSZbfmqLC195Ei2GsfVEPo/Qq7/YALWJBb8116CDXI5z6DAlYIT4XZApY9W7RgTySH8gidLVhuqrm3xBzuwR3oy1frCuvFsKg/BQmmZaY3WaEeGYU95CSLFuyR8pBZAac9Zg7PKvQH3W9QGYS23BNh+6CB6SMf1oihcnmbFi6/MkLKGTbVZajO6bdU7gOIlSiEkotuq4l61Z399wnURubIBtYRlRGBS2Pls8sOB6Aywt4GN3XHyI+55dmdvXJbJzcuUZASrlYq3dMal8bum8uV6wVa4zJ08EvIXtRghJGLscZq5RYnNC5eALdFvak0o9oWTTYrra9cr1H5otCJLsc/Xd0+Rc5lsl9d98pXgsIXDX0oKWHYqdH8VFwmm492rdzm4lRUvKaEB66pcRIuC1Vjz8LF7+KU2GWhklDeHNXoF8sH2hm1PJvstCpHxXZgXEIfqmZVL+rOmH/zMhmrbsUqt65rXPjmZXDRonwxjVrNad8XL4vUZNr0snK9ldX98DI474TeivGtwc0v5skfLe9jk6eB95Ur46w3+zIE1zs9lTbAA7ptWP7I8vs/y9BMCxSrNm79rlxvd3QuDhGzQWXH1xEh5WjQKFseaTO7MDXnpiRNMy/yiz9Oyg0fJrWhYqX3WOALZJZeGRmGEJzrotOKGKhXDR6mP2fPkwRzZE6eqz+nd4PS8X89rMv6dXs8rBVsO9J1zkW20Hn8fnUeUU6bKi0EWLjoCLB0rFixYsWKFStWrFixYr0Z/Q9WnEW38MtlfgAAAABJRU5ErkJggg==" alt="Credit Card" />
            <p>**** **** **** 5678</p>
            <button className='buttonB'>Eliminar</button>
          </div>
        </div>
        <button className='buttonA'>Agregar Método de Pago</button>
      </div>

      <div className="section">
        <button className='buttonB'>Pedir Ayuda</button>
        <button className='buttonA'>Cerrar Sesión</button>
      </div>
    </section>
  );
};

export default ProfilePage;
