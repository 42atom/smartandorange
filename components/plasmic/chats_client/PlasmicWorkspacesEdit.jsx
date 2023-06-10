// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gRaosoDicn4VUCndSzazbA
// Component: -2p_ZIYW-pY
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
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: EYHwZh9ILg/codeComponent
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponent
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponentHelper
import Select from "../../Select"; // plasmic-import: DBaIAlzZ3jDAe1/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import CreatedContent from "../../CreatedContent"; // plasmic-import: cHu398Tr36/component
import { useScreenVariants as useScreenVariantsnl9I0Oib3VOwY } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nl9_I0oib3VOwY/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_chats_client.module.css"; // plasmic-import: gRaosoDicn4VUCndSzazbA/projectcss
import sty from "./PlasmicWorkspacesEdit.module.css"; // plasmic-import: -2p_ZIYW-pY/css
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 9vHobJ_2KC/icon

export const PlasmicWorkspacesEdit__VariantProps = new Array();

export const PlasmicWorkspacesEdit__ArgProps = new Array("loading");

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

function PlasmicWorkspacesEdit__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          loading: false
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
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ``
      },
      {
        path: "select.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "option1"
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "1"
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
        <title key="title">{PlasmicWorkspacesEdit.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicWorkspacesEdit.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicWorkspacesEdit.pageMetadata.title}
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
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__knM4Q)}
                >
                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__kbEdY)}
                    >
                      {true ? (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__we7Gy
                          )}
                        >
                          <Button
                            className={classNames(
                              "__wab_instance",
                              sty.button__zmrW
                            )}
                            color={"clear"}
                            link={`/workspaces`}
                            showStartIcon={true}
                            size={"minimal"}
                            startIcon={
                              true ? (
                                <Icon3Icon
                                  data-plasmic-name={"svg"}
                                  data-plasmic-override={overrides.svg}
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg
                                  )}
                                  role={"img"}
                                />
                              ) : null
                            }
                            submitsForm={true}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__u4Gln
                              )}
                            >
                              {"返回"}
                            </div>
                          </Button>
                          <div
                            data-plasmic-name={"title"}
                            data-plasmic-override={overrides.title}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.title
                            )}
                          >
                            {"场景名称"}
                          </div>
                        </p.Stack>
                      ) : null}
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ppe2M
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__g0QAg
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__z1MK
                            )}
                          >
                            {"输入提示关键词，点击生成即可获得结果"}
                          </div>
                          <FormWrapper
                            data-plasmic-name={"form"}
                            data-plasmic-override={overrides.form}
                            className={classNames("__wab_instance", sty.form)}
                            extendedOnValuesChange={p.generateStateOnChangeProp(
                              $state,
                              ["form", "value"]
                            )}
                            formItems={[
                              {
                                label: "Name",
                                name: "name",
                                inputType: "Text"
                              },
                              {
                                label: "Message",
                                name: "message",
                                inputType: "Text Area"
                              }
                            ]}
                            labelCol={{ span: 8, horizontalOnly: true }}
                            layout={"vertical"}
                            mode={undefined}
                            wrapperCol={{ span: 16, horizontalOnly: true }}
                          >
                            <FormItemWrapper
                              className={classNames(
                                "__wab_instance",
                                sty.formField___89WdK
                              )}
                              label={
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__ynMf4
                                  )}
                                >
                                  {"你想写什么？（关键词输入）"}
                                </div>
                              }
                              name={"keywords"}
                              rules={[
                                { ruleType: "required", message: "请填写" }
                              ]}
                            >
                              {(() => {
                                const child$Props = {
                                  autoFocus: true,
                                  bordered: true,
                                  className: classNames(
                                    "__wab_instance",
                                    sty.input
                                  ),
                                  onChange:
                                    p.generateStateOnChangePropForCodeComponents(
                                      $state,
                                      "value",
                                      ["input", "value"],
                                      AntdInput_Helpers
                                    ),
                                  size: "large",
                                  type: "text",
                                  value: p.generateStateValueProp($state, [
                                    "input",
                                    "value"
                                  ])
                                };
                                p.initializeCodeComponentStates(
                                  $state,
                                  [
                                    {
                                      name: "value",
                                      plasmicStateName: "input.value"
                                    }
                                  ],

                                  [],
                                  AntdInput_Helpers ?? {},
                                  child$Props
                                );
                                return (
                                  <AntdInput
                                    data-plasmic-name={"input"}
                                    data-plasmic-override={overrides.input}
                                    {...child$Props}
                                  />
                                );
                              })()}
                            </FormItemWrapper>
                            {true ? (
                              <p.Stack
                                as={"div"}
                                hasGap={true}
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__pYwmg
                                )}
                              >
                                <FormItemWrapper
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__bYsQp
                                  )}
                                  label={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__ixYq
                                      )}
                                    >
                                      {"生成数量"}
                                    </div>
                                  }
                                  name={"number"}
                                  rules={[{ ruleType: "required" }]}
                                >
                                  {(() => {
                                    const child$Props = {
                                      className: classNames(
                                        "__wab_instance",
                                        sty.input2
                                      ),
                                      onChange:
                                        p.generateStateOnChangePropForCodeComponents(
                                          $state,
                                          "value",
                                          ["input2", "value"],
                                          AntdInput_Helpers
                                        ),
                                      size: "large",
                                      type: "number",
                                      value: p.generateStateValueProp($state, [
                                        "input2",
                                        "value"
                                      ])
                                    };
                                    p.initializeCodeComponentStates(
                                      $state,
                                      [
                                        {
                                          name: "value",
                                          plasmicStateName: "input2.value"
                                        }
                                      ],

                                      [],
                                      AntdInput_Helpers ?? {},
                                      child$Props
                                    );
                                    return (
                                      <AntdInput
                                        data-plasmic-name={"input2"}
                                        data-plasmic-override={overrides.input2}
                                        {...child$Props}
                                      />
                                    );
                                  })()}
                                </FormItemWrapper>
                                <FormItemWrapper
                                  className={classNames(
                                    "__wab_instance",
                                    sty.formField__lDubi
                                  )}
                                  hideValidationMessage={false}
                                  label={
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text___38RP
                                      )}
                                    >
                                      {"语气选择"}
                                    </div>
                                  }
                                  name={"tone"}
                                  rules={[{ ruleType: "required" }]}
                                >
                                  <Select
                                    data-plasmic-name={"select"}
                                    data-plasmic-override={overrides.select}
                                    aria-label={"tone"}
                                    className={classNames(
                                      "__wab_instance",
                                      sty.select
                                    )}
                                    name={"语气"}
                                    onChange={(...eventArgs) => {
                                      p.generateStateOnChangeProp($state, [
                                        "select",
                                        "value"
                                      ])(eventArgs[0]);
                                    }}
                                    options={[
                                      { value: "option1", label: "幽默语气" },
                                      { value: "option2", label: "撒娇语气" }
                                    ]}
                                    placeholder={
                                      <div
                                        className={classNames(
                                          projectcss.all,
                                          projectcss.__wab_text,
                                          sty.text__ebRoc
                                        )}
                                      >
                                        {"Select…"}
                                      </div>
                                    }
                                    value={p.generateStateValueProp($state, [
                                      "select",
                                      "value"
                                    ])}
                                  />
                                </FormItemWrapper>
                              </p.Stack>
                            ) : null}
                            <AntdButton
                              className={classNames(
                                "__wab_instance",
                                sty.button__vZ8Y9
                              )}
                              onClick={async () => {
                                const $steps = {};
                              }}
                              shape={"round"}
                              size={"medium"}
                              submitsForm={true}
                              type={"primary"}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__xsAp8
                                )}
                              >
                                {"生成文本"}
                              </div>
                            </AntdButton>
                          </FormWrapper>
                        </p.Stack>
                      </div>
                    </p.Stack>
                  ) : null}
                  {true ? (
                    <CreatedContent
                      data-plasmic-name={"contents"}
                      data-plasmic-override={overrides.contents}
                      className={classNames("__wab_instance", sty.contents)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__y4XMv
                        )}
                      >
                        {"即将开始生成文字"}
                      </div>
                    </CreatedContent>
                  ) : null}
                </p.Stack>
              </section>
            </div>
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
    "svg",
    "title",
    "form",
    "input",
    "input2",
    "select",
    "contents"
  ],

  bkgd: [
    "bkgd",
    "navMenu",
    "section",
    "svg",
    "title",
    "form",
    "input",
    "input2",
    "select",
    "contents"
  ],

  navMenu: ["navMenu"],
  section: [
    "section",
    "svg",
    "title",
    "form",
    "input",
    "input2",
    "select",
    "contents"
  ],

  svg: ["svg"],
  title: ["title"],
  form: ["form", "input", "input2", "select"],
  input: ["input"],
  input2: ["input2"],
  select: ["select"],
  contents: ["contents"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicWorkspacesEdit__ArgProps,
          internalVariantPropNames: PlasmicWorkspacesEdit__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWorkspacesEdit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWorkspacesEdit";
  } else {
    func.displayName = `PlasmicWorkspacesEdit.${nodeName}`;
  }
  return func;
}

export const PlasmicWorkspacesEdit = Object.assign(
  // Top-level PlasmicWorkspacesEdit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    bkgd: makeNodeComponent("bkgd"),
    navMenu: makeNodeComponent("navMenu"),
    section: makeNodeComponent("section"),
    svg: makeNodeComponent("svg"),
    title: makeNodeComponent("title"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    select: makeNodeComponent("select"),
    contents: makeNodeComponent("contents"),
    // Metadata about props expected for PlasmicWorkspacesEdit
    internalVariantProps: PlasmicWorkspacesEdit__VariantProps,
    internalArgProps: PlasmicWorkspacesEdit__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "工作台",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicWorkspacesEdit;
/* prettier-ignore-end */
