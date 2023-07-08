import React from 'react';
import Servicios from '../arch/Servicios.json';

const Carrusel = () => {

    return (
        <div className='tracks-container'>
            {
                Servicios.map((item) =>(
                    <div key={item.img} className='tracks-container-item'>
                        <div className="list-item">
                        <h4 className='center'>{item.nombreServicio.substring(3)}</h4>
                            <a href="servicios"><img className='img-slide' src={item.img} /> </a>
                        </div>
                    </div>
                ))
            }
        </div>
      );
}
 
export default Carrusel;