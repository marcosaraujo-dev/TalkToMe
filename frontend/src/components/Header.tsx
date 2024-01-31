import Image from "next/image";
import Container from "./Container";
export default function Header() {
	return (
		<div className=" bg-gray-1000 p-4">
			<Container>
				<div className="flex justify-between">
					<Image alt="Talk to Me" src="/logo.svg" width={100} height={100} />
					<Image alt="Talk to Me" src="/hero.svg" width={50} height={50} />
				</div>
			</Container>
		</div>
	);
}
