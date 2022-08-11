const API_KEY = process.env.REACT_APP_API_KEY;
export const getCity = (
	city,
	setGetWeather,
	getWeather,
	setError,
	setLoading
) => {
	setLoading(true);
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				if (res.status === 404) {
					setLoading(false);
					setError("Oops, there seems to be an error!(location not available)");
				}
				throw new Error("You have an error");
			}
		})
		.then((object) => {
			setLoading(false);
			setGetWeather(object);
		})
		.catch((error) => console.log(error));
	setError("");
};

export const getLoc = (
	loc,
	setGetWeather,
	getWeather,
	setError,
	setLoading
) => {
	setLoading(true);
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?${loc}&appid=${API_KEY}&units=metric`
	)
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				if (res.status === 404) {
					setLoading(false);
					setError("Oops, there seems to be an error!(location not available)");
				}
				throw new Error("You have an error");
			}
		})
		.then((object) => {
			setLoading(false);
			setGetWeather(object);
		})
		.catch((error) => console.log(error));
};
