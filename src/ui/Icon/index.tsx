import React from "react";
import styled from "styled-components";

const Image = styled.img<any>``;

interface IIcon {
  image: string;
}

const Icon: React.FC<IIcon> = ({ image }): React.ReactElement => {
  return <Image src={`src="//pics.avs.io/al_square/36/36/${image}.png"`} />;
};

export { Icon };
