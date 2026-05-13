import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { Link } from "react-router-dom";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { ButtonMailTo } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  BlogNavWrapper,
  BlogDropdown,
  BlogDropdownItem,
  MobileSubLink,
} from "./styles";

const SUBSTACK_URL = "https://arleenl.substack.com";
const COOKING_URL = "https://www.instagram.com/arleencooks";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({ behavior: "smooth" });
    setVisibility(false);
  };

  // Desktop: hover dropdown over a /blog link
  const BlogNavDesktop = () => (
    <BlogNavWrapper>
      <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>
        <Span>{t("Blog")}</Span>
      </Link>
      <BlogDropdown>
        <BlogDropdownItem
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          ✍&thinsp; Substack
        </BlogDropdownItem>
        <BlogDropdownItem
          href={COOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          🍳&thinsp; @arleencooks
        </BlogDropdownItem>
      </BlogDropdown>
    </BlogNavWrapper>
  );

  // Shared items (About + Contact)
  const CommonMenuItems = () => (
    <>
      <CustomNavLinkSmall onClick={() => scrollTo("about")}>
        <Span>{t("About")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall style={{ width: "180px" }}>
        <Span>
          <ButtonMailTo mailto="mailto:arleenliu.al@gmail.com" label="Contact Me" />
        </Span>
      </CustomNavLinkSmall>
    </>
  );

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="150px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <BlogNavDesktop />
            <CommonMenuItems />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          {/* Mobile: Blog link + flat sub-links */}
          <CustomNavLinkSmall onClick={toggleButton}>
            <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>
              <Span>{t("Blog")}</Span>
            </Link>
          </CustomNavLinkSmall>
          <MobileSubLink
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleButton}
          >
            ✍&thinsp; Substack
          </MobileSubLink>
          <MobileSubLink
            href={COOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleButton}
          >
            🍳&thinsp; @arleencooks
          </MobileSubLink>
          <CommonMenuItems />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
