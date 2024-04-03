interface CardTitleProps {
  children: string;
}

export default function CardTitle({ children }: CardTitleProps) {
  return (
    <p className="text-xl font-bold">
      {children}
    </p>
  );
}
