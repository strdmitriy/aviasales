import React from 'react'
import styled from 'styled-components'
import logo from 'assets/logo.svg'

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
            src={`//pics.avs.io/99/36/${image}@2x.png`}
            srcset={`//pics.avs.io/99/36/${image}.png `}
            width="110"
            height="36"
        />
    )
}

const Logo = () => {
    return <ImageLogo src={logo}/>
}

export { Icon, Logo }
