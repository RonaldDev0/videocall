export default function Prepare ({ setPrepare }: { setPrepare: Function }) {
  return (
    <div>
      <h1>Prepare</h1>
      <button onClick={() => setPrepare(true)}>Go room</button>
    </div>
  )
}
