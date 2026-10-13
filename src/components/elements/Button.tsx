type Props = {
  children: React.ReactNode;
  onClick?: () => void; // Menambahkan properti onClick yang opsional
  
}

const Button = (props: Props) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick} // Menambahkan handler onClick
      className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}

export default Button;
