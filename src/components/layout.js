/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import breakpoint from "../common/breakpoints";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        {children}
        <footer>
          {/*           © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
/* 
const Body = styled.div`
  color: ${props => props.theme.colors.textColor};
  padding: 1rem;
  width: 100%;
  font-family: Roboto;
  background: ${props => props.theme.colors.mainBackground};
  height: auto;
  min-height: 100vh;
`

const Page = styled.div`
  height: auto;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`
 */
