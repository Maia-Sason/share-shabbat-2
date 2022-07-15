const InfoCard = ({ children }) => {
  return (
    <div className="card">
      <div className="card-body glass flex flex-col justify-between ">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
