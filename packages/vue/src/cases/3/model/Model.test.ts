import { mount } from "@vue/test-utils";
import Model from "./Model.vue";

function expectedGreeting(name: string) {
  return `Greetings ${name || "Unknown"}`;
}

describe("Model", () => {
  it("should be mounted", async () => {
    expect(Model).toBeTruthy();
  });

  it("should two-way-bind the input and the text", async () => {
    const wrapper = mount(Model);

    const greetingText = wrapper.get("#greeting");

    const usernameInput = wrapper.get("#input");

    expect(greetingText.text()).toEqual(expectedGreeting(""));

    await usernameInput.setValue("John");

    expect(greetingText.text()).toEqual(expectedGreeting("John"));
  });
});
