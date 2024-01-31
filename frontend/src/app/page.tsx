import Container from "@/components/Container";
import { Input } from "@/components/Input";
import Button from "@/components/Button";
import Header from "@/components/Header";
export default function Home() {
	return (
		<main className="min-h-screen flex flex-col ">
			<Header />

			<div className=" mx-auto w-full h-full flex flex-1 items-center justify-center">
				<Container>
					<div className="max-w[580px] w-full bg-secondary p-4 rounded-lg">
						<div>
							<span>Ingressar</span>
							<span>Nova Reunião</span>
						</div>

						<div className="space-y-4">
							<Input placeholder="Digite o código da reunião" type="text" />
							<Input placeholder="" type="text" />
							<Button title="Entrar" type="submit" />
						</div>
					</div>
				</Container>
			</div>
		</main>
	);
}
