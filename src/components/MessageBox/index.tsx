import React, { useState } from 'react'
import { MdSend as SendIcon } from "react-icons/md";

const MessageBox = () => {
  return (
    <div className="message-box">
      <div className="message-box__input">
        <input className="" type="text" placeholder="Digite uma mensagem"/>
      </div>
      <button className="message-box__icon">
        <SendIcon size={24}/>
      </button>
    </div>
  )
}

export default MessageBox;
