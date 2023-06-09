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
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Fav from "../../Fav"; // plasmic-import: P6DuufdWKR/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal"; // plasmic-import: xx93QbkHH5i/codeComponent
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicDocumentList.module.css"; // plasmic-import: DuwZXCRDJh/css
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: pp41lU4ySO/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: iQ4dltXyU_/icon

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
        path: "currentState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.currentState
      },
      {
        path: "modalDelete.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnl9I0Oib3VOwY()
  });
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
        sty.blockText,
        {
          [sty.blockTextcurrentState]: hasVariant(
            $state,
            "currentState",
            "currentState"
          )
        }
      )}
    >
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__yp9Pl)}>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__kfXdL)}>
              <Fav
                data-plasmic-name={"favIcon"}
                data-plasmic-override={overrides.favIcon}
                className={classNames("__wab_instance", sty.favIcon)}
              />

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
                    data-plasmic-name={"createdAt"}
                    data-plasmic-override={overrides.createdAt}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.createdAt,
                      {
                        [sty.createdAtcurrentState]: hasVariant(
                          $state,
                          "currentState",
                          "currentState"
                        )
                      }
                    )}
                  >
                    {"4小时前"}
                  </div>
                  <div
                    data-plasmic-name={"sceneName"}
                    data-plasmic-override={overrides.sceneName}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.sceneName,
                      {
                        [sty.sceneNamecurrentState]: hasVariant(
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
              <Icon18Icon
                data-plasmic-name={"deleteIcon"}
                data-plasmic-override={overrides.deleteIcon}
                className={classNames(projectcss.all, sty.deleteIcon)}
                onClick={async event => {
                  const $steps = {};
                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "customFunction",
                              interactionUuid: "_Dvg345Ds",
                              componentUuid: "DuwZXCRDJh",
                              argName: "customFunction"
                            },
                            () => () => {
                              return ($state.modalDelete.open = true);
                            }
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "customFunction",
                            interactionUuid: "_Dvg345Ds",
                            componentUuid: "DuwZXCRDJh"
                          },
                          () =>
                            (({ customFunction }) => {
                              return customFunction();
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "customFunction",
                        interactionUuid: "_Dvg345Ds",
                        componentUuid: "DuwZXCRDJh"
                      },
                      $steps["runCode"]
                    );
                  }
                }}
                role={"img"}
              />

              <AntdModal
                data-plasmic-name={"modalDelete"}
                data-plasmic-override={overrides.modalDelete}
                cancelText={"取消"}
                className={classNames("__wab_instance", sty.modalDelete)}
                closeIcon={
                  <Icon11Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                }
                defaultStylesClassName={classNames(
                  projectcss.root_reset,
                  projectcss.plasmic_default_styles,
                  projectcss.plasmic_mixins,
                  projectcss.plasmic_tokens,
                  plasmic_antd_5_hostless_css.plasmic_tokens
                )}
                modalScopeClassName={sty["modalDelete__modal"]}
                okText={"确认"}
                onOpenChange={p.generateStateOnChangeProp($state, [
                  "modalDelete",
                  "open"
                ])}
                open={p.generateStateValueProp($state, ["modalDelete", "open"])}
                title={"删除文档"}
              >
                <div className={classNames(projectcss.all, sty.freeBox__w8N3X)}>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"确定要删除本条记录吗？"}
                  </div>
                </div>
              </AntdModal>
            </div>
          ) : null}
        </div>
      ) : null}
      <div
        data-plasmic-name={"prompt"}
        data-plasmic-override={overrides.prompt}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.prompt,
          {
            [sty.promptcurrentState]: hasVariant(
              $state,
              "currentState",
              "currentState"
            )
          }
        )}
      >
        {"已生成的内容\n等等\n文网文"}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  blockText: [
    "blockText",
    "favIcon",
    "createdAt",
    "sceneName",
    "deleteIcon",
    "modalDelete",
    "text",
    "svg",
    "prompt"
  ],

  favIcon: ["favIcon"],
  createdAt: ["createdAt"],
  sceneName: ["sceneName"],
  deleteIcon: ["deleteIcon"],
  modalDelete: ["modalDelete", "text", "svg"],
  text: ["text"],
  svg: ["svg"],
  prompt: ["prompt"]
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
    favIcon: makeNodeComponent("favIcon"),
    createdAt: makeNodeComponent("createdAt"),
    sceneName: makeNodeComponent("sceneName"),
    deleteIcon: makeNodeComponent("deleteIcon"),
    modalDelete: makeNodeComponent("modalDelete"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),
    prompt: makeNodeComponent("prompt"),
    // Metadata about props expected for PlasmicDocumentList
    internalVariantProps: PlasmicDocumentList__VariantProps,
    internalArgProps: PlasmicDocumentList__ArgProps
  }
);

export default PlasmicDocumentList;
/* prettier-ignore-end */
