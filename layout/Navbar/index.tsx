import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Container, Wrapper } from "./styles";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = ({toggle, toggleCart} : any) => {
  const cart = useSelector((state: any) => state.cart);
  const totalQuantity = cart.reduce((acc:any, curr:any) => acc + curr.quantity, 0)

  return ( 
    <Container>
      <Wrapper>
        <FaBars color="#F6F6F6" size={24} onClick={toggle} />
        <FaBagShopping color="#F6F6F6" size={24} onClick={toggleCart} />
      </Wrapper>
    </Container>
   );
}
 
export default Navbar;