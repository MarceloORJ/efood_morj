import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${colors.rose};
`

export const Container = styled.div`
  max-width: 480px;
  justify-content: center;
  margin: 0px auto;
`
export const Logo = styled.div`
  padding-top: 40px;
  text-align: center;
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 80px;
`

export const Description = styled.p`
  text-align: center;
  align-items: center;
  color: ${colors.red};
  font-size: 10px;
  padding-bottom: 40px;
`
