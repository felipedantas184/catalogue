import styled from "styled-components";

export const Section = styled.section`
  background-color: #F6F6F6;
  padding: 25px 0;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 16px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  min-height: 86vh;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`
export const Divider = styled.div`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 8px;
  border-top: 1px dotted #BBB;
`
export const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  max-width: 500px;

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
  }
`
export const Span = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`