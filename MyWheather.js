const getWeather = async (city) => {
    const apiKey = 'your-api-key-here';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        const temperature = data.main.temp;
        return temperature;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  