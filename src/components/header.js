import PropTypes from "prop-types";
import React from "react";
import "./header.scss";

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="header-links">
      {/*    <div>O co jde?</div> | <div>Vyber si "kategorii"</div> */}
    </div>
    <div className="header-title">
      <h1>{siteTitle}</h1>
      <div>...všech dob, dle odborného i "lidového" hodnocení</div>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
/* 
const HeaderWrapper = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fontHeading};
  background-color: ${props => props.theme.colors.charcoal};
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const MenuWrapper = styled.div`
  color: white;
  padding: 0.5em 1em;
  align-self: flex-end;
  color: ${props => props.theme.colors.powderWhite};
`

const TitleWrapper = styled.div`
  align-self: center;
  width: 290px;
  padding: 1em;
  margin: 0.5em;
  border: 3px solid ${props => props.theme.colors.orange};
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  position: relative;
  &::before {
    content: "";
    border: 2px solid ${props => props.theme.colors.orangeDark};
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
    border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
`
const Title = styled.h1`
  color: ${props => props.theme.colors.powderWhite};
  text-transform: uppercase;
  letter-spacing: 0.3ch;
`

const SubTitle = styled.div`
  color: ${props => props.theme.colors.orange};
  text-align: right;
`
const SiteTitle = styled.h3`
  color: ${props => props.theme.colors.orange};
  text-align: left;
  margin-bottom: 0.5rem;
`
 */
