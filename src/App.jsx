import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import Sounds from "./components/Sounds";

const initialQuote = {
	text: "Quote :)",
	author: "Author :)",
};

function App() {
	const [quote, setQuote] = useState(initialQuote);

	const updateQuote = async () => {
		const url = "https://www.breakingbadapi.com/api/quote/random";
		const res = await fetch(url);
		const [newQuote] = await res.json();

		const { quote: text, author } = newQuote;

		setQuote({
			text,
			author,
		});
		// console.log(quote);
	};

	useEffect(() => {
		updateQuote();
	}, []);

	return (
		<div className="container mt-4">
			<Sounds />
			<div className="row g-4">
				<div className="col-12 text-center">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg"
						alt="logo"
					/>
				</div>
				<div className="col-12 text-center">
					<button
						onClick={() => updateQuote()}
						className="btn btn-warning ml-2"
					>
						Get quote
					</button>
					<Quote quote={quote} />
				</div>
			</div>
		</div>
	);
}

export default App;
