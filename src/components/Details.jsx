/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  Link, useParams,
} from 'react-router-dom';
// import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import Avatar from '../img/avatar.jpg';
import Header from './Header';
import '../styles/App.scss';
import '../styles/Details.scss';
import { db } from '../firebase/fb-configuration';

const Detail = () => {
  const { id } = useParams();
  const [client, setClient] = useState([]);
  useEffect(() => {
    db.collection('queries').doc(id).get()
      .then((doc) => setClient(doc.data()));
  }, [id]);
  return (
    <>
      <Header />
      <section className="detail__container">
        <div className="detail-card">
          {
          client.status === 'Resuelta'
            ? <Link to="/consultasHistoricas"><AiOutlineArrowLeft /></Link>

            : <Link to="/consultasVigentes"><AiOutlineArrowLeft /></Link>
          }
          <div className="detail">
            <h2>Detalle de consulta</h2>
            <p>ID 132</p>
            <div>
              <p>
                Fecha:
                {client.status }
              </p>
              <p>
                Tema:
                { client.sector }
              </p>
              <p>Sublo Tributario</p>
              <p>Socio a cargo: Cristina Yang Aval</p>
              <p>Gerente a cargo: Maria Alejendra Rivera Lopez</p>
            </div>
          </div>
          <div className="detail-state">
            <button type="button">Descargar consulta</button>
            <table>
              <tr>
                <th>Firstname</th>
                <th>{ client.status }</th>
              </tr>
              <tr>
                <td>Total</td>
                <td>Estado</td>
              </tr>
            </table>
          </div>

        </div>
        <div className="consult-card">

          <div className="consult-container">
            <div className="consult-detail">
              <img className="avatar" src={Avatar} alt="avatar" />
              <div className="user-consult">
                <div className="name-consult">
                  <p>Maria Fernanda Cevedo</p>
                  <p>
                    Fecha:
                    {' '}
                    {client.status}
                    {' '}
                    Sublos Auditoria
                  </p>
                </div>
                <p className="consult-text">
                  {client.query}
                </p>
              </div>
            </div>
          </div>
          <div className="attachment">
            <h2>Archivos adjuntos</h2>
            <table className="table">
              <thead>
                <tr className="border-table">
                  <th scope="col">Nombre del archivo</th>
                  <th scope="col">Archivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Comercio exterior</td>
                  <td>
                    {' '}
                    <BsFileEarmarkArrowDown fontSize="1.5rem" />
                    {' '}
                    <a href="#/">Ver</a>
                  </td>
                </tr>
                <tr>
                  <td>Modificación de procesos internos</td>
                  <td>
                    {' '}
                    <BsFileEarmarkArrowDown fontSize="1.5rem" />
                    {' '}
                    <a href="#/">Ver</a>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
        <div className="add-consult">
          <p>Formulario</p>

        </div>
      </section>
    </>
  );
};
export default Detail;
// Detail.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   id: PropTypes.object.isRequired,
// };
