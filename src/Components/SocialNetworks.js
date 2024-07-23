import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
// import PolicySupport from './pages/PolicySupport';
import { Link } from 'react-router-dom';

const SocialNetworks = () => {
  return (
    <div style={styles.container}>
      <Link style={{marginBottom:"10px" , textDecoration: 'none', color: '#fff', fontSize: '16px', padding: '10px 20px', backgroundColor: 'black', borderRadius: '5px',}} to={'/PolicySupport'}> 
      PolicySupport 
      </Link>
      <div style={styles.iconContainer}>

        <div style={styles.iconItem}>
          <LocationOnIcon />
          <a href='https://www.waze.com/ul?utm_source=waze_app&utm_campaign=share_waze' style={styles.link}>
            Bne Brak
          </a>
        </div>
        <div style={styles.iconItem}>
          <InstagramIcon />
          <a href='https://www.instagram.com/rachel_efinger?igsh=MTR4Mzk3MHRoNXBpNw==' style={styles.link}>
            rachel_efinger
          </a>
        </div>

        <div style={styles.iconItem}>
          <LocalPhoneIcon />
          <span style={styles.text}>058-431-2001</span>
        </div>

        <div style={styles.iconItem}>
          <WhatsAppIcon />
          <a href='https://api.whatsapp.com/send?phone=972584312001&text=אני+מעונינת+בפרטים+על+שמלה+' style={styles.link}>
            058-431-2001
          </a>
        </div>


        <div style={styles.iconItem}>
          <MailIcon />
          <a href='mailto:example@example.com' style={styles.link}>
            example@example.com
          </a>
        </div>


      </div>
      <Link to="/" style={styles.link}>
        <button className='logo' style={{  border: 'none',background: 'none',textAlign: 'center',fontSize: '16px',color: '#333',}}>
          <p style={{ fontSize: '16px',
                       margin: 0,
                       marginTop: 35}}>
            All Rights reserved © 2024 Showroom By Rachel Efinger
          </p>
        </button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50vh',
    // backgroundColor: '#f4f4f4',
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  iconItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  text: {
    fontSize: '16px',
    margin: 0,
    marginTop: 0
  },
  button: {
    border: 'none',
    background: 'none',
    textAlign: 'center',
    fontSize: '16px',
    color: '#333',
  },
};

export default SocialNetworks;
