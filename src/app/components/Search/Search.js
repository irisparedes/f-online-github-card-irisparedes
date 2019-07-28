import React from 'react';
import './Search.css';

const Search = ({ adalabers, handleSelect }) => {

	return (

		<select name="adalabers" id="adalabers" class="search__select" onChange={handleSelect}>
			
			{adalabers && <option selected disabled hidden>Seleccionar Adalaber</option>}
			{adalabers ? (
				adalabers.map(adalaber =>
					<option value={adalaber} class="search__option" key={adalaber}>
						{adalaber}
					</option>)
			)
				:
				<option value="none" class="search__option">Cargando...</option>
			}
		</select>

	);
}

export default Search;

