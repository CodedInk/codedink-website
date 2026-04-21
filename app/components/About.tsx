import Image from "next/image";
import { asset } from "../lib/asset";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            I&apos;m currently looking to join a <span className="text-red-400">cross-functional team</span><br/> <span className="text-sm">that values 
            improving people&apos;s lives through accessible design</span>
          </p>
        </div>
        <div className="relative mx-auto" style={{ maxWidth: "895px" }}>
          <Image
            src={asset("/assets/illustration.png")}
            alt="Skills"
            width={895}
            height={657}
            className="object-cover mx-auto"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src={asset("/assets/favicon.svg")}
            alt="CodedInk"
            width={120}
            height={120}
            className="absolute"
            style={{
              left: "50%",
              top: "66%",
              width: "13%",
              height: "auto",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

