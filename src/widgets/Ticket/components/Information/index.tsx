import React from 'react'
import { Column, Description } from 'ui'
import {
    ColorType,
    FontSizeTypes,
    JustifyContentTypes,
    WeightTypes,
} from 'helpers/enum'

interface IInformation {
    title: string
    information: string
}

const Information: React.FC<IInformation> = ({
    title,
    information,
}): React.ReactElement => {
    return (
        <Column jc={JustifyContentTypes.flexStart}>
            <Description
                fontSize={FontSizeTypes.xs}
                colorType={ColorType.grey}
                fontWeight={WeightTypes.w600}
                uppercase
            >
                {title}
            </Description>
            <Description
                fontSize={FontSizeTypes.m}
                colorType={ColorType.black}
                fontWeight={WeightTypes.w600}
            >
                {information}
            </Description>
        </Column>
    )
}
export { Information }
