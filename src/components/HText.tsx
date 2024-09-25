interface IHText {
  children: React.ReactNode;
}

export default function HText({ children }: IHText) {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h1>
  );
}
