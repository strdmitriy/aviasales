import styled from 'styled-components'
import { JustifyContentTypes, AlignItemsTypes, MarginTypes } from 'helpers/enum'

interface ILayout {
    jc?: JustifyContentTypes
    ai?: AlignItemsTypes
    mb?: MarginTypes
    noFlex?: boolean
}

export const Row = styled.div<ILayout>`
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: ${props => (props.jc ? props.jc : 'flex-start')};
    align-items: ${props => (props.ai ? props.ai : 'stretch')};
    height: auto;
    width: ${props => (props.noFlex ? 'auto' : '100%')};
    margin-bottom: ${props => (props.mb ? props.mb : '0')};
`

export const Column = styled.div<ILayout>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: ${props => (props.jc ? props.jc : 'flex-start')};
    align-items: ${props => (props.ai ? props.ai : 'flex-start')};
    height: auto;
    width: ${props => (props.noFlex ? 'auto' : '100%')};
    margin-bottom: ${props => (props.mb ? props.mb : '0')};
`
