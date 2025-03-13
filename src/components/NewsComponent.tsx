interface Props {
  haveBorder?: boolean;
  title?: string;
  date?: string;
  image?: string;
  description?: string;
  children?: React.ReactNode;
}

const NewsComponent = ({
  children,
  haveBorder,
  title,
  date,
  image,
  description,
}: Props) => {
  return (
    <>
      <div className="w-full p-2">
        <div
          className={`text-neutral-400 ${
            haveBorder ? "border" : ""
          } border-neutral-700 p-6 rounded-2xl max-w-[800px] flex mx-auto w-full h-full justify-center flex-col gap-2`}
        >
          <h1 className="text-center text-2xl">{title}</h1>
          <p className="text-neutral-600">{date}</p>
          <img className={`rounded-2xl`} src={image} alt="News image" />
          <p className="px-6 pt-6">{description}</p>
          {children}
        </div>
      </div>
    </>
  );
};
export default NewsComponent;
