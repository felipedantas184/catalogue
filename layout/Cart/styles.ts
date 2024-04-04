import styled from "styled-components";

interface Props {
  cartOpen: any
}

export const Container = styled.nav<Props>`
  background: #F1F1F1;
  padding: 50px 0;

  display: flex;
	flex-direction: column;
	align-items: center;
  
  top: 0;
  left: 0;
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;

  opacity: ${({ cartOpen }) => (cartOpen ? '100%' : '0')};
  left: ${({ cartOpen }) => (cartOpen ? '0' : '100%')};
  transition: 0.7s ease-in-out;
`
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  padding: 8px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`
export const Close = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  -webkit-tap-highlight-color: transparent;
  user-select: none
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
  align-self: flex-start;
`
export const Divider = styled.div`
  width: 100%;
  margin-top: 8px;
  border-top: 1px solid #BBB;
`
export const TopicWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const TextWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`
export const Topic = styled.span`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
`
export const Price = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
export const CheckoutButton = styled.button`
  width: 100%;
  min-height: 3rem;
  margin: 0;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);

  background-color: #5A189A;
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  color: #fff;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #13131A;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #5A189A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`