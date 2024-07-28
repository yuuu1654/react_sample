import styled from "styled-components"

export const Card = (props) => {
  const { children } = props
  return (
    <SCard>{children}</SCard>
  )
}

const SCard = styled.div`
  background-color: #F3AE72;
  border-radius: 9px;
  padding: 10px;
  margin: 10px;
`