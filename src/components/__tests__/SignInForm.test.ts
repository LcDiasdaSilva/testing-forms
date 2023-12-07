import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils"

import Component from '../SignInForm.vue'




describe('SignInForm', () => {
  const wrapper = mount(Component, {})

  it('deve testar se existe um [form] com id [form-sign-in]', () => {
    const form = wrapper.find('[id="form-sign-in"]');
    expect(form.element.tagName.toLowerCase()).toBe('form');
  })
  it('deve verificar se existe um input type [text] com id [input-name] e placeholder [Digite seu nome]', () => {
    expect(wrapper.find('input[id="input-name"]')).toBeTruthy()
    expect(wrapper.find('input[id="input-name"]').attributes('type')).toBe('text')
    expect(wrapper.find('input[id="input-name"]').attributes('placeholder')).toBe('Digite seu nome')
  })
  it('deve verificar se existe um label com for [input-name] com texto [Nome]', () => {
    const target = wrapper.find('[for="input-name"]');
    expect(target.element.tagName.toLowerCase()).toBe('label');
    expect(target.text()).toBe('Nome')
  })

  it('deve inserir e verificar valor no campo nome', async () => {
    const inputName = wrapper.find('input[id="input-name"]')
    await inputName.setValue('Luis Carlos Dias')
    expect((inputName.element as any).value).toBe('Luis Carlos Dias')
  })

  it('deve testar se existe input type [text] com id [input-email] e placeholder [Digite seu e-mail]', () => {
    expect(wrapper.find('input[id="input-email"]')).toBeTruthy()
    expect(wrapper.find('input[id="input-email"]').attributes('type')).toBe('text')
    expect(wrapper.find('input[id="input-email"]').attributes('placeholder')).toBe('Digite seu e-mail')
  })
  it('deve testar se existe label for [input-email] com texto [E-mail]', () => {
    const target = wrapper.find('[for="input-email"]');
    expect(target.element.tagName.toLowerCase()).toBe('label');
    expect(target.text()).toBe('E-mail')
  })

  it('deve inserir e verificar valor no campo email', async () => {
    const inputName = wrapper.find('input[id="input-email"]')
    await inputName.setValue('luis@teste.com')
    expect((inputName.element as any).value).toBe('luis@teste.com')
  })

  it('deve testar se existe input type [password] com id [input-password] e placeholder [Digite sua senha]', () => {
    expect(wrapper.find('input[id="input-password"]')).toBeTruthy()
    expect(wrapper.find('input[id="input-password"]').attributes('type')).toBe('password')
    expect(wrapper.find('input[id="input-password"]').attributes('placeholder')).toBe('Digite sua senha')
  })
  it('deve testar se existe label for [input-password] com texto [Senha]', () => {
    const target = wrapper.find('[for="input-password"]');
    expect(target.element.tagName.toLowerCase()).toBe('label');
    expect(target.text()).toBe('Senha')
  })

  it('deve inserir e verificar valor no campo senha', async () => {
    const inputName = wrapper.find('input[id="input-password"]')
    await inputName.setValue('123456')
    expect((inputName.element as any).value).toBe('123456')
  })

  it('deve verificar se existe um botão clicável type [submit] com id [btn-register] e texto [Cadastrar]', async () => {
    const button = wrapper.find('[id="btn-register"]');
    expect(button.attributes('type')).toBe('submit')
    expect(button.text()).toBe('Cadastrar')
    expect(button.attributes('disabled')).toBeFalsy();
  })

  it('deve verificar se ao clicar no botão com os campos preenchidos corretamente, os valores são emitidos', async () => {

    const button = wrapper.find('[id="btn-register"]');
    const form = wrapper.find('[id="form-sign-in"]');

    await wrapper.find('input[id="input-name"]').setValue('Luis Carlos Dias')
    await wrapper.find('input[id="input-email"]').setValue('lcdias@teste.com')
    await wrapper.find('input[id="input-password"]').setValue('123456')

    await button.trigger('click.prevent');
    expect(wrapper.vm.payload).toEqual({
      name: "Luis Carlos Dias",
      email: "lcdias@teste.com",
      password: "123456",
    });

    await form.trigger('submit.prevent')

    expect((wrapper.emitted() as any).submit[0][0]).toEqual({
      name: "Luis Carlos Dias",
      email: "lcdias@teste.com",
      password: "123456",
    });

  })



})