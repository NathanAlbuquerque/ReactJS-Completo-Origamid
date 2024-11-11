import React from 'react'

const HeaderLink = ({nome, link}) => {
  return <li><a href={link ? link : '#'}>{nome}</a></li>
}

export default HeaderLink
