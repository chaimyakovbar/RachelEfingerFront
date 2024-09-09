import React from 'react';
import { Link } from 'react-router-dom';
import SouthIcon from '@mui/icons-material/South';
import image15 from '../assets/all colliction/image15.jpg';
import image6 from '../assets/all colliction/image6.jpg';

const CardProduct = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <p style={{ marginLeft: '15px' }}>
        For All Collection Click <SouthIcon />
      </p>
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          <Link to="/shop">
            <button
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3'; // Darker blue on hover
                e.currentTarget.style.transform = 'scale(1.05)'; // Slight zoom effect
                e.currentTarget.querySelector('img').style.filter = 'grayscale(100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff'; // Regular button color
                e.currentTarget.style.transform = 'scale(1)'; // Reset zoom
                e.currentTarget.querySelector('img').style.filter = 'none';
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src={image15}
                  alt="Product"
                  style={styles.image}
                />
                <img
                  src={image6}
                  alt="Product"
                  style={styles.image}
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '380px',
    borderRadius: '10px',
    // backgroundColor: '#007bff', // Brighter button color
    color: '#fff', // White text color for better contrast
    overflow: 'hidden',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer', // Hand cursor to indicate interactivity
    position: 'relative',
    // border: '2px solid #0056b3', // Bold border to emphasize button
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Adds subtle shadow for depth
    padding: '10px', // Adds some padding to give the button a clickable feel
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  image: {
    width: '50%',
    height: 'auto',
    transition: 'filter 0.3s ease, transform 0.3s ease',
    // border: '1px solid black',
  },
};

export default CardProduct;
