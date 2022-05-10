interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <button
      className="border-2 rounded-md p-2 border-cyan-300 text-white font-medium hover:opacity-60 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white">
      { title }
    </button>
  );
}
