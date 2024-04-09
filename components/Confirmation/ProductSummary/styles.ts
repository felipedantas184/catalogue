import Link from "next/link";
import styled from "styled-components";

export const Product = styled.div`
 width: 100%;
 padding: 0 8px;

 display: flex;
 flex-direction: row;
 align-items: center;
 gap: 16px;
`
export const ImageWrapper = styled(Link)`
  flex: 1;
  position: relative;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  > div {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
`
export const TextWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const TopicWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`
export const Brand = styled.h3`
  color: #13131A;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`
export const Title = styled.h2`
  color: #13131A;
  font-size: 14px;
  font-weight: 500;
`
export const Price = styled.span`
  color: #13131A;
  font-size: 15px;
  font-weight: 600;
`
export const Quantity = styled.span`
  color: #13131A;
  font-size: 14px;
  font-weight: 500;
`