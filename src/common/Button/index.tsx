import { StyledButton } from "./styles";
import { ButtonProps, ButtonMailToProps } from "../types";
import { Link } from "react-router-dom";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);

export const ButtonMailTo = ({mailto, label}: ButtonMailToProps) => {
  return (
    <StyledButton>
      <Link
          to='#'
          style={{ color: 'white' }}
          onClick={(e) => {
              window.location.href = mailto;
              e.preventDefault();
          }}
      >
          {label}
      </Link>
      </StyledButton>
  );
};
