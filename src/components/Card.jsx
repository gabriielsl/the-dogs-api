import { useState, useEffect } from "react";

export function Card() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=5&has_breeds=1", {
      headers: {
        "x-api-key":
          "live_qLcGaqbY5mrdAzLTCJTzGfcLWf6HLKf4EPNzfFNUYms2Ch483mqW1lQJ6IgIDUj6",
      },
    })
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error("Falha na requisição: " + error));
  }, []);

  return (
    <>
    <div className="container m-auto">
      {dogs.map(dog => {
        const { url, breeds } = dog
        const { name, life_span, temperament } = breeds[0]

        if (!breeds || breeds.length === 0) return null

        return (
            <div key={url} className="flex gap-5 mb-5 p-5 border rounded-xl">
                <img className="w-50 h-50 object-cover rounded-xl border" src={url} alt={name} />
                <p className="leading-loose">
                  Nome: <strong> {name} </strong> <br/>
                  Expectativa de Vida: <strong> {life_span} </strong> <br />
                  Características: <strong> {temperament} </strong>  
                </p>
            </div>
        )
      })}
    </div>
    </>
  );
}
