interface CardDescriptionProps {
  children: string;
}

export default function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p className="text-sm">
      {children}
    </p>
  );
}
