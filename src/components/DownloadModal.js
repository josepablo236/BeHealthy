import React, { Fragment } from 'react';
import Guide from '../arch/Embarazo-Saludable.pdf';
import Cook from '../arch/Recetario-Be-Healthy.pdf';

const DownloadModal = () => {

    const guideName = "Guía Embarazo Saludable";
    const guideUrl = Guide;
    const cookName = "Recetario Be Healthy";
    const cookUrl = Cook;

    const guideDownload = () => {
        const link = document.createElement('a');
        link.href = guideUrl;
        link.setAttribute('download', guideName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const cookDownload = () => {
        const link = document.createElement('a');
        link.href = cookUrl;
        link.setAttribute('download', cookName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <Fragment>
        <div className=' center mb-3'>
                <div className="card mb-3 sobremi center">
                    <div className="row g-0 cv">
                        <div className="col-md-12">
                            <div className="card-body">
                                <h5 className="center mb-3">¡Descarga totalmente gratis!</h5>
                                <div className='row'>
                                    <div className="col-md-6 center social">
                                        <button className="boton boton-primario mb-2" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i className="bi bi-file-earmark-arrow-down mx-1"></i>{guideName}</button>
                                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">{guideName}</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Tips para que tu embarazo sea más saludable.
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button className="boton boton-primario" onClick={guideDownload}><i className="bi bi-download mx-1"></i>Descargar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 center social">
                                        <button className="boton boton-primario mb-2" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><i className="bi bi-file-earmark-arrow-down mx-1"></i>{cookName}</button>
                                        <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">{cookName}</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Recetas saludables fáciles de hacer para que puedas comer sin culpa.
                                                    </div>
                                                    <div className="modal-footer">
                                                        
                                                        <button className="boton boton-primario" onClick={cookDownload}><i className="bi bi-download mx-1"></i>Descargar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </Fragment>
  );
};

export default DownloadModal;