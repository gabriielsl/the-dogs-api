import { Card } from "./components/Card";

export function App() {
  return (
    <>
      <header className="p-4 border-b border-neutral-400 mb-5">
        <h1 className="text-xl font-semibold">
          The Dogs API
        </h1>
      </header>

      <Card />
    </>
  )
}