/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/App.scss';
import '../styles/Info.scss';
import Header from './Header';
import Podcast from '../img/podcast.jpeg';

const InformationofInterest = () => {
  // const classes = useStyles();
  const content = [
    {
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      button: 'Read More',
      image: 'https://user-images.githubusercontent.com/68023969/110970549-dc6c9980-8327-11eb-9160-66a1d83fe7c0.png',
    },
    {
      title: '¿Qué deben saber las empresas para generar confianza?',
      description: 'La confianza  es la  base para que  todo negocio prospere, por ello...',
      button: 'Discover',
      image: 'https://user-images.githubusercontent.com/68023969/110970560-decef380-8327-11eb-861c-1de4e3196fc0.png',
    },
    {
      title: 'Phasellus volutpat metus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: 'https://user-images.githubusercontent.com/68023969/110970571-e098b700-8327-11eb-9d95-6d728fd0803c.png',
    },
  ];

  const data = [
    {
      title: '¿Donde encontrar innovación?',
      button: 'Read More',
      description: 'Siendo el  2021 las empresas deben saber dónde encontrar  innovación...',
      image: 'https://user-images.githubusercontent.com/68023969/110968751-e7262f00-8325-11eb-9787-dd812fbcf114.jpeg',
    },
    {
      title: '¿Qué deben saber las empresas para generar confianza?',
      button: 'Read More',
      description: 'La confianza  es la  base para que  todo negocio prospere, por ello...',
      image: 'https://user-images.githubusercontent.com/68023969/110968755-e7bec580-8325-11eb-9f69-a0e6cfd75c66.jpeg',
    },
    {
      title: '5 cosas que necesita saber sobre la innovación',
      button: 'Read More',
      description: 'Cosas que necesita saber sobre la innovación, en estos tiempos de incertidumbre...',
      image: 'https://user-images.githubusercontent.com/68023969/110968757-e7bec580-8325-11eb-9543-95f5fec362ba.jpeg',
    },
    {
      title: 'Razones para repensar el Blockchain',
      button: 'Read More',
      description: 'El Blockchain de naturaleza disruptiva e innovadora, ha captado la atención de...',
      image: 'https://user-images.githubusercontent.com/68023969/110968760-e7bec580-8325-11eb-8156-7eedd647506b.jpeg',
    },
  ];

  return (
    <>
      <Header />
      <div className="information__container">
        <div className="header-carousel">
          <Slider autoplay={2500}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                {/* <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button type="button">{item.button}</button>
                </div> */}
              </div>
            ))}
          </Slider>
        </div>
        <div className="container posts">
          <div className="row">
            {data.map((post) => (
              <div className="card mb-3 width col-6 p-2 mx-auto">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={post.image} alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text p-1">{post.description}</p>
                      <p className="card-text"><small className="text-muted">{post.date}</small></p>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
        <div className="social-media">
          <div className="podcast">
            <img src={Podcast} alt="" />
          </div>
          <div className="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/aPDbsbeORbk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationofInterest;
