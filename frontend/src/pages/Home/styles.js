import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
`;

export const Chat = styled.div`
  background: ${({theme}) => theme.colors.blue["400"]};
  padding: ${({theme}) => theme.spacing.padding.small};
  border-radius: 50%;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: ${({theme}) => theme.spacing.padding.small};
  margin-right: ${({theme}) => theme.spacing.padding.small};
  cursor: pointer;
  transition: all linear .2s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(.9);
  z-index: 999;

  svg {
    fill: #FFF;
    line-height: 1;
    font-size: 1.875rem;
  }

  &:hover {
    background: ${({theme}) => theme.colors.blue["300"]};
    transform: scale(1);

    svg {
      fill: ${({theme}) => theme.colors.blue["900"]};
    }
  }
`;

export const SubmitWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  max-width: 800px;
  margin: auto;

  img {
    max-width: 100%;
  }
`;
