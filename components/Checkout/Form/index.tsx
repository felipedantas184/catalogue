import { useEffect, useState } from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Personal from "./Personal";
import { CheckoutButton, Divider, Price, RadioButtons, RadioInput, RadioLabel, Title, Topic, TopicWrapper, Wrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { sendOrderEmail } from "@/lib/api";
import { addDoc, collection } from "firebase/firestore";
import fireDB from "@/firebase/initFirebase";
import { removeFromCart } from "@/redux/cart.slice";
import { useRouter } from "next/router";
import { addOrder } from "@/redux/order.slice";
import { IoLocationSharp } from "react-icons/io5";
import { FaTruck, FaUser, FaWallet } from "react-icons/fa6";

const Form = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter()

  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
  })
  const [pickUp, setPickUp] = useState(true);
  const [delivery, setDelivery] = useState({
    zipCode: '',
    address: '',
    complement: '',
    district: '',
    number: '',
    city: '',
    state: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('Pix');
  const [mesage, setMesage] = useState('');
  const cartOrder: any[] = []

  useEffect(() => {
    var deliveryMesageComposure = '*_Informações da Entrega:_*%0A' + delivery.address + ', ' + delivery.number + ' - ' + delivery.complement + '%0A' + delivery.zipCode + '%0A' + delivery.city + ', ' + delivery.state
    var PersonalMesageComposure = '*_Informações da Cliente:_*%0A' + "```" + personal.name + '%0A' + personal.email + '%0A' + personal.phone + "```"
    var cartMesageComposure = cart.reduce(function (prevVal: any, currVal: any, idx: any) {
      return idx == 0 ? Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}` : prevVal + '%0A%0A' + Number(idx + 1) + '. ' + "```" + currVal.title + ` (x${currVal.quantity})` + "```" + `%0A${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(currVal.price * currVal.quantity)}`;
    }, '')
    setMesage("*RESUMO DA COMPRA*%0A%0A" + PersonalMesageComposure + '%0A%0A_______________________%0A%0A' + deliveryMesageComposure + '%0A%0A_______________________%0A%0A' + '*_Informações do Pedido:_*%0A%0A' + cartMesageComposure + '%0A%0A_______________________%0A%0A' + `*Total: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price, 0))}*`)
    console.log(mesage)

  }, [cart, delivery, personal])

  /**async function handleOrder() {
    try {
        sendOrderEmail({
          orderId: "Código da Compra",
          name: "Nome",
          email: "Email",
          amount: 'Valor Total',
          observations: 'Observações'
        })
    } catch (error) {
      alert(error)
    }
  } */

  const handleOrder = async (e: any) => {
    e.preventDefault()
    cart.forEach((item: any) => {
      const obj = {
        id: item.id,
        quantity: item.quantity,
      }
      cartOrder.push(obj)
    });
    console.log(cartOrder)
    try {
      addDoc(collection(fireDB, "orders"), {
        personal: personal,
        cart: cartOrder,
        delivery: pickUp ? 'Retirar na Loja' : delivery,
        paymentMethod: paymentMethod,
        amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0),
      }).then(function (docRef) {
        dispatch(addOrder({
          id: docRef.id, 
          personal: personal,
          cart: cart,
          delivery: pickUp ? 'Retirar na Loja' : delivery,
          paymentMethod: paymentMethod,
          amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0)
        }))
        localStorage.setItem("order", JSON.stringify({
          id: docRef.id, 
          personal: personal,
          cart: cart,
          delivery: pickUp ? 'Retirar na Loja' : delivery,
          paymentMethod: paymentMethod,
          amount: cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0)
        }))
      }).then(
        cart.map((item: any) => (
          dispatch(removeFromCart(item))
        ))
      )
      alert("Pedido eviado com sucesso!")

      router.push({ pathname: '/confirmation' })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Wrapper onSubmit={handleOrder} >
      <Title><FaUser />Comprador</Title>
      <Personal personal={personal} setPersonal={setPersonal} />
      <Divider />
      <Title><FaTruck />Entrega</Title>
      <RadioButtons>
        <RadioInput type="radio" name="size" id="small" checked={pickUp} />
        <RadioLabel htmlFor="small" onClick={() => setPickUp(true)}><IoLocationSharp />Retirar na Loja</RadioLabel>

        <RadioInput type="radio" name="size" id="big" checked={!pickUp} />
        <RadioLabel htmlFor="big" onClick={() => setPickUp(false)} ><FaTruck />Entrega em Casa</RadioLabel>
      </RadioButtons>
      {(!pickUp) ? (
        <Delivery delivery={delivery} setDelivery={setDelivery} />
      ) : (<></>)}
      <Divider />
      <Title><FaWallet />Pagamento</Title>
      <Payment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
      <Divider />
      <TopicWrapper>
        <Topic>Total</Topic>
        <Price>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(cart.reduce((acc: any, curr: any) => acc + curr.price * curr.quantity, 0))}</Price>
      </TopicWrapper>
      <CheckoutButton type="submit" >Adicionar Pedido</CheckoutButton>
      {/** <a href={`https://wa.me//5586995185757?text=${mesage}`}>Bora</a>*/}
    </Wrapper>
  );
}

export default Form;