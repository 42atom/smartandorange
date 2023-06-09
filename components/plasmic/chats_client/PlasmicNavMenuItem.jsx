// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: Vp9kLSLaI-
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
import sty from "./PlasmicNavMenuItem.module.css"; // plasmic-import: Vp9kLSLaI-/css

export const PlasmicNavMenuItem__VariantProps = new Array("selectedItem");

export const PlasmicNavMenuItem__ArgProps = new Array(
  "selectedState",
  "label",
  "url"
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

function PlasmicNavMenuItem__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          selectedState: false,
          url: "/"
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
        path: "selectedItem",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selectedItem
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return true ? (
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
        sty.root,
        {
          [sty.rootselectedItem]: hasVariant(
            $state,
            "selectedItem",
            "selectedItem"
          )
        }
      )}
    >
      <button
        data-plasmic-name={"tabButton"}
        data-plasmic-override={overrides.tabButton}
        className={classNames(
          projectcss.all,
          projectcss.button,
          sty.tabButton,
          {
            [sty.tabButtonselectedItem]: hasVariant(
              $state,
              "selectedItem",
              "selectedItem"
            )
          }
        )}
        onClick={async event => {
          const $steps = {};
          $steps["goToPage"] = true
            ? (() => {
                const actionArgs = {
                  destination: __wrapUserFunction(
                    {
                      type: "InteractionArgLoc",
                      actionName: "navigation",
                      interactionUuid: "OC8kqK5vc",
                      componentUuid: "Vp9kLSLaI-",
                      argName: "destination"
                    },
                    () =>
                      (() => {
                        try {
                          return $props.url;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                  )
                };
                return __wrapUserFunction(
                  {
                    type: "InteractionLoc",
                    actionName: "navigation",
                    interactionUuid: "OC8kqK5vc",
                    componentUuid: "Vp9kLSLaI-"
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
            typeof $steps["goToPage"] === "object" &&
            typeof $steps["goToPage"].then === "function"
          ) {
            $steps["goToPage"] = await __wrapUserPromise(
              {
                type: "InteractionLoc",
                actionName: "navigation",
                interactionUuid: "OC8kqK5vc",
                componentUuid: "Vp9kLSLaI-"
              },
              $steps["goToPage"]
            );
          }
        }}
        ref={ref => {
          $refs["tabButton"] = ref;
        }}
      >
        {p.renderPlasmicSlot({
          defaultContents: "工作台",
          value: args.label,
          className: classNames(sty.slotTargetLabel, {
            [sty.slotTargetLabelselectedItem]: hasVariant(
              $state,
              "selectedItem",
              "selectedItem"
            )
          })
        })}
      </button>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "tabButton"],
  tabButton: ["tabButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavMenuItem__ArgProps,
          internalVariantPropNames: PlasmicNavMenuItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavMenuItem";
  } else {
    func.displayName = `PlasmicNavMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicNavMenuItem = Object.assign(
  // Top-level PlasmicNavMenuItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tabButton: makeNodeComponent("tabButton"),
    // Metadata about props expected for PlasmicNavMenuItem
    internalVariantProps: PlasmicNavMenuItem__VariantProps,
    internalArgProps: PlasmicNavMenuItem__ArgProps
  }
);

export default PlasmicNavMenuItem;
/* prettier-ignore-end */
