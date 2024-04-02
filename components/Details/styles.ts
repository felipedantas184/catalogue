import styled from "styled-components";

export const Section = styled.section`
  background-color: #F6F6F6;
  padding: 0 0 25px 0;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  gap: 8px;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 20px 20px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      transform: scale(1.1);
    }
  }
`
export const Gallery = styled.div`
  width: 100%;
  padding: 0 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const GelleryIcon = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    transition: transform 0.5s ease-in-out;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      transform: scale(1.1);
    }
  }
`
export const TextWrapper = styled.div`
  width: 100%;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const SpaceBetween = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Brand = styled.h3`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`
export const Title = styled.h2`
  color: #13131A;
  font-size: 16px;
  font-weight: 400;
`
export const Price = styled.h4`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
`
export const AddToCart = styled.button`
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
export const Favorite = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #FFF;
  border: 1px solid #13131A;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #13131A;
  cursor: pointer;
  display: inline-flex;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus {
    background-color: #FFF;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    background-color: #FFF;
    box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
    transform: translateY(0);
  }
`