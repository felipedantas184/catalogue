import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 8px;
	margin-left: auto;
	margin-right: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
  gap: 8px;
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
  justify-content: space-between;
`
export const Topic = styled.span`
  color: #13131A;
  font-size: 14px;
  font-weight: 500;
`
export const Span = styled.span`
  color: #13131A;
  font-size: 14px;
  font-weight: 400;
`
export const TopicBold = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 600;
`
export const SpanBold = styled.span`
  color: #13131A;
  font-size: 16px;
  font-weight: 500;
`