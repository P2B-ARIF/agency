import Navbar from "@/components/common/navbar/Navbar";

interface Props {
	children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
};

export default Layout;
