import * as React from 'react'
import { Nav } from '../nav/Nav'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const StyledHeader = styled.header`
	grid-area: header;
  color: var(--colorSecondary);
	background: var(--colorPrimary);
`
export const Header: React.FC = props =>
  <StyledHeader>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Stressless Productions</h2>
    <Nav />
  </StyledHeader>

