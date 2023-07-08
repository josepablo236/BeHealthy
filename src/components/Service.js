import React from 'react';
const Service = ({data}) => {
    return ( 
        <div className='col-md-6'>
            <div className="card mb-3">
                <img src={process.env.PUBLIC_URL + data.img} className="card-img-top img-servicios" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.nombreServicio}</h5>
                    <p className="card-text text-justify">{data.descripcion}</p>
                </div>
                <a href="/contacto" className="card-link center mb-3">Obtener más información</a>
            </div>
        </div>
     );
}
 
export default Service;