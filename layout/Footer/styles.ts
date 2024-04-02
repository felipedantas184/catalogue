import styled from "styled-components";

export const Container = styled.section`
  background-color: #5A189A;
  height: 60px;

  display: flex;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  height: 60px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`
export const SocialNav = styled.ul`
	list-style: none;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`
export const SocialItem = styled.li`
	transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;

  &::after {
    display:block;
    content: '';
    border-bottom: solid 2px #EB5757;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`