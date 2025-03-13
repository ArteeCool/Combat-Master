import { Link } from "react-router";

interface Props {
  className: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <ul className={`${className} flex gap-16 text-lg`}>
      <Link to={"/"}>Home</Link>
      <Link to={"/news"}>News</Link>
      <Link to={"/updates"}>Updates</Link>
      <Link to={"/faq"}>FAQ</Link>
    </ul>
  );
};
export default Navbar;
