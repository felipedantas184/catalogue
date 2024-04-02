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
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

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