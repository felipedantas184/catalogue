import { useSelector } from "react-redux";
import { Divider, InfoWrapper, PaymentWrapper, Section, Span, SpanBold, Subtitle, Summary, SummaryTitle, TextWrapper, Title, Topic, TopicBold, TopicWrapper, Wrapper } from "./styles";
import ProductSummary from "./ProductSummary";
import { FaCheckCircle } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";

type Item = {
  id: string,
  title: string,
  brand: string,
  imageUrl: string,
  description: string,
  price: number,
  quantity: number,
}

const Confirmation = () => {
  const order = useSelector((state: any) => state.order);

  return (
    <Section>
      <Wrapper>
        <TextWrapper>
          <FaCheckCircle size={48} color="#08A045" />
          <Title>Seu pedido foi enviado!</Title>
          <Subtitle>Agora é só aguardar enquanto preparamos seus produtos.</Subtitle>
          <Subtitle>Código do pedido: <strong>{order.id}</strong></Subtitle>
        </TextWrapper>
        <Summary>
          <SummaryTitle>Resumo do Pedido</SummaryTitle>
          {order.cart.map((item: Item) => (
            <ProductSummary key={item.id} item={item} />
          ))}
          <Divider />
          <TopicWrapper>
            <TopicBold>Valor Total</TopicBold>
            <SpanBold>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(order.amount)}</SpanBold>
          </TopicWrapper>
        </Summary>
        <Summary>
          <SummaryTitle>Resumo da Entrega</SummaryTitle>
          <InfoWrapper>
            <Topic>Cidade</Topic>
            <Span>{order.delivery.city} - {order.delivery.state}</Span>
          </InfoWrapper>
          <InfoWrapper>
            <Topic>Endereço</Topic>
            <Span>{order.delivery.address}, {order.delivery.number} - {order.delivery.district}</Span>
          </InfoWrapper>
          <InfoWrapper>
            <Topic>CEP</Topic>
            <Span>{order.delivery.zipCode.replace(/(\d{5})(\d{3})/, '$1-$2')}</Span>
          </InfoWrapper>
          <InfoWrapper>
            <Topic>Complemento</Topic>
            <Span>{order.delivery.complement}</Span>
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