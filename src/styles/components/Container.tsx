interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-col items-start gap-2 w-4/5 py-10">
      { children }
    </section>
  );
}
