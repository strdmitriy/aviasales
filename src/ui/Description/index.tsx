import styled from 'styled-components'
import {
    WeightTypes,
    FontSizeTypes,
    ColorType,
    MarginTypes,
} from 'helpers/enum'

interface IDescription {
    fontWeight?: WeightTypes
    fontSize?: FontSizeTypes
    colorType?: ColorType
    margin?: MarginTypes
    mb?: MarginTypes
    ml?: MarginTypes
    uppercase?: boolean
}

export const Description = styled.p<IDescription>`
  margin: ${(props) => (props.margin ? props.margin : '0')};
  margin-bottom: ${props => props.mb ? props.mb : '0'};
  margin-left: ${props => props.ml ? props.ml : '0'};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  color: ${(props) => (props.colorType ? props.colorType : 'black')};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  align-items: center;
`
