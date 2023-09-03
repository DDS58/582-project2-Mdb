import { mount } from "@vue/test-utils";
import RateDown from "@/components/RateDown.vue";

describe("RateDown.vue", () => {
  it("emits 'rating-selected' event when rating is changed", async () => {
    const wrapper = mount(RateDown);
    const select = wrapper.find("select");

    await select.setValue(5);

    expect(wrapper.emitted("rating-selected")).toBeTruthy();
    expect(wrapper.emitted("rating-selected")[0]).toEqual([5]);
  });
});
