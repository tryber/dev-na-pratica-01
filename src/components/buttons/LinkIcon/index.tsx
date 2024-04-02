interface LinkIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: string;
  alt: string;
  url: string;
}

export default function LinkIcon({ icon, alt, url, ...props }: LinkIconProps) {
  return (
    <a href={ url } { ...props }>
      <img src={ icon } alt={ alt } />
    </a>
  );
}
