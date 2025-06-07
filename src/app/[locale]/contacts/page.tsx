import { DesignerVisit } from "../../components";
import { Anchor } from "../../components/Anchor/Anchor";
import { Contacts } from "../../components/widgets";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Anchor>
        <Contacts />

        <DesignerVisit className="!m-0 !mb-[70px] lg:!mb-0" />
      </Anchor>
    </main>
  );
}
