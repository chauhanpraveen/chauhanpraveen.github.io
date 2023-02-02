

const Nav = ({className, item}) => {
  return (
    <li className={className}><a href={item.link}>{item.icon}<span>{item.title}</span></a></li>
  )
}

export default Nav