import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-bottom: ${({theme}) => theme.spacing.between_elements.between_cards};
  display: inline-block;
  width: 100%;
  padding: ${({theme}) => theme.spacing.padding.small} 0;
  border-radius: ${({theme}) => theme.spacing.radius.small};

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.375rem;
    }
  }
`;