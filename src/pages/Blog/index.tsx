import { Row, Col } from "antd";
import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

const PageWrapper = styled("section")`
  padding: 4rem 0 6rem;
`;

const PageTitle = styled("h2")`
  font-size: 2.5rem;
  color: #18216d;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const PageSubtitle = styled("p")`
  color: #555;
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const Card = styled("div")`
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
`;

const CardTitle = styled("h3")`
  font-size: 1.5rem;
  color: #18216d;
  margin: 1.25rem 0 0.75rem;
`;

const CardText = styled("p")`
  color: #555;
  line-height: 1.7;
  flex: 1;
`;

const CardLink = styled("a")`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.65rem 1.5rem;
  background: #18216d;
  color: #fff;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgb(255, 130, 92);
    color: #fff;
  }
`;

const ComingSoon = styled("span")`
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.85rem;
  color: rgb(255, 130, 92);
  font-style: italic;
`;

const Blog = () => (
  <Container>
    <PageWrapper>
      <PageTitle>My Blogs</PageTitle>
      <PageSubtitle>Find all my writing and content here.</PageSubtitle>
      <Row gutter={[32, 32]} justify="center">
        <Col lg={10} md={11} sm={22} xs={24}>
          <Card>
            <SvgIcon src="substack.svg" width="48px" height="48px" />
            <CardTitle>Writing</CardTitle>
            <CardText>
              I write about technology, life, and whatever's on my mind on Substack.
            </CardText>
            <CardLink
              href="https://arleenl.substack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Substack →
            </CardLink>
          </Card>
        </Col>
        <Col lg={10} md={11} sm={22} xs={24}>
          <Card>
            <SvgIcon src="cooking.svg" width="48px" height="48px" />
            <CardTitle>Cooking</CardTitle>
            <CardText>
              I share what I'm making in the kitchen on my cooking Instagram.
            </CardText>
            <CardLink
              href="https://www.instagram.com/arleencooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              @arleencooks on Instagram →
            </CardLink>
            <ComingSoon>Recipe-dedicated blog coming soon!</ComingSoon>
          </Card>
        </Col>
      </Row>
    </PageWrapper>
  </Container>
);

export default Blog;
