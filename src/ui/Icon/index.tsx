import React from 'react';
import styled from "styled-components";
import { IconTypes } from "helpers/enum";

const ICON = {};

const Image = styled.img<any>``;

interface IIcon {
    image: IconTypes;
    alt: IconTypes | string;
}

const Icon: React.FC<IIcon> = ({ image, alt }): React.ReactElement => {
    //@ts-ignore
    return <Image src={ICON[image]} alt={alt} />;
};

export { Icon };
