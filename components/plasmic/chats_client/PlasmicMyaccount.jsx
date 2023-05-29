// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: Y7xcku1e2QoFP
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
import Button from "../../Button"; // plasmic-import: YO5Bwb9purCqu/component
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponent
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponentHelper
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: EYHwZh9ILg/codeComponent
import Toolbar from "../../Toolbar"; // plasmic-import: UlyQXoohOO/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicMyaccount.module.css"; // plasmic-import: Y7xcku1e2QoFP/css

export const PlasmicMyaccount__VariantProps = new Array();

export const PlasmicMyaccount__ArgProps = new Array("test");

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

function PlasmicMyaccount__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          test: "122673627872"
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
        path: "nicknameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "小黄帽"
      },
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "phoneInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "emailInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
        <title key="title">{PlasmicMyaccount.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMyaccount.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMyaccount.pageMetadata.title}
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
            <div className={classNames(projectcss.all, sty.freeBox__fxLf)}>
              <NavMenu
                data-plasmic-name={"navMenu"}
                data-plasmic-override={overrides.navMenu}
                className={classNames("__wab_instance", sty.navMenu)}
                menu1={false}
                menu2={false}
                menu3={true}
              />
            </div>
          ) : null}
          <section
            data-plasmic-name={"bkgd"}
            data-plasmic-override={overrides.bkgd}
            className={classNames(projectcss.all, sty.bkgd)}
          >
            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vypQs)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___5Z233)}
                >
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__reQcD)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___1AfrL
                          )}
                        >
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__nyBuJ
                            )}
                            color={"softGreen"}
                            shape={"rounded"}
                            size={"minimal"}
                            submitsForm={true}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__tTEgg
                              )}
                            >
                              {"免费用户"}
                            </div>
                          </Button>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__pMagQ
                            )}
                          >
                            {"剩余额度"}
                          </div>
                          <div
                            data-plasmic-name={"quota"}
                            data-plasmic-override={overrides.quota}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.quota
                            )}
                          >
                            {"37000字"}
                          </div>
                        </div>
                      ) : null}
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__qyo06
                          )}
                        >
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__pgoVl
                            )}
                            color={"green"}
                            shape={"rounded"}
                            size={"minimal"}
                            submitsForm={true}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ha614
                              )}
                            >
                              {"充值"}
                            </div>
                          </Button>
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__yKNcX
                            )}
                            color={"sand"}
                            onClick={async event => {
                              const $steps = {};
                            }}
                            shape={"rounded"}
                            size={"minimal"}
                            submitsForm={true}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__uYq4
                              )}
                            >
                              {"订单记录"}
                            </div>
                          </Button>
                        </p.Stack>
                      ) : null}
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__kAo0A)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___6DZlk
                          )}
                        >
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__iyn6A
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__t0AqL
                              )}
                            >
                              {"用户名"}
                            </div>
                            {(() => {
                              const child$Props = {
                                className: classNames(
                                  "__wab_instance",
                                  sty.nicknameInput
                                ),
                                disabled: true,
                                onChange:
                                  p.generateStateOnChangePropForCodeComponents(
                                    $state,
                                    "value",
                                    ["nicknameInput", "value"],
                                    AntdInput_Helpers
                                  ),
                                value: p.generateStateValueProp($state, [
                                  "nicknameInput",
                                  "value"
                                ])
                              };
                              p.initializeCodeComponentStates(
                                $state,
                                [
                                  {
                                    name: "value",
                                    plasmicStateName: "nicknameInput.value"
                                  }
                                ],

                                [],
                                AntdInput_Helpers ?? {},
                                child$Props
                              );
                              return (
                                <AntdInput
                                  data-plasmic-name={"nicknameInput"}
                                  data-plasmic-override={
                                    overrides.nicknameInput
                                  }
                                  {...child$Props}
                                />
                              );
                            })()}
                          </p.Stack>
                          <Button
                            data-plasmic-name={"nicknameBtn"}
                            data-plasmic-override={overrides.nicknameBtn}
                            className={classNames(
                              "__wab_instance",
                              sty.nicknameBtn
                            )}
                            color={"softGreen"}
                            onClick={async event => {
                              const $steps = {};
                            }}
                            size={"compact"}
                            submitsForm={true}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text___5Ue0
                              )}
                            >
                              {"保存修改"}
                            </div>
                          </Button>
                        </p.Stack>
                      ) : null}
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <FormItemWrapper
                          data-plasmic-name={"formField"}
                          data-plasmic-override={overrides.formField}
                          className={classNames(
                            "__wab_instance",
                            sty.formField
                          )}
                          label={
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__fzxrF
                              )}
                            >
                              {"账号状态"}
                            </div>
                          }
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__ix0Rc
                            )}
                          >
                            {"免费版（正常）"}
                          </div>
                        </FormItemWrapper>
                      ) : null}
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox___4Tv5)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__kckei
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__y8ZBa
                          )}
                        >
                          {"邮   箱"}
                        </div>
                        {(() => {
                          const child$Props = {
                            className: classNames(
                              "__wab_instance",
                              sty.emailInput
                            ),
                            onChange:
                              p.generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["emailInput", "value"],
                                AntdInput_Helpers
                              ),
                            value: p.generateStateValueProp($state, [
                              "emailInput",
                              "value"
                            ])
                          };
                          p.initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "emailInput.value"
                              }
                            ],

                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );
                          return (
                            <AntdInput
                              data-plasmic-name={"emailInput"}
                              data-plasmic-override={overrides.emailInput}
                              {...child$Props}
                            />
                          );
                        })()}
                      </p.Stack>
                      <Button
                        data-plasmic-name={"emailBtn"}
                        data-plasmic-override={overrides.emailBtn}
                        className={classNames("__wab_instance", sty.emailBtn)}
                        color={"softGreen"}
                        size={"compact"}
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9DSqm
                          )}
                        >
                          {"绑定邮箱"}
                        </div>
                      </Button>
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__mp9Qn)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__rcsix
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3VOdS
                          )}
                        >
                          {"手   机"}
                        </div>
                        {(() => {
                          const child$Props = {
                            className: classNames(
                              "__wab_instance",
                              sty.phoneInput
                            ),
                            disabled: true,
                            onChange:
                              p.generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["phoneInput", "value"],
                                AntdInput_Helpers
                              ),
                            value: p.generateStateValueProp($state, [
                              "phoneInput",
                              "value"
                            ])
                          };
                          p.initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "phoneInput.value"
                              }
                            ],

                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );
                          return (
                            <AntdInput
                              data-plasmic-name={"phoneInput"}
                              data-plasmic-override={overrides.phoneInput}
                              {...child$Props}
                            />
                          );
                        })()}
                      </p.Stack>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__tN1Mn
                        )}
                        color={"softGreen"}
                        size={"compact"}
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___5Lqnl
                          )}
                        >
                          {"手机换绑"}
                        </div>
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__nSdSx
                        )}
                        color={"softGreen"}
                        size={"compact"}
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9Isb0
                          )}
                        >
                          {"修改密码"}
                        </div>
                      </Button>
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___5KMVz
                      )}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__oKiI
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3PtVl
                          )}
                        >
                          {"礼品卡"}
                        </div>
                        {(() => {
                          const child$Props = {
                            className: classNames(
                              "__wab_instance",
                              sty.emailInput2
                            ),
                            onChange:
                              p.generateStateOnChangePropForCodeComponents(
                                $state,
                                "value",
                                ["emailInput2", "value"],
                                AntdInput_Helpers
                              ),
                            value: p.generateStateValueProp($state, [
                              "emailInput2",
                              "value"
                            ])
                          };
                          p.initializeCodeComponentStates(
                            $state,
                            [
                              {
                                name: "value",
                                plasmicStateName: "emailInput2.value"
                              }
                            ],

                            [],
                            AntdInput_Helpers ?? {},
                            child$Props
                          );
                          return (
                            <AntdInput
                              data-plasmic-name={"emailInput2"}
                              data-plasmic-override={overrides.emailInput2}
                              {...child$Props}
                            />
                          );
                        })()}
                      </p.Stack>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__rzucR
                        )}
                        color={"softGreen"}
                        size={"compact"}
                        submitsForm={true}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__t8S9
                          )}
                        >
                          {"使用"}
                        </div>
                      </Button>
                    </p.Stack>
                  ) : null}
                </div>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__xhRnq)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"590px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/chats_client/images/banner12Xpng.png",
                        fullWidth: 828,
                        fullHeight: 1000,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                ) : null}
              </p.Stack>
            ) : null}
          </section>
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <Toolbar
              data-plasmic-name={"toolbar"}
              data-plasmic-override={overrides.toolbar}
              className={classNames("__wab_instance", sty.toolbar)}
              tab3={
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
    "navMenu",
    "bkgd",
    "quota",
    "nicknameInput",
    "nicknameBtn",
    "formField",
    "emailInput",
    "emailBtn",
    "phoneInput",
    "emailInput2",
    "img",
    "toolbar"
  ],

  navMenu: ["navMenu"],
  bkgd: [
    "bkgd",
    "quota",
    "nicknameInput",
    "nicknameBtn",
    "formField",
    "emailInput",
    "emailBtn",
    "phoneInput",
    "emailInput2",
    "img"
  ],

  quota: ["quota"],
  nicknameInput: ["nicknameInput"],
  nicknameBtn: ["nicknameBtn"],
  formField: ["formField"],
  emailInput: ["emailInput"],
  emailBtn: ["emailBtn"],
  phoneInput: ["phoneInput"],
  emailInput2: ["emailInput2"],
  img: ["img"],
  toolbar: ["toolbar"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMyaccount__ArgProps,
          internalVariantPropNames: PlasmicMyaccount__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMyaccount__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMyaccount";
  } else {
    func.displayName = `PlasmicMyaccount.${nodeName}`;
  }
  return func;
}

export const PlasmicMyaccount = Object.assign(
  // Top-level PlasmicMyaccount renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navMenu: makeNodeComponent("navMenu"),
    bkgd: makeNodeComponent("bkgd"),
    quota: makeNodeComponent("quota"),
    nicknameInput: makeNodeComponent("nicknameInput"),
    nicknameBtn: makeNodeComponent("nicknameBtn"),
    formField: makeNodeComponent("formField"),
    emailInput: makeNodeComponent("emailInput"),
    emailBtn: makeNodeComponent("emailBtn"),
    phoneInput: makeNodeComponent("phoneInput"),
    emailInput2: makeNodeComponent("emailInput2"),
    img: makeNodeComponent("img"),
    toolbar: makeNodeComponent("toolbar"),
    // Metadata about props expected for PlasmicMyaccount
    internalVariantProps: PlasmicMyaccount__VariantProps,
    internalArgProps: PlasmicMyaccount__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "我的账户",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMyaccount;
/* prettier-ignore-end */
