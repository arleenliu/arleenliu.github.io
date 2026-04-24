import { StyledButton } from "./styles";
import { ButtonProps, ButtonMailToProps } from "../types";

export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);

export const ButtonMailTo = ({ mailto, label }: ButtonMailToProps) => (
  <StyledButton>
    <a href={mailto} style={{ color: "white" }}>
      {label}
    </a>
  </StyledButton>
);
