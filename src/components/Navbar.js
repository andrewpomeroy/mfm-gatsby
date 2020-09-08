import React from 'react';
import Color from 'color';
// import { Link } from 'gatsby';
import Link, { makeLinkColors } from './Link';
import styled from '@emotion/styled';
import Inline from './Inline';
import InlineItem from './InlineItem';
import InlineSplit from './InlineSplit';
// import theme from '../theme';
// import logo from '../img/logo.svg';

const NAVBAR_HEIGHT = 60;
const NAVBAR_LOGO_HEIGHT = 40;

const CenterColumnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-left: ${props => props.theme.layout.centerColumn.outerGutter}px;
  padding-right: ${props => props.theme.layout.centerColumn.outerGutter}px;
`;

const CenterColumn = styled.div`
  flex: 1;
  max-width: ${props => props.theme.layout.centerColumn.maxWidth}px;
`;

const NavbarOuter = styled.div`
  display: flex;
  height: ${NAVBAR_HEIGHT}px;
  background-color: ${props => props.theme.colors.headerBG};
`;

const Logo = styled.img`
  height: ${NAVBAR_LOGO_HEIGHT}px;
  width: auto;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const NAVBAR_ITEM_GUTTER = 32;

const NavbarCenterColumnWrap = styled(CenterColumnWrap)`
  flex: 1;
  max-height: 100%;
`;
const NavbarCenterColumn = styled(CenterColumn)`
  display: flex;
  max-height: 100%;
`;
const NavbarInline = styled(Inline)`
  max-height: 100%;
`;
NavbarInline.defaultProps.gutter = NAVBAR_ITEM_GUTTER;
const NavbarInlineSplit = styled(Inline)`
  flex: 1;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  justify-content: space-between;
  `;
NavbarInlineSplit.defaultProps.gutter = NAVBAR_ITEM_GUTTER;
const NavbarInlineItem = styled(InlineItem)`
  display: flex;
  max-height: 100%;
`;
NavbarInlineItem.defaultProps.gutter = NAVBAR_ITEM_GUTTER;
const NavbarInlineLink = styled(Link)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .03em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
  &:hover, &:focus {
    color: ${props => Color(props.theme.colors.gold).string()};
  }
  &:active {
    color: ${props => Color(props.theme.colors.gold).darken(.25).string()};
  }
  /* &:hover, &:focus {
    color: ${props => Color(props.theme.colors.text).lighten(.65).string()};
  }
  &:active {
    color: ${props => Color(props.theme.colors.text).darken(.65).string()};
  } */
`;
// NavbarInlineLink.defaultProps = {
//   color: "text"
// }

const Navbar = props => {
  return (
  <NavbarOuter>
    <NavbarCenterColumnWrap>
      <NavbarCenterColumn>
        <NavbarInlineSplit>
          <NavbarInlineItem to="/" as={Link}>
            <LogoContainer>
              <Logo src="/img/header-logo.png" alt="Mercury Free Mining" />
            </LogoContainer>
          </NavbarInlineItem>
          <NavbarInlineItem style={{ display: 'flex' }}>
            {/* <NavbarInline gutter={24}> */}
            <NavbarInline>
              <NavbarInlineItem>
                <NavbarInlineLink to="/products">Products</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem>
                <NavbarInlineLink to="/blog">Blog</NavbarInlineLink>
              </NavbarInlineItem>
              <NavbarInlineItem>
                <NavbarInlineLink to="/contact">Contact</NavbarInlineLink>
              </NavbarInlineItem>
            </NavbarInline>
          </NavbarInlineItem>
        </NavbarInlineSplit>
      </NavbarCenterColumn>
    </NavbarCenterColumnWrap>
  </NavbarOuter>
)};

export default Navbar;
