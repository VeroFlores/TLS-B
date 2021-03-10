/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import {
  Table,
} from 'react-bootstrap';
import Header from './Header';
import '../styles/App.scss';
import { db } from '../firebase/fb-configuration';

const RegisterTable = () => {
  const [dataQueries, setDataQueries] = useState([]);
  useEffect(() => {
    db.collection('queries').onSnapshot((doc) => {
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
  const titleTable = ['Fecha', 'Tema', 'Gerente a Cargo', 'Estado'];
  return (
    <>
      <Header />
      <div className="current__container">
        <Table responsive>
          <thead>
            <tr>
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
                  <td>{querie.status}</td>
                  <td><button type="button">Detalle</button></td>
                </tr>
              ))
              }
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default RegisterTable;
