const Books = () => {
  const favoriteBooks = [
    { id: 'id-1', name: 'Book 1' },
    { id: 'id-2', name: 'Book 2' },
    { id: 'id-3', name: 'Book 3' },
    { id: 'id-4', name: 'Book 4' },
  ];

  return (
    <section className="books">
      <h3>Books list</h3>
      <ul>
        {favoriteBooks.map(el => {
          return <li key={el.id}>{el.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default Books;
