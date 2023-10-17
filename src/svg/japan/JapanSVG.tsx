import {
  FukuokaPath,
  KagoshimaPath,
  KumamotoPath,
  MiyazakiPath,
  NagasakiPath,
  OitaPath,
  OkinawaPath,
  SagaPath,
} from "../regions/Kyusyu";
import { DefaultSVGProps } from "../types";

type JapanProps = DefaultSVGProps;

export const Japan = ({ ...props }: JapanProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="136.185 -864.696 4364.13 6172.106"
    >
      <FukuokaPath />
      <KagoshimaPath />
      <KumamotoPath />
      <MiyazakiPath />
      <NagasakiPath />
      <OitaPath />
      <OkinawaPath />
      <SagaPath />
    </svg>
  );
};
