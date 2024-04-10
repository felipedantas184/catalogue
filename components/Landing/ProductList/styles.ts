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
  gap: 16px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`
export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 20px;
  font-weight: 600;
`
export const Subtitle = styled.span`
  color: #C4C4C4;
  font-size: 14px;
`
export const Input = styled.input`
  width: 100%;
  padding: 12px 8px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-family: 'Montserrat';
  border-bottom: 1px solid #C4C4C4;
  

  ::placeholder {
    color: #C4C4C4;
    font-size: 14px;
    font-weight: 600;
  }
`
export const BrandWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`
export const BrandTopic = styled.div`
  background-color: #FAFAFA;
  padding: 12px 8px;
  border: 1px solid #C4C4C4;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`