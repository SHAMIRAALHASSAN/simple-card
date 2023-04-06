import Greece from './images/greece.avif'


function Header() {
    return(
        <div className="card">
      
        <div className="card-img">
        <img className='img' src={Greece} alt="" />
        </div>
        <div className='card-info'>
          <h1 className="title">A TITLE</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quaerat architecto odit aliquid ipsum assumenda nulla adipisci eveniet ad consequuntur beatae reiciendis? Consequuntur iste iusto molestias aspernatur voluptatem, quod obcaecati, blanditiis neque a quibusdam maxime veniam quae similique velit exercitationem perferendis voluptate? Error fugiat quia omnis exercitationem voluptatum saepe voluptatibus.</p>
        </div>
      </div>
    )
}

export default Header;