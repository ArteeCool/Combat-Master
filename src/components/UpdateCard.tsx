interface Props {
  image: string;
  title: string;
  date: string;
  link: string;
}

const UpdateCard = ({ image, title, date, link }: Props) => {
  return (
    <div className="rounded-lg w-full max-w-[350px]">
      <a href={link} className="block">
        <img
          src={image}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
        <h1 className="text-white text-lg font-semibold mt-2">{title}</h1>
        <p className="text-gray-400 text-sm">{date}</p>
      </a>
    </div>
  );
};

export default UpdateCard;
