import * as React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  grid-area: nav;
  color: var(--colorSecondary);
  background: var(--colorAffirmative);
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
