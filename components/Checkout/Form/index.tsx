import Delivery from "./Delivery";
import Payment from "./Payment";
import Personal from "./Personal";
import { CheckoutButton, Divider, Price, Topic, TopicWrapper, Wrapper } from "./styles";

const Form = () => {
  return (
    <Wrapper>
      <Personal />
      <Divider />
      <Delivery />
      <Divider />
      <Payment />
      <Divider />
      <TopicWrapper>
        <Topic>Total</Topic>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(120)}</Price>
      </TopicWrapper>
      <CheckoutButton>Adicionar Pedido</CheckoutButton>
    </Wrapper>
  );
}

export default Form;