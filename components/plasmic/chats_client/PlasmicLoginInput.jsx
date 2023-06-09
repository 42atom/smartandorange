// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: KyDDGn4_M-r
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
import Button from "../../Button"; // plasmic-import: YO5Bwb9purCqu/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicLoginInput.module.css"; // plasmic-import: KyDDGn4_M-r/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: AO1hQKEExk65Hm/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: P8LQPjDHPd/icon
import Icon5Icon from "./icons/PlasmicIcon__Icon5"; // plasmic-import: A0Me8Phykv/icon

export const PlasmicLoginInput__VariantProps = new Array("mailState");

export const PlasmicLoginInput__ArgProps = new Array("confirm");

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

function PlasmicLoginInput__RenderFunc(props) {
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
        path: "phoneInput.value",
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
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnl9I0Oib3VOwY()
  });
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
        sty.register,
        {
          [sty.registermailState]: hasVariant($state, "mailState", "mailState")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__jvDde, {
          [sty.freeBoxmailState__jvDdeilXmh]: hasVariant(
            $state,
            "mailState",
            "mailState"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__lEnd, {
            [sty.freeBoxmailState__lEndilXmh]: hasVariant(
              $state,
              "mailState",
              "mailState"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.freeBox__msHJc)} />
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__auRyk
            )}
          >
            {"使用手机登录"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__st9Mq)} />
        </p.Stack>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__yP6Rq)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__mbQty, {
                [sty.buttonmailState__mbQtYilXmh]: hasVariant(
                  $state,
                  "mailState",
                  "mailState"
                )
              })}
              color={"white"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__c07P)}
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
                            interactionUuid: "35-iQhq43l2",
                            componentUuid: "KyDDGn4_M-r",
                            argName: "vgroup"
                          },
                          () => "mailState"
                        ),
                        operation: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "35-iQhq43l2",
                            componentUuid: "KyDDGn4_M-r",
                            argName: "operation"
                          },
                          () => 6
                        ),
                        value: __wrapUserFunction(
                          {
                            type: "InteractionArgLoc",
                            actionName: "updateVariant",
                            interactionUuid: "35-iQhq43l2",
                            componentUuid: "KyDDGn4_M-r",
                            argName: "value"
                          },
                          () => "mailState"
                        )
                      };
                      return __wrapUserFunction(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariant",
                          interactionUuid: "35-iQhq43l2",
                          componentUuid: "KyDDGn4_M-r"
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
                      interactionUuid: "35-iQhq43l2",
                      componentUuid: "KyDDGn4_M-r"
                    },
                    $steps["updateMailRegister"]
                  );
                }
              }}
              showStartIcon={true}
              startIcon={
                <Icon7Icon
                  className={classNames(projectcss.all, sty.svg__mkJgO, {
                    [sty.svgmailState__mkJgOilXmh]: hasVariant(
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
                  sty.text__eu2F,
                  {
                    [sty.textmailState__eu2FilXmh]: hasVariant(
                      $state,
                      "mailState",
                      "mailState"
                    )
                  }
                )}
              >
                {hasVariant($state, "mailState", "mailState")
                  ? "手机登录"
                  : hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "手机登录"
                  : "手机登录"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__bikem, {
                [sty.buttonmailState__bikemilXmh]: hasVariant(
                  $state,
                  "mailState",
                  "mailState"
                )
              })}
              color={"white"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___9K9Yh)}
                  role={"img"}
                />
              }
              showStartIcon={true}
              startIcon={
                <Icon5Icon
                  className={classNames(projectcss.all, sty.svg__nnoy, {
                    [sty.svgmailState__nnoyilXmh]: hasVariant(
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
                  sty.text__eaUqw,
                  {
                    [sty.textmailState__eaUqwilXmh]: hasVariant(
                      $state,
                      "mailState",
                      "mailState"
                    )
                  }
                )}
              >
                {hasVariant($state, "mailState", "mailState")
                  ? "邮箱登录"
                  : "邮箱登录"}
              </div>
            </Button>
          </p.Stack>
        ) : null}
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
              data-plasmic-name={"phoneInput"}
              data-plasmic-override={overrides.phoneInput}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.phoneInput,
                ``,
                {
                  [sty.phoneInputmailState]: hasVariant(
                    $state,
                    "mailState",
                    "mailState"
                  )
                }
              )}
              name={"phone"}
              onChange={e => {
                p.generateStateOnChangeProp($state, ["phoneInput", "value"])(
                  e.target.value
                );
              }}
              placeholder={"手机号"}
              ref={ref => {
                $refs["phoneInput"] = ref;
              }}
              size={1}
              type={"tel"}
              value={
                p.generateStateValueProp($state, ["phoneInput", "value"]) ?? ""
              }
            />

            {true ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jKvC4)}
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
                  name={"code"}
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
                  data-plasmic-name={"getCodeBtn"}
                  data-plasmic-override={overrides.getCodeBtn}
                  className={classNames("__wab_instance", sty.getCodeBtn, {
                    [sty.getCodeBtnmailState]: hasVariant(
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
              name={"email"}
              onChange={e => {
                p.generateStateOnChangeProp($state, ["mail", "value"])(
                  e.target.value
                );
              }}
              placeholder={"填写已注册的邮箱"}
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
                className={classNames(projectcss.all, sty.freeBox__iuJrY)}
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
                  name={"password"}
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
            sty.text___3Z8A0
          )}
        >
          <React.Fragment>
            <React.Fragment>{""}</React.Fragment>
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
                href={"/register"}
                platform={"nextjs"}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ color: "#2CCF24" }}
                  >
                    {"没有账户？马上注册"}
                  </span>
                </React.Fragment>
              </p.PlasmicLink>
            }

            <React.Fragment>{""}</React.Fragment>
          </React.Fragment>
        </div>
        {p.renderPlasmicSlot({
          defaultContents: (
            <Button
              className={classNames("__wab_instance", sty.button___6B0Vj)}
              color={"green"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__vBbs9)}
                  role={"img"}
                />
              }
              link={`/workspaces`}
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vkPYh
                )}
              >
                {"确 认"}
              </div>
            </Button>
          ),

          value: args.confirm
        })}
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  register: [
    "register",
    "mbRegisterInput",
    "phoneInput",
    "code",
    "getCodeBtn",
    "mailRegisterInput",
    "mail",
    "mailPassword",
    "link"
  ],

  mbRegisterInput: ["mbRegisterInput", "phoneInput", "code", "getCodeBtn"],
  phoneInput: ["phoneInput"],
  code: ["code"],
  getCodeBtn: ["getCodeBtn"],
  mailRegisterInput: ["mailRegisterInput", "mail", "mailPassword"],
  mail: ["mail"],
  mailPassword: ["mailPassword"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLoginInput__ArgProps,
          internalVariantPropNames: PlasmicLoginInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "register") {
    func.displayName = "PlasmicLoginInput";
  } else {
    func.displayName = `PlasmicLoginInput.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginInput = Object.assign(
  // Top-level PlasmicLoginInput renders the root element
  makeNodeComponent("register"),
  {
    // Helper components rendering sub-elements
    mbRegisterInput: makeNodeComponent("mbRegisterInput"),
    phoneInput: makeNodeComponent("phoneInput"),
    code: makeNodeComponent("code"),
    getCodeBtn: makeNodeComponent("getCodeBtn"),
    mailRegisterInput: makeNodeComponent("mailRegisterInput"),
    mail: makeNodeComponent("mail"),
    mailPassword: makeNodeComponent("mailPassword"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicLoginInput
    internalVariantProps: PlasmicLoginInput__VariantProps,
    internalArgProps: PlasmicLoginInput__ArgProps
  }
);

export default PlasmicLoginInput;
/* prettier-ignore-end */
