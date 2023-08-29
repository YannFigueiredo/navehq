import styled from "styled-components";

export const Main = styled.div`
  padding: ${({theme}) => theme.spacing.padding.small};
  display: flex;
  gap: ${({theme}) => theme.spacing.between_elements.between_sections};
`;