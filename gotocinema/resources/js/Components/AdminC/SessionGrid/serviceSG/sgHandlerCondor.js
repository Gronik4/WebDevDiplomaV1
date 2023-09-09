import React from 'react'

export default function sgHandlerCondor(code) {
  let out;
  switch(code) {
    case '00':
    case '02':
      out = 'show';
      break;
    case '10':
    case '11':
    case '12':
    case '01':
      out = 'non';
      break;
    default: out = 'show';
  }
  return out;
}
