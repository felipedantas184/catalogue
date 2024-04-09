import { useSelector } from "react-redux";
import { Divider, InfoWrapper, PaymentWrapper, Section, Span, SpanBold, Subtitle, Summary, SummaryTitle, TextWrapper, Title, Topic, TopicBold, TopicWrapper, Wrapper } from "./styles";
import ProductSummary from "./ProductSummary";
import { FaCheckCircle } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";

type Item = {
  id: number,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
  quantity: number,
}

const Confirmation = () => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Section>
      <Wrapper>
        <TextWrapper>
          <FaCheckCircle size={48} color="#08A045" />
          <Title>Seu pedido foi enviado!</Title>
          <Subtitle>Agora é só aguardar enquanto preparamos seus produtos.</Subtitle>
        </TextWrapper>
        <Summary>
          <SummaryTitle>Resumo do Pedido</SummaryTitle>
          {cart.map((item: Item) => (
            <ProductSummary key={item.id} item={item} />
          ))}
          <Divider />
          <TopicWrapper>
            <TopicBold>Valor Total</TopicBold>
            <SpanBold>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0))}</SpanBold>
          </TopicWrapper>
        </Summary>
        <Summary>
          <SummaryTitle>Resumo da Entrega</SummaryTitle>
          <InfoWrapper>
            <Topic>Cidade</Topic>
            <Span>Teresina - PI</Span>
          </InfoWrapper>
          <InfoWrapper>
            <Topic>Endereço</Topic>
            <Span>Rua Professora Zaíra Freire, 647 - Gurupi</Span>
          </InfoWrapper>
          <InfoWrapper>
            <Topic>CEP</Topic>
            <Span>64091-250</Span>
          </InfoWrapper>
          <InfoWrapper>
            <Topic>Complemento</Topic>
            <Span>Sem complemento</Span>
          </InfoWrapper>
        </Summary>
        <Summary>
          <SummaryTitle>Resumo do Pagamento</SummaryTitle>
          <PaymentWrapper>
            <FaPix size={32} color="#32BCAD" />
            <Span>PIX: A combinar com a loja</Span>
          </PaymentWrapper>
        </Summary>
      </Wrapper>
    </Section>
  );
}

export default Confirmation;