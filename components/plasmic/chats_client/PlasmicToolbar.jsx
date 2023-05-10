// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: UlyQXoohOO
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import ToolButton from "../../ToolButton"; // plasmic-import: 1dOF1uaw3X/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicToolbar.module.css"; // plasmic-import: UlyQXoohOO/css
import Icon23Icon from "./icons/PlasmicIcon__Icon23"; // plasmic-import: w6QM0uw4C3/icon
import Icon24Icon from "./icons/PlasmicIcon__Icon24"; // plasmic-import: iCilKbZrcl/icon
import Icon25Icon from "./icons/PlasmicIcon__Icon25"; // plasmic-import: edocmb3Rcj/icon

export const PlasmicToolbar__VariantProps = new Array();

export const PlasmicToolbar__ArgProps = new Array();

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

function PlasmicToolbar__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnl9I0Oib3VOwY()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <ToolButton
        className={classNames("__wab_instance", sty.toolButton__hjzR)}
        selected={
          hasVariant(globalVariants, "screen", "mobileOnly") ? true : undefined
        }
        url={async () => {
          const $steps = {};
          $steps["goToWorkspaces"] = true
            ? (() => {
                const actionArgs = {
                  destination: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "navigation",
                      interactionUuid: "Pe1KFQ-fn",
                      componentUuid: "UlyQXoohOO",
                      argName: "destination"
                    },
                    () => `/workspaces`
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "Pe1KFQ-fn",
                    componentUuid: "UlyQXoohOO"
                  },
                  () =>
                    (({ destination }) => {
                      __nextRouter?.push(destination);
                    })?.apply(null, [actionArgs]),
                  actionArgs
                );
              })()
            : undefined;
          if (
            typeof $steps["goToWorkspaces"] === "object" &&
            typeof $steps["goToWorkspaces"].then === "function"
          ) {
            $steps["goToWorkspaces"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "navigation",
                interactionUuid: "Pe1KFQ-fn",
                componentUuid: "UlyQXoohOO"
              },
              $steps["goToWorkspaces"]
            );
          }
        }}
      />

      <ToolButton
        className={classNames("__wab_instance", sty.toolButton__x0A34)}
        icon={
          <Icon23Icon
            className={classNames(projectcss.all, sty.svg__hoRix)}
            role={"img"}
          />
        }
        label={"文档"}
        url={async () => {
          const $steps = {};
          $steps["goToMydocuments"] = true
            ? (() => {
                const actionArgs = {
                  destination: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "navigation",
                      interactionUuid: "pL6abd_FG",
                      componentUuid: "UlyQXoohOO",
                      argName: "destination"
                    },
                    () => `/mydocuments`
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "pL6abd_FG",
                    componentUuid: "UlyQXoohOO"
                  },
                  () =>
                    (({ destination }) => {
                      __nextRouter?.push(destination);
                    })?.apply(null, [actionArgs]),
                  actionArgs
                );
              })()
            : undefined;
          if (
            typeof $steps["goToMydocuments"] === "object" &&
            typeof $steps["goToMydocuments"].then === "function"
          ) {
            $steps["goToMydocuments"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "navigation",
                interactionUuid: "pL6abd_FG",
                componentUuid: "UlyQXoohOO"
              },
              $steps["goToMydocuments"]
            );
          }
        }}
      />

      <ToolButton
        className={classNames("__wab_instance", sty.toolButton__jI7Kp)}
        icon={
          <Icon24Icon
            className={classNames(projectcss.all, sty.svg___84ZIr)}
            role={"img"}
          />
        }
        label={"账户"}
        url={async () => {
          const $steps = {};
          $steps["goToMyaccount"] = true
            ? (() => {
                const actionArgs = {
                  destination: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "navigation",
                      interactionUuid: "cliTG91jk",
                      componentUuid: "UlyQXoohOO",
                      argName: "destination"
                    },
                    () => `/myaccount`
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "cliTG91jk",
                    componentUuid: "UlyQXoohOO"
                  },
                  () =>
                    (({ destination }) => {
                      __nextRouter?.push(destination);
                    })?.apply(null, [actionArgs]),
                  actionArgs
                );
              })()
            : undefined;
          if (
            typeof $steps["goToMyaccount"] === "object" &&
            typeof $steps["goToMyaccount"].then === "function"
          ) {
            $steps["goToMyaccount"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "navigation",
                interactionUuid: "cliTG91jk",
                componentUuid: "UlyQXoohOO"
              },
              $steps["goToMyaccount"]
            );
          }
        }}
      />

      <ToolButton
        className={classNames("__wab_instance", sty.toolButton__m0Ova)}
        icon={
          <Icon25Icon
            className={classNames(projectcss.all, sty.svg__mJ4X3)}
            role={"img"}
          />
        }
        label={"商店"}
        url={async () => {
          const $steps = {};
          $steps["goToShop"] = true
            ? (() => {
                const actionArgs = {
                  destination: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "navigation",
                      interactionUuid: "YR3qTFjlc",
                      componentUuid: "UlyQXoohOO",
                      argName: "destination"
                    },
                    () => `/shop`
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "YR3qTFjlc",
                    componentUuid: "UlyQXoohOO"
                  },
                  () =>
                    (({ destination }) => {
                      __nextRouter?.push(destination);
                    })?.apply(null, [actionArgs]),
                  actionArgs
                );
              })()
            : undefined;
          if (
            typeof $steps["goToShop"] === "object" &&
            typeof $steps["goToShop"].then === "function"
          ) {
            $steps["goToShop"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "navigation",
                interactionUuid: "YR3qTFjlc",
                componentUuid: "UlyQXoohOO"
              },
              $steps["goToShop"]
            );
          }
        }}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicToolbar__ArgProps,
          internalVariantPropNames: PlasmicToolbar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicToolbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicToolbar";
  } else {
    func.displayName = `PlasmicToolbar.${nodeName}`;
  }
  return func;
}

export const PlasmicToolbar = Object.assign(
  // Top-level PlasmicToolbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicToolbar
    internalVariantProps: PlasmicToolbar__VariantProps,
    internalArgProps: PlasmicToolbar__ArgProps
  }
);

export default PlasmicToolbar;
/* prettier-ignore-end */
