// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: n7stwr_SHF
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import RegisterInput from "../../RegisterInput"; // plasmic-import: Sdxulv4_ssW/component
import Button from "../../Button"; // plasmic-import: YO5Bwb9purCqu/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicRegister.module.css"; // plasmic-import: n7stwr_SHF/css
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JhZ3dtt_5DRD2s/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: AO1hQKEExk65Hm/icon

export const PlasmicRegister__VariantProps = new Array();

export const PlasmicRegister__ArgProps = new Array();

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

function PlasmicRegister__RenderFunc(props) {
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
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <p.Stack
            as={"form"}
            data-plasmic-name={"login"}
            data-plasmic-override={overrides.login}
            hasGap={true}
            className={classNames(projectcss.all, sty.login)}
          >
            <RegisterInput
              data-plasmic-name={"regiesterInputs"}
              data-plasmic-override={overrides.regiesterInputs}
              className={classNames("__wab_instance", sty.regiesterInputs)}
              confirm={
                <Button
                  data-plasmic-name={"confirm"}
                  data-plasmic-override={overrides.confirm}
                  className={classNames("__wab_instance", sty.confirm)}
                  color={"green"}
                  endIcon={
                    <IconIcon
                      className={classNames(projectcss.all, sty.svg__uZSuO)}
                      role={"img"}
                    />
                  }
                  link={`/workspaces`}
                  onClick={async event => {
                    const $steps = {};
                  }}
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__xnPia)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
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
                    {"确 认"}
                  </div>
                </Button>
              }
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "login", "regiesterInputs", "confirm", "text"],
  login: ["login", "regiesterInputs", "confirm", "text"],
  regiesterInputs: ["regiesterInputs", "confirm", "text"],
  confirm: ["confirm", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRegister__ArgProps,
          internalVariantPropNames: PlasmicRegister__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRegister__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRegister";
  } else {
    func.displayName = `PlasmicRegister.${nodeName}`;
  }
  return func;
}

export const PlasmicRegister = Object.assign(
  // Top-level PlasmicRegister renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    login: makeNodeComponent("login"),
    regiesterInputs: makeNodeComponent("regiesterInputs"),
    confirm: makeNodeComponent("confirm"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicRegister
    internalVariantProps: PlasmicRegister__VariantProps,
    internalArgProps: PlasmicRegister__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRegister;
/* prettier-ignore-end */
