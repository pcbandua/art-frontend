export function ArtsIndex(arts) {
  return (
    <div>
      <h2>The Artwork</h2>
      {arts.map ((art) => (
        <div key={art.id}>
          <h3>{art.title}</h3>
          <img src={art.image_url} alt="Surrealist artpiece" />
          <p>{art.description}</p>
      ))}
      
    </div>
  )}