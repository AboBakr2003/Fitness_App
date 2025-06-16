type Props = {
  children: React.ReactNode;
}

export default function HeaderText({ children }: Props) {
  return (
    <h1 className=" text-2xl lg:text-3xl font-bold font-montserrat text-gray-500">{children}</h1>
  )
}