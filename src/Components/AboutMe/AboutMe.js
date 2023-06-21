import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks = [
        {
            name: "Github",
            link: "https://github.com/ivandevia",
            logo: logoGithub,
        },
        {
            name: "Linkedind",
            link: "www.linkedin.com/in/ivan-devia-acosta-38b9aa141",
            logo: logoLinkeind,
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/channel/UC2Gv4AvSJOPFQ6pjGFk7U2g",
            logo: logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, I'm Sara Tintin</p>
                        <p>Sara Tintin</p>
                        <p>Front End Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        Luego pongo algo en descripción
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a
                                key={index}
                                href={network.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name} />
                            </a>
                        ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/Img/Logo.png" alt="Sara Tintin - Front End Developer" />
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;