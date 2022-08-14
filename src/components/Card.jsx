const Card = ({ imagen, title, description }) => {

return (
    <div className='card text-center bg-dark carta'>
    <img className="img" src={imagen}  />
    <div className='card-body text-light'>
    <h3 className='card-title'>{title}</h3>
    <hr />
    <p className='card-text text-secondary '>{description}</p>
    <a href="#!" className='btn btn-outline-secondary rounded-0 ' >
              LIKE
            </a>
    </div>
   </div>
)
}

export default Card