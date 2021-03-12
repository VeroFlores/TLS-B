/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, {
  useEffect, useState, useContext, useRef,
} from 'react';
import moment from 'moment';
import ReactToPrint from 'react-to-print';
import {
  Link, useParams,
} from 'react-router-dom';
import {
  Col, Form, Row,
} from 'react-bootstrap';
// import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { AiOutlineArrowLeft, AiOutlineClockCircle } from 'react-icons/ai';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import { AuthContext } from '../Context/Auth';
import { storage, db } from '../firebase/fb-configuration';
import Avatar from '../img/avatar.jpg';
import Header from './Header';
import TableDetail from './TableDetail';
import Answer from './Request';
import '../styles/App.scss';
import '../styles/Details.scss';

const Detail = () => {
  const componentRef = useRef();
  // base de datos del detalle de la consulta
  const { id } = useParams();
  const [client, setClient] = useState([]);

  // const prueba = () => {
  //   switch (client.status) {
  //     case 'pendiente': return <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1IlHjeDOkk2GD5U2Cu_KYADcKFmOJCos6/view?usp=sharing">Descargar consulta</a>;
  //     case 'Atendida': return <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/171i1wxedrW9O_aq4f7NBAb-jJVwTr29e/view?usp=sharing">Descargar consulta</a>;
  //     case 'Resuelta': return <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/19n7kTn36dlSPtqimIDOShxyXuQlTwMCO/view?usp=sharing">Descargar consulta</a>;

  //     default: return <h1> </h1>;
  //   }
  // };
  const today = moment().format('DD MM YYYY hh:mm:ss');
  useEffect(() => {
    db.collection('queries').doc(id).get()
      .then((doc) => setClient(doc.data()));
  }, [id]);
  const clickToUpdate = () => {
    if (client.status === 'pendiente') {
      db.collection('queries').doc(id).update({
        status: 'Resuelta',
        closeQuery: today,
      });
    }
    if (client.status === 'Atendida') {
      db.collection('queries').doc(id).update({
        status: 'Resuelta',
        closeQuery: today,
      });
    }
    Swal.fire({
      title: '<strong>Acaba de cerrar esta consulta!</strong>',
      icon: 'success',
      iconColor: '#D04A02',
      html:
      'Puede visualizar el detalle en <b> Consultas Históricas </b>',
      showCloseButton: true,
      confirmButtonColor: '#D04A02',
    });
  };
  return (
    <>
      <div ref={componentRef}>
        <Header />
        <section className="detail__container">
          <div className="detail-card">
            {
          client.status === 'Resuelta'
            ? <Link to="/consultasHistoricas" className="return"><AiOutlineArrowLeft /></Link>

            : <Link to="/consultasVigentes" className="return"><AiOutlineArrowLeft /></Link>
          }
            <div className="detail">
              <h2>Detalle de consulta</h2>
              <p>ID 132</p>
              <div>
                <p>
                  Fecha:
                  {client.fecha}
                </p>
                <p>
                  Tema:
                  { client.sector }
                </p>
                <p>Sublos: Tributario</p>
                <p>Socio a cargo: Cristina Yang Aval</p>
                <p>Gerente a cargo: David Llanos</p>
              </div>
            </div>
            <div className="detail-state">
              <ReactToPrint
                trigger={() => <button type="button" className="btn-detail">Descarga tu consulta</button>}
                content={() => componentRef.current}
              />
              <table className="table-box">
                <tr>
                  <th>
                    <AiOutlineClockCircle />
                  </th>
                  <th>5</th>
                </tr>
                <tr><th className={client.status === 'Atendida' ? 'atendida' : 'pendiente'}>{ client.status }</th></tr>
                <tr>
                  <td>Total</td>
                </tr>
                <tr>
                  <td />
                  <td>Estado</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="consult-card">
            <div className="consult-container">
              <div className="consult-detail">
                <img className="avatar" src="https://user-images.githubusercontent.com/68167686/110983245-83a4fd00-8337-11eb-82a7-f3ec14ad86ae.jpeg" alt="avatar" />
                <div className="user-consult">
                  <div className="name-consult">
                    <p>{client.userName}</p>
                    <p>
                      {client.fecha}
                    </p>
                  </div>

                  <p className="consult-text">
                    {client.query}
                  </p>
                </div>
              </div>
            </div>
            { client.imgs && client.imgs.length === 0 ? ''
              : (
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
                      { client.imgs && client.imgs.map((img, i) => (
                        <tr index={i}>
                          <td>
                            Archivo
                            {i + 1}
                          </td>
                          <td>
                            {' '}
                            <BsFileEarmarkArrowDown fontSize="1.5rem" />
                            {' '}
                            <a rel="noopener noreferrer" href={img} target="_blank" style={{ color: 'rgba(208, 74, 2, 1)' }}>Ver</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </table>

                </div>
              )}
          </div>
          <Answer querieId={id} client={client} />
          <div className="add-consult">
            <TableDetail querieId={id} arrData={client} />
          </div>
          <section className="box_btn">
            {client.status === 'Resuelta' ? '' : <button type="button" className=" btn-detail" onClick={clickToUpdate}>Finalizar consulta</button>}
            {/* <button type="button" onClick={clickToUpdate}>Finalizar consulta</button> */}
          </section>

        </section>
      </div>
    </>
  );
};
export default Detail;
// Detail.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   id: PropTypes.object.isRequired,
// };
