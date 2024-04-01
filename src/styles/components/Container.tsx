interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="py-10 px-36">
      { children }
    </section>
  );
}
