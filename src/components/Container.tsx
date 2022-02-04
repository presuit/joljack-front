import React from "react";

interface IContainer {
  customStyle?: string;
}

const Container: React.FC<IContainer> = ({ children, customStyle }) => {
  return (
    <div className={`min-h-screen bg-slate-200 pt-28 p-5 pb-20 ${customStyle}`}>
      {children}
    </div>
  );
};

export default Container;
