const MenuItem = ({ image, name, content, price }) => {
  return (
    <li
      className="flex flex-col items-center rounded-md bg-white pb-5 pt-1 w-80"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <img className="bg-red-500" src={image} />
      <h2 className="text-4xl text-center font-bold pb-5">{name}</h2>
      <p className="font-medium text-center">{content}</p>
      <h4 className="text-3xl text-red-600 font-medium pt-5">{price} TL</h4>
    </li>
  );
};

export default MenuItem;