import React, { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import { ErrorScreen } from '../errors/ErrorScreen';

export const HeroScreen = () => {

  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById( heroeId ), [heroeId]);

  if(!hero){
    return <ErrorScreen title="Error 404 - Heroe no encontrado"/>
  }

  const handleReturn = () => navigate(-1);

  return ( 
      <div className='row mt-5'>
        <div className="col-md-4">
            <img src={ `/assets/heroes/${ hero.id }.jpg` } className="img-thumbnail card-img animate__animated animate__fadeInLeft" alt={ hero.superhero } />
        </div>
        <div className='col-6 animate__animated animate__fadeIn'>
          <h1>{ hero.superhero }</h1> 
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><b>Publisher: </b>{ hero.publisher }</li> 
            <li className='list-group-item'><b>Alert Ego: </b>{ hero.alter_ego }</li>
            <li className='list-group-item'><b>First Appearance: </b>{ hero.first_appearance }</li> 
          </ul>
          <h5>Characters</h5>
          <p>{ hero.characters }</p>
          <button onClick={handleReturn} className='btn btn-info'>Regresar</button>
        </div>
      </div>
  )
}
