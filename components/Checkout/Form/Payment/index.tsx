import { InputWrapper, Label, Option, Select } from "./styles";

const Payment = () => {
  return (
    <InputWrapper>
      <Label>Forma de Pagamento</Label>
      <Select>
        <Option>Pagar com Pix</Option>
        <Option>Cartão de Crédito</Option>
      </Select>
    </InputWrapper>
  );
}

export default Payment;