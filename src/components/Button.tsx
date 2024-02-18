import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
width:4rem;
height:4rem;
border-radius: 50%;
border: 1px solid transparent;
margin: 1rem;
font-size: 1em;
font-family: inherit;
background-color: #526B69;
cursor: pointer;
transition: border-color 0.25s;

&:hover {
  border-color: #646cff;
}

&:active {
  transform: scale(0.95);
}
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
};

export default Button;