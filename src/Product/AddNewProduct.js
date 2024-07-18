// import React, { useState } from 'react';
// import Button from '@mui/material/Button';
// import GetAllProductData from './GetAllProductData'
// import { useProductList } from '../Hooks/UseProducts';
// import axios from 'axios';

// const AddNewProduct = () => {
//   const [openDialog, setOpenDialog] = useState(false)
//   const { refetch } = useProductList({ enabled: false })
  
//   const clickOpen = () => {
//     setOpenDialog(true);
//   };

//   const handleAddNewProduct = async (data) => {
//     try {
//       await axios.post('http://localhost:3010/products', data)
//       refetch()
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   return (
//     <div>
//       <Button onClick={clickOpen} style={{ backgroundColor: "black", color: "white", border: "1px solid rgb(194, 185, 251)" }}>
//         Add new Product
//       </Button>
//       {openDialog && <GetAllProductData openDialog={openDialog} setOpenDialog={setOpenDialog} handleSubmit={handleAddNewProduct} />}
//     </div>
//   );
// };

// export default AddNewProduct;
