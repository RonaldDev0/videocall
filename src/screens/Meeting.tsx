export default function Meeting ({ room, setPrepare }: { room: string, setPrepare: Function }) {
  return (
    <div>
      <h1>Meeting</h1>
      <button onClick={() => setPrepare(false)}>Exit</button>
    </div>
  )
}
