import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";

import Button from "../../src/components/Button/index.vue";

describe("Button.spec.ts", () => {
  const Component = defineComponent(Button);

  test("Rendering a button with default settings", () => {
    const wrapper = mount(Component);
    const button = wrapper.find('[data-test="button"]');

    expect(button.attributes("disabled")).toBeFalsy();
    expect(button.classes()).toContain("button");
    expect(button.classes()).toContain("button:glassy");
    expect(button.classes()).toContain("button--medium");
  });

  test("Renders a button with a given icon class", () => {
    const wrapper = mount(Component, {
      props: { icon: "icon-*" },
    });

    const icon = wrapper.find('[data-test="icon"]');
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain("icon-*");
  });

  test("Renders a flex reversed button content", () => {
    const wrapper = mount(Component, {
      props: { reverse: true },
    });

    const button = wrapper.find('[data-test="button"]');
    expect(button.classes()).toContain("button--reverse");
  });

  test("Renders a button with the default slot content", () => {
    const wrapper = mount(Component, {
      slots: { default: "Click Here" },
    });

    const slot = wrapper.find('[data-test="slot"]');
    expect(slot.text()).toBe("Click Here");
  });
});
