import * as React from 'react'
import { Nav } from '../nav/Nav'
import { Logo } from '../logo/Logo'
import styled from 'styled-components'


const StyledHeader = styled.header`
	grid-area: header;
  color: var(--colorSecondary);
  background: var(--colorPrimary);
  background-color: var(--colorPrimary);
  min-width: 100vw;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);

`
export const Header: React.FC = props =>
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>

