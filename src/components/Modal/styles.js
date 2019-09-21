import styled from 'styled-components'

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 20px;
  z-index: 10;
`

export const CloseButton = styled.button`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 10px;

  background: none;
  border: none;
  padding: 0;

  font-size: 60px;
  font-family: var(--open-sans);
  font-weight: 300;
  line-height: 0.8;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    color: var(--wine);
  }
`
