import React from 'react'
import styled from 'styled-components'
import { Column, Description } from 'ui'
import {
    JustifyContentTypes,
    MarginTypes,
    AlignItemsTypes,
    FontSizeTypes,
    ColorType,
} from 'helpers/enum'

const Wrapper = styled(Column)`
    height: 100vh;
`

interface IErrorModuleRender {
    status: string
}

const ErrorModule: React.FC<IErrorModuleRender> = ({
    status,
}): React.ReactElement => {
    return (
        <Wrapper ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
            <Description fontSize={FontSizeTypes.l} colorType={ColorType.black}>
                Что-то пошло не так...
            </Description>
            <Description fontSize={FontSizeTypes.m} colorType={ColorType.black}>
                {`Статус: ${status}`}
            </Description>
        </Wrapper>
    )
}

export { ErrorModule }
