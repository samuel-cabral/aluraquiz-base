import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { shade } from 'polished'

import { theme } from '../../../db.json'

const Container = styled.div`
  background: ${shade(0.4, theme.colors.mainBg)};
  border-radius: 8px;
  padding: 8px;
  margin: 16px 0;
  width: 100%;

  border: 2px solid ${shade(0.4, theme.colors.mainBg)};
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #666360;
    }
  }
`

const Input = ({ type, ...rest }) => {
  return (
    <Container>
      <input type="text" {...rest} />
    </Container>
  )
}

export default Input

Input.propTypes = {
  type: PropTypes.string
}
