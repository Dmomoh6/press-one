/* eslint-disable no-undef */
import { mount } from "@vue/test-utils"
import App from "@/App.vue"
import axios from "axios"

describe("App.vue", () => {
  it("renders the app", () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it("renders the header", () => {
    const wrapper = mount(App)
    const header = wrapper.findComponent({ name: "Header" })
    expect(header.exists()).toBe(true)
  })

  it("renders the background", () => {
    const wrapper = mount(App)
    const background = wrapper.find(".background")
    expect(background.exists()).toBe(true)
  })

  it("renders the first section", () => {
    const wrapper = mount(App)
    const firstSection = wrapper.find("#first-section")
    expect(firstSection.exists()).toBe(true)
  })

  it("renders the second section", () => {
    const wrapper = mount(App)
    const secondSection = wrapper.find("#second-section")
    expect(secondSection.exists()).toBe(true)
  })

  it("renders the third section", () => {
    const wrapper = mount(App)
    const thirdSection = wrapper.find("#third-section")
    expect(thirdSection.exists()).toBe(true)
  })

  it("renders the fourth section", () => {
    const wrapper = mount(App)
    const fourthSection = wrapper.find("#fourth-section")
    expect(fourthSection.exists()).toBe(true)
  })

  it("renders the fifth section", () => {
    const wrapper = mount(App)
    const fifthSection = wrapper.find("#fifth-section")
    expect(fifthSection.exists()).toBe(true)
  })

  it("isScrolled is initially false", () => {
    const wrapper = mount(App)
    expect(wrapper.vm.isScrolled).toBe(false)
  })

  it("isScrolled becomes true after scrolling", () => {
    const wrapper = mount(App)
    expect(wrapper.vm.isScrolled).toBe(false)
    window.scrollY = 60
    wrapper.vm.handleScroll()
    expect(wrapper.vm.isScrolled).toBe(true)
  })

  it("fetches and populates the plans data", async () => {
    const axiosMock = jest.spyOn(axios, "get")
    axiosMock.mockResolvedValue({
      data: {
        contents:
          '{"data":[{"id":1,"name":"Starter Plan","amount":"25000","description":"For businesses with few customers","cta":"Subscribe Here","call_reception":"Receive calls only","calls_per_week":"Less than 30 calls per week","agent":"Shared agents"},{"id":2,"name":"Growth Plan","amount":"50000","description":"For growing businesses","cta":"Subscribe Here","call_reception":"Receive and make calls","calls_per_week":"30 - 70 calls per week","agent":"Semi-dedicated agents"},{"id":3,"name":"All Access","amount":"Custom","description":"For e-commerce and retail businesses","cta":"Calculate Your Cost","call_reception":"Receive and make calls","calls_per_week":"You choose","agent":"Fully dedicated agents"}]}',
      },
    })

    const wrapper = mount(App)

    await wrapper.vm.$nextTick()

    expect(axiosMock).toHaveBeenCalledWith(
      "https://api.allorigins.win/get?url=https%3A%2F%2Fapi.jsonserve.com%2FswQ1ic"
    )

    expect(wrapper.vm.plans).toEqual([
      {
        id: 1,
        name: "Starter Plan",
        amount: "25000",
        description: "For businesses with few customers",
        cta: "Subscribe Here",
        call_reception: "Receive calls only",
        calls_per_week: "Less than 30 calls per week",
        agent: "Shared agents",
      },
      {
        id: 2,
        name: "Growth Plan",
        amount: "50000",
        description: "For growing businesses",
        cta: "Subscribe Here",
        call_reception: "Receive and make calls",
        calls_per_week: "30 - 70 calls per week",
        agent: "Semi-dedicated agents",
      },
      {
        id: 3,
        name: "All Access",
        amount: "Custom",
        description: "For e-commerce and retail businesses",
        cta: "Calculate Your Cost",
        call_reception: "Receive and make calls",
        calls_per_week: "You choose",
        agent: "Fully dedicated agents",
      },
    ])
  })
})
