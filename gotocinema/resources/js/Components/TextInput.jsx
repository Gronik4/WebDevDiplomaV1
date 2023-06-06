import React from 'react';
import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef( function TextInput({ type = 'text', className , isFocused = false, ...props }, ref) {
  const input = ref? ref: useRef();
  useEffect(()=> {
    if(isFocused) { input.current.focus(); }
  }, []);
  return (
    <input
      {...props}
      type={type}
      className={ className }
      ref={input}
      style={{ borderColor: '#b7b7b7', fontSize: '1.6rem', focus: {outline: '1px #CF87FF solid' }}}
    />
  )
})
