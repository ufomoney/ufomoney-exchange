import React, { useState } from 'react'
import Logo from '../components/Logo'
import styled from 'styled-components'

export const HeadersPlusBodyWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  max-width: 420px;
  width: 100%;
  text-align: center;
`

export const BodyWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  max-width: 420px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 30px;
  padding: 1rem;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  pointer-events: ${({ disabled }) => disabled && 'none'};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, disabled }: { children: React.ReactNode; disabled?: boolean }) {
  const [highlight, setHighlight] = useState<boolean>(false)

  return (
    <HeadersPlusBodyWrapper>
      <div
        className="onlyDesktop2"
        style={{ paddingBottom: '2rem' }}
        onMouseEnter={() => setHighlight(true)}
        onMouseLeave={() => setHighlight(false)}
      >
        <Logo />
      </div>
      <BodyWrapper disabled={disabled}>{children}</BodyWrapper>
    </HeadersPlusBodyWrapper>
  )
}
