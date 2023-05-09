// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: DuwZXCRDJh
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
import Fav from "../../Fav"; // plasmic-import: P6DuufdWKR/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicDocumentList.module.css"; // plasmic-import: DuwZXCRDJh/css
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: pp41lU4ySO/icon

export const PlasmicDocumentList__VariantProps = new Array("currentState");

export const PlasmicDocumentList__ArgProps = new Array();

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

function PlasmicDocumentList__RenderFunc(props) {
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
        path: "current",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "currentState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.currentState
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <div
      data-plasmic-name={"blockText"}
      data-plasmic-override={overrides.blockText}
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
        sty.blockText,
        {
          [sty.blockTextcurrentState]: hasVariant(
            $state,
            "currentState",
            "currentState"
          )
        }
      )}
      onClick={async event => {
        const $steps = {};
        $steps["updateCurrentState"] = true
          ? (() => {
              const actionArgs = {
                vgroup: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "L1WBLILNt",
                    componentUuid: "DuwZXCRDJh",
                    argName: "vgroup"
                  },
                  () => "currentState"
                ),
                operation: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "L1WBLILNt",
                    componentUuid: "DuwZXCRDJh",
                    argName: "operation"
                  },
                  () => 2
                ),
                value: __wrapUserFunction(
                  {
                    type: "InteractionArgLoc",
                    actionName: "updateVariant",
                    interactionUuid: "L1WBLILNt",
                    componentUuid: "DuwZXCRDJh",
                    argName: "value"
                  },
                  () => "currentState"
                )
              };
              return __wrapUserFunction(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "L1WBLILNt",
                  componentUuid: "DuwZXCRDJh"
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
          typeof $steps["updateCurrentState"] === "object" &&
          typeof $steps["updateCurrentState"].then === "function"
        ) {
          $steps["updateCurrentState"] = await __wrapUserPromise(
            {
              type: "InteractionLoc",
              actionName: "updateVariant",
              interactionUuid: "L1WBLILNt",
              componentUuid: "DuwZXCRDJh"
            },
            $steps["updateCurrentState"]
          );
        }
      }}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__kLChv,
          {
            [sty.textcurrentState__kLChvMo5]: hasVariant(
              $state,
              "currentState",
              "currentState"
            )
          }
        )}
      >
        {"羊绒大衣 保暖 冬季"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__bh7KB,
          {
            [sty.textcurrentState__bh7KBMo5]: hasVariant(
              $state,
              "currentState",
              "currentState"
            )
          }
        )}
      >
        {"嘿！各位亲亲粉丝们，我又来了！今天是美好充实的一天"}
      </div>
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__yp9Pl)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__kfXdL)}>
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__sffSf, {
                    [sty.freeBoxcurrentState__sffSfMo5]: hasVariant(
                      $state,
                      "currentState",
                      "currentState"
                    )
                  })}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__f2KY
                    )}
                  >
                    {"周六 2:30 2023/2/12"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zsxVv,
                      {
                        [sty.textcurrentState__zsxVvMo5]: hasVariant(
                          $state,
                          "currentState",
                          "currentState"
                        )
                      }
                    )}
                  >
                    {"带货视频口播台词"}
                  </div>
                </p.Stack>
              ) : null}
              <Fav
                data-plasmic-name={"fav"}
                data-plasmic-override={overrides.fav}
                className={classNames("__wab_instance", sty.fav)}
              />

              <Icon18Icon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  blockText: ["blockText", "fav", "svg"],
  fav: ["fav"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDocumentList__ArgProps,
          internalVariantPropNames: PlasmicDocumentList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDocumentList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "blockText") {
    func.displayName = "PlasmicDocumentList";
  } else {
    func.displayName = `PlasmicDocumentList.${nodeName}`;
  }
  return func;
}

export const PlasmicDocumentList = Object.assign(
  // Top-level PlasmicDocumentList renders the root element
  makeNodeComponent("blockText"),
  {
    // Helper components rendering sub-elements
    fav: makeNodeComponent("fav"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicDocumentList
    internalVariantProps: PlasmicDocumentList__VariantProps,
    internalArgProps: PlasmicDocumentList__ArgProps
  }
);

export default PlasmicDocumentList;
/* prettier-ignore-end */
