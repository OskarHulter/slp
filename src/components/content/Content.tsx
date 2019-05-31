import * as React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  grid-area: content;
  background: --var(colorBackground);
  min-width: 100vw;
  min-height: 60vh;
`

export const Content: React.FC = props =>
  <StyledMain>
    <h4>This is the content</h4>
  </StyledMain>