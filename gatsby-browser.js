import "./src/styles/main.scss";

export const onClientEntry = () => {
	// Fix how some mobile browsers don't account for address bar with 100vh
	document.documentElement.style.setProperty('--vh', `${window.innerHeight * .01}px`);
};