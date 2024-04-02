import Link from "next/link";
import styled from "styled-components";

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 4px;
`
export const ImageWrapper = styled(Link)`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
  -webkit-tap-highlight-color: transparent;

  > div {
    position: unset !important;
    transition: transform 0.5s ease-in-out;
  }
  
  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`
export const TextWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
`
export const Brand = styled.h3`
  color: #13131A;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`
export const Title = styled.h2`
  color: #13131A;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`
export const Price = styled.h4`
  color: #13131A;
  font-size: 12px;
  font-weight: 600;
`
export const AddButton = styled.button`
  margin: 0;
  padding: 8px 24px;

  color: #F6F6F6;
  background-color: #5A189A;
  background-clip: padding-box;

  border: 1px solid transparent;
  border-radius: .25rem;

  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;

  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

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
    background-color: #13113A;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`