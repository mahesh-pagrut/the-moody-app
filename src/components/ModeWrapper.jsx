const ModeWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md border border-purple-600">
      {children}
    </div>
  );
};

export default ModeWrapper;
