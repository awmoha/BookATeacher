import React, { FC, ReactElement } from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ButtonGroup, CenterButton, FooterContainer, FooterContainerButtons, IconWrapper, RightButtonGroup } from "./StyleFooter";

export const CustomLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
    {children}
  </Link>
);
export const Footer: FC = (): ReactElement => {
  return (
    <FooterContainer>
      <FooterContainerButtons>
        <ButtonGroup>
          <CustomLink to="/">Mobile app</CustomLink>
          <CustomLink to="/">Subscribe</CustomLink>
        </ButtonGroup>
        <CenterButton>
          <CustomLink to="/">Photo</CustomLink>
        </CenterButton>
        <RightButtonGroup>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/">About us</CustomLink>
        </RightButtonGroup>
      </FooterContainerButtons>
      <hr></hr>
      <IconWrapper direction="row" spacing={2}>
        <FaFacebookSquare />
        <FaTwitter />
        <FaInstagram />
      </IconWrapper>
      <p>&copy; {new Date().getFullYear()} 3Devo</p>
    </FooterContainer>
  );
};
