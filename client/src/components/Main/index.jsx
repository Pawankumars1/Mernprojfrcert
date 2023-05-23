import styles from "./styles.module.css";
import React, { useState } from 'react';
const URL = "https://v2.jokeapi.dev/joke/Any?type=single&amount=1";
const Main = () => {
	const [joke, setJoke] = useState(" ");

  async function getJoke() {
    const data = await fetch(URL).then((res) => res.json());
    setJoke(data.joke);
  }
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
	return (
		<div className={styles.main_container}>
		  <nav className={styles.navbar}>
			<h1>Jokebook</h1>
			<button className={styles.white_btn} onClick={handleLogout}>
			  Logout
			</button>
			
			
			</nav>
			<nav className={styles.contbar}>
			<p><b>{joke}</b></p>
			</nav>
			
			<button className={styles.white_btn1} onClick={getJoke}>Get Joke</button>
			
		</div>
	  );
	};


export default Main;
