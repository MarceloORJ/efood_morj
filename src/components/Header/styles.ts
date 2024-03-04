import styled from 'styled-components'

import { colors } from '../../styles'

export const Hero = styled.header`
  background-color: ${colors.rose};
  height: 384px;
`
export const Imagem = styled.div`
  width: 100%;
  height: 385px;
  top: -24px;
`

export const Container = styled.div`
  margin: 0px auto;
  max-width: 540px;
`

export const Logo = styled.a`
  max-width: 125px;
  display: flex;
  margin: 0px auto;
  padding-top: 64px;
`

export const Title = styled.h1`
  font-size: 36px;
  color: ${colors.red};
  height: 84px;
  font-weight: 900px;
  text-align: center;
  margin-top: 138px;
  margin-bottom: 40px;
`
