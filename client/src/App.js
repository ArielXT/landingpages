import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import avatar from './img/anya.png';
import bg from './img/dash.png';
import wave from './img/wave.png';
function App() {


  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [direccion, setDireccion] = useState("");

  const [subscritosList, setSubscritosList] = useState([]);



  const addSub = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      email: email,
      telefono: telefono,
      direccion: direccion,
    }).then(() => {
      setSubscritosList([
        ...subscritosList,
        {
          nombre: nombre,
          email: email,
          telefono: telefono,
          direccion: direccion,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <img className="wave" src={wave} />
      <div className="App2">
        <div className="hai3">
          <br />
          <br />
          <br />
          <br />
          <h1 >Bienvenido a la nueva plataforma de
            Green Anime Life!</h1>
          <br />
          <Link to={"/precio"} className="btn btn-info izquierdo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!Ir a nuestra pagina de Precios!</Link>
          <br />
        </div>
        <div className="container">
          <div className="col-md-6">
            <div className="img">
              <img src={bg} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="login-content">
              <form style={{ backgroundcolor: '#2dcb92' }} action="index.html">
                <img src={avatar} />
                <h2 className="title">Suscribete</h2>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="div">
                    <h5>Nombre</h5>
                    <input
                      type="text"
                      onChange={(event) => {
                        setNombre(event.target.value);
                      }} />
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="div">
                    <h5>Email</h5>
                    <input
                      type="text"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }} />
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="div">
                    <h5>Telefono</h5>
                    <input
                      type="number"
                      onChange={(event) => {
                        setTelefono(event.target.value);
                      }} />
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-address-card"></i>
                  </div>
                  <div className="div">
                    <h5>Dirección</h5>
                    <input
                      type="text"
                      onChange={(event) => {
                        setDireccion(event.target.value);
                      }} />
                  </div>
                </div>
                <button onClick={addSub} style={{
                  borderRadius: 35,
                  backgroundColor: "#2dcb92",
                  padding: "10px 36px",
                  fontSize: "12px"
                }}
                  variant="contained"
                >Solicitar</button>
              </form>
            </div>
          </div>






        </div>
      </div>
    </div>
  );
}

export default App;
