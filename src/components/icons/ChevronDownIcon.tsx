type IChevronDownIconProps = React.SVGProps<SVGSVGElement>

function ChevronDownIcon(props: IChevronDownIconProps){
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-chevron-down"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
}
export default ChevronDownIcon
