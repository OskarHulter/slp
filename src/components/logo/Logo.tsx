import * as React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.svg'

const StyledLogo = styled.div`
  color: var(--colorSecondary);
  animation: App-logo-spin infinite 10s linear;
  height: 10vmin;
  pointer-events: none;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Logo: React.FC = props =>
  <StyledLogo>
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Stressless Productions</h2>
  </StyledLogo>