import React from 'react'
import styled from 'styled-components'

const Image = styled.img<any>`
    max-height: 36px;
`

const ImageLogo = styled(Image)`
    max-height: 100%;
`

interface IIcon {
    image: string
}

const Icon: React.FC<IIcon> = ({ image }): React.ReactElement => {
    return (
        <Image
            src={`http://pics.avs.io/99/36/${image}@2x.png`}
            srcset={`http://pics.avs.io/99/36/${image}.png `}
            width="110"
            height="36"
        />
    )
}

const AviasalesLogo = () => {
    return <ImageLogo src="assets/logo.svg" />
}

export { Icon, AviasalesLogo }
