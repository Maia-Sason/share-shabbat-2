const InfoSection = ({ children, title }) => {
  return (
    <div className="prose width-full max-w-full">
      <h3>{title}</h3>
      <div className="grid gap-5 grid-flow-row grid-cols-2">{children}</div>
      <div className="divider"></div>
    </div>
  );
};

export default InfoSection;
