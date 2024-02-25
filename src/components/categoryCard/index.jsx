import './index.css'
import PropTypes from 'prop-types'

const CategoryCard = ({title, url, click}) => {
  function location() {
    if (!click) return
    window.location.href = `/category`
  } 
  const style = {
    content: '""',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url("${url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'all 0.3s ease-in-out',
  }
  return (
    <section className='categoryCard' onClick={location}>
      <div style={style}></div>
      <h3>{title}</h3>
    </section>
  )
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  click: PropTypes.bool.isRequired,
}

export default CategoryCard
