import styled from "styled-components";
import { JustifyContentTypes } from "helpers/enum";

interface ILayout {
  jc?: JustifyContentTypes;
}

export const Row = styled.div<ILayout>`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: ${props => (props.jc ? props.jc : "flex-start")};
  align-items: stretch;
  width: 100%;
  height: auto;
`;

export const Column = styled.div<ILayout>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: ${props => (props.jc ? props.jc : "flex-start")};
  align-items: stretch;
  width: 100%;
  height: auto;
`;
