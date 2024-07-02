type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return <div className="flex flex-col min-h-screen items-center justify-center p-24">{children}</div>
}
