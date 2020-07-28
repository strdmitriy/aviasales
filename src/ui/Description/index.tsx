import styled from "styled-components";
import { WeightTypes, FontSizeTypes, ColorType } from "helpers/enum";

interface IDescription {
  fontWeight: WeightTypes;
  fontSize: FontSizeTypes;
  colorType: ColorType;
}

export const Description = styled.p<IDescription>`
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "600")};
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  color: ${props => (props.colorType ? props.colorType : "#4A4A4A")};
  align-items: center;
`;
