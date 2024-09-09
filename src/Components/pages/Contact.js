import React, { useState } from 'react';
import { postUsers } from '../../api/user';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const [dress, setDress] = useState("");
  const [note, setNote] = useState("");

  const getUsrData = async () => {
    const data = {
      name,
      number,
      dress,
      note,
    };
    await postUsers(data);
    deleteData();
  };

  const deleteData = () => {
    setName("");
    setNumber("");
    setDress("");
    setNote("");
  };

  return (
    <ContactContainer>
      <FormWrapper>
        <Title>Contact Form</Title>
        
        <Label>תכניסי שם:</Label>
        <StyledTextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          label="שם מלא"
          variant="outlined"
        />

        <Label>תכניסי מספר:</Label>
        <StyledTextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          fullWidth
          label="מספר טלפון"
          variant="outlined"
          type="number"
        />

        <Label>השמלה שאת מעונינת :</Label>
        <StyledTextField
          value={dress}
          onChange={(e) => setDress(e.target.value)}
          fullWidth
          label="השמלה שאת מעונינת"
          variant="outlined"
        />

        <Label>הערה:</Label>
        <StyledTextField
          value={note}
          onChange={(e) => setNote(e.target.value)}
          fullWidth
          label="הערה"
          variant="outlined"
        />

        <SaveButton onClick={getUsrData} type="submit">
          אישור
        </SaveButton>
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #f8f9fa, #e9ecef);
`;

const FormWrapper = styled.div`
  width: 400px;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const Label = styled.p`
  font-size: 16px;
  margin: 15px 0 5px;
  color: #666;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
`;

const SaveButton = styled(Button)`
  display: block;
  width: 100%;
  color: white;
  font-size: 18px;
  margin-top: 10px;
  background: linear-gradient(45deg, #00c6ff, #0072ff);
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: linear-gradient(45deg, #0072ff, #00c6ff);
    transform: scale(1.05);
  }
`;
