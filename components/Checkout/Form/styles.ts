import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
  max-width: 1080px;
  padding: 8px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  gap: 12px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
  align-self: flex-start;

  display: flex;
  align-items: center;
  gap: 4px;
`
export const Divider = styled.div`
  width: 100%;
  margin-top: 8px;
  border-top: 1px dotted #BBB;
`
export const TopicWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
export const RadioButtons = styled.div`
  align-self: flex-start;
  padding: 4px; 
   
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #01cc65;
    color: #FFFFFF;
  }
`
export const RadioLabel = styled.label`
  position: relative;
  color: #01cc65;
  font-family: "Montserrat";
  font-size: 16px;
  border: 2px solid #01cc65;
  border-radius: 5px;
  padding: 8px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`