// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: Zf1zYQ7YK23by
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  useTrigger,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Fav from "../../Fav"; // plasmic-import: P6DuufdWKR/component
import Button from "../../Button"; // plasmic-import: YO5Bwb9purCqu/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal"; // plasmic-import: xx93QbkHH5i/codeComponent
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicSceneInfo.module.css"; // plasmic-import: Zf1zYQ7YK23by/css
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: iQ4dltXyU_/icon

export const PlasmicSceneInfo__VariantProps = new Array();

export const PlasmicSceneInfo__ArgProps = new Array(
  "title",
  "desc",
  "input",
  "output"
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

function PlasmicSceneInfo__RenderFunc(props) {
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
        path: "modal.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          triggers.hover_root ? false : false
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };
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
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__o9AcT)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__q0LrV)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___1EjA1)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "18px"
                    : "24px"
                }
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "18px"
                    : "24px"
                }
                loading={"lazy"}
                src={"https://www.svgrepo.com/show/492649/rice.svg"}
              />
            </div>
            {p.renderPlasmicSlot({
              defaultContents: "场景标题",
              value: args.title,
              className: classNames(sty.slotTargetTitle)
            })}
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__gEu1T)}>
            {p.renderPlasmicSlot({
              defaultContents: "desc",
              value: args.desc,
              className: classNames(sty.slotTargetDesc)
            })}
          </div>
        </p.Stack>
      ) : null}
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mL3Wc)}
        >
          <Fav
            data-plasmic-name={"fav"}
            data-plasmic-override={overrides.fav}
            className={classNames("__wab_instance", sty.fav)}
          />

          <Button
            data-plasmic-name={"sampleBtn"}
            data-plasmic-override={overrides.sampleBtn}
            className={classNames("__wab_instance", sty.sampleBtn)}
            color={"link"}
            size={"minimal"}
            submitsForm={false}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"样例文字"}
            </div>
          </Button>
        </p.Stack>
      ) : null}
      {true ? (
        <AntdModal
          data-plasmic-name={"modal"}
          data-plasmic-override={overrides.modal}
          cancelText={"返回"}
          className={classNames("__wab_instance", sty.modal)}
          closeButtonClassName={classNames({ [sty["pcls_1toA5xmZV"]]: true })}
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
          modalClassName={classNames({ [sty["pcls_RHxxyFPA0"]]: true })}
          modalScopeClassName={sty["modal__modal"]}
          okText={"使用模版"}
          onOpenChange={p.generateStateOnChangeProp($state, ["modal", "open"])}
          open={p.generateStateValueProp($state, ["modal", "open"])}
          title={"Modal title"}
        >
          <div
            data-plasmic-name={"inputs"}
            data-plasmic-override={overrides.inputs}
            className={classNames(projectcss.all, sty.inputs)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5PGbm
                  )}
                >
                  {"Modal content"}
                </div>
              ),

              value: args.input,
              className: classNames(sty.slotTargetInput)
            })}
          </div>
          <div
            data-plasmic-name={"output"}
            data-plasmic-override={overrides.output}
            className={classNames(projectcss.all, sty.output)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Modal content",
              value: args.output,
              className: classNames(sty.slotTargetOutput)
            })}
          </div>
        </AntdModal>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "fav",
    "sampleBtn",
    "text",
    "modal",
    "inputs",
    "output",
    "svg"
  ],

  img: ["img"],
  fav: ["fav"],
  sampleBtn: ["sampleBtn", "text"],
  text: ["text"],
  modal: ["modal", "inputs", "output", "svg"],
  inputs: ["inputs"],
  output: ["output"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSceneInfo__ArgProps,
          internalVariantPropNames: PlasmicSceneInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSceneInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSceneInfo";
  } else {
    func.displayName = `PlasmicSceneInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicSceneInfo = Object.assign(
  // Top-level PlasmicSceneInfo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    fav: makeNodeComponent("fav"),
    sampleBtn: makeNodeComponent("sampleBtn"),
    text: makeNodeComponent("text"),
    modal: makeNodeComponent("modal"),
    inputs: makeNodeComponent("inputs"),
    output: makeNodeComponent("output"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicSceneInfo
    internalVariantProps: PlasmicSceneInfo__VariantProps,
    internalArgProps: PlasmicSceneInfo__ArgProps
  }
);

export default PlasmicSceneInfo;
/* prettier-ignore-end */
