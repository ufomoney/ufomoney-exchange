import React from 'react'
import styled from 'styled-components'

import UfoLogo from '../../assets/svg/ufo_logo.svg'

const UniIcon = styled.div`
  width: 150px;
  margin: 0 auto;
  }
`

export default function Logo() {
  return (
    <UniIcon>
      <img width={'105px'} src={UfoLogo} alt="logo" />
    </UniIcon>
  )
}
