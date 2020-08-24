import React from 'react';
import { Column, Description} from 'ui';
import {
    JustifyContentTypes,
    MarginTypes,
    AlignItemsTypes,
    FontSizeTypes,
    ColorType,
} from 'helpers/enum'

interface IErrorModuleRender {
    status: string;
}

const ErrorModule: React.FC<IErrorModuleRender> = ({ status }): React.ReactElement => {
    return (
        <Column ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
            <Description
                fontSize={FontSizeTypes.l}
                colorType={ColorType.black}
            >
                Что-то пошло не так...
            </Description>
            <Description fontSize={FontSizeTypes.m} colorType={ColorType.black}>
                {`Статус: ${status}`}
            </Description>
        </Column>
    );
};

export { ErrorModule };