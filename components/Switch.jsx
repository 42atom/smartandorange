import * as React from "react";
import { PlasmicSwitch } from "./plasmic/chats_client/PlasmicSwitch";

function Switch_(props, ref) {
  const { plasmicProps, state } = PlasmicSwitch.useBehavior(props, ref);
  return <PlasmicSwitch {...plasmicProps} />;
}

const Switch = React.forwardRef(Switch_);

export default Object.assign(Switch, {
  __plumeType: "switch"
});
