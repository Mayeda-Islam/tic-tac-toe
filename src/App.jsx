const Square = () => {
  return (
    <button className="bg-white border border-gray-800 h-12 w-12 m-1 text-3xl">
      x
    </button>
  );
};

const Board = () => {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
};

export default Board;
