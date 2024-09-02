import React from 'react';
// import { useProductList } from '../Hooks/UseProducts';
import { DRESSLIST } from '../consts/SubjectsList';
import { Link } from 'react-router-dom';
import SouthIcon from '@mui/icons-material/South';

const CardProduct = () => {
  //   const { productList, isLoading, error } = useProductList();

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error fetching products.</div>;
  //   }

  return (
    <div style={{ marginBottom: "50px" }}>
      {/* {productList.map((product, index) => (
            <div key={index} style={styles.card}>
              
              {product.image && (
                <img
                  src={`http://localhost:3010${product.image}`}
                  alt="Product"
                  style={styles.image}
                />
              )}
              <ul style={styles.list}>
                <li style={styles.listItem}>{product.name}</li>
                <li style={styles.listItem}>{product.price}₪</li>
              </ul>
            </div>
          ))} */}
      <p style={{ marginLeft: "15px" }}>For All Collection Click <SouthIcon /> </p>
      <div style={styles.container}>
        <div style={styles.cardContainer}>
          {DRESSLIST.slice(0, 2).map((product) => (
            <Link key={product.name} to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'blue';
                  e.currentTarget.querySelector('img').style.filter = 'grayscale(100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.querySelector('img').style.filter = 'none';
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={styles.image}
                />
              </div>
            </Link>
          ))}
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
    width: '180px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    overflow: 'hidden',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    transition: 'filter 0.3s ease, transform 0.3s ease',
  },
};


export default CardProduct;