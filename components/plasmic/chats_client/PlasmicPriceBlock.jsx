// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: p-zh9SOwnv
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
import sty from "./PlasmicPriceBlock.module.css"; // plasmic-import: p-zh9SOwnv/css

export const PlasmicPriceBlock__VariantProps = new Array(
  "isSelected",
  "isDiscount"
);

export const PlasmicPriceBlock__ArgProps = new Array(
  "mainPrice",
  "slot",
  "preDay",
  "onIsSelectedChange",
  "pid",
  "onPidChange",
  "onClick",
  "version"
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

function PlasmicPriceBlock__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          mainPrice: 888
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
        path: "isSelected",
        type: "writable",
        variableType: "variant",
        valueProp: "isSelected",
        onChangeProp: "onIsSelectedChange"
      },
      {
        path: "pid",
        type: "writable",
        variableType: "number",
        valueProp: "pid",
        onChangeProp: "onPidChange"
      },
      {
        path: "isDiscount",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDiscount
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return true ? (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootisDiscount_discountOn]: hasVariant(
            $state,
            "isDiscount",
            "discountOn"
          ),
          [sty.rootisSelected]: hasVariant($state, "isSelected", "isSelected")
        }
      )}
      onClick={args.onClick}
    >
      {(hasVariant($state, "isDiscount", "discountOn") ? true : true) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eFQh,
            {
              [sty.textisDiscount_discountOn__eFQhSa11I]: hasVariant(
                $state,
                "isDiscount",
                "discountOn"
              )
            }
          )}
        >
          {"9.2折"}
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox___1QeT7)}>
          {p.renderPlasmicSlot({
            defaultContents: "12个月",
            value: args.slot
          })}
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox___9NkN)}>
          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6Hedx
              )}
            >
              {"¥"}
            </div>
          ) : null}
          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gpUs6,
                {
                  [sty.textisSelected__gpUs6MIrx4]: hasVariant(
                    $state,
                    "isSelected",
                    "isSelected"
                  )
                }
              )}
            >
              {(() => {
                try {
                  return $props.mainPrice;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "...";
                  }
                  throw e;
                }
              })()}
            </div>
          ) : null}
        </div>
      ) : null}
      {true ? (
        <div className={classNames(projectcss.all, sty.freeBox__k1MfM)}>
          {p.renderPlasmicSlot({
            defaultContents: "...",
            value: args.preDay,
            className: classNames(sty.slotTargetPreDay, {
              [sty.slotTargetPreDayisSelected]: hasVariant(
                $state,
                "isSelected",
                "isSelected"
              )
            })
          })}
        </div>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__iiZZ)}>
        {p.renderPlasmicSlot({
          defaultContents: "会员版本",
          value: args.version,
          className: classNames(sty.slotTargetVersion)
        })}
      </div>
    </button>
  ) : null;
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
          internalArgPropNames: PlasmicPriceBlock__ArgProps,
          internalVariantPropNames: PlasmicPriceBlock__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceBlock";
  } else {
    func.displayName = `PlasmicPriceBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceBlock = Object.assign(
  // Top-level PlasmicPriceBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPriceBlock
    internalVariantProps: PlasmicPriceBlock__VariantProps,
    internalArgProps: PlasmicPriceBlock__ArgProps
  }
);

export default PlasmicPriceBlock;
/* prettier-ignore-end */
