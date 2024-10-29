//HOC (Higher Order Components)
// Farklı componentları prop olarak alan componentlar

const Container = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto p-5 ">{children}</div>;
};

export default Container;
