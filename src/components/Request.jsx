/* eslint-disable newline-per-chained-call */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import { BsFileEarmarkArrowDown } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { db } from '../firebase/fb-configuration';
import { AuthContext } from '../Context/Auth';
import '../styles/App.scss';
import '../styles/Details.scss';

const Answer = (props) => {
  const { currentUser } = useContext(AuthContext);
  const { querieId, client } = props;
  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    db.collection('queries').doc(querieId).collection('answer').orderBy('time', 'asc').onSnapshot((querySnapshot) => {
      const comment = [];
      querySnapshot.forEach((doc) => {
        comment.push({ id: doc.id, ...doc.data() });
      });
      setAnswer(comment);
    });
  }, []);
  return (
    <>
      {answer.map((childQuery) => (
        <div className="consult-card">
          <div className="consult-container">
            <div className="consult-detail">
              {currentUser.uid === client.user ? <img className="avatar" src="https://user-images.githubusercontent.com/68167686/110983245-83a4fd00-8337-11eb-82a7-f3ec14ad86ae.jpeg" alt="Adriana" /> : <img className="avatar" src="https://user-images.githubusercontent.com/68167686/110983191-72f48700-8337-11eb-97b7-5940dc51e24b.png" alt="David" />}

              <div className="user-consult">
                <div className="name-consult box">
                  <div>
                    {currentUser.uid === client.user ? <p>Adriana Tapia</p> : <p>David Llanos</p>}
                    <p>
                      Fecha
                      {' '}
                      {childQuery.fecha}
                    </p>
                  </div>
                  {currentUser.uid === client.user ? <p> </p> : (
                    <div>
                      <AiOutlineClockCircle />
                      <p>
                        2h
                        {childQuery.timeRequest}
                      </p>
                    </div>
                  )}
                  {/* {
                    childQuery.timeRequest === '' ? ''
                      : (
                        <div>
                          <AiOutlineClockCircle />
                          <p>{childQuery.timeRequest}</p>
                        </div>
                      )
                  } */}
                </div>

                {/* <p>Fernanda Cevedo</p>
                  <p>
                    {childQuery.fecha}
                  </p>
                </div> */}
                <p className="consult-text">
                  {childQuery.answer}
                </p>
              </div>
            </div>
          </div>
          { childQuery.imgs && childQuery.imgs.length === 0 ? ''
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
                    { childQuery.imgs && childQuery.imgs.map((img, i) => (
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
      ))}
    </>

  );
};
export default Answer;
