import Image from "next/image";
import { Container, LogoWrapper, SocialItem, SocialNav, Wrapper } from "./styles";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Image src={'/images/black_logo.png'} alt={'ADUFPI Logo'} fill className={'image'} />
        </LogoWrapper>
        <SocialNav>
          <SocialItem>
            <a target='_blank' href='https://pt-br.facebook.com/adufpi/' arial-label='Instagram'><FaFacebook size={24} color={'#F6F6F6'} /></a>
          </SocialItem>
          <SocialItem>
            <a target='_blank' href='https://www.instagram.com/adufpi/' arial-label='Facebook'><FaInstagram size={24} color={'#F6F6F6'} /></a>
          </SocialItem>
          <SocialItem>
            <a target='_blank' href='mailto:secretaria@adufpi.org.br' arial-label='Email'><FaEnvelope size={24} color={'#F6F6F6'} /></a>
          </SocialItem>
        </SocialNav>
      </Wrapper>
    </Container>
  );
}

export default Footer;