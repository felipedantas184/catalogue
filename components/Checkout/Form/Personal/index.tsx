import { Input, InputDoubleWrapper, InputWrapper, Label } from "./styles";

const Personal = () => {
  return (
    <>
      <InputWrapper>
        <Label>Nome</Label>
        <Input type='text' placeholder="Digite seu nome" />
      </InputWrapper>
      <InputWrapper>
        <Label>E-mail</Label>
        <Input type='email' placeholder="Digite seu e-mail" />
      </InputWrapper>
      <InputDoubleWrapper>
        <InputWrapper>
          <Label>WhatsApp</Label>
          <Input type='tel' placeholder="Digite seu telefone" />
        </InputWrapper>
        <InputWrapper>
          <Label>CPF</Label>
          <Input type='tel' placeholder="Digite seu CPF" />
        </InputWrapper>
      </InputDoubleWrapper>
    </>
  );
}

export default Personal;