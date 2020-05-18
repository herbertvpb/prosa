import React from 'react'

interface MyProps {
  children?: React.ReactNode;
}

const Container: React.FunctionComponent<MyProps> = props => {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}

export default Container
