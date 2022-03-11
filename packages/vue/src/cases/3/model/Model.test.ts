import { mount } from "@vue/test-utils";
import Model from "./Model.vue";

function expectedGreeting(name: string) {
  return `Greetings ${name || "Unknown"}`;
}

test("Mounted Component", async () => {
  expect(Model).toBeTruthy();
});

test("Functionality", async () => {
  const wrapper = mount(Model);

  const greetingText = wrapper.get("#greeting");

  const usernameInput = wrapper.get("#input");

  expect(greetingText.text()).toEqual(expectedGreeting(""));

  await usernameInput.setValue("John");

  expect(greetingText.text()).toEqual(expectedGreeting("John"));
});
