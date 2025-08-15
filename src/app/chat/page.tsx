import ChatWindow from "@/components/ChatWindow";
import { Persona } from "@/lib/prompts";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ persona?: Persona }>;
}) {
	const params = await searchParams;
	const persona = params.persona || "hitesh";

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
			<ChatWindow initialPersona={persona} />
		</div>
	);
}
