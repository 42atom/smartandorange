// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: M4gUwXUTik
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicAsideMenuItem.module.css"; // plasmic-import: M4gUwXUTik/css

export const PlasmicAsideMenuItem__VariantProps = new Array("isCurrent");

export const PlasmicAsideMenuItem__ArgProps = new Array(
  "icon",
  "onIsCurrentChange",
  "label",
  "labeltext"
);

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAsideMenuItem__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          label: "label"
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isCurrent",
        type: "writable",
        variableType: "variant",
        valueProp: "isCurrent",
        onChangeProp: "onIsCurrentChange"
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"item"}
      data-plasmic-override={overrides.item}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.item,
        { [sty.itemisCurrent]: hasVariant($state, "isCurrent", "isCurrent") }
      )}
      onClick={args.onIsCurrentChange}
    >
      {(hasVariant($state, "isCurrent", "isCurrent") ? true : true)
        ? p.renderPlasmicSlot({
            defaultContents: null,
            value: args.icon,
            className: classNames(sty.slotTargetIcon, {
              [sty.slotTargetIconisCurrent]: hasVariant(
                $state,
                "isCurrent",
                "isCurrent"
              )
            })
          })
        : null}
      <div
        data-plasmic-name={"label"}
        data-plasmic-override={overrides.label}
        className={classNames(projectcss.all, sty.label, {
          [sty.labelisCurrent]: hasVariant($state, "isCurrent", "isCurrent")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "label",
          value: args.labeltext,
          className: classNames(sty.slotTargetLabeltext, {
            [sty.slotTargetLabeltextisCurrent]: hasVariant(
              $state,
              "isCurrent",
              "isCurrent"
            )
          })
        })}
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  item: ["item", "label"],
  label: ["label"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAsideMenuItem__ArgProps,
          internalVariantPropNames: PlasmicAsideMenuItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAsideMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "item") {
    func.displayName = "PlasmicAsideMenuItem";
  } else {
    func.displayName = `PlasmicAsideMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicAsideMenuItem = Object.assign(
  // Top-level PlasmicAsideMenuItem renders the root element
  makeNodeComponent("item"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    // Metadata about props expected for PlasmicAsideMenuItem
    internalVariantProps: PlasmicAsideMenuItem__VariantProps,
    internalArgProps: PlasmicAsideMenuItem__ArgProps
  }
);

export default PlasmicAsideMenuItem;
/* prettier-ignore-end */
