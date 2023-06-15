// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: LJU-ZQ2OaH
import * as React from "react";
import Link from "next/link";
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
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicUserInfoBlock.module.css"; // plasmic-import: LJU-ZQ2OaH/css

export const PlasmicUserInfoBlock__VariantProps = new Array("vips");

export const PlasmicUserInfoBlock__ArgProps = new Array("username", "limit");

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

function PlasmicUserInfoBlock__RenderFunc(props) {
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
        path: "vips",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.vips
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnl9I0Oib3VOwY()
  });
  return (hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
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
          [sty.rootvips_vip1]: hasVariant($state, "vips", "vip1"),
          [sty.rootvips_vip2]: hasVariant($state, "vips", "vip2"),
          [sty.rootvips_vip3]: hasVariant($state, "vips", "vip3")
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__rVqWb,
          {
            [sty.textvips_vip1__rVqWb7Bmnt]: hasVariant($state, "vips", "vip1"),
            [sty.textvips_vip2__rVqWbac21X]: hasVariant($state, "vips", "vip2"),
            [sty.textvips_vip3__rVqWBfDjRf]: hasVariant($state, "vips", "vip3")
          }
        )}
      >
        {"剩余"}
      </div>
      <div
        data-plasmic-name={"limit"}
        data-plasmic-override={overrides.limit}
        className={classNames(projectcss.all, sty.limit, {
          [sty.limitvips_vip3]: hasVariant($state, "vips", "vip3")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "999999999999 字",
          value: args.limit,
          className: classNames(sty.slotTargetLimit, {
            [sty.slotTargetLimitvips_vip3]: hasVariant($state, "vips", "vip3")
          })
        })}
      </div>
      <div
        data-plasmic-name={"line"}
        data-plasmic-override={overrides.line}
        className={classNames(projectcss.all, sty.line, {
          [sty.linevips_vip1]: hasVariant($state, "vips", "vip1"),
          [sty.linevips_vip2]: hasVariant($state, "vips", "vip2"),
          [sty.linevips_vip3]: hasVariant($state, "vips", "vip3")
        })}
      />

      <div
        data-plasmic-name={"userName"}
        data-plasmic-override={overrides.userName}
        className={classNames(projectcss.all, sty.userName)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "用户小黄帽",
          value: args.username,
          className: classNames(sty.slotTargetUsername, {
            [sty.slotTargetUsernamevips_vip2]: hasVariant(
              $state,
              "vips",
              "vip2"
            ),
            [sty.slotTargetUsernamevips_vip3]: hasVariant(
              $state,
              "vips",
              "vip3"
            )
          })
        })}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__sIuAx,
          {
            [sty.textvips_vip1__sIuAx7Bmnt]: hasVariant($state, "vips", "vip1"),
            [sty.textvips_vip2__sIuAxac21X]: hasVariant($state, "vips", "vip2"),
            [sty.textvips_vip3__sIuAXfDjRf]: hasVariant($state, "vips", "vip3")
          }
        )}
      >
        {hasVariant($state, "vips", "vip3") ? (
          "VIP 3"
        ) : hasVariant($state, "vips", "vip2") ? (
          "VIP 2"
        ) : hasVariant($state, "vips", "vip1") ? (
          "VIP 1"
        ) : (
          <React.Fragment>
            <React.Fragment>{"免费用户  "}</React.Fragment>
            {
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  projectcss.plasmic_default__inline,
                  sty.link
                )}
                component={Link}
                href={`/shop`}
                platform={"nextjs"}
                target={"_blank"}
                title={"马上成为会员享受更多权益"}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 200 }}
                  >
                    {"充值"}
                  </span>
                </React.Fragment>
              </p.PlasmicLink>
            }

            <React.Fragment>{""}</React.Fragment>
          </React.Fragment>
        )}
      </div>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "limit", "line", "userName", "link"],
  limit: ["limit"],
  line: ["line"],
  userName: ["userName"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicUserInfoBlock__ArgProps,
          internalVariantPropNames: PlasmicUserInfoBlock__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserInfoBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserInfoBlock";
  } else {
    func.displayName = `PlasmicUserInfoBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicUserInfoBlock = Object.assign(
  // Top-level PlasmicUserInfoBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    limit: makeNodeComponent("limit"),
    line: makeNodeComponent("line"),
    userName: makeNodeComponent("userName"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicUserInfoBlock
    internalVariantProps: PlasmicUserInfoBlock__VariantProps,
    internalArgProps: PlasmicUserInfoBlock__ArgProps
  }
);

export default PlasmicUserInfoBlock;
/* prettier-ignore-end */
