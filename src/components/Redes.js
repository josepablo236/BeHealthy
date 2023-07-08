import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppButton from 'react-whatsapp-button';

const actions = [
    { icon: <FacebookOutlinedIcon />, name: 'Facebook', ir: 'fb' },
    { icon: <InstagramIcon />, name: 'Instagram', ir: 'ig' },
    { icon: <WhatsAppIcon />, name: 'Whatsapp', ir: 'wa' },
    { icon: <MailOutlineIcon />, name: 'Mail', ir: 'em' },
  ];

const Redes = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const sendWhatsapp = (ir) =>{
      let url;
      switch(ir){
        case 'wa':
          const phoneNumber="+14014992652";
          const message="Hola Mabel, visité tu página web y me gustaría obtener mayor información.";
          url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(url, '_blank');
          break;
        case 'fb':
          url = `https://www.facebook.com/profile.php?id=100094022815033`;
          window.open(url, '_blank');
          break;
        case 'ig':
          url = `https://www.instagram.com/behealthy_23/`;
          window.open(url, '_blank');
          break;
        case 'em':
          const to = 'behealthy.mabel@gmail.com';
          const subject = "Consulta de servicios";
          const body = "Hola Maby, visité tu página web y me gustaría obtener mayor información."
          url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.open(url, '_blank');
          break;
        default:
          break;
      }
      handleClose();
    }

    return (  
        <React.Fragment>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'fixed', bottom: 25, right: 25 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                FabProps={{
                    sx: {
                      bgcolor: '#702f43',
                      '&:hover': {
                        bgcolor: '#702f43',
                      }
                    }
                  }}
            >
                {actions.map((action) => 
                (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={ () => sendWhatsapp(action.ir)}
                    FabProps={{
                        sx: {
                          color: '#702f43',
                          '&:hover': {
                            color: '#702f43',
                          }
                        }
                      }}
                />
                ))}
            </SpeedDial>
        </React.Fragment>
    );
}
 
export default Redes;