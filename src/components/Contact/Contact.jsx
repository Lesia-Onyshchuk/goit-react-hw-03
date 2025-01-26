export default function Contact({ data, onDelete }) {
  return (
    <div>
      <ul>
        <li>{data.name}</li>
        <li>{data.number}</li>
      </ul>
      <button
        onClick={() => {
          onDelete(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
