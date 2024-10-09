const List = () => {
  const brands = ["samsung", "apple", "tesla", "sony"];

  return (
    <ul>
      {brands.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default List;
