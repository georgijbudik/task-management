const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="bg-gradient-to-b from-neutral-200  to-neutral-400 bg-clip-text text-center font-sans text-lg  font-bold text-transparent md:text-7xl">
      {children}
    </h1>
  );
};

export default Title;
