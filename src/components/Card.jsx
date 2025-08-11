import { useState, useEffect } from "react";

export function Card() {
  const [dogs, setDogs] = useState([]);     

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=5&has_breeds=1", {
      headers: {    // Cabeçalho da Requisição
        "x-api-key":
          "live_qLcGaqbY5mrdAzLTCJTzGfcLWf6HLKf4EPNzfFNUYms2Ch483mqW1lQJ6IgIDUj6",  // Chave da API
      },
    })
      .then((response) => response.json())      // Convertendo a resposta em json
      .then((data) => setDogs(data))            // Salvando os dados da resposta no estado
      .catch((error) => console.error("Falha na requisição: " + error));  // Tratando eventuais erros
  }, []);   // Os colchetes determinam que a chamada só acontecerá 1 vez

  return (
    <>
    <div className="container m-auto">
      {dogs.map(dog => {
        // Desconstrução
        const { url, breeds } = dog
        const { name, life_span, temperament } = breeds[0]

        if (!breeds || breeds.length === 0) return null     // A condição verifica se o array está vazio. Se sim, nada será renderizado

        return (
            <div key={url} className="flex gap-5 mb-5 p-5 border rounded-xl bg-green-300">
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
