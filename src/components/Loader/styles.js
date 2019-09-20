import styled, { keyframes, css } from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  ${props =>
    props.fullContainer &&
    css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    `}

  ${props =>
    props.opacityBg &&
    css`
      background-color: rgba(255, 255, 255, 0.8);
    `}

    ${props =>
      props.fixed &&
      css`
        position: fixed;
      `}
`

const spinKeyframes = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

export const spin = ({ time = '1.5s' } = {}) =>
  css`
    animation: 2s ${spinKeyframes} infinite;
    -webkit-animation: ${time} ${spinKeyframes} linear infinite;
  `

export const LoaderAnimated = styled.div`
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid var(--orange);
  ${spin()}

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 4px solid transparent;
  }

  &::before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-top-color: var(--orange);
    ${spin({ time: '2.2s' })} /* animation: &(spin) 3.5s linear infinite; */
  }

  &::after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-top-color: var(--orange);
    ${spin({ time: '1.7s' })} /* animation: &(spin) 1.75s linear infinite; */
  }
`
