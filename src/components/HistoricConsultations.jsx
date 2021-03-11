/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
} from 'react-bootstrap';
import Header from './Header';
import '../styles/App.scss';
import { db } from '../firebase/fb-configuration';

const HistoricConsultations = () => {
  const [dataQueries, setDataQueries] = useState([]);
  useEffect(() => {
    db.collection('queries').where('status', '==', 'Resuelta').orderBy('time', 'desc').onSnapshot((doc) => {
      const array = [];
      doc.forEach((el) => {
        array.push({
          id: el.id,
          ...el.data(),
        });
      });
      setDataQueries(array);
    });
  }, []);
  // console.log(dataQueries);
  const titleTable = ['Fecha', 'Tema', 'Gerente a Cargo', 'Fecha de cierre'];
  return (
    <>
      <Header />
      <div className="current__container">
        <div className="current-header">
          <h2>Consultas históricas</h2>
          <input type="search" name="buscar" placeholder="Buscar" />
        </div>
        <Table responsive>
          <thead>
            <tr className="border-table">
              <th>ID</th>
              {titleTable.map((title, index) => (
                <th key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              dataQueries.map((querie, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>
                    {querie.time.toDate().toLocaleDateString('es', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    })}
                  </td>
                  <td>{querie.sector}</td>
                  <td>{querie.adviser}</td>
                  <td>
                    {querie.time.toDate().toLocaleDateString('es', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: true,
                    })}
                  </td>
                  <td>
                    <Link to={
                     `/detail/${querie.id}`
}
                    >
                      Detalle
                    </Link>
                  </td>
                </tr>
              ))
              }
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default HistoricConsultations;
