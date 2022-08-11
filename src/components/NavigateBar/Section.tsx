import { RootState, Dispatch } from "@/rematch/store";
import { useEffect, useState } from "react";
import { Motion, spring, presets } from "react-motion"
import './style.scss';

function Section(props: any) {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
  }, [])

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Section;