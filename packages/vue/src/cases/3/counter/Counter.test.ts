import { mount } from "@vue/test-utils";
import Counter from "./Counter.vue";

function expectedCounterContent(value: number) {
  return `Counter: ${value}`;
}

describe("Counter", () => {
  it("should be mounted", async () => {
    expect(Counter).toBeTruthy();
  });

  it("should count up on button presses", async () => {
    const wrapper = mount(Counter);

    const counterText = wrapper.get("#counter");

    const increaseCounterButton = wrapper.get("#increase");

    expect(counterText.text()).toEqual(expectedCounterContent(0));

    await increaseCounterButton.trigger("click");

    expect(counterText.text()).toEqual(expectedCounterContent(1));
  });

  it("should count down on button presses", async () => {
    const wrapper = mount(Counter);

    const counterText = wrapper.get("#counter");

    const decreaseButton = wrapper.get("#decrease");

    expect(counterText.text()).toEqual(expectedCounterContent(0));

    await decreaseButton.trigger("click");

    expect(counterText.text()).toEqual(expectedCounterContent(-1));
  });
});
