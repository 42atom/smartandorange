// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: EKtCmtXn8XaxGh
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
import { AntdMenuItemGroup } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: 6ySly9jzXsR/codeComponent
import { AntdMenuItem } from "@plasmicpkgs/antd5/skinny/registerMenu"; // plasmic-import: QSmezaW-Gyu/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: -yvQMrhCsV3Q78/component
import DocumentList from "../../DocumentList"; // plasmic-import: DuwZXCRDJh/component
import Toolbar from "../../Toolbar"; // plasmic-import: UlyQXoohOO/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicMydocuments.module.css"; // plasmic-import: EKtCmtXn8XaxGh/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: dkiK7MvBVR/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: -3MO1z6kLjeMH2/icon

export const PlasmicMydocuments__VariantProps = new Array();

export const PlasmicMydocuments__ArgProps = new Array();

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

function PlasmicMydocuments__RenderFunc(props) {
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
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textarea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          "嘿！各位亲亲粉丝们，我又来了！今天我们要来聊一聊一个冬季必备单品——苏特儿牌羊绒大衣！啵儿，听着名字就觉得暖暖的~首先得说一句，这衣服Diao炸了！用的是顶级羊绒材料，毛茸茸的手感真的超好！大衣的设计也非常时尚，穿起来还能显瘦，女孩们小细腰儿也能展现出来！男孩们更不要错过此物，给心爱的女孩送一个苏特儿牌羊绒大衣，保证她对你更加痴迷！再说一下这大衣的保暖能力，呼呼，真的暖到爆炸啊！穿在身上，就像有一床暖暖的被窝裹着一样，什么寒冷都不怕啦！这个冬季不来一件苏特儿牌羊绒大衣，你都不好意思说自己走过！小伙伴们，现在是享受冬日温暖最棒的方法——苏特儿牌羊绒大衣！抓紧时间把它买回家吧！"
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnl9I0Oib3VOwY()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicMydocuments.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMydocuments.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMydocuments.pageMetadata.title}
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
            <div className={classNames(projectcss.all, sty.freeBox___0HU07)}>
              <NavMenu
                data-plasmic-name={"navMenu"}
                data-plasmic-override={overrides.navMenu}
                className={classNames("__wab_instance", sty.navMenu)}
                menu2={true}
                menu3={false}
              />
            </div>
          ) : null}
          <section
            data-plasmic-name={"bkgd"}
            data-plasmic-override={overrides.bkgd}
            className={classNames(projectcss.all, sty.bkgd)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__te5Fk)}
            >
              {true ? (
                <AntdMenu
                  data-plasmic-name={"menu"}
                  data-plasmic-override={overrides.menu}
                  className={classNames("__wab_instance", sty.menu)}
                  expandIcon={
                    <Icon10Icon
                      className={classNames(projectcss.all, sty.svg__tB6O8)}
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
                    className={classNames("__wab_instance", sty.itemGroup)}
                    title={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gQq0V
                        )}
                      >
                        {"文档记录"}
                      </div>
                    }
                  >
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__rLiC3
                      )}
                      key={"doc1"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__alE0
                        )}
                      >
                        {"收藏"}
                      </div>
                    </AntdMenuItem>
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__rHqwZ
                      )}
                      key={"doc2"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jiH4S
                        )}
                      >
                        {"最近三天"}
                      </div>
                    </AntdMenuItem>
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__l38Zo
                      )}
                      key={"doc3"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xZy9L
                        )}
                      >
                        {"最近一周"}
                      </div>
                    </AntdMenuItem>
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__xpdE
                      )}
                      key={"doc4"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__yd6Wg
                        )}
                      >
                        {"最近一月"}
                      </div>
                    </AntdMenuItem>
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__wdUnw
                      )}
                      key={"doc5"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__pOim
                        )}
                      >
                        {"最近半年"}
                      </div>
                    </AntdMenuItem>
                    <AntdMenuItem
                      className={classNames(
                        "__wab_instance",
                        sty.menuItem__p2CGa
                      )}
                      key={"doc6"}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__cizFc
                        )}
                      >
                        {"全部"}
                      </div>
                    </AntdMenuItem>
                  </AntdMenuItemGroup>
                </AntdMenu>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__cmzPo)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__z6B9T)}
                  >
                    <TextInput
                      data-plasmic-name={"textInput"}
                      data-plasmic-override={overrides.textInput}
                      className={classNames("__wab_instance", sty.textInput)}
                      onChange={(...eventArgs) => {
                        p.generateStateOnChangeProp($state, [
                          "textInput",
                          "value"
                        ])((e => e.target?.value).apply(null, eventArgs));
                      }}
                      placeholder={"搜索关键字"}
                      showStartIcon={true}
                      startIcon={
                        true ? (
                          <SearchsvgIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fwHnb
                            )}
                            role={"img"}
                          />
                        ) : null
                      }
                      value={
                        p.generateStateValueProp($state, [
                          "textInput",
                          "value"
                        ]) ?? ""
                      }
                    />

                    <DocumentList
                      className={classNames(
                        "__wab_instance",
                        sty.documentList__b2WUn
                      )}
                      currentState={true}
                    />

                    {(
                      (() => {
                        try {
                          return [2, 3, 4, 5, 6, 7];
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return [];
                          }
                          throw e;
                        }
                      })() ?? []
                    ).map((currentItem, currentIndex) => (
                      <DocumentList
                        className={classNames(
                          "__wab_instance",
                          sty.documentList__jnqW6
                        )}
                        key={currentIndex}
                      />
                    ))}
                  </p.Stack>
                  <textarea
                    data-plasmic-name={"textarea"}
                    data-plasmic-override={overrides.textarea}
                    className={classNames(
                      projectcss.all,
                      projectcss.textarea,
                      sty.textarea
                    )}
                    onChange={e => {
                      p.generateStateOnChangeProp($state, [
                        "textarea",
                        "value"
                      ])(e.target.value);
                    }}
                    ref={ref => {
                      $refs["textarea"] = ref;
                    }}
                    value={
                      p.generateStateValueProp($state, ["textarea", "value"]) ??
                      ""
                    }
                  />
                </div>
              ) : null}
            </p.Stack>
          </section>
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <Toolbar
              data-plasmic-name={"toolbar"}
              data-plasmic-override={overrides.toolbar}
              className={classNames("__wab_instance", sty.toolbar)}
              tab2={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : undefined
              }
              tab3={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? false
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
    "navMenu",
    "bkgd",
    "menu",
    "itemGroup",
    "textInput",
    "textarea",
    "toolbar"
  ],

  navMenu: ["navMenu"],
  bkgd: ["bkgd", "menu", "itemGroup", "textInput", "textarea"],
  menu: ["menu", "itemGroup"],
  itemGroup: ["itemGroup"],
  textInput: ["textInput"],
  textarea: ["textarea"],
  toolbar: ["toolbar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMydocuments__ArgProps,
          internalVariantPropNames: PlasmicMydocuments__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMydocuments__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMydocuments";
  } else {
    func.displayName = `PlasmicMydocuments.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"gRaosoDicn4VUCndSzazbA"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

export const PlasmicMydocuments = Object.assign(
  // Top-level PlasmicMydocuments renders the root element
  withPlasmicPageGuard(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navMenu: makeNodeComponent("navMenu"),
    bkgd: makeNodeComponent("bkgd"),
    menu: makeNodeComponent("menu"),
    itemGroup: makeNodeComponent("itemGroup"),
    textInput: makeNodeComponent("textInput"),
    textarea: makeNodeComponent("textarea"),
    toolbar: makeNodeComponent("toolbar"),
    // Metadata about props expected for PlasmicMydocuments
    internalVariantProps: PlasmicMydocuments__VariantProps,
    internalArgProps: PlasmicMydocuments__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "我的文档",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMydocuments;
/* prettier-ignore-end */
