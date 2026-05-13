import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const BlogNavWrapper = styled("div")`
  position: relative;
  display: inline-block;
  margin: 0.5rem 2rem;
  font-size: 1.2rem;
  color: #18216d;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }

  &:hover > div {
    display: block;
  }
`;

export const BlogDropdown = styled("div")`
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 0.4rem 0;
  min-width: 180px;
  z-index: 200;

  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #ebebeb;
  }
`;

export const BlogDropdownItem = styled("a")`
  display: block;
  padding: 0.55rem 1.1rem;
  color: #18216d;
  font-size: 1rem;
  white-space: nowrap;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;

export const MobileSubLink = styled("a")`
  display: block;
  margin: 0.5rem 2rem 0.5rem 3rem;
  font-size: 1rem;
  color: #555;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;
