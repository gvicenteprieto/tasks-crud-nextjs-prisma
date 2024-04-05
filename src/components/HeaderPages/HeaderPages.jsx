const HeaderPages = ({ title }) => {
  return (
    <header className="w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="mx-0 text-left">
        <h1 className="text-2xl font-semibold" title={title}>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default HeaderPages;
