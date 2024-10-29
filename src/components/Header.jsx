import { BsBasket3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  return (
    <header className="shadow">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-2xl font-[900] font-mono text-red-500">
            THUNKSEPETİ
          </Link>

          <div className="flex items-center gap-4">
            <button
              className=" hover:text-white  transition
             hover:bg-red-500
              border border-red-500 py-1 px-3 rounded text-red-500"
            >
              Giriş Yap
            </button>
            <button
              className="text-white 
             bg-red-500
              border border-red-500  transition py-1 px-3 rounded hover:brightness-75"
            >
              Kayıt Ol
            </button>
            <Link
              to={"/cart"}
              className="hover:bg-red-500 p-3  hover:bg-opacity-15  rounded-full"
            >
              <BsBasket3 className="text-red-500 text-xl" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
