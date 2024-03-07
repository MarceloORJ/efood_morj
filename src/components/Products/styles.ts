import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductsContainer = styled.div`
  color: ${cores.coral};
  display: flex;
  margin-bottom: 48px;
`

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
`

export const Destaque = styled.div`
  margin-top: 16px;
  margin-right: 8px;
`

export const TitleContainer = styled.div`
  margin-top: 8px;
  margin: 0px 8px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Rate = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;

  img {
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 8px;
`

export const About = styled.a`
  margin: 8px;
  display: flex;
  text-decoration: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
