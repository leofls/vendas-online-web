const DivMeu = ({ titulo, children }) => {
  return (
    <div>
      <h1> {titulo} </h1>
      <h2>Subtitulo</h2>
      {children}
    </div>
  );
};

export const NovoMenu = () => {
  return <div>Super Teste</div>;
};

export default DivMeu;
