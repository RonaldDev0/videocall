export default function ShowUserName ({ setIsEdit, userName }: { setIsEdit: Function, userName: string }) {
  return (
    <div>
      <h1>{userName}</h1>
      <button onClick={() => setIsEdit(true)}>Edit</button>
    </div>
  )
}
