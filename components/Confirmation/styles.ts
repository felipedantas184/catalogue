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
  gap: 8px;

  @media screen and (max-width: 768px) {
    padding: 0 8px;
  }
`
export const TextWrapper = styled.div`
  width: 100%;
  padding: 16px 12px;
  margin-bottom: 8px;
  background-color: #FFF;
  border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const Title = styled.h1`
  color: #13131A;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`
export const Subtitle = styled.h3`
  color: #5A5A5A;
  font-size: 14px;
  text-align: center;
  font-weight: 500;
`
export const Summary = styled.div`
  width: 100%;
  padding: 16px 12px;
  background-color: #FFF;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
  gap: 8px;
`
export const SummaryTitle = styled.h5`
  color: #13131A;
  font-size: 18px;
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 8px;
`
export const Divider = styled.div`
  width: 100%;
  margin-top: 8px;
  border-top: 1px solid #BBB;
`
export const TopicWrapper = styled.div`
  width: 100%;
  padding: 8px 8px 0 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const TopicBold = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
export const SpanBold = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
export const InfoWrapper = styled.div`
  width: 100%;
  padding: 0 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Topic = styled.span`
  color: #13131A;
  font-size: 14px;
  font-weight: 600;
`
export const Span = styled.span`
  color: #13131A;
  font-size: 14px;
  font-weight: 500;
`
export const PaymentWrapper = styled.div`
  width: 100%;
  padding: 0 8px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`