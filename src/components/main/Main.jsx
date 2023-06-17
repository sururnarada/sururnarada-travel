import React, { useEffect } from 'react';
import './main.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';

//  import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

//image import
import img from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import img3 from '../../assets/img-3.jpg';
import img4 from '../../assets/img-4.jpg';
import img5 from '../../assets/img-5.jpg';
import img6 from '../../assets/img-6.jpg';
import img7 from '../../assets/img(1).jpg';
import img8 from '../../assets/img(2).jpg';
import img9 from '../../assets/img(3).jpg';

//name array data

const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp1.500.000',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odio mollitia. Accusamus totam inventore beatae enim! Nulla dolorum, voluptates iusto, et ipsum cumque omnis repellat quisquam odio doloremque ipsa rem?',
  },
  {
    id: 1,
    imgSrc: img2,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp1.000.000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum vitae cumque rerum deserunt a at voluptatum beatae quam? Quo?',
  },
  {
    id: 1,
    imgSrc: img3,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp2.000.000',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, vitae! Dolorum, fuga eos id consequuntur ab dolor sed explicabo debitis error tempore similique ex recusandae odio, ipsum culpa adipisci. Ratione, aliquam aut!',
  },
  {
    id: 1,
    imgSrc: img4,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp.1.500.000',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odio mollitia. Accusamus totam inventore beatae enim! Nulla dolorum, voluptates iusto, et ipsum cumque omnis repellat quisquam odio doloremque ipsa rem?',
  },
  {
    id: 1,
    imgSrc: img5,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp3.500.000',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odio mollitia. Accusamus totam inventore beatae enim! Nulla dolorum, voluptates iusto, et ipsum cumque omnis repellat quisquam odio doloremque ipsa rem?',
  },
  {
    id: 1,
    imgSrc: img6,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp.4.250.000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi, impedit deserunt voluptatibus illum perferendis nostrum numquam sit, quo ullam rem?',
  },
  {
    id: 1,
    imgSrc: img7,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp.1.900.000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, eligendi dolorum?',
  },
  {
    id: 1,
    imgSrc: img8,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp.2.570.000',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut obcaecati consectetur eius perferendis exercitationem ea repellat aperiam laudantium minima.',
  },
  {
    id: 1,
    imgSrc: img9,
    desTitle: 'kulukulu',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: 'Rp.1.750.000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquam ea vero corrupti? Explicabo, incidunt labore assumenda ad eligendi repellat animi libero.',
  },
];

const Main = () => {
  // create a react hooks to add scroll animation..
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visit destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, desTitle, location, grade, fees, description }) => {
          return (
            <div data-aos="fade-up" key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="desTitle">{desTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
