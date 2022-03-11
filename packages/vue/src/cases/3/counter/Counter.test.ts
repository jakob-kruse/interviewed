import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

function expectedCounterContent(value: number) {
  return `Counter: ${value}`;
}

test("Mounted Component", async () => {
  expect(Counter).toBeTruthy();
});

test("Functionality", async () => {
  const wrapper = mount(Counter);

  const counterText = wrapper.get("#counter");

  const increaseCounterButton = wrapper.get("#increase");

  expect(counterText.text()).toEqual(expectedCounterContent(0));

  await increaseCounterButton.trigger("click");

  expect(counterText.text()).toEqual(expectedCounterContent(1));
});
