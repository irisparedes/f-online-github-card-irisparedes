import React from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Adalab from '../../../images/logo-adalab.svg';
import LogoReact from '../../../images/logo.svg';
import './Main.scss'

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
			<img src={LogoReact} alt="Logo React" class="logo__react" />
			
		</div>
	);
}

export default Main;