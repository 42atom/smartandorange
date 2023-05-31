// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: PlpIcihQhaX91
import * as React from "react";
import Head from "next/head";
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
import NavMenu from "../../NavMenu"; // plasmic-import: 9cR2sxpykRjad/component
import { AntdMenu } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: fo-n3xHvdqt/codeComponent
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: QSmezaW-Gyu/codeComponent
import { AntdMenuDivider } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: pwJcAbVYC4M/codeComponent
import SceneInfo from "../../SceneInfo"; // plasmic-import: Zf1zYQ7YK23by/component
import Toolbar from "../../Toolbar"; // plasmic-import: UlyQXoohOO/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicWorkspaces.module.css"; // plasmic-import: PlpIcihQhaX91/css
import Icon30Icon from "./icons/PlasmicIcon__Icon30"; // plasmic-import: 2o24QZW282/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: XtoxUOCTka/icon
import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: S8FNX_2RcWwpyX/icon

export const PlasmicWorkspaces__VariantProps = new Array();

export const PlasmicWorkspaces__ArgProps = new Array("grid");

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

function PlasmicWorkspaces__RenderFunc(props) {
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicWorkspaces.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicWorkspaces.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicWorkspaces.pageMetadata.title}
        />
      </Head>

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
            sty.root
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"bkgd"}
              data-plasmic-override={overrides.bkgd}
              className={classNames(projectcss.all, sty.bkgd)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <NavMenu
                  data-plasmic-name={"navMenu"}
                  data-plasmic-override={overrides.navMenu}
                  className={classNames("__wab_instance", sty.navMenu)}
                  menu1={true}
                />
              ) : null}
              <section
                data-plasmic-name={"section"}
                data-plasmic-override={overrides.section}
                className={classNames(projectcss.all, sty.section)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__xEHmj)}
                  >
                    {true ? (
                      <div
                        data-plasmic-name={"aside"}
                        data-plasmic-override={overrides.aside}
                        className={classNames(projectcss.all, sty.aside)}
                      >
                        {(
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? true
                            : true
                        ) ? (
                          <p.Stack
                            as={"div"}
                            data-plasmic-name={"tabTitle"}
                            data-plasmic-override={overrides.tabTitle}
                            hasGap={true}
                            className={classNames(projectcss.all, sty.tabTitle)}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___1Lu3A
                              )}
                            >
                              {"场景分类"}
                            </div>
                            <Icon30Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg__w7V4K
                              )}
                              role={"img"}
                            />
                          </p.Stack>
                        ) : null}
                        <p.Stack
                          as={"aside"}
                          data-plasmic-name={"scenesTabs"}
                          data-plasmic-override={overrides.scenesTabs}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.scenesTabs,
                            ``
                          )}
                          id={"scenes_tag"}
                          tabIndex={1}
                        >
                          <AntdMenu
                            data-plasmic-name={"sideTagsMenu"}
                            data-plasmic-override={overrides.sideTagsMenu}
                            className={classNames(
                              "__wab_instance",
                              sty.sideTagsMenu
                            )}
                            expandIcon={
                              <ChevronDownsvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__tGgEz
                                )}
                                role={"img"}
                              />
                            }
                            mode={
                              hasVariant(globalVariants, "screen", "mobileOnly")
                                ? "vertical"
                                : undefined
                            }
                            triggerSubMenuAction={"click"}
                          >
                            <AntdMenuItem
                              className={classNames(
                                "__wab_instance",
                                sty.menuItem__arflz
                              )}
                              key={"menuItemKey2"}
                            >
                              {true ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__k7WoQ
                                  )}
                                >
                                  <Icon16Icon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__etT4W
                                    )}
                                    role={"img"}
                                  />

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text___3KKtY
                                    )}
                                  >
                                    {"我的收藏"}
                                  </div>
                                </p.Stack>
                              ) : null}
                            </AntdMenuItem>
                            {(
                              hasVariant(globalVariants, "screen", "mobileOnly")
                                ? true
                                : true
                            ) ? (
                              <AntdMenuDivider
                                data-plasmic-name={"menuDivider"}
                                data-plasmic-override={overrides.menuDivider}
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuDivider
                                )}
                              />
                            ) : null}
                            <AntdMenuItem
                              className={classNames(
                                "__wab_instance",
                                sty.menuItem__bO9Gb
                              )}
                              key={"menuItemKey1"}
                            >
                              {true ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox___7LgA3
                                  )}
                                >
                                  <Icon16Icon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__v7Yzd
                                    )}
                                    role={"img"}
                                  />

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__dTmxF
                                    )}
                                  >
                                    {"category1"}
                                  </div>
                                </p.Stack>
                              ) : null}
                            </AntdMenuItem>
                            <AntdMenuItem
                              className={classNames(
                                "__wab_instance",
                                sty.menuItem___0LrkP
                              )}
                              key={"menuItemKey2"}
                            >
                              {true ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__xnGe
                                  )}
                                >
                                  <Icon16Icon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__o9Lr
                                    )}
                                    role={"img"}
                                  />

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__rUJ2
                                    )}
                                  >
                                    {"category2"}
                                  </div>
                                </p.Stack>
                              ) : null}
                            </AntdMenuItem>
                            <AntdMenuItem
                              className={classNames(
                                "__wab_instance",
                                sty.menuItem__lnRmj
                              )}
                              key={"menuItemKey3"}
                            >
                              {true ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__rSsuy
                                  )}
                                >
                                  <Icon16Icon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__prXkv
                                    )}
                                    role={"img"}
                                  />

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__oiZj
                                    )}
                                  >
                                    {"category3"}
                                  </div>
                                </p.Stack>
                              ) : null}
                            </AntdMenuItem>
                            <AntdMenuItem
                              className={classNames(
                                "__wab_instance",
                                sty.menuItem__j7D03
                              )}
                              key={"menuItemKey4"}
                            >
                              {true ? (
                                <p.Stack
                                  as={"div"}
                                  hasGap={true}
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__z35UJ
                                  )}
                                >
                                  <Icon16Icon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__q7BTx
                                    )}
                                    role={"img"}
                                  />

                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__gSad
                                    )}
                                  >
                                    {"category4"}
                                  </div>
                                </p.Stack>
                              ) : null}
                            </AntdMenuItem>
                          </AntdMenu>
                        </p.Stack>
                        {(
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? true
                            : true
                        ) ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__aWlrv
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__li5Gw
                              )}
                            >
                              {"剩余字数"}
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___6A5Pc
                              )}
                            >
                              {"999999999999 字"}
                            </div>
                            <div
                              data-plasmic-name={"line"}
                              data-plasmic-override={overrides.line}
                              className={classNames(projectcss.all, sty.line)}
                            />

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ieywc
                              )}
                            >
                              {"用户小黄帽"}
                            </div>
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___2Ov4U
                              )}
                            >
                              {"免费用户"}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                    {true ? (
                      <div
                        data-plasmic-name={"columns"}
                        data-plasmic-override={overrides.columns}
                        className={classNames(projectcss.all, sty.columns)}
                      >
                        <div
                          data-plasmic-name={"column"}
                          data-plasmic-override={overrides.column}
                          className={classNames(projectcss.all, sty.column)}
                        >
                          <div
                            data-plasmic-name={"grid"}
                            data-plasmic-override={overrides.grid}
                            className={classNames(projectcss.all, sty.grid)}
                          >
                            {p.renderPlasmicSlot({
                              defaultContents: (
                                <React.Fragment>
                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__zigmA
                                    )}
                                    desc={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__lYmX8
                                        )}
                                      >
                                        {
                                          "小红书营销专用，网络社区小红书博主风格的语气"
                                        }
                                      </div>
                                    }
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__u2GgT
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__miKH
                                        )}
                                      >
                                        {"小红书营销短文和语气"}
                                      </div>
                                    }
                                  />

                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__ok60U
                                    )}
                                    desc={"desc"}
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__kCFbv
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={"场景标题"}
                                  />

                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__qdlmq
                                    )}
                                    desc={"desc"}
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__hx7T0
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={"场景标题"}
                                  />

                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__dtd5A
                                    )}
                                    desc={"desc"}
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__cvTn8
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={"场景标题"}
                                  />

                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__bu96
                                    )}
                                    desc={"desc"}
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__rgGA
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={"场景标题"}
                                  />

                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__maa04
                                    )}
                                    desc={"desc"}
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__pBRxc
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={"场景标题"}
                                  />

                                  <SceneInfo
                                    className={classNames(
                                      "__wab_instance",
                                      sty.sceneInfo__dKhQ2
                                    )}
                                    desc={"desc"}
                                    input={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__dLcox
                                        )}
                                      >
                                        {"Modal content"}
                                      </div>
                                    }
                                    output={"Modal content"}
                                    title={"场景标题"}
                                  />
                                </React.Fragment>
                              ),

                              value: args.grid
                            })}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </section>
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <Toolbar
              data-plasmic-name={"toolbar"}
              data-plasmic-override={overrides.toolbar}
              className={classNames("__wab_instance", sty.toolbar)}
              tab1={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : undefined
              }
            />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "bkgd",
    "navMenu",
    "section",
    "aside",
    "tabTitle",
    "scenesTabs",
    "sideTagsMenu",
    "menuDivider",
    "line",
    "columns",
    "column",
    "grid",
    "toolbar"
  ],

  bkgd: [
    "bkgd",
    "navMenu",
    "section",
    "aside",
    "tabTitle",
    "scenesTabs",
    "sideTagsMenu",
    "menuDivider",
    "line",
    "columns",
    "column",
    "grid"
  ],

  navMenu: ["navMenu"],
  section: [
    "section",
    "aside",
    "tabTitle",
    "scenesTabs",
    "sideTagsMenu",
    "menuDivider",
    "line",
    "columns",
    "column",
    "grid"
  ],

  aside: [
    "aside",
    "tabTitle",
    "scenesTabs",
    "sideTagsMenu",
    "menuDivider",
    "line"
  ],

  tabTitle: ["tabTitle"],
  scenesTabs: ["scenesTabs", "sideTagsMenu", "menuDivider"],
  sideTagsMenu: ["sideTagsMenu", "menuDivider"],
  menuDivider: ["menuDivider"],
  line: ["line"],
  columns: ["columns", "column", "grid"],
  column: ["column", "grid"],
  grid: ["grid"],
  toolbar: ["toolbar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWorkspaces__ArgProps,
          internalVariantPropNames: PlasmicWorkspaces__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWorkspaces__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWorkspaces";
  } else {
    func.displayName = `PlasmicWorkspaces.${nodeName}`;
  }
  return func;
}

export const PlasmicWorkspaces = Object.assign(
  // Top-level PlasmicWorkspaces renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    bkgd: makeNodeComponent("bkgd"),
    navMenu: makeNodeComponent("navMenu"),
    section: makeNodeComponent("section"),
    aside: makeNodeComponent("aside"),
    tabTitle: makeNodeComponent("tabTitle"),
    scenesTabs: makeNodeComponent("scenesTabs"),
    sideTagsMenu: makeNodeComponent("sideTagsMenu"),
    menuDivider: makeNodeComponent("menuDivider"),
    line: makeNodeComponent("line"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    grid: makeNodeComponent("grid"),
    toolbar: makeNodeComponent("toolbar"),
    // Metadata about props expected for PlasmicWorkspaces
    internalVariantProps: PlasmicWorkspaces__VariantProps,
    internalArgProps: PlasmicWorkspaces__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "工作台",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWorkspaces;
/* prettier-ignore-end */
