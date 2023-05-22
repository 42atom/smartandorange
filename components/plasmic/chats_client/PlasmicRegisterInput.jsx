// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: Sdxulv4_ssW
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
import Button from "../../Button"; // plasmic-import: YO5Bwb9purCqu/component
import { AntdModal } from "@plasmicpkgs/antd5/skinny/registerModal"; // plasmic-import: xx93QbkHH5i/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicRegisterInput.module.css"; // plasmic-import: Sdxulv4_ssW/css
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: P8LQPjDHPd/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: AO1hQKEExk65Hm/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: A0Me8Phykv/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: JhZ3dtt_5DRD2s/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: iQ4dltXyU_/icon

export const PlasmicRegisterInput__VariantProps = new Array("mailState");

export const PlasmicRegisterInput__ArgProps = new Array("confirm");

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

function PlasmicRegisterInput__RenderFunc(props) {
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
        path: "mobileNumber.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "code.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "mailState",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.mailState
      },
      {
        path: "mail.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "mailPassword.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "modalA.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <div
      data-plasmic-name={"register"}
      data-plasmic-override={overrides.register}
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
        sty.register,
        {
          [sty.registermailState]: hasVariant($state, "mailState", "mailState")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__d506)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4Ie5H)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___8M14Q)} />
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__o1WPe
            )}
          >
            {"欢迎,请注册"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__s1BKv)} />
        </p.Stack>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__dgHqS)}
        >
          <Button
            className={classNames("__wab_instance", sty.button___8QAp6, {
              [sty.buttonmailState___8QAp6EnDGo]: hasVariant(
                $state,
                "mailState",
                "mailState"
              )
            })}
            color={"white"}
            endIcon={
              <IconIcon
                className={classNames(projectcss.all, sty.svg__fj77H)}
                role={"img"}
              />
            }
            onClick={async event => {
              const $steps = {};
              $steps["updateMailRegister"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "A8Kkkg5hx",
                          componentUuid: "Sdxulv4_ssW",
                          argName: "vgroup"
                        },
                        () => "mailState"
                      ),
                      operation: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "A8Kkkg5hx",
                          componentUuid: "Sdxulv4_ssW",
                          argName: "operation"
                        },
                        () => 6
                      ),
                      value: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "A8Kkkg5hx",
                          componentUuid: "Sdxulv4_ssW",
                          argName: "value"
                        },
                        () => "mailState"
                      )
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "A8Kkkg5hx",
                        componentUuid: "Sdxulv4_ssW"
                      },
                      () =>
                        (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }
                          p.set($state, vgroup, false);
                          return false;
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["updateMailRegister"] === "object" &&
                typeof $steps["updateMailRegister"].then === "function"
              ) {
                $steps["updateMailRegister"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariant",
                    interactionUuid: "A8Kkkg5hx",
                    componentUuid: "Sdxulv4_ssW"
                  },
                  $steps["updateMailRegister"]
                );
              }
            }}
            showStartIcon={true}
            startIcon={
              <Icon7Icon
                className={classNames(projectcss.all, sty.svg__tXkvL, {
                  [sty.svgmailState__tXkvLenDGo]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                })}
                role={"img"}
              />
            }
            submitsForm={false}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___7X0D,
                {
                  [sty.textmailState___7X0DenDGo]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                }
              )}
            >
              {hasVariant($state, "mailState", "mailState")
                ? "手机注册"
                : "手机注册"}
            </div>
          </Button>
          <Button
            className={classNames("__wab_instance", sty.button__eUe7C, {
              [sty.buttonmailState__eUe7CenDGo]: hasVariant(
                $state,
                "mailState",
                "mailState"
              )
            })}
            color={"white"}
            endIcon={
              <IconIcon
                className={classNames(projectcss.all, sty.svg___2RGj)}
                role={"img"}
              />
            }
            onClick={async event => {
              const $steps = {};
              $steps["updateMailRegister"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "YCEIUbEo3",
                          componentUuid: "Sdxulv4_ssW",
                          argName: "vgroup"
                        },
                        () => "mailState"
                      ),
                      operation: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "YCEIUbEo3",
                          componentUuid: "Sdxulv4_ssW",
                          argName: "operation"
                        },
                        () => 4
                      ),
                      value: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "YCEIUbEo3",
                          componentUuid: "Sdxulv4_ssW",
                          argName: "value"
                        },
                        () => "mailState"
                      )
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "YCEIUbEo3",
                        componentUuid: "Sdxulv4_ssW"
                      },
                      () =>
                        (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }
                          p.set($state, vgroup, true);
                          return true;
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["updateMailRegister"] === "object" &&
                typeof $steps["updateMailRegister"].then === "function"
              ) {
                $steps["updateMailRegister"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariant",
                    interactionUuid: "YCEIUbEo3",
                    componentUuid: "Sdxulv4_ssW"
                  },
                  $steps["updateMailRegister"]
                );
              }
            }}
            showStartIcon={true}
            startIcon={
              <Icon5Icon
                className={classNames(projectcss.all, sty.svg__imK1, {
                  [sty.svgmailState__imK1EnDGo]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                })}
                role={"img"}
              />
            }
            submitsForm={false}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ot39T,
                {
                  [sty.textmailState__ot39TenDGo]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                }
              )}
            >
              {hasVariant($state, "mailState", "mailState")
                ? "邮箱注册"
                : "邮箱注册"}
            </div>
          </Button>
        </p.Stack>
        {(hasVariant($state, "mailState", "mailState") ? true : true) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"mbRegisterInput"}
            data-plasmic-override={overrides.mbRegisterInput}
            hasGap={true}
            className={classNames(projectcss.all, sty.mbRegisterInput, {
              [sty.mbRegisterInputmailState]: hasVariant(
                $state,
                "mailState",
                "mailState"
              )
            })}
          >
            <input
              data-plasmic-name={"mobileNumber"}
              data-plasmic-override={overrides.mobileNumber}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.mobileNumber,
                {
                  [sty.mobileNumbermailState]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                }
              )}
              name={"mobile"}
              onChange={async (...eventArgs) => {
                (e => {
                  p.generateStateOnChangeProp($state, [
                    "mobileNumber",
                    "value"
                  ])(e.target.value);
                }).apply(null, eventArgs);
                (async event => {
                  const $steps = {};
                }).apply(null, eventArgs);
              }}
              placeholder={"手机号"}
              ref={ref => {
                $refs["mobileNumber"] = ref;
              }}
              size={1}
              type={"tel"}
              value={
                p.generateStateValueProp($state, ["mobileNumber", "value"]) ??
                ""
              }
            />

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ccSoy)}
              >
                <input
                  data-plasmic-name={"code"}
                  data-plasmic-override={overrides.code}
                  autoComplete={"on"}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.code,
                    {
                      [sty.codemailState]: hasVariant(
                        $state,
                        "mailState",
                        "mailState"
                      )
                    }
                  )}
                  name={"mcode"}
                  onChange={e => {
                    p.generateStateOnChangeProp($state, ["code", "value"])(
                      e.target.value
                    );
                  }}
                  placeholder={"输入验证码"}
                  ref={ref => {
                    $refs["code"] = ref;
                  }}
                  size={1}
                  type={"text"}
                  value={
                    p.generateStateValueProp($state, ["code", "value"]) ?? ""
                  }
                />

                <Button
                  data-plasmic-name={"getCode"}
                  data-plasmic-override={overrides.getCode}
                  className={classNames("__wab_instance", sty.getCode, {
                    [sty.getCodemailState]: hasVariant(
                      $state,
                      "mailState",
                      "mailState"
                    )
                  })}
                  color={"softSand"}
                  onClick={async event => {
                    const $steps = {};
                  }}
                  size={"compact"}
                >
                  {"获取验证码"}
                </Button>
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
        {(hasVariant($state, "mailState", "mailState") ? true : false) ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"mailRegisterInput"}
            data-plasmic-override={overrides.mailRegisterInput}
            hasGap={true}
            className={classNames(projectcss.all, sty.mailRegisterInput, {
              [sty.mailRegisterInputmailState]: hasVariant(
                $state,
                "mailState",
                "mailState"
              )
            })}
          >
            <input
              data-plasmic-name={"mail"}
              data-plasmic-override={overrides.mail}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.mail,
                {
                  [sty.mailmailState]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                }
              )}
              name={"mobile"}
              onChange={e => {
                p.generateStateOnChangeProp($state, ["mail", "value"])(
                  e.target.value
                );
              }}
              placeholder={"填写邮箱"}
              ref={ref => {
                $refs["mail"] = ref;
              }}
              size={1}
              type={"email"}
              value={p.generateStateValueProp($state, ["mail", "value"]) ?? ""}
            />

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__yLooM)}
              >
                <input
                  data-plasmic-name={"mailPassword"}
                  data-plasmic-override={overrides.mailPassword}
                  autoComplete={"on"}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.mailPassword,
                    {
                      [sty.mailPasswordmailState]: hasVariant(
                        $state,
                        "mailState",
                        "mailState"
                      )
                    }
                  )}
                  name={"mcode"}
                  onChange={e => {
                    p.generateStateOnChangeProp($state, [
                      "mailPassword",
                      "value"
                    ])(e.target.value);
                  }}
                  placeholder={"输入密码"}
                  ref={ref => {
                    $refs["mailPassword"] = ref;
                  }}
                  size={1}
                  type={"password"}
                  value={
                    p.generateStateValueProp($state, [
                      "mailPassword",
                      "value"
                    ]) ?? ""
                  }
                />
              </p.Stack>
            ) : null}
          </p.Stack>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___8NXgE
          )}
        >
          <React.Fragment>
            <React.Fragment>{"请阅读"}</React.Fragment>
            {
              <span
                data-plasmic-name={"span"}
                data-plasmic-override={overrides.span}
                className={classNames(
                  projectcss.all,
                  projectcss.span,
                  projectcss.__wab_text,
                  projectcss.plasmic_default__inline,
                  sty.span
                )}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateModalAOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "Jtvgu9WbH",
                              componentUuid: "Sdxulv4_ssW",
                              argName: "variable"
                            },
                            () => ({
                              objRoot: $state,
                              variablePath: ["modalA", "open"]
                            })
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "Jtvgu9WbH",
                              componentUuid: "Sdxulv4_ssW",
                              argName: "operation"
                            },
                            () => 0
                          ),
                          value: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariable",
                              interactionUuid: "Jtvgu9WbH",
                              componentUuid: "Sdxulv4_ssW",
                              argName: "value"
                            },
                            () => true
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariable",
                            interactionUuid: "Jtvgu9WbH",
                            componentUuid: "Sdxulv4_ssW"
                          },
                          () =>
                            (({ variable, value, startIndex, deleteCount }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;
                              p.set(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateModalAOpen"] === "object" &&
                    typeof $steps["updateModalAOpen"].then === "function"
                  ) {
                    $steps["updateModalAOpen"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "Jtvgu9WbH",
                        componentUuid: "Sdxulv4_ssW"
                      },
                      $steps["updateModalAOpen"]
                    );
                  }
                }}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#2CCF24" }}
                  >
                    {"《机智桔子隐私协议》"}
                  </span>
                </React.Fragment>
              </span>
            }

            <React.Fragment>{"以及"}</React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ color: "#2CCF24" }}
            >
              {"《机智桔子协议免责声明》"}
            </span>
          </React.Fragment>
        </div>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Button
              className={classNames("__wab_instance", sty.button__leNzd)}
              color={"green"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__q1DZv)}
                  role={"img"}
                />
              }
              link={`/workspaces`}
              startIcon={
                <ChecksvgIcon
                  className={classNames(projectcss.all, sty.svg__zMwC4)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jo1Z
                )}
              >
                {"确 认"}
              </div>
            </Button>
          ),

          value: args.confirm
        })}
      </p.Stack>
      <AntdModal
        data-plasmic-name={"modalA"}
        data-plasmic-override={overrides.modalA}
        cancelText={"取消"}
        className={classNames("__wab_instance", sty.modalA)}
        closeIcon={
          <Icon11Icon
            className={classNames(projectcss.all, sty.svg__pDn5)}
            role={"img"}
          />
        }
        defaultStylesClassName={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
        modalScopeClassName={sty["modalA__modal"]}
        okText={"确认( 我同意 )"}
        onOpenChange={p.generateStateOnChangeProp($state, ["modalA", "open"])}
        open={p.generateStateValueProp($state, ["modalA", "open"])}
        title={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dfi24
            )}
          >
            {"免责声明"}
          </div>
        }
      >
        <div className={classNames(projectcss.all, sty.freeBox__f0CxF)}>
          <p
            data-plasmic-name={"p"}
            data-plasmic-override={overrides.p}
            className={classNames(
              projectcss.all,
              projectcss.p,
              projectcss.__wab_text,
              sty.p
            )}
          >
            {
              "机智桔子智能写作工具（以下简称“本工具”) 是一款通过算法生成文字的辅助工具，旨在帮助用户更方便地生成文字内容，并不代表机智桔子的观点和立场。\n\n请您仔细阅读以下条款，使用本工具即表明您对本协议的接受和遵守。如果您不同意本协议的条款，请不要使用本工具。\n\n免责声明\n\n本工具生成的文字内容并非由人类手工编写，因此未经过人工审查，可能存在误差或不准确之处。因此，机智桔子不对本工具生成的文字内容的准确性、完整性、可靠性、适用性、及时性、非侵权性做出任何明示或暗示的保证或陈述，并将不承担任何相关责任。\n本工具的使用承担风险自负，机智桔子不对损失或损害承担任何责任，包括直接、间接、惩罚性或结果性的损失或损害，以及任何因使用本工具而引起的任何第三方索赔、损失或诉讼。\n您应当遵守法律法规和社会公德，不得利用本工具生成文章进行侵权、诽谤、淫秽色情、非法集会等违法犯罪行为。如因您违反法律法规和社会公德，因使用本工具生成的内容引起的一切后果由您自行承担，与机智桔子无关。\n知识产权保护\n本工具所生成的文字内容均为机智桔子所有，任何第三方不得进行抄袭、盗用、复制、传播、出售等侵犯版权行为。机智桔子拥有依法罚款及追究法律责任的权利。\n\n其他条款\n机智桔子保留随时修改本条款的权利且毋须另行通知。用户在使用本工具的过程中，应仔细关注本协议的任何修改，并在同意本协议所有条款的前提下进行使用。"
            }
          </p>
        </div>
      </AntdModal>
    </div>
  );
}

const PlasmicDescendants = {
  register: [
    "register",
    "mbRegisterInput",
    "mobileNumber",
    "code",
    "getCode",
    "mailRegisterInput",
    "mail",
    "mailPassword",
    "span",
    "modalA",
    "p"
  ],

  mbRegisterInput: ["mbRegisterInput", "mobileNumber", "code", "getCode"],
  mobileNumber: ["mobileNumber"],
  code: ["code"],
  getCode: ["getCode"],
  mailRegisterInput: ["mailRegisterInput", "mail", "mailPassword"],
  mail: ["mail"],
  mailPassword: ["mailPassword"],
  span: ["span"],
  modalA: ["modalA", "p"],
  p: ["p"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicRegisterInput__ArgProps,
          internalVariantPropNames: PlasmicRegisterInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRegisterInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "register") {
    func.displayName = "PlasmicRegisterInput";
  } else {
    func.displayName = `PlasmicRegisterInput.${nodeName}`;
  }
  return func;
}

export const PlasmicRegisterInput = Object.assign(
  // Top-level PlasmicRegisterInput renders the root element
  makeNodeComponent("register"),
  {
    // Helper components rendering sub-elements
    mbRegisterInput: makeNodeComponent("mbRegisterInput"),
    mobileNumber: makeNodeComponent("mobileNumber"),
    code: makeNodeComponent("code"),
    getCode: makeNodeComponent("getCode"),
    mailRegisterInput: makeNodeComponent("mailRegisterInput"),
    mail: makeNodeComponent("mail"),
    mailPassword: makeNodeComponent("mailPassword"),
    span: makeNodeComponent("span"),
    modalA: makeNodeComponent("modalA"),
    p: makeNodeComponent("p"),
    // Metadata about props expected for PlasmicRegisterInput
    internalVariantProps: PlasmicRegisterInput__VariantProps,
    internalArgProps: PlasmicRegisterInput__ArgProps
  }
);

export default PlasmicRegisterInput;
/* prettier-ignore-end */
