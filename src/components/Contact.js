import React, {useState} from 'react';
import NavBar from './NavBar';
import {FacebookShareButton, FacebookIcon, TwitterShareButton,  TwitterIcon, WhatsappShareButton,  WhatsappIcon } from "react-share";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Redes from './Redes';
import Footer from './Footer';

const Contact = () => {

    //State para error
    const [error, guardarError] = useState(false);
    //State mensaje error
    const [mensaje, guardarMensaje] = useState("");

    //State del form
    const [formulario, guardarFormulario] = useState({
        nombre: '',
        consulta: ''
    });

    const {nombre, consulta} = formulario;

    //Link de la pagina
    const url = "https://behealthy100.netlify.app/";
    const frase = "Hola quisiera invitarte a formar parte de la comunidad Be Healthy, visita su página web:";

    const onChange = e =>{
        guardarFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    //funcion para enviar mensaje
    const enviarMensaje = (e) =>{
        e.preventDefault();
        if(nombre.trim() === '' && consulta.trim() === ''){
            guardarMensaje("Llena todos los datos");
            guardarError(true);
            return;
        }
        const phoneNumber="+14014992652";
        const message=`Hola Mabel te saluda ${nombre}. ${consulta}`;
        const pagina = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(pagina, '_blank');
    }

    return ( 
        <div>
            <NavBar/>
            <div className='container mb-4'>
                <div className="row titulo-contenedor">
                    <h1 className="titulo-seccion">Contacto</h1>
                </div>
                <div className="row center">
                    <div className="card mb-3 sobremi center">
                        <div className="row g-0 cv">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title center mt-2 mb-3">Enviame un whatsapp con tu consulta aquí:</h5>
                                    <div className='row mb-3'>
                                        <form onSubmit={enviarMensaje}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre:</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu nombre" name = "nombre" onChange={onChange} value={nombre}/>
                                                </div>
                                                <div className="mb-3">
                                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribe tu consulta:</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name = "consulta" onChange={onChange} value={consulta}></textarea>
                                            </div>
                                            <button type="submit" className="boton boton-primario derecha"><i className="bi bi-whatsapp mx-2"></i>Enviar mensaje</button>
                                        </form>
                                    </div>
                                    <div className="center">
                                    <h5 className="card-title center mt-2 mb-3">Sígueme en mis redes sociales</h5>
                                    </div>
                                    <div className='row'>
                                        <div className="col-md-6 center social">
                                            <a href="https://www.facebook.com/profile.php?id=100094022815033" target="_blank"><i className='social-icon'><FacebookOutlinedIcon/></i>BeHealthy</a>
                                        </div>
                                        <div className="col-md-6 center social">
                                            <a href="https://www.instagram.com/behealthy_23/" target="_blank"><i className='social-icon'><InstagramIcon/></i>BeHealthy</a>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div className="center mt-3">
                                    <p className='invitacion'>¡Mejora tu salud con Be Healthy!</p>
                                </div>
                                <div className="center mb-3">
                                    <p>Comparte mi página con tus amigos y familiares para que puedan unirse a esta comunidad.</p>
                                </div>
                                <div className="center mb-4">
                                    <FacebookShareButton url = {url} quote = {frase}
                                    >
                                        <FacebookIcon round= {true}></FacebookIcon>
                                    </FacebookShareButton>
                                    <TwitterShareButton url = {url} via = {frase}
                                    >
                                        <TwitterIcon round= {true}></TwitterIcon>
                                    </TwitterShareButton>
                                    <WhatsappShareButton 
                                    url = {
                                        `Hola quisiera invitarte a formar parte de la comunidad Be Healthy, visita su página web: ${url}`
                                    } 
                                    >
                                        <WhatsappIcon round= {true}></WhatsappIcon>
                                    </WhatsappShareButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Redes/>
            <Footer/>
        </div>
     );
}
 
export default Contact;