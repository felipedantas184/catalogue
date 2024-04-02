import { Input, InputDoubleWrapper, InputWrapper, Label } from "./styles";

const Delivery = () => {
  return (
    <>
      <InputWrapper>
        <Label>CEP</Label>
        <Input type='number' placeholder="Digite seu CEP" />
      </InputWrapper>

      <InputWrapper>
        <Label>Endereço</Label>
        <Input type='text' placeholder="Digite seu endereço" />
      </InputWrapper>

      <InputDoubleWrapper>
        <InputWrapper>
          <Label>Bairro</Label>
          <Input type='text' placeholder="Digite seu bairro" />
        </InputWrapper>
        <InputWrapper>
          <Label>Número</Label>
          <Input type='tel' placeholder="Número da casa" />
        </InputWrapper>
      </InputDoubleWrapper>

      <InputDoubleWrapper>
        <InputWrapper>
          <Label>Cidade</Label>
          <Input type='text' placeholder="Digite sua cidade" />
        </InputWrapper>
        <InputWrapper>
          <Label>Estado</Label>
          <Input type='text' placeholder="Digite seu estado" />
        </InputWrapper>
      </InputDoubleWrapper>
    </>
  );
}

export default Delivery;