import React from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Adalab from '../../../images/logo.svg';
// import './Main.css'

const Main = ({ adalabers, handleSelect, adalaberInfo }) => {

	return (
		<div class="main">
			<Search
				adalabers    = { adalabers }
				handleSelect = { handleSelect }
				/>
			<Card
				adalaberInfo = { adalaberInfo }
			/>
			<img src={Adalab} alt="Logo Adalab" class="logo__adalab" />
		</div>
	);
}

export default Main;