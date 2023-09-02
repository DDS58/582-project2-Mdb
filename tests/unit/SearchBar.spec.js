import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("emits 'search' event when input changes", async () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find("input[type='text']");

    input.setValue("Test");
    input.trigger("input");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted("search")).toBeTruthy();
    expect(wrapper.emitted("search")[0]).toEqual(["Test"]);
  });
});
