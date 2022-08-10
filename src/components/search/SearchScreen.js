import React, { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const query =  (params.get("q"))? params.get("q") : "";
  
  const [ formValues, handleInputChange] = useForm({
    searchText: query
  });

  const { searchText } = formValues;
  
  const heroesFiltered = useMemo(() => getHeroesByName( query ), [ query ]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <div>
        <h1>Search Screen</h1>
        <hr/>

        <div className='row'>
            <div className='col-5'>
                <h4>Search Form</h4>
                <hr/>
                <form onSubmit={ handleSearch }>
                    <input
                        name='searchText'
                        type="text"
                        placeholde="Find your hero"
                        className='form-control'
                        value={ searchText }
                        onChange={ handleInputChange }/>

                    <button 
                        type='submit'
                        className='btn btn-block btn-outline-primary'>
                        Search...
                    </button>
                </form>
            </div>

            <div className='col-7'>
                <h4>Results</h4>
                <hr/>
                {
                    heroesFiltered.map ( hero => (
                        <HeroCard 
                            key={ hero.id }
                            {...hero}
                        />
                    ))
                }
            </div>
        </div>
    
    </div>
  )
}
