import * as React from 'react'
import styled from 'styled-components'

const StyledNav = styled.footer`
  grid-area: nav;
  color: --var(colorText);
  background: --var(colorPrimary);
`

export const Nav: React.FC = props =>
  <StyledNav>
    <h4>Download royalty free music, free forever.</h4>
    <ul>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a></a>
      </li>
    </ul>
  </StyledNav>
