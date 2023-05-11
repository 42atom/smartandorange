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
import { useDependencyAwareQuery } from "@plasmicapp/react-web/lib/data-sources";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import MenuNav from "../../MenuNav"; // plasmic-import: 9cR2sxpykRjad/component
import { AntdMenu } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: fo-n3xHvdqt/codeComponent
import { AntdMenuItemGroup } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: 6ySly9jzXsR/codeComponent
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: QSmezaW-Gyu/codeComponent
import SceneInfo from "../../SceneInfo"; // plasmic-import: Zf1zYQ7YK23by/component
import Toolbar from "../../Toolbar"; // plasmic-import: UlyQXoohOO/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicWorkspaces.module.css"; // plasmic-import: PlpIcihQhaX91/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: dkiK7MvBVR/icon

export const PlasmicWorkspaces__VariantProps = new Array();

export const PlasmicWorkspaces__ArgProps = new Array();

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
  useDependencyAwareQuery({
    name: "scenes",
    getDataOp: () => ({
      sourceId: "9m6seF9rffTwqmNeTPj4dy",
      opId: "0fcbb781-dca9-42b0-bffb-923550b1d4c5",
      userArgs: {},
      cacheKey: "plasmic.$.rINfrMoPavP8l.$.",
      invalidatedKeys: null,
      roleId: null
    }),
    $queries,
    setDollarQueries
  });
  useDependencyAwareQuery({
    name: "catalogs",
    getDataOp: () => ({
      sourceId: "9m6seF9rffTwqmNeTPj4dy",
      opId: "4e42ebdf-8e99-4ba7-8b79-48a8b655a36b",
      userArgs: {},
      cacheKey: "plasmic.$.8DStGR5tk.$.",
      invalidatedKeys: ["plasmic_refresh_all"],
      roleId: null
    }),
    $queries,
    setDollarQueries
  });
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
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__g6Bq0)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <MenuNav
                  data-plasmic-name={"menuNav"}
                  data-plasmic-override={overrides.menuNav}
                  className={classNames("__wab_instance", sty.menuNav)}
                  selected={["menuItemKey1"]}
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
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___9MNcR
                        )}
                      >
                        {true ? (
                          <AntdMenu
                            data-plasmic-name={"menu"}
                            data-plasmic-override={overrides.menu}
                            className={classNames("__wab_instance", sty.menu)}
                            expandIcon={
                              <Icon10Icon
                                data-plasmic-name={"svg"}
                                data-plasmic-override={overrides.svg}
                                className={classNames(projectcss.all, sty.svg)}
                                role={"img"}
                              />
                            }
                            mode={
                              hasVariant(globalVariants, "screen", "mobileOnly")
                                ? "horizontal"
                                : "vertical"
                            }
                            multiple={false}
                          >
                            <AntdMenuItemGroup
                              data-plasmic-name={"itemGroup"}
                              data-plasmic-override={overrides.itemGroup}
                              className={classNames(
                                "__wab_instance",
                                sty.itemGroup
                              )}
                              title={
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__zuoAu
                                  )}
                                >
                                  {"模版分类"}
                                </div>
                              }
                            >
                              <AntdMenuItem
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuItem__gOmv0
                                )}
                                key={"k1"}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__zw1Lv
                                  )}
                                >
                                  {"收藏"}
                                </div>
                              </AntdMenuItem>
                              <AntdMenuItem
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuItem__pEy29
                                )}
                                key={"k2"}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__l2Ea5
                                  )}
                                >
                                  {"热门"}
                                </div>
                              </AntdMenuItem>
                              <AntdMenuItem
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuItem___70Ju
                                )}
                                key={"k3"}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text___46Vht
                                  )}
                                >
                                  {"小红书营销类"}
                                </div>
                              </AntdMenuItem>
                              <AntdMenuItem
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuItem___1SkBi
                                )}
                                key={"k4"}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__fGjOe
                                  )}
                                >
                                  {"中文社交媒体"}
                                </div>
                              </AntdMenuItem>
                              <AntdMenuItem
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuItem__woTjl
                                )}
                                key={"k5"}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__ylzy
                                  )}
                                >
                                  {"英文社交媒体"}
                                </div>
                              </AntdMenuItem>
                              <AntdMenuItem
                                className={classNames(
                                  "__wab_instance",
                                  sty.menuItem__iMxql
                                )}
                                key={"k6"}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__wLoO7
                                  )}
                                >
                                  {"出题机"}
                                </div>
                              </AntdMenuItem>
                            </AntdMenuItemGroup>
                          </AntdMenu>
                        ) : null}
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
                              {"剩余字数\n19280 字"}
                            </div>
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
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__xdhlF
                            )}
                          >
                            {(
                              (() => {
                                try {
                                  return $queries.scenes.data;
                                } catch (e) {
                                  if (e instanceof TypeError) {
                                    return [];
                                  }
                                  throw e;
                                }
                              })() ?? []
                            ).map((currentItem, currentIndex) => (
                              <SceneInfo
                                data-plasmic-name={"sceneInfo"}
                                data-plasmic-override={overrides.sceneInfo}
                                className={classNames(
                                  "__wab_instance",
                                  sty.sceneInfo
                                )}
                                desc={(() => {
                                  try {
                                    return currentItem.description;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "desc";
                                    }
                                    throw e;
                                  }
                                })()}
                                input={
                                  <div
                                    data-plasmic-name={"input"}
                                    data-plasmic-override={overrides.input}
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.input
                                    )}
                                  >
                                    {(() => {
                                      try {
                                        return (
                                          "输入： " + currentItem.modal_input
                                        );
                                      } catch (e) {
                                        if (e instanceof TypeError) {
                                          return "Modal content";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </div>
                                }
                                key={currentIndex}
                                output={(() => {
                                  try {
                                    return "输出：" + currentItem.modal_content;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "Modal content";
                                    }
                                    throw e;
                                  }
                                })()}
                                slot={(() => {
                                  try {
                                    return currentItem.scenes_name;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "Modal title";
                                    }
                                    throw e;
                                  }
                                })()}
                                title={(() => {
                                  try {
                                    return currentItem.scenes_name;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "场景标题";
                                    }
                                    throw e;
                                  }
                                })()}
                              >
                                <p.PlasmicImg
                                  data-plasmic-name={"img"}
                                  data-plasmic-override={overrides.img}
                                  alt={""}
                                  className={classNames(sty.img)}
                                  displayHeight={"24px"}
                                  displayMaxHeight={"none"}
                                  displayMaxWidth={"100%"}
                                  displayMinHeight={"0"}
                                  displayMinWidth={"0"}
                                  displayWidth={"24px"}
                                  loading={"lazy"}
                                  src={(() => {
                                    try {
                                      return currentItem.scene_icon;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return "https://www.svgrepo.com/show/474676/germs.svg";
                                      }
                                      throw e;
                                    }
                                  })()}
                                />
                              </SceneInfo>
                            ))}
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
    "menuNav",
    "section",
    "menu",
    "itemGroup",
    "svg",
    "columns",
    "column",
    "sceneInfo",
    "img",
    "input",
    "toolbar"
  ],

  menuNav: ["menuNav"],
  section: [
    "section",
    "menu",
    "itemGroup",
    "svg",
    "columns",
    "column",
    "sceneInfo",
    "img",
    "input"
  ],

  menu: ["menu", "itemGroup", "svg"],
  itemGroup: ["itemGroup"],
  svg: ["svg"],
  columns: ["columns", "column", "sceneInfo", "img", "input"],
  column: ["column", "sceneInfo", "img", "input"],
  sceneInfo: ["sceneInfo", "img", "input"],
  img: ["img"],
  input: ["input"],
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
    menuNav: makeNodeComponent("menuNav"),
    section: makeNodeComponent("section"),
    menu: makeNodeComponent("menu"),
    itemGroup: makeNodeComponent("itemGroup"),
    svg: makeNodeComponent("svg"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    sceneInfo: makeNodeComponent("sceneInfo"),
    img: makeNodeComponent("img"),
    input: makeNodeComponent("input"),
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
