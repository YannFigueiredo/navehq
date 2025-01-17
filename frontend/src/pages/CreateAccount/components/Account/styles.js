import styled from "styled-components";

export const Container = styled.div`
  max-width: 90rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacing.between_elements.between_items};
  position: relative;
  animation: rotateFromLeft .2s linear;
`;

export const Tabs = styled.nav`
  padding: ${({theme}) => theme.spacing.padding.normal};
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;
    gap: ${({theme}) => theme.spacing.between_elements.between_sections};
  }

  ul li {
    list-style-type: none;
    font-size: ${({theme}) => theme.fontSize.base_large};
    transition: all linear .4s;
    cursor: pointer;
    font-weight: 500;
  }

  ul .active, ul li:hover {
    color: ${({theme}) => theme.colors.detailPrimary};
  }

  @media screen and (max-width: 768px) {
    padding: ${({theme}) => theme.spacing.padding.small};

    ul {
      gap: ${({theme}) => theme.spacing.between_elements.normal};
    }
  }
`;

export const Main = styled.div`
  padding: 0 ${({theme}) => theme.spacing.padding.large};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0 ${({theme}) => theme.spacing.padding.small};
  }
`;