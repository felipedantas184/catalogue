import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { Close, Container, Item, Logo, Menu, PageLink, CheckoutButton, Wrapper } from "./styles";
import { FaRegEnvelope, FaHouse, FaInstagram, FaLocationPin, FaWhatsapp } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const Sidebar = ({ isOpen, toggle }:any) => {
  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <Close onClick={toggle}>
          <FaTimes color="#13131A" />
        </Close>
        <Logo href={'/'} ><Image src={'/images/black_logo.png'} alt='ADUFPI Logo' fill /></Logo>
        <Menu>
          <Item><PageLink href={'/'}><FaHouse size={20} color="#13131A" />Página Inicial</PageLink></Item>
          <Item><PageLink href={'/bookings'}><FaInstagram size={20} color="#13131A" />Instagram</PageLink></Item>
          <Item><PageLink href={'/profile'}><FaWhatsapp size={20} color="#13131A" />WhatsApp</PageLink></Item>
          <Item><PageLink href={'/bookings'}><IoLocationOutline size={20} color="#13131A" />Localização</PageLink></Item>
          <Item><PageLink href={'/profile'}><FaRegEnvelope size={20} color="#13131A" />Email</PageLink></Item>
        </Menu>
        <CheckoutButton href={'/'}>Logout</CheckoutButton>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;