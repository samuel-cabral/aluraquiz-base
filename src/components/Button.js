import React, { ButtonHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`

const Button = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
    </Container>
  )
}

export default Button

Button.propTypes = {
  rest: ButtonHTMLAttributes,
  children: PropTypes.string.isRequired
}
