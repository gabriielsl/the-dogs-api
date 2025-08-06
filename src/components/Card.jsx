import { useState, useEffect } from "react";

export function Card() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=5&has_breeds=1")
      .then((response) => response.json())
      .then((data) => setDogs(data))
      .catch((error) => console.error("Falha na requisição: " + error));
  }, []);

  return (
    <>
      <div>content</div>
    </>
  );
}
