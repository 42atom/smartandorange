// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: cHu398Tr36
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicCreatedContent.module.css"; // plasmic-import: cHu398Tr36/css
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: Cuf7VN7o7/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: pp41lU4ySO/icon

export const PlasmicCreatedContent__VariantProps = new Array();

export const PlasmicCreatedContent__ArgProps = new Array("children");

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

function PlasmicCreatedContent__RenderFunc(props) {
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
  return true ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"gContent"}
      data-plasmic-override={overrides.gContent}
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
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.gContent
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__lYuPi)}>
        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__cPsd)}>
            <Icon17Icon
              data-plasmic-name={"icnCopy"}
              data-plasmic-override={overrides.icnCopy}
              alt={"复制内容"}
              className={classNames(projectcss.all, sty.icnCopy)}
              role={"img"}
            />

            <Icon18Icon
              data-plasmic-name={"icnTrashbin"}
              data-plasmic-override={overrides.icnTrashbin}
              alt={"删除"}
              className={classNames(projectcss.all, sty.icnTrashbin)}
              role={"img"}
            />

            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"  782字  35秒前"}
            </div>
          </div>
        ) : null}
        {p.renderPlasmicSlot({
          defaultContents:
            "泰山，是中国五岳之首，也是世界文化和自然遗产。我去泰山游玩了，真正见识了这座大山的壮美与神秘。\n早上六点，我来到泰山景区，开始了我的征程。一路上，我看到了许多壮丽的景色，山势高峻，峰峦叠嶂，曾经有一位诗人说过：“登泰山而小天下”。这句话深深地印在我的脑海里，一直激励着我实现踏上泰山的梦想。终于，在一个阳光明媚的早晨，我来到了这座著名的山峰。",
          value: args.children
        })}
      </div>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  gContent: ["gContent", "icnCopy", "icnTrashbin", "text"],
  icnCopy: ["icnCopy"],
  icnTrashbin: ["icnTrashbin"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCreatedContent__ArgProps,
          internalVariantPropNames: PlasmicCreatedContent__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCreatedContent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "gContent") {
    func.displayName = "PlasmicCreatedContent";
  } else {
    func.displayName = `PlasmicCreatedContent.${nodeName}`;
  }
  return func;
}

export const PlasmicCreatedContent = Object.assign(
  // Top-level PlasmicCreatedContent renders the root element
  makeNodeComponent("gContent"),
  {
    // Helper components rendering sub-elements
    icnCopy: makeNodeComponent("icnCopy"),
    icnTrashbin: makeNodeComponent("icnTrashbin"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCreatedContent
    internalVariantProps: PlasmicCreatedContent__VariantProps,
    internalArgProps: PlasmicCreatedContent__ArgProps
  }
);

export default PlasmicCreatedContent;
/* prettier-ignore-end */
