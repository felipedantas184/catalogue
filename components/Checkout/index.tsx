import Form from "./Form";
import Order from "./Order";
import { Divider, Section, Wrapper } from "./styles";

const Checkout = () => {
  return ( 
    <Section>
      <Wrapper>
        <Order />
        <Divider />
        <Form />
      </Wrapper>
    </Section>
   );
}
 
export default Checkout;