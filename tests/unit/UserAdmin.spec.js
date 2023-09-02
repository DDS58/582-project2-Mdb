import { mount } from "@vue/test-utils";
import UserAdmin from "@/components/UserAdmin.vue";

describe("UserAdmin.vue", () => {
  it("emits 'setUserRole' event when the admin role is clicked", async () => {
    const wrapper = mount(UserAdmin);
    await wrapper.find("li").trigger("click");

    expect(wrapper.emitted("setUserRole")).toBeTruthy();
    expect(wrapper.emitted("setUserRole")[0]).toEqual(["admin"]);
  });
});
