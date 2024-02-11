import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
border-radius: 50%;
border: 1px solid transparent;
margin: 1rem;
padding: 2em 2em;
font-size: 1em;
font-weight: 500;
font-family: inherit;
background-color: #1a1a1a;
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