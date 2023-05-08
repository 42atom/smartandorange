// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: P6DuufdWKR
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
import sty from "./PlasmicFav.module.css"; // plasmic-import: P6DuufdWKR/css
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: XtoxUOCTka/icon

export const PlasmicFav__VariantProps = new Array("checked");

export const PlasmicFav__ArgProps = new Array();

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

function PlasmicFav__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
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
        path: "checked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.checked
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <Icon16Icon
      data-plasmic-name={"fav"}
      data-plasmic-override={overrides.fav}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.fav,
        { [sty.favchecked]: hasVariant($state, "checked", "checked") }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["updateChecked"] = true
          ? (() => {
              const actionArgs = {
                vgroup: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "FcUsQT2D_",
                    componentUuid: "P6DuufdWKR",
                    argName: "vgroup"
                  },
                  () => "checked"
                ),
                operation: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "FcUsQT2D_",
                    componentUuid: "P6DuufdWKR",
                    argName: "operation"
                  },
                  () => 2
                ),
                value: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "FcUsQT2D_",
                    componentUuid: "P6DuufdWKR",
                    argName: "value"
                  },
                  () => "checked"
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "FcUsQT2D_",
                  componentUuid: "P6DuufdWKR"
                },
                () =>
                  (({ vgroup, value }) => {
                    const oldValue = p.get($state, vgroup);
                    p.set($state, vgroup, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]),
                actionArgs
              );
            })()
          : undefined;
        if (
          typeof $steps["updateChecked"] === "object" &&
          typeof $steps["updateChecked"].then === "function"
        ) {
          $steps["updateChecked"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "updateVariant",
              interactionUuid: "FcUsQT2D_",
              componentUuid: "P6DuufdWKR"
            },
            $steps["updateChecked"]
          );
        }
      }}
      role={"img"}
    />
  );
}

const PlasmicDescendants = {
  fav: ["fav"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFav__ArgProps,
          internalVariantPropNames: PlasmicFav__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFav__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "fav") {
    func.displayName = "PlasmicFav";
  } else {
    func.displayName = `PlasmicFav.${nodeName}`;
  }
  return func;
}

export const PlasmicFav = Object.assign(
  // Top-level PlasmicFav renders the root element
  makeNodeComponent("fav"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFav
    internalVariantProps: PlasmicFav__VariantProps,
    internalArgProps: PlasmicFav__ArgProps
  }
);

export default PlasmicFav;
/* prettier-ignore-end */
