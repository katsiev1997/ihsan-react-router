import { Header } from "~/widgets/header";
import { SectionOne } from "./section-one";
import { SectionTwo } from "./section-two";
import { SectionThree } from "./section-three";
import { SectionFour } from "./section-four";
import { SectionFive } from "./section-five";
import { SectionSix } from "./section-six";

export function Home() {
  return (
    <>
      <>
        <Header />
        <SectionOne />
      </>
      <div className="w-full max-w-[1300px] px-5 mx-auto flex flex-col gap-20">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
      <SectionSix />
    </>
  );
}
