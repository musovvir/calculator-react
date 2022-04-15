import React from 'react'
import { ACTIONS } from './App'

function OperationButton({ dispatch, operation }: any) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{ operation }</button>
  )
}

export default OperationButton