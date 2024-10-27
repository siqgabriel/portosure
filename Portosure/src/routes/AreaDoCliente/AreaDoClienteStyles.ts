import React from 'react';
import styled from 'styled-components';
import Rodape from '../../components/Rodape/Rodape';

export const Main = styled.main`
  padding-top: 3rem;
  background: #ecf2f7;
  font-family: 'Fira Code', monospace;
  min-height: 100vh;
`;
export const Principal = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

`;

export const Titulo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.25;
  }
`;

export const MenuHorizontal = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  overflow-x: auto;

  a {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    height: 48px;
    padding: 0 0.25rem;
    font-weight: 500;
    color: inherit;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    transition: 0.15s ease;

    &:hover,
    &:focus,
    &.active {
      color: var(--c-accent-primary);
      border-bottom-color: var(--c-accent-primary);
    }

    & + * {
      margin-left: 1rem;
    }
  }

  @media (max-width: 575.98px) {
      display: flex;
      flex-wrap: wrap;
    }
`;

export const Secundario = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 3rem;
  margin-top: -1px;
  border-top: 1px solid var(--c-border-primary);
`;

export const Paragrafo = styled.div`
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    color: var(--c-text-secondary);
    margin-top: 0.25rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;


