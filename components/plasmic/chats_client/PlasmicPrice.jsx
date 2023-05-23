// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: A7lxlJD3kKn
import * as React from "react";
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
import Switch from "../../Switch"; // plasmic-import: pqoW1wXqfNN/component
import Button from "../../Button"; // plasmic-import: YO5Bwb9purCqu/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicPrice.module.css"; // plasmic-import: A7lxlJD3kKn/css
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: MTyawrbN6uF/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: AO1hQKEExk65Hm/icon

export const PlasmicPrice__VariantProps = new Array("switchOn");

export const PlasmicPrice__ArgProps = new Array();

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

function PlasmicPrice__RenderFunc(props) {
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
        path: "_switch.isChecked",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          hasVariant($state, "switchOn", "switchOn") ? "isChecked" : undefined
      },
      {
        path: "switchOn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.switchOn
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnl9I0Oib3VOwY()
  });
  return true ? (
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
      <div className={classNames(projectcss.all, sty.freeBox__wpdfR)}>
        <Switch
          data-plasmic-name={"_switch"}
          data-plasmic-override={overrides._switch}
          className={classNames("__wab_instance", sty._switch, {
            [sty._switchswitchOn]: hasVariant($state, "switchOn", "switchOn")
          })}
          isChecked={
            p.generateStateValueProp($state, ["_switch", "isChecked"]) ?? false
          }
          name={``}
          onChange={async (...eventArgs) => {
            ((...eventArgs) => {
              p.generateStateOnChangeProp($state, ["_switch", "isChecked"])(
                eventArgs[0]
              );
            }).apply(null, eventArgs);
            (async isChecked => {
              const $steps = {};
              $steps["updateSwitchOn"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "xTKmhG47a",
                          componentUuid: "A7lxlJD3kKn",
                          argName: "vgroup"
                        },
                        () => "switchOn"
                      ),
                      operation: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "xTKmhG47a",
                          componentUuid: "A7lxlJD3kKn",
                          argName: "operation"
                        },
                        () => 2
                      ),
                      value: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariant",
                          interactionUuid: "xTKmhG47a",
                          componentUuid: "A7lxlJD3kKn",
                          argName: "value"
                        },
                        () => "switchOn"
                      )
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "xTKmhG47a",
                        componentUuid: "A7lxlJD3kKn"
                      },
                      () =>
                        (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }
                          const oldValue = p.get($state, vgroup);
                          p.set($state, vgroup, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["updateSwitchOn"] === "object" &&
                typeof $steps["updateSwitchOn"].then === "function"
              ) {
                $steps["updateSwitchOn"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariant",
                    interactionUuid: "xTKmhG47a",
                    componentUuid: "A7lxlJD3kKn"
                  },
                  $steps["updateSwitchOn"]
                );
              }
            }).apply(null, eventArgs);
          }}
        >
          {"年付更优惠"}
        </Switch>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__kKfRk)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___0OzX)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___3X7E)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nwzQf
              )}
            >
              {"免费"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wyOja)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___2Uvu)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__morV
                  )}
                >
                  {"0"}
                </div>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zz2IL,
                  {
                    [sty.textswitchOn__zz2ILETDa]: hasVariant(
                      $state,
                      "switchOn",
                      "switchOn"
                    )
                  }
                )}
              >
                {hasVariant($state, "switchOn", "switchOn") ? "元/年" : "元/月"}
              </div>
            </p.Stack>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__zwUuc)} />
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__xSpl)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__vbgN9)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__of702)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__uYtZ)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__rqGss)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__aoMtO)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__ye2En)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qs7EO)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ff2A9
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___3B50E
                    )}
                  >
                    {"每个月免费使用4000字写作额度"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__gepOj)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__cs0YA)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__g6Oc)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__lhUyr)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg___32Pvy)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zgIl)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__jFtwa
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mi6CQ
                    )}
                  >
                    {"适合偶尔的文字工作"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__b552B)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__aIubn)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__g3QOh)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__gCm9C)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__tgoer)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__e7DxX)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mzEa
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__atYj
                    )}
                  >
                    {"精彩体验，AI启蒙"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
            <Button
              className={classNames("__wab_instance", sty.button__sjhEo)}
              color={"white"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__l5NOo)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__o5UY
                )}
              >
                {"免 费"}
              </div>
            </Button>
          </p.Stack>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__yy3Gx, {
            [sty.freeBoxswitchOn__yy3GxETDa]: hasVariant(
              $state,
              "switchOn",
              "switchOn"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__z5Nz, {
              [sty.freeBoxswitchOn__z5NzETDa]: hasVariant(
                $state,
                "switchOn",
                "switchOn"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wTfNi
              )}
            >
              {"普通会员"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lu5Vc)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__yTkcP)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b8QYo,
                    {
                      [sty.textswitchOn__b8QYoETDa]: hasVariant(
                        $state,
                        "switchOn",
                        "switchOn"
                      )
                    }
                  )}
                >
                  {hasVariant($state, "switchOn", "switchOn") ? "160" : "16"}
                </div>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iCggy,
                  {
                    [sty.textswitchOn__iCggyETDa]: hasVariant(
                      $state,
                      "switchOn",
                      "switchOn"
                    )
                  }
                )}
              >
                {hasVariant($state, "switchOn", "switchOn") ? "元/年" : "元/月"}
              </div>
            </p.Stack>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__dbLiH)} />
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__zuakT, {
              [sty.freeBoxswitchOn__zuakTETDa]: hasVariant(
                $state,
                "switchOn",
                "switchOn"
              )
            })}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__kSnX)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__acwUi)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___5AaoR)}
                >
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__xXMku)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__oNKkz)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__mWlgl)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__kXuKd)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9Jlzd
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iCOss
                    )}
                  >
                    {"每月20000字智能写作额度"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rk9R)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__eYsUz)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__z0S8)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__q4VY)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__aQZvv)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lnkuq)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___2Ww7N
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___4Hfdd
                    )}
                  >
                    {"智能文档管理"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___6TOoU)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__kn4Dk)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__mPh)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__vsfM0)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__kcFoa)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zZcmw)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ay9Ca
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pHPul
                    )}
                  >
                    {"热门写作模版"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wEvDc)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___32ReA)}
                >
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__tzixf)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__imt2P)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg___7Mjx9)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___5P0Ao)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xw5Se
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yzIC
                    )}
                  >
                    {"智能绘画生成(即将到来)"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
            <Button
              className={classNames("__wab_instance", sty.button__m9VWj)}
              color={"green"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__eJcl)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mj73
                )}
              >
                {"马上使用"}
              </div>
            </Button>
          </p.Stack>
        </div>
        <div className={classNames(projectcss.all, sty.freeBox___58AgS)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__o3QiS)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__g5WG5
              )}
            >
              {"高级会员"}
            </div>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__gZc7)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__ffeWi)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__btZv9,
                    {
                      [sty.textswitchOn__btZv9ETDa]: hasVariant(
                        $state,
                        "switchOn",
                        "switchOn"
                      )
                    }
                  )}
                >
                  {hasVariant($state, "switchOn", "switchOn") ? "1900" : "192"}
                </div>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hbsgJ,
                  {
                    [sty.textswitchOn__hbsgJETDa]: hasVariant(
                      $state,
                      "switchOn",
                      "switchOn"
                    )
                  }
                )}
              >
                {hasVariant($state, "switchOn", "switchOn") ? "元/年" : "元/月"}
              </div>
            </p.Stack>
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__spXem)} />
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__chWQw)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__soaFm)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__ajq7S)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__gntRz)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__titof)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__bMXx)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__on3Gz)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__omtEx)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__nd1F4
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oT7Wv
                    )}
                  >
                    {"全部普通会员权限"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__veYSr)}
              >
                <div
                  className={classNames(projectcss.all, sty.freeBox___4Bmah)}
                >
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__gLkhM)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__uaP3A)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__n7Yk)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__nv6XT)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zhkJg
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__botAr
                    )}
                  >
                    {"每月100000字智能写作额度"}
                  </div>
                </p.Stack>
              </p.Stack>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hZfRu)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__shVs2)}>
                  <Icon14Icon
                    className={classNames(projectcss.all, sty.svg__r48Ra)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__zrNtf)}
                  >
                    <Icon14Icon
                      className={classNames(projectcss.all, sty.svg__mBCzu)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__aSTen)}
                >
                  {false ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___0Lg1I
                      )}
                    >
                      {"Label"}
                    </div>
                  ) : null}
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xSwx
                    )}
                  >
                    {"自定义问答上下文关联对话"}
                  </div>
                </p.Stack>
              </p.Stack>
            </p.Stack>
            <Button
              className={classNames("__wab_instance", sty.button___5Wh7A)}
              color={"white"}
              endIcon={
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__obP1)}
                  role={"img"}
                />
              }
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yQBc
                )}
              >
                {"购买"}
              </div>
            </Button>
          </p.Stack>
        </div>
      </p.Stack>
    </div>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "_switch"],
  _switch: ["_switch"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPrice__ArgProps,
          internalVariantPropNames: PlasmicPrice__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPrice__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrice";
  } else {
    func.displayName = `PlasmicPrice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrice = Object.assign(
  // Top-level PlasmicPrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _switch: makeNodeComponent("_switch"),
    // Metadata about props expected for PlasmicPrice
    internalVariantProps: PlasmicPrice__VariantProps,
    internalArgProps: PlasmicPrice__ArgProps
  }
);

export default PlasmicPrice;
/* prettier-ignore-end */
