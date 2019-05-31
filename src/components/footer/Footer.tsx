import * as React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  grid-area: footer;
  color: var(--colorNegative);
  background: var(--colorPrimary);
  min-width: 100vw;
  min-height: 5vh;
  text-align: center;
`

export const Footer: React.FC = props =>
  <StyledFooter>
    <h3>stressless productions</h3>
  </StyledFooter>
