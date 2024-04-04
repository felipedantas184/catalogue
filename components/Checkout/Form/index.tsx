import { useEffect, useState } from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Personal from "./Personal";
import { CheckoutButton, Divider, Price, Topic, TopicWrapper, Wrapper } from "./styles";
import { useSelector } from "react-redux";

const Form = () => {
  const cart = useSelector((state: any) => state.cart);
  const [totalPrice, setTotalPrice] = useState(cart.reduce((acc:any, curr:any) => acc + curr.price, 0));

  const [delivery, setDelivery] = useState({
    zipCode: '',
    address: '',
    complement: '',
    district: '',
    number: '',
    city: '',
    state: '',
  })
  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
  })
  const [mesage, setMesage] = useState('');
  
  useEffect(() => {
    const newTotalPrice = cart.reduce((acc:any, curr:any) => acc + curr.price, 0)
    setTotalPrice(newTotalPrice)
  }, [cart])

	useEffect(() => {
    var deliveryMesageComposure = '*_Informações da Entrega:_*%0A' + delivery.address + ', ' + delivery.number + ' - ' + delivery.complement + '%0A' + delivery.zipCode + '%0A' + delivery.city + ', ' + delivery.state 
    var PersonalMesageComposure = '*_Informações da Cliente:_*%0A' + "```" + personal.name + '%0A' + personal.email + '%0A' + personal.phone + "```"
		var cartMesageComposure = cart.reduce(function (prevVal: any, currVal: any, idx: any) {
			return idx == 0 ? Number(idx + 1) + '. ' + "```" +  currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}` : prevVal + '%0A%0A' + Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}`;
		}, '')
		setMesage("*RESUMO DA COMPRA*%0A%0A" + PersonalMesageComposure + '%0A%0A_______________________%0A%0A'  + deliveryMesageComposure + '%0A%0A_______________________%0A%0A' + '*_Informações do Pedido:_*%0A%0A' + cartMesageComposure + '%0A%0A_______________________%0A%0A' + `*Total: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc:any, curr:any) => acc + curr.price, 0))}*`)
		console.log(mesage)

	}, [cart, delivery, personal])

  return (
    <Wrapper>
      <Personal personal={personal} setPersonal={setPersonal} />
      <Divider />
      <Delivery delivery={delivery} setDelivery={setDelivery} />
      <Divider />
      <Payment />
      <Divider />
      <TopicWrapper>
        <Topic>Total</Topic>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(120)}</Price>
      </TopicWrapper>
      <CheckoutButton type="submit" >Adicionar Pedido</CheckoutButton>
      <a href={`https://wa.me//5586995185757?text=${mesage}`}>Bora
      </a>
    </Wrapper>
  );
}

export default Form;